"use client";

import { ArrowRight, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { checklistStrings } from "@/config/checklist";
import { useLocale } from "@/i18n/locale-context";

/** Promo card for the free vendor-selection checklist. */
export function ChecklistBanner() {
  const { locale } = useLocale();
  const b = checklistStrings[locale].banner;
  return (
    <Container className="max-w-6xl">
      <div className="flex flex-col gap-6 rounded-lg border border-line bg-surface-1 p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line bg-surface-0 text-accent">
            <ListChecks className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-[17px] font-semibold text-ink">{b.title}</h2>
            <p className="mt-1.5 max-w-xl text-[14px] leading-relaxed text-ink-muted">{b.description}</p>
          </div>
        </div>
        <Button href="/checklist" size="md" icon={<ArrowRight className="h-4 w-4" />} className="shrink-0">
          {b.button}
        </Button>
      </div>
    </Container>
  );
}
