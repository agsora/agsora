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
  status: QuoteStatus;
  review_note: string | null;
  approved_at: string | null;
  sent_at: string | null;
  created_at: string;
  updated_at: string;
};

export const DEFAULT_TERMS =
  "Pembayaran 50% di muka dan 50% setelah serah terima. Harga belum termasuk biaya domain, hosting, dan layanan pihak ketiga kecuali disebutkan. Lingkup pekerjaan mengikuti item pada penawaran ini; perubahan lingkup dibahas terpisah.";

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
