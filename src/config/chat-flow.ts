/**
 * The guided chat in the floating widget: two questions (what kind of
 * business, what to fix), then a recommendation built from the service list.
 * Rules, not AI: every answer maps to service ids in `config/services.ts`, so
 * a recommendation can only name a service, link and starting price the site
 * already publishes.
 */

type Localized = { id: string; en: string; zh: string };

export type Industry = {
  id: string;
  label: Localized;
  /** A service this kind of business usually also needs (shown second). */
  companion?: string;
};

export type Need = {
  id: string;
  label: Localized;
  /** Service ids to recommend, best match first. */
  services: string[];
};

export const industries: Industry[] = [
  { id: "retail", label: { id: "Toko / Retail", en: "Shop / Retail", zh: "门店 / 零售" }, companion: "pos" },
  { id: "fnb", label: { id: "Restoran / Kafe", en: "Restaurant / Cafe", zh: "餐厅 / 咖啡馆" }, companion: "pos" },
  { id: "services", label: { id: "Jasa / Layanan", en: "Services", zh: "服务业" }, companion: "crm" },
  { id: "manufacturing", label: { id: "Produksi / Distribusi", en: "Manufacturing / Distribution", zh: "生产 / 分销" }, companion: "erp" },
  { id: "other", label: { id: "Lainnya", en: "Something else", zh: "其他" } },
];

export const needs: Need[] = [
  { id: "sales", label: { id: "Kasir & penjualan", en: "Checkout & sales", zh: "收银与销售" }, services: ["pos"] },
  { id: "operations", label: { id: "Stok, keuangan & operasional", en: "Stock, finance & operations", zh: "库存、财务与运营" }, services: ["erp"] },
  { id: "people", label: { id: "Karyawan, absensi & payroll", en: "Staff, attendance & payroll", zh: "员工、考勤与薪资" }, services: ["hris"] },
  { id: "customers", label: { id: "Pelanggan & tim sales", en: "Customers & sales team", zh: "客户与销售团队" }, services: ["crm"] },
  { id: "website", label: { id: "Website / toko online", en: "Website / online store", zh: "网站 / 网店" }, services: ["website"] },
  { id: "mobile", label: { id: "Aplikasi mobile", en: "Mobile app", zh: "移动应用" }, services: ["mobile"] },
  { id: "reports", label: { id: "Laporan & dashboard", en: "Reports & dashboards", zh: "报表与仪表盘" }, services: ["dashboard"] },
  { id: "automation", label: { id: "Otomasi & integrasi sistem", en: "Automation & integrations", zh: "自动化与系统对接" }, services: ["ai-automation", "api-integration"] },
  { id: "custom", label: { id: "Sistem khusus / belum yakin", en: "Custom system / not sure yet", zh: "定制系统 / 暂不确定" }, services: ["custom-software"] },
];

/** At most this many services are recommended. */
export const MAX_RECOMMENDATIONS = 2;

/** Service id → index into the contact form's `needTypes` list, to preselect the hand-off dropdown. */
export const serviceNeedType: Record<string, number> = {
  "custom-software": 0,
  website: 1,
  mobile: 2,
  erp: 3,
  pos: 4,
  hris: 5,
  crm: 6,
  "ai-automation": 7,
  "api-integration": 7,
  dashboard: 0,
};

export function recommend(industryId: string, needId: string): string[] {
  const need = needs.find((n) => n.id === needId);
  if (!need) return [];
  const picks = [...need.services];
  const companion = industries.find((i) => i.id === industryId)?.companion;
  if (companion && !picks.includes(companion)) picks.push(companion);
  return picks.slice(0, MAX_RECOMMENDATIONS);
}

export const chatFlowText = {
  question1: {
    id: "Bisnis Anda bergerak di bidang apa?",
    en: "What kind of business do you run?",
    zh: "您的业务属于哪个领域？",
  },
  question2: {
    id: "Terima kasih! Apa yang paling ingin Anda rapikan atau bangun?",
    en: "Thanks! What do you most want to fix or build?",
    zh: "谢谢！您最想优化或建设什么？",
  },
  result: {
    id: "Dari jawaban Anda, ini yang paling cocok untuk dibahas:",
    en: "Based on your answers, these fit best:",
    zh: "根据您的回答，以下方案最合适：",
  },
  resultNote: {
    id: "Harga bersifat mulai dari; angka akhir mengikuti fitur dan skala bisnis Anda.",
    en: "Prices are starting points; the final figure depends on your features and scale.",
    zh: "价格为起价，最终金额取决于功能与业务规模。",
  },
  closing: {
    id: "Mau lanjut dibahas bersama tim kami?",
    en: "Want to go through it with our team?",
    zh: "想与我们的团队进一步沟通吗？",
  },
  startingFrom: { id: "Mulai dari", en: "From", zh: "起价" },
  viewDetail: { id: "Lihat detail", en: "View details", zh: "查看详情" },
  restart: { id: "Mulai ulang", en: "Start over", zh: "重新开始" },
  summary: {
    business: { id: "Jenis usaha", en: "Business", zh: "业务类型" },
    need: { id: "Kebutuhan", en: "Need", zh: "需求" },
    recommended: { id: "Rekomendasi", en: "Recommended", zh: "推荐" },
  },
};
