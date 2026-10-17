"use client";

import Link from "@/i18n/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { featuredServices } from "@/config/services";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HomeHeading } from "@/components/home/heading";
import { useLocale } from "@/i18n/locale-context";
import { cn, formatRupiah } from "@/lib/utils";

/** The service drawn with a gradient frame, as the one most clients start with. */
const HIGHLIGHT = "erp";

export function ServicesIndex() {
  const { t, locale } = useLocale();

  return (
    <Container className="max-w-6xl">
      <HomeHeading
        align="center"
        eyebrow={t.servicesGrid.eyebrow}
        title={t.home.servicesTitle}
        description={t.home.servicesDescription}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-5">
        {featuredServices.map((service) => {
          const Icon = service.icon;
          const highlight = service.id === HIGHLIGHT;
          return (
            <div
              key={service.id}
              className={cn(
                "rounded-3xl p-px transition-transform duration-300 hover:-translate-y-1",
                highlight ? "bg-[image:var(--gradient-text)] shadow-elev" : "bg-line"
              )}
            >
              <Link
                href={service.href}
                className="focus-ring group flex h-full flex-col rounded-[calc(1.5rem-1px)] bg-surface-0 p-6 md:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-2 text-ink transition-colors group-hover:bg-ink group-hover:text-surface-0">
                    <Icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-ink-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                </div>
                <h3 className="mt-6 text-[20px] font-bold tracking-tight text-ink">
                  {service.title[locale]}
                </h3>
                <p className="mt-2.5 flex-1 text-pretty text-[14px] leading-relaxed text-ink-muted">
                  {service.description[locale]}
                </p>
                <div className="mt-6 flex items-center justify-between rounded-2xl bg-surface-1 px-4 py-3">
                  <span className="text-[12px] text-ink-subtle">{t.servicesGrid.startingFrom}</span>
                  <span className="text-[14px] font-bold tabular-nums text-ink">
                    {formatRupiah(service.startingFrom, locale)}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <Button href="/services" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
          {t.servicesGrid.seeAll}
        </Button>
      </div>
    </Container>
  );
}
