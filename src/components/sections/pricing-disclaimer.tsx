import { pricingDisclaimer } from "@/config/pricing";

export function PricingDisclaimer() {
  return (
    <p className="border-t border-line pt-6 text-[12px] leading-relaxed text-ink-subtle">
      {pricingDisclaimer}
    </p>
  );
}
