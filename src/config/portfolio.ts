import type { Locale } from "@/i18n/routing";

type Text = { id: string; en: string; zh: string };

export type PortfolioImage = {
  /**
   * Desktop shots: path without suffix; the image loader picks
   * "<src>-800.webp" or "<src>-1400.webp". Mobile shots: full file path.
   */
  src: string;
  width: number;
  height: number;
  alt: Text;
  caption: Text;
};

export type PortfolioProject = {
  /** URL segment: /portofolio/{slug}. */
  slug: string;
  name: string;
  client: string;
  /** Client logo from /public/logos, shown on cards. */
  logo?: string;
  /** Industry page slug (/industries/{slug}) this project belongs to. */
  industry: string;
  category: Text;
  year: string;
  /** A self-initiated design exercise, not client work: labelled as such on the card and the page. */
  concept?: boolean;
  /** ISO date the project went live; newest projects are listed first. */
  launchedAt: string;
  liveUrl?: string;
  /** Service ids from config/services that this project used. */
  services: string[];
  /** Brand colour of the client, used for the card glow. */
  accent: string;
  metaTitle: Text;
  metaDescription: Text;
  /** One-line headline on the case study. */
  headline: Text;
  /** Card and hero summary. */
  summary: Text;
  cover: PortfolioImage;
  stats: { value: string; label: Text }[];
  challenge: Text;
  solution: Text;
  features: { icon: string; title: Text; text: Text }[];
  /** User roles, for systems with separate dashboards; websites leave it out. */
  roles?: { name: Text; text: Text; items: Text[] }[];
  gallery: PortfolioImage[];
  mobile: PortfolioImage[];
  stack: string[];
  outcomes: Text[];
};

export const PROJECTS_PER_PAGE = 6;

