"use client";

import { products } from "@/config/products";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/locale-context";

export function SaasPricing() {
  const { t, locale } = useLocale();
  return (
    <div className="flex flex-col gap-16">
      {products.map((product, i) => (
        <Reveal key={product.id} delay={i * 0.04}>
          <div id={`saas-${product.id}`} className="scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-line pb-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-surface-1 text-accent">
                <product.icon className="h-4 w-4" />
              </div>
              <h3 className="text-[15px] font-semibold text-ink">
                {product.name}
              </h3>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {product.tiers.map((tier, idx) => (
                <div
                  key={tier.name}
                  className={cn(
                    "relative rounded-lg border p-5",
                    idx === 1
                      ? "border-line-strong bg-surface-1"
                      : "border-line bg-surface-0"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-medium text-ink">
                      {tier.name}
                    </p>
                    {idx === 1 ? (
                      <span className="rounded-sm border border-line-strong px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-ink-subtle">
                        {t.saasPricing.popular}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-4 text-[22px] font-semibold tabular-nums text-ink">
                    {tier.price}
                    <span className="text-[13px] font-normal text-ink-subtle">
                      {tier.period}
                    </span>
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-line pt-4">
                    {product.features[locale].slice(0, idx + 2).map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-[12px] text-ink-muted"
                      >
                        <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-ink-subtle" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/contact"
                    size="sm"
                    variant={idx === 1 ? "primary" : "outline"}
                    className="mt-6 w-full justify-center"
                  >
                    {t.saasPricing.tryNow}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}

      <Reveal>
        <div className="flex flex-col items-start justify-between gap-5 rounded-lg border border-line bg-surface-1 p-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-[16px] font-semibold text-ink">
              {t.saasPricing.complexTitle}
            </h3>
            <p className="mt-2 max-w-md text-[13px] leading-relaxed text-ink-muted">
              {t.saasPricing.complexDescription}
            </p>
          </div>
          <Button href="/contact" className="shrink-0">
            {t.saasPricing.contactSales}
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
