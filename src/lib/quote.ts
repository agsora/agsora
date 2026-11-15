export type QuoteItem = { name: string; qty: number; unit_price: number; note?: string };

export const QUOTE_STATUSES = ["draft", "pending", "approved", "rejected", "sent"] as const;
export type QuoteStatus = (typeof QUOTE_STATUSES)[number];

export const quoteStatusLabel: Record<QuoteStatus, string> = {
  draft: "Draft",
  pending: "Menunggu persetujuan",
  approved: "Disetujui",
  rejected: "Perlu revisi",
  sent: "Terkirim",
};

export type Quote = {
  id: number;
  lead_id: number | null;
  sales_id: number | null;
  client_name: string;
  client_email: string | null;
  client_company: string | null;
  items: QuoteItem[];
  discount_pct: number;
  tax_pct: number;
  valid_until: string | null;
  terms: string | null;
  /** "50-50" (default) or "30-50-20"; missing until the payment_plan migration is applied. */
  payment_plan?: string | null;
  /** Public client link, acceptance and view tracking; missing until the portal migration is applied. */
  share_token?: string | null;
  viewed_at?: string | null;
  accepted_at?: string | null;
  accepted_name?: string | null;
  client_note?: string | null;
  /** Project tracking and handover; missing until the projects migration is applied. */
  project_stage?: ProjectStage | null;
  project_log?: { at: string; stage: ProjectStage; note: string }[] | null;
  contract_active_at?: string | null;
  bast_at?: string | null;
  /** Set on an addendum: the quote of the original agreement. */
  parent_id?: number | null;
  status: QuoteStatus;
  review_note: string | null;
  approved_at: string | null;
  sent_at: string | null;
  created_at: string;
  updated_at: string;
};

export const DEFAULT_TERMS =
  "Pembayaran mengikuti skema termin yang dipilih pada penawaran ini. Harga belum termasuk biaya domain, hosting, dan layanan pihak ketiga kecuali disebutkan. Lingkup pekerjaan mengikuti item pada penawaran ini; perubahan lingkup dibahas terpisah.";

export function computeTotals(items: QuoteItem[], discountPct: number, taxPct: number) {
  const subtotal = items.reduce((s, i) => s + i.qty * i.unit_price, 0);
  const discount = Math.round((subtotal * discountPct) / 100);
  const taxable = subtotal - discount;
  const tax = Math.round((taxable * taxPct) / 100);
  return { subtotal, discount, taxable, tax, total: taxable + tax };
}

/** Human-readable number derived from the id, so it never needs storing: AGS/2026/0042. */
export const quoteNumber = (q: Pick<Quote, "id" | "created_at">) =>
  `AGS/${new Date(q.created_at).getUTCFullYear()}/${String(q.id).padStart(4, "0")}`;

/** Parse and clamp items coming from a form; invalid rows are dropped. */
export function parseItems(raw: unknown): QuoteItem[] {
  let list: unknown;
  try {
    list = typeof raw === "string" ? JSON.parse(raw) : raw;
  } catch {
    return [];
  }
  if (!Array.isArray(list)) return [];
  return list
    .slice(0, 30)
    .map((r) => {
      const o = (r ?? {}) as Record<string, unknown>;
      const name = String(o.name ?? "").trim().slice(0, 200);
      const qty = Math.min(9999, Math.max(1, Math.floor(Number(o.qty) || 0)));
      const unit_price = Math.min(1e11, Math.max(0, Math.floor(Number(o.unit_price) || 0)));
      const note = String(o.note ?? "").trim().slice(0, 300);
      return name ? ({ name, qty, unit_price, ...(note ? { note } : {}) } as QuoteItem) : null;
    })
    .filter((x): x is QuoteItem => x !== null);
}

export const idr = (n: number) => `Rp${Math.round(n).toLocaleString("id-ID")}`;

