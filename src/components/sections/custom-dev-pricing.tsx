import { customDevPricing } from "@/config/pricing";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function CustomDevPricing() {
  return (
    <RevealGroup className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
      {customDevPricing.map((item) => (
        <RevealItem key={item.id}>
          <div
            id={item.id}
            className="flex h-full scroll-mt-24 items-baseline justify-between border-b border-r border-line px-6 py-5"
          >
            <span className="text-[13px] text-ink-muted">{item.name}</span>
            <span className="whitespace-nowrap pl-4 text-[13px] tabular-nums text-ink">
              {item.price}
              {item.unit ? (
                <span className="text-ink-subtle"> {item.unit}</span>
              ) : null}
            </span>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
