"use client";

import { products } from "@/config/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { ProductCard } from "@/components/sections/product-card";
import { Button } from "@/components/ui/button";

export function ProductEcosystem({ compact = false }: { compact?: boolean }) {
  const items = compact ? products.slice(0, 3) : products;

  return (
    <Container className="max-w-6xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Product Ecosystem"
          title="Produk SaaS AG·SORA yang siap digunakan"
          description="Bukan sekadar jasa development — AG·SORA juga menghadirkan produk software yang terus dikembangkan dan didukung penuh."
        />
        {compact ? (
          <Button href="/products" variant="outline" size="sm" className="shrink-0">
            Lihat Semua Produk
          </Button>
        ) : null}
      </div>

      <div className="mt-14 flex flex-col gap-4">
        {items.map((product, i) => (
          <ProductCard product={product} index={i} key={product.id} />
        ))}
      </div>
    </Container>
  );
}
