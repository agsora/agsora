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
  productsPage: { heroTitle: string; heroDescription: string };
  portfolioPage: {
    heroTitle: string;
    heroDescription: string;
    showcaseEyebrow: string;
    showcaseTitle: string;
  };
  pricingPage: {
    heroTitle: string;
    heroDescription: string;
    customDevEyebrow: string;
    customDevTitle: string;
    saasEyebrow: string;
    saasTitle: string;
    saasDescription: string;
    disclaimer: string;
  };
  blogPage: {
    heroTitle: string;
    heroDescription: string;
    pageTitle: string;
    pageLabel: string;
    editorPickEyebrow: string;
    editorPickTitle: string;
    editorPickDescription: string;
    latestEyebrow: string;
    latestTitle: string;
    readingTime: string;
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
        "AG·SORA berdiri di antara dua peran: mitra pengembangan software custom, dan penyedia produk SaaS yang siap digunakan. Kombinasi ini memungkinkan kami memahami kebutuhan bisnis secara mendalam sekaligus menghadirkan solusi yang matang dan teruji.",
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
        "Produk SaaS AG·SORA",
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
    productsPage: {
      heroTitle: "Produk software AG·SORA untuk operasional yang lebih ringan",
      heroDescription:
        "Setiap produk dirancang agar mudah digunakan sejak hari pertama, dengan paket yang bisa disesuaikan seiring pertumbuhan bisnis Anda.",
    },
    portfolioPage: {
      heroTitle: "Contoh kerja dan kapasitas tim kami",
      heroDescription:
        "Implementasi yang dikerjakan tim internal untuk mendemonstrasikan kualitas build — bukan case study klien dengan metrik bisnis. Case study klien dengan hasil terukur akan tayang setelah data dan persetujuan tersedia.",
      showcaseEyebrow: "Capability Showcase",
      showcaseTitle: "Implementasi yang pernah kami bangun",
    },
    pricingPage: {
      heroTitle: "Accessible technology for growing businesses",
      heroDescription:
        "Simple needs start small. Complex systems scale with your business. Semua harga di bawah adalah harga mulai dari.",
      customDevEyebrow: "Custom Development",
      customDevTitle: "Harga mulai dari untuk setiap layanan",
      saasEyebrow: "SaaS Products",
      saasTitle: "Paket berlangganan produk AG·SORA",
      saasDescription: "Mulai dari kebutuhan tim kecil hingga operasional multi-outlet.",
      disclaimer:
        "Harga mulai dari dan dapat berubah sesuai fitur, jumlah user, integrasi, kompleksitas workflow, timeline, serta kebutuhan support. Biaya pihak ketiga tidak termasuk kecuali dinyatakan lain.",
    },
    blogPage: {
      heroTitle: "Catatan tentang membangun sistem bisnis",
      heroDescription:
        "Hal-hal praktis yang kami temui saat merancang dan menerapkan sistem — ditulis untuk pemilik bisnis dan tim operasional, bukan hanya untuk developer.",
      pageTitle: "Semua artikel",
      pageLabel: "Halaman",
      editorPickEyebrow: "Rekomendasi editor",
      editorPickTitle: "Mulai dari sini",
      editorPickDescription:
        "Artikel yang paling berguna dibaca lebih dulu jika Anda sedang mempertimbangkan sistem baru.",
      latestEyebrow: "Terbaru",
      latestTitle: "Artikel terbaru",
      readingTime: "menit baca",
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
        "AG·SORA stands between two roles: a custom software development partner, and a provider of ready-to-use SaaS products. This combination lets us understand business needs deeply while delivering mature, proven solutions.",
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
        "AG·SORA SaaS Product",
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
    productsPage: {
      heroTitle: "AG·SORA software products for lighter operations",
      heroDescription:
        "Every product is designed to be easy to use from day one, with plans that adapt as your business grows.",
    },
    portfolioPage: {
      heroTitle: "Examples of our work and team capability",
      heroDescription:
        "Implementations built by our internal team to demonstrate build quality — not client case studies with business metrics. Client case studies with measured results will be published once data and approval are available.",
      showcaseEyebrow: "Capability Showcase",
      showcaseTitle: "Implementations we've built",
    },
    pricingPage: {
      heroTitle: "Accessible technology for growing businesses",
      heroDescription:
        "Simple needs start small. Complex systems scale with your business. All prices below are starting prices.",
      customDevEyebrow: "Custom Development",
      customDevTitle: "Starting price for every service",
      saasEyebrow: "SaaS Products",
      saasTitle: "AG·SORA product subscription plans",
      saasDescription: "From small team needs to multi-outlet operations.",
      disclaimer:
        "Prices are starting prices and may change based on features, number of users, integrations, workflow complexity, timeline, and support needs. Third-party costs are not included unless stated otherwise.",
    },
    blogPage: {
      heroTitle: "Notes on building business systems",
      heroDescription:
        "Practical things we've learned designing and implementing systems — written for business owners and operations teams, not just developers.",
      pageTitle: "All articles",
      pageLabel: "Page",
      editorPickEyebrow: "Editor's Picks",
      editorPickTitle: "Start here",
      editorPickDescription:
        "The most useful articles to read first if you're considering a new system.",
      latestEyebrow: "Latest",
      latestTitle: "Latest articles",
      readingTime: "min read",
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
        "AG·SORA 兼具两种角色：定制软件开发合作伙伴，以及开箱即用 SaaS 产品的提供者。这种组合让我们既能深入理解业务需求，又能交付成熟、经过验证的解决方案。",
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
        "AG·SORA SaaS 产品",
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
    productsPage: {
      heroTitle: "让运营更轻松的 AG·SORA 软件产品",
      heroDescription:
        "每款产品从第一天起就易于上手，套餐方案可随业务增长灵活调整。",
    },
    portfolioPage: {
      heroTitle: "我们的作品与团队能力展示",
      heroDescription:
        "由内部团队构建的实现案例，用于展示开发质量——并非带有业务指标的客户案例研究。带实际测量结果的客户案例研究将在数据与授权就绪后发布。",
      showcaseEyebrow: "能力展示",
      showcaseTitle: "我们构建过的实现案例",
    },
    pricingPage: {
      heroTitle: "面向成长型企业的普惠科技",
      heroDescription:
        "简单需求可以从小做起，复杂系统则随业务同步扩展。以下均为起始价格。",
      customDevEyebrow: "定制开发",
      customDevTitle: "各项服务起始价格",
      saasEyebrow: "SaaS 产品",
      saasTitle: "AG·SORA 产品订阅方案",
      saasDescription: "从小型团队需求到多门店运营，均可覆盖。",
      disclaimer:
        "以上为起始价格，实际费用将根据功能、用户数量、对接需求、流程复杂度、工期及支持需求而有所不同。除非另有说明，第三方费用不包含在内。",
    },
    blogPage: {
      heroTitle: "关于构建业务系统的笔记",
      heroDescription:
        "我们在设计与实施系统过程中总结的实用经验 — 面向企业主与运营团队撰写，而不仅仅是开发者。",
      pageTitle: "全部文章",
      pageLabel: "第",
      editorPickEyebrow: "编辑精选",
      editorPickTitle: "从这里开始",
      editorPickDescription: "如果您正在考虑新系统，这些是最值得优先阅读的文章。",
      latestEyebrow: "最新",
      latestTitle: "最新文章",
      readingTime: "分钟阅读",
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
    },
  },
};
