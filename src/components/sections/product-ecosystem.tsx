"use client";

import { products } from "@/config/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { ProductCard } from "@/components/sections/product-card";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/locale-context";

export function ProductEcosystem({ compact = false }: { compact?: boolean }) {
  const { t } = useLocale();
  const items = compact ? products.slice(0, 3) : products;

  return (
    <Container className="max-w-6xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow={t.productSwitcher.eyebrow}
          title={t.productSwitcher.title}
          description={t.productSwitcher.description}
        />
        {compact ? (
          <Button href="/products" variant="outline" size="sm" className="shrink-0">
            {t.productSwitcher.seeAll}
          </Button>
        ) : null}
      </div>

      <div className="mt-10 flex flex-col gap-16">
        {items.map((product, i) => (
          <ProductCard product={product} index={i} key={product.id} />
        ))}
      </div>
    </Container>
  );
}
