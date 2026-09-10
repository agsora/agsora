export type PricingItem = {
  id: string;
  name: string;
  price: string;
  unit?: string;
};

export const customDevPricing: PricingItem[] = [
  { id: "landing-page", name: "Landing Page", price: "Rp2.500.000" },
  { id: "company-profile", name: "Company Profile Website", price: "Rp3.500.000" },
  { id: "website", name: "Website + Admin Dashboard", price: "Rp5.000.000" },
  { id: "ecommerce", name: "E-Commerce Website", price: "Rp7.500.000" },
  { id: "dashboard", name: "Dashboard / Reporting", price: "Rp4.000.000" },
  { id: "pos", name: "POS Custom", price: "Rp6.000.000" },
  { id: "hris", name: "HRIS Custom", price: "Rp7.500.000" },
  { id: "crm", name: "CRM Custom", price: "Rp7.500.000" },
  { id: "custom-software", name: "Custom Software", price: "Rp8.000.000" },
  { id: "mobile", name: "Mobile App", price: "Rp10.000.000", unit: "/ platform" },
  { id: "ai-automation", name: "AI Automation", price: "Rp5.000.000" },
  { id: "api-integration", name: "API Integration", price: "Rp3.000.000" },
  { id: "erp-basic", name: "ERP Basic", price: "Rp15.000.000" },
  { id: "erp-advanced", name: "ERP Advanced", price: "Rp25.000.000" },
  { id: "maintenance", name: "Maintenance", price: "Rp750.000", unit: "/ bulan" },
  { id: "enterprise", name: "Enterprise / Multi Branch", price: "Custom Quote" },
];

export const pricingDisclaimer =
  "Harga mulai dari dan dapat berubah sesuai fitur, jumlah user, integrasi, kompleksitas workflow, timeline, serta kebutuhan support. Biaya pihak ketiga tidak termasuk kecuali dinyatakan lain.";
