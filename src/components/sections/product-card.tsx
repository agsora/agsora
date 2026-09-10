"use client";

import { motion } from "framer-motion";
import type { Product } from "@/config/products";
import { Button } from "@/components/ui/button";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const Icon = product.icon;

  return (
    <motion.div
      id={product.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-24 rounded-lg border border-line bg-surface-1"
    >
      <div className="grid gap-10 p-7 md:grid-cols-5 md:p-9">
        <div className="md:col-span-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md border border-line bg-surface-2 text-accent">
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-[16px] font-semibold text-ink">
                {product.name}
              </h3>
              <p className="text-[12px] text-ink-subtle">{product.tagline}</p>
            </div>
          </div>

          <p className="mt-6 text-[14px] leading-relaxed text-ink-muted">
            {product.description}
          </p>

          <ul className="mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-[13px] text-ink-muted"
              >
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ink-subtle" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <Button href="/contact" size="sm">
              Coba Demo
            </Button>
            <Button href="/pricing" size="sm" variant="outline">
              Lihat Harga
            </Button>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
            Main Benefits
          </p>
          <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
            {product.benefits.map((benefit) => (
              <li key={benefit} className="text-[13px] text-ink-muted">
                {benefit}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
            Pricing
          </p>
          <div className="mt-4 divide-y divide-line border-t border-line">
            {product.tiers.map((tier) => (
              <div
                key={tier.name}
                className="flex items-baseline justify-between py-2.5"
              >
                <span className="text-[13px] text-ink-muted">{tier.name}</span>
                <span className="text-[13px] tabular-nums text-ink">
                  {tier.price}
                  <span className="text-ink-subtle">{tier.period}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
