import { quoteByToken } from "@/lib/client-portal";
import { quoteNumber } from "@/lib/quote";
import { buildQuotePdf } from "@/lib/quote-pdf";
import { getSiteData } from "@/lib/site-content";

/** Proposal PDF for the client who holds the link. */
export async function GET(_: Request, { params }: { params: Promise<{ token: string }> }) {
  const q = await quoteByToken((await params).token);
  if (!q) return new Response("Not found", { status: 404 });
  const pdf = await buildQuotePdf(q, await getSiteData());
  return new Response(Buffer.from(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="Proposal-${quoteNumber(q).replace(/\//g, "-")}.pdf"`,
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
