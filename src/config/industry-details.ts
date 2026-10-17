/**
 * Copy for the per-industry pages (/industries/{slug}). Kept apart from
 * config/industries, which only holds what the grid needs.
 *
 * Client names must match config/clients exactly and are listed only where
 * the business is plainly in that industry. No results or quotes are claimed
 * here: those belong in case studies backed by real project data.
 */
type T = { id: string; en: string; zh: string };

export type ServiceId =
  | "custom-software"
  | "website"
  | "mobile"
  | "erp"
  | "pos"
  | "hris"
  | "crm"
  | "dashboard"
  | "ai-automation"
  | "api-integration";

export type IndustryDetail = {
  metaTitle: T;
  metaDescription: T;
  h1: T;
  intro: T;
  challenges: { title: T; text: T }[];
  solutions: { title: T; text: T; service: ServiceId }[];
  clients: string[];
  relatedPosts: string[];
};

/** Labels shared by every industry page. */
export const industryStrings = {
  id: {
    ctaPrimary: "Konsultasi gratis",
    ctaSecondary: "Lihat semua industri",
    challengesEyebrow: "Tantangan",
    challengesTitle: "Masalah yang paling sering kami temui",
    solutionsEyebrow: "Solusi",
    solutionsTitle: "Sistem yang bisa kami bangun",
    serviceLink: "Lihat layanan",
    clientsTitle: "Klien kami di industri ini",
    articlesEyebrow: "Bacaan terkait",
    articlesTitle: "Artikel untuk industri ini",
    otherIndustries: "Industri lainnya",
    gridCta: "Lihat solusi",
  },
  en: {
    ctaPrimary: "Free consultation",
    ctaSecondary: "See all industries",
    challengesEyebrow: "Challenges",
    challengesTitle: "Problems we run into most often",
    solutionsEyebrow: "Solutions",
    solutionsTitle: "Systems we can build",
    serviceLink: "See the service",
    clientsTitle: "Our clients in this industry",
    articlesEyebrow: "Related reading",
    articlesTitle: "Articles for this industry",
    otherIndustries: "Other industries",
    gridCta: "See solutions",
  },
  zh: {
    ctaPrimary: "免费咨询",
    ctaSecondary: "查看所有行业",
    challengesEyebrow: "挑战",
    challengesTitle: "我们最常遇到的问题",
    solutionsEyebrow: "解决方案",
    solutionsTitle: "我们可以构建的系统",
    serviceLink: "查看服务",
    clientsTitle: "我们在该行业的客户",
    articlesEyebrow: "相关阅读",
    articlesTitle: "该行业的相关文章",
    otherIndustries: "其他行业",
    gridCta: "查看方案",
  },
} as const;

