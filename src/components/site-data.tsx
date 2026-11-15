"use client";

import { createContext, useContext, type ReactNode } from "react";
import { defaultSiteData, type SiteData } from "@/config/site-data";

const SiteDataContext = createContext<SiteData>(defaultSiteData);

/** Editable website content (prices, contact) for client components; filled once in app/[lang]/layout. */
export function SiteDataProvider({ data, children }: { data: SiteData; children: ReactNode }) {
  return <SiteDataContext.Provider value={data}>{children}</SiteDataContext.Provider>;
}

export const useSiteData = () => useContext(SiteDataContext);
export const usePricing = () => useContext(SiteDataContext).pricing;
export const useContact = () => useContext(SiteDataContext).contact;
/** "Mulai dari" price of a service, with the codebase value as fallback. */
export function useServicePrice(id: string, fallback: number) {
  return useContext(SiteDataContext).servicePrices[id] ?? fallback;
}
