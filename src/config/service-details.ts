/**
 * Per-service landing page content.
 *
 * Each service gets its own page so it can target one keyword properly.
 * A single /services page competing for "ERP Indonesia", "POS Indonesia",
 * "jasa pembuatan aplikasi" and seven other terms at once ranks for none of
 * them well; a focused page per intent is what search engines can actually
 * match to a query.
 *
 * `metaTitle`/`metaDescription` stay Indonesian-only: they're rendered by
 * generateMetadata() on the server, which has no access to the client-side
 * locale switch. Everything else here is rendered by a client component and
 * follows the active locale.
 *
 * Keep `metaTitle` under ~60 characters and `metaDescription` under ~155 so
 * they are not truncated in search results.
 */

type Localized = { id: string; en: string; zh: string };
type LocalizedList = { id: string[]; en: string[]; zh: string[] };
export type ServiceFaq = { question: Localized; answer: Localized };

export type ServiceDetail = {
  metaTitle: string;
  metaDescription: string;
  h1: Localized;
  intro: Localized;
  /** Concrete deliverables — what the client actually receives. */
  deliverables: LocalizedList;
  /** Who this service suits, to help the reader self-qualify. */
  forWho: LocalizedList;
  faqs: ServiceFaq[];
  /** Slugs of blog posts that support this service page. */
  relatedPosts: string[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "custom-software": {
    metaTitle: "Jasa Pembuatan Custom Software Indonesia | AG·SORA",
    metaDescription:
      "Jasa pembuatan custom software untuk perusahaan di Indonesia. Sistem dibangun mengikuti proses bisnis Anda. Mulai dari Rp8.000.000.",
    h1: {
      id: "Jasa Pembuatan Custom Software untuk Bisnis Indonesia",
      en: "Custom Software Development for Indonesian Businesses",
      zh: "面向印尼企业的定制软件开发服务",
    },
    intro: {
      id: "Ketika proses kerja Anda tidak cocok dengan software yang tersedia di pasaran, memaksakan diri menyesuaikan sering kali lebih mahal daripada membangun sendiri. Kami merancang sistem yang mengikuti cara kerja Anda, bukan sebaliknya.",
      en: "When your workflow doesn't fit off-the-shelf software, forcing yourself to adapt is often more expensive than building your own. We design systems that follow how you work, not the other way around.",
      zh: "当您的工作流程与市面上的软件不匹配时，勉强迁就往往比自行开发成本更高。我们设计的系统会贴合您的工作方式，而非削足适履。",
    },
    deliverables: {
      id: [
        "Pemetaan proses bisnis dan dokumen kebutuhan",
        "Rancangan arsitektur sistem dan basis data",
        "Aplikasi sesuai ruang lingkup yang disepakati",
        "Dokumentasi teknis dan panduan pengguna",
        "Pelatihan tim dan pendampingan setelah rilis",
      ],
      en: [
        "Business process mapping and requirements documentation",
        "System and database architecture design",
        "The application built to the agreed scope",
        "Technical documentation and user guides",
        "Team training and post-launch support",
      ],
      zh: [
        "业务流程梳理与需求文档",
        "系统与数据库架构设计",
        "按约定范围交付的应用系统",
        "技术文档与用户指南",
        "团队培训与上线后支持",
      ],
    },
    forWho: {
      id: [
        "Perusahaan dengan alur kerja yang tidak umum di industrinya",
        "Bisnis yang biaya lisensi per user-nya sudah melampaui biaya membangun sendiri",
        "Organisasi dengan aturan internal yang tidak diakomodasi produk jadi",
      ],
      en: [
        "Companies with workflows that are unusual for their industry",
        "Businesses whose per-user licensing costs already exceed the cost of building their own",
        "Organizations with internal rules that off-the-shelf products can't accommodate",
      ],
      zh: [
        "工作流程在所在行业中较为特殊的企业",
        "按用户收费的授权成本已超过自建成本的企业",
        "内部规则无法被现成产品满足的组织",
      ],
    },
    faqs: [
      {
        question: {
          id: "Berapa biaya pembuatan custom software?",
          en: "How much does custom software development cost?",
          zh: "定制软件开发费用是多少？",
        },
        answer: {
          id: "Mulai dari Rp8.000.000, bergantung pada jumlah modul, kompleksitas alur kerja, dan integrasi yang dibutuhkan. Angka pastinya disampaikan dalam proposal setelah kebutuhan dipetakan.",
          en: "Starting from Rp8,000,000, depending on the number of modules, workflow complexity, and integrations required. The exact figure is shared in a proposal once requirements are mapped out.",
          zh: "起价为 Rp8,000,000，具体取决于模块数量、工作流程复杂度及所需对接的系统。准确报价将在需求梳理完成后于提案中提供。",
        },
      },
      {
        question: {
          id: "Apakah source code menjadi milik perusahaan kami?",
          en: "Will the source code belong to our company?",
          zh: "源代码归我们公司所有吗？",
        },
        answer: {
          id: "Skema kepemilikan source code dinyatakan tertulis dalam kontrak sejak awal, sebelum pengerjaan dimulai.",
          en: "The source code ownership arrangement is stated in writing in the contract from the start, before work begins.",
          zh: "源代码归属方案会在项目开始前，以书面形式写入合同。",
        },
      },
      {
        question: {
          id: "Bagaimana kalau kebutuhan berubah saat pengerjaan?",
          en: "What if requirements change during development?",
          zh: "如果开发过程中需求发生变化怎么办？",
        },
        answer: {
          id: "Perubahan kecil kami akomodasi dalam ruang lingkup berjalan. Perubahan yang menambah modul dihitung ulang dampaknya terhadap timeline dan biaya, lalu disepakati tertulis.",
          en: "Small changes are accommodated within the running scope. Changes that add modules are re-estimated for their impact on timeline and cost, then agreed in writing.",
          zh: "小幅调整可在现有范围内容纳。若变更涉及新增模块，我们会重新评估对工期和成本的影响，并以书面形式确认。",
        },
      },
    ],
    relatedPosts: [
      "custom-software-vs-software-jadi",
      "menghitung-biaya-sebenarnya-project-software",
      "kenapa-project-software-gagal",
    ],
  },

  website: {
    metaTitle: "Jasa Pembuatan Website Perusahaan | AG·SORA",
    metaDescription:
      "Jasa pembuatan website company profile, e-commerce, dan website dengan admin dashboard. Cepat, SEO-friendly. Mulai dari Rp3.500.000.",
    h1: {
      id: "Jasa Pembuatan Website Perusahaan",
      en: "Company Website Development Services",
      zh: "企业网站建设服务",
    },
    intro: {
      id: "Website bukan sekadar brosur digital. Kami membangun website yang cepat diakses, mudah ditemukan di mesin pencari, dan bisa dikelola sendiri oleh tim Anda tanpa bantuan developer.",
      en: "A website is more than a digital brochure. We build sites that load fast, are easy to find on search engines, and can be managed by your own team without a developer's help.",
      zh: "网站不只是数字版宣传册。我们打造加载迅速、易于被搜索引擎发现，并且您的团队无需开发人员协助即可自行管理的网站。",
    },
    deliverables: {
      id: [
        "Desain yang menyesuaikan identitas brand Anda",
        "Tampilan responsif di desktop, tablet, dan ponsel",
        "Struktur SEO dasar: metadata, sitemap, dan data terstruktur",
        "Panel admin untuk mengelola konten sendiri",
        "Optimasi kecepatan muat dan Core Web Vitals",
      ],
      en: [
        "Design tailored to your brand identity",
        "Responsive layout across desktop, tablet, and mobile",
        "Baseline SEO structure: metadata, sitemap, and structured data",
        "An admin panel so you can manage content yourself",
        "Load speed and Core Web Vitals optimization",
      ],
      zh: [
        "贴合品牌形象的设计",
        "桌面端、平板与手机端响应式布局",
        "基础 SEO 结构：元数据、站点地图与结构化数据",
        "可自行管理内容的后台面板",
        "加载速度与 Core Web Vitals 优化",
      ],
    },
    forWho: {
      id: [
        "Perusahaan yang butuh kehadiran online yang kredibel",
        "Bisnis yang ingin website-nya ditemukan lewat pencarian, bukan hanya dibagikan manual",
        "Tim yang ingin memperbarui konten tanpa bergantung pada vendor",
      ],
      en: [
        "Companies that need a credible online presence",
        "Businesses that want their site found through search, not just shared manually",
        "Teams that want to update content without depending on a vendor",
      ],
      zh: [
        "需要建立可信线上形象的企业",
        "希望网站能通过搜索被发现，而非仅靠人工分享的企业",
        "希望自主更新内容、不依赖服务商的团队",
      ],
    },
    faqs: [
      {
        question: {
          id: "Berapa biaya pembuatan website perusahaan?",
          en: "How much does a company website cost?",
          zh: "企业网站建设费用是多少？",
        },
        answer: {
          id: "Landing page mulai dari Rp2.500.000, company profile mulai dari Rp3.500.000, website dengan admin dashboard mulai dari Rp5.000.000, dan e-commerce mulai dari Rp7.500.000.",
          en: "Landing pages start from Rp2,500,000, company profile sites from Rp3,500,000, websites with an admin dashboard from Rp5,000,000, and e-commerce from Rp7,500,000.",
          zh: "落地页起价 Rp2,500,000，企业官网起价 Rp3,500,000，带后台管理的网站起价 Rp5,000,000，电商网站起价 Rp7,500,000。",
        },
      },
      {
        question: {
          id: "Apakah sudah termasuk domain dan hosting?",
          en: "Does this include domain and hosting?",
          zh: "是否包含域名与主机？",
        },
        answer: {
          id: "Biaya domain dan hosting berada di luar biaya pembuatan kecuali dinyatakan lain. Kami membantu proses penyiapannya.",
          en: "Domain and hosting costs are outside the development fee unless stated otherwise. We help with the setup process.",
          zh: "除非另有说明，域名与主机费用不包含在开发费用内。我们会协助完成相关设置。",
        },
      },
      {
        question: {
          id: "Apakah website-nya bisa saya kelola sendiri?",
          en: "Can I manage the website myself?",
          zh: "我可以自行管理网站吗？",
        },
        answer: {
          id: "Ya. Kami menyertakan panel admin dan pelatihan singkat agar tim Anda bisa memperbarui konten tanpa bantuan developer.",
          en: "Yes. We include an admin panel and a short training session so your team can update content without a developer's help.",
          zh: "可以。我们会提供后台管理面板及简短培训，让您的团队无需开发人员协助即可更新内容。",
        },
      },
    ],
    relatedPosts: ["checklist-memilih-software-house", "menghitung-biaya-sebenarnya-project-software"],
  },

  mobile: {
    metaTitle: "Jasa Pembuatan Aplikasi Mobile Android & iOS | AG·SORA",
    metaDescription:
      "Jasa pembuatan aplikasi mobile Android dan iOS untuk bisnis. Dari aplikasi pelanggan hingga aplikasi operasional lapangan. Mulai Rp10.000.000.",
    h1: {
      id: "Jasa Pembuatan Aplikasi Mobile Android & iOS",
      en: "Android & iOS Mobile App Development Services",
      zh: "Android 与 iOS 移动应用开发服务",
    },
    intro: {
      id: "Aplikasi mobile masuk akal ketika pengguna Anda butuh akses cepat berulang kali, bekerja di lapangan, atau memerlukan fitur perangkat seperti kamera dan lokasi. Kami membantu menentukan apakah aplikasi benar-benar jawabannya sebelum membangun.",
      en: "A mobile app makes sense when your users need fast, repeated access, work out in the field, or need device features like camera and location. We help you determine whether an app is really the answer before we build one.",
      zh: "当用户需要频繁快速访问、在外勤现场工作，或需要摄像头、定位等设备功能时，移动应用才真正有意义。我们会先帮您判断应用是否是正确的解决方案，再动手开发。",
    },
    deliverables: {
      id: [
        "Rancangan alur pengguna dan antarmuka aplikasi",
        "Aplikasi untuk Android dan/atau iOS",
        "Integrasi dengan sistem backend yang sudah ada",
        "Pendampingan proses rilis ke Play Store dan App Store",
        "Dokumentasi dan pelatihan tim",
      ],
      en: [
        "User flow and app interface design",
        "The app built for Android and/or iOS",
        "Integration with your existing backend system",
        "Support through the Play Store and App Store submission process",
        "Documentation and team training",
      ],
      zh: [
        "用户流程与应用界面设计",
        "Android 与/或 iOS 应用开发",
        "与现有后端系统对接",
        "协助完成 Play Store 与 App Store 上架流程",
        "文档与团队培训",
      ],
    },
    forWho: {
      id: [
        "Bisnis dengan tim lapangan yang butuh mencatat data di lokasi",
        "Layanan yang pelanggannya mengakses berulang kali setiap minggu",
        "Operasional yang membutuhkan kamera, GPS, atau notifikasi",
      ],
      en: [
        "Businesses with field teams that need to record data on-site",
        "Services whose customers access them repeatedly every week",
        "Operations that need camera, GPS, or push notification features",
      ],
      zh: [
        "外勤团队需要在现场记录数据的企业",
        "客户每周都会反复访问使用的服务",
        "需要摄像头、GPS 或推送通知功能的业务",
      ],
    },
    faqs: [
      {
        question: {
          id: "Berapa biaya pembuatan aplikasi mobile?",
          en: "How much does mobile app development cost?",
          zh: "移动应用开发费用是多少？",
        },
        answer: {
          id: "Mulai dari Rp10.000.000 per platform. Biaya bergantung pada jumlah fitur, kebutuhan integrasi, dan apakah aplikasi harus bekerja saat offline.",
          en: "Starting from Rp10,000,000 per platform. Cost depends on the number of features, integration needs, and whether the app must work offline.",
          zh: "每个平台起价 Rp10,000,000。费用取决于功能数量、对接需求以及应用是否需要支持离线使用。",
        },
      },
      {
        question: {
          id: "Apakah harus membuat untuk Android dan iOS sekaligus?",
          en: "Do we need to build for both Android and iOS at once?",
          zh: "是否必须同时开发 Android 和 iOS 版本？",
        },
        answer: {
          id: "Tidak. Banyak bisnis memulai dari satu platform yang paling banyak dipakai penggunanya, lalu menambahkan platform kedua setelah aplikasinya terbukti dipakai.",
          en: "No. Many businesses start with the one platform their users rely on most, then add the second platform once the app has proven its adoption.",
          zh: "不需要。许多企业会先从用户使用最多的平台开始，待应用验证有效后再扩展到第二个平台。",
        },
      },
      {
        question: {
          id: "Apakah AG·SORA membantu proses rilis ke store?",
          en: "Does AG·SORA help with store submission?",
          zh: "AG·SORA 会协助应用商店上架吗？",
        },
        answer: {
          id: "Ya, kami mendampingi proses submission ke Play Store dan App Store, termasuk penyiapan aset yang dibutuhkan.",
          en: "Yes, we support the submission process to the Play Store and App Store, including preparing the required assets.",
          zh: "是的，我们会协助完成 Play Store 与 App Store 的提交流程，包括准备所需素材。",
        },
      },
    ],
    relatedPosts: ["custom-software-vs-software-jadi", "kenapa-project-software-gagal"],
  },

  erp: {
    metaTitle: "Jasa Pembuatan ERP Indonesia | Sistem ERP Custom AG·SORA",
    metaDescription:
      "Jasa pembuatan sistem ERP untuk perusahaan Indonesia. Integrasi keuangan, inventori, produksi, dan pembelian. ERP Basic mulai Rp15.000.000.",
    h1: {
      id: "Jasa Pembuatan Sistem ERP untuk Perusahaan Indonesia",
      en: "ERP System Development for Indonesian Companies",
      zh: "面向印尼企业的 ERP 系统开发服务",
    },
    intro: {
      id: "ERP menyatukan keuangan, inventori, pembelian, dan produksi dalam satu sistem sehingga setiap angka punya satu sumber. Kami membangunnya bertahap, dimulai dari modul yang paling menyakitkan bagi operasional Anda.",
      en: "ERP brings finance, inventory, purchasing, and production together in one system so every number has a single source of truth. We build it in stages, starting with the module causing your operations the most pain.",
      zh: "ERP 将财务、库存、采购与生产整合到一个系统中，让每一个数字都有唯一来源。我们采用分阶段实施，从对您运营影响最大的模块开始。",
    },
    deliverables: {
      id: [
        "Pemetaan proses lintas divisi sebelum pengembangan",
        "Modul keuangan, inventori, pembelian, dan produksi sesuai kebutuhan",
        "Konsolidasi laporan multi-cabang",
        "Migrasi data dari sistem dan spreadsheet lama",
        "Pelatihan bertahap per divisi",
      ],
      en: [
        "Cross-department process mapping before development",
        "Finance, inventory, purchasing, and production modules as needed",
        "Multi-branch consolidated reporting",
        "Data migration from legacy systems and spreadsheets",
        "Phased training per department",
      ],
      zh: [
        "开发前的跨部门流程梳理",
        "按需配置的财务、库存、采购与生产模块",
        "多分店合并报表",
        "从旧系统与电子表格迁移数据",
        "按部门分阶段培训",
      ],
    },
    forWho: {
      id: [
        "Perusahaan yang laporan bulanannya selalu terlambat karena menunggu rekap manual",
        "Bisnis multi-cabang yang sulit melihat kondisi gabungan secara real-time",
        "Organisasi yang satu transaksinya masih diinput berkali-kali di divisi berbeda",
      ],
      en: [
        "Companies whose monthly reports are always late because they wait on manual recaps",
        "Multi-branch businesses that struggle to see a real-time combined view",
        "Organizations where a single transaction still gets re-entered across departments",
      ],
      zh: [
        "月度报表因等待人工汇总而经常延迟的企业",
        "难以实时查看多分店整体经营状况的企业",
        "同一笔交易仍需在不同部门重复录入的组织",
      ],
    },
    faqs: [
      {
        question: {
          id: "Berapa biaya implementasi ERP?",
          en: "How much does ERP implementation cost?",
          zh: "ERP 实施费用是多少？",
        },
        answer: {
          id: "ERP Basic mulai dari Rp15.000.000 dan ERP Advanced mulai dari Rp25.000.000. Untuk kebutuhan enterprise atau multi-cabang, biaya disusun berdasarkan ruang lingkup.",
          en: "ERP Basic starts from Rp15,000,000 and ERP Advanced from Rp25,000,000. For enterprise or multi-branch needs, cost is scoped based on requirements.",
          zh: "ERP 基础版起价 Rp15,000,000，进阶版起价 Rp25,000,000。企业级或多分店需求将根据具体范围另行报价。",
        },
      },
      {
        question: {
          id: "Apakah ERP harus diterapkan sekaligus ke semua divisi?",
          en: "Does ERP need to roll out to every department at once?",
          zh: "ERP 是否需要一次性在所有部门同时上线？",
        },
        answer: {
          id: "Tidak disarankan. Menerapkan seluruh modul serentak menumpuk risiko di satu titik. Kami biasanya mulai dari satu atau dua modul, memastikan berjalan, lalu memperluas.",
          en: "It's not recommended. Rolling out every module at once concentrates risk in one place. We usually start with one or two modules, confirm they work well, then expand.",
          zh: "不建议这样做。一次性上线所有模块会将风险集中在一点。我们通常会先从一到两个模块开始，确认运行稳定后再逐步扩展。",
        },
      },
      {
        question: {
          id: "Bisakah ERP terhubung dengan software akuntansi yang sudah kami pakai?",
          en: "Can ERP connect with the accounting software we already use?",
          zh: "ERP 能与我们现有的财务软件对接吗？",
        },
        answer: {
          id: "Dalam banyak kasus bisa, selama software tersebut menyediakan API atau jalur ekspor data. Kami memeriksa kemungkinannya pada tahap Discover.",
          en: "In most cases, yes — as long as that software offers an API or a data export path. We check the feasibility during the Discover phase.",
          zh: "在大多数情况下可以，只要该软件提供 API 或数据导出功能。我们会在 Discover 阶段核实可行性。",
        },
      },
    ],
    relatedPosts: [
      "tanda-bisnis-anda-sudah-butuh-erp",
      "biaya-tersembunyi-data-silo",
      "persiapan-migrasi-data-sistem-baru",
    ],
  },

  pos: {
    metaTitle: "Jasa Pembuatan Sistem POS / Kasir Indonesia | AG·SORA",
    metaDescription:
      "Jasa pembuatan sistem POS dan aplikasi kasir untuk retail dan F&B. Multi-outlet, stok real-time, laporan otomatis. Mulai Rp6.000.000.",
    h1: {
      id: "Jasa Pembuatan Sistem POS & Aplikasi Kasir",
      en: "POS & Point-of-Sale App Development Services",
      zh: "POS 收银系统开发服务",
    },
    intro: {
      id: "Sistem kasir yang baik tidak berhenti di mencetak struk. Ia menghubungkan penjualan dengan stok dan laporan, sehingga Anda tahu kondisi bisnis tanpa menunggu rekap akhir hari.",
      en: "A good POS system doesn't stop at printing receipts. It connects sales with stock and reports, so you know how your business is doing without waiting for the end-of-day recap.",
      zh: "优秀的收银系统不只是打印小票。它将销售与库存、报表连接起来，让您无需等待每日汇总即可掌握业务状况。",
    },
    deliverables: {
      id: [
        "Aplikasi kasir yang tetap berjalan saat internet terputus",
        "Manajemen produk, varian, dan harga per outlet",
        "Stok real-time per lokasi dan transfer antar outlet",
        "Hak akses berjenjang untuk kasir, supervisor, dan pemilik",
        "Laporan penjualan, shift, dan konsolidasi multi-outlet",
      ],
      en: [
        "A cashier app that keeps working when the internet drops",
        "Product, variant, and per-outlet price management",
        "Real-time stock per location and inter-outlet transfers",
        "Tiered access for cashiers, supervisors, and owners",
        "Sales, shift, and multi-outlet consolidated reports",
      ],
      zh: [
        "断网时仍可正常运行的收银应用",
        "产品、规格与各门店价格管理",
        "各门店实时库存与门店间调拨",
        "收银员、主管与老板的分级权限",
        "销售、班次与多门店合并报表",
      ],
    },
    forWho: {
      id: [
        "Retail dan F&B dengan lebih dari satu outlet",
        "Bisnis yang stok fisiknya sering berbeda dengan catatan sistem",
        "Pemilik yang ingin memantau performa outlet tanpa datang ke lokasi",
      ],
      en: [
        "Retail and F&B businesses with more than one outlet",
        "Businesses whose physical stock often doesn't match system records",
        "Owners who want to monitor outlet performance without visiting in person",
      ],
      zh: [
        "拥有多家门店的零售与餐饮企业",
        "实际库存经常与系统记录不符的企业",
        "希望无需到场即可监控门店业绩的业主",
      ],
    },
    faqs: [
      {
        question: {
          id: "Berapa biaya pembuatan sistem POS?",
          en: "How much does a POS system cost?",
          zh: "POS 系统开发费用是多少？",
        },
        answer: {
          id: "POS custom mulai dari Rp6.000.000. Tersedia juga AG·SORA POS sebagai produk siap pakai mulai dari Rp99.000 per bulan jika kebutuhan Anda relatif standar.",
          en: "Custom POS starts from Rp6,000,000. AG·SORA POS is also available as a ready-to-use product from Rp99,000/month if your needs are fairly standard.",
          zh: "定制 POS 起价 Rp6,000,000。若需求较为标准，也可选择 AG·SORA POS 现成产品，起价 Rp99,000/月。",
        },
      },
      {
        question: {
          id: "Apakah sistem tetap bisa dipakai saat internet mati?",
          en: "Can the system still be used when the internet is down?",
          zh: "断网时系统还能使用吗？",
        },
        answer: {
          id: "Ya. Sistem kami rancang agar transaksi tetap dapat diproses saat koneksi terputus, lalu disinkronkan otomatis ketika koneksi kembali.",
          en: "Yes. Our systems are designed so transactions can still be processed when the connection drops, then sync automatically once it's back.",
          zh: "可以。我们设计的系统在断网时仍可处理交易，网络恢复后会自动同步数据。",
        },
      },
      {
        question: {
          id: "Apakah bisa terhubung dengan QRIS dan payment gateway?",
          en: "Can it connect with QRIS and payment gateways?",
          zh: "能否与 QRIS 及支付网关对接？",
        },
        answer: {
          id: "Bisa. Integrasi payment gateway dan QRIS termasuk kemampuan yang kami tangani, disesuaikan dengan penyedia yang Anda pakai.",
          en: "Yes. Payment gateway and QRIS integration is something we handle, tailored to whichever provider you use.",
          zh: "可以。我们支持支付网关与 QRIS 对接，并可根据您所使用的服务商进行适配。",
        },
      },
    ],
    relatedPosts: ["memilih-sistem-pos-multi-outlet", "biaya-tersembunyi-data-silo"],
  },

  hris: {
    metaTitle: "Jasa Pembuatan HRIS Indonesia | Sistem HR Custom AG·SORA",
    metaDescription:
      "Jasa pembuatan HRIS untuk perusahaan Indonesia. Absensi, payroll, cuti, dan manajemen karyawan dalam satu sistem. Mulai Rp7.500.000.",
    h1: {
      id: "Jasa Pembuatan Sistem HRIS untuk Perusahaan",
      en: "HRIS System Development for Companies",
      zh: "企业 HRIS 人力资源系统开发服务",
    },
    intro: {
      id: "HRIS menyentuh hal yang sensitif: kehadiran, gaji, dan kinerja. Kami membangunnya dengan urutan yang aman — merapikan data karyawan dan absensi lebih dulu, baru masuk ke perhitungan payroll.",
      en: "HRIS touches sensitive things: attendance, pay, and performance. We build it in a safe order — tidying up employee data and attendance first, then moving into payroll calculation.",
      zh: "HRIS 涉及敏感信息：考勤、薪资与绩效。我们采用稳妥的实施顺序——先梳理员工数据与考勤，再进入薪资计算环节。",
    },
    deliverables: {
      id: [
        "Basis data karyawan terpusat dengan hak akses terkontrol",
        "Absensi digital, termasuk untuk karyawan shift dan lapangan",
        "Pengajuan cuti dan izin dengan alur persetujuan",
        "Perhitungan payroll dan slip gaji otomatis",
        "Employee self-service agar HR tidak jadi titik kemacetan",
      ],
      en: [
        "A centralized employee database with controlled access",
        "Digital attendance, including for shift and field employees",
        "Leave and permission requests with an approval workflow",
        "Automated payroll calculation and payslips",
        "Employee self-service so HR doesn't become a bottleneck",
      ],
      zh: [
        "具有权限管控的集中式员工数据库",
        "涵盖轮班及外勤员工的数字化考勤",
        "带审批流程的请假与准假申请",
        "自动化薪资计算与工资单",
        "员工自助服务，避免 HR 成为瓶颈",
      ],
    },
    forWho: {
      id: [
        "Perusahaan yang absensi dan lemburnya masih direkap manual",
        "Bisnis dengan karyawan shift atau tim lapangan tanpa jam kerja tetap",
        "Tim HR yang waktunya habis untuk administrasi berulang",
      ],
      en: [
        "Companies that still recap attendance and overtime manually",
        "Businesses with shift workers or field teams without fixed hours",
        "HR teams whose time is consumed by repetitive admin work",
      ],
      zh: [
        "仍靠人工汇总考勤与加班的企业",
        "拥有轮班员工或无固定工时外勤团队的企业",
        "大量时间耗费在重复性行政工作上的 HR 团队",
      ],
    },
    faqs: [
      {
        question: {
          id: "Berapa biaya pembuatan HRIS?",
          en: "How much does HRIS development cost?",
          zh: "HRIS 开发费用是多少？",
        },
        answer: {
          id: "HRIS custom mulai dari Rp7.500.000. Tersedia juga AG·SORA HR sebagai produk siap pakai mulai dari Rp99.000 per bulan.",
          en: "Custom HRIS starts from Rp7,500,000. AG·SORA HR is also available as a ready-to-use product from Rp99,000/month.",
          zh: "定制 HRIS 起价 Rp7,500,000。也可选择 AG·SORA HR 现成产品，起价 Rp99,000/月。",
        },
      },
      {
        question: {
          id: "Apakah bisa menangani karyawan shift dan tim lapangan?",
          en: "Can it handle shift workers and field teams?",
          zh: "能处理轮班员工与外勤团队吗？",
        },
        answer: {
          id: "Bisa, dan ini justru bagian yang kami petakan lebih dulu. Sistem yang hanya mengakomodasi karyawan kantor akan membuat divisi lain kembali ke pencatatan manual.",
          en: "Yes, and this is actually what we map out first. A system that only accommodates office staff pushes other departments back to manual record-keeping.",
          zh: "可以，这也是我们优先梳理的部分。若系统只考虑坐班员工，其他部门便会退回人工记录方式。",
        },
      },
      {
        question: {
          id: "Bagaimana keamanan data karyawan?",
          en: "How is employee data kept secure?",
          zh: "员工数据的安全性如何保障？",
        },
        answer: {
          id: "Hak akses ditetapkan per peran sejak awal, sehingga data pribadi hanya dapat diakses pihak yang berkepentingan. Ketentuan penyimpanan data disepakati tertulis.",
          en: "Access rights are set per role from the start, so personal data is only accessible to relevant parties. Data retention terms are agreed in writing.",
          zh: "从一开始就按角色设定访问权限，确保个人数据仅相关人员可查看。数据存储条款以书面形式确认。",
        },
      },
    ],
    relatedPosts: ["kesalahan-umum-implementasi-hris", "persiapan-migrasi-data-sistem-baru"],
  },

  crm: {
    metaTitle: "Jasa Pembuatan CRM Indonesia | Sistem CRM Custom AG·SORA",
    metaDescription:
      "Jasa pembuatan sistem CRM untuk tim sales. Pipeline penjualan, follow-up otomatis, dan laporan performa. Mulai dari Rp7.500.000.",
    h1: {
      id: "Jasa Pembuatan Sistem CRM untuk Tim Sales",
      en: "CRM System Development for Sales Teams",
      zh: "面向销售团队的 CRM 系统开发服务",
    },
    intro: {
      id: "CRM membuat pipeline penjualan terlihat: siapa sedang di tahap mana, follow-up apa yang tertunda, dan peluang mana yang berisiko hilang. Tanpa itu, performa sales hanya bisa dinilai setelah periode berakhir.",
      en: "CRM makes your sales pipeline visible: who's at which stage, which follow-ups are overdue, and which opportunities are at risk of slipping away. Without it, sales performance can only be judged after the period ends.",
      zh: "CRM 让销售管道清晰可见：谁处于哪个阶段、哪些跟进已逾期、哪些机会可能流失。没有它，销售业绩只能等到周期结束后才能评估。",
    },
    deliverables: {
      id: [
        "Manajemen leads dan deals dengan tahapan yang bisa disesuaikan",
        "Pengingat dan penjadwalan follow-up",
        "Riwayat interaksi pelanggan yang lengkap",
        "Integrasi WhatsApp dan email sesuai kebutuhan",
        "Laporan performa per sales dan per periode",
      ],
      en: [
        "Leads and deals management with customizable stages",
        "Follow-up reminders and scheduling",
        "Complete customer interaction history",
        "WhatsApp and email integration as needed",
        "Performance reports per salesperson and per period",
      ],
      zh: [
        "支持自定义阶段的线索与商机管理",
        "跟进提醒与日程安排",
        "完整的客户互动记录",
        "按需对接 WhatsApp 与邮件",
        "按销售人员与周期统计的业绩报表",
      ],
    },
    forWho: {
      id: [
        "Tim sales yang masih mencatat prospek di spreadsheet pribadi",
        "Bisnis yang kehilangan peluang karena follow-up terlewat",
        "Manajemen yang butuh gambaran pipeline sebelum periode berakhir",
      ],
      en: [
        "Sales teams still tracking prospects in personal spreadsheets",
        "Businesses losing opportunities because follow-ups get missed",
        "Management that needs a pipeline view before the period ends",
      ],
      zh: [
        "仍用个人表格记录潜在客户的销售团队",
        "因跟进遗漏而流失商机的企业",
        "需要在周期结束前掌握管道全貌的管理层",
      ],
    },
    faqs: [
      {
        question: {
          id: "Berapa biaya pembuatan CRM?",
          en: "How much does CRM development cost?",
          zh: "CRM 开发费用是多少？",
        },
        answer: {
          id: "CRM custom mulai dari Rp7.500.000. Tersedia juga AG·SORA CRM sebagai produk siap pakai mulai dari Rp99.000 per bulan.",
          en: "Custom CRM starts from Rp7,500,000. AG·SORA CRM is also available as a ready-to-use product from Rp99,000/month.",
          zh: "定制 CRM 起价 Rp7,500,000。也可选择 AG·SORA CRM 现成产品，起价 Rp99,000/月。",
        },
      },
      {
        question: {
          id: "Apakah bisa terhubung dengan WhatsApp?",
          en: "Can it connect with WhatsApp?",
          zh: "能与 WhatsApp 对接吗？",
        },
        answer: {
          id: "Bisa, melalui WhatsApp Business API. Ruang lingkup integrasinya disesuaikan dengan cara tim sales Anda berkomunikasi.",
          en: "Yes, via the WhatsApp Business API. The integration scope is tailored to how your sales team communicates.",
          zh: "可以，通过 WhatsApp Business API 对接，具体范围将根据您销售团队的沟通方式定制。",
        },
      },
      {
        question: {
          id: "Apakah data pelanggan lama bisa dipindahkan?",
          en: "Can existing customer data be migrated?",
          zh: "现有客户数据能迁移过来吗？",
        },
        answer: {
          id: "Bisa, selama data tersedia dalam format yang dapat diekspor. Proses pembersihan dan migrasi termasuk bagian dari implementasi.",
          en: "Yes, as long as the data is available in an exportable format. Cleanup and migration are part of the implementation.",
          zh: "可以，只要数据能够以可导出的格式提供。数据清理与迁移属于实施工作的一部分。",
        },
      },
    ],
    relatedPosts: ["biaya-tersembunyi-data-silo", "custom-software-vs-software-jadi"],
  },

  dashboard: {
    metaTitle: "Jasa Pembuatan Dashboard & Sistem Reporting | AG·SORA",
    metaDescription:
      "Jasa pembuatan dashboard bisnis dan sistem pelaporan real-time. Data operasional jadi dasar keputusan. Mulai dari Rp4.000.000.",
    h1: {
      id: "Jasa Pembuatan Dashboard & Sistem Reporting",
      en: "Dashboard & Reporting System Development",
      zh: "仪表盘与报表系统开发服务",
    },
    intro: {
      id: "Data yang sudah Anda kumpulkan sering kali cukup untuk mengambil keputusan lebih baik — masalahnya hanya pada bagaimana data itu disajikan. Dashboard yang tepat mengubah tumpukan angka menjadi gambaran yang bisa ditindaklanjuti.",
      en: "The data you already collect is often enough to make better decisions — the problem is usually how it's presented. The right dashboard turns a pile of numbers into a picture you can act on.",
      zh: "您已收集的数据往往足以支持更好的决策——问题通常在于数据的呈现方式。合适的仪表盘能将一堆数字转化为可付诸行动的洞察。",
    },
    deliverables: {
      id: [
        "Identifikasi metrik yang benar-benar memengaruhi keputusan",
        "Dashboard real-time yang dapat diakses lintas perangkat",
        "Konsolidasi data dari beberapa sumber sekaligus",
        "Laporan terjadwal yang dikirim otomatis",
        "Hak akses berbeda untuk tiap level manajemen",
      ],
      en: [
        "Identifying the metrics that actually drive decisions",
        "A real-time dashboard accessible across devices",
        "Consolidating data from multiple sources at once",
        "Scheduled reports sent automatically",
        "Different access levels for each management tier",
      ],
      zh: [
        "识别真正影响决策的关键指标",
        "跨设备可访问的实时仪表盘",
        "同时整合多个数据来源",
        "自动发送的定时报表",
        "针对不同管理层级的差异化权限",
      ],
    },
    forWho: {
      id: [
        "Manajemen yang keputusannya selalu berdasarkan data minggu lalu",
        "Perusahaan dengan data tersebar di beberapa sistem berbeda",
        "Tim yang menghabiskan waktu menyusun laporan rutin secara manual",
      ],
      en: [
        "Management whose decisions always rely on last week's data",
        "Companies with data scattered across several different systems",
        "Teams that spend their time compiling routine reports by hand",
      ],
      zh: [
        "决策依赖上周数据的管理层",
        "数据分散在多个不同系统中的企业",
        "耗费大量时间手动整理常规报表的团队",
      ],
    },
    faqs: [
      {
        question: {
          id: "Berapa biaya pembuatan dashboard bisnis?",
          en: "How much does a business dashboard cost?",
          zh: "业务仪表盘开发费用是多少？",
        },
        answer: {
          id: "Mulai dari Rp4.000.000, bergantung pada jumlah sumber data yang perlu digabungkan dan kompleksitas perhitungan metriknya.",
          en: "Starting from Rp4,000,000, depending on the number of data sources to combine and the complexity of the metric calculations.",
          zh: "起价 Rp4,000,000，具体取决于需要整合的数据源数量及指标计算的复杂程度。",
        },
      },
      {
        question: {
          id: "Apakah bisa menarik data dari sistem yang sudah ada?",
          en: "Can it pull data from our existing systems?",
          zh: "能从现有系统中提取数据吗？",
        },
        answer: {
          id: "Bisa, selama sistem tersebut menyediakan API atau ekspor data. Ini kami periksa lebih dulu sebelum menyusun proposal.",
          en: "Yes, as long as that system provides an API or data export. We check this first before putting together a proposal.",
          zh: "可以，只要该系统提供 API 或数据导出功能。我们会在制定提案前先行核实。",
        },
      },
      {
        question: {
          id: "Apakah laporan bisa dikirim otomatis?",
          en: "Can reports be sent automatically?",
          zh: "报表能自动发送吗？",
        },
        answer: {
          id: "Bisa. Laporan terjadwal dapat dikirim lewat email atau kanal lain sesuai kebutuhan, dengan isi yang berbeda per penerima.",
          en: "Yes. Scheduled reports can be sent via email or other channels as needed, with different content per recipient.",
          zh: "可以。定时报表可通过邮件或其他渠道发送，并可根据接收对象呈现不同内容。",
        },
      },
    ],
    relatedPosts: ["biaya-tersembunyi-data-silo", "tanda-bisnis-anda-sudah-butuh-erp"],
  },

  "ai-automation": {
    metaTitle: "Jasa AI Automation untuk Operasional Bisnis | AG·SORA",
    metaDescription:
      "Jasa AI automation untuk mengotomatiskan pekerjaan operasional yang berulang. Mulai dari Rp5.000.000.",
    h1: {
      id: "Jasa AI Automation untuk Operasional Bisnis",
      en: "AI Automation Services for Business Operations",
      zh: "面向业务运营的 AI 自动化服务",
    },
    intro: {
      id: "Otomatisasi paling berhasil pada pekerjaan yang berulang dan berpola jelas — bukan pada keputusan yang butuh pertimbangan manusia. Kami membantu memilih proses mana yang layak diotomatiskan lebih dulu.",
      en: "Automation works best on repetitive, clearly-patterned work — not on decisions that need human judgment. We help you choose which process is worth automating first.",
      zh: "自动化最适合应用于重复且规律明显的工作，而非需要人工判断的决策。我们会协助您判断优先自动化哪些流程。",
    },
    deliverables: {
      id: [
        "Audit proses untuk menemukan pekerjaan berulang yang layak diotomatiskan",
        "Alur otomatisasi dengan batas kewenangan yang jelas",
        "Jalur pengambilalihan manusia ketika hasilnya meragukan",
        "Catatan audit agar setiap keputusan otomatis dapat ditelusuri",
        "Pengukuran waktu sebelum dan sesudah penerapan",
      ],
      en: [
        "A process audit to find repetitive work worth automating",
        "Automation flows with clear boundaries of authority",
        "A human hand-off path when results are uncertain",
        "Audit logs so every automated decision can be traced",
        "Time measurement before and after implementation",
      ],
      zh: [
        "流程审查，找出值得自动化的重复性工作",
        "权限边界清晰的自动化流程",
        "结果存疑时可交由人工处理的路径",
        "审计记录，确保每个自动化决策均可追溯",
        "实施前后的耗时对比测量",
      ],
    },
    forWho: {
      id: [
        "Tim yang menjawab pertanyaan pelanggan serupa berulang kali setiap hari",
        "Bisnis yang masih menyalin data dari dokumen ke sistem secara manual",
        "Operasional dengan laporan rutin yang disusun ulang setiap minggu",
      ],
      en: [
        "Teams answering the same customer questions repeatedly every day",
        "Businesses still copying data from documents into systems by hand",
        "Operations with routine reports rebuilt from scratch every week",
      ],
      zh: [
        "每天重复回答相似客户问题的团队",
        "仍手动将文档数据录入系统的企业",
        "每周都要重新整理常规报表的运营团队",
      ],
    },
    faqs: [
      {
        question: {
          id: "Berapa biaya AI automation?",
          en: "How much does AI automation cost?",
          zh: "AI 自动化服务费用是多少？",
        },
        answer: {
          id: "Mulai dari Rp5.000.000, bergantung pada jumlah proses yang diotomatiskan dan integrasi yang dibutuhkan. Biaya layanan AI pihak ketiga berada di luar itu kecuali dinyatakan lain.",
          en: "Starting from Rp5,000,000, depending on the number of processes automated and integrations required. Third-party AI service costs sit outside that unless stated otherwise.",
          zh: "起价 Rp5,000,000，具体取决于自动化流程数量及所需对接。除非另有说明，第三方 AI 服务费用不包含在内。",
        },
      },
      {
        question: {
          id: "Apakah otomatisasi ini menggantikan karyawan?",
          en: "Does this automation replace employees?",
          zh: "这种自动化会取代员工吗？",
        },
        answer: {
          id: "Fokusnya memindahkan pekerjaan berulang yang tidak menambah nilai, sehingga tim bisa mengerjakan hal yang butuh pertimbangan manusia. Untuk keputusan yang menyangkut uang atau komitmen ke pelanggan, kami selalu menyarankan tetap ada persetujuan manusia.",
          en: "The focus is on offloading low-value repetitive work so your team can focus on things that need human judgment. For decisions involving money or customer commitments, we always recommend keeping human approval in the loop.",
          zh: "重点在于转移不增值的重复性工作，让团队专注于需要人工判断的事项。对于涉及资金或客户承诺的决策，我们始终建议保留人工审批环节。",
        },
      },
      {
        question: {
          id: "Bagaimana kalau sistemnya salah pada kasus tidak biasa?",
          en: "What happens if the system gets an unusual case wrong?",
          zh: "如果系统在非常规情况下出错怎么办？",
        },
        answer: {
          id: "Itu diantisipasi sejak perancangan. Selalu ada jalur agar pekerjaan bisa diambil alih manusia, serta catatan yang memungkinkan Anda menelusuri kenapa suatu keputusan diambil.",
          en: "That's anticipated from the design stage. There's always a path for work to be handed off to a human, plus logs that let you trace why a decision was made.",
          zh: "这在设计阶段就已考虑到。系统始终保留人工接管的路径，并留有记录以便追溯决策原因。",
        },
      },
    ],
    relatedPosts: ["memulai-ai-automation-untuk-operasional"],
  },

  "api-integration": {
    metaTitle: "Jasa Integrasi API & Sistem Bisnis | AG·SORA",
    metaDescription:
      "Jasa integrasi API untuk menghubungkan sistem internal dengan payment gateway, marketplace, dan layanan pihak ketiga. Mulai Rp3.000.000.",
    h1: {
      id: "Jasa Integrasi API & Penghubung Antar Sistem",
      en: "API Integration & System Connection Services",
      zh: "API 集成与系统对接服务",
    },
    intro: {
      id: "Sistem yang tidak saling bicara memaksa tim menyalin data secara manual — sumber selisih laporan yang paling sering kami temui. Integrasi menghubungkan sistem yang sudah Anda pakai sehingga data mengalir satu arah tanpa input ganda.",
      en: "Systems that don't talk to each other force teams to copy data by hand — the most common source of report discrepancies we see. Integration connects the systems you already use so data flows one way without double entry.",
      zh: "系统之间无法互通，迫使团队手动复制数据——这是我们最常见到的报表差异来源。系统对接能让您现有的系统相互连接，数据单向流转，无需重复录入。",
    },
    deliverables: {
      id: [
        "Pemeriksaan dokumentasi teknis sistem yang akan dihubungkan",
        "Perancangan alur data dan penanganan kegagalan",
        "Integrasi payment gateway, marketplace, atau layanan lain",
        "Monitoring dan notifikasi ketika sinkronisasi bermasalah",
        "Dokumentasi alur integrasi untuk tim Anda",
      ],
      en: [
        "Reviewing the technical documentation of systems to be connected",
        "Designing the data flow and failure handling",
        "Integrating payment gateways, marketplaces, or other services",
        "Monitoring and notifications when sync issues occur",
        "Integration flow documentation for your team",
      ],
      zh: [
        "审查待对接系统的技术文档",
        "设计数据流转与异常处理机制",
        "对接支付网关、电商平台或其他服务",
        "同步异常时的监控与通知",
        "为您的团队提供对接流程文档",
      ],
    },
    forWho: {
      id: [
        "Bisnis yang menyalin pesanan marketplace ke sistem internal secara manual",
        "Perusahaan dengan beberapa sistem yang datanya sering tidak sinkron",
        "Tim yang butuh menghubungkan sistem lama dengan aplikasi baru",
      ],
      en: [
        "Businesses manually copying marketplace orders into internal systems",
        "Companies with several systems whose data often falls out of sync",
        "Teams needing to connect a legacy system with a new application",
      ],
      zh: [
        "仍手动将电商平台订单录入内部系统的企业",
        "多个系统数据经常不同步的企业",
        "需要将旧系统与新应用对接的团队",
      ],
    },
    faqs: [
      {
        question: {
          id: "Berapa biaya integrasi API?",
          en: "How much does API integration cost?",
          zh: "API 集成费用是多少？",
        },
        answer: {
          id: "Mulai dari Rp3.000.000 per integrasi, bergantung pada kompleksitas sistem yang dihubungkan dan seberapa lengkap dokumentasi teknisnya.",
          en: "Starting from Rp3,000,000 per integration, depending on the complexity of the connected systems and how complete their technical documentation is.",
          zh: "每项集成起价 Rp3,000,000，具体取决于对接系统的复杂度及技术文档的完整程度。",
        },
      },
      {
        question: {
          id: "Bagaimana kalau sistem lama kami tidak punya API?",
          en: "What if our legacy system doesn't have an API?",
          zh: "如果我们的旧系统没有 API 怎么办？",
        },
        answer: {
          id: "Masih sering ada jalan lain, misalnya lewat ekspor data terjadwal atau akses basis data langsung. Kami periksa kemungkinannya lebih dulu dan sampaikan apa yang realistis.",
          en: "There are often other paths, such as scheduled data exports or direct database access. We check the possibilities first and tell you what's realistic.",
          zh: "通常仍有其他方案，例如定时数据导出或直接访问数据库。我们会先核实可行性，并告知实际可行的方案。",
        },
      },
      {
        question: {
          id: "Apa yang terjadi kalau sinkronisasi gagal?",
          en: "What happens if synchronization fails?",
          zh: "如果同步失败会怎样？",
        },
        answer: {
          id: "Alur penanganan kegagalan dirancang sejak awal, termasuk percobaan ulang otomatis dan notifikasi ke tim agar masalah tidak berlarut tanpa disadari.",
          en: "Failure handling is designed in from the start, including automatic retries and team notifications so issues don't go unnoticed.",
          zh: "异常处理机制从一开始就已设计到位，包括自动重试与团队通知，确保问题不会被忽视。",
        },
      },
    ],
    relatedPosts: ["biaya-tersembunyi-data-silo", "persiapan-migrasi-data-sistem-baru"],
  },
};
