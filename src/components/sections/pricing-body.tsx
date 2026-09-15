"use client";

import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { CustomDevPricing } from "@/components/sections/custom-dev-pricing";
import { SaasPricing } from "@/components/sections/saas-pricing";
import { PricingDisclaimer } from "@/components/sections/pricing-disclaimer";
import { ContactCta } from "@/components/sections/contact-cta";
import { Faq } from "@/components/sections/faq";
import { useLocale } from "@/i18n/locale-context";

export function PricingBody() {
  const { t } = useLocale();
  return (
    <>
      <PageHero
        breadcrumb={{ name: "Pricing", href: "/pricing" }}
        eyebrow="Launch Pricing"
        title={t.pricingPage.heroTitle}
        description={t.pricingPage.heroDescription}
      />

      <Section>
        <Container>
          <SectionHeading
            eyebrow={t.pricingPage.customDevEyebrow}
            title={t.pricingPage.customDevTitle}
          />
          <div className="mt-10">
            <CustomDevPricing />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-line bg-surface-1">
        <Container>
          <SectionHeading
            eyebrow={t.pricingPage.saasEyebrow}
            title={t.pricingPage.saasTitle}
            description={t.pricingPage.saasDescription}
          />
          <div className="mt-10">
            <SaasPricing />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-6xl">
          <PricingDisclaimer />
        </Container>
      </Section>

      <Section id="faq" className="scroll-mt-16 border-t border-line pt-0">
        <div className="pt-20 md:pt-28">
          <Faq />
        </div>
      </Section>

      <Section className="pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
