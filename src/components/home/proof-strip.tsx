"use client";

import { BadgeCheck, Globe2, Layers, Tags } from "lucide-react";
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
    { icon: BadgeCheck, value: `${clients.length}`, label: p.clients },
    { icon: Layers, value: `${services.length}`, label: p.services },
    { icon: Globe2, value: `${locales.length}`, label: p.languages },
  ];
  return (
    <Container className="max-w-6xl">
      <dl className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {items.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="rounded-3xl border border-line bg-surface-0 p-6 shadow-card md:p-7"
          >
            <Icon className="h-5 w-5 text-accent" />
            <dt className="sr-only">{label}</dt>
            <dd className="mt-5">
              <span className="block text-[40px] font-extrabold leading-none tracking-tight text-ink tabular-nums md:text-[48px]">
                {value}
              </span>
              <span className="mt-2 block text-[14px] text-ink-muted">{label}</span>
            </dd>
          </div>
        ))}
        <div className="col-span-2 flex flex-col justify-between rounded-3xl bg-navy p-6 text-white md:col-span-1 md:p-7 ring-1 ring-white/10">
          <Tags className="h-5 w-5 text-gold" />
          <p className="mt-5 text-[17px] font-semibold leading-snug">{p.pricing}</p>
        </div>
      </dl>
    </Container>
  );
}
