import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { LegalContent, type LegalSection } from "@/components/sections/legal-content";
import { LegalCta } from "@/components/sections/legal-cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Syarat dan ketentuan penggunaan layanan dan produk ${siteConfig.brandMark}.`,
  alternates: { canonical: "/terms-conditions" },
};

const sections: LegalSection[] = [
  {
    title: "1. Ruang Lingkup Layanan",
    body: [
      `${siteConfig.legalName} ("AG·SORA") menyediakan layanan custom software development serta produk SaaS proprietary sebagaimana dijelaskan pada halaman Services dan Products website ini.`,
    ],
  },
  {
    title: "2. Proposal dan Kesepakatan Project",
    body: [
      "Setiap harga yang tercantum pada halaman Pricing bersifat 'mulai dari' dan merupakan estimasi awal. Ruang lingkup final, timeline, dan biaya akan dituangkan dalam proposal atau kesepakatan tertulis terpisah sebelum project dimulai.",
      "Biaya pihak ketiga (seperti domain, hosting, lisensi API, atau payment gateway) tidak termasuk dalam harga layanan kecuali dinyatakan lain secara tertulis.",
    ],
  },
  {
    title: "3. Langganan Produk SaaS",
    body: [
      "Paket berlangganan produk AG·SORA (POS, ERP, HR, CRM, Inventory) ditagihkan secara berkala sesuai paket yang dipilih. Fitur dan batasan setiap paket dapat berubah untuk meningkatkan kualitas layanan, dengan pemberitahuan yang wajar kepada pelanggan aktif.",
    ],
  },
  {
    title: "4. Kekayaan Intelektual",
    body: [
      "Untuk project custom development, hak kepemilikan source code mengikuti kesepakatan tertulis pada kontrak masing-masing project.",
      "Produk SaaS AG·SORA (termasuk kode sumber, arsitektur, dan merek) tetap menjadi milik AG·SORA. Pelanggan memperoleh hak penggunaan sesuai paket langganan yang berlaku.",
    ],
  },
  {
    title: "5. Batasan Tanggung Jawab",
    body: [
      "AG·SORA berupaya memberikan layanan dengan standar profesional yang wajar, namun tidak menjamin bahwa layanan akan sepenuhnya bebas dari gangguan atau kesalahan.",
    ],
  },
  {
    title: "6. Perubahan Ketentuan",
    body: [
      "Ketentuan ini dapat diperbarui sewaktu-waktu. Versi terbaru akan selalu tersedia pada halaman ini.",
    ],
  },
  {
    title: "7. Hubungi Kami",
    body: [
      `Pertanyaan mengenai syarat dan ketentuan ini dapat disampaikan melalui ${siteConfig.email}.`,
    ],
  },
];

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <Section>
        <LegalContent updatedAt="10 September 2026" sections={sections} />
      </Section>
      <Section className="pt-0">
        <LegalCta />
      </Section>
    </>
  );
}
