import { ArrowRight } from "lucide-react";
import { customDevPricing } from "@/config/pricing";
import { products } from "@/config/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

const highlightIds = ["company-profile", "pos", "custom-software", "erp-basic"];
const highlights = customDevPricing.filter((item) => highlightIds.includes(item.id));
const saasFrom = products[0].tiers[0];

export function PricingTeaser() {
  return (
    <Container className="max-w-6xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Launch Pricing"
          title="Accessible technology for growing businesses"
          description="Simple needs start small. Complex systems scale with your business."
        />
        <Button
          href="/pricing"
          variant="outline"
          size="sm"
          className="shrink-0"
          icon={<ArrowRight className="h-3.5 w-3.5" />}
        >
          Lihat Semua Harga
        </Button>
      </div>

      <RevealGroup className="mt-10 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4 lg:border-l">
        {highlights.map((item) => (
          <RevealItem key={item.id}>
            <div className="h-full border-b border-line px-6 py-6 lg:border-r">
              <p className="text-[13px] text-ink-muted">{item.name}</p>
              <p className="mt-4 text-[11px] text-ink-subtle">Mulai dari</p>
              <p className="mt-1 text-[20px] font-semibold tabular-nums text-ink">
                {item.price}
                {item.unit ? (
                  <span className="text-[13px] font-normal text-ink-subtle">
                    {" "}
                    {item.unit}
                  </span>
                ) : null}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.12}>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-lg border border-line bg-surface-1 px-6 py-5 sm:flex-row sm:items-center">
          <p className="text-[13px] text-ink-muted">
            Produk SaaS AG·SORA mulai dari{" "}
            <span className="tabular-nums text-ink">
              {saasFrom.price}
              {saasFrom.period}
            </span>{" "}
            — tanpa perlu development dari nol.
          </p>
          <Button href="/products" size="sm" variant="outline" className="shrink-0">
            Lihat Produk SaaS
          </Button>
        </div>
      </Reveal>
    </Container>
  );
}
