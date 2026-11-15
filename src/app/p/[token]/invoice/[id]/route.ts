import { invoicesOf, quoteByToken } from "@/lib/client-portal";
import { buildInvoicePdf } from "@/lib/invoice-pdf";
import { invoiceNumber } from "@/lib/quote";
import { getSiteData } from "@/lib/site-content";

/** One invoice of the client's quote, as PDF. */
export async function GET(_: Request, { params }: { params: Promise<{ token: string; id: string }> }) {
  const { token, id } = await params;
  const q = await quoteByToken(token);
  if (!q) return new Response("Not found", { status: 404 });
  const inv = (await invoicesOf(q.id)).find((i) => String(i.id) === id && i.status !== "void");
  if (!inv) return new Response("Not found", { status: 404 });
  const pdf = await buildInvoicePdf(inv, q, await getSiteData());
  return new Response(Buffer.from(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="Invoice-${invoiceNumber(inv).replace(/\//g, "-")}.pdf"`,
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
