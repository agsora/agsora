/** Ready-made bundles for the quote editor. Items refer to price list ids, so prices always follow the price list. */
export type QuotePackage = { id: string; name: string; summary: string; items: { id: string; qty?: number; note?: string }[] };

export const QUOTE_PACKAGES: QuotePackage[] = [
  {
    id: "starter",
    name: "Starter Korporat",
    summary: "Company profile, hosting 1 tahun, SEO dasar",
    items: [{ id: "starter-bundle" }],
  },
  {
    id: "website-bisnis",
    name: "Website Bisnis + Admin",
    summary: "Website dengan dashboard admin, hosting, SEO bulanan",
    items: [{ id: "website" }, { id: "hosting" }, { id: "seo-content", qty: 3, note: "Paket 3 bulan pertama" }],
  },
  {
    id: "toko-online",
    name: "Toko Online Lengkap",
    summary: "Toko online, pembayaran QRIS/gateway, hosting, pemeliharaan",
    items: [{ id: "ecommerce" }, { id: "payment-integration" }, { id: "hosting" }, { id: "maintenance", qty: 6, note: "6 bulan" }],
  },
  {
    id: "pos",
    name: "Digitalisasi Kasir",
    summary: "POS custom, dashboard laporan, pelatihan tim, pemeliharaan",
    items: [{ id: "pos" }, { id: "dashboard" }, { id: "training", qty: 2 }, { id: "maintenance", qty: 6, note: "6 bulan" }],
  },
  {
    id: "operasional",
    name: "Sistem Operasional Perusahaan",
    summary: "CRM, migrasi data, pelatihan, pemeliharaan standard",
    items: [{ id: "crm" }, { id: "data-migration" }, { id: "training", qty: 2 }, { id: "maintenance-standard", qty: 6, note: "6 bulan" }],
  },
  {
    id: "otomasi",
    name: "Otomasi & Chatbot",
    summary: "Otomasi AI, chatbot WhatsApp, integrasi API",
    items: [{ id: "ai-automation" }, { id: "whatsapp-chatbot" }, { id: "api-integration" }],
  },
  {
    id: "mobile",
    name: "Aplikasi Mobile",
    summary: "Aplikasi mobile, desain UI/UX, server cloud, pemeliharaan",
    items: [{ id: "mobile" }, { id: "ui-ux" }, { id: "cloud-setup" }, { id: "maintenance-standard", qty: 6, note: "6 bulan" }],
  },
];
