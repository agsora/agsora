import type { Metadata } from "next";
import { ServicesBody } from "@/components/sections/services-body";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Layanan Pembuatan Software & Sistem Bisnis",
  description:
    "Jasa pembuatan custom software, website, aplikasi mobile, ERP, POS, HRIS, CRM, AI automation, dan integrasi API untuk bisnis di Indonesia.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesBody />;
}
