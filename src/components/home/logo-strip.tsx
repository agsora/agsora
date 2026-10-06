"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { clients } from "@/config/clients";
import { useLocale } from "@/i18n/locale-context";

// Duplicated once so the CSS animation can loop seamlessly from -50%.
const track = [...clients, ...clients];

/**
 * The client logos ship with their own (mostly white) backgrounds, so each
 * sits on a white tile — uniform in both themes. Grayscale until hovered
 * keeps a row of very different brand colours calm.
 */
export function LogoStrip() {
  const { t } = useLocale();
  return (
    <section className="py-10 md:py-14">
      <Container className="flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:gap-10">
        <p className="shrink-0 font-mono text-[12px] uppercase tracking-[0.08em] text-ink-subtle md:w-36">
          {t.clientLogos.label}
        </p>
        <div className="mask-fade-x group relative min-w-0 flex-1 overflow-hidden">
          {/* Spacing via margin, not gap: with gap, -50% is off by half a gap and the loop jumps. */}
          <div className="animate-marquee flex w-max items-center group-hover:[animation-play-state:paused]">
            {track.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                aria-hidden={i >= clients.length}
                className="mr-3 flex h-[72px] w-32 shrink-0 items-center justify-center rounded-md bg-white px-3 ring-1 ring-black/5 transition-opacity duration-300 hover:opacity-100 [&:hover_img]:grayscale-0"
              >
                <Image
                  src={client.logo}
                  alt={i < clients.length ? client.name : ""}
                  width={112}
                  height={48}
                  className="h-14 w-full object-contain mix-blend-multiply grayscale contrast-125 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
