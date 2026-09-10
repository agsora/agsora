import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { ContactCta } from "@/components/sections/contact-cta";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { valueProps } from "@/config/process";
import { siteConfig } from "@/config/site";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "AG·SORA adalah perusahaan teknologi Indonesia yang membantu bisnis membangun, mengintegrasikan, dan mengembangkan sistem digital.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AG·SORA"
        title="Perusahaan teknologi yang membangun fondasi digital bisnis Indonesia"
        description={`${siteConfig.legalName} adalah perusahaan teknologi yang membantu bisnis membangun, mengintegrasikan, dan mengembangkan sistem digital — melalui layanan custom development dan produk SaaS proprietary.`}
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Positioning"
                title="Modern technology company untuk bisnis yang ingin bertumbuh"
                description="AG·SORA berdiri di antara dua peran: mitra pengembangan software custom, dan penyedia produk SaaS yang siap digunakan. Kombinasi ini memungkinkan kami memahami kebutuhan bisnis secara mendalam sekaligus menghadirkan solusi yang matang dan teruji."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-surface-border bg-bg-alt p-7">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">
                  Brand Personality
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Intelligent",
                    "Trusted",
                    "Adaptive",
                    "Modern",
                    "Scalable",
                    "Enterprise-ready",
                    "Human-centered",
                    "Future-oriented",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-surface-border bg-white px-3 py-1.5 text-xs font-medium text-navy-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-alt">
        <Container>
          <SectionHeading
            eyebrow="What We Believe"
            title="Prinsip yang memandu setiap sistem yang kami bangun"
            align="center"
            className="mx-auto"
          />
          <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {valueProps.map((v) => (
              <RevealItem key={v.title}>
                <div className="h-full rounded-2xl border border-surface-border bg-white p-6">
                  <CheckCircle2 className="h-5 w-5 text-blue" />
                  <h3 className="mt-4 text-base font-semibold text-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {v.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section className="pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
