import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Solusi AG·SORA untuk retail, F&B, distribusi, pendidikan, klinik, manufaktur, hingga enterprise.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sistem yang menyesuaikan kebutuhan industri Anda"
        description="Dari UMKM hingga enterprise multi-cabang — AG·SORA merancang solusi yang relevan dengan tantangan operasional di industri Anda."
      />
      <Section>
        <IndustriesGrid />
      </Section>
      <Section className="bg-bg-alt pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
