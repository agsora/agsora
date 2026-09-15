import type { LucideIcon } from "lucide-react";
import {
  ShoppingCart,
  Network,
  Users,
  UserCircle2,
  Boxes,
} from "lucide-react";

export type ProductTier = {
  name: string;
  price: string;
  period: string;
};

type Localized = { id: string; en: string; zh: string };
type LocalizedList = { id: string[]; en: string[]; zh: string[] };

export type Product = {
  id: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  tagline: Localized;
  description: Localized;
  benefits: LocalizedList;
  features: LocalizedList;
  tiers: ProductTier[];
};

export const products: Product[] = [
  {
    id: "pos",
    name: "AG·SORA POS",
    shortName: "POS",
    icon: ShoppingCart,
    tagline: {
      id: "Sistem kasir modern untuk retail & F&B",
      en: "Modern point-of-sale for retail & F&B",
      zh: "面向零售与餐饮的现代收银系统",
    },
    description: {
      id: "Kelola transaksi, stok, dan multi-outlet dari satu dashboard yang responsif dan mudah digunakan tim di lapangan.",
      en: "Manage transactions, stock, and multiple outlets from one responsive dashboard your field team can actually use.",
      zh: "在一个响应迅速、现场团队易于使用的仪表盘中管理交易、库存与多门店运营。",
    },
    benefits: {
      id: ["Transaksi cepat, offline-ready", "Sinkronisasi stok real-time", "Laporan penjualan otomatis"],
      en: ["Fast transactions, offline-ready", "Real-time stock sync", "Automated sales reports"],
      zh: ["交易快速，支持离线使用", "库存实时同步", "自动生成销售报表"],
    },
    features: {
      id: ["Multi-outlet & multi-kasir", "Manajemen produk & varian", "Integrasi payment gateway", "Laporan penjualan & shift"],
      en: ["Multi-outlet & multi-cashier", "Product & variant management", "Payment gateway integration", "Sales & shift reports"],
      zh: ["支持多门店与多收银台", "产品与规格管理", "支付网关对接", "销售与班次报表"],
    },
    tiers: [
      { name: "Starter", price: "Rp99.000", period: "/bulan" },
      { name: "Business", price: "Rp199.000", period: "/bulan" },
      { name: "Pro", price: "Rp399.000", period: "/bulan" },
    ],
  },
  {
    id: "erp",
    name: "AG·SORA ERP",
    shortName: "ERP",
    icon: Network,
    tagline: {
      id: "Satu sistem untuk seluruh operasional bisnis",
      en: "One system for your entire business operation",
      zh: "一套系统统管全部业务运营",
    },
    description: {
      id: "Integrasikan keuangan, inventori, produksi, dan pembelian dalam satu platform yang scalable seiring pertumbuhan bisnis.",
      en: "Integrate finance, inventory, production, and purchasing into one platform that scales as your business grows.",
      zh: "将财务、库存、生产与采购整合到一个可随业务增长扩展的平台中。",
    },
    benefits: {
      id: ["Visibilitas penuh lintas divisi", "Alur kerja approval terstruktur", "Skalabel dari single ke multi-cabang"],
      en: ["Full visibility across divisions", "Structured approval workflows", "Scales from single to multi-branch"],
      zh: ["跨部门全面可视化", "结构化审批流程", "可从单店扩展至多分店"],
    },
    features: {
      id: ["Modul keuangan & akuntansi", "Manajemen inventori & gudang", "Purchasing & procurement", "Laporan konsolidasi multi-cabang"],
      en: ["Finance & accounting module", "Inventory & warehouse management", "Purchasing & procurement", "Multi-branch consolidated reports"],
      zh: ["财务与会计模块", "库存与仓库管理", "采购管理", "多分店合并报表"],
    },
    tiers: [
      { name: "Starter", price: "Rp299.000", period: "/bulan" },
      { name: "Business", price: "Rp599.000", period: "/bulan" },
      { name: "Pro", price: "Rp999.000", period: "/bulan" },
    ],
  },
  {
    id: "hr",
    name: "AG·SORA HR",
    shortName: "HR",
    icon: Users,
    tagline: {
      id: "Platform HR digital untuk tim modern",
      en: "A digital HR platform for modern teams",
      zh: "面向现代团队的数字化人力资源平台",
    },
    description: {
      id: "Otomatisasi absensi, payroll, dan manajemen karyawan agar tim HR fokus pada hal yang lebih strategis.",
      en: "Automate attendance, payroll, and employee management so your HR team can focus on more strategic work.",
      zh: "自动化考勤、薪资与员工管理，让 HR 团队专注于更具战略性的工作。",
    },
    benefits: {
      id: ["Payroll otomatis & akurat", "Absensi digital & remote-friendly", "Data karyawan terpusat"],
      en: ["Automated, accurate payroll", "Digital, remote-friendly attendance", "Centralized employee data"],
      zh: ["薪资自动化且准确", "数字化考勤，支持远程", "员工数据集中管理"],
    },
    features: {
      id: ["Absensi & cuti online", "Payroll & slip gaji otomatis", "Manajemen performa karyawan", "Employee self-service"],
      en: ["Online attendance & leave", "Automated payroll & payslips", "Employee performance management", "Employee self-service"],
      zh: ["在线考勤与请假", "自动薪资与工资单", "员工绩效管理", "员工自助服务"],
    },
    tiers: [
      { name: "Starter", price: "Rp99.000", period: "/bulan" },
      { name: "Business", price: "Rp249.000", period: "/bulan" },
      { name: "Pro", price: "Rp499.000", period: "/bulan" },
    ],
  },
  {
    id: "crm",
    name: "AG·SORA CRM",
    shortName: "CRM",
    icon: UserCircle2,
    tagline: {
      id: "Kelola pelanggan dan pipeline penjualan",
      en: "Manage customers and your sales pipeline",
      zh: "管理客户与销售管道",
    },
    description: {
      id: "Pantau setiap peluang penjualan, follow-up, dan relasi pelanggan agar tim sales bekerja lebih terarah.",
      en: "Track every sales opportunity, follow-up, and customer relationship so your sales team stays focused.",
      zh: "跟踪每一个销售机会、跟进事项与客户关系，让销售团队工作更有方向。",
    },
    benefits: {
      id: ["Pipeline penjualan yang jelas", "Follow-up otomatis & terjadwal", "Riwayat interaksi pelanggan lengkap"],
      en: ["A clear sales pipeline", "Automated, scheduled follow-ups", "Complete customer interaction history"],
      zh: ["清晰的销售管道", "自动化定时跟进", "完整的客户互动记录"],
    },
    features: {
      id: ["Manajemen leads & deals", "Pipeline & sales forecasting", "Integrasi WhatsApp & email", "Laporan performa sales"],
      en: ["Leads & deals management", "Pipeline & sales forecasting", "WhatsApp & email integration", "Sales performance reports"],
      zh: ["线索与商机管理", "销售管道与预测", "WhatsApp 与邮件对接", "销售业绩报表"],
    },
    tiers: [
      { name: "Starter", price: "Rp99.000", period: "/bulan" },
      { name: "Business", price: "Rp249.000", period: "/bulan" },
      { name: "Pro", price: "Rp499.000", period: "/bulan" },
    ],
  },
  {
    id: "inventory",
    name: "AG·SORA Inventory",
    shortName: "Inventory",
    icon: Boxes,
    tagline: {
      id: "Kontrol stok yang presisi, minim selisih",
      en: "Precise stock control, minimal discrepancies",
      zh: "精准库存管控，减少差异",
    },
    description: {
      id: "Pantau pergerakan stok antar gudang dan outlet secara real-time untuk mengurangi selisih dan stok mati.",
      en: "Track stock movement between warehouses and outlets in real time to cut discrepancies and dead stock.",
      zh: "实时跟踪仓库与门店之间的库存变动，减少差异与滞销库存。",
    },
    benefits: {
      id: ["Stok real-time lintas lokasi", "Notifikasi stok minimum", "Audit trail pergerakan barang"],
      en: ["Real-time stock across locations", "Low-stock notifications", "Full audit trail of stock movement"],
      zh: ["跨地点实时库存", "低库存提醒", "完整的库存变动审计记录"],
    },
    features: {
      id: ["Manajemen multi-gudang", "Stock opname & adjustment", "Transfer antar lokasi", "Laporan stok & valuasi"],
      en: ["Multi-warehouse management", "Stock opname & adjustment", "Inter-location transfers", "Stock & valuation reports"],
      zh: ["多仓库管理", "盘点与库存调整", "跨地点调拨", "库存与估值报表"],
    },
    tiers: [
      { name: "Starter", price: "Rp99.000", period: "/bulan" },
      { name: "Business", price: "Rp249.000", period: "/bulan" },
      { name: "Pro", price: "Rp499.000", period: "/bulan" },
    ],
  },
];
