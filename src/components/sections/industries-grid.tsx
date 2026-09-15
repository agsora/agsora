"use client";

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
        eyebrow="Industries"
        title={t.industriesPage.gridTitle}
        description={t.industriesPage.gridDescription}
      />

      {/* Two columns and no description on phones: in one column the nine
          tiles alone ran to 2.5 screens, burying everything below them. */}
      <RevealGroup className="mt-9 grid grid-cols-2 border-l border-t border-line sm:mt-10 lg:grid-cols-3">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <RevealItem key={industry.name}>
              <div className="group h-full border-b border-r border-line p-4 transition-colors hover:bg-surface-1 sm:p-6">
                <Icon className="h-[18px] w-[18px] text-ink-subtle transition-colors group-hover:text-accent" />
                <h3 className="mt-3 text-[13px] font-medium leading-snug text-ink sm:mt-5 sm:text-[14px]">
                  {industry.name}
                </h3>
                <p className="mt-1.5 hidden text-[13px] leading-relaxed text-ink-muted sm:block">
                  {industry.description[locale]}
                </p>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Container>
  );
}
