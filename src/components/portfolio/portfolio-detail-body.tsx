"use client";

import Link from "@/i18n/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Box,
  Calculator,
  ChartColumn,
  CircleCheck,
  Clock,
  Crown,
  DoorOpen,
  Languages,
  LayoutTemplate,
  ListChecks,
  MessageCircle,
  Music,
  Receipt,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sunrise,
  TrendingUp,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { ContactCta } from "@/components/sections/contact-cta";
import { BrowserFrame, PhoneFrame } from "@/components/portfolio/frames";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { getProject, portfolioStrings, projects } from "@/config/portfolio";
import { industries } from "@/config/industries";
import { services } from "@/config/services";
import { useLocale } from "@/i18n/locale-context";

const featureIcons: Record<string, LucideIcon> = {
  trending: TrendingUp,
  cart: ShoppingCart,
  calculator: Calculator,
  check: ListChecks,
  receipt: Receipt,
  chart: ChartColumn,
  shield: ShieldCheck,
  layout: LayoutTemplate,
  door: DoorOpen,
  clock: Clock,
  box: Box,
  sunrise: Sunrise,
  music: Music,
  phone: Smartphone,
  whatsapp: MessageCircle,
  languages: Languages,
};

const roleIcons = [Crown, ShieldCheck, UserRound];

