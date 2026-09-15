import { Hero } from "@/components/sections/hero";
import { ClientLogos } from "@/components/sections/client-logos";
import { PathChooser } from "@/components/sections/path-chooser";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProductSwitcher } from "@/components/sections/product-switcher";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { WhyAgsora } from "@/components/sections/why-agsora";
import { SystemIntegration } from "@/components/sections/system-integration";
import { HowWeWork } from "@/components/sections/how-we-work";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";
import { Section } from "@/components/ui/section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  absoluteTitle: "Software House Indonesia untuk ERP, POS & HRIS | AG·SORA",
  description:
    "Software house Indonesia yang membangun custom software, ERP, POS, HRIS, dan CRM, plus produk SaaS siap pakai. Konsultasi gratis untuk bisnis Anda.",
  path: "/",
});

/**
 * Section order follows the questions a prospect asks, in the order they ask
 * them: what is this → which option fits me → what can you build → is there
 * something ready-made → does it suit my kind of business → why you → how do
 * the pieces connect → what is the process → what does it cost → remaining
 * doubts → contact.
 *
 * Page length is a constraint, not an afterthought: every section added here
 * pushes pricing and the final CTA further down on a phone. Measure mobile
 * scroll depth before adding one.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Section className="pt-0">
        <ClientLogos />
      </Section>
      <PathChooser />
      <Section>
        <ServicesGrid compact />
      </Section>
      <Section className="border-t border-line">
        <ProductSwitcher />
      </Section>
      <Section className="border-t border-line">
        <IndustriesGrid />
      </Section>
      <Section className="border-t border-line">
        <WhyAgsora />
      </Section>
      {/* Desktop only here — it cost 1.3 phone screens between "why" and
          pricing. Mobile readers get the full diagram on /products. */}
      <Section className="hidden border-t border-line lg:block">
        <SystemIntegration />
      </Section>
      <Section className="border-t border-line">
        <HowWeWork />
      </Section>
      <Section className="border-t border-line">
        <PricingTeaser />
      </Section>
      <Section className="border-t border-line">
        {/* Visual only — FAQPage schema is emitted once, on /pricing. */}
        <Faq featuredOnly />
      </Section>
      <Section className="border-t border-line">
        <ContactCta />
      </Section>
    </>
  );
}
