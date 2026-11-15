import { getSession } from "@/lib/admin-auth";
import { buildAgentAgreementPdf } from "@/lib/agent-agreement-pdf";
import { pdfResponse } from "@/lib/agreement";
import type { Agent } from "@/lib/agents";
import { getSiteData } from "@/lib/site-content";
import { sbSelect } from "@/lib/supabase";

/** The sales agency agreement for one agent (owner only). */
export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session || session.role !== "owner") return new Response("Unauthorized", { status: 401 });
  const id = Number((await params).id);
  if (!Number.isInteger(id) || id <= 0) return new Response("Not found", { status: 404 });
  const agent = (await sbSelect<Agent>("agents", `select=*&id=eq.${id}`))?.[0];
  if (!agent) return new Response("Not found", { status: 404 });
  return pdfResponse(await buildAgentAgreementPdf(agent, await getSiteData()), `Perjanjian-Agen-${agent.code}.pdf`);
}
