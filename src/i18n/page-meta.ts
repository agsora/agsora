import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/routing";

/**
 * Search-result title and description for each static page, per language.
 * Titles get " | AG·SORA" appended by the layout template, except `home`,
 * which is used verbatim so it can lead with the keyword.
 *
 * Keep titles under ~60 characters and descriptions under ~155 so search
 * engines don't truncate them. Write each language for how people search in
 * it, rather than translating the Indonesian word for word.
 */
type Meta = { title: string; description: string };

const brand = siteConfig.brandMark;

export const pageMeta = {
  home: {
    id: {
      title: `Software House Indonesia untuk ERP, POS & HRIS | ${brand}`,
      description:
        "Software house Indonesia yang membangun custom software, website, aplikasi, ERP, POS, HRIS, dan CRM sesuai proses bisnis Anda. Konsultasi gratis.",
    },
    en: {
      title: `Indonesian Software House for ERP, POS & HRIS | ${brand}`,
      description:
        "Indonesian software house building custom software, websites, apps, ERP, POS, HRIS, and CRM systems around your business process. Free consultation.",
    },
    zh: {
      title: `印尼软件开发公司：ERP、POS 与 HRIS 系统 | ${brand}`,
      description:
        "印尼软件开发公司，为企业定制软件、网站、应用、ERP、POS、HRIS 与 CRM 系统，贴合您的业务流程。欢迎免费咨询。",
    },
  },
  services: {
    id: {
      title: "Layanan Pembuatan Software & Sistem Bisnis",
      description:
        "Jasa pembuatan custom software, website, aplikasi mobile, ERP, POS, HRIS, CRM, AI automation, dan integrasi API untuk bisnis di Indonesia.",
    },
    en: {
      title: "Software & Business System Development Services",
      description:
        "Custom software, websites, mobile apps, ERP, POS, HRIS, CRM, AI automation, and API integration, built around how your business works.",
    },
    zh: {
      title: "软件与商业系统开发服务",
      description:
        "定制软件、网站、移动应用、ERP、POS、HRIS、CRM、AI 自动化与 API 集成开发，贴合贵公司的业务流程。",
    },
  },
  industries: {
    id: {
      title: "Solusi Software per Industri",
      description:
        "Sistem bisnis untuk retail, F&B, distribusi, pendidikan, klinik, manufaktur, jasa profesional, UMKM, hingga enterprise di Indonesia.",
    },
    en: {
      title: "Software Solutions by Industry",
      description:
        "Business systems for retail, F&B, distribution, education, clinics, manufacturing, professional services, SMEs, and enterprises.",
    },
    zh: {
      title: "行业软件解决方案",
      description:
        "为零售、餐饮、分销、教育、诊所、制造、专业服务、中小企业及大型企业打造的业务系统。",
    },
  },
  pricing: {
    id: {
      title: "Harga Pembuatan Software & Aplikasi",
      description:
        "Harga jasa pembuatan website, aplikasi, ERP, POS, HRIS, CRM, dan custom software mulai dari Rp2.500.000. Semua harga dipublikasikan.",
    },
    en: {
      title: "Software & App Development Pricing",
      description:
        "Published pricing for websites, apps, ERP, POS, HRIS, CRM, and custom software development, starting from Rp2,500,000.",
    },
    zh: {
      title: "软件与应用开发价格",
      description:
        "网站、应用、ERP、POS、HRIS、CRM 与定制软件开发 Rp2,500,000 起，价格公开透明。",
    },
  },
  blog: {
    id: {
      title: "Blog: Panduan Sistem Bisnis & Software",
      description:
        "Panduan praktis seputar ERP, POS, HRIS, custom software, dan transformasi digital untuk pemilik bisnis dan tim operasional di Indonesia.",
    },
    en: {
      title: "Blog: Business Systems & Software Guides",
      description:
        "Practical guides on ERP, POS, HRIS, custom software, and digital transformation for business owners and operations teams.",
    },
    zh: {
      title: "博客：商业系统与软件指南",
      description: "面向企业主与运营团队的 ERP、POS、HRIS、定制软件与数字化转型实用指南。",
    },
  },
  about: {
    id: {
      title: "Tentang Kami",
      description:
        "PT Agsora Teknologi Indonesia adalah software house yang membantu bisnis membangun, mengintegrasikan, dan mengembangkan sistem digital.",
    },
    en: {
      title: "About Us",
      description:
        "PT Agsora Teknologi Indonesia is a software house that helps businesses build, integrate, and grow their digital systems.",
    },
    zh: {
      title: "关于我们",
      description:
        "PT Agsora Teknologi Indonesia 是一家软件开发公司，帮助企业构建、集成并持续发展数字化系统。",
    },
  },
  contact: {
    id: {
      title: "Konsultasi Gratis",
      description:
        "Hubungi AG·SORA untuk konsultasi gratis seputar pembuatan software, ERP, POS, HRIS, atau website. Tanpa biaya dan tanpa komitmen.",
    },
    en: {
      title: "Free Consultation",
      description:
        "Contact AG·SORA for a free consultation on software, ERP, POS, HRIS, or website development. No cost, no commitment.",
    },
    zh: {
      title: "免费咨询",
      description: "联系 AG·SORA，免费咨询软件、ERP、POS、HRIS 或网站开发。无需费用，无需承诺。",
    },
  },
  privacy: {
    id: {
      title: "Privacy Policy",
      description: `Kebijakan privasi ${brand} mengenai pengumpulan, penggunaan, dan perlindungan data pengguna.`,
    },
    en: {
      title: "Privacy Policy",
      description: `How ${brand} collects, uses, and protects user data.`,
    },
    zh: {
      title: "隐私政策",
      description: `${brand} 关于用户数据收集、使用与保护的隐私政策。`,
    },
  },
  terms: {
    id: {
      title: "Terms & Conditions",
      description: `Syarat dan ketentuan penggunaan layanan dan produk ${brand}.`,
    },
    en: {
      title: "Terms & Conditions",
      description: `Terms and conditions for using ${brand}'s services and products.`,
    },
    zh: {
      title: "条款与条件",
      description: `使用 ${brand} 服务与产品的条款与条件。`,
    },
  },
} satisfies Record<string, Record<Locale, Meta>>;

/** Title and description for blog archive page `page` of `total`. */
export function blogArchiveMeta(locale: Locale, page: number, total: number): Meta {
  switch (locale) {
    case "en":
      return {
        title: `Blog — Page ${page}`,
        description: `Page ${page} of ${total}: practical guides on ERP, POS, HRIS, CRM, and software development for businesses.`,
      };
    case "zh":
      return {
        title: `博客 — 第 ${page} 页`,
        description: `第 ${page} / ${total} 页：ERP、POS、HRIS、CRM 与软件开发实用指南。`,
      };
    default:
      return {
        title: `Blog — Halaman ${page}`,
        description: `Halaman ${page} dari ${total}: panduan praktis seputar ERP, POS, HRIS, CRM, dan pengembangan software untuk bisnis di Indonesia.`,
      };
  }
}