export function PortfolioDetailBody({ slug }: { slug: string }) {
  const { locale, t } = useLocale();
  const s = portfolioStrings[locale];
  const project = getProject(slug)!;
  const industry = industries.find((i) => i.slug === project.industry);
  const projectServices = services.filter((x) =>
    project.services.includes(x.id),
  );
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const contactHref = `/contact?from=/portofolio/${project.slug}`;

  return (
    <>
      <PageHero
        trail={[
          { name: t.nav.portfolio, href: "/portofolio" },
          { name: project.name, href: `/portofolio/${project.slug}` },
        ]}
        eyebrow={project.category[locale]}
        title={project.headline[locale]}
        description={project.summary[locale]}
      >
        <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 sm:grid-cols-4">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-subtle">
              {s.client}
            </dt>
            <dd className="mt-1.5 text-[14px] font-semibold text-ink">
              {project.client}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-subtle">
              {s.industry}
            </dt>
            <dd className="mt-1.5 text-[14px] font-semibold text-ink">
              {industry ? (
                <Link
                  href={`/industries/${industry.slug}`}
                  className="focus-ring underline-offset-4 hover:underline"
                >
                  {industry.name[locale]}
                </Link>
              ) : (
                project.category[locale]
              )}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-subtle">
              {s.year}
            </dt>
            <dd className="mt-1.5 text-[14px] font-semibold text-ink">
              {project.year}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-subtle">
              {s.services}
            </dt>
            <dd className="mt-1.5 flex flex-col gap-0.5 text-[14px] font-semibold text-ink">
              {projectServices.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className="focus-ring underline-offset-4 hover:underline"
                >
                  {service.title[locale]}
                </Link>
              ))}
            </dd>
          </div>
        </dl>
        {project.concept ? (
          <p className="mt-8 max-w-2xl rounded-2xl border border-line bg-surface-1 px-5 py-4 text-[14px] leading-relaxed text-ink-muted">
            <span className="mr-2 rounded-full bg-ink px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-surface-0">
              {s.conceptTag}
            </span>
            {s.conceptNote}
          </p>
        ) : null}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {project.liveUrl ? (
            <Button
              href={project.liveUrl}
              external
              size="lg"
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              {s.visitSite}
            </Button>
          ) : null}
          <Button
            href={contactHref}
            size="lg"
            variant="outline"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            {s.ctaSimilar}
          </Button>
        </div>
      </PageHero>

      {/* Cover: desktop window with the phone shot overlapping its corner. */}
      <Section className="relative overflow-hidden pb-10 md:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[70%]"
          style={{
            background: `radial-gradient(60% 70% at 50% 0%, ${project.accent}26, transparent 75%)`,
          }}
        />
        <Container className="relative max-w-6xl">
          <div className="relative pb-8 pr-8 sm:pb-12 sm:pr-20">
            <BrowserFrame
              image={project.cover}
              locale={locale}
              url={project.liveUrl}
              sizes="(min-width: 1152px) 1000px, 92vw"
              priority
            />
            {project.mobile[0] ? (
              <PhoneFrame
                image={project.mobile[0]}
                locale={locale}
                className="absolute bottom-0 right-0 w-[24%] min-w-[92px] max-w-[220px]"
              />
            ) : null}
          </div>
        </Container>
      </Section>

      <Section className="pt-0 md:pt-0">
        <Container className="max-w-6xl">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
            {project.stats.map((stat) => (
              <div
                key={stat.label.en}
                className="flex flex-col-reverse bg-surface-0 px-6 py-7 md:px-8"
              >
                <dt className="mt-2 text-[13px] text-ink-muted">
                  {stat.label[locale]}
                </dt>
                <dd className="text-[40px] font-extrabold leading-none tracking-tight text-gradient md:text-[48px]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section className="bg-surface-1">
        <Container className="max-w-6xl">
          <Eyebrow>{s.challengeEyebrow}</Eyebrow>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-line bg-surface-0 p-7 shadow-card md:p-9">
              <h2 className="headline text-[26px] font-bold text-ink md:text-[30px]">
                {s.challengeTitle}
              </h2>
              <p className="mt-4 text-pretty text-[15px] leading-relaxed text-ink-muted md:text-[16px]">
                {project.challenge[locale]}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-navy p-7 text-white ring-1 ring-white/10 md:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full blur-[90px]"
                style={{ background: `${project.accent}55` }}
              />
              <h2 className="headline relative text-[26px] font-bold md:text-[30px]">
                {s.solutionTitle}
              </h2>
              <p className="relative mt-4 text-pretty text-[15px] leading-relaxed text-white/75 md:text-[16px]">
                {project.solution[locale]}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-6xl">
          <SectionHeading eyebrow={s.featuresEyebrow} title={s.featuresTitle} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.features.map((feature) => {
              const Icon = featureIcons[feature.icon] ?? CircleCheck;
              return (
                <div
                  key={feature.title.en}
                  className="group rounded-3xl border border-line bg-surface-0 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-line-strong"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/15 text-accent transition-colors group-hover:bg-ink group-hover:text-surface-0">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[16px] font-bold text-ink">
                    {feature.title[locale]}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                    {feature.text[locale]}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {project.roles?.length ? (
        <Section className="bg-surface-1">
          <Container className="max-w-6xl">
            <SectionHeading eyebrow={s.rolesEyebrow} title={s.rolesTitle} />
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {project.roles.map((role, i) => {
                const Icon = roleIcons[i] ?? UserRound;
                return (
                  <div
                    key={role.name.en}
                    className="flex flex-col rounded-3xl border border-line bg-surface-0 p-7 shadow-card"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-surface-0">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-[36px] font-extrabold leading-none tracking-tight text-gradient">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 text-[19px] font-bold text-ink">
                      {role.name[locale]}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                      {role.text[locale]}
                    </p>
                    <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                      {role.items.map((item) => (
                        <li
                          key={item.en}
                          className="flex gap-2.5 text-[14px] text-ink"
                        >
                          <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-positive" />
                          {item[locale]}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section className={project.roles?.length ? undefined : "bg-surface-1"}>
        <Container className="max-w-6xl">
          <SectionHeading eyebrow={s.galleryEyebrow} title={s.galleryTitle} />
          <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2">
            {project.gallery.map((image) => (
              <figure key={image.src}>
                <BrowserFrame
                  image={image}
                  locale={locale}
                  url={project.liveUrl}
                  sizes="(min-width: 1152px) 520px, (min-width: 768px) 46vw, 92vw"
                  className="shadow-card"
                />
                <figcaption className="mt-3 text-[13px] text-ink-muted">
                  {image.caption[locale]}
                </figcaption>
              </figure>
            ))}
          </div>

          {project.mobile.length ? (
            <div className="mt-16 grid items-center gap-10 rounded-[2rem] border border-line bg-surface-1 p-8 md:grid-cols-[1fr_auto] md:p-12">
              <div>
                <h3 className="headline text-[26px] font-bold text-ink md:text-[30px]">
                  {s.mobileTitle}
                </h3>
                <ul className="mt-4 space-y-1.5">
                  {project.mobile.map((image) => (
                    <li key={image.src} className="text-[14px] text-ink-muted">
                      {image.caption[locale]}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center gap-5">
                {project.mobile.map((image, i) => (
                  <PhoneFrame
                    key={image.src}
                    image={image}
                    locale={locale}
                    className={
                      i % 2 ? "w-36 translate-y-6 sm:w-44" : "w-36 sm:w-44"
                    }
                  />
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </Section>

      <Section className="bg-surface-1">
        <Container className="max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <SectionHeading eyebrow={s.stackEyebrow} title={s.stackTitle} />
              <ul className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line bg-surface-0 px-3.5 py-1.5 font-mono text-[12px] text-ink"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading
                eyebrow={s.outcomesEyebrow}
                title={s.outcomesTitle}
              />
              <ul className="mt-8 space-y-3">
                {project.outcomes.map((outcome) => (
                  <li
                    key={outcome.en}
                    className="flex gap-3 rounded-2xl border border-line bg-surface-0 p-5 text-[15px] leading-relaxed text-ink"
                  >
                    <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    {outcome[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {others.length ? (
        <Section>
          <Container className="max-w-6xl">
            <SectionHeading title={s.otherProjects} />
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((other) => (
                <ProjectCard key={other.slug} project={other} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section className={others.length ? "pt-0" : undefined}>
        <Container className="max-w-6xl">
          <Link
            href="/portofolio"
            className="focus-ring mb-12 inline-flex items-center gap-2 text-[14px] font-semibold text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            {s.backToPortfolio}
          </Link>
        </Container>
        <ContactCta />
      </Section>
    </>
  );
}
