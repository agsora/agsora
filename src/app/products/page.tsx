import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { ProductEcosystem } from "@/components/sections/product-ecosystem";
import { ContactCta } from "@/components/sections/contact-cta";
import { SystemIntegration } from "@/components/sections/system-integration";
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
  description: p.description,
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
      <PageHero
        breadcrumb={{ name: "Products", href: "/products" }}
        eyebrow="Product Ecosystem"
        title="Produk software AG·SORA untuk operasional yang lebih ringan"
        description="Setiap produk dirancang agar mudah digunakan sejak hari pertama, dengan paket yang bisa disesuaikan seiring pertumbuhan bisnis Anda."
      />
      <Section>
        <ProductEcosystem />
      </Section>
      <Section className="border-t border-line">
        <SystemIntegration />
      </Section>
      <Section className="pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
