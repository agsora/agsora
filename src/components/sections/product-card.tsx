"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { Product } from "@/config/products";
import { Button } from "@/components/ui/button";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const Icon = product.icon;

  return (
    <motion.div
      id={product.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-surface-border bg-white shadow-soft"
    >
      <div className="grid gap-8 p-6 md:grid-cols-5 md:p-10">
        <div className="md:col-span-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-cyan text-white">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy">{product.name}</h3>
              <p className="text-sm text-blue">{product.tagline}</p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-muted">
            {product.description}
          </p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-navy-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact" size="sm">
              Coba Demo
            </Button>
            <Button href="/pricing" size="sm" variant="outline">
              Lihat Harga
            </Button>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="h-full rounded-2xl bg-bg-alt p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">
              Main Benefits
            </p>
            <ul className="mt-3 space-y-2.5">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="text-sm text-navy-2">
                  {benefit}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-muted-2">
              Pricing
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {product.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="rounded-xl border border-surface-border bg-white p-3 text-center"
                >
                  <p className="text-[11px] text-muted-2">{tier.name}</p>
                  <p className="mt-1 text-sm font-bold text-navy">
                    {tier.price}
                  </p>
                  <p className="text-[10px] text-muted-2">{tier.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
