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

export type Product = {
  id: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  benefits: string[];
  features: string[];
  tiers: ProductTier[];
};

export const products: Product[] = [
  {
    id: "pos",
    name: "AG·SORA POS",
    shortName: "POS",
    icon: ShoppingCart,
    tagline: "Sistem kasir modern untuk retail & F&B",
    description:
      "Kelola transaksi, stok, dan multi-outlet dari satu dashboard yang responsif dan mudah digunakan tim di lapangan.",
    benefits: [
      "Transaksi cepat, offline-ready",
      "Sinkronisasi stok real-time",
      "Laporan penjualan otomatis",
    ],
    features: [
      "Multi-outlet & multi-kasir",
      "Manajemen produk & varian",
      "Integrasi payment gateway",
      "Laporan penjualan & shift",
    ],
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
    tagline: "Satu sistem untuk seluruh operasional bisnis",
    description:
      "Integrasikan keuangan, inventori, produksi, dan pembelian dalam satu platform yang scalable seiring pertumbuhan bisnis.",
    benefits: [
      "Visibilitas penuh lintas divisi",
      "Alur kerja approval terstruktur",
      "Skalabel dari single ke multi-cabang",
    ],
    features: [
      "Modul keuangan & akuntansi",
      "Manajemen inventori & gudang",
      "Purchasing & procurement",
      "Laporan konsolidasi multi-cabang",
    ],
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
    tagline: "Platform HR digital untuk tim modern",
    description:
      "Otomatisasi absensi, payroll, dan manajemen karyawan agar tim HR fokus pada hal yang lebih strategis.",
    benefits: [
      "Payroll otomatis & akurat",
      "Absensi digital & remote-friendly",
      "Data karyawan terpusat",
    ],
    features: [
      "Absensi & cuti online",
      "Payroll & slip gaji otomatis",
      "Manajemen performa karyawan",
      "Employee self-service",
    ],
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
    tagline: "Kelola pelanggan dan pipeline penjualan",
    description:
      "Pantau setiap peluang penjualan, follow-up, dan relasi pelanggan agar tim sales bekerja lebih terarah.",
    benefits: [
      "Pipeline penjualan yang jelas",
      "Follow-up otomatis & terjadwal",
      "Riwayat interaksi pelanggan lengkap",
    ],
    features: [
      "Manajemen leads & deals",
      "Pipeline & sales forecasting",
      "Integrasi WhatsApp & email",
      "Laporan performa sales",
    ],
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
    tagline: "Kontrol stok yang presisi, minim selisih",
    description:
      "Pantau pergerakan stok antar gudang dan outlet secara real-time untuk mengurangi selisih dan stok mati.",
    benefits: [
      "Stok real-time lintas lokasi",
      "Notifikasi stok minimum",
      "Audit trail pergerakan barang",
    ],
    features: [
      "Manajemen multi-gudang",
      "Stock opname & adjustment",
      "Transfer antar lokasi",
      "Laporan stok & valuasi",
    ],
    tiers: [
      { name: "Starter", price: "Rp99.000", period: "/bulan" },
      { name: "Business", price: "Rp249.000", period: "/bulan" },
      { name: "Pro", price: "Rp499.000", period: "/bulan" },
    ],
  },
];