const koperasiEmas: PortfolioProject = {
  slug: "koperasiemas",
  name: "Koperasi Emas Digital",
  client: "Koperasi Emas Kimberli",
  logo: "/logos/koperasi-emas-kimberli.png",
  industry: "koperasi",
  category: {
    id: "Platform Koperasi & Fintech",
    en: "Cooperative & Fintech Platform",
    zh: "合作社与金融科技平台",
  },
  year: "2026",
  launchedAt: "2026-05-25",
  liveUrl: "https://koperasiemas.com",
  services: ["custom-software", "website", "dashboard"],
  accent: "#c9a227",
  metaTitle: {
    id: "Studi Kasus: Sistem Koperasi Emas Digital | AG·SORA",
    en: "Case Study: Digital Gold Cooperative Platform | AG·SORA",
    zh: "案例：黄金合作社数字化平台 | AG·SORA",
  },
  metaDescription: {
    id: "Portofolio AG·SORA: website dan sistem koperasi emas dengan harga emas harian, simpanan, cicilan, gadai, buyback, invoice, dan dashboard 3 peran.",
    en: "AG·SORA portfolio: a gold cooperative website and system with daily gold prices, savings, instalments, pawn loans, buyback, invoicing, and 3 role dashboards.",
    zh: "AG·SORA 作品：黄金合作社网站与系统，涵盖每日金价、储蓄、分期、典当、回购、发票及三种角色仪表盘。",
  },
  headline: {
    id: "Sistem koperasi emas digital, dari harga harian hingga persetujuan transaksi",
    en: "A digital gold cooperative, from daily prices to transaction approvals",
    zh: "黄金合作社\u200B数字化系统：从每日金价\u200B到交易审批",
  },
  summary: {
    id: "Website publik dan sistem operasional untuk koperasi emas: harga emas harian, katalog produk, simulasi cicilan, serta dashboard terpisah untuk pengurus, admin, dan anggota.",
    en: "A public website and operations system for a gold cooperative: daily gold prices, a product catalogue, instalment simulation, and separate dashboards for the board, admins, and members.",
    zh: "为黄金合作社打造的官网与运营系统：每日金价、产品目录、分期试算，以及分别面向理事、管理员和会员的仪表盘。",
  },
  cover: {
    src: "/portfolio/koperasiemas/beranda",
    width: 1440,
    height: 900,
    alt: {
      id: "Halaman beranda website Koperasi Emas Kimberli",
      en: "Home page of the Koperasi Emas Kimberli website",
      zh: "Koperasi Emas Kimberli 网站首页",
    },
    caption: {
      id: "Beranda dengan ajakan masuk dan akses cepat ke harga emas",
      en: "Home page with sign-in and a shortcut to gold prices",
      zh: "首页：登录入口与金价快捷入口",
    },
  },
  stats: [
    { value: "3", label: { id: "Peran pengguna", en: "User roles", zh: "用户角色" } },
    { value: "60+", label: { id: "Halaman & layar", en: "Pages & screens", zh: "页面与界面" } },
    { value: "11", label: { id: "Layanan anggota", en: "Member services", zh: "会员服务" } },
    { value: "2", label: { id: "Format invoice", en: "Invoice formats", zh: "发票格式" } },
  ],
  challenge: {
    id: "Koperasi melayani anggota yang menabung, mencicil, menggadaikan, dan menjual kembali emas. Sebelumnya harga diumumkan manual, pengajuan masuk lewat chat, dan pencatatan tersebar di beberapa buku dan spreadsheet. Pengurus sulit memastikan setiap transaksi sudah diverifikasi, dan anggota tidak bisa melihat saldo emas mereka sendiri.",
    en: "The cooperative serves members who save, buy on instalments, pawn, and sell gold back. Prices used to be announced by hand, requests arrived over chat, and records were spread across ledgers and spreadsheets. The board struggled to confirm that every transaction had been checked, and members could not see their own gold balance.",
    zh: "该合作社的会员会储蓄黄金、分期购买、典当以及回售黄金。过去金价靠人工发布，申请通过聊天提交，记录分散在多个账本和表格中。理事难以确认每笔交易都经过核实，会员也无法查看自己的黄金余额。",
  },
  solution: {
    id: "Kami membangun satu platform yang menggabungkan website publik dan sistem internal. Harga emas diperbarui sekali oleh pengurus lalu tampil di website, simulasi, dan dashboard. Setiap pengajuan dari anggota atau admin masuk ke antrean persetujuan yang hanya bisa disetujui pengurus, lengkap dengan jejak siapa menyetujui dan kapan. Saldo, cicilan, dan laporan dihitung otomatis dari transaksi yang sudah disetujui.",
    en: "We built one platform that combines the public website with the internal system. The board updates the gold price once and it appears on the website, the simulator, and every dashboard. Each request from a member or admin goes into an approval queue that only the board can approve, with a record of who approved it and when. Balances, instalments, and reports are calculated from approved transactions.",
    zh: "我们打造了一个将官网与内部系统合而为一的平台。理事只需更新一次金价，便会同步显示在官网、试算器和所有仪表盘。会员或管理员的每项申请都会进入仅限理事审批的队列，并记录审批人和时间。余额、分期和报表均根据已审批的交易自动计算。",
  },
  features: [
    {
      icon: "trending",
      title: { id: "Harga emas harian", en: "Daily gold prices", zh: "每日金价" },
      text: {
        id: "Tabel harga beli per gram dari 0,5 hingga 100 gram, lengkap dengan tren naik turun dibanding hari sebelumnya.",
        en: "Buy prices per weight from 0.5 to 100 grams, with the change against the previous day.",
        zh: "0.5 至 100 克各规格买入价，并显示与前一日相比的涨跌。",
      },
    },
    {
      icon: "cart",
      title: { id: "Katalog & pesanan", en: "Catalogue & orders", zh: "产品目录与订单" },
      text: {
        id: "Katalog emas batangan dengan stok, keranjang belanja, dan pesanan yang diteruskan ke WhatsApp admin.",
        en: "A gold bar catalogue with stock levels, a shopping cart, and orders forwarded to the admins on WhatsApp.",
        zh: "带库存的金条目录、购物车，订单直接转至管理员 WhatsApp。",
      },
    },
    {
      icon: "calculator",
      title: { id: "Simulasi cicilan & buyback", en: "Instalment & buyback simulator", zh: "分期与回购试算" },
      text: {
        id: "Kalkulator interaktif untuk beli tunai, cicilan dengan uang muka, dan estimasi nilai buyback.",
        en: "An interactive calculator for cash purchases, instalments with a down payment, and buyback estimates.",
        zh: "交互式计算器：现金购买、含首付的分期以及回购估值。",
      },
    },
    {
      icon: "check",
      title: { id: "Alur persetujuan", en: "Approval workflow", zh: "审批流程" },
      text: {
        id: "Transaksi, simpanan, cicilan, gadai, dan pesanan produk menunggu persetujuan pengurus, dengan jejak persetujuan.",
        en: "Transactions, savings, instalments, pawn loans, and product orders wait for board approval, with an approval trail.",
        zh: "交易、储蓄、分期、典当和产品订单均需理事审批，并保留审批记录。",
      },
    },
    {
      icon: "receipt",
      title: { id: "Invoice PDF & thermal", en: "PDF & thermal invoices", zh: "PDF 与热敏发票" },
      text: {
        id: "Invoice berkop resmi dalam PDF A4 satu halaman, plus versi cetak thermal 80 mm untuk kasir.",
        en: "Letterhead invoices as one-page A4 PDFs, plus an 80 mm thermal print version for the counter.",
        zh: "带抬头的单页 A4 PDF 发票，以及柜台用 80 毫米热敏打印版。",
      },
    },
    {
      icon: "chart",
      title: { id: "Statistik & laporan", en: "Statistics & reports", zh: "统计与报表" },
      text: {
        id: "Grafik saldo dan transaksi, laporan per periode, serta ekspor ke Excel untuk pembukuan.",
        en: "Balance and transaction charts, reports by period, and Excel export for bookkeeping.",
        zh: "余额与交易图表、按期间报表，并可导出 Excel 用于记账。",
      },
    },
    {
      icon: "shield",
      title: { id: "Keamanan data", en: "Data security", zh: "数据安全" },
      text: {
        id: "Row Level Security di database, hak akses per peran, log aktivitas, dan unggahan bukti bayar yang wajib login.",
        en: "Row Level Security in the database, role-based access, an activity log, and payment-proof uploads that require sign-in.",
        zh: "数据库行级安全、按角色授权、操作日志，上传付款凭证须先登录。",
      },
    },
    {
      icon: "layout",
      title: { id: "Konten tanpa coding", en: "No-code content", zh: "免代码内容管理" },
      text: {
        id: "Seluruh teks landing page, produk, testimoni, FAQ, dan foto gedung bisa diubah pengurus dari menu Pengaturan.",
        en: "All landing page copy, products, testimonials, FAQs, and building photos can be edited by the board from Settings.",
        zh: "理事可在设置中修改落地页文案、产品、评价、常见问题和办公楼照片。",
      },
    },
  ],
  roles: [
    {
      name: { id: "Pengurus (Master)", en: "Board (Master)", zh: "理事（主账号）" },
      text: {
        id: "Memegang kendali penuh dan menjadi satu-satunya pihak yang menyetujui transaksi.",
        en: "Full control, and the only role that approves transactions.",
        zh: "拥有全部权限，且是唯一可审批交易的角色。",
      },
      items: [
        { id: "Persetujuan semua transaksi", en: "Approves every transaction", zh: "审批所有交易" },
        { id: "Kelola admin, anggota, dan akun", en: "Manages admins, members, and accounts", zh: "管理管理员、会员与账号" },
        { id: "Atur harga emas dan voucher", en: "Sets gold prices and vouchers", zh: "设置金价与优惠券" },
        { id: "Statistik, laporan, dan log aktivitas", en: "Statistics, reports, and activity log", zh: "统计、报表与操作日志" },
        { id: "Kelola konten landing page", en: "Edits landing page content", zh: "管理落地页内容" },
      ],
    },
    {
      name: { id: "Admin", en: "Admin", zh: "管理员" },
      text: {
        id: "Menjalankan operasional harian di kantor dan menyiapkan pengajuan untuk pengurus.",
        en: "Runs day-to-day office work and prepares requests for the board.",
        zh: "负责日常柜台运营，并为理事准备待审申请。",
      },
      items: [
        { id: "Input transaksi dan simpanan", en: "Enters transactions and savings", zh: "录入交易与储蓄" },
        { id: "Verifikasi anggota dan pembayaran", en: "Verifies members and payments", zh: "核实会员与付款" },
        { id: "Kelola cicilan dan gadai", en: "Manages instalments and pawn loans", zh: "管理分期与典当" },
        { id: "Cetak invoice PDF & thermal", en: "Prints PDF & thermal invoices", zh: "打印 PDF 与热敏发票" },
        { id: "Produk, berita, dan chat anggota", en: "Products, news, and member chat", zh: "产品、新闻与会员聊天" },
      ],
    },
    {
      name: { id: "Anggota", en: "Member", zh: "会员" },
      text: {
        id: "Memantau saldo dan mengajukan transaksi sendiri tanpa harus datang ke kantor.",
        en: "Tracks their balance and submits requests without visiting the office.",
        zh: "随时查看余额并自助提交申请，无需前往网点。",
      },
      items: [
        { id: "Saldo emas dan grafik nilai", en: "Gold balance and value chart", zh: "黄金余额与价值走势" },
        { id: "Simpanan, cicilan, dan gadai", en: "Savings, instalments, and pawn loans", zh: "储蓄、分期与典当" },
        { id: "Ajukan beli atau buyback", en: "Requests purchases or buyback", zh: "申请购买或回购" },
        { id: "Unggah bukti pembayaran", en: "Uploads payment proof", zh: "上传付款凭证" },
        { id: "Histori dan laporan pribadi", en: "History and personal reports", zh: "交易历史与个人报表" },
      ],
    },
  ],
  gallery: [
    {
      src: "/portfolio/koperasiemas/harga-emas",
      width: 1440,
      height: 900,
      alt: {
        id: "Tabel harga emas hari ini per gram dengan tren harga",
        en: "Today's gold price table by weight with price trends",
        zh: "按克重显示的今日金价表及涨跌",
      },
      caption: {
        id: "Harga emas harian per gram, diperbarui dari dashboard pengurus",
        en: "Daily gold prices by weight, updated from the board dashboard",
        zh: "按克重显示的每日金价，由理事后台更新",
      },
    },
    {
      src: "/portfolio/koperasiemas/produk",
      width: 1440,
      height: 900,
      alt: {
        id: "Katalog produk emas batangan dengan harga dan stok",
        en: "Gold bar product catalogue with prices and stock",
        zh: "金条产品目录，含价格与库存",
      },
      caption: {
        id: "Katalog produk dengan stok dan tombol tambah ke keranjang",
        en: "Product catalogue with stock levels and add-to-cart",
        zh: "带库存和加入购物车的产品目录",
      },
    },
    {
      src: "/portfolio/koperasiemas/simulasi",
      width: 1440,
      height: 900,
      alt: {
        id: "Kalkulator simulasi beli, cicilan, dan buyback emas",
        en: "Gold purchase, instalment, and buyback simulator",
        zh: "黄金购买、分期与回购试算器",
      },
      caption: {
        id: "Simulasi beli tunai, cicilan, dan buyback dalam satu kalkulator",
        en: "Cash purchase, instalment, and buyback in one calculator",
        zh: "一个计算器完成现金购买、分期与回购试算",
      },
    },
    {
      src: "/portfolio/koperasiemas/katalog",
      width: 1440,
      height: 900,
      alt: {
        id: "Daftar produk emas Antam berbagai ukuran",
        en: "Antam gold bars in several weights",
        zh: "多种规格的 Antam 金条",
      },
      caption: {
        id: "Pilihan emas batangan dari 0,5 hingga 100 gram",
        en: "Gold bars from 0.5 to 100 grams",
        zh: "0.5 至 100 克金条",
      },
    },
  ],
  mobile: [
    {
      src: "/portfolio/koperasiemas/mobile-beranda.webp",
      width: 480,
      height: 1039,
      alt: {
        id: "Tampilan beranda Koperasi Emas di ponsel",
        en: "Koperasi Emas home page on a phone",
        zh: "手机上的 Koperasi Emas 首页",
      },
      caption: { id: "Beranda versi mobile", en: "Mobile home page", zh: "移动端首页" },
    },
    {
      src: "/portfolio/koperasiemas/mobile-simulasi.webp",
      width: 480,
      height: 1039,
      alt: {
        id: "Hasil simulasi harga emas di ponsel",
        en: "Gold price simulation result on a phone",
        zh: "手机上的金价试算结果",
      },
      caption: { id: "Simulasi versi mobile", en: "Mobile simulator", zh: "移动端试算" },
    },
  ],
  stack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "Supabase",
    "PostgreSQL",
    "Row Level Security",
    "Zustand",
    "React Hook Form",
    "Zod",
    "Recharts",
    "Framer Motion",
    "GSAP",
    "Google Drive API",
    "SheetJS",
    "Vercel",
  ],
  outcomes: [
    {
      id: "Anggota bisa melihat saldo emas, cicilan, dan riwayat transaksinya sendiri kapan saja.",
      en: "Members can check their gold balance, instalments, and transaction history at any time.",
      zh: "会员可随时查看自己的黄金余额、分期和交易记录。",
    },
    {
      id: "Tidak ada transaksi yang masuk ke saldo tanpa persetujuan pengurus, dan setiap persetujuan tercatat.",
      en: "No transaction reaches a balance without board approval, and every approval is recorded.",
      zh: "任何交易未经理事审批都不会计入余额，每次审批均有记录。",
    },
    {
      id: "Harga emas cukup diperbarui sekali dan langsung konsisten di website, simulasi, dan dashboard.",
      en: "Gold prices are updated once and stay consistent across the website, simulator, and dashboards.",
      zh: "金价只需更新一次，即可在官网、试算器与仪表盘中保持一致。",
    },
    {
      id: "Pengurus mengubah isi website sendiri tanpa menunggu developer.",
      en: "The board edits the website content themselves without waiting on a developer.",
      zh: "理事可自行修改网站内容，无需等待开发人员。",
    },
  ],
};

