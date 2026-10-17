"use client";

import { jsonLd } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import {
  Breadcrumbs,
  breadcrumbSchema,
  type Crumb,
} from "@/components/ui/breadcrumbs";
import { useLocale } from "@/i18n/locale-context";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  trail,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** The current page; renders a Home → page trail plus BreadcrumbList schema. */
  breadcrumb?: Crumb;
  /** Full trail after Home, for pages nested deeper than one level. Overrides `breadcrumb`. */
  trail?: Crumb[];
  children?: ReactNode;
}) {
  const { locale, t } = useLocale();
  const after = trail ?? (breadcrumb ? [breadcrumb] : null);
  const crumbs = after ? [{ name: t.breadcrumbHome, href: "/" }, ...after] : null;

  return (
    <div className="relative overflow-hidden border-b border-line pb-12 pt-10 md:pb-20 md:pt-14">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_60%_80%_at_80%_0%,black,transparent)]" />
        <div className="absolute -right-24 -top-32 h-[380px] w-[380px] rounded-full bg-[#3a5fb4]/15 blur-[110px]" />
        <div className="absolute -left-32 top-10 h-[320px] w-[320px] rounded-full bg-gold/20 blur-[110px]" />
      </div>
      {crumbs ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              "@context": "https://schema.org",
              ...breadcrumbSchema(crumbs, locale),
            }),
          }}
        />
      ) : null}
      <Container className="relative max-w-6xl">
        {crumbs ? (
          <div className="mb-10">
            <Breadcrumbs items={crumbs} label={t.breadcrumbLabel} />
          </div>
        ) : null}
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="headline zh-phrases mt-6 max-w-3xl text-balance text-[36px] font-extrabold text-ink sm:text-[46px] md:text-[56px]">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-pretty text-[16px] leading-relaxed text-ink-muted md:text-[18px]">
            {description}
          </p>
        ) : null}
        {children}
      </Container>
    </div>
  );
}
