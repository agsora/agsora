import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { ContactCta } from "@/components/sections/contact-cta";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Solusi Software per Industri",
  description:
    "Sistem bisnis untuk retail, F&B, distribusi, pendidikan, klinik, manufaktur, jasa profesional, UMKM, hingga enterprise di Indonesia.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        breadcrumb={{ name: "Industries", href: "/industries" }}
        eyebrow="Industries"
        title="Sistem yang menyesuaikan kebutuhan industri Anda"
        description="Dari UMKM hingga enterprise multi-cabang — AG·SORA merancang solusi yang relevan dengan tantangan operasional di industri Anda."
      />
      <Section>
        <IndustriesGrid />
      </Section>
      <Section className="pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
