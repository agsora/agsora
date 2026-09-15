type Localized = { id: string; en: string; zh: string };
type LocalizedList = { id: string[]; en: string[]; zh: string[] };

export type PortfolioProject = {
  slug: string;
  title: Localized;
  category: string;
  tags: string[];
  tech: string;
  solution: Localized;
  features: LocalizedList;
  images: { src: string; caption: string }[];
};

/**
 * Contoh hasil kerja / capability showcase — bukan case study klien dengan
 * metrik bisnis terukur. Proyek dikerjakan sebagai showcase kapasitas tim,
 * bukan delivery untuk klien bernama di atas. Jangan tambahkan klaim angka
 * hasil bisnis (konversi, efisiensi, dll) tanpa data klien yang terverifikasi.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "erp-kontraktor",
    title: {
      id: "ERP Kontraktor",
      en: "Contractor ERP",
      zh: "承包商 ERP 系统",
    },
    category: "ERP",
    tags: ["Multi-Role", "Manajemen Proyek", "Keuangan"],
    tech: "Bootstrap, Vanilla JS, Supabase",
    solution: {
      id: "Sistem ERP kontraktor terpadu dengan login multi-role (Owner, PM, Finance, Mandor, Warehouse), dashboard proyek real-time, RAB, BAST, penggajian, dan laporan keuangan.",
      en: "An integrated contractor ERP system with multi-role login (Owner, PM, Finance, Foreman, Warehouse), a real-time project dashboard, budgeting, handover invoices, payroll, and financial reporting.",
      zh: "一体化承包商 ERP 系统，支持多角色登录（业主、项目经理、财务、工头、仓库），提供实时项目仪表盘、预算管理、验收单据、薪资发放与财务报表。",
    },
    features: {
      id: [
        "Dashboard eksekutif per proyek & keuangan",
        "Manajemen proyek & RAB",
        "Modul keuangan & faktur BAST",
        "HR: absensi, penggajian, PPh 21",
        "Gudang & pengadaan material",
        "Multi-role: Owner / Admin / Finance / PM / Mandor / Warehouse",
      ],
      en: [
        "Executive dashboard per project & finance",
        "Project & budget management",
        "Finance module & handover invoices",
        "HR: attendance, payroll, income tax",
        "Warehouse & material procurement",
        "Multi-role: Owner / Admin / Finance / PM / Foreman / Warehouse",
      ],
      zh: [
        "按项目与财务划分的高管仪表盘",
        "项目与预算管理",
        "财务模块与验收发票",
        "人力资源：考勤、薪资、个税",
        "仓库与材料采购",
        "多角色支持：业主/管理员/财务/项目经理/工头/仓库",
      ],
    },
    images: [
      { src: "/portfolio/erp-kontraktor/dashboard.webp", caption: "Dashboard eksekutif — kontrol proyek, HPP, stok, dan keuangan dalam satu layar" },
      { src: "/portfolio/erp-kontraktor/project-hpp.webp", caption: "Kontrol proyek & HPP — RAB vs realisasi biaya, margin per proyek real-time" },
      { src: "/portfolio/erp-kontraktor/mobile-lapangan.webp", caption: "Mobile lapangan — mandor input absensi, foto progres, dan request material dari HP" },
    ],
  },
  {
    slug: "koperasi-emas",
    title: {
      id: "Landing Page Investasi Emas Koperasi",
      en: "Cooperative Gold Investment Landing Page",
      zh: "合作社黄金投资落地页",
    },
    category: "Landing Page",
    tags: ["Next.js", "Supabase", "Dashboard Multi-Role"],
    tech: "Next.js 15, TypeScript, Supabase, Tailwind CSS",
    solution: {
      id: "Landing page investasi emas dengan harga emas real-time, simulator cicilan dan buyback interaktif, serta dashboard multi-role (Admin, Master, Member) untuk kelola anggota, tabungan, dan SHU tahunan.",
      en: "A gold investment landing page with real-time gold prices, an interactive installment and buyback simulator, and a multi-role dashboard (Admin, Master, Member) for managing members, savings, and annual profit-sharing.",
      zh: "黄金投资落地页，提供实时金价、互动式分期与回购模拟器，以及多角色仪表盘（管理员、主管、会员），用于管理会员、储蓄与年度盈余分配。",
    },
    features: {
      id: [
        "Harga emas hari ini real-time + grafik 30 hari",
        "Simulasi cicilan & buyback interaktif",
        "Tabungan emas, gadai simpanan, SHU tahunan",
        "Dashboard member: portofolio & riwayat transaksi",
        "Dashboard admin/master: kelola anggota & transaksi",
      ],
      en: [
        "Real-time daily gold price + 30-day chart",
        "Interactive installment & buyback simulation",
        "Gold savings, savings-backed loans, annual profit-sharing",
        "Member dashboard: portfolio & transaction history",
        "Admin/master dashboard: manage members & transactions",
      ],
      zh: [
        "实时每日金价 + 30 天走势图",
        "互动式分期与回购模拟",
        "黄金储蓄、存款质押贷款、年度盈余分配",
        "会员仪表盘：投资组合与交易记录",
        "管理员/主管仪表盘：会员与交易管理",
      ],
    },
    images: [
      { src: "/portfolio/koperasi-emas/hero.webp", caption: "Beranda — harga emas live, simulasi cicilan, dan ringkasan layanan" },
      { src: "/portfolio/koperasi-emas/harga-emas.webp", caption: "Harga emas hari ini — perbandingan harga dan produk simpanan" },
      { src: "/portfolio/koperasi-emas/simulasi.webp", caption: "Simulasi cicilan & buyback dengan estimasi hasil" },
      { src: "/portfolio/koperasi-emas/mobile.webp", caption: "Tampilan mobile — akses harga emas dan simulasi dari HP" },
    ],
  },
  {
    slug: "radiance-clinic",
    title: {
      id: "Landing Page Klinik Estetika",
      en: "Aesthetic Clinic Landing Page",
      zh: "医美诊所落地页",
    },
    category: "Landing Page",
    tags: ["React", "Booking WhatsApp", "SEO Lokal"],
    tech: "React, Tailwind CSS, Vercel",
    solution: {
      id: "Landing page satu halaman dengan katalog treatment dan kisaran harga, galeri before-after per kategori, dan form booking yang langsung terhubung ke WhatsApp admin.",
      en: "A one-page landing page with a treatment catalog and price range, a before-after gallery by category, and a booking form connected directly to the admin's WhatsApp.",
      zh: "单页落地页，包含疗程目录与价格区间、按类别分类的前后对比图库，以及直接对接管理员 WhatsApp 的预约表单。",
    },
    features: {
      id: [
        "Katalog treatment & kisaran harga",
        "Galeri before-after per kategori",
        "Form booking konsultasi ke WhatsApp",
        "SEO lokal untuk pencarian \"klinik estetika\" di kota terkait",
      ],
      en: [
        "Treatment catalog & price range",
        "Before-after gallery by category",
        "Consultation booking form to WhatsApp",
        "Local SEO for \"aesthetic clinic\" searches in the relevant city",
      ],
      zh: [
        "疗程目录与价格区间",
        "按类别分类的前后对比图库",
        "直连 WhatsApp 的咨询预约表单",
        "针对当地\"医美诊所\"搜索的本地 SEO",
      ],
    },
    images: [
      { src: "/portfolio/radiance-clinic/hero.webp", caption: "Beranda — headline utama, trust badge, dan CTA booking konsultasi" },
      { src: "/portfolio/radiance-clinic/catalog.webp", caption: "Katalog treatment — daftar layanan populer dengan kisaran harga" },
      { src: "/portfolio/radiance-clinic/gallery.webp", caption: "Before & after — galeri hasil per kategori treatment" },
      { src: "/portfolio/radiance-clinic/mobile.webp", caption: "Tampilan mobile — booking konsultasi langsung dari HP" },
    ],
  },
  {
    slug: "skilva-bootcamp",
    title: {
      id: "Landing Page Pendaftaran Bootcamp",
      en: "Bootcamp Registration Landing Page",
      zh: "训练营报名落地页",
    },
    category: "Landing Page",
    tags: ["Next.js", "Form Pendaftaran", "Countdown Batch"],
    tech: "Next.js, Tailwind CSS, Google Sheets API, Vercel",
    solution: {
      id: "Landing page dengan kurikulum dan jadwal per batch, harga jelas di depan, countdown penutupan pendaftaran, serta form pendaftaran yang otomatis tersimpan tanpa rekap manual.",
      en: "A landing page with curriculum and schedule per batch, upfront pricing, a registration countdown, and a registration form that saves automatically with no manual compilation.",
      zh: "落地页展示分批课程与时间安排、明确的价格、报名截止倒计时，以及自动保存、无需人工整理的报名表单。",
    },
    features: {
      id: [
        "Kurikulum & jadwal per batch",
        "Countdown penutupan pendaftaran",
        "Form pendaftaran otomatis tersimpan",
        "Perbandingan paket kelas",
      ],
      en: [
        "Curriculum & schedule per batch",
        "Registration deadline countdown",
        "Auto-saved registration form",
        "Class package comparison",
      ],
      zh: [
        "分批课程与时间安排",
        "报名截止倒计时",
        "自动保存的报名表单",
        "课程套餐对比",
      ],
    },
    images: [
      { src: "/portfolio/skilva-bootcamp/hero.webp", caption: "Beranda — headline utama, countdown batch, dan visual code editor" },
      { src: "/portfolio/skilva-bootcamp/catalog.webp", caption: "Kurikulum — modul per batch dengan topik dan durasi jelas" },
      { src: "/portfolio/skilva-bootcamp/gallery.webp", caption: "Testimoni alumni — bagian cerita peserta yang sudah lulus" },
      { src: "/portfolio/skilva-bootcamp/mobile.webp", caption: "Tampilan mobile — pendaftaran batch langsung dari HP" },
    ],
  },
  {
    slug: "premium-fashion",
    title: {
      id: "E-Commerce Fashion Premium",
      en: "Premium Fashion E-Commerce",
      zh: "高端时尚电商平台",
    },
    category: "E-Commerce",
    tags: ["React", "TypeScript", "Admin Dashboard"],
    tech: "React 18, TypeScript, Vite, Tailwind CSS 4",
    solution: {
      id: "Platform e-commerce custom dengan desain full-custom berbasis warna hitam-gold, dilengkapi live shopping banner, flash sale real-time, admin dashboard dengan analytics penjualan, dan fitur product comparison.",
      en: "A custom e-commerce platform with a fully custom black-gold design, featuring a live shopping banner, real-time flash sales, an admin dashboard with sales analytics, and a product comparison feature.",
      zh: "定制电商平台，采用黑金配色全定制设计，配备直播购物横幅、实时限时抢购、带销售分析的管理仪表盘，以及商品对比功能。",
    },
    features: {
      id: [
        "Homepage: hero, live shopping banner, flash sale countdown, trending products",
        "Katalog produk: filter brand/kategori/size/harga, product comparison",
        "Product detail: galeri gambar, pilih size, add-to-cart, wishlist",
        "Cart & checkout: kupon diskon, ringkasan pesanan, checkout multi-step",
        "Admin dashboard: analytics penjualan, manajemen produk, kelola pesanan",
        "Dark mode penuh, bahasa ID/EN, mobile-first responsif",
      ],
      en: [
        "Homepage: hero, live shopping banner, flash sale countdown, trending products",
        "Product catalog: filter by brand/category/size/price, product comparison",
        "Product detail: image gallery, size selection, add-to-cart, wishlist",
        "Cart & checkout: discount coupons, order summary, multi-step checkout",
        "Admin dashboard: sales analytics, product management, order management",
        "Full dark mode, ID/EN language support, mobile-first responsive",
      ],
      zh: [
        "首页：主视觉、直播购物横幅、限时抢购倒计时、热门商品",
        "商品目录：品牌/类别/尺码/价格筛选、商品对比",
        "商品详情：图片画廊、尺码选择、加入购物车、心愿单",
        "购物车与结账：折扣券、订单摘要、多步骤结账",
        "管理仪表盘：销售分析、商品管理、订单管理",
        "完整深色模式、印尼语/英语支持、移动优先响应式设计",
      ],
    },
    images: [
      { src: "/portfolio/premium-fashion/hero.webp", caption: "Homepage — hero section dan trending products dalam desain hitam-gold" },
      { src: "/portfolio/premium-fashion/catalog.webp", caption: "Katalog — filter brand/kategori/ukuran, product grid dengan wishlist" },
      { src: "/portfolio/premium-fashion/product-detail.webp", caption: "Product detail — galeri gambar, pilih size, product comparison" },
      { src: "/portfolio/premium-fashion/mobile.webp", caption: "Tampilan mobile — full-featured dark mode, bottom navigation" },
    ],
  },
];
