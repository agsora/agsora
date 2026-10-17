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
  id: `${siteConfig.legalName} adalah perusahaan teknologi yang membantu bisnis membangun, mengintegrasikan, dan mengembangkan sistem digital, melalui pengembangan software custom yang mengikuti proses kerja masing-masing bisnis.`,
  en: `${siteConfig.legalName} is a technology company that helps businesses build, integrate, and develop digital systems, through custom development built around how each business works.`,
  zh: `${siteConfig.legalName} 是一家科技公司，通过贴合各企业业务流程的定制开发服务，帮助企业构建、集成并发展其数字系统。`,
};

export function AboutBody() {
  const { t, locale } = useLocale();

  return (
    <>
      <PageHero
        breadcrumb={{ name: t.nav.about, href: "/about" }}
        eyebrow={t.pageEyebrows.about}
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
              <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 text-white md:p-10 ring-1 ring-white/10">
                <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/30 blur-[90px]" />
                <p className="relative text-[12px] font-semibold uppercase tracking-[0.18em] text-gold">
                  {t.aboutPage.brandPersonality}
                </p>
                <div className="relative mt-6 flex flex-wrap gap-2.5">
                  {t.aboutPage.brandTraits.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[14px] font-medium text-white/90"
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
          <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {valueProps.map((v, i) => (
              <RevealItem key={v.title.en}>
                <div className="h-full rounded-3xl border border-line bg-surface-0 p-6 shadow-card">
                  <span className="text-[36px] font-extrabold leading-none tracking-tight text-gradient">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[16px] font-bold text-ink">
                    {v.title[locale]}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
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