export const industryDetails: Record<string, IndustryDetail> = {
  ritel: {
    metaTitle: {
      id: "Sistem POS & Inventori untuk Bisnis Ritel | AG·SORA",
      en: "POS & Inventory Systems for Retail Businesses | AG·SORA",
      zh: "零售业收银与库存系统 | AG·SORA",
    },
    metaDescription: {
      id: "Sistem kasir, stok, dan laporan multioutlet untuk toko ritel di Indonesia. Stok toko fisik dan marketplace tersinkron, laporan cabang terbaca setiap hari.",
      en: "Cashier, stock, and multioutlet reporting for retail stores in Indonesia. Physical store and marketplace stock kept in sync, branch reports readable every day.",
      zh: "面向印尼零售门店的收银、库存与多门店报表系统。实体店与电商平台库存同步，每日可查看各分店报表。",
    },
    h1: {
      id: "Sistem untuk bisnis ritel yang punya lebih dari satu outlet",
      en: "Systems for retail businesses with more than one outlet",
      zh: "为拥有多家门店的零售企业打造的系统",
    },
    intro: {
      id: "Toko ritel biasanya kesulitan saat outlet bertambah: stok tiap cabang dicatat berbeda, harga promo tidak seragam, dan laporan baru terkumpul di akhir bulan. Kami membangun kasir, inventori, dan laporan yang memakai satu sumber data untuk semua outlet.",
      en: "Retail stores usually struggle once outlets multiply: each branch records stock differently, promo prices drift apart, and reports only come together at month end. We build cashier, inventory, and reporting on one source of data for every outlet.",
      zh: "零售门店在分店增多后往往陷入困境：各分店库存记录方式不同，促销价格不统一，报表要到月底才能汇总。我们为所有门店构建共用同一数据源的收银、库存与报表系统。",
    },
    challenges: [
      {
        title: { id: "Stok tidak cocok antar cabang", en: "Stock that never matches across branches", zh: "各分店库存对不上" },
        text: {
          id: "Barang tercatat ada di sistem tapi kosong di rak, atau sebaliknya. Transfer antar outlet sering hanya lewat chat.",
          en: "Items show as available in the system but the shelf is empty, or the reverse. Transfers between outlets often happen only over chat.",
          zh: "系统显示有货但货架是空的，或者相反。门店之间的调货往往只靠聊天记录。",
        },
      },
      {
        title: { id: "Stok toko fisik dan online terpisah", en: "Store and online stock kept apart", zh: "实体店与线上库存分离" },
        text: {
          id: "Pesanan marketplace masuk untuk barang yang sudah terjual di toko, lalu harus dibatalkan.",
          en: "Marketplace orders arrive for items already sold in store and have to be cancelled.",
          zh: "电商平台收到的订单对应的商品已在门店售出，只能取消订单。",
        },
      },
      {
        title: { id: "Laporan cabang terlambat", en: "Branch reports that arrive late", zh: "分店报表滞后" },
        text: {
          id: "Pemilik baru tahu outlet mana yang rugi setelah rekap manual selesai, saat keputusan sudah terlambat.",
          en: "Owners only learn which outlet is losing money after a manual recap, when it is too late to act.",
          zh: "老板要等人工汇总完成后才知道哪家门店亏损，此时已错过决策时机。",
        },
      },
    ],
    solutions: [
      {
        title: { id: "Kasir multioutlet", en: "Multioutlet cashier", zh: "多门店收银" },
        text: {
          id: "Satu daftar produk dan harga untuk semua outlet, promo terpusat, dan kasir yang tetap jalan saat internet putus.",
          en: "One product and price list for every outlet, central promos, and a cashier that keeps working when the internet drops.",
          zh: "所有门店共用一份商品与价格清单，促销集中管理，断网时收银照常运行。",
        },
        service: "pos",
      },
      {
        title: { id: "Inventori dan transfer stok", en: "Inventory and stock transfers", zh: "库存与调拨" },
        text: {
          id: "Penerimaan barang, transfer antar cabang, dan stock opname tercatat dengan jejak siapa dan kapan.",
          en: "Goods receipts, branch transfers, and stock counts recorded with who did what and when.",
          zh: "收货、分店调拨与盘点均留有操作人和时间记录。",
        },
        service: "erp",
      },
      {
        title: { id: "Sinkron dengan marketplace", en: "Marketplace sync", zh: "电商平台同步" },
        text: {
          id: "Stok dan pesanan dari marketplace terhubung ke sistem yang sama lewat integrasi API.",
          en: "Marketplace stock and orders connect to the same system through API integration.",
          zh: "通过 API 对接，电商平台的库存与订单接入同一系统。",
        },
        service: "api-integration",
      },
      {
        title: { id: "Dashboard penjualan harian", en: "Daily sales dashboard", zh: "每日销售看板" },
        text: {
          id: "Omzet, margin, dan barang terlaris per outlet terlihat setiap pagi tanpa menunggu rekap.",
          en: "Revenue, margin, and best sellers per outlet visible every morning without waiting for a recap.",
          zh: "每天早上即可查看各门店的营业额、毛利与畅销商品，无需等待汇总。",
        },
        service: "dashboard",
      },
    ],
    clients: [],
    relatedPosts: [
      "memilih-sistem-pos-multi-outlet",
      "menyatukan-stok-toko-fisik-dan-marketplace",
      "mengelola-promo-dan-diskon",
      "program-loyalitas-pelanggan-yang-terukur",
    ],
  },

  kuliner: {
    metaTitle: {
      id: "Sistem Kasir & Stok Bahan untuk Bisnis Kuliner (F&B) | AG·SORA",
      en: "Cashier & Ingredient Stock Systems for F&B Businesses | AG·SORA",
      zh: "餐饮业收银与原料库存系统 | AG·SORA",
    },
    metaDescription: {
      id: "Kasir, pesanan dapur, menu digital QR, dan stok bahan baku untuk kafe, kedai kopi, dan restoran. Dibangun mengikuti alur kerja outlet Anda.",
      en: "Cashier, kitchen orders, QR digital menus, and ingredient stock for cafes, coffee shops, and restaurants. Built around how your outlet works.",
      zh: "为咖啡馆、咖啡店与餐厅打造收银、厨房订单、二维码电子菜单与原料库存系统，贴合门店的实际流程。",
    },
    h1: {
      id: "Sistem kasir dan dapur untuk kafe, kedai kopi, dan restoran",
      en: "Cashier and kitchen systems for cafes, coffee shops, and restaurants",
      zh: "为咖啡馆、咖啡店与餐厅打造的收银与厨房系统",
    },
    intro: {
      id: "Di bisnis kuliner, selisih kecil cepat menjadi kerugian besar: bahan terbuang, pesanan salah masuk dapur, atau kas kasir tidak cocok saat tutup. Kami membangun sistem yang menghubungkan kasir, dapur, dan stok bahan baku.",
      en: "In F&B, small gaps turn into big losses quickly: wasted ingredients, wrong orders reaching the kitchen, or a till that does not match at closing. We build systems that connect the cashier, the kitchen, and ingredient stock.",
      zh: "在餐饮业，小小的偏差很快会变成大损失：原料浪费、错单传到厨房、打烊时收银对不上账。我们构建打通收银、厨房与原料库存的系统。",
    },
    challenges: [
      {
        title: { id: "HPP menu tidak diketahui pasti", en: "Menu cost is a guess", zh: "菜品成本不清楚" },
        text: {
          id: "Harga bahan naik, tapi harga jual tetap karena tidak ada resep yang tercatat per menu.",
          en: "Ingredient prices rise while menu prices stay the same, because no recipe is recorded per item.",
          zh: "原料涨价而售价不变，因为每道菜没有记录配方。",
        },
      },
      {
        title: { id: "Pesanan sampai ke dapur dengan salah", en: "Orders reach the kitchen wrong", zh: "订单传到厨房出错" },
        text: {
          id: "Catatan kertas hilang atau tidak terbaca saat ramai, dan pelanggan menunggu terlalu lama.",
          en: "Paper slips get lost or unreadable at peak hours, and customers wait too long.",
          zh: "高峰期纸质单据丢失或看不清，顾客等待过久。",
        },
      },
      {
        title: { id: "Kas tidak cocok saat tutup", en: "Cash that does not match at closing", zh: "打烊时现金对不上" },
        text: {
          id: "Diskon manual, void, dan pembayaran campuran tunai dan QRIS sulit ditelusuri.",
          en: "Manual discounts, voids, and mixed cash and QRIS payments are hard to trace.",
          zh: "手动折扣、作废单以及现金与 QRIS 混合支付难以追溯。",
        },
      },
    ],
    solutions: [
      {
        title: { id: "Kasir dengan QRIS", en: "Cashier with QRIS", zh: "支持 QRIS 的收银" },
        text: {
          id: "Pembayaran tunai, QRIS, dan kartu tercatat terpisah, lengkap dengan hak akses untuk diskon dan void.",
          en: "Cash, QRIS, and card payments recorded separately, with permissions for discounts and voids.",
          zh: "现金、QRIS 与刷卡分开记录，折扣与作废均设权限。",
        },
        service: "pos",
      },
      {
        title: { id: "Layar dapur dan menu digital", en: "Kitchen display and digital menu", zh: "厨房显示屏与电子菜单" },
        text: {
          id: "Pesanan dari kasir atau meja lewat QR langsung muncul di dapur sesuai urutan.",
          en: "Orders from the cashier or from a table via QR appear in the kitchen in order.",
          zh: "收银台或桌边扫码下的单按顺序直接显示在厨房。",
        },
        service: "custom-software",
      },
      {
        title: { id: "Resep dan stok bahan baku", en: "Recipes and ingredient stock", zh: "配方与原料库存" },
        text: {
          id: "Setiap menu terjual mengurangi stok bahan sesuai resep, sehingga HPP dan bahan menipis terlihat.",
          en: "Each item sold deducts ingredients by recipe, so menu cost and low stock become visible.",
          zh: "每售出一道菜即按配方扣减原料，菜品成本与低库存一目了然。",
        },
        service: "erp",
      },
      {
        title: { id: "Laporan per outlet", en: "Reports per outlet", zh: "分店报表" },
        text: {
          id: "Penjualan per jam, menu terlaris, dan selisih kas per shift dalam satu dashboard.",
          en: "Sales per hour, best sellers, and cash differences per shift in one dashboard.",
          zh: "每小时销售、畅销菜品与每班现金差异集中在一个看板中。",
        },
        service: "dashboard",
      },
    ],
    clients: ["Artsy Kopi", "Kopi Manteup", "Super Kentucky Fried Chicken"],
    relatedPosts: [
      "fitur-sistem-kasir-untuk-bisnis-fnb",
      "menu-digital-dan-pemesanan-qr-untuk-restoran",
      "mencegah-kecurangan-kasir",
      "menerapkan-qris-di-kasir",
    ],
  },

  distribusi: {
    metaTitle: {
      id: "Sistem Gudang, Order & Sales Lapangan untuk Distributor | AG·SORA",
      en: "Warehouse, Order & Field Sales Systems for Distributors | AG·SORA",
      zh: "分销商仓储、订单与外勤销售系统 | AG·SORA",
    },
    metaDescription: {
      id: "Sistem gudang, pesanan, piutang, dan aplikasi sales lapangan untuk distributor dan grosir di Indonesia.",
      en: "Warehouse, order, receivables, and field sales apps for distributors and wholesalers in Indonesia.",
      zh: "面向印尼分销商与批发商的仓储、订单、应收账款与外勤销售应用。",
    },
    h1: {
      id: "Sistem untuk distributor dan grosir dengan banyak SKU",
      en: "Systems for distributors and wholesalers with many SKUs",
      zh: "为多品类分销商与批发商打造的系统",
    },
    intro: {
      id: "Distributor bekerja dengan ratusan SKU, banyak pelanggan dengan harga berbeda, dan sales yang mencatat pesanan di luar kantor. Kami membangun sistem yang menyatukan gudang, pesanan, dan penagihan.",
      en: "Distributors work with hundreds of SKUs, many customers on different prices, and sales staff taking orders outside the office. We build systems that bring the warehouse, orders, and billing together.",
      zh: "分销商要管理数百个 SKU、价格各异的众多客户，以及在外接单的销售人员。我们构建将仓库、订单与收款整合在一起的系统。",
    },
    challenges: [
      {
        title: { id: "Pesanan sales dicatat manual", en: "Sales orders written by hand", zh: "销售订单靠手写" },
        text: {
          id: "Pesanan dari lapangan dikirim lewat foto nota atau chat, lalu diketik ulang di kantor.",
          en: "Field orders arrive as photos of slips or chat messages and are retyped at the office.",
          zh: "外勤订单以单据照片或聊天消息发回，再由办公室重新录入。",
        },
      },
      {
        title: { id: "Stok gudang tidak akurat", en: "Inaccurate warehouse stock", zh: "仓库库存不准" },
        text: {
          id: "Barang sudah dijanjikan ke pelanggan padahal stok fisiknya tidak ada.",
          en: "Goods are promised to customers when the physical stock is not there.",
          zh: "已经承诺给客户的货，实际库存却没有。",
        },
      },
      {
        title: { id: "Piutang sulit dipantau", en: "Receivables hard to follow", zh: "应收账款难以跟踪" },
        text: {
          id: "Tagihan jatuh tempo baru ketahuan saat pelanggan sudah menunggak lama.",
          en: "Overdue invoices are only noticed once a customer is long in arrears.",
          zh: "要等客户长期拖欠后才发现账款已经逾期。",
        },
      },
    ],
    solutions: [
      {
        title: { id: "Aplikasi sales lapangan", en: "Field sales app", zh: "外勤销售应用" },
        text: {
          id: "Sales membuat pesanan dari ponsel dengan harga dan stok terkini, lengkap dengan lokasi kunjungan.",
          en: "Sales staff place orders from their phones with current prices and stock, plus visit locations.",
          zh: "销售人员用手机下单，价格与库存实时更新，并记录拜访位置。",
        },
        service: "mobile",
      },
      {
        title: { id: "Gudang dan pengiriman", en: "Warehouse and shipping", zh: "仓储与配送" },
        text: {
          id: "Picking, packing, dan surat jalan tercatat sampai barang diterima pelanggan.",
          en: "Picking, packing, and delivery notes recorded until goods reach the customer.",
          zh: "拣货、打包与送货单全程记录，直到客户签收。",
        },
        service: "erp",
      },
      {
        title: { id: "Harga dan limit kredit per pelanggan", en: "Prices and credit limits per customer", zh: "按客户设置价格与信用额度" },
        text: {
          id: "Daftar harga khusus dan batas kredit otomatis menahan pesanan yang berisiko.",
          en: "Special price lists and credit limits automatically hold risky orders.",
          zh: "专属价目表与信用额度自动拦截高风险订单。",
        },
        service: "crm",
      },
      {
        title: { id: "Laporan piutang dan penjualan", en: "Receivables and sales reports", zh: "应收与销售报表" },
        text: {
          id: "Umur piutang, penjualan per sales, dan per wilayah terlihat tanpa rekap manual.",
          en: "Receivables ageing and sales per rep and per region visible without manual recaps.",
          zh: "应收账龄、按销售与按区域的业绩无需人工汇总即可查看。",
        },
        service: "dashboard",
      },
    ],
    clients: [],
    relatedPosts: [
      "kebutuhan-sistem-bisnis-distribusi",
      "sistem-manajemen-gudang-untuk-bisnis-yang-bertumbuh",
      "perencanaan-stok-dan-pembelian-ulang",
      "otomatisasi-faktur-dan-penagihan-piutang-b2b",
    ],
  },

  transportasi: {
    metaTitle: {
      id: "Sistem Manajemen Armada & Order untuk Transportasi | AG·SORA",
      en: "Fleet & Order Management Systems for Transport Companies | AG·SORA",
      zh: "运输企业车队与订单管理系统 | AG·SORA",
    },
    metaDescription: {
      id: "Sistem order, jadwal armada, aplikasi sopir, dan biaya per perjalanan untuk perusahaan transportasi dan logistik di Indonesia.",
      en: "Orders, fleet schedules, a driver app, and cost per trip for transport and logistics companies in Indonesia.",
      zh: "为印尼运输与物流企业提供订单、车队排班、司机应用与单趟成本管理系统。",
    },
    h1: {
      id: "Sistem untuk perusahaan transportasi dan logistik",
      en: "Systems for transport and logistics companies",
      zh: "为运输与物流企业打造的系统",
    },
    intro: {
      id: "Perusahaan transportasi mengatur banyak hal sekaligus: order pelanggan, jadwal kendaraan, sopir, dan biaya jalan. Saat semuanya dicatat terpisah, sulit tahu perjalanan mana yang benar-benar untung. Kami membangun sistem yang mencatat semuanya per perjalanan.",
      en: "Transport companies juggle many things at once: customer orders, vehicle schedules, drivers, and road costs. When each is recorded separately, it is hard to tell which trips actually make money. We build systems that record everything per trip.",
      zh: "运输企业要同时处理客户订单、车辆排班、司机与路途费用。各项分开记录时，很难看清哪一趟真正赚钱。我们构建按趟次记录一切的系统。",
    },
    challenges: [
      {
        title: { id: "Jadwal armada bentrok", en: "Clashing fleet schedules", zh: "车队排班冲突" },
        text: {
          id: "Kendaraan dijadwalkan dua kali atau masuk jadwal saat sedang servis.",
          en: "Vehicles get booked twice or scheduled while they are in for service.",
          zh: "车辆被重复安排，或在维修期间仍被排班。",
        },
      },
      {
        title: { id: "Biaya jalan tidak tercatat rapi", en: "Road costs poorly recorded", zh: "路途费用记录混乱" },
        text: {
          id: "BBM, tol, dan uang jalan sopir dilaporkan belakangan dengan bukti yang tercecer.",
          en: "Fuel, tolls, and driver allowances are reported late with scattered receipts.",
          zh: "油费、过路费与司机出车补贴事后才报，票据零散。",
        },
      },
      {
        title: { id: "Pelanggan terus menanyakan status", en: "Customers keep asking for status", zh: "客户不断询问进度" },
        text: {
          id: "Admin sibuk menjawab pertanyaan posisi barang karena tidak ada status yang bisa dicek sendiri.",
          en: "Admins spend their day answering where a shipment is, because there is no status customers can check.",
          zh: "由于客户无法自行查看状态，客服整天忙于回答货物在哪里。",
        },
      },
    ],
    solutions: [
      {
        title: { id: "Order dan jadwal armada", en: "Orders and fleet scheduling", zh: "订单与车队排班" },
        text: {
          id: "Order masuk dicocokkan dengan kendaraan dan sopir yang tersedia, termasuk jadwal servis.",
          en: "Incoming orders are matched to available vehicles and drivers, including service schedules.",
          zh: "新订单自动匹配可用车辆与司机，并考虑维修计划。",
        },
        service: "custom-software",
      },
      {
        title: { id: "Aplikasi sopir", en: "Driver app", zh: "司机应用" },
        text: {
          id: "Sopir memperbarui status perjalanan dan mengunggah foto bukti biaya serta serah terima barang.",
          en: "Drivers update trip status and upload photos of cost receipts and proof of delivery.",
          zh: "司机更新行程状态，上传费用票据与签收凭证照片。",
        },
        service: "mobile",
      },
      {
        title: { id: "Biaya dan laba per perjalanan", en: "Cost and profit per trip", zh: "单趟成本与利润" },
        text: {
          id: "Pendapatan dan seluruh biaya jalan dihitung per perjalanan dan per kendaraan.",
          en: "Revenue and all road costs calculated per trip and per vehicle.",
          zh: "按趟次与车辆计算收入及全部路途费用。",
        },
        service: "erp",
      },
      {
        title: { id: "Lacak status untuk pelanggan", en: "Status tracking for customers", zh: "客户自助查询状态" },
        text: {
          id: "Pelanggan mengecek status kiriman lewat tautan atau WhatsApp tanpa menghubungi admin.",
          en: "Customers check shipment status via a link or WhatsApp without contacting an admin.",
          zh: "客户可通过链接或 WhatsApp 自助查询货运状态，无需联系客服。",
        },
        service: "api-integration",
      },
    ],
    clients: ["Alinds Transport"],
    relatedPosts: [
      "pengiriman-dan-logistik-toko-online",
      "aplikasi-mobile-untuk-tim-lapangan",
      "kebutuhan-sistem-bisnis-distribusi",
    ],
  },

  sekolah: {
    metaTitle: {
      id: "Sistem Informasi Sekolah: Akademik, Keuangan & Administrasi | AG·SORA",
      en: "School Information Systems: Academics, Finance & Admin | AG·SORA",
      zh: "学校信息系统：教务、财务与行政 | AG·SORA",
    },
    metaDescription: {
      id: "Sistem informasi sekolah untuk data siswa, nilai, absensi, tagihan SPP, dan portal orang tua. Dibangun untuk sekolah dan yayasan pendidikan di Indonesia.",
      en: "School information systems for student data, grades, attendance, tuition billing, and a parent portal. Built for schools and education foundations in Indonesia.",
      zh: "面向印尼学校与教育基金会的学校信息系统，涵盖学生资料、成绩、考勤、学费账单与家长门户。",
    },
    h1: {
      id: "Sistem informasi untuk sekolah dan yayasan pendidikan",
      en: "Information systems for schools and education foundations",
      zh: "为学校与教育基金会打造的信息系统",
    },
    intro: {
      id: "Sekolah mengelola banyak data yang saling terkait: siswa, kelas, nilai, kehadiran, dan pembayaran. Kami membangun sistem yang membuat guru, staf tata usaha, dan orang tua melihat data yang sama.",
      en: "Schools manage a lot of connected data: students, classes, grades, attendance, and payments. We build systems that let teachers, administration staff, and parents see the same data.",
      zh: "学校要管理大量相互关联的数据：学生、班级、成绩、考勤与缴费。我们构建让教师、教务人员与家长看到同一份数据的系统。",
    },
    challenges: [
      {
        title: { id: "Data siswa tersebar di banyak file", en: "Student data spread over many files", zh: "学生资料分散在多个文件中" },
        text: {
          id: "Setiap bagian menyimpan salinan sendiri, sehingga perubahan data jarang ikut diperbarui di tempat lain.",
          en: "Each department keeps its own copy, so changes rarely reach the other copies.",
          zh: "各部门各存一份，数据变更很少同步到其他地方。",
        },
      },
      {
        title: { id: "Tagihan SPP sulit dipantau", en: "Tuition payments hard to track", zh: "学费缴纳难以跟踪" },
        text: {
          id: "Bendahara mencocokkan transfer satu per satu, dan tunggakan baru terlihat di akhir semester.",
          en: "The treasurer matches transfers one by one, and arrears only show up at the end of the term.",
          zh: "财务逐笔核对转账，欠费要到学期末才发现。",
        },
      },
      {
        title: { id: "Orang tua kurang mendapat informasi", en: "Parents left uninformed", zh: "家长获取信息不足" },
        text: {
          id: "Nilai, kehadiran, dan pengumuman sampai ke orang tua lewat banyak grup chat yang berbeda.",
          en: "Grades, attendance, and announcements reach parents through many different chat groups.",
          zh: "成绩、考勤与通知通过许多不同的聊天群传达给家长。",
        },
      },
    ],
    solutions: [
      {
        title: { id: "Akademik dan absensi", en: "Academics and attendance", zh: "教务与考勤" },
        text: {
          id: "Data siswa, kelas, jadwal, nilai, dan rapor dikelola di satu sistem untuk semua jenjang.",
          en: "Student data, classes, timetables, grades, and report cards in one system for every level.",
          zh: "学生资料、班级、课表、成绩与成绩单在同一系统中管理，覆盖所有年级。",
        },
        service: "custom-software",
      },
      {
        title: { id: "Keuangan dan tagihan SPP", en: "Finance and tuition billing", zh: "财务与学费账单" },
        text: {
          id: "Tagihan dibuat otomatis per siswa, pembayaran tercatat, dan tunggakan terlihat setiap saat.",
          en: "Bills are generated per student, payments recorded, and arrears visible at any time.",
          zh: "按学生自动生成账单，记录缴费，欠费情况随时可查。",
        },
        service: "erp",
      },
      {
        title: { id: "Portal dan aplikasi orang tua", en: "Parent portal and app", zh: "家长门户与应用" },
        text: {
          id: "Orang tua melihat nilai, kehadiran, tagihan, dan pengumuman dari satu tempat.",
          en: "Parents see grades, attendance, bills, and announcements in one place.",
          zh: "家长可在一个地方查看成绩、考勤、账单与通知。",
        },
        service: "mobile",
      },
      {
        title: { id: "Website sekolah", en: "School website", zh: "学校网站" },
        text: {
          id: "Profil sekolah, informasi pendaftaran, dan berita yang mudah diperbarui oleh staf.",
          en: "School profile, admissions information, and news that staff can update easily.",
          zh: "学校简介、招生信息与新闻，教职员可轻松更新。",
        },
        service: "website",
      },
    ],
    clients: [
      "SMA Islam Plus Arrozaq",
      "Yayasan Arrozaq Rantauprapat",
      "SMK Kesehatan Imelda",
      "SMK Kesehatan Imelda Ritonga Labuhanbatu",
    ],
    relatedPosts: ["sistem-informasi-sekolah", "aplikasi-mobile-untuk-tim-lapangan"],
  },

  klinik: {
    metaTitle: {
      id: "Sistem Manajemen Klinik: Antrian, Rekam Medis & Kasir | AG·SORA",
      en: "Clinic Management Systems: Queues, Records & Billing | AG·SORA",
      zh: "诊所管理系统：排队、病历与收费 | AG·SORA",
    },
    metaDescription: {
      id: "Sistem klinik untuk pendaftaran pasien, antrian, rekam medis elektronik, resep, dan kasir. Dibangun dengan hak akses yang menjaga data pasien.",
      en: "Clinic systems for patient registration, queues, electronic medical records, prescriptions, and billing, built with access controls that protect patient data.",
      zh: "诊所系统涵盖患者登记、排队、电子病历、处方与收费，并以权限控制保护患者数据。",
    },
    h1: {
      id: "Sistem manajemen untuk klinik dan praktik kesehatan",
      en: "Management systems for clinics and health practices",
      zh: "为诊所与医疗机构打造的管理系统",
    },
    intro: {
      id: "Klinik bekerja dengan data yang sensitif dan pasien yang tidak ingin menunggu lama. Kami membangun sistem yang merapikan alur dari pendaftaran sampai pembayaran, dengan akses data yang dibatasi sesuai peran.",
      en: "Clinics handle sensitive data and patients who do not want to wait long. We build systems that tidy up the flow from registration to payment, with data access limited by role.",
      zh: "诊所处理敏感数据，患者也不愿久等。我们构建从挂号到付款全流程顺畅的系统，并按角色限制数据访问。",
    },
    challenges: [
      {
        title: { id: "Antrian panjang dan tidak jelas", en: "Long, unclear queues", zh: "排队长且不透明" },
        text: {
          id: "Pasien tidak tahu kapan gilirannya, dan resepsionis kewalahan saat jam ramai.",
          en: "Patients do not know when their turn comes, and reception is overwhelmed at busy hours.",
          zh: "患者不知道何时轮到自己，前台在高峰时段应接不暇。",
        },
      },
      {
        title: { id: "Rekam medis di kertas", en: "Paper medical records", zh: "纸质病历" },
        text: {
          id: "Riwayat pasien sulit dicari, dan berkas bisa hilang atau rusak.",
          en: "Patient history is hard to find, and files can be lost or damaged.",
          zh: "病史难以查找，档案可能丢失或损坏。",
        },
      },
      {
        title: { id: "Stok obat tidak sinkron", en: "Medicine stock out of sync", zh: "药品库存不同步" },
        text: {
          id: "Resep keluar tanpa memotong stok, sehingga obat habis tanpa disadari.",
          en: "Prescriptions go out without deducting stock, so medicine runs out unnoticed.",
          zh: "开出处方却未扣减库存，药品用完了也没人发现。",
        },
      },
    ],
    solutions: [
      {
        title: { id: "Pendaftaran dan antrian online", en: "Registration and online queue", zh: "挂号与线上排队" },
        text: {
          id: "Pasien mendaftar dan memantau nomor antrian dari ponsel sebelum datang.",
          en: "Patients register and follow their queue number from their phone before arriving.",
          zh: "患者到院前即可用手机挂号并查看排队号码。",
        },
        service: "mobile",
      },
      {
        title: { id: "Rekam medis elektronik", en: "Electronic medical records", zh: "电子病历" },
        text: {
          id: "Riwayat pemeriksaan, diagnosis, dan tindakan tersimpan rapi dengan hak akses per peran.",
          en: "Examinations, diagnoses, and procedures stored with role based access.",
          zh: "检查、诊断与处置记录完整保存，并按角色设定访问权限。",
        },
        service: "custom-software",
      },
      {
        title: { id: "Resep, apotek, dan kasir", en: "Prescriptions, pharmacy, and billing", zh: "处方、药房与收费" },
        text: {
          id: "Resep langsung memotong stok obat dan masuk ke tagihan pasien.",
          en: "Prescriptions deduct medicine stock and flow straight into the patient bill.",
          zh: "处方直接扣减药品库存并计入患者账单。",
        },
        service: "erp",
      },
      {
        title: { id: "Pengingat jadwal kontrol", en: "Follow up reminders", zh: "复诊提醒" },
        text: {
          id: "Pengingat kontrol dan hasil pemeriksaan dikirim otomatis lewat WhatsApp.",
          en: "Follow up reminders and test results sent automatically over WhatsApp.",
          zh: "复诊提醒与检查结果通过 WhatsApp 自动发送。",
        },
        service: "ai-automation",
      },
    ],
    clients: [],
    relatedPosts: ["sistem-manajemen-klinik", "sistem-booking-dan-reservasi-online-untuk-bisnis-jasa"],
  },

  koperasi: {
    metaTitle: {
      id: "Sistem Informasi Koperasi: Anggota, Simpan Pinjam & Laporan | AG·SORA",
      en: "Cooperative Management Systems: Members, Savings & Loans | AG·SORA",
      zh: "合作社管理系统：社员、储蓄与贷款 | AG·SORA",
    },
    metaDescription: {
      id: "Sistem koperasi untuk data anggota, simpanan, pinjaman, angsuran, dan laporan yang bisa dipertanggungjawabkan di rapat anggota.",
      en: "Cooperative systems for member data, savings, loans, instalments, and reports that hold up at the members' meeting.",
      zh: "合作社系统涵盖社员资料、储蓄、贷款、分期还款，以及经得起社员大会审视的报表。",
    },
    h1: {
      id: "Sistem untuk koperasi simpan pinjam dan koperasi usaha",
      en: "Systems for savings and loan cooperatives and business cooperatives",
      zh: "为储蓄信贷合作社与经营型合作社打造的系统",
    },
    intro: {
      id: "Koperasi dikelola bersama, sehingga setiap angka harus bisa ditelusuri dan dipertanggungjawabkan ke anggota. Kami membangun sistem yang mencatat simpanan, pinjaman, dan angsuran dengan jejak yang jelas.",
      en: "A cooperative is run together, so every figure must be traceable and accountable to members. We build systems that record savings, loans, and instalments with a clear trail.",
      zh: "合作社由社员共同经营，每个数字都必须可追溯、可向社员交代。我们构建清晰记录储蓄、贷款与还款的系统。",
    },
    challenges: [
      {
        title: { id: "Buku simpanan manual", en: "Manual savings books", zh: "手工储蓄账本" },
        text: {
          id: "Saldo anggota dihitung ulang dengan tangan dan rawan selisih saat diperiksa.",
          en: "Member balances are recalculated by hand and prone to differences when audited.",
          zh: "社员余额靠手工重算，审核时容易出现差异。",
        },
      },
      {
        title: { id: "Angsuran terlambat tidak terpantau", en: "Late instalments go unnoticed", zh: "逾期还款无人跟进" },
        text: {
          id: "Pengurus baru tahu ada tunggakan setelah jumlahnya membesar.",
          en: "Managers only learn of arrears after they have grown large.",
          zh: "管理人员要等欠款累积很大后才察觉。",
        },
      },
      {
        title: { id: "Laporan RAT memakan waktu", en: "Annual meeting reports take weeks", zh: "年度大会报表耗时" },
        text: {
          id: "Menyusun laporan keuangan dan pembagian SHU butuh berminggu-minggu rekap.",
          en: "Preparing financial statements and surplus distribution takes weeks of recapping.",
          zh: "编制财务报表与盈余分配需要数周的汇总工作。",
        },
      },
    ],
    solutions: [
      {
        title: { id: "Data anggota dan simpanan", en: "Members and savings", zh: "社员与储蓄" },
        text: {
          id: "Simpanan pokok, wajib, dan sukarela tercatat per anggota dengan riwayat lengkap.",
          en: "Principal, mandatory, and voluntary savings recorded per member with full history.",
          zh: "按社员记录基本、强制与自愿储蓄，历史完整可查。",
        },
        service: "custom-software",
      },
      {
        title: { id: "Pinjaman dan angsuran", en: "Loans and instalments", zh: "贷款与分期还款" },
        text: {
          id: "Jadwal angsuran, bunga atau jasa, dan denda keterlambatan dihitung otomatis.",
          en: "Instalment schedules, interest or service fees, and late penalties calculated automatically.",
          zh: "自动计算还款计划、利息或服务费以及逾期罚金。",
        },
        service: "erp",
      },
      {
        title: { id: "Laporan keuangan dan SHU", en: "Financial reports and surplus", zh: "财务报表与盈余分配" },
        text: {
          id: "Neraca, laba rugi, dan pembagian SHU tersusun dari transaksi yang sama.",
          en: "Balance sheet, profit and loss, and surplus distribution built from the same transactions.",
          zh: "资产负债表、损益表与盈余分配均来自同一套交易数据。",
        },
        service: "dashboard",
      },
      {
        title: { id: "Aplikasi untuk anggota", en: "Member app", zh: "社员应用" },
        text: {
          id: "Anggota mengecek saldo simpanan dan sisa pinjaman sendiri dari ponsel.",
          en: "Members check their savings balance and remaining loan from their phone.",
          zh: "社员可用手机自行查询储蓄余额与剩余贷款。",
        },
        service: "mobile",
      },
    ],
    clients: ["Koperasi Emas Kimberli"],
    relatedPosts: [
      "jejak-audit-dan-pengendalian-internal-di-sistem-erp",
      "tutup-buku-bulanan-lebih-cepat-dengan-erp",
      "digitalisasi-umkm-mulai-dari-mana",
    ],
  },

  laundry: {
    metaTitle: {
      id: "Aplikasi Kasir & Manajemen Order untuk Usaha Laundry | AG·SORA",
      en: "Cashier & Order Management Apps for Laundry Businesses | AG·SORA",
      zh: "洗衣店收银与订单管理应用 | AG·SORA",
    },
    metaDescription: {
      id: "Aplikasi laundry untuk order kiloan dan satuan, status cucian, nota digital lewat WhatsApp, dan laporan per outlet.",
      en: "Laundry apps for per kilo and per item orders, wash status, digital receipts over WhatsApp, and reports per outlet.",
      zh: "洗衣店应用支持按公斤与按件订单、洗衣进度、通过 WhatsApp 发送电子单据以及分店报表。",
    },
    h1: {
      id: "Sistem kasir dan order untuk usaha laundry",
      en: "Cashier and order systems for laundry businesses",
      zh: "为洗衣店打造的收银与订单系统",
    },
    intro: {
      id: "Usaha laundry menangani banyak order kecil setiap hari, dengan pelanggan yang ingin tahu kapan cuciannya selesai. Kami membangun sistem yang mencatat order dari penerimaan sampai diambil.",
      en: "Laundry businesses handle many small orders every day, with customers who want to know when their washing is ready. We build systems that record each order from drop off to pick up.",
      zh: "洗衣店每天处理大量小订单，顾客都想知道衣物何时洗好。我们构建从收衣到取衣全程记录订单的系统。",
    },
    challenges: [
      {
        title: { id: "Nota kertas hilang", en: "Lost paper receipts", zh: "纸质单据丢失" },
        text: {
          id: "Pelanggan kehilangan nota dan cucian sulit dicocokkan saat diambil.",
          en: "Customers lose their receipts and items are hard to match at pick up.",
          zh: "顾客弄丢单据，取衣时难以核对。",
        },
      },
      {
        title: { id: "Status cucian tidak jelas", en: "Unclear wash status", zh: "洗衣进度不明" },
        text: {
          id: "Pelanggan terus bertanya lewat chat apakah cucian sudah selesai.",
          en: "Customers keep asking over chat whether their washing is done.",
          zh: "顾客不断在聊天中询问衣物是否洗好。",
        },
      },
      {
        title: { id: "Kas dan pemakaian bahan tidak cocok", en: "Cash and supplies that do not add up", zh: "现金与耗材对不上" },
        text: {
          id: "Pembayaran di muka, pelunasan, dan pemakaian deterjen sulit dicocokkan setiap hari.",
          en: "Deposits, final payments, and detergent use are hard to reconcile each day.",
          zh: "预付款、尾款与洗涤剂用量每天都难以核对。",
        },
      },
    ],
    solutions: [
      {
        title: { id: "Kasir kiloan dan satuan", en: "Per kilo and per item cashier", zh: "按公斤与按件收银" },
        text: {
          id: "Tarif kiloan, satuan, dan layanan ekspres dihitung otomatis, termasuk uang muka.",
          en: "Per kilo, per item, and express rates calculated automatically, including deposits.",
          zh: "自动计算按公斤、按件与加急价格，并支持预付款。",
        },
        service: "pos",
      },
      {
        title: { id: "Nota dan status lewat WhatsApp", en: "Receipts and status over WhatsApp", zh: "WhatsApp 单据与进度通知" },
        text: {
          id: "Nota digital dan kabar cucian siap diambil terkirim otomatis ke pelanggan.",
          en: "Digital receipts and ready for pick up messages sent to customers automatically.",
          zh: "电子单据与取衣通知自动发送给顾客。",
        },
        service: "api-integration",
      },
      {
        title: { id: "Alur proses cucian", en: "Wash process tracking", zh: "洗衣流程跟踪" },
        text: {
          id: "Setiap order melewati tahap cuci, kering, setrika, dan siap ambil yang tercatat jelas.",
          en: "Each order moves through wash, dry, iron, and ready stages that are clearly recorded.",
          zh: "每张订单依次经过洗涤、烘干、熨烫与待取阶段，记录清晰。",
        },
        service: "custom-software",
      },
      {
        title: { id: "Laporan per outlet", en: "Reports per outlet", zh: "分店报表" },
        text: {
          id: "Omzet harian, order belum diambil, dan pemakaian bahan per outlet dalam satu dashboard.",
          en: "Daily revenue, uncollected orders, and supply use per outlet in one dashboard.",
          zh: "各分店的日营业额、未取订单与耗材用量集中在一个看板中。",
        },
        service: "dashboard",
      },
    ],
    clients: ["Clara Laundry Kiloan"],
    relatedPosts: [
      "digitalisasi-umkm-mulai-dari-mana",
      "menerapkan-qris-di-kasir",
      "sistem-booking-dan-reservasi-online-untuk-bisnis-jasa",
    ],
  },

  manufaktur: {
    metaTitle: {
      id: "Sistem ERP Produksi untuk Manufaktur Skala Menengah | AG·SORA",
      en: "Production ERP Systems for Mid Sized Manufacturers | AG·SORA",
      zh: "中型制造企业生产 ERP 系统 | AG·SORA",
    },
    metaDescription: {
      id: "ERP produksi untuk perencanaan, bahan baku, work order, kontrol kualitas, dan HPP per produk di pabrik skala menengah.",
      en: "Production ERP for planning, raw materials, work orders, quality control, and cost per product in mid sized plants.",
      zh: "面向中型工厂的生产 ERP，涵盖计划、原材料、工单、质量控制与单品成本。",
    },
    h1: {
      id: "Sistem produksi untuk manufaktur skala menengah",
      en: "Production systems for mid sized manufacturers",
      zh: "为中型制造企业打造的生产系统",
    },
    intro: {
      id: "Pabrik skala menengah sering sudah terlalu besar untuk spreadsheet, tapi belum cocok dengan ERP besar yang kaku. Kami membangun sistem produksi yang mengikuti alur pabrik Anda.",
      en: "Mid sized plants are often too big for spreadsheets yet a poor fit for large, rigid ERP suites. We build production systems that follow how your plant works.",
      zh: "中型工厂往往已不适合用电子表格，却又不适合庞大僵化的 ERP。我们构建贴合工厂实际流程的生产系统。",
    },
    challenges: [
      {
        title: { id: "Bahan baku habis di tengah produksi", en: "Materials run out mid production", zh: "生产中途缺料" },
        text: {
          id: "Pembelian tidak terhubung dengan rencana produksi, sehingga mesin berhenti menunggu bahan.",
          en: "Purchasing is not tied to the production plan, so machines stop waiting for materials.",
          zh: "采购与生产计划脱节，机器停下来等料。",
        },
      },
      {
        title: { id: "HPP per produk tidak pasti", en: "Uncertain cost per product", zh: "单品成本不明确" },
        text: {
          id: "Biaya bahan, tenaga kerja, dan overhead tidak dibebankan ke produk dengan benar.",
          en: "Material, labour, and overhead costs are not allocated to products correctly.",
          zh: "材料、人工与间接费用未正确分摊到产品。",
        },
      },
      {
        title: { id: "Progres produksi tidak terlihat", en: "Production progress hidden", zh: "生产进度不可见" },
        text: {
          id: "Manajemen baru tahu pesanan terlambat saat pelanggan menagih.",
          en: "Management only learns an order is late when the customer chases it.",
          zh: "管理层要等客户催单才知道订单延误。",
        },
      },
    ],
    solutions: [
      {
        title: { id: "Perencanaan dan work order", en: "Planning and work orders", zh: "生产计划与工单" },
        text: {
          id: "Pesanan pelanggan menjadi rencana produksi dan work order dengan kebutuhan bahan yang jelas.",
          en: "Customer orders become production plans and work orders with clear material needs.",
          zh: "客户订单转化为生产计划与工单，物料需求一目了然。",
        },
        service: "erp",
      },
      {
        title: { id: "Bahan baku dan pembelian", en: "Materials and purchasing", zh: "原材料与采购" },
        text: {
          id: "Stok minimum dan kebutuhan produksi memicu permintaan pembelian sebelum bahan habis.",
          en: "Minimum stock and production needs trigger purchase requests before materials run out.",
          zh: "最低库存与生产需求在缺料前自动触发采购申请。",
        },
        service: "erp",
      },
      {
        title: { id: "Kontrol kualitas dan HPP", en: "Quality control and costing", zh: "质量控制与成本核算" },
        text: {
          id: "Hasil inspeksi, produk cacat, dan biaya aktual tercatat per batch produksi.",
          en: "Inspection results, defects, and actual costs recorded per production batch.",
          zh: "按生产批次记录检验结果、次品与实际成本。",
        },
        service: "custom-software",
      },
      {
        title: { id: "Dashboard lantai produksi", en: "Shop floor dashboard", zh: "车间看板" },
        text: {
          id: "Progres work order, output harian, dan pesanan berisiko terlambat terlihat langsung.",
          en: "Work order progress, daily output, and orders at risk of delay visible at a glance.",
          zh: "工单进度、每日产量与有延误风险的订单一目了然。",
        },
        service: "dashboard",
      },
    ],
    clients: [],
    relatedPosts: [
      "sistem-produksi-manufaktur-skala-menengah",
      "hpp-dan-akuntansi-biaya-produk-di-erp",
      "perencanaan-stok-dan-pembelian-ulang",
    ],
  },

  "jasa-profesional": {
    metaTitle: {
      id: "Sistem Proyek, Timesheet & Penagihan untuk Bisnis Jasa | AG·SORA",
      en: "Project, Timesheet & Billing Systems for Service Firms | AG·SORA",
      zh: "专业服务企业项目、工时与账单系统 | AG·SORA",
    },
    metaDescription: {
      id: "Sistem untuk konsultan, agensi, dan kantor jasa: manajemen klien, proyek, timesheet, dan penagihan per milestone.",
      en: "Systems for consultants, agencies, and service firms: client management, projects, timesheets, and milestone billing.",
      zh: "为咨询公司、代理机构与服务企业提供客户管理、项目、工时与里程碑计费系统。",
    },
    h1: {
      id: "Sistem untuk konsultan, agensi, dan kantor jasa profesional",
      en: "Systems for consultants, agencies, and professional service firms",
      zh: "为咨询公司、代理机构与专业服务企业打造的系统",
    },
    intro: {
      id: "Di bisnis jasa, yang dijual adalah waktu dan keahlian tim. Tanpa catatan jam kerja dan progres proyek yang rapi, sulit tahu proyek mana yang menguntungkan. Kami membangun sistem untuk klien, proyek, dan penagihan.",
      en: "A service business sells its team's time and expertise. Without clean records of hours and project progress, it is hard to tell which projects pay. We build systems for clients, projects, and billing.",
      zh: "服务型企业出售的是团队的时间与专业能力。没有清晰的工时与项目进度记录，就很难判断哪些项目赚钱。我们构建客户、项目与账单管理系统。",
    },
    challenges: [
      {
        title: { id: "Jam kerja tidak tercatat", en: "Hours that go unrecorded", zh: "工时未记录" },
        text: {
          id: "Waktu yang dihabiskan untuk tiap klien tidak diketahui, sehingga harga sulit ditetapkan.",
          en: "Time spent per client is unknown, which makes pricing guesswork.",
          zh: "不清楚每个客户耗费了多少时间，定价只能靠猜。",
        },
      },
      {
        title: { id: "Penagihan terlambat", en: "Late invoicing", zh: "开票滞后" },
        text: {
          id: "Milestone selesai, tapi tagihan baru dikirim minggu berikutnya atau terlupa.",
          en: "Milestones are done, but invoices go out a week later or are forgotten.",
          zh: "里程碑已完成，发票却拖到下周才发或被遗忘。",
        },
      },
      {
        title: { id: "Data klien tersebar", en: "Client data scattered", zh: "客户资料分散" },
        text: {
          id: "Kontrak, kontak, dan riwayat diskusi tersimpan di email dan ponsel masing-masing staf.",
          en: "Contracts, contacts, and discussion history sit in each staff member's email and phone.",
          zh: "合同、联系人与沟通记录分散在每位员工的邮箱和手机里。",
        },
      },
    ],
    solutions: [
      {
        title: { id: "CRM dan data klien", en: "CRM and client records", zh: "客户关系管理" },
        text: {
          id: "Kontak, kontrak, dan riwayat komunikasi setiap klien tersimpan di satu tempat.",
          en: "Contacts, contracts, and communication history for every client kept in one place.",
          zh: "每位客户的联系人、合同与沟通记录集中保存。",
        },
        service: "crm",
      },
      {
        title: { id: "Proyek dan timesheet", en: "Projects and timesheets", zh: "项目与工时" },
        text: {
          id: "Tugas, tenggat, dan jam kerja tim tercatat per proyek dan per klien.",
          en: "Tasks, deadlines, and team hours recorded per project and per client.",
          zh: "按项目与客户记录任务、截止日期与团队工时。",
        },
        service: "custom-software",
      },
      {
        title: { id: "Penagihan per milestone", en: "Milestone billing", zh: "里程碑计费" },
        text: {
          id: "Tagihan dibuat otomatis saat milestone disetujui, lengkap dengan pengingat jatuh tempo.",
          en: "Invoices created automatically when a milestone is approved, with due date reminders.",
          zh: "里程碑确认后自动生成发票，并附到期提醒。",
        },
        service: "erp",
      },
      {
        title: { id: "Profitabilitas proyek", en: "Project profitability", zh: "项目盈利分析" },
        text: {
          id: "Pendapatan dibandingkan dengan jam dan biaya aktual untuk setiap proyek.",
          en: "Revenue compared with actual hours and costs for every project.",
          zh: "将每个项目的收入与实际工时和成本进行对比。",
        },
        service: "dashboard",
      },
    ],
    clients: [],
    relatedPosts: [
      "sistem-operasional-bisnis-jasa-profesional",
      "penagihan-proyek-dan-milestone-untuk-bisnis-jasa",
      "sistem-booking-dan-reservasi-online-untuk-bisnis-jasa",
    ],
  },

  umkm: {
    metaTitle: {
      id: "Sistem & Aplikasi untuk UMKM yang Mulai Bertumbuh | AG·SORA",
      en: "Systems & Apps for Growing Small Businesses | AG·SORA",
      zh: "成长型中小企业的系统与应用 | AG·SORA",
    },
    metaDescription: {
      id: "Website, kasir, dan sistem stok untuk UMKM. Mulai dari ruang lingkup kecil dengan harga mulai dari yang dipublikasikan, lalu dikembangkan bertahap.",
      en: "Websites, cashier, and stock systems for small businesses. Start with a small scope at published starting prices, then grow in stages.",
      zh: "为中小企业提供网站、收银与库存系统。从小范围起步，价格公开透明，再逐步扩展。",
    },
    h1: {
      id: "Sistem untuk UMKM yang mulai kewalahan dengan catatan manual",
      en: "Systems for small businesses outgrowing manual records",
      zh: "为手工记录已不堪重负的中小企业打造的系统",
    },
    intro: {
      id: "Banyak UMKM bertumbuh dengan buku catatan dan grup chat, sampai pesanan mulai terlewat dan stok tidak jelas. Kami membantu memulai dari kebutuhan yang paling mendesak, dengan biaya yang terukur sejak awal.",
      en: "Many small businesses grow on notebooks and chat groups until orders start slipping and stock becomes unclear. We help you start with the most urgent need, at a cost that is clear from the beginning.",
      zh: "许多中小企业靠笔记本和聊天群成长，直到订单开始遗漏、库存变得混乱。我们帮助您从最迫切的需求开始，费用从一开始就清晰可控。",
    },
    challenges: [
      {
        title: { id: "Pesanan tercecer di chat", en: "Orders lost in chats", zh: "订单散落在聊天中" },
        text: {
          id: "Pesanan masuk dari WhatsApp, Instagram, dan marketplace tanpa satu daftar yang lengkap.",
          en: "Orders arrive from WhatsApp, Instagram, and marketplaces with no single complete list.",
          zh: "订单来自 WhatsApp、Instagram 与电商平台，却没有一份完整清单。",
        },
      },
      {
        title: { id: "Keuangan bercampur", en: "Mixed finances", zh: "账目混杂" },
        text: {
          id: "Uang usaha dan pribadi tercampur, sehingga laba sebenarnya tidak diketahui.",
          en: "Business and personal money get mixed, so the real profit is unknown.",
          zh: "公私资金混在一起，不清楚真实利润。",
        },
      },
      {
        title: { id: "Takut biaya sistem membengkak", en: "Worry about runaway system costs", zh: "担心系统费用失控" },
        text: {
          id: "Pemilik ragu memulai karena khawatir proyek software mahal dan tidak selesai.",
          en: "Owners hesitate because they fear a software project will be expensive and never finish.",
          zh: "老板担心软件项目昂贵又做不完，因此迟迟不敢开始。",
        },
      },
    ],
    solutions: [
      {
        title: { id: "Website atau toko online", en: "Website or online store", zh: "网站或网店" },
        text: {
          id: "Halaman produk yang rapi dan tombol WhatsApp untuk menerima pesanan langsung.",
          en: "Tidy product pages and a WhatsApp button to take orders directly.",
          zh: "整洁的商品页面与 WhatsApp 按钮，直接接单。",
        },
        service: "website",
      },
      {
        title: { id: "Kasir dan stok sederhana", en: "Simple cashier and stock", zh: "简易收银与库存" },
        text: {
          id: "Penjualan dan stok tercatat otomatis, cukup dari tablet atau ponsel.",
          en: "Sales and stock recorded automatically from a tablet or phone.",
          zh: "用平板或手机即可自动记录销售与库存。",
        },
        service: "pos",
      },
      {
        title: { id: "Dimulai dari MVP", en: "Start with an MVP", zh: "从最小可行产品起步" },
        text: {
          id: "Fitur paling penting dibangun dulu, lalu dikembangkan setelah terbukti dipakai.",
          en: "The most important features come first and grow once they prove useful.",
          zh: "先构建最重要的功能，验证可用后再扩展。",
        },
        service: "custom-software",
      },
      {
        title: { id: "Laporan laba sederhana", en: "Simple profit reports", zh: "简明利润报表" },
        text: {
          id: "Omzet, biaya, dan laba harian terlihat tanpa harus menghitung manual.",
          en: "Daily revenue, costs, and profit visible without manual calculation.",
          zh: "无需手工计算即可查看每日营业额、成本与利润。",
        },
        service: "dashboard",
      },
    ],
    clients: [],
    relatedPosts: [
      "digitalisasi-umkm-mulai-dari-mana",
      "mvp-aplikasi-bisnis-mulai-dari-yang-kecil",
      "phishing-ransomware-dan-keamanan-siber-untuk-umkm",
    ],
  },

  korporasi: {
    metaTitle: {
      id: "Sistem Enterprise Terintegrasi untuk Perusahaan Multidivisi | AG·SORA",
      en: "Integrated Enterprise Systems for Multidivision Companies | AG·SORA",
      zh: "多部门企业一体化系统 | AG·SORA",
    },
    metaDescription: {
      id: "Integrasi sistem, konsolidasi laporan multicabang, SSO, dan jejak audit untuk perusahaan dengan banyak divisi dan entitas.",
      en: "System integration, multibranch report consolidation, SSO, and audit trails for companies with many divisions and entities.",
      zh: "为多部门、多实体企业提供系统集成、多分支报表合并、单点登录与审计追踪。",
    },
    h1: {
      id: "Sistem terintegrasi untuk perusahaan multidivisi dan multicabang",
      en: "Integrated systems for multidivision, multibranch companies",
      zh: "为多部门、多分支企业打造的一体化系统",
    },
    intro: {
      id: "Perusahaan besar jarang mulai dari nol: sudah ada software akuntansi, HR, dan aplikasi divisi yang berjalan. Kami menghubungkan sistem yang ada, menambah modul yang kurang, dan menjaga kontrol akses serta jejak audit.",
      en: "Large companies rarely start from zero: accounting software, HR tools, and division apps are already running. We connect the existing systems, add the missing modules, and keep access control and audit trails in place.",
      zh: "大型企业很少从零开始：会计软件、人事系统与各部门应用早已在运行。我们连接现有系统，补齐缺失模块，并保持访问控制与审计追踪。",
    },
    challenges: [
      {
        title: { id: "Sistem tidak saling bicara", en: "Systems that do not talk", zh: "系统互不相通" },
        text: {
          id: "Data yang sama diinput ulang di beberapa aplikasi dan sering tidak cocok.",
          en: "The same data is entered again in several apps and often does not match.",
          zh: "同一数据在多个应用中重复录入，经常对不上。",
        },
      },
      {
        title: { id: "Konsolidasi laporan lambat", en: "Slow report consolidation", zh: "报表合并缓慢" },
        text: {
          id: "Laporan grup baru selesai setelah tiap entitas mengirim file dan direkap manual.",
          en: "Group reports are ready only after each entity sends files that are merged by hand.",
          zh: "要等各实体发送文件并人工汇总后，集团报表才能完成。",
        },
      },
      {
        title: { id: "Akses dan audit sulit dikendalikan", en: "Access and audit hard to control", zh: "权限与审计难以管控" },
        text: {
          id: "Akun karyawan yang keluar masih aktif di beberapa sistem, dan perubahan data sulit ditelusuri.",
          en: "Accounts of staff who left remain active in some systems, and data changes are hard to trace.",
          zh: "离职员工的账号在部分系统中仍然有效，数据变更难以追溯。",
        },
      },
    ],
    solutions: [
      {
        title: { id: "Integrasi sistem", en: "System integration", zh: "系统集成" },
        text: {
          id: "Software yang sudah dipakai dihubungkan lewat API agar data cukup diinput sekali.",
          en: "Existing software connected through APIs so data is entered only once.",
          zh: "通过 API 连接现有软件，数据只需录入一次。",
        },
        service: "api-integration",
      },
      {
        title: { id: "ERP dan konsolidasi", en: "ERP and consolidation", zh: "ERP 与合并报表" },
        text: {
          id: "Laporan per entitas dan konsolidasi grup tersusun dari transaksi yang sama.",
          en: "Entity reports and group consolidation built from the same transactions.",
          zh: "各实体报表与集团合并报表均来自同一套交易数据。",
        },
        service: "erp",
      },
      {
        title: { id: "SSO dan hak akses", en: "SSO and permissions", zh: "单点登录与权限" },
        text: {
          id: "Satu akun per karyawan untuk semua aplikasi, dengan hak akses sesuai jabatan dan jejak audit.",
          en: "One account per employee across apps, with role based access and audit trails.",
          zh: "每位员工一个账号通用所有应用，按岗位授权并保留审计记录。",
        },
        service: "custom-software",
      },
      {
        title: { id: "Dashboard manajemen", en: "Management dashboards", zh: "管理层看板" },
        text: {
          id: "Indikator utama tiap divisi dan cabang terlihat dalam satu dashboard.",
          en: "Key indicators for every division and branch visible in one dashboard.",
          zh: "各部门与分支的关键指标集中在一个看板中。",
        },
        service: "dashboard",
      },
    ],
    clients: [],
    relatedPosts: [
      "konsolidasi-laporan-multi-cabang",
      "jejak-audit-dan-pengendalian-internal-di-sistem-erp",
      "sso-dan-manajemen-identitas-untuk-aplikasi-bisnis",
      "manajemen-waralaba-dan-jaringan-cabang-dengan-sistem-terpusat",
    ],
  },
};
