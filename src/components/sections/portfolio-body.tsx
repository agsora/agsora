"use client";

import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { ClientLogos } from "@/components/sections/client-logos";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { ContactCta } from "@/components/sections/contact-cta";
import { Reveal } from "@/components/motion/reveal";
import { portfolioProjects } from "@/config/portfolio";
import { useLocale } from "@/i18n/locale-context";

export function PortfolioBody() {
  const { t, locale } = useLocale();
  return (
    <>
      <PageHero
        breadcrumb={{ name: "Portfolio", href: "/portfolio" }}
        eyebrow="Portfolio"
        title={t.portfolioPage.heroTitle}
        description={t.portfolioPage.heroDescription}
      />

      <Section className="pt-0">
        <ClientLogos />
      </Section>

      <Section className="border-t border-line">
        <Container className="max-w-5xl">
          <SectionHeading
            eyebrow={t.portfolioPage.showcaseEyebrow}
            title={t.portfolioPage.showcaseTitle}
          />

          <div className="mt-14 space-y-16">
            {portfolioProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.05}>
                <article className="grid gap-6 border-t border-line pt-10 md:grid-cols-[1fr_1.1fr] md:gap-10">
                  <figure className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-surface-1 md:order-2">
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover object-top"
                    />
                  </figure>

                  <div className="md:order-1">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-accent">
                      {project.category}
                    </span>
                    <h3 className="headline mt-3 text-[20px] font-semibold text-ink sm:text-[24px]">
                      {project.title[locale]}
                    </h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">
                      {project.solution[locale]}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.features[locale].slice(0, 4).map((feature) => (
                        <span
                          key={feature}
                          className="rounded-md border border-line bg-surface-1 px-2.5 py-1 text-[11px] text-ink-subtle"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <p className="mt-5 text-[12px] text-ink-subtle">
                      {project.tech}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line">
        <ContactCta />
      </Section>
    </>
  );
}
