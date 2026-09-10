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
      <Section className="bg-bg-alt">
        <ProductEcosystem compact />
      </Section>
      <WhyAgsora />
      <Section>
        <HowWeWork />
      </Section>
      <Section className="bg-bg-alt">
        <IndustriesGrid />
      </Section>
      <Section>
        <PricingTeaser />
      </Section>
      <Section className="bg-bg-alt pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
