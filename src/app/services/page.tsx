import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Capabilities } from "@/components/sections/capabilities";
import { ContactCta } from "@/components/sections/contact-cta";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Layanan Pembuatan Software & Sistem Bisnis",
  description:
    "Jasa pembuatan custom software, website, aplikasi mobile, ERP, POS, HRIS, CRM, AI automation, dan integrasi API untuk bisnis di Indonesia.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb={{ name: "Services", href: "/services" }}
        eyebrow="Custom Development"
        title="Solusi teknologi yang dirancang untuk cara kerja Anda"
        description="AG·SORA membantu bisnis membangun software, sistem, dan platform digital yang sesuai dengan proses operasional dan tujuan pertumbuhan jangka panjang."
      />
      <Section>
        <ServicesGrid />
      </Section>
      <Section className="border-y border-line bg-surface-1">
        <Capabilities />
      </Section>
      <Section>
        <HowWeWork />
      </Section>
      <Section className="pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
