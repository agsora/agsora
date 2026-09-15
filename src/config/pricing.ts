export type PricingCategory =
  | "Website & Digital"
  | "Sistem Bisnis"
  | "Automation & Integrasi"
  | "Support & Enterprise";

export type PricingItem = {
  id: string;
  name: string;
  price: string;
  unit?: string;
  category: PricingCategory;
};

export const customDevPricing: PricingItem[] = [
  { id: "landing-page", name: "Landing Page", price: "Rp2.500.000", category: "Website & Digital" },
  { id: "company-profile", name: "Company Profile Website", price: "Rp3.500.000", category: "Website & Digital" },
  { id: "website", name: "Website + Admin Dashboard", price: "Rp5.000.000", category: "Website & Digital" },
  { id: "ecommerce", name: "E-Commerce Website", price: "Rp7.500.000", category: "Website & Digital" },
  { id: "dashboard", name: "Dashboard / Reporting", price: "Rp4.000.000", category: "Website & Digital" },
  { id: "mobile", name: "Mobile App", price: "Rp10.000.000", unit: "/ platform", category: "Website & Digital" },
  { id: "pos", name: "POS Custom", price: "Rp6.000.000", category: "Sistem Bisnis" },
  { id: "hris", name: "HRIS Custom", price: "Rp7.500.000", category: "Sistem Bisnis" },
  { id: "crm", name: "CRM Custom", price: "Rp7.500.000", category: "Sistem Bisnis" },
  { id: "custom-software", name: "Custom Software", price: "Rp8.000.000", category: "Sistem Bisnis" },
  { id: "erp-basic", name: "ERP Basic", price: "Rp15.000.000", category: "Sistem Bisnis" },
  { id: "erp-advanced", name: "ERP Advanced", price: "Rp25.000.000", category: "Sistem Bisnis" },
  { id: "ai-automation", name: "AI Automation", price: "Rp5.000.000", category: "Automation & Integrasi" },
  { id: "api-integration", name: "API Integration", price: "Rp3.000.000", category: "Automation & Integrasi" },
  { id: "maintenance", name: "Maintenance", price: "Rp750.000", unit: "/ bulan", category: "Support & Enterprise" },
  { id: "enterprise", name: "Enterprise / Multi Branch", price: "Custom Quote", category: "Support & Enterprise" },
];

export const pricingDisclaimer =
  "Harga mulai dari dan dapat berubah sesuai fitur, jumlah user, integrasi, kompleksitas workflow, timeline, serta kebutuhan support. Biaya pihak ketiga tidak termasuk kecuali dinyatakan lain.";
