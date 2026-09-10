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
    <Container>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Launch Pricing"
          title="Accessible technology for growing businesses"
          description="Simple needs start small. Complex systems scale with your business. Ini gambaran harga mulai dari — detail lengkap ada di halaman Pricing."
        />
        <Button href="/pricing" variant="outline" className="shrink-0" icon={<ArrowRight className="h-4 w-4" />}>
          Lihat Semua Harga
        </Button>
      </div>

      <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <RevealItem key={item.id}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-surface-border bg-white p-5">
              <p className="text-sm font-medium text-navy-2">{item.name}</p>
              <div>
                <p className="mt-4 text-xs text-muted-2">Mulai dari</p>
                <p className="mt-1 text-xl font-bold text-navy">
                  {item.price}
                  {item.unit ? (
                    <span className="ml-1 text-sm font-medium text-muted-2">
                      {item.unit}
                    </span>
                  ) : null}
                </p>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.15}>
        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-surface-border bg-bg-alt p-6 sm:flex-row">
          <p className="text-sm text-muted">
            Produk SaaS AG·SORA mulai dari{" "}
            <span className="font-semibold text-navy">
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
