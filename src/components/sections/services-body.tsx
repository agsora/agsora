"use client";

import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Capabilities } from "@/components/sections/capabilities";
import { ContactCta } from "@/components/sections/contact-cta";
import { useLocale } from "@/i18n/locale-context";

export function ServicesBody() {
  const { t } = useLocale();
  return (
    <>
      <PageHero
        breadcrumb={{ name: "Services", href: "/services" }}
        eyebrow="Custom Development"
        title={t.servicesPage.heroTitle}
        description={t.servicesPage.heroDescription}
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
