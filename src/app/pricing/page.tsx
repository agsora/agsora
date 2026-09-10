import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { CustomDevPricing } from "@/components/sections/custom-dev-pricing";
import { SaasPricing } from "@/components/sections/saas-pricing";
import { PricingDisclaimer } from "@/components/sections/pricing-disclaimer";
import { ContactCta } from "@/components/sections/contact-cta";
import { Faq, FaqSchema } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "Launch Pricing",
  description:
    "Harga mulai dari untuk custom development dan produk SaaS AG·SORA — accessible technology for growing businesses.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <FaqSchema />
      <PageHero
        eyebrow="Launch Pricing"
        title="Accessible technology for growing businesses"
        description="Simple needs start small. Complex systems scale with your business. Semua harga di bawah adalah harga mulai dari."
      />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Custom Development"
            title="Harga mulai dari untuk setiap layanan"
          />
          <div className="mt-10">
            <CustomDevPricing />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-line bg-surface-1">
        <Container>
          <SectionHeading
            eyebrow="SaaS Products"
            title="Paket berlangganan produk AG·SORA"
            description="Mulai dari kebutuhan tim kecil hingga operasional multi-outlet."
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

      <Section className="border-t border-line pt-0">
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
