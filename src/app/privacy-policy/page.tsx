import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { LegalContent, type LegalSection } from "@/components/sections/legal-content";
import { LegalCta } from "@/components/sections/legal-cta";
import { siteConfig } from "@/config/site";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Kebijakan privasi ${siteConfig.brandMark} mengenai pengumpulan, penggunaan, dan perlindungan data pengguna.`,
  path: "/privacy-policy",
});

const sections: LegalSection[] = [
  {
    id: {
      title: "1. Informasi yang Kami Kumpulkan",
      body: [
        "Kami dapat mengumpulkan informasi yang Anda berikan secara langsung melalui form kontak di website ini, seperti nama, nama perusahaan, alamat email, nomor WhatsApp, jenis kebutuhan, budget range, dan deskripsi project.",
        "Kami juga dapat mengumpulkan data teknis non-identitas seperti jenis perangkat dan perilaku penggunaan halaman untuk keperluan analitik dan peningkatan layanan.",
      ],
    },
    en: {
      title: "1. Information We Collect",
      body: [
        "We may collect information you provide directly through the contact form on this website, such as your name, company name, email address, WhatsApp number, type of need, budget range, and project description.",
        "We may also collect non-identifying technical data such as device type and page usage behavior for analytics and service improvement purposes.",
      ],
    },
    zh: {
      title: "1. 我们收集的信息",
      body: [
        "我们可能会收集您通过本网站联系表单直接提供的信息，例如姓名、公司名称、电子邮箱、WhatsApp 号码、需求类型、预算范围及项目描述。",
        "我们也可能收集非身份识别性质的技术数据，例如设备类型与页面使用行为，用于分析与服务改进。",
      ],
    },
  },
  {
    id: {
      title: "2. Penggunaan Informasi",
      body: [
        `Informasi yang Anda berikan digunakan oleh ${siteConfig.legalName} semata-mata untuk menindaklanjuti permintaan konsultasi, proposal, atau pertanyaan terkait layanan dan produk AG·SORA.`,
        "Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran tanpa persetujuan Anda.",
      ],
    },
    en: {
      title: "2. Use of Information",
      body: [
        `Information you provide is used by ${siteConfig.legalName} solely to follow up on consultation requests, proposals, or questions related to AG·SORA's services and products.`,
        "We do not sell, rent, or share your personal data with third parties for marketing purposes without your consent.",
      ],
    },
    zh: {
      title: "2. 信息的使用",
      body: [
        `您提供的信息仅由 ${siteConfig.legalName} 用于跟进咨询请求、提案或与 AG·SORA 服务及产品相关的问题。`,
        "未经您同意，我们不会出售、出租或将您的个人数据分享给第三方用于营销目的。",
      ],
    },
  },
  {
    id: {
      title: "3. Penyimpanan dan Keamanan Data",
      body: [
        "Kami berupaya menjaga keamanan data yang Anda berikan dengan langkah-langkah teknis dan organisasional yang wajar sesuai skala bisnis kami.",
      ],
    },
    en: {
      title: "3. Data Storage and Security",
      body: [
        "We strive to keep the data you provide secure through reasonable technical and organizational measures appropriate to the scale of our business.",
      ],
    },
    zh: {
      title: "3. 数据存储与安全",
      body: [
        "我们会采取与我们业务规模相匹配的合理技术与组织措施，努力保障您所提供数据的安全。",
      ],
    },
  },
  {
    id: {
      title: "4. Cookie dan Teknologi Serupa",
      body: [
        "Website ini dapat menggunakan cookie atau teknologi serupa untuk meningkatkan pengalaman pengguna dan menganalisis penggunaan situs secara agregat.",
      ],
    },
    en: {
      title: "4. Cookies and Similar Technologies",
      body: [
        "This website may use cookies or similar technologies to improve user experience and analyze aggregate site usage.",
      ],
    },
    zh: {
      title: "4. Cookie 与类似技术",
      body: [
        "本网站可能使用 Cookie 或类似技术，以提升用户体验并对网站使用情况进行汇总分析。",
      ],
    },
  },
  {
    id: {
      title: "5. Hak Anda",
      body: [
        `Anda berhak untuk meminta akses, koreksi, atau penghapusan data pribadi yang telah Anda berikan kepada kami dengan menghubungi ${siteConfig.email}.`,
      ],
    },
    en: {
      title: "5. Your Rights",
      body: [
        `You have the right to request access to, correction of, or deletion of the personal data you have provided to us by contacting ${siteConfig.email}.`,
      ],
    },
    zh: {
      title: "5. 您的权利",
      body: [
        `您有权通过联系 ${siteConfig.email} 要求访问、更正或删除您提供给我们的个人数据。`,
      ],
    },
  },
  {
    id: {
      title: "6. Perubahan Kebijakan",
      body: [
        "Kebijakan privasi ini dapat diperbarui dari waktu ke waktu. Perubahan akan dipublikasikan pada halaman ini.",
      ],
    },
    en: {
      title: "6. Policy Changes",
      body: [
        "This privacy policy may be updated from time to time. Changes will be published on this page.",
      ],
    },
    zh: {
      title: "6. 政策变更",
      body: [
        "本隐私政策可能会不时更新，任何变更都将在本页面上公布。",
      ],
    },
  },
  {
    id: {
      title: "7. Hubungi Kami",
      body: [
        `Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami melalui ${siteConfig.email}.`,
      ],
    },
    en: {
      title: "7. Contact Us",
      body: [
        `If you have questions about this privacy policy, please contact us at ${siteConfig.email}.`,
      ],
    },
    zh: {
      title: "7. 联系我们",
      body: [
        `如果您对本隐私政策有任何疑问，请通过 ${siteConfig.email} 与我们联系。`,
      ],
    },
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        breadcrumb={{ name: "Privacy Policy", href: "/privacy-policy" }}
        eyebrow="Legal"
        title="Privacy Policy"
      />
      <Section>
        <LegalContent updatedAt="10 September 2026" sections={sections} />
      </Section>
      <Section className="pt-0">
        <LegalCta />
      </Section>
    </>
  );
}
