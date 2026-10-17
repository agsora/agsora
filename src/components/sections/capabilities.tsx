"use client";

import { capabilities } from "@/config/company";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CheckCircle2 } from "lucide-react";
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

      <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((group) => (
          <RevealItem key={group.title.id}>
            <div className="h-full rounded-3xl border border-line bg-surface-0 p-6 shadow-card">
              <h3 className="text-[17px] font-bold text-ink">
                {group.title[locale]}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-subtle">
                {group.description[locale]}
              </p>
              <ul className="mt-5 space-y-2.5">
                {group.items[locale].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[14px] text-ink-muted"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-positive" />
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
