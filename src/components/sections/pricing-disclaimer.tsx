import { pricingDisclaimer } from "@/config/pricing";
import { Info } from "lucide-react";

export function PricingDisclaimer() {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-surface-border bg-bg-alt p-5">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
      <p className="text-xs leading-relaxed text-muted">{pricingDisclaimer}</p>
    </div>
  );
}
