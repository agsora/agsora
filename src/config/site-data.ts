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

export type SiteData = {
  pricing: PricingItem[];
  /** "Mulai dari" price per service id (home, services pages). */
  servicePrices: Record<string, number>;
  contact: ContactInfo;
  proposal: ProposalContent;
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
  tagline: siteConfig.tagline,
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
    "Kode dan data Anda adalah milik Anda",
    "Dokumentasi dan serah terima yang rapi",
    "Dukungan purna jual setelah peluncuran",
  ],
  closing: "Terima kasih atas kesempatan yang diberikan. Kami siap berdiskusi untuk menyesuaikan ruang lingkup dan jadwal dengan kebutuhan Anda.",
};

export const defaultServicePrices: Record<string, number> = Object.fromEntries(services.map((s) => [s.id, s.startingFrom]));

export const defaultSiteData: SiteData = {
  pricing: customDevPricing,
  servicePrices: defaultServicePrices,
  contact: defaultContact,
  proposal: defaultProposal,
};
