"use client";

import type { ReactNode } from "react";
import { Breadcrumbs, breadcrumbSchema, type Crumb } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { useLocale } from "@/i18n/locale-context";
import { jsonLd } from "@/lib/seo";

/**
 * The navy hero used by the main menu pages (industries, services, about, contact): gold eyebrow, large headline,
 * soft glows and a faint grid. Emits the BreadcrumbList data like PageHero does.
 */
export function DarkHero({
  trail,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  /** Crumbs after Home. */
  trail: Crumb[];
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  const { t, locale } = useLocale();
  const crumbs = [{ name: t.breadcrumbHome, href: "/" }, ...trail];
  return (
    <section className={`relative overflow-hidden bg-navy text-white ${className}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", ...breadcrumbSchema(crumbs, locale) }) }} />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gold/20 blur-[140px]" />
        <div className="absolute -left-40 bottom-[-14rem] h-[480px] w-[480px] rounded-full bg-[#3a5fb4]/30 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_70%_at_70%_20%,black,transparent)]" />
      </div>
      <Container className="relative max-w-6xl pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="[&_a:hover]:text-white [&_a]:text-white/60 [&_li]:text-white/50 [&_span]:text-white/70">
          <Breadcrumbs items={crumbs} label={t.breadcrumbLabel} />
        </div>
        <p className="mt-10 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {eyebrow}
        </p>
        <h1 className="headline zh-phrases mt-6 max-w-3xl text-balance text-[38px] font-extrabold leading-[1.05] sm:text-[50px] md:text-[60px]">{title}</h1>
        {description ? <p className="mt-6 max-w-2xl text-pretty text-[16px] leading-relaxed text-white/70 md:text-[18px]">{description}</p> : null}
        {children}
      </Container>
    </section>
  );
}

/** Three figures in a glass strip, for the dark hero. */
export function HeroStats({ items }: { items: [string, string][] }) {
  return (
    <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
      {items.map(([n, l]) => (
        <div key={l} className="bg-navy/80 px-4 py-4 backdrop-blur md:px-6">
          <dt className="sr-only">{l}</dt>
          <dd>
            <span className="block text-[24px] font-extrabold tabular-nums text-white md:text-[32px]">{n}</span>
            <span className="text-[12px] text-white/60 md:text-[13px]">{l}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
