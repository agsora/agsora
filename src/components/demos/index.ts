import type { ComponentType } from "react";
import dynamic from "next/dynamic";

/** Live demo per template slug; loaded on its own so one demo never ships another's code. */
export const DEMOS: Record<string, ComponentType> = {
  korporat: dynamic(() => import("./korporat")),
  "toko-online": dynamic(() => import("./toko-online")),
  restoran: dynamic(() => import("./restoran")),
  klinik: dynamic(() => import("./klinik")),
  sekolah: dynamic(() => import("./sekolah")),
  kasir: dynamic(() => import("./kasir")),
  dashboard: dynamic(() => import("./dashboard")),
  landing: dynamic(() => import("./landing")),
};
