import { Hero } from "@/components/sections/hero";
import { ClientLogos } from "@/components/sections/client-logos";
import { PathChooser } from "@/components/sections/path-chooser";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProductSwitcher } from "@/components/sections/product-switcher";
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
 * Trimmed to the sections a prospect actually needs to decide: what is this
 * → which option fits me → what can you build → how does it connect
 * technically → is there something ready-made → why/how we work (merged,
 * one scroll) → what does it cost → remaining doubts → contact.
 *
 * Industries has its own page (linked from nav) instead of a homepage
 * section — one less stop before pricing. Keep it that way; re-adding
 * sections here pushes pricing and the final CTA further down on a phone.
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
      {/* Desktop only — costs 1.3 phone screens; mobile readers get the full
          diagram on /products. */}
      <Section className="hidden border-t border-line lg:block">
        <SystemIntegration />
      </Section>
      <Section className="border-t border-line">
        <ProductSwitcher />
      </Section>
      <Section className="border-t border-line">
        <WhyAgsora />
        <div className="mt-20 md:mt-28">
          <HowWeWork />
        </div>
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
