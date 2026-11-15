/**
 * The template gallery (/template): ready-made designs a prospect can try before ordering. Each one has a live,
 * clickable demo at /demo/<slug> (see src/components/demos). Prices come from the service price list, so a price
 * changed in the dashboard shows here too.
 */
type L = { id: string; en: string; zh: string };
const L = (id: string, en: string, zh: string): L => ({ id, en, zh });

export const TEMPLATE_CATEGORIES = [
  { key: "all", label: L("Semua", "All", "全部") },
  { key: "website", label: L("Website", "Websites", "网站") },
  { key: "shop", label: L("Toko & pemesanan", "Shops & ordering", "商店与订购") },
  { key: "app", label: L("Aplikasi bisnis", "Business apps", "业务应用") },
] as const;
export type TemplateCategory = Exclude<(typeof TEMPLATE_CATEGORIES)[number]["key"], "all">;

export type Template = {
  slug: string;
  name: L;
  category: TemplateCategory;
  /** Who it suits. */
  forWho: L;
  summary: L;
  /** What the demo shows (pages or screens). */
  includes: L[];
  /** Service in the price list whose "from" price applies. */
  serviceId: string;
  /** Fallback when the service has no price. */
  priceFrom: number;
  days: string;
  /** Colours used for the card thumbnail frame. */
  accent: string;
};

