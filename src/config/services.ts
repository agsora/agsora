import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Globe,
  Smartphone,
  Network,
  ShoppingCart,
  Users,
  UserCircle2,
  LayoutDashboard,
  Plug,
  Bot,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  startingFrom: string;
  href: string;
};

export const services: Service[] = [
  {
    id: "custom-software",
    title: "Custom Software",
    description:
      "Sistem bisnis yang dirancang khusus mengikuti proses kerja perusahaan Anda, bukan sebaliknya.",
    icon: Code2,
    startingFrom: "Rp8.000.000",
    href: "/pricing#custom-software",
  },
  {
    id: "website",
    title: "Website Development",
    description:
      "Website company profile hingga platform enterprise dengan performa dan SEO yang solid.",
    icon: Globe,
    startingFrom: "Rp3.500.000",
    href: "/pricing#website",
  },
  {
    id: "mobile",
    title: "Mobile Application",
    description:
      "Aplikasi iOS & Android untuk memperluas jangkauan layanan dan operasional lapangan.",
    icon: Smartphone,
    startingFrom: "Rp10.000.000",
    href: "/pricing#mobile",
  },
  {
    id: "erp",
    title: "ERP Development",
    description:
      "Integrasikan keuangan, inventori, produksi, dan operasional dalam satu sistem terpadu.",
    icon: Network,
    startingFrom: "Rp15.000.000",
    href: "/pricing#erp",
  },
  {
    id: "pos",
    title: "POS Systems",
    description:
      "Sistem kasir dan penjualan yang cepat, andal, dan terhubung langsung dengan laporan bisnis.",
    icon: ShoppingCart,
    startingFrom: "Rp6.000.000",
    href: "/pricing#pos",
  },
  {
    id: "hris",
    title: "HRIS",
    description:
      "Kelola data karyawan, absensi, payroll, dan performa dalam satu platform HR digital.",
    icon: Users,
    startingFrom: "Rp7.500.000",
    href: "/pricing#hris",
  },
  {
    id: "crm",
    title: "CRM",
    description:
      "Pantau pipeline penjualan, relasi pelanggan, dan tim sales secara real-time.",
    icon: UserCircle2,
    startingFrom: "Rp7.500.000",
    href: "/pricing#crm",
  },
  {
    id: "dashboard",
    title: "Dashboard & Reporting",
    description:
      "Visualisasi data bisnis yang membantu pengambilan keputusan lebih cepat dan akurat.",
    icon: LayoutDashboard,
    startingFrom: "Rp4.000.000",
    href: "/pricing#dashboard",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Otomatisasi proses berulang dengan AI — dari customer service hingga operasional internal.",
    icon: Bot,
    startingFrom: "Rp5.000.000",
    href: "/pricing#ai-automation",
  },
  {
    id: "api-integration",
    title: "API Integration",
    description:
      "Hubungkan sistem internal dengan payment gateway, marketplace, dan layanan pihak ketiga.",
    icon: Plug,
    startingFrom: "Rp3.000.000",
    href: "/pricing#api-integration",
  },
];
