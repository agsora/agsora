"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/config/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ProductMockup } from "@/components/sections/product-mockup";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/locale-context";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProductSwitcher() {
  const { t, locale } = useLocale();
  const [activeId, setActiveId] = useState(products[0].id);
  const active = products.find((p) => p.id === activeId) ?? products[0];

  return (
    <Container className="max-w-6xl">
      <SectionHeading
        eyebrow={t.productSwitcher.eyebrow}
        title={t.productSwitcher.title}
        description={t.productSwitcher.description}
      />

      <div
        role="tablist"
        aria-label="Produk AG·SORA"
        className="mt-12 flex flex-wrap gap-1.5"
      >
        {products.map((product) => {
          const isActive = product.id === activeId;
          return (
            <button
              key={product.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActiveId(product.id)}
              className={cn(
                "focus-ring relative flex items-center gap-2 rounded-md border px-3.5 py-2 text-[13px] transition-colors",
                isActive
                  ? "border-line-strong text-ink"
                  : "border-line text-ink-muted hover:border-line-strong hover:text-ink"
              )}
            >
              {isActive ? (
                <motion.span
                  layoutId="product-tab"
                  className="absolute inset-0 rounded-md bg-surface-2"
                  transition={{ duration: 0.35, ease }}
                />
              ) : null}
              <product.icon className="relative h-3.5 w-3.5" />
              <span className="relative">{product.shortName}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:gap-10">
          <motion.div
            key={`${active.id}-info`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease }}
            className="flex flex-col"
          >
            <h3 className="text-[20px] font-semibold text-ink">
              {active.name}
            </h3>
            <p className="mt-1 text-[13px] text-accent">{active.tagline[locale]}</p>
            <p className="mt-5 text-[14px] leading-relaxed text-ink-muted">
              {active.description[locale]}
            </p>

            <ul className="mt-7 space-y-2.5 border-t border-line pt-5">
              {active.features[locale].map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-[13px] text-ink-muted"
                >
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex items-baseline gap-2 border-t border-line pt-5">
              <span className="text-[12px] text-ink-subtle">{t.servicesGrid.startingFrom}</span>
              <span className="text-[18px] font-semibold tabular-nums text-ink">
                {active.tiers[0].price}
              </span>
              <span className="text-[12px] text-ink-subtle">
                {active.tiers[0].period}
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <Button href="/contact" size="sm">
                {t.productCard.tryDemo}
              </Button>
              <Button href="/pricing" size="sm" variant="outline">
                {t.productCard.seePricing}
              </Button>
            </div>
          </motion.div>

          <motion.div
            key={`${active.id}-mockup`}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease }}
          >
            <ProductMockup id={active.id} />
          </motion.div>
      </div>
    </Container>
  );
}
