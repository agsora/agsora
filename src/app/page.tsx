import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProductSwitcher } from "@/components/sections/product-switcher";
import { SystemIntegration } from "@/components/sections/system-integration";
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
        <ProductSwitcher />
      </Section>
      <Section>
        <SystemIntegration />
      </Section>
      <Section className="border-y border-line bg-surface-1">
        <WhyAgsora />
      </Section>
      <Section>
        <HowWeWork />
      </Section>
      <Section className="border-y border-line bg-surface-1">
        <IndustriesGrid />
      </Section>
      <Section>
        <PricingTeaser />
      </Section>
      <Section className="border-t border-line bg-surface-1 pt-20 md:pt-28">
        <ContactCta />
      </Section>
    </>
  );
}