const maheswara: PortfolioProject = {
  slug: "maheswara",
  name: "Maheswara Wedding Planner",
  client: "Maheswara Wedding Planner",
  logo: "/portfolio/maheswara/logo.png",
  industry: "jasa-profesional",
  category: {
    id: "Website Interaktif 3D",
    en: "Interactive 3D Website",
    zh: "3D 交互式网站",
  },
  year: "2026",
  launchedAt: "2026-10-07",
  liveUrl: "https://maheswara-4d.vercel.app",
  services: ["website"],
  accent: "#e0245e",
  metaTitle: {
    id: "Studi Kasus: Website 3D Maheswara Wedding Planner | AG·SORA",
    en: "Case Study: Maheswara Wedding Planner 3D Website | AG·SORA",
    zh: "案例：Maheswara 婚礼策划 3D 网站 | AG·SORA",
  },
  metaDescription: {
    id: "Portofolio AG·SORA: website interaktif 3D untuk wedding planner, dengan Three.js, linimasa satu hari pernikahan, dua bahasa, dan formulir langsung ke WhatsApp.",
    en: "AG·SORA portfolio: an interactive 3D website for a wedding planner, built with Three.js, a scrubbable wedding-day timeline, two languages, and a WhatsApp form.",
    zh: "AG·SORA 作品：为婚礼策划公司打造的 3D 交互式网站，采用 Three.js，可拖动的婚礼当天时间线、双语界面及 WhatsApp 表单。",
  },
  headline: {
    id: "Website wedding planner yang mengajak pengunjung melewati satu hari pernikahan",
    en: "A wedding planner website that walks visitors through a wedding day",
    zh: "带访客​走过婚礼​一整天的​婚礼策划网站",
  },
  summary: {
    id: "Website satu halaman dengan dunia 3D yang bergerak mengikuti scroll: dari fajar hingga pesta malam, lengkap dengan paket, venue, testimoni, FAQ, dan formulir konsultasi ke WhatsApp.",
    en: "A one-page website with a 3D world that moves as you scroll, from dawn to the evening party, with packages, venues, testimonials, FAQs, and a consultation form that opens WhatsApp.",
    zh: "一个随滚动而变化的 3D 单页网站：从清晨到夜晚的派对，并包含套餐、场地、客户评价、常见问题以及直达 WhatsApp 的咨询表单。",
  },
  cover: {
    src: "/portfolio/maheswara/beranda",
    width: 1440,
    height: 900,
    alt: {
      id: "Hero website Maheswara Wedding Planner dengan cincin emas 3D",
      en: "Maheswara Wedding Planner website hero with 3D gold rings",
      zh: "Maheswara 婚礼策划网站首屏，带 3D 金色戒指",
    },
    caption: {
      id: "Hero dengan cincin 3D dan tesseract yang berputar",
      en: "Hero with 3D rings and a rotating tesseract",
      zh: "首屏：3D 戒指与旋转的超立方体",
    },
  },
  stats: [
    { value: "4", label: { id: "Babak hari H", en: "Wedding-day acts", zh: "婚礼当天四幕" } },
    { value: "2", label: { id: "Bahasa (ID/EN)", en: "Languages (ID/EN)", zh: "语言（印尼语/英语）" } },
    { value: "9", label: { id: "Masalah calon pengantin dijawab", en: "Couple pain points answered", zh: "解答新人的困扰" } },
    { value: "1", label: { id: "File statis, tanpa server", en: "Static file, no server", zh: "静态文件，无需服务器" } },
  ],
  challenge: {
    id: "Calon pengantin membandingkan banyak wedding planner dalam waktu singkat, dan kebanyakan website wedding terlihat serupa: galeri foto, daftar paket, dan tombol WhatsApp. Maheswara, yang berdiri sejak 2007, butuh website yang langsung terasa berbeda tanpa mengorbankan informasi praktis yang dicari calon pengantin: paket, venue, cara bayar, dan cara menghubungi.",
    en: "Couples compare many wedding planners in a short time, and most wedding websites look alike: a photo gallery, a package list, and a WhatsApp button. Maheswara, in business since 2007, needed a site that feels different from the first second without hiding the practical things couples look for: packages, venues, payment options, and how to get in touch.",
    zh: "新人往往在短时间内比较多家婚礼策划公司，而大多数婚礼网站都大同小异：照片集、套餐列表和一个 WhatsApp 按钮。成立于 2007 年的 Maheswara 需要一个一打开就与众不同的网站，同时不能淹没新人最关心的实用信息：套餐、场地、付款方式和联系方式。",
  },
  solution: {
    id: "Kami membangun website satu halaman di atas dunia 3D Three.js. Pengunjung masuk lewat gerbang, lalu scroll membawa mereka dari 2007 ke hari ini sementara cahaya berubah dari fajar ke malam. Di bagian Hari H, satu hari pernikahan bisa digeser dari 05:30 sampai 23:00 melewati empat babak, masing-masing dengan adegan 3D sendiri. Semua konten tetap disajikan di kartu yang mudah dibaca, dan formulir konsultasi menyusun pesan WhatsApp otomatis.",
    en: "We built a one-page site on top of a Three.js 3D world. Visitors enter through a gate, then scrolling carries them from 2007 to today while the light shifts from dawn to night. In the wedding-day section, one day can be scrubbed from 05:30 to 23:00 across four acts, each with its own 3D scene. All content stays on easy-to-read cards, and the consultation form writes the WhatsApp message for the visitor.",
    zh: "我们在 Three.js 3D 世界之上打造了一个单页网站。访客穿过一道“门”进入，随后滚动会带他们从 2007 年走到今天，光线也从清晨变为夜晚。在“婚礼当天”板块，可以把一天从 05:30 拖动到 23:00，经历四幕，每一幕都有专属 3D 场景。所有内容都放在易读的卡片上，咨询表单会自动生成 WhatsApp 消息。",
  },
  features: [
    {
      icon: "door",
      title: { id: "Gerbang masuk", en: "Entry gate", zh: "入口之门" },
      text: {
        id: "Animasi warp saat pengunjung menekan Masuk ke Dimensi, dengan pilihan masuk tanpa suara.",
        en: "A warp animation when visitors press Enter, with an option to come in without sound.",
        zh: "访客点击进入时播放穿越动画，也可选择静音进入。",
      },
    },
    {
      icon: "clock",
      title: { id: "Hari H yang bisa digeser", en: "Scrubbable wedding day", zh: "可拖动的婚礼当天" },
      text: {
        id: "Persiapan, akad, resepsi, dan pesta dari 05:30 hingga 23:00, masing-masing dengan adegan 3D sendiri.",
        en: "Preparation, ceremony, reception, and party from 05:30 to 23:00, each with its own 3D scene.",
        zh: "从 05:30 到 23:00 的准备、仪式、婚宴与派对，每一幕都有专属 3D 场景。",
      },
    },
    {
      icon: "box",
      title: { id: "Dunia 3D Three.js", en: "Three.js 3D world", zh: "Three.js 3D 世界" },
      text: {
        id: "Cincin emas, kelopak bunga, debu cahaya, dan tesseract yang berputar di latar belakang.",
        en: "Gold rings, petals, light dust, and a rotating tesseract in the background.",
        zh: "背景中有金色戒指、花瓣、光尘以及旋转的超立方体。",
      },
    },
    {
      icon: "sunrise",
      title: { id: "Linimasa & cahaya", en: "Timeline & light", zh: "时间线与光影" },
      text: {
        id: "Scroll menggerakkan tahun dari 2007 ke 2026 dan mengubah suasana dari fajar ke malam.",
        en: "Scrolling moves the year from 2007 to 2026 and shifts the mood from dawn to night.",
        zh: "滚动时年份从 2007 走到 2026，氛围从清晨变为夜晚。",
      },
    },
    {
      icon: "music",
      title: { id: "Suara generatif", en: "Generative sound", zh: "生成式音效" },
      text: {
        id: "Musik latar opsional dari Web Audio yang nadanya mengikuti waktu, bisa dimatikan kapan saja.",
        en: "Optional Web Audio background sound whose pitch follows the time of day, muted with one tap.",
        zh: "可选的 Web Audio 背景音，音高随时间变化，一键即可静音。",
      },
    },
    {
      icon: "phone",
      title: { id: "Kamera mengikuti gerak", en: "Motion-aware camera", zh: "随动镜头" },
      text: {
        id: "Kamera 3D mengikuti mouse di desktop dan giroskop di ponsel.",
        en: "The 3D camera follows the mouse on desktop and the gyroscope on phones.",
        zh: "3D 镜头在电脑上跟随鼠标，在手机上跟随陀螺仪。",
      },
    },
    {
      icon: "whatsapp",
      title: { id: "Formulir ke WhatsApp", en: "Form to WhatsApp", zh: "表单直达 WhatsApp" },
      text: {
        id: "Nama, jenis pernikahan, paket, tanggal, dan venue disusun jadi satu pesan WhatsApp, tanpa backend.",
        en: "Name, wedding type, package, date, and venue are put into one WhatsApp message, with no backend.",
        zh: "姓名、婚礼类型、套餐、日期和场地会整理成一条 WhatsApp 消息，无需后端。",
      },
    },
    {
      icon: "languages",
      title: { id: "Dua bahasa", en: "Two languages", zh: "双语" },
      text: {
        id: "Tombol ID/EN untuk calon pengantin lokal maupun internasional, dan animasi yang menyesuaikan pengaturan reduced motion.",
        en: "An ID/EN switch for local and international couples, and animation that respects reduced-motion settings.",
        zh: "ID/EN 切换，兼顾本地与国际新人，动画也会遵循“减少动态效果”设置。",
      },
    },
  ],
  gallery: [
    {
      src: "/portfolio/maheswara/gerbang",
      width: 1440,
      height: 900,
      alt: {
        id: "Gerbang Masuk ke Dimensi Keempat di website Maheswara",
        en: "The Enter the Fourth Dimension gate on the Maheswara website",
        zh: "Maheswara 网站的“进入第四维度”入口",
      },
      caption: {
        id: "Gerbang pembuka sebelum pengunjung masuk ke dunia 3D",
        en: "The opening gate before visitors enter the 3D world",
        zh: "进入 3D 世界前的开场之门",
      },
    },
    {
      src: "/portfolio/maheswara/persiapan",
      width: 1440,
      height: 900,
      alt: {
        id: "Babak Persiapan pukul 05:30 dengan buket bunga 3D",
        en: "The 05:30 preparation act with a 3D bouquet",
        zh: "05:30 准备环节，带 3D 花束",
      },
      caption: {
        id: "05:30, Persiapan: buket bunga dan matahari terbit",
        en: "05:30, Preparation: a bouquet and sunrise",
        zh: "05:30 准备：花束与日出",
      },
    },
    {
      src: "/portfolio/maheswara/resepsi",
      width: 1440,
      height: 900,
      alt: {
        id: "Babak Resepsi pukul 18:22 dengan lampu gantung",
        en: "The 18:22 reception act with string lights",
        zh: "18:22 婚宴环节，带串灯",
      },
      caption: {
        id: "18:22, Resepsi: lampu-lampu gantung yang berkelip",
        en: "18:22, Reception: twinkling string lights",
        zh: "18:22 婚宴：闪烁的串灯",
      },
    },
    {
      src: "/portfolio/maheswara/pesta",
      width: 1440,
      height: 900,
      alt: {
        id: "Babak Pesta pukul 22:59 dengan kembang api 3D",
        en: "The 22:59 party act with 3D fireworks",
        zh: "22:59 派对环节，带 3D 烟花",
      },
      caption: {
        id: "22:59, Pesta: kembang api menutup hari",
        en: "22:59, Party: fireworks close the day",
        zh: "22:59 派对：烟花为这一天收尾",
      },
    },
    {
      src: "/portfolio/maheswara/solusi",
      width: 1440,
      height: 900,
      alt: {
        id: "Bagian keunggulan Maheswara dengan penghitung tahun pengalaman",
        en: "Maheswara's strengths section with a years-of-experience counter",
        zh: "Maheswara 优势板块，带从业年数计数",
      },
      caption: {
        id: "Keunggulan dengan penghitung tahun pengalaman",
        en: "Strengths with a years-of-experience counter",
        zh: "优势介绍与从业年数计数",
      },
    },
    {
      src: "/portfolio/maheswara/faq",
      width: 1440,
      height: 900,
      alt: {
        id: "Bagian FAQ website Maheswara",
        en: "FAQ section of the Maheswara website",
        zh: "Maheswara 网站常见问题板块",
      },
      caption: {
        id: "FAQ seputar paket, vendor, dan pembayaran",
        en: "FAQs on packages, vendors, and payment",
        zh: "关于套餐、供应商与付款的常见问题",
      },
    },
  ],
  mobile: [
    {
      src: "/portfolio/maheswara/mobile-beranda.webp",
      width: 480,
      height: 1039,
      alt: {
        id: "Hero website Maheswara di ponsel",
        en: "Maheswara website hero on a phone",
        zh: "手机上的 Maheswara 网站首屏",
      },
      caption: { id: "Hero versi mobile", en: "Mobile hero", zh: "移动端首屏" },
    },
    {
      src: "/portfolio/maheswara/mobile-akad.webp",
      width: 480,
      height: 1039,
      alt: {
        id: "Babak Akad dengan hati 3D di ponsel",
        en: "The ceremony act with a 3D heart on a phone",
        zh: "手机上的仪式环节，带 3D 爱心",
      },
      caption: { id: "Babak Akad di ponsel", en: "Ceremony act on mobile", zh: "移动端仪式环节" },
    },
  ],
  stack: [
    "Three.js",
    "WebGL",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Web Audio API",
    "DeviceOrientation API",
    "Vercel",
  ],
  outcomes: [
    {
      id: "Pengunjung merasakan suasana hari pernikahan sebelum membaca daftar paket.",
      en: "Visitors feel the mood of a wedding day before they read the package list.",
      zh: "访客在浏览套餐之前，就能先感受到婚礼当天的氛围。",
    },
    {
      id: "Paket, venue, testimoni, FAQ, dan kontak tetap mudah dibaca di atas pengalaman 3D.",
      en: "Packages, venues, testimonials, FAQs, and contact details stay easy to read on top of the 3D experience.",
      zh: "套餐、场地、评价、常见问题和联系方式在 3D 体验之上依然清晰易读。",
    },
    {
      id: "Setiap konsultasi masuk sebagai pesan WhatsApp yang sudah lengkap dan rapi.",
      en: "Every consultation arrives as a complete, tidy WhatsApp message.",
      zh: "每条咨询都以完整、整洁的 WhatsApp 消息送达。",
    },
    {
      id: "Satu file statis yang cepat dimuat dan murah di-hosting, tanpa server atau database.",
      en: "A single static file that loads fast and costs little to host, with no server or database.",
      zh: "单个静态文件，加载快、托管成本低，无需服务器或数据库。",
    },
  ],
};

