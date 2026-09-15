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
  whyAgsora: { eyebrow: string; title: string; description: string };
  howWeWork: { eyebrow: string; title: string };
  servicesGrid: {
    eyebrow: string;
    title: string;
    description: string;
    seeAll: string;
    startingFrom: string;
  };
  productCard: {
    features: string;
    benefits: string;
    tryDemo: string;
    seePricing: string;
  };
  productSwitcher: {
    eyebrow: string;
    title: string;
    description: string;
    seeAll: string;
  };
  saasPricing: {
    popular: string;
    tryNow: string;
    complexTitle: string;
    complexDescription: string;
    contactSales: string;
  };
  pricingCategories: {
    websiteDigital: string;
    businessSystems: string;
    automationIntegration: string;
    supportEnterprise: string;
  };
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
    whyAgsora: {
      eyebrow: "Why AG·SORA",
      title: "Teknologi yang tumbuh bersama bisnis Anda",
      description:
        "Kami tidak menjual template — kami membangun sistem yang dirancang untuk kebutuhan spesifik dan arah pertumbuhan perusahaan Anda.",
    },
    howWeWork: {
      eyebrow: "How We Work",
      title: "Proses kerja yang jelas, dari ide hingga sistem berjalan",
    },
    servicesGrid: {
      eyebrow: "Custom Development",
      title: "Layanan yang membangun fondasi digital bisnis Anda",
      description:
        "Dari website sederhana hingga sistem enterprise — tim AG·SORA merancang solusi yang sesuai dengan proses kerja Anda.",
      seeAll: "Lihat Semua Layanan",
      startingFrom: "Mulai dari",
    },
    productCard: {
      features: "Fitur",
      benefits: "Manfaat Utama",
      tryDemo: "Coba Demo",
      seePricing: "Lihat Harga",
    },
    productSwitcher: {
      eyebrow: "Product Ecosystem",
      title: "Produk SaaS AG·SORA yang siap digunakan",
      description:
        "Bukan sekadar jasa development — AG·SORA juga menghadirkan produk software yang terus dikembangkan dan didukung penuh.",
      seeAll: "Lihat Semua Produk",
    },
    saasPricing: {
      popular: "Populer",
      tryNow: "Coba Sekarang",
      complexTitle: "Butuh sesuatu yang lebih kompleks?",
      complexDescription:
        "Untuk multi-cabang, integrasi khusus, atau kebutuhan SLA tertentu — mari rancang arsitektur yang tepat bersama.",
      contactSales: "Hubungi Sales",
    },
    pricingCategories: {
      websiteDigital: "Website & Digital",
      businessSystems: "Sistem Bisnis",
      automationIntegration: "Automation & Integrasi",
      supportEnterprise: "Support & Enterprise",
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
    whyAgsora: {
      eyebrow: "Why AG·SORA",
      title: "Technology that grows with your business",
      description:
        "We don't sell templates — we build systems designed for your company's specific needs and growth direction.",
    },
    howWeWork: {
      eyebrow: "How We Work",
      title: "A clear process, from idea to a running system",
    },
    servicesGrid: {
      eyebrow: "Custom Development",
      title: "Services that build the digital foundation of your business",
      description:
        "From simple websites to enterprise systems — the AG·SORA team designs solutions that fit how you work.",
      seeAll: "See All Services",
      startingFrom: "Starting from",
    },
    productCard: {
      features: "Features",
      benefits: "Main Benefits",
      tryDemo: "Try Demo",
      seePricing: "See Pricing",
    },
    productSwitcher: {
      eyebrow: "Product Ecosystem",
      title: "AG·SORA SaaS products, ready to use",
      description:
        "Not just development services — AG·SORA also builds software products that are continuously developed and fully supported.",
      seeAll: "See All Products",
    },
    saasPricing: {
      popular: "Most Popular",
      tryNow: "Try Now",
      complexTitle: "Need something more complex?",
      complexDescription:
        "For multi-branch operations, custom integrations, or specific SLA needs — let's design the right architecture together.",
      contactSales: "Contact Sales",
    },
    pricingCategories: {
      websiteDigital: "Website & Digital",
      businessSystems: "Business Systems",
      automationIntegration: "Automation & Integration",
      supportEnterprise: "Support & Enterprise",
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
    whyAgsora: {
      eyebrow: "为什么选择 AG·SORA",
      title: "与您的业务共同成长的技术",
      description:
        "我们不销售模板 — 我们构建的系统专为您公司的具体需求与成长方向而设计。",
    },
    howWeWork: {
      eyebrow: "我们的工作方式",
      title: "从想法到系统上线，流程清晰透明",
    },
    servicesGrid: {
      eyebrow: "定制开发",
      title: "为您的业务打造数字化基础的服务",
      description:
        "从简单网站到企业级系统 — AG·SORA 团队设计的方案贴合您的工作方式。",
      seeAll: "查看全部服务",
      startingFrom: "起价",
    },
    productCard: {
      features: "功能特性",
      benefits: "主要优势",
      tryDemo: "试用演示",
      seePricing: "查看价格",
    },
    productSwitcher: {
      eyebrow: "产品生态",
      title: "开箱即用的 AG·SORA SaaS 产品",
      description:
        "不仅仅是开发服务 — AG·SORA 还提供持续迭代、全程支持的软件产品。",
      seeAll: "查看全部产品",
    },
    saasPricing: {
      popular: "最受欢迎",
      tryNow: "立即试用",
      complexTitle: "需要更复杂的方案？",
      complexDescription:
        "针对多分店运营、特殊对接或特定 SLA 需求 — 让我们一起设计合适的架构。",
      contactSales: "联系销售",
    },
    pricingCategories: {
      websiteDigital: "网站与数字化",
      businessSystems: "业务系统",
      automationIntegration: "自动化与对接",
      supportEnterprise: "支持与企业方案",
    },
  },
};
