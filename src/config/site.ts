export const siteConfig = {
  name: "AGSORA",
  brandMark: "AG·SORA",
  legalName: "PT Agsora Teknologi Indonesia",
  domain: "agsora.tech",
  url: "https://agsora.tech",
  tagline: "Adaptive Growth. Smart Operations. Real Advancement.",
  description:
    "AG·SORA membangun software, sistem bisnis, dan produk digital yang membantu perusahaan bekerja lebih efisien, terintegrasi, dan scalable — dari custom development hingga produk SaaS siap pakai.",
  email: "hello@agsora.tech",
  whatsapp: {
    display: "WhatsApp",
    // NOTE: replace with the real business number when available.
    href: "https://wa.me/6280000000000",
  },
  social: {
    instagram: "https://instagram.com/agsora.tech",
    linkedin: "https://linkedin.com/company/agsora",
    tiktok: "https://tiktok.com/@agsora.tech",
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const mainNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "Custom Software", href: "/services/custom-software" },
    { label: "Website Development", href: "/services/website" },
    { label: "Mobile Application", href: "/services/mobile" },
    { label: "ERP", href: "/services/erp" },
    { label: "POS", href: "/services/pos" },
    { label: "HRIS", href: "/services/hris" },
    { label: "CRM", href: "/services/crm" },
    { label: "AI Automation", href: "/services/ai-automation" },
    { label: "API Integration", href: "/services/api-integration" },
  ],
  products: [
    { label: "AG·SORA POS", href: "/products#pos" },
    { label: "AG·SORA ERP", href: "/products#erp" },
    { label: "AG·SORA HR", href: "/products#hr" },
    { label: "AG·SORA CRM", href: "/products#crm" },
    { label: "AG·SORA Inventory", href: "/products#inventory" },
  ],
  company: [
    { label: "Industries", href: "/industries" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
  ],
};
