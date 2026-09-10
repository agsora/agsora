import { products } from "@/config/products";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { Check } from "lucide-react";

export function SaasPricing() {
  return (
    <div className="flex flex-col gap-14">
      {products.map((product, i) => (
        <Reveal key={product.id} delay={i * 0.05}>
          <div id={`saas-${product.id}`} className="scroll-mt-28">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-cyan text-white">
                <product.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-navy">{product.name}</h3>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {product.tiers.map((tier, idx) => (
                <div
                  key={tier.name}
                  className={
                    idx === 1
                      ? "relative rounded-2xl border-2 border-blue bg-white p-5 shadow-soft"
                      : "relative rounded-2xl border border-surface-border bg-white p-5"
                  }
                >
                  {idx === 1 ? (
                    <span className="absolute -top-3 left-5 rounded-full bg-gradient-to-r from-blue to-cyan px-3 py-1 text-[10px] font-semibold text-white">
                      Most Popular
                    </span>
                  ) : null}
                  <p className="text-sm font-semibold text-navy-2">
                    {tier.name}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-navy">
                    {tier.price}
                    <span className="text-sm font-medium text-muted-2">
                      {tier.period}
                    </span>
                  </p>
                  <ul className="mt-4 space-y-2">
                    {product.features.slice(0, idx + 2).map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-xs text-muted"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/contact"
                    size="sm"
                    variant={idx === 1 ? "primary" : "outline"}
                    className="mt-5 w-full justify-center"
                  >
                    Coba Sekarang
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}

      <Reveal>
        <div className="rounded-2xl border border-surface-border bg-navy p-8 text-center text-white">
          <h3 className="text-xl font-bold">Enterprise</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/70">
            Butuh multi-cabang, integrasi khusus, atau SLA khusus? Mari
            diskusikan kebutuhan Anda.
          </p>
          <Button href="/contact" className="mt-5">
            Contact Sales
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
