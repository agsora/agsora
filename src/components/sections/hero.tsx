"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { DashboardMockup } from "@/components/sections/dashboard-mockup";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="glow-top relative overflow-hidden border-b border-line pb-20 pt-20 md:pb-28 md:pt-28">
      <Container className="max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="flex items-center gap-2.5 text-[12px] text-ink-subtle"
            >
              <span className="h-1 w-1 rounded-full bg-accent" />
              PT Agsora Teknologi Indonesia
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06, ease }}
              className="headline mt-6 text-[40px] font-semibold text-ink sm:text-[52px] md:text-[60px]"
            >
              Build smarter systems.
              <br />
              <span className="text-ink-subtle">Grow without limits.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease }}
              className="mt-7 max-w-lg text-[16px] leading-relaxed text-ink-muted"
            >
              AG·SORA membangun software, sistem bisnis, dan produk digital
              yang membantu perusahaan bekerja lebih efisien, terintegrasi,
              dan scalable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease }}
              className="mt-9 flex flex-col gap-2.5 sm:flex-row"
            >
              <Button
                href="/contact"
                size="lg"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Konsultasi Gratis
              </Button>
              <Button href="/services" size="lg" variant="outline">
                Lihat Solusi
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-14 border-t border-line pt-6"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                Dua lini layanan
              </p>
              <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-ink-muted">
                <span>Custom Development</span>
                <span>Proprietary SaaS Products</span>
              </div>
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
