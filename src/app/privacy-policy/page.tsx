import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { LegalContent, type LegalSection } from "@/components/sections/legal-content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Kebijakan privasi ${siteConfig.brandMark} mengenai pengumpulan, penggunaan, dan perlindungan data pengguna.`,
  alternates: { canonical: "/privacy-policy" },
};

const sections: LegalSection[] = [
  {
    title: "1. Informasi yang Kami Kumpulkan",
    body: [
      "Kami dapat mengumpulkan informasi yang Anda berikan secara langsung melalui form kontak di website ini, seperti nama, nama perusahaan, alamat email, nomor WhatsApp, jenis kebutuhan, budget range, dan deskripsi project.",
      "Kami juga dapat mengumpulkan data teknis non-identitas seperti jenis perangkat dan perilaku penggunaan halaman untuk keperluan analitik dan peningkatan layanan.",
    ],
  },
  {
    title: "2. Penggunaan Informasi",
    body: [
      `Informasi yang Anda berikan digunakan oleh ${siteConfig.legalName} semata-mata untuk menindaklanjuti permintaan konsultasi, proposal, atau pertanyaan terkait layanan dan produk AG·SORA.`,
      "Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran tanpa persetujuan Anda.",
    ],
  },
  {
    title: "3. Penyimpanan dan Keamanan Data",
    body: [
      "Kami berupaya menjaga keamanan data yang Anda berikan dengan langkah-langkah teknis dan organisasional yang wajar sesuai skala bisnis kami.",
    ],
  },
  {
    title: "4. Cookie dan Teknologi Serupa",
    body: [
      "Website ini dapat menggunakan cookie atau teknologi serupa untuk meningkatkan pengalaman pengguna dan menganalisis penggunaan situs secara agregat.",
    ],
  },
  {
    title: "5. Hak Anda",
    body: [
      `Anda berhak untuk meminta akses, koreksi, atau penghapusan data pribadi yang telah Anda berikan kepada kami dengan menghubungi ${siteConfig.email}.`,
    ],
  },
  {
    title: "6. Perubahan Kebijakan",
    body: [
      "Kebijakan privasi ini dapat diperbarui dari waktu ke waktu. Perubahan akan dipublikasikan pada halaman ini.",
    ],
  },
  {
    title: "7. Hubungi Kami",
    body: [
      `Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami melalui ${siteConfig.email}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section>
        <LegalContent updatedAt="10 September 2026" sections={sections} />
      </Section>
    </>
  );
}
