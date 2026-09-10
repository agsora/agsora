import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { ProductEcosystem } from "@/components/sections/product-ecosystem";
import { ContactCta } from "@/components/sections/contact-cta";
import { products } from "@/config/products";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "AG·SORA POS, ERP, HR, CRM, dan Inventory — produk SaaS siap pakai untuk mengelola operasional bisnis Anda.",
  alternates: { canonical: "/products" },
};

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
        eyebrow="Product Ecosystem"
        title="Produk software AG·SORA untuk operasional yang lebih ringan"
        description="Setiap produk dirancang agar mudah digunakan sejak hari pertama, dengan paket yang bisa disesuaikan seiring pertumbuhan bisnis Anda."
      />
      <Section>
        <ProductEcosystem />
      </Section>
      <Section className="bg-bg-alt pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
