import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { LegalContent, type LegalSection } from "@/components/sections/legal-content";
import { LegalCta } from "@/components/sections/legal-cta";
import { siteConfig } from "@/config/site";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description: `Syarat dan ketentuan penggunaan layanan dan produk ${siteConfig.brandMark}.`,
  path: "/terms-conditions",
});

const sections: LegalSection[] = [
  {
    id: {
      title: "1. Ruang Lingkup Layanan",
      body: [
        `${siteConfig.legalName} ("AG·SORA") menyediakan layanan custom software development serta produk SaaS proprietary sebagaimana dijelaskan pada halaman Services dan Products website ini.`,
      ],
    },
    en: {
      title: "1. Scope of Services",
      body: [
        `${siteConfig.legalName} ("AG·SORA") provides custom software development services and proprietary SaaS products as described on the Services and Products pages of this website.`,
      ],
    },
    zh: {
      title: "1. 服务范围",
      body: [
        `${siteConfig.legalName}（"AG·SORA"）提供定制软件开发服务及自有 SaaS 产品，详见本网站 Services 与 Products 页面所述内容。`,
      ],
    },
  },
  {
    id: {
      title: "2. Proposal dan Kesepakatan Project",
      body: [
        "Setiap harga yang tercantum pada halaman Pricing bersifat 'mulai dari' dan merupakan estimasi awal. Ruang lingkup final, timeline, dan biaya akan dituangkan dalam proposal atau kesepakatan tertulis terpisah sebelum project dimulai.",
        "Biaya pihak ketiga (seperti domain, hosting, lisensi API, atau payment gateway) tidak termasuk dalam harga layanan kecuali dinyatakan lain secara tertulis.",
      ],
    },
    en: {
      title: "2. Proposals and Project Agreements",
      body: [
        "Every price listed on the Pricing page is a 'starting from' price and an initial estimate. The final scope, timeline, and cost will be set out in a proposal or separate written agreement before the project begins.",
        "Third-party costs (such as domain, hosting, API licensing, or payment gateway fees) are not included in the service price unless stated otherwise in writing.",
      ],
    },
    zh: {
      title: "2. 提案与项目协议",
      body: [
        "Pricing 页面上列出的所有价格均为\"起始价格\"，属于初步预估。最终范围、工期与费用将在项目开始前，以提案或独立的书面协议形式确定。",
        "第三方费用（如域名、主机、API 授权或支付网关费用）不包含在服务价格内，除非另有书面说明。",
      ],
    },
  },
  {
    id: {
      title: "3. Langganan Produk SaaS",
      body: [
        "Paket berlangganan produk AG·SORA (POS, ERP, HR, CRM, Inventory) ditagihkan secara berkala sesuai paket yang dipilih. Fitur dan batasan setiap paket dapat berubah untuk meningkatkan kualitas layanan, dengan pemberitahuan yang wajar kepada pelanggan aktif.",
      ],
    },
    en: {
      title: "3. SaaS Product Subscriptions",
      body: [
        "Subscriptions to AG·SORA products (POS, ERP, HR, CRM, Inventory) are billed periodically according to the selected plan. Features and limits for each plan may change to improve service quality, with reasonable notice given to active subscribers.",
      ],
    },
    zh: {
      title: "3. SaaS 产品订阅",
      body: [
        "AG·SORA 产品（POS、ERP、HR、CRM、Inventory）的订阅套餐将按所选方案定期计费。为提升服务质量，各套餐的功能与限制可能会有所调整，我们将提前合理通知现有订阅用户。",
      ],
    },
  },
  {
    id: {
      title: "4. Kekayaan Intelektual",
      body: [
        "Untuk project custom development, hak kepemilikan source code mengikuti kesepakatan tertulis pada kontrak masing-masing project.",
        "Produk SaaS AG·SORA (termasuk kode sumber, arsitektur, dan merek) tetap menjadi milik AG·SORA. Pelanggan memperoleh hak penggunaan sesuai paket langganan yang berlaku.",
      ],
    },
    en: {
      title: "4. Intellectual Property",
      body: [
        "For custom development projects, source code ownership follows the written agreement in each project's contract.",
        "AG·SORA's SaaS products (including source code, architecture, and brand) remain the property of AG·SORA. Customers receive usage rights under their applicable subscription plan.",
      ],
    },
    zh: {
      title: "4. 知识产权",
      body: [
        "对于定制开发项目，源代码归属方案以各项目合同中的书面约定为准。",
        "AG·SORA 的 SaaS 产品（包括源代码、架构与品牌）归 AG·SORA 所有。客户根据其适用的订阅套餐获得使用权。",
      ],
    },
  },
  {
    id: {
      title: "5. Batasan Tanggung Jawab",
      body: [
        "AG·SORA berupaya memberikan layanan dengan standar profesional yang wajar, namun tidak menjamin bahwa layanan akan sepenuhnya bebas dari gangguan atau kesalahan.",
      ],
    },
    en: {
      title: "5. Limitation of Liability",
      body: [
        "AG·SORA strives to deliver services to a reasonable professional standard but does not guarantee that services will be entirely free of disruption or error.",
      ],
    },
    zh: {
      title: "5. 责任限制",
      body: [
        "AG·SORA 致力于以合理的专业标准提供服务，但不保证服务完全不出现中断或错误。",
      ],
    },
  },
  {
    id: {
      title: "6. Perubahan Ketentuan",
      body: [
        "Ketentuan ini dapat diperbarui sewaktu-waktu. Versi terbaru akan selalu tersedia pada halaman ini.",
      ],
    },
    en: {
      title: "6. Changes to Terms",
      body: [
        "These terms may be updated at any time. The latest version will always be available on this page.",
      ],
    },
    zh: {
      title: "6. 条款变更",
      body: [
        "本条款可能会不时更新，最新版本将始终发布在本页面上。",
      ],
    },
  },
  {
    id: {
      title: "7. Hubungi Kami",
      body: [
        `Pertanyaan mengenai syarat dan ketentuan ini dapat disampaikan melalui ${siteConfig.email}.`,
      ],
    },
    en: {
      title: "7. Contact Us",
      body: [
        `Questions about these terms and conditions can be sent to ${siteConfig.email}.`,
      ],
    },
    zh: {
      title: "7. 联系我们",
      body: [
        `如对本条款有任何疑问，可通过 ${siteConfig.email} 与我们联系。`,
      ],
    },
  },
];

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero
        breadcrumb={{ name: "Terms & Conditions", href: "/terms-conditions" }}
        eyebrow="Legal"
        title="Terms & Conditions"
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
