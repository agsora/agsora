import { customDevPricing } from "@/config/pricing";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function CustomDevPricing() {
  return (
    <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {customDevPricing.map((item) => (
        <RevealItem key={item.id}>
          <div
            id={item.id}
            className="scroll-mt-28 flex h-full flex-col justify-between rounded-2xl border border-surface-border bg-white p-5 transition-colors hover:border-blue/30"
          >
            <p className="text-sm font-medium text-navy-2">{item.name}</p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-xs text-muted-2">
                {item.price === "Custom Quote" ? "" : "Mulai"}
              </span>
            </div>
            <p className="mt-1 text-xl font-bold text-navy">
              {item.price}
              {item.unit ? (
                <span className="ml-1 text-sm font-medium text-muted-2">
                  {item.unit}
                </span>
              ) : null}
            </p>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
