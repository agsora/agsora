import { pdfResponse } from "@/lib/agreement";
import { quoteByToken } from "@/lib/client-portal";
import { buildBastPdf } from "@/lib/handover-pdf";
import { quoteNumber } from "@/lib/quote";
import { getSiteData } from "@/lib/site-content";

/** Handover certificate for the client, once issued. */
export async function GET(_: Request, { params }: { params: Promise<{ token: string }> }) {
  const q = await quoteByToken((await params).token);
  if (!q?.bast_at) return new Response("Not found", { status: 404 });
  return pdfResponse(await buildBastPdf(q, await getSiteData()), `BAST-${quoteNumber(q).replace("AGS/", "").replace(/\//g, "-")}.pdf`);
}