export const TEMPLATES: Template[] = [
  {
    slug: "korporat",
    name: L("Company Profile Korporat", "Corporate Company Profile", "企业形象官网"),
    category: "website",
    forWho: L("Kontraktor, konsultan, jasa B2B", "Contractors, consultants, B2B services", "承包商、顾问、B2B 服务"),
    summary: L(
      "Website perusahaan yang tegas dan terpercaya: layanan, portofolio proyek, angka pencapaian, dan formulir permintaan penawaran.",
      "A confident company website: services, project portfolio, key numbers and a request-for-quote form.",
      "稳重可信的企业官网：服务、项目案例、关键数据与询价表单。",
    ),
    includes: [L("Beranda & keunggulan", "Home & strengths", "首页与优势"), L("Layanan", "Services", "服务"), L("Portofolio dengan filter", "Filterable portfolio", "可筛选案例"), L("Testimoni", "Testimonials", "客户评价"), L("Form penawaran", "Quote form", "询价表单")],
    serviceId: "company-profile",
    priceFrom: 5_500_000,
    days: "5–7",
    accent: "#0f2a4a",
  },
  {
    slug: "toko-online",
    name: L("Toko Online", "Online Store", "网上商店"),
    category: "shop",
    forWho: L("UMKM fashion, kerajinan, produk kemasan", "Fashion, craft and packaged-goods brands", "服饰、手工艺与包装商品品牌"),
    summary: L(
      "Katalog produk dengan kategori, keranjang belanja, dan ringkasan pesanan siap dibayar lewat QRIS atau transfer.",
      "Product catalogue with categories, a shopping cart and an order summary ready for QRIS or bank transfer.",
      "带分类的商品目录、购物车与订单汇总，支持 QRIS 或转账付款。",
    ),
    includes: [L("Katalog & kategori", "Catalogue & categories", "目录与分类"), L("Keranjang belanja", "Shopping cart", "购物车"), L("Ringkasan & ongkir", "Summary & shipping", "订单汇总与运费"), L("Promo & badge produk", "Promos & product badges", "促销与商品标签")],
    serviceId: "ecommerce",
    priceFrom: 12_000_000,
    days: "10–14",
    accent: "#7a3b1d",
  },
  {
    slug: "restoran",
    name: L("Restoran & Kafe", "Restaurant & Café", "餐厅与咖啡馆"),
    category: "shop",
    forWho: L("Restoran, kafe, katering", "Restaurants, cafés, caterers", "餐厅、咖啡馆、餐饮服务"),
    summary: L(
      "Menu digital dengan kategori, pesan langsung ke WhatsApp, dan reservasi meja dengan pilihan tanggal, jam, dan jumlah tamu.",
      "Digital menu with categories, ordering straight to WhatsApp, and table booking by date, time and party size.",
      "分类电子菜单、直接 WhatsApp 下单，以及按日期、时间与人数订位。",
    ),
    includes: [L("Menu digital", "Digital menu", "电子菜单"), L("Pesan via WhatsApp", "Order via WhatsApp", "WhatsApp 下单"), L("Reservasi meja", "Table booking", "订位"), L("Jam buka & lokasi", "Hours & location", "营业时间与地址")],
    serviceId: "booking",
    priceFrom: 8_000_000,
    days: "5–7",
    accent: "#2f4a2a",
  },
  {
    slug: "klinik",
    name: L("Klinik & Booking Dokter", "Clinic & Doctor Booking", "诊所与医生预约"),
    category: "website",
    forWho: L("Klinik, praktik dokter, dokter gigi, salon", "Clinics, practices, dentists, salons", "诊所、私人诊室、牙科、美容院"),
    summary: L(
      "Pasien memilih poli, dokter, dan jam praktik yang masih kosong, lalu mendapat nomor booking. Mengurangi antrean dan telepon.",
      "Patients pick a department, a doctor and a free slot, then get a booking number. Fewer queues and phone calls.",
      "患者选择科室、医生与空闲时段并获得预约号，减少排队与电话。",
    ),
    includes: [L("Profil klinik & poli", "Clinic & departments", "诊所与科室"), L("Jadwal dokter", "Doctor schedules", "医生排班"), L("Booking 3 langkah", "3-step booking", "三步预约"), L("Nomor booking", "Booking number", "预约号")],
    serviceId: "booking",
    priceFrom: 8_000_000,
    days: "7–10",
    accent: "#0e5c63",
  },
  {
    slug: "sekolah",
    name: L("Sekolah & Pendaftaran Siswa", "School & Admissions", "学校与招生"),
    category: "website",
    forWho: L("Sekolah, kursus, bimbel, pesantren", "Schools, courses, tutoring centres", "学校、培训班、补习机构"),
    summary: L(
      "Website sekolah dengan program/jurusan, agenda, dan formulir pendaftaran siswa baru bertahap yang mudah diisi orang tua.",
      "School website with programmes, events and a step-by-step admissions form parents find easy.",
      "学校官网：专业介绍、活动日程与家长易填的分步招生表。",
    ),
    includes: [L("Program / jurusan", "Programmes", "专业介绍"), L("Agenda & berita", "Events & news", "活动与新闻"), L("Pendaftaran bertahap", "Step-by-step admissions", "分步报名"), L("Biaya & jadwal PPDB", "Fees & admission dates", "费用与招生日程")],
    serviceId: "school",
    priceFrom: 15_000_000,
    days: "10–14",
    accent: "#1d3f8f",
  },
  {
    slug: "kasir",
    name: L("Aplikasi Kasir (POS)", "Point of Sale (POS)", "收银系统 (POS)"),
    category: "app",
    forWho: L("Toko, minimarket, kafe, outlet", "Shops, minimarts, cafés, outlets", "商店、便利店、咖啡馆、门店"),
    summary: L(
      "Layar kasir cepat: cari produk, keranjang, diskon, bayar tunai atau QRIS dengan hitung kembalian, lalu struk.",
      "A fast checkout screen: search, cart, discounts, cash or QRIS with change calculation, then a receipt.",
      "快速收银界面：搜索、购物车、折扣、现金或 QRIS 付款并自动找零，再打印小票。",
    ),
    includes: [L("Layar kasir", "Checkout screen", "收银界面"), L("Diskon & pajak", "Discounts & tax", "折扣与税费"), L("Tunai / QRIS + kembalian", "Cash / QRIS + change", "现金 / QRIS 找零"), L("Struk", "Receipt", "小票")],
    serviceId: "pos",
    priceFrom: 12_000_000,
    days: "10",
    accent: "#3b2a6b",
  },
  {
    slug: "dashboard",
    name: L("Dashboard Bisnis (ERP)", "Business Dashboard (ERP)", "业务仪表盘 (ERP)"),
    category: "app",
    forWho: L("Distributor, manufaktur, multi cabang", "Distributors, manufacturers, multi-branch", "分销商、制造商、多门店"),
    summary: L(
      "Satu layar untuk penjualan, stok, dan piutang: grafik per bulan, stok menipis, dan faktur jatuh tempo per cabang.",
      "One screen for sales, stock and receivables: monthly charts, low stock and overdue invoices per branch.",
      "一屏掌握销售、库存与应收：月度图表、低库存与逾期发票（按门店）。",
    ),
    includes: [L("Ringkasan KPI", "KPI overview", "KPI 总览"), L("Grafik penjualan", "Sales chart", "销售图表"), L("Stok menipis", "Low stock", "低库存"), L("Piutang jatuh tempo", "Overdue receivables", "逾期应收")],
    serviceId: "dashboard",
    priceFrom: 7_000_000,
    days: "10–14",
    accent: "#13263f",
  },
  {
    slug: "landing",
    name: L("Landing Page Promosi", "Promo Landing Page", "推广落地页"),
    category: "website",
    forWho: L("Peluncuran produk, event, kelas online", "Product launches, events, online classes", "新品发布、活动、在线课程"),
    summary: L(
      "Satu halaman yang fokus menjual: manfaat, testimoni, paket harga bulanan/tahunan, FAQ, dan tombol aksi yang jelas.",
      "One page built to sell: benefits, testimonials, monthly/yearly plans, FAQ and a clear call to action.",
      "专注转化的单页：卖点、评价、月付/年付套餐、常见问题与清晰的行动按钮。",
    ),
    includes: [L("Hero & manfaat", "Hero & benefits", "首屏与卖点"), L("Paket harga", "Pricing plans", "价格套餐"), L("Testimoni", "Testimonials", "客户评价"), L("FAQ", "FAQ", "常见问题")],
    serviceId: "landing-page",
    priceFrom: 3_500_000,
    days: "3",
    accent: "#4a1d5c",
  },
];

export const templateBySlug = (slug: string) => TEMPLATES.find((t) => t.slug === slug);