const gandum: PortfolioProject = {
  slug: "gandum-bakehouse",
  name: "Gandum Bakehouse",
  client: "Konsep AG·SORA",
  industry: "kuliner",
  category: {
    id: "Konsep E-commerce Toko Roti",
    en: "Bakery E-commerce Concept",
    zh: "烘焙电商概念设计",
  },
  year: "2026",
  concept: true,
  launchedAt: "2026-10-26",
  // Hosted by us: the prototype is a static file in /public, served at this URL.
  liveUrl: "https://www.agsora.tech/portofolio/gandum-bakehouse/demo.html",
  services: ["website", "custom-software"],
  accent: "#c8553d",
  metaTitle: {
    id: "Konsep: E-commerce Toko Roti dengan Keranjang & Checkout | AG·SORA",
    en: "Concept: Bakery E-commerce with Cart & Checkout | AG·SORA",
    zh: "概念：含购物车与结账的烘焙电商 | AG·SORA",
  },
  metaDescription: {
    id: "Proyek konsep AG·SORA: desain e-commerce toko roti dengan katalog, filter, keranjang, kode promo, dan checkout. Merek fiktif, bukan pekerjaan klien.",
    en: "AG·SORA concept project: a bakery e-commerce design with catalogue, filters, cart, promo codes, and checkout. A fictional brand, not client work.",
    zh: "AG·SORA 概念项目：烘焙电商设计，含商品目录、筛选、购物车、优惠码与结账。虚构品牌，非客户作品。",
  },
  headline: {
    id: "Dari katalog toko roti menjadi pengalaman belanja online yang cepat",
    en: "Turning a bakery catalogue into a fast online shopping experience",
    zh: "把烘焙店商品目录\u200B变成流畅的\u200B线上购物体验",
  },
  summary: {
    id: "Prototipe e-commerce toko roti yang bisa dicoba dari awal sampai akhir: telusuri kategori, cari produk, tambah ke keranjang, pakai kode promo, lalu checkout dengan jadwal antar.",
    en: "A bakery e-commerce prototype you can try end to end: browse categories, search, add to cart, apply a promo code, and check out with a delivery slot.",
    zh: "可完整体验的烘焙电商原型：浏览分类、搜索、加入购物车、使用优惠码，并选择配送时段完成结账。",
  },
  cover: {
    src: "/portfolio/gandum-bakehouse/beranda",
    width: 1440,
    height: 900,
    alt: {
      id: "Beranda konsep e-commerce Gandum Bakehouse dengan roti dan croissant",
      en: "Home page of the Gandum Bakehouse e-commerce concept with bread and a croissant",
      zh: "Gandum Bakehouse 电商概念首页，展示面包与可颂",
    },
    caption: {
      id: "Beranda dengan ajakan belanja dan gratis ongkir",
      en: "Home page with a shop call to action and free delivery",
      zh: "首页：购物入口与免运费提示",
    },
  },
  stats: [
    { value: "27", label: { id: "Produk contoh", en: "Sample products", zh: "示例商品" } },
    { value: "9", label: { id: "Kategori", en: "Categories", zh: "分类" } },
    { value: "3", label: { id: "Langkah ke pesanan", en: "Steps to an order", zh: "下单步骤" } },
    { value: "0", label: { id: "Library eksternal", en: "External libraries", zh: "外部库" } },
  ],
  challenge: {
    id: "Banyak toko roti sudah punya katalog online, tetapi pemesanannya masih terasa seperti brosur: produk dijejer, tombol tambah ke keranjang kecil, dan checkout panjang. Pelanggan yang hanya ingin memesan roti untuk besok pagi harus melewati banyak langkah. Konsep ini menjawab satu pertanyaan: seberapa cepat orang bisa dari melihat produk sampai pesanan terkirim?",
    en: "Many bakeries already have an online catalogue, but ordering still feels like a brochure: products in a row, a small add-to-cart button, and a long checkout. Someone who just wants bread for tomorrow morning has to get through too many steps. This concept asks one question: how fast can a person go from seeing a product to a placed order?",
    zh: "许多烘焙店已有线上目录，但下单体验仍像一本宣传册：商品平铺、加入购物车按钮很小、结账流程冗长。只想订明早面包的顾客要经过太多步骤。这个概念只回答一个问题：从看到商品到完成下单，最快能多快？",
  },
  solution: {
    id: "Kami merancang alur belanja yang pendek. Kategori, momen (sarapan, rapat, ulang tahun), dan pencarian ada di satu tempat. Keranjang berupa panel samping dengan bilah progres gratis ongkir dan kolom kode promo, jadi pelanggan tidak berpindah halaman. Checkout dibagi tiga kartu: data penerima, jadwal antar, dan pembayaran, dengan ringkasan yang selalu terlihat. Semuanya jalan di satu file tanpa library, dan keranjang tersimpan di perangkat.",
    en: "We designed a short shopping path. Categories, occasions (breakfast, meetings, birthdays), and search live in one place. The cart is a side panel with a free-delivery progress bar and a promo field, so shoppers never leave the page. Checkout is three cards, recipient, delivery slot, and payment, with the summary always in view. It all runs in a single file with no libraries, and the cart is kept on the device.",
    zh: "我们设计了一条很短的购物路径。分类、场景（早餐、会议、生日）和搜索集中在一处。购物车是侧边面板，带有免运费进度条和优惠码输入，顾客无需跳转页面。结账分为三张卡片：收货人、配送时段与付款，订单摘要始终可见。整个站点只有一个文件、没有任何库，购物车保存在本机。",
  },
  features: [
    {
      icon: "layout",
      title: { id: "Kategori & momen", en: "Categories & occasions", zh: "分类与场景" },
      text: {
        id: "Sembilan kategori produk plus pilihan momen seperti sarapan, gathering, dan ulang tahun.",
        en: "Nine product categories plus occasions such as breakfast, gatherings, and birthdays.",
        zh: "九大商品分类，外加早餐、聚会、生日等场景入口。",
      },
    },
    {
      icon: "cart",
      title: { id: "Katalog dengan filter", en: "Catalogue with filters", zh: "可筛选目录" },
      text: {
        id: "Pencarian, filter kategori, urutan harga atau rating, dan paging, dengan alamat yang bisa dibagikan.",
        en: "Search, category filters, price or rating sorting, and paging, with shareable URLs.",
        zh: "搜索、分类筛选、按价格或评分排序及分页，链接可分享。",
      },
    },
    {
      icon: "check",
      title: { id: "Halaman produk", en: "Product pages", zh: "商品详情页" },
      text: {
        id: "Pilihan varian, jumlah, label terlaris dan diskon, serta rekomendasi produk lain.",
        en: "Variant choice, quantity, best-seller and discount labels, and related product suggestions.",
        zh: "规格选择、数量、热销与折扣标签，以及相关商品推荐。",
      },
    },
    {
      icon: "receipt",
      title: { id: "Keranjang samping", en: "Slide-in cart", zh: "侧边购物车" },
      text: {
        id: "Ubah jumlah di tempat, lihat progres gratis ongkir, dan pakai kode promo tanpa pindah halaman.",
        en: "Change quantities in place, watch free-delivery progress, and apply a promo code without leaving the page.",
        zh: "就地调整数量、查看免运费进度，并在当前页使用优惠码。",
      },
    },
    {
      icon: "calculator",
      title: { id: "Hitung otomatis", en: "Live totals", zh: "实时计算" },
      text: {
        id: "Subtotal, diskon, ongkir, dan total dihitung ulang setiap keranjang berubah.",
        en: "Subtotal, discount, delivery, and total recalculate whenever the cart changes.",
        zh: "购物车每次变化，小计、折扣、运费与总额都会重新计算。",
      },
    },
    {
      icon: "clock",
      title: { id: "Jadwal antar", en: "Delivery slots", zh: "配送时段" },
      text: {
        id: "Pelanggan memilih tanggal dan jam antar, cocok untuk pesan hari ini atau besok pagi.",
        en: "Shoppers pick a delivery date and time, ideal for same-day or next-morning orders.",
        zh: "顾客可选择配送日期和时间，适合当天或次日早晨送达。",
      },
    },
    {
      icon: "phone",
      title: { id: "Mobile first", en: "Mobile first", zh: "移动优先" },
      text: {
        id: "Tata letak dua kolom di ponsel, tombol besar, dan keranjang layar penuh.",
        en: "A two-column layout on phones, large buttons, and a full-screen cart.",
        zh: "手机端双列布局、大按钮和全屏购物车。",
      },
    },
    {
      icon: "shield",
      title: { id: "Aksesibel & ringan", en: "Accessible & light", zh: "无障碍且轻量" },
      text: {
        id: "Label untuk pembaca layar, fokus yang jelas, dan animasi yang mengikuti pengaturan reduced motion.",
        en: "Screen reader labels, clear focus states, and animation that follows reduced-motion settings.",
        zh: "屏幕阅读器标签、清晰的焦点状态，动画遵循“减少动态效果”设置。",
      },
    },
  ],
  gallery: [
    {
      src: "/portfolio/gandum-bakehouse/katalog",
      width: 1440,
      height: 900,
      alt: {
        id: "Katalog produk dengan filter kategori dan label diskon",
        en: "Product catalogue with category filters and discount labels",
        zh: "带分类筛选和折扣标签的商品目录",
      },
      caption: {
        id: "Katalog dengan filter kategori, urutan, dan label diskon",
        en: "Catalogue with category filters, sorting, and discount labels",
        zh: "带分类筛选、排序与折扣标签的目录",
      },
    },
    {
      src: "/portfolio/gandum-bakehouse/produk",
      width: 1440,
      height: 900,
      alt: {
        id: "Halaman detail produk red velvet dengan pilihan dan tombol keranjang",
        en: "Red velvet product page with options and an add-to-cart button",
        zh: "红丝绒蛋糕商品页，含规格选项与加入购物车按钮",
      },
      caption: {
        id: "Halaman produk dengan pilihan varian dan jaminan kesegaran",
        en: "Product page with variants and freshness promises",
        zh: "含规格选择与新鲜保证的商品页",
      },
    },
    {
      src: "/portfolio/gandum-bakehouse/keranjang",
      width: 1440,
      height: 900,
      alt: {
        id: "Keranjang samping dengan kode promo dan progres gratis ongkir",
        en: "Slide-in cart with a promo code and free-delivery progress",
        zh: "带优惠码与免运费进度的侧边购物车",
      },
      caption: {
        id: "Keranjang samping dengan promo dan progres gratis ongkir",
        en: "Slide-in cart with promo and free-delivery progress",
        zh: "带优惠与免运费进度的侧边购物车",
      },
    },
    {
      src: "/portfolio/gandum-bakehouse/checkout",
      width: 1440,
      height: 900,
      alt: {
        id: "Halaman checkout dengan data penerima, jadwal antar, dan ringkasan pesanan",
        en: "Checkout page with recipient details, delivery slot, and order summary",
        zh: "含收货信息、配送时段与订单摘要的结账页",
      },
      caption: {
        id: "Checkout tiga kartu dengan ringkasan yang selalu terlihat",
        en: "A three-card checkout with an always-visible summary",
        zh: "三卡片结账，订单摘要始终可见",
      },
    },
  ],
  mobile: [
    {
      src: "/portfolio/gandum-bakehouse/mobile-produk.webp",
      width: 480,
      height: 1039,
      alt: {
        id: "Halaman produk croissant di ponsel",
        en: "Croissant product page on a phone",
        zh: "手机上的可颂商品页",
      },
      caption: { id: "Halaman produk di ponsel", en: "Product page on mobile", zh: "移动端商品页" },
    },
    {
      src: "/portfolio/gandum-bakehouse/mobile-keranjang.webp",
      width: 480,
      height: 1039,
      alt: {
        id: "Keranjang layar penuh di ponsel",
        en: "Full-screen cart on a phone",
        zh: "手机上的全屏购物车",
      },
      caption: { id: "Keranjang layar penuh", en: "Full-screen cart", zh: "全屏购物车" },
    },
  ],
  stack: ["HTML5", "CSS3", "JavaScript", "SVG", "localStorage", "Hash routing"],
  outcomes: [
    {
      id: "Dari beranda ke pesanan terkirim hanya butuh tiga langkah: pilih, atur jadwal, bayar.",
      en: "From home page to a placed order takes three steps: choose, set a slot, pay.",
      zh: "从首页到下单只需三步：选择、定时段、付款。",
    },
    {
      id: "Pelanggan melihat total akhir, termasuk diskon dan ongkir, sebelum masuk checkout.",
      en: "Shoppers see the final total, including discount and delivery, before reaching checkout.",
      zh: "顾客在进入结账前就能看到含折扣与运费的最终总额。",
    },
    {
      id: "Ilustrasi produk berupa SVG, jadi halaman ringan dan tajam di semua layar.",
      en: "Product illustrations are SVG, so pages stay light and sharp on every screen.",
      zh: "商品插图采用 SVG，页面轻量且在任何屏幕上都清晰。",
    },
    {
      id: "Pola ini bisa dihubungkan ke stok, pembayaran, dan pengiriman nyata saat menjadi proyek klien.",
      en: "The pattern can be wired to real stock, payments, and delivery when it becomes a client project.",
      zh: "成为客户项目时，这一模式可接入真实的库存、支付与配送。",
    },
  ],
};

