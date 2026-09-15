"use client";

import { capabilities } from "@/config/company";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { useLocale } from "@/i18n/locale-context";

export function Capabilities() {
  const { t, locale } = useLocale();
  return (
    <Container className="max-w-6xl">
      <SectionHeading
        eyebrow={t.capabilitiesSection.eyebrow}
        title={t.capabilitiesSection.title}
        description={t.capabilitiesSection.description}
      />

      <RevealGroup className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((group) => (
          <RevealItem key={group.title.id}>
            <div className="border-t border-line pt-5">
              <h3 className="text-[14px] font-medium text-ink">
                {group.title[locale]}
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-ink-subtle">
                {group.description[locale]}
              </p>
              <ul className="mt-5 space-y-2.5">
                {group.items[locale].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] text-ink-muted"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  );
}
