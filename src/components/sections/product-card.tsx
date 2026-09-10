"use client";

import { motion } from "framer-motion";
import type { Product } from "@/config/products";
import { Button } from "@/components/ui/button";
import { ProductMockup } from "@/components/sections/product-mockup";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const Icon = product.icon;
  const flip = index % 2 === 1;

  return (
    <motion.div
      id={product.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-24 border-t border-line pt-14"
    >
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div className={flip ? "lg:order-2" : undefined}>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md border border-line bg-surface-2 text-accent">
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-[18px] font-semibold text-ink">
                {product.name}
              </h3>
              <p className="text-[12px] text-accent">{product.tagline}</p>
            </div>
          </div>

          <p className="mt-6 text-[14px] leading-relaxed text-ink-muted">
            {product.description}
          </p>

          <div className="mt-7 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                Features
              </p>
              <ul className="mt-3.5 space-y-2 border-t border-line pt-3.5">
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
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                Main Benefits
              </p>
              <ul className="mt-3.5 space-y-2 border-t border-line pt-3.5">
                {product.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2.5 text-[13px] text-ink-muted"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5">
            {product.tiers.map((tier) => (
              <div key={tier.name} className="flex items-baseline gap-1.5">
                <span className="text-[11px] text-ink-subtle">{tier.name}</span>
                <span className="text-[13px] tabular-nums text-ink">
                  {tier.price}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <Button href="/contact" size="sm">
              Coba Demo
            </Button>
            <Button href="/pricing" size="sm" variant="outline">
              Lihat Harga
            </Button>
          </div>
        </div>

        <div className={flip ? "lg:order-1" : undefined}>
          <ProductMockup id={product.id} />
        </div>
      </div>
    </motion.div>
  );
}