/** Client work first, then concepts, newest first. Add a project here and it appears on /portofolio, in the sitemap, and gets its own page. */
export const projects: PortfolioProject[] = [koperasiEmas, maheswara, gandum].sort(
  // Client work first, concept projects after it; newest first within each group.
  (a, b) => Number(!!a.concept) - Number(!!b.concept) || b.launchedAt.localeCompare(a.launchedAt)
);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getTotalProjectPages() {
  return Math.max(1, Math.ceil(projects.length / PROJECTS_PER_PAGE));
}

export function getProjectsForPage(page: number) {
  const start = (page - 1) * PROJECTS_PER_PAGE;
  return projects.slice(start, start + PROJECTS_PER_PAGE);
}

/** Page 1 lives at /portofolio; the rest at /portofolio/page/{n}. */
export function portfolioPageHref(page: number) {
  return page <= 1 ? "/portofolio" : `/portofolio/page/${page}`;
}

export const portfolioStrings: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    statClients: string;
    statProjects: string;
    statIndustries: string;
    featured: string;
    viewCase: string;
    visitSite: string;
    allProjects: string;
    conceptTag: string;
    conceptNote: string;
    nextSlotTitle: string;
    nextSlotText: string;
    nextSlotCta: string;
    client: string;
    industry: string;
    year: string;
    services: string;
    challengeEyebrow: string;
    challengeTitle: string;
    solutionTitle: string;
    featuresEyebrow: string;
    featuresTitle: string;
    rolesEyebrow: string;
    rolesTitle: string;
    galleryEyebrow: string;
    galleryTitle: string;
    mobileTitle: string;
    stackEyebrow: string;
    stackTitle: string;
    outcomesEyebrow: string;
    outcomesTitle: string;
    ctaSimilar: string;
    backToPortfolio: string;
    otherProjects: string;
    industryCaseStudies: string;
    archiveTitle: (page: number) => string;
    archiveDescription: (page: number, total: number) => string;
  }
