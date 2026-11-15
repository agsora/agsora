type Localized = { id: string; en: string; zh: string };

/** Stored as-is in the database, so these keys must stay stable; labels live in the dictionaries. */
export const PRICING_CATEGORIES = [
  "Website & Digital",
  "Sistem Bisnis",
  "Automation & Integrasi",
  "Desain & Konten",
  "Infrastruktur & Keamanan",
  "Konsultasi & Pelatihan",
  "Support & Enterprise",
] as const;

export type PricingCategory = (typeof PRICING_CATEGORIES)[number];

export type PricingItem = {
  id: string;
  name: Localized;
  /** Starting price in rupiah, before PPN; null means quoted per project. */
  price: number | null;
  unit?: Localized;
  category: PricingCategory;
};

export const PRICING_UNITS = {
  platform: { id: "/ platform", en: "/ platform", zh: "/ 每平台" },
  month: { id: "/ bulan", en: "/ month", zh: "/ 月" },
  year: { id: "/ tahun", en: "/ year", zh: "/ 年" },
  day: { id: "/ hari kerja", en: "/ working day", zh: "/ 工作日" },
  session: { id: "/ sesi", en: "/ session", zh: "/ 场" },
} as const satisfies Record<string, Localized>;

export type PricingUnitKey = keyof typeof PRICING_UNITS;

/** Whether an item repeats every month (shown separately from one-time costs in the estimator). */
export const isMonthly = (item: Pick<PricingItem, "unit">) => item.unit?.id === PRICING_UNITS.month.id;

const L = (id: string, en: string, zh: string): Localized => ({ id, en, zh });
const { platform, month, year, day, session } = PRICING_UNITS;

/**
 * Corporate pricing for PT Agsora Teknologi Indonesia: a registered company with a project team,
 * written contract, NDA, warranty period and tax invoice. Prices are "from" prices before PPN.
 */
