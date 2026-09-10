import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { HowWeWork } from "@/components/sections/how-we-work";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, website, mobile app, ERP, POS, HRIS, CRM, AI automation, dan API integration — dibangun sesuai kebutuhan bisnis Anda.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Custom Development"
        title="Solusi teknologi yang dirancang untuk cara kerja Anda"
        description="AG·SORA membantu bisnis membangun software, sistem, dan platform digital yang sesuai dengan proses operasional dan tujuan pertumbuhan jangka panjang."
      />
      <Section>
        <ServicesGrid />
      </Section>
      <Section className="border-y border-line bg-surface-1">
        <HowWeWork />
      </Section>
      <Section className="pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
