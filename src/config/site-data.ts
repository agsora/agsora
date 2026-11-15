import { customDevPricing, type PricingItem } from "@/config/pricing";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";

/** Everything the owner can change from the dashboard. Defaults come from the codebase; the database overrides them. */
export type ContactInfo = {
  email: string;
  whatsappNumber: string;
  whatsappHref: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  tiktok: string;
};

export type ProposalContent = {
  tagline: string;
  philosophyTitle: string;
  philosophy: string;
  pillars: { title: string; text: string }[];
  process: { title: string; text: string }[];
  commitments: string[];
  closing: string;
};

/** Indonesian tax settings that drive PPN on quotes and the legal lines on the proposal. */
export type TaxSettings = {
  /** Pengusaha Kena Pajak: only a PKP may charge PPN. */
  pkp: boolean;
  /** Effective PPN in percent: 12% x DPP nilai lain (11/12) = 11%. */
  ppnRate: number;
  npwp: string;
  /** Nomor Induk Berusaha (OSS), shown on the proposal. */
  nib: string;
  /** Bank account lines printed on invoices, one per line. */
  bankInfo: string;
  /** Mention PPh 23 withholding (2%) on proposals. */
  pph23Note: boolean;
};

/** Website promo banner and the discount a quote can apply. */
export type PromoSettings = {
  enabled: boolean;
  /** Short code shown on the banner, e.g. LAUNCH10. */
  code: string;
  title: string;
  text: string;
  /** Discount in percent that the quote editor can apply for this promo. */
  discountPct: number;
  /** ISO date (YYYY-MM-DD); the promo hides itself after this day. Empty = no end date. */
  validUntil: string;
  ctaLabel: string;
};

/** A case study / testimonial shown on the home page. */
export type PortfolioItem = { client: string; industry: string; summary: string; result: string; testimonial: string; person: string };

/**
 * Proof numbers on the home page. Set by the owner, who is responsible for them being true.
 * 0 means "count it automatically" (client logos for clients, the price list for services).
 */
export type ProofStats = { clients: number; services: number };

export type SiteData = {
  pricing: PricingItem[];
  /** "Mulai dari" price per service id (home, services pages). */
  servicePrices: Record<string, number>;
  contact: ContactInfo;
  proposal: ProposalContent;
  tax: TaxSettings;
  promo: PromoSettings;
  portfolio: PortfolioItem[];
  stats: ProofStats;
};

export const defaultContact: ContactInfo = {
  email: siteConfig.email,
  whatsappNumber: siteConfig.whatsapp.number,
  whatsappHref: siteConfig.whatsapp.href,
  instagram: siteConfig.social.instagram,
  facebook: siteConfig.social.facebook,
  linkedin: siteConfig.social.linkedin,
  tiktok: siteConfig.social.tiktok,
};

export const defaultProposal: ProposalContent = {
  tagline: siteConfig.philosophy,
  philosophyTitle: "Filosofi kami",
  philosophy:
    "Software yang baik tidak memaksa perusahaan berubah demi sistem. Kami merancang sistem yang mengikuti cara kerja Anda, tumbuh bersama bisnis Anda, dan terbukti menghemat waktu serta biaya. Setiap keputusan teknis kami timbang dengan satu pertanyaan: apakah ini membuat operasional Anda lebih sederhana dan lebih siap berkembang?",
  pillars: [
    { title: "Adaptive Growth", text: "Sistem dirancang modular agar bisa ditambah dan diubah mengikuti pertumbuhan bisnis, tanpa dibangun ulang dari nol." },
    { title: "Smart Operations", text: "Proses manual diganti alur kerja terintegrasi dan otomatis, sehingga tim fokus pada hal yang bernilai." },
    { title: "Real Advancement", text: "Hasil diukur dari dampak nyata: waktu yang dihemat, kesalahan yang berkurang, dan keputusan yang lebih cepat." },
  ],
  process: [
    { title: "Pemetaan", text: "Memahami proses bisnis, tantangan, dan tujuan jangka panjang Anda." },
    { title: "Perancangan", text: "Merancang arsitektur sistem dan pengalaman pengguna yang tepat sasaran." },
    { title: "Pengembangan", text: "Membangun sistem secara iteratif dengan standar kualitas enterprise." },
    { title: "Peluncuran", text: "Deploy, migrasi data, dan pelatihan tim untuk adopsi yang mulus." },
    { title: "Pertumbuhan", text: "Dukungan berkelanjutan, optimasi, dan pengembangan fitur baru." },
  ],
  commitments: [
    "Komunikasi progres yang jelas di setiap tahap",
    "Kode sumber dan data menjadi milik Anda setelah lunas",
    "Garansi perbaikan bug gratis 90 hari setelah serah terima",
    "Harga transparan, tanpa biaya bulanan per outlet atau pengguna",
    "Dokumentasi dan serah terima yang rapi",
    "Dukungan purna jual setelah peluncuran",
  ],
  closing: "Terima kasih atas kesempatan yang diberikan. Kami siap berdiskusi untuk menyesuaikan ruang lingkup dan jadwal dengan kebutuhan Anda.",
};

export const defaultTax: TaxSettings = { pkp: false, ppnRate: 11, npwp: "1000000011213027", nib: "2109260106509", bankInfo: "", pph23Note: true };

export const defaultPromo: PromoSettings = { enabled: false, code: "", title: "", text: "", discountPct: 0, validUntil: "", ctaLabel: "Konsultasi gratis" };

export const defaultServicePrices: Record<string, number> = Object.fromEntries(services.map((s) => [s.id, s.startingFrom]));

export const defaultSiteData: SiteData = {
  pricing: customDevPricing,
  servicePrices: defaultServicePrices,
  contact: defaultContact,
  proposal: defaultProposal,
  tax: defaultTax,
  promo: defaultPromo,
  portfolio: [],
  stats: { clients: 300, services: 0 },
};
