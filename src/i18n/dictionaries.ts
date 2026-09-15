export type Dictionary = {
  nav: {
    services: string;
    products: string;
    industries: string;
    pricing: string;
    portfolio: string;
    blog: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    kicker: string;
    titleLead: string;
    titleHighlight: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  clientLogos: { label: string };
  contactCta: {
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  faqSection: {
    eyebrow: string;
    title: string;
    description: string;
    seeAll: string;
  };
  footer: {
    tagline: string;
    services: string;
    products: string;
    company: string;
    legal: string;
    rights: string;
  };
  themeToggle: { light: string; dark: string };
  langSwitch: { label: string };
};

export const dictionaries: Record<"id" | "en" | "zh", Dictionary> = {
  id: {
    nav: {
      services: "Services",
      products: "Products",
      industries: "Industries",
      pricing: "Pricing",
      portfolio: "Portfolio",
      blog: "Blog",
      about: "About",
      contact: "Contact",
      cta: "Konsultasi Gratis",
    },
    hero: {
      kicker: "Build smarter systems. Grow without limits.",
      titleLead: "Software house Indonesia untuk",
      titleHighlight: "sistem bisnis yang terintegrasi.",
      description:
        "PT Agsora Teknologi Indonesia membangun custom software, ERP, POS, HRIS, dan CRM — serta produk SaaS siap pakai — agar perusahaan Anda bekerja lebih efisien, terintegrasi, dan scalable.",
      ctaPrimary: "Konsultasi Gratis",
      ctaSecondary: "Lihat Solusi",
    },
    clientLogos: {
      label: "Dipercaya oleh",
    },
    contactCta: {
      title: "Siap membangun sistem yang tumbuh bersama bisnis Anda?",
      description:
        "Diskusikan kebutuhan Anda dengan tim AG·SORA — tanpa biaya, tanpa komitmen.",
      ctaPrimary: "Konsultasi Gratis",
      ctaSecondary: "Request Proposal",
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "Pertanyaan yang sering diajukan",
      description:
        "Hal-hal yang biasanya ditanyakan sebelum memulai project. Kalau pertanyaan Anda belum terjawab di sini, silakan hubungi kami langsung.",
      seeAll: "Lihat semua pertanyaan",
    },
    footer: {
      tagline: "Adaptive Growth. Smart Operations. Real Advancement.",
      services: "Services",
      products: "Products",
      company: "Company",
      legal: "Legal",
      rights: "All rights reserved.",
    },
    themeToggle: {
      light: "Mode terang",
      dark: "Mode gelap",
    },
    langSwitch: {
      label: "Bahasa",
    },
  },
  en: {
    nav: {
      services: "Services",
      products: "Products",
      industries: "Industries",
      pricing: "Pricing",
      portfolio: "Portfolio",
      blog: "Blog",
      about: "About",
      contact: "Contact",
      cta: "Free Consultation",
    },
    hero: {
      kicker: "Build smarter systems. Grow without limits.",
      titleLead: "Indonesian software house for",
      titleHighlight: "integrated business systems.",
      description:
        "PT Agsora Teknologi Indonesia builds custom software, ERP, POS, HRIS, and CRM — plus ready-to-use SaaS products — so your company works more efficiently, stays integrated, and scales with ease.",
      ctaPrimary: "Free Consultation",
      ctaSecondary: "See Solutions",
    },
    clientLogos: {
      label: "Trusted by",
    },
    contactCta: {
      title: "Ready to build a system that grows with your business?",
      description:
        "Discuss your needs with the AG·SORA team — no cost, no commitment.",
      ctaPrimary: "Free Consultation",
      ctaSecondary: "Request Proposal",
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      description:
        "The things prospects usually ask before starting a project. If your question isn't answered here, reach out to us directly.",
      seeAll: "See all questions",
    },
    footer: {
      tagline: "Adaptive Growth. Smart Operations. Real Advancement.",
      services: "Services",
      products: "Products",
      company: "Company",
      legal: "Legal",
      rights: "All rights reserved.",
    },
    themeToggle: {
      light: "Light mode",
      dark: "Dark mode",
    },
    langSwitch: {
      label: "Language",
    },
  },
  zh: {
    nav: {
      services: "服务",
      products: "产品",
      industries: "行业",
      pricing: "价格",
      portfolio: "作品集",
      blog: "博客",
      about: "关于我们",
      contact: "联系我们",
      cta: "免费咨询",
    },
    hero: {
      kicker: "构建更智能的系统，无限成长。",
      titleLead: "印尼软件公司，打造",
      titleHighlight: "一体化商业系统。",
      description:
        "PT Agsora Teknologi Indonesia 为企业构建定制软件、ERP、POS、HRIS 和 CRM 系统，并提供开箱即用的 SaaS 产品，帮助您的企业更高效、更集成、更具扩展性地运营。",
      ctaPrimary: "免费咨询",
      ctaSecondary: "查看解决方案",
    },
    clientLogos: {
      label: "客户信赖",
    },
    contactCta: {
      title: "准备好构建与您业务共同成长的系统了吗？",
      description: "与 AG·SORA 团队讨论您的需求 — 完全免费，无需承诺。",
      ctaPrimary: "免费咨询",
      ctaSecondary: "索取方案",
    },
    faqSection: {
      eyebrow: "常见问题",
      title: "常见问题解答",
      description:
        "这里是客户在开始项目前通常会问的问题。如果您的问题没有在这里找到答案，请直接联系我们。",
      seeAll: "查看所有问题",
    },
    footer: {
      tagline: "Adaptive Growth. Smart Operations. Real Advancement.",
      services: "服务",
      products: "产品",
      company: "公司",
      legal: "法律",
      rights: "版权所有。",
    },
    themeToggle: {
      light: "浅色模式",
      dark: "深色模式",
    },
    langSwitch: {
      label: "语言",
    },
  },
};
