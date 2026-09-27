import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { LegalContent, type LegalSection } from "@/components/sections/legal-content";
import { LegalCta } from "@/components/sections/legal-cta";
import { siteConfig } from "@/config/site";

import { dictionaries } from "@/i18n/dictionaries";
import { pageMeta } from "@/i18n/page-meta";
import { localeFromParams, type LangParams } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFromParams(params);
  return pageMetadata({ ...pageMeta.terms[locale], path: "/terms-conditions", locale });
}

/**
 * Written for the business as it is today: custom software development only.
 * Clauses restate commitments already made elsewhere on the site (FAQ,
 * About → commitments, Pricing disclaimer) rather than adding new promises —
 * keep them in sync when those change.
 */
const sections: LegalSection[] = [
  {
    id: {
      title: "1. Ruang Lingkup Layanan",
      body: [
        `${siteConfig.legalName} ("AG·SORA") menyediakan layanan pengembangan software custom — termasuk website, aplikasi mobile, sistem bisnis seperti ERP, POS, HRIS, dan CRM, AI automation, serta integrasi API — sebagaimana dijelaskan pada halaman Layanan website ini.`,
        "Ketentuan ini berlaku untuk penggunaan website ini dan untuk setiap project yang dikerjakan AG·SORA, kecuali diatur lain dalam kontrak tertulis. Jika terdapat perbedaan, isi kontrak tertulis yang berlaku.",
      ],
    },
    en: {
      title: "1. Scope of Services",
      body: [
        `${siteConfig.legalName} ("AG·SORA") provides custom software development services — including websites, mobile apps, business systems such as ERP, POS, HRIS, and CRM, AI automation, and API integration — as described on the Services page of this website.`,
        "These terms apply to the use of this website and to every project AG·SORA undertakes, unless a written contract states otherwise. Where the two differ, the written contract prevails.",
      ],
    },
    zh: {
      title: "1. 服务范围",
      body: [
        `${siteConfig.legalName}（"AG·SORA"）提供定制软件开发服务，包括网站、移动应用，ERP、POS、HRIS 与 CRM 等业务系统，AI 自动化以及 API 集成，详见本网站"服务"页面。`,
        "本条款适用于本网站的使用，以及 AG·SORA 承接的每个项目，书面合同另有约定的除外。两者不一致时，以书面合同为准。",
      ],
    },
  },
  {
    id: {
      title: "2. Proposal dan Kesepakatan Project",
      body: [
        "Setiap harga yang tercantum pada halaman Harga bersifat 'mulai dari' dan merupakan estimasi awal. Ruang lingkup final, timeline, dan biaya akan dituangkan dalam proposal atau kesepakatan tertulis terpisah sebelum project dimulai.",
        "Pengerjaan project baru dimulai setelah proposal disepakati secara tertulis oleh kedua pihak.",
        "Biaya pihak ketiga (seperti domain, hosting, lisensi API, atau payment gateway) tidak termasuk dalam harga layanan kecuali dinyatakan lain secara tertulis.",
      ],
    },
    en: {
      title: "2. Proposals and Project Agreements",
      body: [
        "Every price listed on the Pricing page is a 'starting from' price and an initial estimate. The final scope, timeline, and cost will be set out in a proposal or separate written agreement before the project begins.",
        "Work on a project begins only after both parties have agreed to the proposal in writing.",
        "Third-party costs (such as domain, hosting, API licensing, or payment gateway fees) are not included in the service price unless stated otherwise in writing.",
      ],
    },
    zh: {
      title: "2. 提案与项目协议",
      body: [
        "“价格”页面上列出的所有价格均为\"起始价格\"，属于初步预估。最终范围、工期与费用将在项目开始前，以提案或独立的书面协议形式确定。",
        "项目仅在双方书面确认提案后才正式开始执行。",
        "第三方费用（如域名、主机、API 授权或支付网关费用）不包含在服务价格内，除非另有书面说明。",
      ],
    },
  },
  {
    id: {
      title: "3. Perubahan Ruang Lingkup",
      body: [
        "Perubahan kecil selama project berjalan dapat diakomodasi dalam ruang lingkup yang disepakati.",
        "Perubahan yang menambah modul atau mengubah alur inti akan dihitung ulang dampaknya terhadap timeline dan biaya, lalu disepakati secara tertulis sebelum dikerjakan.",
      ],
    },
    en: {
      title: "3. Changes to Scope",
      body: [
        "Minor changes during a project can be accommodated within the agreed scope.",
        "Changes that add modules or alter core workflows will have their impact on timeline and cost reassessed, then agreed in writing before the work is done.",
      ],
    },
    zh: {
      title: "3. 范围变更",
      body: [
        "项目进行中的小幅调整，可在已约定的范围内予以处理。",
        "新增模块或改变核心流程的变更，将重新评估其对工期与费用的影响，并在执行前以书面形式确认。",
      ],
    },
  },
  {
    id: {
      title: "4. Kekayaan Intelektual",
      body: [
        "Hak kepemilikan source code setiap project mengikuti kesepakatan tertulis pada kontrak masing-masing project, dan dinyatakan sejak awal.",
        "Merek, logo, dan konten website AG·SORA tetap menjadi milik AG·SORA dan tidak boleh digunakan tanpa izin tertulis.",
      ],
    },
    en: {
      title: "4. Intellectual Property",
      body: [
        "Ownership of each project's source code follows the written agreement in that project's contract, stated from the start.",
        "AG·SORA's brand, logo, and website content remain the property of AG·SORA and may not be used without written permission.",
      ],
    },
    zh: {
      title: "4. 知识产权",
      body: [
        "每个项目的源代码归属，以该项目合同中的书面约定为准，并在项目开始时即明确约定。",
        "AG·SORA 的品牌、标志及网站内容归 AG·SORA 所有，未经书面许可不得使用。",
      ],
    },
  },
  {
    id: {
      title: "5. Serah Terima dan Pemeliharaan",
      body: [
        "Setiap serah terima disertai dokumentasi teknis dan sesi pelatihan untuk tim yang akan menggunakan sistem.",
        "Setelah serah terima, perbaikan bug dan dukungan teknis tersedia melalui paket maintenance sebagaimana tercantum pada halaman Harga, kecuali diatur lain dalam kontrak.",
      ],
    },
    en: {
      title: "5. Handover and Maintenance",
      body: [
        "Every handover includes technical documentation and a training session for the team that will use the system.",
        "After handover, bug fixes and technical support are available through a maintenance plan as listed on the Pricing page, unless the contract states otherwise.",
      ],
    },
    zh: {
      title: "5. 交付与维护",
      body: [
        "每次交付均包含技术文档，以及为使用系统的团队提供的培训。",
        "交付后，错误修复与技术支持可通过“价格”页面所列的维护套餐获得，合同另有约定的除外。",
      ],
    },
  },
  {
    id: {
      title: "6. Kerahasiaan",
      body: [
        "Data dan proses bisnis klien hanya digunakan untuk keperluan project dan tidak digunakan untuk keperluan lain. Perjanjian kerahasiaan (NDA) dapat disiapkan sebelum diskusi teknis dimulai.",
        "Pengelolaan data pribadi yang Anda kirimkan melalui website ini diatur dalam Kebijakan Privasi.",
      ],
    },
    en: {
      title: "6. Confidentiality",
      body: [
        "Client data and business processes are used only for the project and never for other purposes. A non-disclosure agreement (NDA) can be arranged before technical discussions begin.",
        "Personal data you submit through this website is handled as described in the Privacy Policy.",
      ],
    },
    zh: {
      title: "6. 保密",
      body: [
        "客户的数据与业务流程仅用于项目本身，绝不会被用于其他用途。技术讨论开始前可签署保密协议（NDA）。",
        "您通过本网站提交的个人数据，按隐私政策的规定处理。",
      ],
    },
  },
  {
    id: {
      title: "7. Batasan Tanggung Jawab",
      body: [
        "AG·SORA berupaya memberikan layanan dengan standar profesional yang wajar, namun tidak menjamin bahwa layanan akan sepenuhnya bebas dari gangguan atau kesalahan.",
      ],
    },
    en: {
      title: "7. Limitation of Liability",
      body: [
        "AG·SORA strives to deliver services to a reasonable professional standard but does not guarantee that services will be entirely free of disruption or error.",
      ],
    },
    zh: {
      title: "7. 责任限制",
      body: [
        "AG·SORA 致力于以合理的专业标准提供服务，但不保证服务完全不出现中断或错误。",
      ],
    },
  },
  {
    id: {
      title: "8. Perubahan Ketentuan",
      body: [
        "Ketentuan ini dapat diperbarui sewaktu-waktu. Versi terbaru akan selalu tersedia pada halaman ini.",
      ],
    },
    en: {
      title: "8. Changes to Terms",
      body: [
        "These terms may be updated at any time. The latest version will always be available on this page.",
      ],
    },
    zh: {
      title: "8. 条款变更",
      body: [
        "本条款可能会不时更新，最新版本将始终发布在本页面上。",
      ],
    },
  },
  {
    id: {
      title: "9. Hubungi Kami",
      body: [
        `Pertanyaan mengenai syarat dan ketentuan ini dapat disampaikan melalui ${siteConfig.email}.`,
      ],
    },
    en: {
      title: "9. Contact Us",
      body: [
        `Questions about these terms and conditions can be sent to ${siteConfig.email}.`,
      ],
    },
    zh: {
      title: "9. 联系我们",
      body: [
        `如对本条款有任何疑问，可通过 ${siteConfig.email} 与我们联系。`,
      ],
    },
  },
];

const updatedAt = "2026-09-26";

export default async function TermsConditionsPage({ params }: LangParams) {
  const locale = await localeFromParams(params);
  const title = pageMeta.terms[locale].title;
  return (
    <>
      <PageHero
        breadcrumb={{ name: title, href: "/terms-conditions" }}
        eyebrow={dictionaries[locale].footer.legal}
        title={title}
      />
      <Section>
        <LegalContent updatedAt={updatedAt} sections={sections} />
      </Section>
      <Section className="pt-0">
        <LegalCta />
      </Section>
    </>
  );
}
