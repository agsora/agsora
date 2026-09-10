import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProductEcosystem } from "@/components/sections/product-ecosystem";
import { WhyAgsora } from "@/components/sections/why-agsora";
import { HowWeWork } from "@/components/sections/how-we-work";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { ContactCta } from "@/components/sections/contact-cta";
import { Section } from "@/components/ui/section";

export default function Home() {
  return (
    <>
      <Hero />
      <Section>
        <ServicesGrid compact />
      </Section>
      <Section className="border-y border-line bg-surface-1">
        <ProductEcosystem compact />
      </Section>
      <Section>
        <WhyAgsora />
      </Section>
      <Section className="border-y border-line bg-surface-1">
        <HowWeWork />
      </Section>
      <Section>
        <IndustriesGrid />
      </Section>
      <Section className="border-y border-line bg-surface-1">
        <PricingTeaser />
      </Section>
      <Section className="pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
