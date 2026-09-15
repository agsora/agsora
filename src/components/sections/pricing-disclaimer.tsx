"use client";

import { useLocale } from "@/i18n/locale-context";

export function PricingDisclaimer() {
  const { t } = useLocale();
  return (
    <p className="border-t border-line pt-6 text-[12px] leading-relaxed text-ink-subtle">
      {t.pricingPage.disclaimer}
    </p>
  );
}
