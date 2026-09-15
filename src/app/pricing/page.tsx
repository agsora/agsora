import type { Metadata } from "next";
import { FaqSchema } from "@/components/sections/faq-schema";
import { PricingBody } from "@/components/sections/pricing-body";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Harga Pembuatan Software & Aplikasi",
  description:
    "Harga jasa pembuatan website, aplikasi, ERP, POS, HRIS, dan custom software mulai dari Rp2.500.000. Paket SaaS mulai Rp99.000/bulan.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <FaqSchema />
      <PricingBody />
    </>
  );
}
