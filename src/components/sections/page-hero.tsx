import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import {
  Breadcrumbs,
  breadcrumbSchema,
  type Crumb,
} from "@/components/ui/breadcrumbs";
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
  /** The current page; renders a Beranda → page trail plus BreadcrumbList schema. */
  breadcrumb?: Crumb;
  /** Full trail after Beranda, for pages nested deeper than one level. Overrides `breadcrumb`. */
  trail?: Crumb[];
  children?: ReactNode;
}) {
  const after = trail ?? (breadcrumb ? [breadcrumb] : null);
  const crumbs = after ? [{ name: "Beranda", href: "/" }, ...after] : null;

  return (
    <div className="glow-top relative overflow-hidden border-b border-line pb-10 pt-10 md:pb-14 md:pt-12">
      {crumbs ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              ...breadcrumbSchema(crumbs),
            }),
          }}
        />
      ) : null}
      <Container className="max-w-6xl">
        {crumbs ? (
          <div className="mb-10">
            <Breadcrumbs items={crumbs} />
          </div>
        ) : null}
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="headline mt-5 max-w-3xl text-[34px] font-semibold text-ink sm:text-[42px] md:text-[48px]">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
            {description}
          </p>
        ) : null}
        {children}
      </Container>
    </div>
  );
}
