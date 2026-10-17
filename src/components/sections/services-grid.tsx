"use client";

import Link from "@/i18n/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/config/services";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/locale-context";
import { formatRupiah } from "@/lib/utils";

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  const { t, locale } = useLocale();
  const items = compact ? services.slice(0, 6) : services;

  return (
    <Container className="max-w-6xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow={t.servicesGrid.eyebrow}
          title={t.servicesGrid.title}
          description={t.servicesGrid.description}
        />
        {compact ? (
          <Button href="/services" variant="outline" size="sm" className="shrink-0">
            {t.servicesGrid.seeAll}
          </Button>
        ) : null}
      </div>

      <RevealGroup className="mt-9 grid grid-cols-1 gap-4 lg:gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((service) => {
          const Icon = service.icon;
          return (
            <RevealItem key={service.id}>
              <Link
                href={service.href}
                className="focus-ring group flex h-full flex-col rounded-3xl border border-line bg-surface-0 shadow-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-elev sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-2 text-ink transition-colors group-hover:bg-ink group-hover:text-surface-0">
                    <Icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-ink-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                </div>
                <h3 className="mt-5 text-[18px] font-bold tracking-tight text-ink sm:mt-6">
                  {service.title[locale]}
                </h3>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-muted">
                  {service.description[locale]}
                </p>
                <p className="mt-5 flex items-center justify-between rounded-2xl bg-surface-1 px-4 py-3 text-[12px] text-ink-subtle sm:mt-6">
                  {t.servicesGrid.startingFrom}{" "}
                  <span className="text-[14px] font-bold tabular-nums text-ink">
                    {formatRupiah(service.startingFrom, locale)}
                  </span>
                </p>
              </Link>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Container>
  );
}