export const customDevPricing: PricingItem[] = [
  // Website & Digital
  { id: "landing-page", name: L("Landing Page", "Landing Page", "落地页"), price: 3_500_000, category: "Website & Digital" },
  { id: "company-profile", name: L("Website Company Profile", "Company Profile Website", "企业官网"), price: 5_500_000, category: "Website & Digital" },
  { id: "starter-bundle", name: L("Paket Starter Korporat (Company Profile + hosting 1 tahun + SEO dasar)", "Corporate Starter Bundle (Company Profile + 1 year hosting + basic SEO)", "企业入门套餐（企业官网 + 1 年主机 + 基础 SEO）"), price: 8_000_000, category: "Website & Digital" },
  { id: "website", name: L("Website + Dashboard Admin", "Website + Admin Dashboard", "网站 + 管理后台"), price: 9_000_000, category: "Website & Digital" },
  { id: "ecommerce", name: L("Website Toko Online", "E-Commerce Website", "电商网站"), price: 12_000_000, category: "Website & Digital" },
  { id: "dashboard", name: L("Dashboard / Laporan", "Dashboard / Reporting", "仪表盘 / 报表"), price: 7_000_000, category: "Website & Digital" },
  { id: "mobile", name: L("Aplikasi Mobile", "Mobile App", "移动应用"), price: 25_000_000, unit: platform, category: "Website & Digital" },

  // Sistem Bisnis
  { id: "pos", name: L("Sistem Kasir (POS) Custom", "Custom POS", "定制 POS 收银系统"), price: 12_000_000, category: "Sistem Bisnis" },
  { id: "hris", name: L("HRIS Custom", "Custom HRIS", "定制 HRIS 人事系统"), price: 25_000_000, category: "Sistem Bisnis" },
  { id: "crm", name: L("CRM Custom", "Custom CRM", "定制 CRM 客户管理"), price: 25_000_000, category: "Sistem Bisnis" },
  { id: "custom-software", name: L("Software Custom", "Custom Software", "定制软件"), price: 25_000_000, category: "Sistem Bisnis" },
  { id: "erp-basic", name: L("ERP Dasar", "ERP Basic", "ERP 基础版"), price: 40_000_000, category: "Sistem Bisnis" },
  { id: "erp-advanced", name: L("ERP Lanjutan", "ERP Advanced", "ERP 进阶版"), price: 150_000_000, category: "Sistem Bisnis" },

  // Automation & Integrasi
  { id: "ai-automation", name: L("Otomasi AI", "AI Automation", "AI 自动化"), price: 7_500_000, category: "Automation & Integrasi" },
  { id: "whatsapp-chatbot", name: L("Chatbot & WhatsApp Business API", "Chatbot & WhatsApp Business API", "聊天机器人与 WhatsApp Business API"), price: 5_000_000, category: "Automation & Integrasi" },
  { id: "api-integration", name: L("Integrasi API", "API Integration", "API 对接"), price: 4_500_000, category: "Automation & Integrasi" },
  { id: "payment-integration", name: L("Integrasi Payment Gateway / QRIS", "Payment Gateway / QRIS Integration", "支付网关 / QRIS 对接"), price: 3_500_000, category: "Automation & Integrasi" },
  { id: "marketplace-integration", name: L("Integrasi Marketplace & Logistik", "Marketplace & Logistics Integration", "电商平台与物流对接"), price: 5_000_000, category: "Automation & Integrasi" },
  { id: "data-migration", name: L("Migrasi Data", "Data Migration", "数据迁移"), price: 3_500_000, category: "Automation & Integrasi" },

  // Desain & Konten
  { id: "ui-ux", name: L("Desain UI/UX", "UI/UX Design", "UI/UX 设计"), price: 5_000_000, category: "Desain & Konten" },
  { id: "seo-content", name: L("SEO & Konten", "SEO & Content", "SEO 与内容"), price: 2_500_000, unit: month, category: "Desain & Konten" },

  // Infrastruktur & Keamanan
  { id: "hosting", name: L("Domain, Hosting & SSL", "Domain, Hosting & SSL", "域名、主机与 SSL"), price: 1_500_000, unit: year, category: "Infrastruktur & Keamanan" },
  { id: "cloud-setup", name: L("Setup Server & Cloud", "Server & Cloud Setup", "服务器与云部署"), price: 3_500_000, category: "Infrastruktur & Keamanan" },
  { id: "security-audit", name: L("Audit Keamanan Aplikasi", "Application Security Audit", "应用安全审计"), price: 8_000_000, category: "Infrastruktur & Keamanan" },

  // Konsultasi & Pelatihan
  { id: "it-consulting", name: L("Konsultasi IT & Audit Sistem", "IT Consulting & System Audit", "IT 咨询与系统审计"), price: 4_500_000, category: "Konsultasi & Pelatihan" },
  { id: "training", name: L("Pelatihan Tim", "Team Training", "团队培训"), price: 2_000_000, unit: session, category: "Konsultasi & Pelatihan" },

  // Support & Enterprise
  { id: "maintenance", name: L("Pemeliharaan Basic", "Maintenance Basic", "基础维护"), price: 1_500_000, unit: month, category: "Support & Enterprise" },
  { id: "maintenance-standard", name: L("Pemeliharaan Standard", "Maintenance Standard", "标准维护"), price: 3_000_000, unit: month, category: "Support & Enterprise" },
  { id: "maintenance-premium", name: L("Pemeliharaan Premium", "Maintenance Premium", "高级维护"), price: 6_000_000, unit: month, category: "Support & Enterprise" },
  { id: "extra-work", name: L("Fitur Tambahan / Pekerjaan di Luar Lingkup", "Additional Features / Out-of-scope Work", "额外功能 / 范围外工作"), price: 1_500_000, unit: day, category: "Support & Enterprise" },
  { id: "enterprise", name: L("Korporasi / Multi Cabang", "Enterprise / Multi Branch", "大型企业 / 多分店"), price: null, category: "Support & Enterprise" },
];
