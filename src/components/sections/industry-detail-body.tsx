"use client";

import Image from "next/image";
import Link from "@/i18n/link";
import { ArrowRight, ArrowUpRight, CircleAlert } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { PostCard } from "@/components/sections/post-card";
import { ContactCta } from "@/components/sections/contact-cta";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/config/blog";
import { clients } from "@/config/clients";
import { industries } from "@/config/industries";
import { industryDetails, industryStrings } from "@/config/industry-details";
import { portfolioStrings, projects } from "@/config/portfolio";
import { services } from "@/config/services";
import { useLocale } from "@/i18n/locale-context";

export function IndustryDetailBody({
  slug,
  relatedPosts,
}: {
  /** Looked up here: the industry's icon is a component and cannot cross from the server. */
  slug: string;
  /** Already filtered to this language; bodies stripped by the page. */
  relatedPosts: BlogPost[];
}) {
  const { t, locale } = useLocale();
  const industry = industries.find((i) => i.slug === slug)!;
  const detail = industryDetails[slug];
  const s = industryStrings[locale];
  const Icon = industry.icon;
  const industryClients = clients.filter((c) => detail.clients.includes(c.name));
  const others = industries.filter((i) => i.slug !== industry.slug);
  const caseStudies = projects.filter((p) => p.industry === industry.slug);

  return (
    <>
      <PageHero
        trail={[
          { name: t.nav.industries, href: "/industries" },
          { name: industry.name[locale], href: `/industries/${industry.slug}` },
        ]}
        eyebrow={industry.name[locale]}
        title={detail.h1[locale]}
        description={detail.intro[locale]}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            href={`/contact?from=/industries/${industry.slug}&industry=${encodeURIComponent(industry.name.en)}`}
            size="lg"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            {s.ctaPrimary}
          </Button>
          <Button href="/industries" size="lg" variant="outline">
            {s.ctaSecondary}
          </Button>
        </div>
      </PageHero>

      <Section>
        <Container className="max-w-6xl">
          <SectionHeading eyebrow={s.challengesEyebrow} title={s.challengesTitle} />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {detail.challenges.map((c) => (
              <div
                key={c.title.id}
                className="rounded-3xl border border-line bg-surface-0 p-6 shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/15 text-accent">
                  <CircleAlert className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-[17px] font-bold text-ink">{c.title[locale]}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{c.text[locale]}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-1">
        <Container className="max-w-6xl">
          <SectionHeading eyebrow={s.solutionsEyebrow} title={s.solutionsTitle} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {detail.solutions.map((sol, i) => {
              const service = services.find((x) => x.id === sol.service);
              return (
                <div
                  key={sol.title.id}
                  className="flex flex-col rounded-3xl border border-line bg-surface-0 p-6 shadow-card md:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[36px] font-extrabold leading-none tracking-tight text-gradient">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-5 w-5 text-ink-subtle" />
                  </div>
                  <h3 className="mt-5 text-[18px] font-bold text-ink">{sol.title[locale]}</h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-muted">
                    {sol.text[locale]}
                  </p>
                  {service ? (
                    <Link
                      href={service.href}
                      className="focus-ring group mt-5 inline-flex items-center gap-1.5 self-start rounded-full bg-surface-2 px-3.5 py-1.5 text-[13px] font-semibold text-ink transition-colors hover:bg-ink hover:text-surface-0"
                    >
                      {s.serviceLink}: {service.title[locale]}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {industryClients.length ? (
        <Section>
          <Container className="max-w-6xl">
            <h2 className="text-center text-[13px] font-semibold uppercase tracking-[0.16em] text-ink-subtle">
              {s.clientsTitle}
            </h2>
            <ul className="mt-6 flex flex-wrap justify-center gap-4">
              {industryClients.map((client) => (
                <li
                  key={client.name}
                  className="flex h-[76px] w-40 items-center justify-center rounded-2xl border border-line bg-white px-4"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={128}
                    height={56}
                    className="h-12 w-full object-contain mix-blend-multiply"
                  />
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      {caseStudies.length ? (
        <Section className={industryClients.length ? "pt-0" : undefined}>
          <Container className="max-w-6xl">
            <SectionHeading
              eyebrow={portfolioStrings[locale].eyebrow}
              title={portfolioStrings[locale].industryCaseStudies}
            />
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {relatedPosts.length ? (
        <Section className={industryClients.length || caseStudies.length ? "pt-0" : undefined}>
          <Container className="max-w-6xl">
            <SectionHeading eyebrow={s.articlesEyebrow} title={s.articlesTitle} />
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {relatedPosts.slice(0, 3).map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section className="border-t border-line">
        <Container className="max-w-6xl">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-ink-subtle">
            {s.otherIndustries}
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {others.map((other) => {
              const OtherIcon = other.icon;
              return (
                <li key={other.slug}>
                  <Link
                    href={`/industries/${other.slug}`}
                    className="focus-ring inline-flex items-center gap-2 rounded-full border border-line bg-surface-0 px-4 py-2 text-[14px] font-medium text-ink-muted transition-colors hover:border-ink hover:text-ink"
                  >
                    <OtherIcon className="h-4 w-4" />
                    {other.name[locale]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section className="pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
