"use client";

import Image from "next/image";
import Link from "@/i18n/link";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { BrowserFrame, PhoneFrame } from "@/components/portfolio/frames";
import { Button } from "@/components/ui/button";
import { portfolioStrings, type PortfolioProject } from "@/config/portfolio";
import { services } from "@/config/services";
import { useLocale } from "@/i18n/locale-context";

/** Grid card: the cover in a browser window on a tinted panel, then the summary. */
export function ProjectCard({ project }: { project: PortfolioProject }) {
  const { locale } = useLocale();
  const s = portfolioStrings[locale];
  return (
    <Link
      href={`/portofolio/${project.slug}`}
      className="focus-ring group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface-0 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-elev"
    >
      <div
        className="relative overflow-hidden px-6 pt-6"
        style={{
          background: `radial-gradient(120% 90% at 50% 0%, ${project.accent}33, transparent 70%)`,
        }}
      >
        {project.concept ? (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-ink px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-surface-0">
            {s.conceptTag}
          </span>
        ) : null}
        <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
          <BrowserFrame
            image={project.cover}
            locale={locale}
            url={project.liveUrl}
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
            className="rounded-b-none border-b-0"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col border-t border-line p-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-accent">
          {project.category[locale]} · {project.year}
        </p>
        <h3 className="mt-2 text-[19px] font-bold text-ink">{project.name}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-[14px] leading-relaxed text-ink-muted">
          {project.summary[locale]}
        </p>
        <div className="mt-5 flex items-center justify-between gap-3">
          {project.logo ? (
            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-line bg-white">
              <Image src={project.logo} alt={project.client} width={36} height={36} className="h-8 w-8 object-contain" />
            </span>
          ) : (
            <span className="text-[13px] text-ink-subtle">{project.client}</span>
          )}
          <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink">
            {s.viewCase}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/** Large first card on page 1: dark panel, cover plus the phone shot. */
export function FeaturedProject({ project }: { project: PortfolioProject }) {
  const { locale } = useLocale();
  const s = portfolioStrings[locale];
  const projectServices = services.filter((x) => project.services.includes(x.id));

  return (
    <article className="relative overflow-hidden rounded-[2rem] bg-navy text-white ring-1 ring-white/10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-24 -top-24 h-96 w-96 rounded-full blur-[110px]"
          style={{ background: `${project.accent}55` }}
        />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[#3a5fb4]/35 blur-[120px]" />
        <div className="bg-dots absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_70%_70%_at_70%_40%,black,transparent)]" />
      </div>

      <div className="relative grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12 lg:p-14">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            {s.featured}
          </span>
          <div className="mt-6 flex items-center gap-3">
            {project.logo ? (
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white">
                <Image src={project.logo} alt={project.client} width={44} height={44} className="h-10 w-10 object-contain" />
              </span>
            ) : null}
            <div>
              <p className="text-[13px] text-white/60">{project.client}</p>
              <p className="text-[13px] font-semibold text-gold">
                {project.category[locale]} · {project.year}
              </p>
            </div>
          </div>
          <h2 className="headline mt-6 text-balance text-[30px] font-extrabold sm:text-[38px]">
            {project.name}
          </h2>
          <p className="mt-4 text-pretty text-[15px] leading-relaxed text-white/70 md:text-[16px]">
            {project.summary[locale]}
          </p>

          <dl className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {project.stats.map((stat) => (
              <div key={stat.label.en} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <dt className="sr-only">{stat.label[locale]}</dt>
                <dd>
                  <span className="block text-[24px] font-extrabold leading-none text-white">{stat.value}</span>
                  <span className="mt-1.5 block text-[12px] leading-snug text-white/60">{stat.label[locale]}</span>
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-6 flex flex-wrap gap-2">
            {projectServices.map((service) => (
              <li
                key={service.id}
                className="rounded-full border border-white/15 px-3 py-1 text-[12px] text-white/75"
              >
                {service.title[locale]}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={`/portofolio/${project.slug}`}
              size="lg"
              icon={<ArrowRight className="h-4 w-4" />}
              className="bg-white text-navy shadow-none hover:bg-white/90"
            >
              {s.viewCase}
            </Button>
            {project.liveUrl ? (
              <Button
                href={project.liveUrl}
                external
                size="lg"
                variant="outline"
                icon={<ArrowUpRight className="h-4 w-4" />}
                className="border-white/25 bg-transparent text-white hover:border-white"
              >
                {s.visitSite}
              </Button>
            ) : null}
          </div>
        </div>

        <div className="relative pb-10 pr-6 sm:pr-14">
          <Link
            href={`/portofolio/${project.slug}`}
            tabIndex={-1}
            aria-hidden="true"
            className="block transition-transform duration-500 hover:-translate-y-1"
          >
            <BrowserFrame
              image={project.cover}
              locale={locale}
              url={project.liveUrl}
              sizes="(min-width: 1024px) 560px, 90vw"
              priority
              className="border-white/10"
            />
          </Link>
          {project.mobile[0] ? (
            <PhoneFrame
              image={project.mobile[0]}
              locale={locale}
              className="absolute -bottom-2 right-0 w-[26%] min-w-[96px] max-w-[150px]"
            />
          ) : null}
        </div>
      </div>
    </article>
  );
}

/** Closing grid tile that invites the next client. */
export function NextProjectCard() {
  const { locale } = useLocale();
  const s = portfolioStrings[locale];
  return (
    <Link
      href="/contact?from=/portofolio"
      className="focus-ring group flex min-h-[320px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-line-strong bg-surface-1/60 p-8 text-center transition-colors hover:border-accent hover:bg-surface-1"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-accent transition-transform duration-300 group-hover:scale-110">
        <Plus className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-[19px] font-bold text-ink">{s.nextSlotTitle}</h3>
      <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-ink-muted">{s.nextSlotText}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink">
        {s.nextSlotCta}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
