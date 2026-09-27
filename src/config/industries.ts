import type { LucideIcon } from "lucide-react";
import {
  Store,
  UtensilsCrossed,
  Truck,
  GraduationCap,
  Stethoscope,
  Factory,
  Briefcase,
  Building2,
  Landmark,
} from "lucide-react";

export type Industry = {
  name: { id: string; en: string; zh: string };
  icon: LucideIcon;
  description: { id: string; en: string; zh: string };
};

export const industries: Industry[] = [
  {
    name: { id: "Ritel", en: "Retail", zh: "零售" },
    icon: Store,
    description: {
      id: "POS, inventori, dan manajemen multi-outlet dalam satu sistem.",
      en: "POS, inventory, and multi-outlet management in one system.",
      zh: "收银、库存与多门店管理集于一体。",
    },
  },
  {
    name: { id: "Kuliner (F&B)", en: "F&B", zh: "餐饮" },
    icon: UtensilsCrossed,
    description: {
      id: "Kasir, dapur, dan stok bahan baku yang saling terhubung.",
      en: "Cashier, kitchen, and ingredient stock, all connected.",
      zh: "收银、厨房与原料库存互联互通。",
    },
  },
  {
    name: { id: "Distribusi", en: "Distribution", zh: "分销" },
    icon: Truck,
    description: {
      id: "Kontrol stok gudang, pengiriman, dan sales lapangan.",
      en: "Warehouse stock control, shipping, and field sales.",
      zh: "仓库库存管控、配送与外勤销售。",
    },
  },
  {
    name: { id: "Sekolah / Pendidikan", en: "School / Education", zh: "学校 / 教育" },
    icon: GraduationCap,
    description: {
      id: "Sistem akademik, keuangan, dan administrasi sekolah.",
      en: "Academic, finance, and school administration systems.",
      zh: "教务、财务与校务行政系统。",
    },
  },
  {
    name: { id: "Klinik / Kesehatan", en: "Clinic / Healthcare", zh: "诊所 / 医疗" },
    icon: Stethoscope,
    description: {
      id: "Rekam medis, antrian, dan manajemen klinik yang rapi.",
      en: "Medical records, queueing, and organized clinic management.",
      zh: "病历、排队与规范化的诊所管理。",
    },
  },
  {
    name: { id: "Manufaktur", en: "Manufacturing", zh: "制造业" },
    icon: Factory,
    description: {
      id: "Produksi, bahan baku, dan kontrol kualitas terintegrasi.",
      en: "Integrated production, raw materials, and quality control.",
      zh: "生产、原材料与质量控制一体化管理。",
    },
  },
  {
    name: { id: "Jasa Profesional", en: "Professional Services", zh: "专业服务" },
    icon: Briefcase,
    description: {
      id: "Manajemen klien, proyek, dan penagihan yang efisien.",
      en: "Efficient client, project, and billing management.",
      zh: "高效的客户、项目与账单管理。",
    },
  },
  {
    name: { id: "UMKM", en: "SME", zh: "中小企业" },
    icon: Building2,
    description: {
      id: "Sistem yang tumbuh bersama bisnis kecil dan menengah.",
      en: "Systems that grow alongside small and medium businesses.",
      zh: "与中小企业共同成长的系统。",
    },
  },
  {
    name: { id: "Korporasi", en: "Enterprise", zh: "大型企业" },
    icon: Landmark,
    description: {
      id: "Arsitektur skala besar untuk kebutuhan multi-divisi.",
      en: "Large-scale architecture for multi-division needs.",
      zh: "面向多部门需求的大规模架构。",
    },
  },
];
