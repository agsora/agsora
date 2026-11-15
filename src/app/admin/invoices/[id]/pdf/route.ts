import { getSession } from "@/lib/admin-auth";
import { buildInvoicePdf } from "@/lib/invoice-pdf";
import { invoiceNumber, type Invoice, type Quote } from "@/lib/quote";
import { getSiteData } from "@/lib/site-content";
import { sbSelect } from "@/lib/supabase";

/** Invoice PDF for the owner. */
export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session || session.role !== "owner") return new Response("Unauthorized", { status: 401 });
  const id = Number((await params).id);
  if (!Number.isInteger(id) || id <= 0) return new Response("Not found", { status: 404 });
  const inv = (await sbSelect<Invoice>("invoices", `select=*&id=eq.${id}`))?.[0];
  const q = inv ? (await sbSelect<Quote>("quotes", `select=*&id=eq.${inv.quote_id}`))?.[0] : null;
  if (!inv || !q) return new Response("Not found", { status: 404 });
  const pdf = await buildInvoicePdf(inv, q, await getSiteData());
  return new Response(Buffer.from(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="Invoice-${invoiceNumber(inv).replace(/\//g, "-")}.pdf"`,
      "Cache-Control": "private, no-store",
    },
  });
}
