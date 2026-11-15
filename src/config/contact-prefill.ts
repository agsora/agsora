/**
 * Pre-fills the contact form from the link that brought the visitor there, so they do not retype what they already
 * chose: ?plan= (price list ids, comma separated), ?template= (a live demo), ?industry= (an industry page).
 * Indexes refer to t.contactForm.needTypes / budgetRanges, which have the same order in every language.
 */
import { industries } from "@/config/industries";
import { TEMPLATES } from "@/config/templates";
import type { Locale } from "@/i18n/routing";
import { formatRupiah } from "@/lib/utils";

/** needTypes: 0 custom, 1 website, 2 mobile, 3 ERP, 4 POS, 5 HRIS, 6 CRM, 7 AI/API, 8 other. */
const NEED_BY_PLAN: Record<string, number> = {
  "custom-software": 0, "project-management": 0, clinic: 0, property: 0, school: 0, lms: 0, dashboard: 0, membership: 0,
  "landing-page": 1, "company-profile": 1, "starter-bundle": 1, website: 1, ecommerce: 1, booking: 1, pwa: 1,
  mobile: 2,
  "erp-basic": 3, "erp-advanced": 3, inventory: 3, accounting: 3,
  pos: 4, "restaurant-pos": 4,
  hris: 5, attendance: 5, payroll: 5,
  crm: 6, helpdesk: 6,
  "ai-automation": 7, "whatsapp-chatbot": 7, "api-integration": 7, "payment-integration": 7, "marketplace-integration": 7, "data-migration": 7, "e-invoice": 7, iot: 7, "report-automation": 7,
};
const NEED_BY_TEMPLATE: Record<string, number> = { kasir: 4, dashboard: 3 };
const NEED_BY_INDUSTRY: Record<string, number> = { ritel: 4, kuliner: 4, laundry: 4, distribusi: 3, manufaktur: 3, korporasi: 3, "jasa-profesional": 6, umkm: 1 };

/** budgetRanges: < 5 jt, 5–15, 15–30, 30–75, > 75, unsure. */
function budgetIndex(total: number) {
  if (total <= 0) return undefined;
  if (total < 5_000_000) return 0;
  if (total <= 15_000_000) return 1;
  if (total <= 30_000_000) return 2;
  if (total <= 75_000_000) return 3;
  return 4;
}

const TEXT = {
  id: {
    plan: (items: string) => `Saya tertarik dengan: ${items}.\n\nKebutuhan dan kondisi bisnis saya saat ini:\n`,
    demo: (name: string) => `Saya sudah mencoba demo "${name}" dan ingin dibuatkan yang serupa untuk bisnis saya.\n\nPenyesuaian yang saya butuhkan:\n`,
    industry: (name: string) => `Bisnis saya bergerak di bidang ${name}.\n\nMasalah yang ingin saya selesaikan:\n`,
    from: "mulai",
  },
  en: {
    plan: (items: string) => `I'm interested in: ${items}.\n\nMy needs and current situation:\n`,
    demo: (name: string) => `I tried the "${name}" demo and would like something similar for my business.\n\nChanges I need:\n`,
    industry: (name: string) => `My business is in ${name}.\n\nThe problem I want to solve:\n`,
    from: "from",
  },
  zh: {
    plan: (items: string) => `我感兴趣的是：${items}。\n\n我的需求与业务现状：\n`,
    demo: (name: string) => `我体验了"${name}"演示，希望为我的业务做一个类似的系统。\n\n需要调整的地方：\n`,
    industry: (name: string) => `我的业务属于${name}行业。\n\n希望解决的问题：\n`,
    from: "起价",
  },
} as const;

export type Prefill = { need?: number; budget?: number; description?: string };

export function contactPrefill(
  params: URLSearchParams,
  locale: Locale,
  priceList: { id: string; name: Record<Locale, string>; price: number | null }[],
  livePrices: Record<string, number>,
): Prefill {
  const tx = TEXT[locale];
  const planIds = (params.get("plan") ?? "").split(",").filter(Boolean);
  const plans = planIds.map((id) => priceList.find((p) => p.id === id)).filter((p): p is (typeof priceList)[number] => Boolean(p));
  if (plans.length) {
    const priceOf = (p: (typeof plans)[number]) => livePrices[p.id] ?? p.price ?? 0;
    const items = plans.map((p) => (priceOf(p) ? `${p.name[locale]} (${tx.from} ${formatRupiah(priceOf(p), locale)})` : p.name[locale])).join(", ");
    return {
      need: NEED_BY_PLAN[plans[0].id] ?? 8,
      budget: budgetIndex(plans.reduce((n, p) => n + priceOf(p), 0)),
      description: tx.plan(items),
    };
  }

  const tpl = TEMPLATES.find((x) => x.slug === params.get("template"));
  if (tpl) {
    return {
      need: NEED_BY_TEMPLATE[tpl.slug] ?? 1,
      budget: budgetIndex(livePrices[tpl.serviceId] ?? tpl.priceFrom),
      description: tx.demo(tpl.name[locale]),
    };
  }

  const ind = params.get("industry");
  const industry = industries.find((i) => i.slug === ind || i.name.en === ind);
  if (industry) {
    return { need: NEED_BY_INDUSTRY[industry.slug] ?? 0, description: tx.industry(industry.name[locale]) };
  }
  return {};
}
