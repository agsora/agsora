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
  name: string;
  icon: LucideIcon;
  description: string;
};

export const industries: Industry[] = [
  {
    name: "Retail",
    icon: Store,
    description: "POS, inventori, dan manajemen multi-outlet dalam satu sistem.",
  },
  {
    name: "F&B",
    icon: UtensilsCrossed,
    description: "Kasir, dapur, dan stok bahan baku yang saling terhubung.",
  },
  {
    name: "Distribution",
    icon: Truck,
    description: "Kontrol stok gudang, pengiriman, dan sales lapangan.",
  },
  {
    name: "School / Education",
    icon: GraduationCap,
    description: "Sistem akademik, keuangan, dan administrasi sekolah.",
  },
  {
    name: "Clinic / Healthcare",
    icon: Stethoscope,
    description: "Rekam medis, antrian, dan manajemen klinik yang rapi.",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    description: "Produksi, bahan baku, dan kontrol kualitas terintegrasi.",
  },
  {
    name: "Professional Services",
    icon: Briefcase,
    description: "Manajemen klien, proyek, dan penagihan yang efisien.",
  },
  {
    name: "SME",
    icon: Building2,
    description: "Sistem yang tumbuh bersama bisnis kecil dan menengah.",
  },
  {
    name: "Enterprise",
    icon: Landmark,
    description: "Arsitektur skala besar untuk kebutuhan multi-divisi.",
  },
];
