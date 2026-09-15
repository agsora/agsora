"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { clients } from "@/config/clients";
import { useLocale } from "@/i18n/locale-context";

// Duplicated once so the CSS animation can loop seamlessly from -50%.
const track = [...clients, ...clients];

export function ClientLogos() {
  const { t } = useLocale();
  return (
    <div className="overflow-hidden">
      <Container className="max-w-6xl">
        <Eyebrow className="text-center">{t.clientLogos.label}</Eyebrow>
      </Container>

      <div
        className="group relative mt-6 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="animate-marquee flex w-max items-center gap-3 group-hover:[animation-play-state:paused]">
          {track.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex h-16 w-36 shrink-0 items-center justify-center rounded-md border border-line bg-surface-0 px-5 grayscale transition-all duration-200 hover:grayscale-0"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={110}
                height={40}
                className="h-auto max-h-8 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
