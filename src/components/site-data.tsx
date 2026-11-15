"use client";

import { createContext, useContext, type ReactNode } from "react";
import { clients } from "@/config/clients";
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

/**
 * Client and service counts shown on the site: the owner's numbers from the dashboard when set, otherwise counted
 * (client logos; services in the price list, rounded down to a round "50+").
 */
export function useProofCounts() {
  const { stats, pricing } = useContext(SiteDataContext);
  const listed = pricing.filter((x) => x.price !== null).length;
  return {
    clients: stats.clients > 0 ? `${stats.clients}+` : `${clients.length}`,
    services: stats.services > 0 ? `${stats.services}+` : listed >= 20 ? `${Math.floor(listed / 10) * 10}+` : `${listed}`,
  };
}
