import { quoteByToken } from "@/lib/client-portal";
import { documentResponse, documentsOf } from "@/lib/storage";

/** A document of the client's own project. */
export async function GET(_: Request, { params }: { params: Promise<{ token: string; id: string }> }) {
  const { token, id } = await params;
  const q = await quoteByToken(token);
  if (!q) return new Response("Not found", { status: 404 });
  const doc = (await documentsOf(q.id)).find((d) => String(d.id) === id);
  return doc ? documentResponse(doc) : new Response("Not found", { status: 404 });
}
