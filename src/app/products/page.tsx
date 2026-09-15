import type { Metadata } from "next";
import { ProductsBody } from "@/components/sections/products-body";
import { products } from "@/config/products";
import { siteConfig } from "@/config/site";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Produk SaaS: POS, ERP, HR, CRM & Inventory",
  description:
    "AG·SORA POS, ERP, HR, CRM, dan Inventory — software bisnis siap pakai dengan paket berlangganan mulai Rp99.000 per bulan.",
  path: "/products",
});

const productsSchema = products.map((p) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: p.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: p.description.id,
  brand: siteConfig.brandMark,
  offers: p.tiers.map((t) => ({
    "@type": "Offer",
    name: t.name,
    price: t.price.replace(/[^\d]/g, ""),
    priceCurrency: "IDR",
  })),
}));

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
      <ProductsBody />
    </>
  );
}
