"use client";

import Link from "@/i18n/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { featuredServices } from "@/config/services";
import { Container } from "@/components/ui/container";
import { HomeHeading } from "@/components/home/heading";
import { useLocale } from "@/i18n/locale-context";
import { formatRupiah } from "@/lib/utils";

export function ServicesIndex() {
  const { t, locale } = useLocale();

  return (
    <Container className="max-w-6xl">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <HomeHeading
          eyebrow={t.servicesGrid.eyebrow}
          title={t.home.servicesTitle}
          description={t.home.servicesDescription}
        />
        <Link
          href="/services"
          className="tap focus-ring group inline-flex shrink-0 items-center gap-2 text-[14px] text-ink-muted transition-colors hover:text-ink"
        >
          {t.servicesGrid.seeAll}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="mt-12 border-t border-line md:mt-16">
        {featuredServices.map((service, i) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.id}
              href={service.href}
              className="focus-ring group relative grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 border-b border-line py-6 transition-colors md:grid-cols-[3rem_minmax(0,15rem)_1fr_auto_1.5rem] md:gap-x-8 md:py-7"
            >
              <span className="hidden font-mono text-[12px] text-ink-subtle md:block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-3">
                <Icon className="h-[18px] w-[18px] shrink-0 text-ink-subtle transition-colors group-hover:text-accent" />
                <h3 className="text-[18px] font-medium tracking-tight text-ink md:text-[20px]">
                  {service.title[locale]}
                </h3>
              </div>
              <p className="col-span-2 row-start-2 text-pretty text-[14px] leading-relaxed text-ink-muted md:col-span-1 md:row-start-auto md:max-w-md">
                {service.description[locale]}
              </p>
              <span className="col-start-2 row-start-1 text-right md:col-start-auto md:row-start-auto">
                <span className="block text-[12px] text-ink-subtle">
                  {t.servicesGrid.startingFrom}
                </span>
                <span className="block text-[14px] font-medium tabular-nums text-ink">
                  {formatRupiah(service.startingFrom, locale)}
                </span>
              </span>
              <ArrowUpRight className="hidden h-5 w-5 text-ink-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink md:block" />
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
