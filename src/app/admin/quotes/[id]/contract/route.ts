import { adminQuote } from "@/lib/admin-quote";
import { agreementPdf, pdfResponse } from "@/lib/agreement";
import { getSiteData } from "@/lib/site-content";

/** The agreement for an approved quote (or the addendum, for extra work). Owner: any quote; sales: their own. */
export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const q = await adminQuote((await params).id);
  if (!q) return new Response("Not found", { status: 404 });
  const { pdf, filename } = await agreementPdf(q, await getSiteData());
  return pdfResponse(pdf, filename);
}
