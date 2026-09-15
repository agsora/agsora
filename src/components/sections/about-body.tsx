"use client";

import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { ContactCta } from "@/components/sections/contact-cta";
import { Principles } from "@/components/sections/principles";
import { Commitments } from "@/components/sections/commitments";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { valueProps } from "@/config/process";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/i18n/locale-context";

const aboutIntro: Record<string, string> = {
  id: `${siteConfig.legalName} adalah perusahaan teknologi yang membantu bisnis membangun, mengintegrasikan, dan mengembangkan sistem digital — melalui layanan custom development dan produk SaaS proprietary.`,
  en: `${siteConfig.legalName} is a technology company that helps businesses build, integrate, and develop digital systems — through custom development services and proprietary SaaS products.`,
  zh: `${siteConfig.legalName} 是一家科技公司，通过定制开发服务与自有 SaaS 产品，帮助企业构建、集成并发展其数字系统。`,
};

export function AboutBody() {
  const { t, locale } = useLocale();

  return (
    <>
      <PageHero
        breadcrumb={{ name: "About", href: "/about" }}
        eyebrow="About AG·SORA"
        title={t.aboutPage.heroTitle}
        description={aboutIntro[locale]}
      />

      <Section>
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow={t.aboutPage.positioningEyebrow}
                title={t.aboutPage.positioningTitle}
                description={t.aboutPage.positioningDescription}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-lg border border-line bg-surface-1 p-7">
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                  {t.aboutPage.brandPersonality}
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
            eyebrow={t.aboutPage.whatWeBelieveEyebrow}
            title={t.aboutPage.whatWeBelieveTitle}
          />
          <RevealGroup className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
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
                    {v.description[locale]}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section>
        <Principles />
      </Section>

      <Section className="border-y border-line bg-surface-1">
        <Commitments />
      </Section>

      <Section className="pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
