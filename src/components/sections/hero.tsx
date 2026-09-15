"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { DashboardMockup } from "@/components/sections/dashboard-mockup";
import { useLocale } from "@/i18n/locale-context";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useLocale();
  return (
    <section className="glow-top relative overflow-hidden border-b border-line pb-16 pt-14 md:pb-24 md:pt-20">
      <Container className="max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
          <div>
            <p className="flex items-center gap-2.5 text-[12px] text-ink-subtle">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {t.hero.kicker}
            </p>

            {/* No entrance animation: this is the LCP element, and opacity:0 delays LCP. */}
            <h1 className="headline mt-6 text-[36px] font-semibold text-ink sm:text-[46px] md:text-[54px]">
              {t.hero.titleLead}{" "}
              <span className="text-ink-subtle">{t.hero.titleHighlight}</span>
            </h1>

            <p className="mt-7 max-w-lg text-[16px] leading-relaxed text-ink-muted">
              {t.hero.description}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="mt-8 flex flex-col gap-2.5 sm:flex-row"
            >
              <Button
                href="/contact"
                size="lg"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                {t.hero.ctaPrimary}
              </Button>
              <Button href="/services" size="lg" variant="outline">
                {t.hero.ctaSecondary}
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
