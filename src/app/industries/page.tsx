import type { Metadata } from "next";
import { IndustriesBody } from "@/components/sections/industries-body";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Solusi Software per Industri",
  description:
    "Sistem bisnis untuk retail, F&B, distribusi, pendidikan, klinik, manufaktur, jasa profesional, UMKM, hingga enterprise di Indonesia.",
  path: "/industries",
});

export default function IndustriesPage() {
  return <IndustriesBody />;
}
