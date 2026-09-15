"use client";

import { Globe, Layers, Zap, ShieldCheck, type LucideIcon } from "lucide-react";
import { customDevPricing, type PricingCategory } from "@/config/pricing";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { useLocale } from "@/i18n/locale-context";

const categoryIcons: Record<PricingCategory, LucideIcon> = {
  "Website & Digital": Globe,
  "Sistem Bisnis": Layers,
  "Automation & Integrasi": Zap,
  "Support & Enterprise": ShieldCheck,
};

const categories = Array.from(
  new Set(customDevPricing.map((item) => item.category))
);

export function CustomDevPricing() {
  const { t } = useLocale();
  const categoryLabels: Record<PricingCategory, string> = {
    "Website & Digital": t.pricingCategories.websiteDigital,
    "Sistem Bisnis": t.pricingCategories.businessSystems,
    "Automation & Integrasi": t.pricingCategories.automationIntegration,
    "Support & Enterprise": t.pricingCategories.supportEnterprise,
  };

  return (
    <div className="space-y-14">
      {categories.map((category) => {
        const Icon = categoryIcons[category];
        const items = customDevPricing.filter((i) => i.category === category);
        return (
          <div key={category}>
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-surface-1 text-accent">
                <Icon className="h-3.5 w-3.5" />
              </div>
              <h3 className="text-[14px] font-medium text-ink">
                {categoryLabels[category]}
              </h3>
            </div>

            <RevealGroup className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <RevealItem key={item.id}>
                  <div
                    id={item.id}
                    className="group h-full scroll-mt-24 rounded-lg border border-line bg-surface-1 p-5 transition-colors hover:border-line-strong hover:bg-surface-2"
                  >
                    <p className="text-[13px] text-ink-muted">{item.name}</p>
                    <p className="mt-3 text-[20px] font-semibold tabular-nums text-ink">
                      {item.price}
                      {item.unit ? (
                        <span className="text-[12px] font-normal text-ink-subtle">
                          {" "}
                          {item.unit}
                        </span>
                      ) : null}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        );
      })}
    </div>
  );
}
