import { adminQuote } from "@/lib/admin-quote";
import { pdfResponse } from "@/lib/agreement";
import { buildBastPdf } from "@/lib/handover-pdf";
import { quoteNumber } from "@/lib/quote";
import { getSiteData } from "@/lib/site-content";

/** Handover certificate (BAST) once it has been issued. */
export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const q = await adminQuote((await params).id);
  if (!q?.bast_at) return new Response("Not found", { status: 404 });
  return pdfResponse(await buildBastPdf(q, await getSiteData()), `BAST-${quoteNumber(q).replace("AGS/", "").replace(/\//g, "-")}.pdf`);
}
