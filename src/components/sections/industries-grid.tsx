"use client";

import Link from "@/i18n/link";
import { ArrowRight } from "lucide-react";
import { growth } from "@/i18n/growth";
import { industries } from "@/config/industries";
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

      {/* Two columns and no description on phones: in one column the nine
          tiles alone ran to 2.5 screens, burying everything below them. */}
      <RevealGroup className="mt-9 grid grid-cols-2 border-l border-t border-line sm:mt-10 lg:grid-cols-3">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <RevealItem key={industry.name.en}>
              <Link
                href={`/contact?from=/industries&industry=${encodeURIComponent(industry.name.en)}`}
                className="focus-ring group flex h-full flex-col border-b border-r border-line p-4 transition-colors hover:bg-surface-1 sm:p-6"
              >
                <Icon className="h-[18px] w-[18px] text-ink-subtle transition-colors group-hover:text-accent" />
                <h3 className="mt-3 text-[13px] font-medium leading-snug text-ink sm:mt-5 sm:text-[14px]">
                  {industry.name[locale]}
                </h3>
                <p className="mt-1.5 hidden text-[13px] leading-relaxed text-ink-muted sm:block">
                  {industry.description[locale]}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[12px] font-medium text-accent opacity-80 transition-opacity group-hover:opacity-100">
                  {growth[locale].industryCta}
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
