import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { ContactCta } from "@/components/sections/contact-cta";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { valueProps } from "@/config/process";
import { siteConfig } from "@/config/site";

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
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Positioning"
                title="Modern technology company untuk bisnis yang ingin bertumbuh"
                description="AG·SORA berdiri di antara dua peran: mitra pengembangan software custom, dan penyedia produk SaaS yang siap digunakan. Kombinasi ini memungkinkan kami memahami kebutuhan bisnis secara mendalam sekaligus menghadirkan solusi yang matang dan teruji."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-lg border border-line bg-surface-1 p-7">
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                  Brand Personality
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
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
                      className="rounded-md border border-line bg-surface-2 px-2.5 py-1.5 text-[12px] text-ink-muted"
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

      <Section className="border-y border-line bg-surface-1">
        <Container className="max-w-6xl">
          <SectionHeading
            eyebrow="What We Believe"
            title="Prinsip yang memandu setiap sistem yang kami bangun"
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {valueProps.map((v, i) => (
              <RevealItem key={v.title}>
                <div className="border-t border-line pt-5">
                  <span className="text-[11px] tabular-nums text-ink-subtle">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[14px] font-medium text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
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
