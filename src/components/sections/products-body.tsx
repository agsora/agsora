"use client";

import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { ProductEcosystem } from "@/components/sections/product-ecosystem";
import { ContactCta } from "@/components/sections/contact-cta";
import { SystemIntegration } from "@/components/sections/system-integration";
import { useLocale } from "@/i18n/locale-context";

export function ProductsBody() {
  const { t } = useLocale();
  return (
    <>
      <PageHero
        breadcrumb={{ name: "Products", href: "/products" }}
        eyebrow="Product Ecosystem"
        title={t.productsPage.heroTitle}
        description={t.productsPage.heroDescription}
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
