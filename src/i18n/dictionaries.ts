export type Dictionary = {
  nav: {
    services: string;
    industries: string;
    pricing: string;
    blog: string;
    about: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    whatsapp: string;
  };
  hero: {
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
    company: string;
    legal: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  themeToggle: { light: string; dark: string };
  langSwitch: { label: string };
  /** First crumb of every breadcrumb trail. */
  breadcrumbHome: string;
  skipLink: string;
  notFound: {
    eyebrow: string;
    title: string;
    description: string;
    home: string;
    contact: string;
  };
  /** Shown in the suggested language, to visitors whose browser prefers it. */
  langSuggest: { message: string; action: string; dismiss: string };
  howWeWork: { eyebrow: string; title: string };
  /** Homepage-only copy. */
  home: {
    /** Things a prospect can hold AG·SORA to — keep in sync with `commitments` and /pricing. */
    assurances: string[];
    visualLabel: string;
    /** Labels inside the hero's integration diagram. */
    visual: {
      title: string;
      internal: string;
      external: string;
      coreSub: string;
      /** ERP, POS, HRIS, CRM, Inventory, Dashboard — in that order. */
      modules: string[];
      /** Payments, marketplaces, WhatsApp, accounting, logistics, SSO — in that order. */
      services: string[];
      benefits: { title: string; text: string }[];
    };
    servicesTitle: string;
    servicesDescription: string;
    blogTitle: string;
    blogCta: string;
    faqTitle: string;
    ctaTitle: string;
    ctaWhatsapp: string;
    ctaEmail: string;
  };
  servicesGrid: {
    eyebrow: string;
    title: string;
    description: string;
    seeAll: string;
    startingFrom: string;
  };
  pricingCategories: {
    websiteDigital: string;
    businessSystems: string;
    automationIntegration: string;
    supportEnterprise: string;
  };
  capabilitiesSection: { eyebrow: string; title: string; description: string };
  principlesSection: { eyebrow: string; title: string; description: string };
  commitmentsSection: { eyebrow: string; title: string; description: string };
  aboutPage: {
    heroTitle: string;
    positioningEyebrow: string;
    positioningTitle: string;
    positioningDescription: string;
    brandPersonality: string;
    whatWeBelieveEyebrow: string;
    whatWeBelieveTitle: string;
  };
  industriesPage: {
    heroTitle: string;
    heroDescription: string;
    gridTitle: string;
    gridDescription: string;
  };
  contactPage: {
    heroTitle: string;
    heroDescription: string;
    contactInfo: string;
    email: string;
    whatsapp: string;
    whatsappCta: string;
    website: string;
    enterpriseNote: string;
  };
  contactForm: {
    name: string;
    namePlaceholder: string;
    company: string;
    companyPlaceholder: string;
    email: string;
    emailPlaceholder: string;
    whatsapp: string;
    whatsappPlaceholder: string;
    needType: string;
    needTypePlaceholder: string;
    needTypes: string[];
    budget: string;
    budgetPlaceholder: string;
    budgetRanges: string[];
    description: string;
    descriptionPlaceholder: string;
    submit: string;
    thankYou: string;
  };
  servicesPage: { heroTitle: string; heroDescription: string };
  pricingPage: {
    heroTitle: string;
    heroDescription: string;
    customDevEyebrow: string;
    customDevTitle: string;
    disclaimer: string;
  };
  blogPage: {
    heroTitle: string;
    heroDescription: string;
    pageTitle: string;
    pageLabel: string;
    latestEyebrow: string;
    latestTitle: string;
    readingTime: string;
    filterLabel: string;
    filterAll: string;
    filterResultsEyebrow: string;
    filterResultsDescription: string;
  };
  pagination: {
    previous: string;
    next: string;
    pageOf: string;
  };
  blogPost: {
    allArticles: string;
    recommendedEyebrow: string;
    recommendedTitle: string;
    recommendedFromHistoryTitle: string;
  };
};

export const dictionaries: Record<"id" | "en" | "zh", Dictionary> = {
  id: {
    nav: {
      services: "Services",
      industries: "Industries",
      pricing: "Pricing",
      blog: "Blog",
      about: "About",
      contact: "Contact",
      cta: "Konsultasi Gratis",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      whatsapp: "Chat WhatsApp",
    },
    hero: {
      titleLead: "Software house Indonesia untuk",
      titleHighlight: "sistem bisnis yang terintegrasi.",
      description:
        "PT Agsora Teknologi Indonesia membangun custom software, website, aplikasi, ERP, POS, HRIS, dan CRM — dirancang mengikuti proses kerja perusahaan Anda agar bekerja lebih efisien, terintegrasi, dan scalable.",
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
      company: "Company",
      legal: "Legal",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
    themeToggle: {
      light: "Mode terang",
      dark: "Mode gelap",
    },
    breadcrumbHome: "Beranda",
    skipLink: "Langsung ke konten utama",
    notFound: {
      eyebrow: "Error 404",
      title: "Halaman tidak ditemukan",
      description: "Halaman yang Anda cari mungkin sudah dipindahkan atau tidak tersedia.",
      home: "Kembali ke Beranda",
      contact: "Hubungi Kami",
    },
    langSuggest: {
      message: "Halaman ini juga tersedia dalam Bahasa Indonesia.",
      action: "Buka versi Indonesia",
      dismiss: "Tutup",
    },
    langSwitch: {
      label: "Bahasa",
    },
    howWeWork: {
      eyebrow: "How We Work",
      title: "Proses kerja yang jelas, dari ide hingga sistem berjalan",
    },
    home: {
      assurances: [
        "Konsultasi gratis",
        "Harga dipublikasikan",
        "Ruang lingkup tertulis",
        "Dokumentasi & pelatihan",
      ],
      visualLabel:
        "Diagram integrasi: ERP, POS, HRIS, CRM, inventori, dan dashboard terhubung melalui AG·SORA Core ke payment gateway, marketplace, WhatsApp API, software akuntansi, ekspedisi, dan single sign-on.",
      visual: {
        title: "Peta integrasi",
        internal: "Sistem internal",
        external: "Layanan pihak ketiga",
        coreSub: "API & data layer",
        modules: ["ERP", "POS", "HRIS", "CRM", "Inventori", "Dashboard"],
        services: ["Payment & QRIS", "Marketplace", "WhatsApp API", "Akuntansi", "Ekspedisi", "Single sign-on"],
        benefits: [
          { title: "Satu sumber data", text: "Tanpa input ganda antar divisi." },
          { title: "API terbuka", text: "Terhubung ke sistem yang sudah Anda pakai." },
          { title: "Real-time", text: "Perubahan langsung terlihat lintas modul." },
        ],
      },
      servicesTitle: "Jasa pembuatan software & aplikasi untuk bisnis Anda",
      servicesDescription:
        "Custom software, ERP, POS, HRIS, CRM, website, dan aplikasi mobile — dirancang mengikuti proses kerja perusahaan Anda, dengan harga yang dipublikasikan.",
      blogTitle: "Panduan & wawasan sistem bisnis",
      blogCta: "Lihat semua artikel",
      faqTitle: "Pertanyaan yang sering diajukan",
      ctaTitle: "Siap membangun sistem yang tumbuh bersama bisnis Anda?",
      ctaWhatsapp: "Chat via WhatsApp",
      ctaEmail: "atau kirim email ke",
    },
    servicesGrid: {
      eyebrow: "Custom Development",
      title: "Layanan yang membangun fondasi digital bisnis Anda",
      description:
        "Dari website sederhana hingga sistem enterprise — tim AG·SORA merancang solusi yang sesuai dengan proses kerja Anda.",
      seeAll: "Lihat Semua Layanan",
      startingFrom: "Mulai dari",
    },
    pricingCategories: {
      websiteDigital: "Website & Digital",
      businessSystems: "Sistem Bisnis",
      automationIntegration: "Automation & Integrasi",
      supportEnterprise: "Support & Enterprise",
    },
    capabilitiesSection: {
      eyebrow: "Capabilities",
      title: "Apa yang bisa kami bangun dan hubungkan",
      description:
        "Ruang lingkup teknis yang kami tangani — dari bentuk aplikasinya, sistem yang perlu disambungkan, sampai cara sistem itu dijalankan.",
    },
    principlesSection: {
      eyebrow: "How We Think",
      title: "Cara kami memutuskan saat membangun sistem",
      description:
        "Setiap project punya banyak persimpangan teknis. Ini prinsip yang kami pakai untuk memilih arah ketika tidak ada jawaban yang jelas benar.",
    },
    commitmentsSection: {
      eyebrow: "Our Commitments",
      title: "Yang kami pastikan di setiap kerja sama",
      description:
        "Kepercayaan dibangun dari hal-hal yang bisa dipegang, bukan dari klaim. Berikut yang berlaku pada setiap project AG·SORA.",
    },
    aboutPage: {
      heroTitle: "Perusahaan teknologi yang membangun fondasi digital bisnis Indonesia",
      positioningEyebrow: "Positioning",
      positioningTitle: "Modern technology company untuk bisnis yang ingin bertumbuh",
      positioningDescription:
        "AG·SORA adalah mitra pengembangan software custom: kami memetakan proses bisnis Anda lebih dulu, lalu membangun sistem yang mengikutinya — bukan memaksa bisnis Anda menyesuaikan diri dengan template.",
      brandPersonality: "Brand Personality",
      whatWeBelieveEyebrow: "What We Believe",
      whatWeBelieveTitle: "Prinsip yang memandu setiap sistem yang kami bangun",
    },
    industriesPage: {
      heroTitle: "Sistem yang menyesuaikan kebutuhan industri Anda",
      heroDescription:
        "Dari UMKM hingga enterprise multi-cabang — AG·SORA merancang solusi yang relevan dengan tantangan operasional di industri Anda.",
      gridTitle: "Dirancang untuk berbagai jenis bisnis",
      gridDescription:
        "Sistem AG·SORA dirancang fleksibel untuk kebutuhan operasional yang berbeda di setiap industri.",
    },
    contactPage: {
      heroTitle: "Mari diskusikan kebutuhan sistem bisnis Anda",
      heroDescription:
        "Isi form berikut dan tim AG·SORA akan menghubungi Anda untuk konsultasi gratis mengenai kebutuhan project Anda.",
      contactInfo: "Informasi Kontak",
      email: "Email",
      whatsapp: "WhatsApp",
      whatsappCta: "Chat dengan tim kami",
      website: "Website",
      enterpriseNote:
        "Untuk kebutuhan enterprise atau multi-cabang, tim kami akan menjadwalkan sesi diskusi untuk merancang arsitektur yang tepat bagi organisasi Anda.",
    },
    contactForm: {
      name: "Nama",
      namePlaceholder: "Nama lengkap",
      company: "Perusahaan",
      companyPlaceholder: "Nama perusahaan",
      email: "Email",
      emailPlaceholder: "nama@perusahaan.com",
      whatsapp: "WhatsApp",
      whatsappPlaceholder: "08xx-xxxx-xxxx",
      needType: "Jenis kebutuhan",
      needTypePlaceholder: "Pilih jenis kebutuhan",
      needTypes: [
        "Custom Software",
        "Website Development",
        "Mobile Application",
        "ERP",
        "POS",
        "HRIS",
        "CRM",
        "AI Automation / API Integration",
        "Lainnya",
      ],
      budget: "Budget range",
      budgetPlaceholder: "Pilih budget range",
      budgetRanges: [
        "< Rp5 juta",
        "Rp5 - 15 juta",
        "Rp15 - 30 juta",
        "Rp30 - 75 juta",
        "> Rp75 juta",
        "Belum tahu / perlu diskusi",
      ],
      description: "Deskripsi project",
      descriptionPlaceholder: "Ceritakan kebutuhan dan tantangan bisnis Anda...",
      submit: "Kirim via WhatsApp",
      thankYou:
        "Terima kasih! Pesan Anda telah disiapkan di WhatsApp — silakan kirim untuk menyelesaikan permintaan konsultasi.",
    },
    servicesPage: {
      heroTitle: "Solusi teknologi yang dirancang untuk cara kerja Anda",
      heroDescription:
        "AG·SORA membantu bisnis membangun software, sistem, dan platform digital yang sesuai dengan proses operasional dan tujuan pertumbuhan jangka panjang.",
    },
    pricingPage: {
      heroTitle: "Accessible technology for growing businesses",
      heroDescription:
        "Simple needs start small. Complex systems scale with your business. Semua harga di bawah adalah harga mulai dari.",
      customDevEyebrow: "Custom Development",
      customDevTitle: "Harga mulai dari untuk setiap layanan",
      disclaimer:
        "Harga mulai dari dan dapat berubah sesuai fitur, jumlah user, integrasi, kompleksitas workflow, timeline, serta kebutuhan support. Biaya pihak ketiga tidak termasuk kecuali dinyatakan lain.",
    },
    blogPage: {
      heroTitle: "Catatan tentang membangun sistem bisnis",
      heroDescription:
        "Hal-hal praktis yang kami temui saat merancang dan menerapkan sistem — ditulis untuk pemilik bisnis dan tim operasional, bukan hanya untuk developer.",
      pageTitle: "Semua artikel",
      pageLabel: "Halaman",
      latestEyebrow: "Terbaru",
      latestTitle: "Artikel terbaru",
      readingTime: "menit baca",
      filterLabel: "Filter kategori blog",
      filterAll: "Semua",
      filterResultsEyebrow: "Kategori",
      filterResultsDescription: "{count} artikel dalam kategori ini, urut dari yang terbaru.",
    },
    pagination: {
      previous: "Sebelumnya",
      next: "Berikutnya",
      pageOf: "Halaman {current} dari {total}",
    },
    blogPost: {
      allArticles: "Semua artikel",
      recommendedEyebrow: "Rekomendasi untuk Anda",
      recommendedTitle: "Bacaan yang berkaitan dengan topik ini",
      recommendedFromHistoryTitle: "Dipilih berdasarkan bacaan Anda sebelumnya",
    },
  },
  en: {
    nav: {
      services: "Services",
      industries: "Industries",
      pricing: "Pricing",
      blog: "Blog",
      about: "About",
      contact: "Contact",
      cta: "Free Consultation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      whatsapp: "Chat on WhatsApp",
    },
    hero: {
      titleLead: "Indonesian software house for",
      titleHighlight: "integrated business systems.",
      description:
        "PT Agsora Teknologi Indonesia builds custom software, websites, apps, ERP, POS, HRIS, and CRM — designed around how your company works, so it runs more efficiently, stays integrated, and scales with ease.",
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
      company: "Company",
      legal: "Legal",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
    themeToggle: {
      light: "Light mode",
      dark: "Dark mode",
    },
    breadcrumbHome: "Home",
    skipLink: "Skip to main content",
    notFound: {
      eyebrow: "Error 404",
      title: "Page not found",
      description: "The page you're looking for may have moved or is no longer available.",
      home: "Back to Home",
      contact: "Contact Us",
    },
    langSuggest: {
      message: "This page is also available in English.",
      action: "View in English",
      dismiss: "Close",
    },
    langSwitch: {
      label: "Language",
    },
    howWeWork: {
      eyebrow: "How We Work",
      title: "A clear process, from idea to a running system",
    },
    home: {
      assurances: [
        "Free consultation",
        "Published pricing",
        "Written scope of work",
        "Documentation & training",
      ],
      visualLabel:
        "Integration diagram: ERP, POS, HRIS, CRM, inventory, and dashboards connect through AG·SORA Core to payment gateways, marketplaces, the WhatsApp API, accounting software, logistics, and single sign-on.",
      visual: {
        title: "Integration map",
        internal: "Your systems",
        external: "Third-party services",
        coreSub: "API & data layer",
        modules: ["ERP", "POS", "HRIS", "CRM", "Inventory", "Dashboard"],
        services: ["Payments & QRIS", "Marketplaces", "WhatsApp API", "Accounting", "Logistics", "Single sign-on"],
        benefits: [
          { title: "One source of data", text: "No double entry between teams." },
          { title: "Open APIs", text: "Connects to the tools you already use." },
          { title: "Real-time", text: "Changes show up across modules instantly." },
        ],
      },
      servicesTitle: "Custom software & app development for your business",
      servicesDescription:
        "Custom software, ERP, POS, HRIS, CRM, websites, and mobile apps — designed around how your company works, with published pricing.",
      blogTitle: "Guides & insights on business systems",
      blogCta: "See all articles",
      faqTitle: "Frequently asked questions",
      ctaTitle: "Ready to build a system that grows with your business?",
      ctaWhatsapp: "Chat on WhatsApp",
      ctaEmail: "or email us at",
    },
    servicesGrid: {
      eyebrow: "Custom Development",
      title: "Services that build the digital foundation of your business",
      description:
        "From simple websites to enterprise systems — the AG·SORA team designs solutions that fit how you work.",
      seeAll: "See All Services",
      startingFrom: "Starting from",
    },
    pricingCategories: {
      websiteDigital: "Website & Digital",
      businessSystems: "Business Systems",
      automationIntegration: "Automation & Integration",
      supportEnterprise: "Support & Enterprise",
    },
    capabilitiesSection: {
      eyebrow: "Capabilities",
      title: "What we can build and connect",
      description:
        "The technical scope we cover — from the type of application, to the systems that need connecting, to how it all runs.",
    },
    principlesSection: {
      eyebrow: "How We Think",
      title: "How we decide when building a system",
      description:
        "Every project has many technical forks in the road. These are the principles we use to choose a direction when there's no clearly right answer.",
    },
    commitmentsSection: {
      eyebrow: "Our Commitments",
      title: "What we guarantee on every engagement",
      description:
        "Trust is built on things you can hold us to, not claims. Here's what applies to every AG·SORA project.",
    },
    aboutPage: {
      heroTitle: "A technology company building the digital foundation for Indonesian businesses",
      positioningEyebrow: "Positioning",
      positioningTitle: "A modern technology company for businesses ready to grow",
      positioningDescription:
        "AG·SORA is a custom software development partner: we map your business process first, then build a system that follows it — instead of forcing your business to fit a template.",
      brandPersonality: "Brand Personality",
      whatWeBelieveEyebrow: "What We Believe",
      whatWeBelieveTitle: "The principles guiding every system we build",
    },
    industriesPage: {
      heroTitle: "Systems tailored to your industry's needs",
      heroDescription:
        "From SMEs to multi-branch enterprises — AG·SORA designs solutions relevant to the operational challenges in your industry.",
      gridTitle: "Designed for every kind of business",
      gridDescription:
        "AG·SORA systems are built flexibly for the different operational needs of each industry.",
    },
    contactPage: {
      heroTitle: "Let's discuss your business system needs",
      heroDescription:
        "Fill out the form below and the AG·SORA team will reach out for a free consultation about your project needs.",
      contactInfo: "Contact Information",
      email: "Email",
      whatsapp: "WhatsApp",
      whatsappCta: "Chat with our team",
      website: "Website",
      enterpriseNote:
        "For enterprise or multi-branch needs, our team will schedule a discussion to design the right architecture for your organization.",
    },
    contactForm: {
      name: "Name",
      namePlaceholder: "Full name",
      company: "Company",
      companyPlaceholder: "Company name",
      email: "Email",
      emailPlaceholder: "name@company.com",
      whatsapp: "WhatsApp",
      whatsappPlaceholder: "08xx-xxxx-xxxx",
      needType: "Type of need",
      needTypePlaceholder: "Select a type of need",
      needTypes: [
        "Custom Software",
        "Website Development",
        "Mobile Application",
        "ERP",
        "POS",
        "HRIS",
        "CRM",
        "AI Automation / API Integration",
        "Other",
      ],
      budget: "Budget range",
      budgetPlaceholder: "Select a budget range",
      budgetRanges: [
        "< Rp5 million",
        "Rp5 - 15 million",
        "Rp15 - 30 million",
        "Rp30 - 75 million",
        "> Rp75 million",
        "Not sure yet / need to discuss",
      ],
      description: "Project description",
      descriptionPlaceholder: "Tell us about your business needs and challenges...",
      submit: "Send via WhatsApp",
      thankYou:
        "Thank you! Your message has been prepared in WhatsApp — please send it to complete your consultation request.",
    },
    servicesPage: {
      heroTitle: "Technology solutions designed for how you work",
      heroDescription:
        "AG·SORA helps businesses build software, systems, and digital platforms that fit your operational processes and long-term growth goals.",
    },
    pricingPage: {
      heroTitle: "Accessible technology for growing businesses",
      heroDescription:
        "Simple needs start small. Complex systems scale with your business. All prices below are starting prices.",
      customDevEyebrow: "Custom Development",
      customDevTitle: "Starting price for every service",
      disclaimer:
        "Prices are starting prices and may change based on features, number of users, integrations, workflow complexity, timeline, and support needs. Third-party costs are not included unless stated otherwise.",
    },
    blogPage: {
      heroTitle: "Notes on building business systems",
      heroDescription:
        "Practical things we've learned designing and implementing systems — written for business owners and operations teams, not just developers.",
      pageTitle: "All articles",
      pageLabel: "Page",
      latestEyebrow: "Latest",
      latestTitle: "Latest articles",
      readingTime: "min read",
      filterLabel: "Filter blog by category",
      filterAll: "All",
      filterResultsEyebrow: "Category",
      filterResultsDescription: "{count} articles in this category, newest first.",
    },
    pagination: {
      previous: "Previous",
      next: "Next",
      pageOf: "Page {current} of {total}",
    },
    blogPost: {
      allArticles: "All articles",
      recommendedEyebrow: "Recommended for you",
      recommendedTitle: "Reading related to this topic",
      recommendedFromHistoryTitle: "Picked based on what you've been reading",
    },
  },
  zh: {
    nav: {
      services: "服务",
      industries: "行业",
      pricing: "价格",
      blog: "博客",
      about: "关于我们",
      contact: "联系我们",
      cta: "免费咨询",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
      whatsapp: "WhatsApp 咨询",
    },
    hero: {
      titleLead: "印尼软件公司，打造",
      titleHighlight: "一体化商业系统。",
      description:
        "PT Agsora Teknologi Indonesia 为企业构建定制软件、网站、应用、ERP、POS、HRIS 和 CRM 系统——贴合贵公司的业务流程设计，帮助您的企业更高效、更集成、更具扩展性地运营。",
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
      company: "公司",
      legal: "法律",
      rights: "版权所有。",
      privacy: "隐私政策",
      terms: "条款与条件",
    },
    themeToggle: {
      light: "浅色模式",
      dark: "深色模式",
    },
    breadcrumbHome: "首页",
    skipLink: "跳转到主要内容",
    notFound: {
      eyebrow: "错误 404",
      title: "页面未找到",
      description: "您访问的页面可能已被移动或不再可用。",
      home: "返回首页",
      contact: "联系我们",
    },
    langSuggest: {
      message: "本页面也提供中文版本。",
      action: "查看中文版",
      dismiss: "关闭",
    },
    langSwitch: {
      label: "语言",
    },
    howWeWork: {
      eyebrow: "我们的工作方式",
      title: "从想法到系统上线，流程清晰透明",
    },
    home: {
      assurances: ["免费咨询", "价格公开透明", "书面工作范围", "文档与培训"],
      visualLabel:
        "集成架构图：ERP、POS、HRIS、CRM、库存与仪表盘通过 AG·SORA Core，与支付网关、电商平台、WhatsApp API、会计软件、物流及单点登录服务相连。",
      visual: {
        title: "集成架构",
        internal: "内部系统",
        external: "第三方服务",
        coreSub: "API 与数据层",
        modules: ["ERP", "POS", "HRIS", "CRM", "库存", "仪表盘"],
        services: ["支付与 QRIS", "电商平台", "WhatsApp API", "会计软件", "物流", "单点登录"],
        benefits: [
          { title: "统一数据源", text: "部门之间无需重复录入。" },
          { title: "开放 API", text: "对接您已在使用的系统。" },
          { title: "实时同步", text: "变更即时同步到各个模块。" },
        ],
      },
      // \u200B marks word boundaries — these headings (.zh-phrases) only
      // break there or at punctuation, so a word like 业务 never splits.
      servicesTitle: "为您的企业\u200B定制\u200B软件与应用",
      servicesDescription:
        "定制软件、ERP、POS、HRIS、CRM、网站与移动应用 —— 贴合贵公司的业务流程设计，价格公开透明。",
      blogTitle: "商业系统\u200B指南与洞见",
      blogCta: "查看全部文章",
      faqTitle: "常见问题解答",
      ctaTitle: "准备好构建\u200B与您业务\u200B共同成长的\u200B系统了吗？",
      ctaWhatsapp: "通过 WhatsApp 咨询",
      ctaEmail: "或发送邮件至",
    },
    servicesGrid: {
      eyebrow: "定制开发",
      title: "为您的业务打造数字化基础的服务",
      description:
        "从简单网站到企业级系统 — AG·SORA 团队设计的方案贴合您的工作方式。",
      seeAll: "查看全部服务",
      startingFrom: "起价",
    },
    pricingCategories: {
      websiteDigital: "网站与数字化",
      businessSystems: "业务系统",
      automationIntegration: "自动化与对接",
      supportEnterprise: "支持与企业方案",
    },
    capabilitiesSection: {
      eyebrow: "能力范围",
      title: "我们能构建与对接的内容",
      description:
        "我们所覆盖的技术范围 — 从应用形态、需要对接的系统，到系统的运行方式。",
    },
    principlesSection: {
      eyebrow: "我们的思考方式",
      title: "构建系统时我们如何做决策",
      description:
        "每个项目都存在诸多技术上的分岔点。以下是当没有明确正确答案时，我们用来判断方向的原则。",
    },
    commitmentsSection: {
      eyebrow: "我们的承诺",
      title: "每次合作中我们必定坚守的事项",
      description:
        "信任建立在可被验证的事物之上，而非空口承诺。以下适用于每一个 AG·SORA 项目。",
    },
    aboutPage: {
      heroTitle: "为印尼企业构建数字化基础的科技公司",
      positioningEyebrow: "定位",
      positioningTitle: "服务于成长型企业的现代科技公司",
      positioningDescription:
        "AG·SORA 是定制软件开发合作伙伴：我们先梳理您的业务流程，再构建贴合流程的系统，而不是让您的业务去迁就模板。",
      brandPersonality: "品牌个性",
      whatWeBelieveEyebrow: "我们的理念",
      whatWeBelieveTitle: "指导我们构建每个系统的原则",
    },
    industriesPage: {
      heroTitle: "贴合您所在行业需求的系统",
      heroDescription:
        "从中小微企业到多分店企业 — AG·SORA 设计的方案贴合您行业中的实际运营挑战。",
      gridTitle: "为各类企业量身打造",
      gridDescription:
        "AG·SORA 的系统设计灵活，可满足各行业不同的运营需求。",
    },
    contactPage: {
      heroTitle: "让我们一起探讨您的业务系统需求",
      heroDescription:
        "填写以下表单，AG·SORA 团队将与您联系，提供关于项目需求的免费咨询。",
      contactInfo: "联系方式",
      email: "邮箱",
      whatsapp: "WhatsApp",
      whatsappCta: "与我们的团队聊天",
      website: "网站",
      enterpriseNote:
        "如有企业级或多分店需求，我们的团队将安排讨论，为您的组织设计合适的架构。",
    },
    contactForm: {
      name: "姓名",
      namePlaceholder: "请输入姓名",
      company: "公司",
      companyPlaceholder: "公司名称",
      email: "邮箱",
      emailPlaceholder: "name@company.com",
      whatsapp: "WhatsApp",
      whatsappPlaceholder: "08xx-xxxx-xxxx",
      needType: "需求类型",
      needTypePlaceholder: "请选择需求类型",
      needTypes: [
        "定制软件",
        "网站开发",
        "移动应用",
        "ERP",
        "POS",
        "HRIS",
        "CRM",
        "AI 自动化 / API 对接",
        "其他",
      ],
      budget: "预算范围",
      budgetPlaceholder: "请选择预算范围",
      budgetRanges: [
        "< 500万印尼盾",
        "500万 - 1500万印尼盾",
        "1500万 - 3000万印尼盾",
        "3000万 - 7500万印尼盾",
        "> 7500万印尼盾",
        "尚未确定 / 需进一步讨论",
      ],
      description: "项目描述",
      descriptionPlaceholder: "请描述您的业务需求与挑战……",
      submit: "通过 WhatsApp 发送",
      thankYou:
        "感谢您！您的消息已在 WhatsApp 中准备好 — 请发送以完成咨询请求。",
    },
    servicesPage: {
      heroTitle: "为您的工作方式量身设计的技术解决方案",
      heroDescription:
        "AG·SORA 帮助企业构建贴合运营流程与长期增长目标的软件、系统与数字平台。",
    },
    pricingPage: {
      heroTitle: "面向成长型企业的普惠科技",
      heroDescription:
        "简单需求可以从小做起，复杂系统则随业务同步扩展。以下均为起始价格。",
      customDevEyebrow: "定制开发",
      customDevTitle: "各项服务起始价格",
      disclaimer:
        "以上为起始价格，实际费用将根据功能、用户数量、对接需求、流程复杂度、工期及支持需求而有所不同。除非另有说明，第三方费用不包含在内。",
    },
    blogPage: {
      heroTitle: "关于构建业务系统的笔记",
      heroDescription:
        "我们在设计与实施系统过程中总结的实用经验 — 面向企业主与运营团队撰写，而不仅仅是开发者。",
      pageTitle: "全部文章",
      pageLabel: "第",
      latestEyebrow: "最新",
      latestTitle: "最新文章",
      readingTime: "分钟阅读",
      filterLabel: "按分类筛选博客",
      filterAll: "全部",
      filterResultsEyebrow: "分类",
      filterResultsDescription: "该分类下共 {count} 篇文章，按最新排序。",
    },
    pagination: {
      previous: "上一页",
      next: "下一页",
      pageOf: "第 {current} 页，共 {total} 页",
    },
    blogPost: {
      allArticles: "所有文章",
      recommendedEyebrow: "为您推荐",
      recommendedTitle: "与此主题相关的阅读",
      recommendedFromHistoryTitle: "根据您之前的阅读为您精选",
    },
  },
};
