import { getSession } from "@/lib/admin-auth";
import { quoteNumber, type Quote } from "@/lib/quote";
import { buildContractPdf } from "@/lib/contract-pdf";
import { getSiteData } from "@/lib/site-content";
import { sbSelect } from "@/lib/supabase";

/** Download the client service agreement (PDF) for an approved quote. Owner: any quote; sales: their own. Drafts and pending quotes are refused. */
export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) return new Response("Unauthorized", { status: 401 });

  const id = Number((await params).id);
  if (!Number.isInteger(id) || id <= 0) return new Response("Not found", { status: 404 });

  const q = (await sbSelect<Quote>("quotes", `select=*&id=eq.${id}`))?.[0];
  if (!q || (session.role === "sales" && q.sales_id !== session.id)) return new Response("Not found", { status: 404 });
  if (q.status !== "approved" && q.status !== "sent") return new Response("Penawaran belum disetujui", { status: 403 });

  const pdf = await buildContractPdf(q, await getSiteData());
  return new Response(Buffer.from(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="Perjanjian-${quoteNumber(q).replace(/\//g, "-")}.pdf"`,
      "Cache-Control": "private, no-store",
    },
  });
}
