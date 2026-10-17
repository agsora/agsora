"use client";

import Link from "@/i18n/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/config/industries";
import { industryStrings } from "@/config/industry-details";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { useLocale } from "@/i18n/locale-context";

export function IndustriesGrid() {
  const { t, locale } = useLocale();
  return (
    <Container className="max-w-6xl">
      <SectionHeading
        eyebrow={t.pageEyebrows.industries}
        title={t.industriesPage.gridTitle}
        description={t.industriesPage.gridDescription}
      />

      {/* Two columns and no description on phones: in one column the
          tiles alone ran to several screens, burying everything below them. */}
      <RevealGroup className="mt-9 grid grid-cols-2 gap-4 lg:gap-5 sm:mt-10 lg:grid-cols-3">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <RevealItem key={industry.slug}>
              <Link
                href={`/industries/${industry.slug}`}
                className="focus-ring group flex h-full flex-col rounded-3xl border border-line bg-surface-0 shadow-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-elev sm:p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-2 text-ink transition-colors group-hover:bg-ink group-hover:text-surface-0">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[14px] font-bold leading-snug text-ink sm:mt-5 sm:text-[17px]">
                  {industry.name[locale]}
                </h3>
                <p className="mt-2 hidden text-[14px] leading-relaxed text-ink-muted sm:block">
                  {industry.description[locale]}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] font-semibold text-accent opacity-80 transition-opacity group-hover:opacity-100">
                  {industryStrings[locale].gridCta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Container>
  );
}
