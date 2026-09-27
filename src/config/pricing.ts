type Localized = { id: string; en: string; zh: string };

export type PricingCategory =
  | "Website & Digital"
  | "Sistem Bisnis"
  | "Automation & Integrasi"
  | "Support & Enterprise";

export type PricingItem = {
  id: string;
  name: Localized;
  /** Starting price in rupiah; null means quoted per project. */
  price: number | null;
  unit?: Localized;
  category: PricingCategory;
};

const perPlatform: Localized = { id: "/ platform", en: "/ platform", zh: "/ 每平台" };
const perMonth: Localized = { id: "/ bulan", en: "/ month", zh: "/ 月" };

export const customDevPricing: PricingItem[] = [
  { id: "landing-page", name: { id: "Landing Page", en: "Landing Page", zh: "落地页" }, price: 2_500_000, category: "Website & Digital" },
  { id: "company-profile", name: { id: "Website Company Profile", en: "Company Profile Website", zh: "企业官网" }, price: 3_500_000, category: "Website & Digital" },
  { id: "website", name: { id: "Website + Dashboard Admin", en: "Website + Admin Dashboard", zh: "网站 + 管理后台" }, price: 5_000_000, category: "Website & Digital" },
  { id: "ecommerce", name: { id: "Website Toko Online", en: "E-Commerce Website", zh: "电商网站" }, price: 7_500_000, category: "Website & Digital" },
  { id: "dashboard", name: { id: "Dashboard / Laporan", en: "Dashboard / Reporting", zh: "仪表盘 / 报表" }, price: 4_000_000, category: "Website & Digital" },
  { id: "mobile", name: { id: "Aplikasi Mobile", en: "Mobile App", zh: "移动应用" }, price: 10_000_000, unit: perPlatform, category: "Website & Digital" },
  { id: "pos", name: { id: "Sistem Kasir (POS) Custom", en: "Custom POS", zh: "定制 POS 收银系统" }, price: 6_000_000, category: "Sistem Bisnis" },
  { id: "hris", name: { id: "HRIS Custom", en: "Custom HRIS", zh: "定制 HRIS 人事系统" }, price: 7_500_000, category: "Sistem Bisnis" },
  { id: "crm", name: { id: "CRM Custom", en: "Custom CRM", zh: "定制 CRM 客户管理" }, price: 7_500_000, category: "Sistem Bisnis" },
  { id: "custom-software", name: { id: "Software Custom", en: "Custom Software", zh: "定制软件" }, price: 8_000_000, category: "Sistem Bisnis" },
  { id: "erp-basic", name: { id: "ERP Dasar", en: "ERP Basic", zh: "ERP 基础版" }, price: 15_000_000, category: "Sistem Bisnis" },
  { id: "erp-advanced", name: { id: "ERP Lanjutan", en: "ERP Advanced", zh: "ERP 进阶版" }, price: 25_000_000, category: "Sistem Bisnis" },
  { id: "ai-automation", name: { id: "Otomasi AI", en: "AI Automation", zh: "AI 自动化" }, price: 5_000_000, category: "Automation & Integrasi" },
  { id: "api-integration", name: { id: "Integrasi API", en: "API Integration", zh: "API 对接" }, price: 3_000_000, category: "Automation & Integrasi" },
  { id: "maintenance", name: { id: "Pemeliharaan Sistem", en: "Maintenance", zh: "系统维护" }, price: 750_000, unit: perMonth, category: "Support & Enterprise" },
  { id: "enterprise", name: { id: "Korporasi / Multi-Cabang", en: "Enterprise / Multi-Branch", zh: "大型企业 / 多分店" }, price: null, category: "Support & Enterprise" },
];
