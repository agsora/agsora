import type { Metadata } from "next";
import { PortfolioBody } from "@/components/sections/portfolio-body";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio & Capability Showcase",
  description:
    "Contoh implementasi ERP, landing page, dan e-commerce yang dikerjakan tim AG·SORA, plus daftar klien yang pernah kami bantu.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return <PortfolioBody />;
}
