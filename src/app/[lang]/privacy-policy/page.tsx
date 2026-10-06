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
  return pageMetadata({ ...pageMeta.privacy[locale], path: "/privacy-policy", locale });
}

const sections: LegalSection[] = [
  {
    id: {
      title: "1. Informasi yang Kami Kumpulkan",
      body: [
        "Data yang Anda berikan langsung: saat mengirim form kontak atau mengunduh checklist di website ini, kami menerima nama, nama perusahaan, alamat email, nomor WhatsApp, jenis kebutuhan, kisaran anggaran, deskripsi proyek, paket layanan yang Anda pilih, dan halaman asal Anda.",
        "Data penggunaan: kami memakai Google Analytics 4 untuk mengukur kunjungan, seperti halaman yang dibuka, jenis perangkat dan browser, perkiraan lokasi, sumber kunjungan, serta tindakan penting (misalnya mengklik tombol WhatsApp, meminta penawaran, atau mengirim form).",
        "Penghitung bacaan blog: saat Anda membuka artikel, kami mencatat artikel, bahasa, dan ID acak yang tersimpan di browser Anda agar pembaca yang sama tidak dihitung berulang. ID ini tidak berisi nama atau email Anda.",
      ],
    },
    en: {
      title: "1. Information We Collect",
      body: [
        "Data you give us directly: when you submit the contact form or download the checklist on this website, we receive your name, company name, email address, WhatsApp number, type of need, budget range, project description, the service plan you selected, and the page you came from.",
        "Usage data: we use Google Analytics 4 to measure visits, such as pages opened, device and browser type, approximate location, traffic source, and key actions (for example clicking the WhatsApp button, requesting a quote, or submitting a form).",
        "Blog read counter: when you open an article, we record the article, the language, and a random ID stored in your browser so that the same reader is not counted repeatedly. This ID contains no name or email.",
      ],
    },
    zh: {
      title: "1. 我们收集的信息",
      body: [
        "您直接提供的数据：当您在本网站提交联系表单或下载清单时，我们会收到您的姓名、公司名称、电子邮箱、WhatsApp 号码、需求类型、预算范围、项目描述、您选择的服务方案以及您来自的页面。",
        "使用数据：我们使用 Google Analytics 4 衡量访问情况，例如所浏览的页面、设备与浏览器类型、大致位置、流量来源，以及关键操作（如点击 WhatsApp 按钮、请求报价或提交表单）。",
        "博客阅读计数：当您打开文章时，我们会记录文章、语言以及保存在您浏览器中的随机 ID，以避免同一读者被重复计数。该 ID 不包含姓名或邮箱。",
      ],
    },
  },
  {
    id: {
      title: "2. Penggunaan Informasi",
      body: [
        `Informasi yang Anda berikan digunakan oleh ${siteConfig.legalName} untuk menindaklanjuti permintaan konsultasi, proposal, atau pertanyaan terkait layanan AG·SORA, termasuk menghubungi Anda melalui WhatsApp atau email.`,
        "Data penggunaan dipakai secara agregat untuk memahami halaman dan konten yang berguna serta meningkatkan website dan layanan kami.",
        "Kami tidak menjual atau menyewakan data pribadi Anda, dan tidak membagikannya kepada pihak ketiga untuk tujuan pemasaran mereka tanpa persetujuan Anda.",
      ],
    },
    en: {
      title: "2. Use of Information",
      body: [
        `Information you provide is used by ${siteConfig.legalName} to follow up on consultation requests, proposals, or questions about AG·SORA's services, including contacting you by WhatsApp or email.`,
        "Usage data is used in aggregate to understand which pages and content are useful and to improve our website and services.",
        "We do not sell or rent your personal data, and we do not share it with third parties for their own marketing without your consent.",
      ],
    },
    zh: {
      title: "2. 信息的使用",
      body: [
        `您提供的信息由 ${siteConfig.legalName} 用于跟进咨询请求、提案或与 AG·SORA 服务相关的问题，包括通过 WhatsApp 或电子邮件与您联系。`,
        "使用数据仅以汇总方式用于了解哪些页面和内容有用，并改进我们的网站与服务。",
        "我们不会出售或出租您的个人数据，未经您同意也不会将其分享给第三方用于其自身的营销。",
      ],
    },
  },
  {
    id: {
      title: "3. Penyedia Layanan Pihak Ketiga",
      body: [
        "Untuk menjalankan website ini, kami memakai penyedia layanan berikut, yang dapat memproses data Anda atas nama kami: Vercel (hosting website), Supabase (basis data tempat data form dan penghitung bacaan disimpan), Resend (pengiriman email notifikasi internal kepada tim kami), dan Google Analytics (analitik penggunaan).",
        "Jika Anda memilih melanjutkan percakapan lewat WhatsApp, percakapan tersebut berjalan di WhatsApp dan tunduk pada kebijakan privasi WhatsApp.",
        "Penyedia tersebut dapat memproses data di server yang berlokasi di luar Indonesia.",
      ],
    },
    en: {
      title: "3. Third-Party Service Providers",
      body: [
        "To run this website we use the following providers, which may process your data on our behalf: Vercel (website hosting), Supabase (the database where form data and the read counter are stored), Resend (sending internal notification emails to our team), and Google Analytics (usage analytics).",
        "If you choose to continue the conversation on WhatsApp, that conversation takes place on WhatsApp and is subject to WhatsApp's own privacy policy.",
        "These providers may process data on servers located outside Indonesia.",
      ],
    },
    zh: {
      title: "3. 第三方服务提供商",
      body: [
        "为运营本网站，我们使用以下服务提供商，它们可能代表我们处理您的数据：Vercel（网站托管）、Supabase（存储表单数据与阅读计数的数据库）、Resend（向我们团队发送内部通知邮件）以及 Google Analytics（使用情况分析）。",
        "如果您选择通过 WhatsApp 继续沟通，该对话在 WhatsApp 上进行，并受 WhatsApp 自身隐私政策约束。",
        "上述服务提供商可能在位于印度尼西亚境外的服务器上处理数据。",
      ],
    },
  },
  {
    id: {
      title: "4. Penyimpanan, Retensi, dan Keamanan Data",
      body: [
        "Data form disimpan di basis data yang aksesnya dibatasi untuk server dan tim kami, dan tidak dapat dibaca secara publik. Kami menerapkan langkah-langkah teknis dan organisasional yang wajar sesuai skala bisnis kami.",
        "Kami menyimpan data form selama masih diperlukan untuk menindaklanjuti permintaan Anda dan keperluan administrasi bisnis yang wajar, lalu menghapus atau menganonimkannya. Anda dapat meminta penghapusan lebih awal kapan saja.",
      ],
    },
    en: {
      title: "4. Data Storage, Retention, and Security",
      body: [
        "Form data is stored in a database whose access is restricted to our servers and team, and cannot be read publicly. We apply reasonable technical and organizational measures appropriate to the scale of our business.",
        "We keep form data for as long as needed to follow up on your request and for reasonable business administration, and then delete or anonymize it. You can request earlier deletion at any time.",
      ],
    },
    zh: {
      title: "4. 数据存储、保留与安全",
      body: [
        "表单数据存储在访问权限仅限于我们的服务器与团队的数据库中，公众无法读取。我们会采取与业务规模相匹配的合理技术与组织措施。",
        "我们仅在跟进您的请求及合理的业务管理所需期间保留表单数据，之后将其删除或匿名化。您可随时要求提前删除。",
      ],
    },
  },
  {
    id: {
      title: "5. Cookie dan Penyimpanan di Browser",
      body: [
        "Google Analytics menggunakan cookie untuk mengenali kunjungan dan mengukur penggunaan situs secara agregat.",
        "Website ini juga menyimpan data kecil di browser Anda (local storage) untuk menyimpan pilihan tema terang atau gelap, penutupan saran bahasa, riwayat artikel yang Anda baca (hanya di perangkat Anda), dan ID acak untuk penghitung bacaan blog.",
        "Anda dapat memblokir atau menghapus cookie dan data situs melalui pengaturan browser. Website tetap dapat dipakai, meskipun beberapa preferensi tidak akan diingat.",
      ],
    },
    en: {
      title: "5. Cookies and Browser Storage",
      body: [
        "Google Analytics uses cookies to recognize visits and measure site usage in aggregate.",
        "This website also stores small pieces of data in your browser (local storage) to remember your light or dark theme choice, whether you dismissed the language suggestion, the articles you have read (on your device only), and a random ID for the blog read counter.",
        "You can block or clear cookies and site data in your browser settings. The website remains usable, although some preferences will not be remembered.",
      ],
    },
    zh: {
      title: "5. Cookie 与浏览器存储",
      body: [
        "Google Analytics 使用 Cookie 识别访问并以汇总方式衡量网站使用情况。",
        "本网站还会在您的浏览器中存储少量数据（本地存储），用于记住浅色或深色主题的选择、是否关闭语言建议、您读过的文章（仅保存在您的设备上），以及博客阅读计数所用的随机 ID。",
        "您可以在浏览器设置中阻止或清除 Cookie 和网站数据。网站仍可正常使用，但部分偏好将无法被记住。",
      ],
    },
  },
  {
    id: {
      title: "6. Hak Anda",
      body: [
        `Sesuai hukum pelindungan data pribadi yang berlaku di Indonesia, Anda berhak meminta akses, koreksi, atau penghapusan data pribadi Anda, menarik persetujuan, serta mengajukan keberatan atas pemrosesan tertentu. Hubungi ${siteConfig.email} dan kami akan menanggapi permintaan Anda.`,
      ],
    },
    en: {
      title: "6. Your Rights",
      body: [
        `Under the personal data protection law applicable in Indonesia, you have the right to request access to, correction of, or deletion of your personal data, to withdraw consent, and to object to certain processing. Contact ${siteConfig.email} and we will respond to your request.`,
      ],
    },
    zh: {
      title: "6. 您的权利",
      body: [
        `根据印度尼西亚适用的个人数据保护法律，您有权要求访问、更正或删除您的个人数据，撤回同意，并对特定处理提出异议。请联系 ${siteConfig.email}，我们会回应您的请求。`,
      ],
    },
  },
  {
    id: {
      title: "7. Perubahan Kebijakan",
      body: [
        "Kebijakan privasi ini dapat diperbarui dari waktu ke waktu. Perubahan akan dipublikasikan pada halaman ini beserta tanggal pembaruan terakhir.",
      ],
    },
    en: {
      title: "7. Policy Changes",
      body: [
        "This privacy policy may be updated from time to time. Changes will be published on this page together with the date of the latest update.",
      ],
    },
    zh: {
      title: "7. 政策变更",
      body: [
        "本隐私政策可能会不时更新，变更将连同最近更新日期一并在本页面上公布。",
      ],
    },
  },
  {
    id: {
      title: "8. Hubungi Kami",
      body: [
        `Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami melalui ${siteConfig.email}.`,
      ],
    },
    en: {
      title: "8. Contact Us",
      body: [
        `If you have questions about this privacy policy, please contact us at ${siteConfig.email}.`,
      ],
    },
    zh: {
      title: "8. 联系我们",
      body: [
        `如果您对本隐私政策有任何疑问，请通过 ${siteConfig.email} 与我们联系。`,
      ],
    },
  },
];

export default async function PrivacyPolicyPage({ params }: LangParams) {
  const locale = await localeFromParams(params);
  const title = pageMeta.privacy[locale].title;
  return (
    <>
      <PageHero
        breadcrumb={{ name: title, href: "/privacy-policy" }}
        eyebrow={dictionaries[locale].footer.legal}
        title={title}
      />
      <Section>
        <LegalContent updatedAt="2026-10-06" sections={sections} />
      </Section>
      <Section className="pt-0">
        <LegalCta />
      </Section>
    </>
  );
}
