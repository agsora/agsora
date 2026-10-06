"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { customDevPricing } from "@/config/pricing";
import { growth } from "@/i18n/growth";
import { useLocale } from "@/i18n/locale-context";
import { cn, formatRupiah } from "@/lib/utils";

// Quoted-per-project items have no price to add up.
const selectable = customDevPricing.filter((item) => item.price !== null);

/** Adds up the starting prices of the services a visitor ticks, then sends them to the quote form. */
export function PriceEstimator() {
  const { locale } = useLocale();
  const g = growth[locale].estimator;
  const [picked, setPicked] = useState<string[]>([]);

  const chosen = selectable.filter((item) => picked.includes(item.id));
  // Items with a unit of "/ month" are recurring; the rest are one-time.
  const monthly = chosen.filter((i) => i.id === "maintenance").reduce((sum, i) => sum + (i.price ?? 0), 0);
  const oneTime = chosen.filter((i) => i.id !== "maintenance").reduce((sum, i) => sum + (i.price ?? 0), 0);

  function toggle(id: string) {
    setPicked((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]));
  }

  return (
    <div className="rounded-lg border border-line bg-surface-1 p-6 md:p-8">
      <p className="text-[12px] uppercase tracking-[0.18em] text-ink-subtle">{g.eyebrow}</p>
      <h2 className="headline mt-3 text-[24px] font-semibold text-ink sm:text-[28px]">{g.title}</h2>
      <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-ink-muted">{g.description}</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {selectable.map((item) => {
            const on = picked.includes(item.id);
            return (
              <button
                key={item.id}
                type="button"
                role="checkbox"
                aria-checked={on}
                onClick={() => toggle(item.id)}
                className={cn(
                  "focus-ring flex items-start gap-3 rounded-md border px-3.5 py-3 text-left transition-colors",
                  on ? "border-accent bg-surface-2" : "border-line hover:border-line-strong"
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border",
                    on ? "border-accent bg-accent text-surface-0" : "border-line-strong"
                  )}
                >
                  {on ? <Check className="h-3 w-3" strokeWidth={3} /> : null}
                </span>
                <span>
                  <span className="block text-[13px] text-ink">{item.name[locale]}</span>
                  <span className="mt-0.5 block text-[12px] tabular-nums text-ink-subtle">
                    {formatRupiah(item.price ?? 0, locale)}
                    {item.unit ? ` ${item.unit[locale]}` : ""}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="self-start rounded-md border border-line bg-surface-0 p-5">
          {chosen.length === 0 ? (
            <p className="text-[13px] text-ink-subtle">{g.empty}</p>
          ) : (
            <>
              {oneTime > 0 ? (
                <div>
                  <p className="text-[12px] uppercase tracking-[0.18em] text-ink-subtle">{g.oneTime}</p>
                  <p className="mt-2 text-[26px] font-semibold tabular-nums text-ink">
                    {formatRupiah(oneTime, locale)}
                  </p>
                </div>
              ) : null}
              {monthly > 0 ? (
                <div className={oneTime > 0 ? "mt-4" : ""}>
                  <p className="text-[12px] uppercase tracking-[0.18em] text-ink-subtle">{g.monthly}</p>
                  <p className="mt-2 text-[20px] font-semibold tabular-nums text-ink">
                    {formatRupiah(monthly, locale)}
                  </p>
                </div>
              ) : null}
              <p className="mt-4 text-[12px] leading-relaxed text-ink-subtle">{g.note}</p>
              <Button
                href={`/contact?plan=${chosen.map((c) => c.id).join(",")}&from=/pricing`}
                size="md"
                className="mt-5 w-full"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                {g.cta}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
