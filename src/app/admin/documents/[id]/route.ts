import { adminQuote } from "@/lib/admin-quote";
import { documentResponse, type DocumentRow } from "@/lib/storage";
import { sbSelect } from "@/lib/supabase";

/** Download an uploaded project document; same access rule as its quote. */
export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  if (!Number.isInteger(id) || id <= 0) return new Response("Not found", { status: 404 });
  const doc = (await sbSelect<DocumentRow>("documents", `select=*&id=eq.${id}`))?.[0];
  if (!doc || !(await adminQuote(String(doc.quote_id), false))) return new Response("Not found", { status: 404 });
  return documentResponse(doc);
}