> = {
  id: {
    eyebrow: "Portofolio",
    title: "Sistem yang sudah kami bangun",
    titleHighlight: "dan dipakai setiap hari.",
    description:
      "Studi kasus proyek AG·SORA: masalah yang dihadapi klien, sistem yang kami rancang, dan hasilnya di operasional nyata.",
    statClients: "Klien",
    statProjects: "Studi kasus",
    statIndustries: "Industri dilayani",
    featured: "Proyek unggulan",
    conceptTag: "Konsep",
    conceptNote: "Ini proyek konsep AG·SORA, bukan pekerjaan untuk klien. Merek, produk, dan harga di dalamnya fiktif.",
    viewCase: "Lihat studi kasus",
    visitSite: "Kunjungi situs",
    allProjects: "Semua proyek",
    nextSlotTitle: "Proyek Anda berikutnya",
    nextSlotText: "Ceritakan proses bisnis Anda. Kami bantu petakan sistem yang tepat, gratis.",
    nextSlotCta: "Konsultasi gratis",
    client: "Klien",
    industry: "Industri",
    year: "Tahun",
    services: "Layanan",
    challengeEyebrow: "Latar belakang",
    challengeTitle: "Tantangan",
    solutionTitle: "Solusi kami",
    featuresEyebrow: "Fitur utama",
    featuresTitle: "Fitur yang kami bangun",
    rolesEyebrow: "Hak akses",
    rolesTitle: "Satu sistem, tiga dashboard",
    galleryEyebrow: "Galeri",
    galleryTitle: "Tampilan aplikasi",
    mobileTitle: "Responsif di ponsel",
    stackEyebrow: "Teknologi",
    stackTitle: "Dibangun dengan",
    outcomesEyebrow: "Hasil",
    outcomesTitle: "Hasilnya untuk klien",
    ctaSimilar: "Bangun sistem serupa",
    backToPortfolio: "Kembali ke portofolio",
    otherProjects: "Proyek lainnya",
    industryCaseStudies: "Studi kasus di industri ini",
    archiveTitle: (page) => `Portofolio, Halaman ${page}`,
    archiveDescription: (page, total) =>
      `Halaman ${page} dari ${total}: studi kasus website, aplikasi, dan sistem bisnis yang dibangun AG·SORA.`,
  },
  en: {
    eyebrow: "Portfolio",
    title: "Systems we have built,",
    titleHighlight: "in use every day.",
    description:
      "AG·SORA case studies: the problem each client faced, the system we designed, and how it performs in real operations.",
    statClients: "Clients",
    statProjects: "Case studies",
    statIndustries: "Industries served",
    featured: "Featured project",
    conceptTag: "Concept",
    conceptNote: "This is an AG·SORA concept project, not client work. The brand, products, and prices in it are fictional.",
    viewCase: "View case study",
    visitSite: "Visit site",
    allProjects: "All projects",
    nextSlotTitle: "Your project, next",
    nextSlotText: "Tell us how your business runs. We'll map out the right system with you, free.",
    nextSlotCta: "Free consultation",
    client: "Client",
    industry: "Industry",
    year: "Year",
    services: "Services",
    challengeEyebrow: "Background",
    challengeTitle: "The challenge",
    solutionTitle: "Our solution",
    featuresEyebrow: "Key features",
    featuresTitle: "What we built",
    rolesEyebrow: "Access",
    rolesTitle: "One system, three dashboards",
    galleryEyebrow: "Gallery",
    galleryTitle: "Inside the app",
    mobileTitle: "Responsive on phones",
    stackEyebrow: "Technology",
    stackTitle: "Built with",
    outcomesEyebrow: "Outcomes",
    outcomesTitle: "What the client gets",
    ctaSimilar: "Build something similar",
    backToPortfolio: "Back to portfolio",
    otherProjects: "Other projects",
    industryCaseStudies: "Case studies in this industry",
    archiveTitle: (page) => `Portfolio, Page ${page}`,
    archiveDescription: (page, total) =>
      `Page ${page} of ${total}: case studies of websites, apps, and business systems built by AG·SORA.`,
  },
  zh: {
    eyebrow: "作品集",
    title: "我们打造的系统，",
    titleHighlight: "每天都在使用。",
    description: "AG·SORA 项目案例：客户面临的问题、我们设计的系统，以及在实际运营中的成效。",
    statClients: "客户",
    statProjects: "项目案例",
    statIndustries: "服务行业",
    featured: "精选项目",
    conceptTag: "概念",
    conceptNote: "这是 AG·SORA 的概念项目，并非客户交付作品。其中的品牌、产品与价格均为虚构。",
    viewCase: "查看案例",
    visitSite: "访问网站",
    allProjects: "全部项目",
    nextSlotTitle: "下一个就是您的项目",
    nextSlotText: "告诉我们您的业务流程，我们免费帮您规划合适的系统。",
    nextSlotCta: "免费咨询",
    client: "客户",
    industry: "行业",
    year: "年份",
    services: "服务",
    challengeEyebrow: "背景",
    challengeTitle: "挑战",
    solutionTitle: "我们的方案",
    featuresEyebrow: "核心功能",
    featuresTitle: "我们\u200B打造的\u200B功能",
    rolesEyebrow: "权限",
    rolesTitle: "一个系统，三个\u200B仪表盘",
    galleryEyebrow: "图库",
    galleryTitle: "应用界面",
    mobileTitle: "手机端自适应",
    stackEyebrow: "技术",
    stackTitle: "技术栈",
    outcomesEyebrow: "成效",
    outcomesTitle: "为客户\u200B带来的\u200B成果",
    ctaSimilar: "打造类似系统",
    backToPortfolio: "返回作品集",
    otherProjects: "其他项目",
    industryCaseStudies: "该行业的项目案例",
    archiveTitle: (page) => `作品集, 第 ${page} 页`,
    archiveDescription: (page, total) => `第 ${page} / ${total} 页：AG·SORA 打造的网站、应用与商业系统案例。`,
  },
};

