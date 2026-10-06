"use client";

import { Container } from "@/components/ui/container";
import { clients } from "@/config/clients";
import { services } from "@/config/services";
import { growth } from "@/i18n/growth";
import { useLocale } from "@/i18n/locale-context";
import { locales } from "@/i18n/routing";

/** Plain facts about the business, counted from the site's own data so they never go stale. */
export function ProofStrip() {
  const { locale } = useLocale();
  const p = growth[locale].proof;
  const items = [
    { value: `${clients.length}`, label: p.clients },
    { value: `${services.length}`, label: p.services },
    { value: `${locales.length}`, label: p.languages },
  ];
  return (
    <Container className="max-w-6xl">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="bg-surface-0 px-5 py-5">
            <dt className="sr-only">{item.label}</dt>
            <dd>
              <span className="text-[26px] font-semibold tabular-nums text-ink">{item.value}</span>
              <span className="ml-2 text-[13px] text-ink-muted">{item.label}</span>
            </dd>
          </div>
        ))}
        <div className="bg-surface-0 px-5 py-5">
          <p className="text-[13px] leading-snug text-ink-muted">{p.pricing}</p>
        </div>
      </dl>
    </Container>
  );
}
