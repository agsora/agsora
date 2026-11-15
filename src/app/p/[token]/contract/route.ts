import { agreementPdf, pdfResponse } from "@/lib/agreement";
import { quoteByToken } from "@/lib/client-portal";
import { getSiteData } from "@/lib/site-content";

/** The agreement (or addendum), available to the client only after they accepted the proposal. */
export async function GET(_: Request, { params }: { params: Promise<{ token: string }> }) {
  const q = await quoteByToken((await params).token);
  if (!q || !q.accepted_at) return new Response("Not found", { status: 404 });
  const { pdf, filename } = await agreementPdf(q, await getSiteData());
  return pdfResponse(pdf, filename);
}
