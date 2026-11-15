"use client";

import Image from "next/image";
import Link from "@/i18n/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, CircleAlert, MonitorPlay } from "lucide-react";
import { Breadcrumbs, breadcrumbSchema } from "@/components/ui/breadcrumbs";
import { PostCard } from "@/components/sections/post-card";
import { ContactCta } from "@/components/sections/contact-cta";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/config/blog";
import { clients } from "@/config/clients";
import { industries } from "@/config/industries";
import { industryDetails, industryStrings } from "@/config/industry-details";
import { industryUi, industryVisuals } from "@/config/industry-visuals";
import { TEMPLATES } from "@/config/templates";
import { services } from "@/config/services";
import { useLocale } from "@/i18n/locale-context";
import { jsonLd } from "@/lib/seo";

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
  const ui = industryUi[locale];
  const visual = industryVisuals[slug];
  const demo = TEMPLATES.find((x) => x.slug === visual?.demo);
  const crumbs = [
    { name: t.breadcrumbHome, href: "/" },
    { name: t.nav.industries, href: "/industries" },
    { name: industry.name[locale], href: `/industries/${industry.slug}` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", ...breadcrumbSchema(crumbs, locale) }) }} />
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_60%_80%_at_20%_0%,black,transparent)]" />
          <div className="absolute -left-32 top-10 h-[320px] w-[320px] rounded-full bg-gold/20 blur-[110px]" />
        </div>
        <Container className="relative grid max-w-6xl items-center gap-10 pb-14 pt-10 md:pb-20 md:pt-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Breadcrumbs items={crumbs} label={t.breadcrumbLabel} />
            <p className="mt-10 inline-flex items-center gap-2 rounded-full border border-line bg-surface-0 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
              <Icon className="h-3.5 w-3.5" />
              {industry.name[locale]}
            </p>
            <h1 className="headline zh-phrases mt-6 text-balance text-[34px] font-extrabold text-ink sm:text-[42px] md:text-[48px]">{detail.h1[locale]}</h1>
            <p className="mt-5 max-w-xl text-pretty text-[16px] leading-relaxed text-ink-muted md:text-[17px]">{detail.intro[locale]}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={`/contact?from=/industries/${industry.slug}&industry=${encodeURIComponent(industry.name.en)}`}
                size="lg"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                {s.ctaPrimary}
              </Button>
              {demo ? (
                <Button href={`/contoh/${demo.slug}`} size="lg" variant="outline" icon={<MonitorPlay className="h-4 w-4" />}>
                  {ui.demoFor}
                </Button>
              ) : (
                <Button href="/industries" size="lg" variant="outline">
                  {s.ctaSecondary}
                </Button>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-navy shadow-elev">
              {visual ? (
                <Image src={visual.photo} alt={industry.name[locale]} fill unoptimized priority sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
              ) : null}
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#070b14]/70 via-transparent to-transparent" />
            </div>
            <div className="relative -mt-16 ml-4 mr-4 rounded-2xl border border-line bg-surface-0/95 p-5 shadow-elev backdrop-blur md:absolute md:-bottom-8 md:-left-8 md:mx-0 md:mt-0 md:w-[300px]">
              <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">{ui.weBuild}</div>
              <ul className="mt-3 grid gap-2">
                {detail.solutions.slice(0, 4).map((sol) => (
                  <li key={sol.title.id} className="flex items-start gap-2 text-[14px] font-medium text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {sol.title[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container className="max-w-6xl">
          <SectionHeading eyebrow={s.challengesEyebrow} title={s.challengesTitle} />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {detail.challenges.map((c) => (
              <div
                key={c.title.id}
                className="relative overflow-hidden rounded-3xl border border-line bg-surface-0 p-6 shadow-card before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-gradient-to-b before:from-gold before:to-accent"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/15 text-accent">
                    <CircleAlert className="h-5 w-5" />
                  </span>
                  <span className="text-[13px] font-bold tabular-nums text-ink-subtle">{String(detail.challenges.indexOf(c) + 1).padStart(2, "0")}</span>
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
                    unoptimized
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

      {relatedPosts.length ? (
        <Section className={industryClients.length ? "pt-0" : undefined}>
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
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {others.map((other) => {
              const OtherIcon = other.icon;
              const photo = industryVisuals[other.slug]?.photo;
              return (
                <li key={other.slug}>
                  <Link
                    href={`/industries/${other.slug}`}
                    className="focus-ring group relative flex h-24 items-end overflow-hidden rounded-2xl bg-navy p-3 text-white"
                  >
                    {photo ? <Image src={photo} alt="" fill unoptimized sizes="200px" className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-110" /> : null}
                    <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
                    <span className="relative flex items-center gap-1.5 text-[13px] font-semibold">
                      <OtherIcon className="h-3.5 w-3.5 text-gold" />
                      {other.name[locale]}
                    </span>
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
