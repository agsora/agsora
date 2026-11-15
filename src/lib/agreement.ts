import "server-only";
import type { SiteData } from "@/config/site-data";
import { buildContractPdf } from "@/lib/contract-pdf";
import { buildAddendumPdf } from "@/lib/handover-pdf";
import { quoteNumber, type Quote } from "@/lib/quote";
import { sbSelect } from "@/lib/supabase";

/** The agreement for a quote: the full contract, or an addendum when the quote is extra work on an earlier one. */
export async function agreementPdf(q: Quote, site: SiteData): Promise<{ pdf: Uint8Array; filename: string; title: string }> {
  if (q.parent_id) {
    const parent = (await sbSelect<Quote>("quotes", `select=*&id=eq.${q.parent_id}`))?.[0];
    if (parent) {
      const no = quoteNumber(q).replace("AGS/", "ADD/");
      return { pdf: await buildAddendumPdf(q, parent, site), filename: `Addendum-${no.replace(/\//g, "-")}.pdf`, title: `Addendum ${no}` };
    }
  }
  const no = quoteNumber(q).replace("AGS/", "PKS/");
  return { pdf: await buildContractPdf(q, site), filename: `Perjanjian-${no.replace(/\//g, "-")}.pdf`, title: `Perjanjian ${no}` };
}

export const pdfResponse = (pdf: Uint8Array, filename: string) =>
  new Response(Buffer.from(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex",
    },
  });
