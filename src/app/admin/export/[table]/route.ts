import { getSession } from "@/lib/admin-auth";
import { queryLeads } from "@/lib/leads-db";
import { sbSelect } from "@/lib/supabase";

const TABLES = ["leads", "quotes", "invoices", "expenses"] as const;

/** One CSV cell: objects become JSON, quotes are doubled, and formula-looking text is neutralised for Excel. */
function cell(v: unknown) {
  if (v === null || v === undefined) return "";
  let s = typeof v === "object" ? JSON.stringify(v) : String(v);
  if (/^[=+\-@]/.test(s)) s = `'${s}`;
  return /[",\n\r;]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

/** Owner-only CSV backup of a dashboard table (UTF-8 with BOM so Excel shows Indonesian text correctly). */
export async function GET(_: Request, { params }: { params: Promise<{ table: string }> }) {
  const session = await getSession();
  if (!session || session.role !== "owner") return new Response("Unauthorized", { status: 401 });
  const table = (await params).table as (typeof TABLES)[number];
  if (!TABLES.includes(table)) return new Response("Not found", { status: 404 });

  const rows: Record<string, unknown>[] =
    table === "leads" ? ((await queryLeads("select=*&order=id.asc&limit=10000")) ?? []) : ((await sbSelect<Record<string, unknown>>(table, "select=*&order=id.asc&limit=10000")) ?? []);
  // The client link token is a secret; never put it in a file that gets passed around.
  const columns = [...new Set(rows.flatMap((r) => Object.keys(r)))].filter((c) => c !== "share_token");
  const csv = [columns.join(","), ...rows.map((r) => columns.map((c) => cell(r[c])).join(","))].join("\r\n");
  const stamp = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });
  return new Response(`﻿${csv}`, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="agsora-${table}-${stamp}.csv"`,
      "Cache-Control": "private, no-store",
    },
  });
}
