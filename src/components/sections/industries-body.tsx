"use client";

import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { ContactCta } from "@/components/sections/contact-cta";
import { useLocale } from "@/i18n/locale-context";

export function IndustriesBody() {
  const { t } = useLocale();
  return (
    <>
      <PageHero
        breadcrumb={{ name: "Industries", href: "/industries" }}
        eyebrow="Industries"
        title={t.industriesPage.heroTitle}
        description={t.industriesPage.heroDescription}
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