/** Payment schedules offered on a quote: two instalments (default) or three. */
export const PAYMENT_PLANS = {
  "50-50": [
    { pct: 50, id: "Uang muka, sebelum pekerjaan dimulai", en: "Down payment, before work starts" },
    { pct: 50, id: "Pelunasan, paling lambat 7 hari setelah Serah Terima", en: "Final payment, within 7 days after Handover" },
  ],
  "30-50-20": [
    { pct: 30, id: "Uang muka, sebelum pekerjaan dimulai", en: "Down payment, before work starts" },
    { pct: 50, id: "Termin 2, saat versi uji (staging/demo) siap untuk UAT", en: "Instalment 2, when the test version (staging/demo) is ready for UAT" },
    { pct: 20, id: "Pelunasan, paling lambat 7 hari setelah Serah Terima", en: "Final payment, within 7 days after Handover" },
  ],
} as const;
export type PaymentPlan = keyof typeof PAYMENT_PLANS;
export const paymentPlanLabel: Record<PaymentPlan, string> = { "50-50": "2 kali: 50% - 50%", "30-50-20": "3 kali: 30% - 50% - 20%" };
export const planOf = (q: { payment_plan?: string | null }): PaymentPlan => (q.payment_plan === "30-50-20" ? "30-50-20" : "50-50");

/** Subscription-style items (maintenance, monthly SEO, hosting/domain) are billed per period, not in project instalments. */
export const isRecurringItem = (name: string) => {
  if (/pemeliharaan|maintenance|langganan|subscription|konten media sosial|kelola iklan/i.test(name)) return true;
  // Bundles and builds that merely mention hosting/SEO are project work, not subscriptions.
  if (/paket|bundle|website|company profile|landing|toko online|aplikasi|sistem|\bpos\b|hris|crm|erp/i.test(name)) return false;
  return /seo|hosting|domain/i.test(name);
};

/** Totals split into the one-time project part (paid in instalments) and the recurring part (billed per period). */
export function splitTotals(q: Pick<Quote, "items" | "discount_pct" | "tax_pct">) {
  const d = Number(q.discount_pct);
  const x = Number(q.tax_pct);
  const recurringItems = q.items.filter((i) => isRecurringItem(i.name));
  const oneTimeItems = q.items.filter((i) => !isRecurringItem(i.name));
  return {
    all: computeTotals(q.items, d, x),
    oneTime: computeTotals(oneTimeItems, d, x),
    recurring: computeTotals(recurringItems, d, x),
    oneTimeItems,
    recurringItems,
  };
}

/** Instalment amounts for a total; the last one absorbs rounding so they always add up. */
export function paymentSchedule(plan: PaymentPlan, total: number) {
  const steps = PAYMENT_PLANS[plan];
  let paid = 0;
  return steps.map((s, i) => {
    const amount = i === steps.length - 1 ? total - paid : Math.round((total * s.pct) / 100);
    paid += amount;
    return { ...s, amount };
  });
}

export const PROJECT_STAGES = [
  { key: "kickoff", label: "Kickoff" },
  { key: "analisis", label: "Analisis & desain" },
  { key: "pengembangan", label: "Pengembangan" },
  { key: "uat", label: "UAT klien" },
  { key: "golive", label: "Go-live" },
  { key: "selesai", label: "Selesai" },
] as const;
export type ProjectStage = (typeof PROJECT_STAGES)[number]["key"];

export type Invoice = {
  id: number;
  quote_id: number;
  /** 1..3 = project instalment, 0 = subscription services, null = a recurring subscription bill. */
  seq: number | null;
  subscription_id?: number | null;
  label: string;
  amount: number;
  due_date: string;
  status: "unpaid" | "paid" | "void";
  paid_at: string | null;
  sent_at: string | null;
  last_reminder_at: string | null;
  created_at: string;
};

export const invoiceNumber = (inv: Pick<Invoice, "id" | "created_at">) =>
  `INV/${new Date(inv.created_at).getUTCFullYear()}/${String(inv.id).padStart(4, "0")}`;

/** Every bill a quote can produce: each project instalment plus one for subscription services. */
export function billableParts(q: Pick<Quote, "items" | "discount_pct" | "tax_pct" | "payment_plan">) {
  const split = splitTotals(q);
  const parts: { seq: number; label: string; amount: number }[] = [];
  if (split.oneTimeItems.length) {
    paymentSchedule(planOf(q), split.oneTime.total).forEach((s, i) => parts.push({ seq: i + 1, label: `Termin ${i + 1} (${s.pct}%): ${s.id}`, amount: s.amount }));
  }
  if (split.recurringItems.length) parts.push({ seq: 0, label: "Layanan berlangganan (pemeliharaan, hosting, SEO)", amount: split.recurring.total });
  return parts;
}

/** Public client page for a quote. */
export const clientLink = (base: string, token: string) => `${base.replace(/\/$/, "")}/p/${token}`;
