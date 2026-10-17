"use client";

import Image from "next/image";
import { clients } from "@/config/clients";
import { useLocale } from "@/i18n/locale-context";

// Duplicated once so the CSS animation can loop seamlessly from -50%.
const track = [...clients, ...clients];

/**
 * A full-bleed navy band with the client logos running through it. The logos
 * ship with their own (mostly white) backgrounds, so each sits on a white
 * tile; grayscale until hovered keeps very different brand colours calm.
 */
export function LogoStrip() {
  const { t } = useLocale();
  return (
    <section className="border-y border-white/10 bg-navy py-7 md:py-8">
      <p className="text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-white/55">
        {t.clientLogos.label}
      </p>
      <div className="mask-fade-x group relative mt-5 overflow-hidden">
        {/* Spacing via margin, not gap: with gap, -50% is off by half a gap and the loop jumps. */}
        <div className="animate-marquee flex w-max items-center group-hover:[animation-play-state:paused]">
          {track.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              aria-hidden={i >= clients.length}
              className="mr-4 flex h-[68px] w-36 shrink-0 items-center justify-center rounded-2xl bg-white px-4 transition-transform duration-300 hover:-translate-y-0.5 [&:hover_img]:grayscale-0"
            >
              <Image
                src={client.logo}
                alt={i < clients.length ? client.name : ""}
                width={112}
                height={48}
                className="h-12 w-full object-contain mix-blend-multiply grayscale contrast-125 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