export const productsStrings: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    badge: string;
    notify: string;
    notifyMessage: string;
    services: string;
    portfolio: string;
  }
> = {
  id: {
    eyebrow: "Produk AG·SORA",
    title: "Coming Soon",
    description:
      "Kami sedang menyiapkan produk software siap pakai dari AG·SORA. Sementara itu, kami tetap membangun sistem custom sesuai proses bisnis Anda.",
    badge: "Sedang dalam pengembangan",
    notify: "Kabari saya saat rilis",
    notifyMessage: "Halo AG·SORA, saya ingin dikabari saat produk AG·SORA rilis.",
    services: "Lihat layanan custom",
    portfolio: "Lihat portofolio",
  },
  en: {
    eyebrow: "AG·SORA Products",
    title: "Coming Soon",
    description:
      "We are preparing ready-to-use software products from AG·SORA. In the meantime, we keep building custom systems around how your business works.",
    badge: "In development",
    notify: "Notify me at launch",
    notifyMessage: "Hi AG·SORA, I'd like to hear when AG·SORA products launch.",
    services: "See custom services",
    portfolio: "See our portfolio",
  },
  zh: {
    eyebrow: "AG·SORA 产品",
    title: "Coming Soon",
    description: "我们正在准备 AG·SORA 的开箱即用软件产品。在此期间，我们仍为您按业务流程定制系统。",
    badge: "开发中",
    notify: "上线时通知我",
    notifyMessage: "您好 AG·SORA，产品上线时请通知我。",
    services: "查看定制服务",
    portfolio: "查看作品集",
  },
};
