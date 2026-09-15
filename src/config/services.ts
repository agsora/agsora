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
  description: { id: string; en: string; zh: string };
  icon: LucideIcon;
  startingFrom: string;
  href: string;
};

export const services: Service[] = [
  {
    id: "custom-software",
    title: "Custom Software",
    description: {
      id: "Sistem bisnis yang dirancang khusus mengikuti proses kerja perusahaan Anda, bukan sebaliknya.",
      en: "Business systems designed specifically around how your company works, not the other way around.",
      zh: "根据贵公司实际运作方式量身定制的业务系统，而非削足适履。",
    },
    icon: Code2,
    startingFrom: "Rp8.000.000",
    href: "/services/custom-software",
  },
  {
    id: "website",
    title: "Website Development",
    description: {
      id: "Website company profile hingga platform enterprise dengan performa dan SEO yang solid.",
      en: "From company profile sites to enterprise platforms, built with solid performance and SEO.",
      zh: "从企业官网到企业级平台，具备扎实的性能与 SEO 表现。",
    },
    icon: Globe,
    startingFrom: "Rp3.500.000",
    href: "/services/website",
  },
  {
    id: "mobile",
    title: "Mobile Application",
    description: {
      id: "Aplikasi iOS & Android untuk memperluas jangkauan layanan dan operasional lapangan.",
      en: "iOS & Android apps to extend your service reach and field operations.",
      zh: "iOS 与 Android 应用，拓展您的服务覆盖与现场作业能力。",
    },
    icon: Smartphone,
    startingFrom: "Rp10.000.000",
    href: "/services/mobile",
  },
  {
    id: "erp",
    title: "ERP Development",
    description: {
      id: "Integrasikan keuangan, inventori, produksi, dan operasional dalam satu sistem terpadu.",
      en: "Integrate finance, inventory, production, and operations into one unified system.",
      zh: "将财务、库存、生产与运营整合到一个统一系统中。",
    },
    icon: Network,
    startingFrom: "Rp15.000.000",
    href: "/services/erp",
  },
  {
    id: "pos",
    title: "POS Systems",
    description: {
      id: "Sistem kasir dan penjualan yang cepat, andal, dan terhubung langsung dengan laporan bisnis.",
      en: "A fast, reliable point-of-sale system connected directly to your business reports.",
      zh: "快速可靠的收银系统，直接与业务报表对接。",
    },
    icon: ShoppingCart,
    startingFrom: "Rp6.000.000",
    href: "/services/pos",
  },
  {
    id: "hris",
    title: "HRIS",
    description: {
      id: "Kelola data karyawan, absensi, payroll, dan performa dalam satu platform HR digital.",
      en: "Manage employee data, attendance, payroll, and performance on one digital HR platform.",
      zh: "在一个数字化人力资源平台上管理员工数据、考勤、薪资与绩效。",
    },
    icon: Users,
    startingFrom: "Rp7.500.000",
    href: "/services/hris",
  },
  {
    id: "crm",
    title: "CRM",
    description: {
      id: "Pantau pipeline penjualan, relasi pelanggan, dan tim sales secara real-time.",
      en: "Track your sales pipeline, customer relationships, and sales team in real time.",
      zh: "实时跟踪销售管道、客户关系与销售团队表现。",
    },
    icon: UserCircle2,
    startingFrom: "Rp7.500.000",
    href: "/services/crm",
  },
  {
    id: "dashboard",
    title: "Dashboard & Reporting",
    description: {
      id: "Visualisasi data bisnis yang membantu pengambilan keputusan lebih cepat dan akurat.",
      en: "Business data visualization that helps you make faster, more accurate decisions.",
      zh: "业务数据可视化，助您做出更快、更准确的决策。",
    },
    icon: LayoutDashboard,
    startingFrom: "Rp4.000.000",
    href: "/services/dashboard",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description: {
      id: "Otomatisasi proses berulang dengan AI — dari customer service hingga operasional internal.",
      en: "Automate repetitive processes with AI — from customer service to internal operations.",
      zh: "利用 AI 自动化重复性流程 — 从客户服务到内部运营。",
    },
    icon: Bot,
    startingFrom: "Rp5.000.000",
    href: "/services/ai-automation",
  },
  {
    id: "api-integration",
    title: "API Integration",
    description: {
      id: "Hubungkan sistem internal dengan payment gateway, marketplace, dan layanan pihak ketiga.",
      en: "Connect your internal systems with payment gateways, marketplaces, and third-party services.",
      zh: "将内部系统与支付网关、电商平台及第三方服务对接。",
    },
    icon: Plug,
    startingFrom: "Rp3.000.000",
    href: "/services/api-integration",
  },
];
