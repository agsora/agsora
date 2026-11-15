import { answerLabel, answersSummary, cleanAnswers } from "@/config/application-form";
import { notifyOwner } from "@/lib/mail";
import { clientIp, rateLimit } from "@/lib/rate-limit";

/** Job application from the careers page: stored as a candidate on the chosen open, published job. */
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!rateLimit(`apply:${clientIp(request)}`, 4, 30 * 60_000)) return Response.json({ error: "rate" }, { status: 429 });
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "bad" }, { status: 400 });
  }
  if (clean(body.website, 50)) return new Response(null, { status: 204 }); // honeypot

  const jobId = Number(body.jobId);
  const name = clean(body.name, 160);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 200);
  const city = clean(body.city, 120);
  const cv = clean(body.cvUrl, 500);
  const answers = cleanAnswers(body.answers);
  if (
    !Number.isInteger(jobId) ||
    jobId <= 0 ||
    name.length < 2 ||
    phone.replace(/\D/g, "").length < 9 ||
    (email && !EMAIL.test(email)) ||
    city.length < 2 ||
    !answers.salesYears ||
    !answers.hours ||
    body.consent !== true
  ) {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return Response.json({ error: "unavailable" }, { status: 503 });
  const headers = { apikey: key, "Content-Type": "application/json" };

  // Only open, published jobs accept applications.
  const jobRes = await fetch(`${url}/rest/v1/jobs?select=id,title,kind&id=eq.${jobId}&status=eq.open&published=eq.true`, { headers, cache: "no-store" });
  const job = jobRes.ok ? ((await jobRes.json()) as { id: number; title: string; kind?: string }[])[0] : undefined;
  if (!job) return Response.json({ error: "closed" }, { status: 404 });
  // Agents work for commission only: they must say they understand that.
  if (job.kind === "agent" && !answers.commissionOk) return Response.json({ error: "invalid" }, { status: 400 });

  const heard = answerLabel("heardFrom", answers.heardFrom);
  const source = clean(body.source, 120) || "Website";
  const row = {
    job_id: jobId,
    name,
    phone,
    email: email || null,
    city,
    experience: clean(body.experience, 2000) || null,
    network: clean(body.network, 2000) || null,
    // Only http(s) links are kept, so nothing like "javascript:" is ever rendered.
    cv_url: /^https?:\/\//i.test(cv) ? cv : null,
    source: (heard ? `${source} · ${heard}` : source).slice(0, 120),
    applied_via: "web",
  };
  const insert = (data: Record<string, unknown>) =>
    fetch(`${url}/rest/v1/candidates`, { method: "POST", headers: { ...headers, Prefer: "return=minimal" }, body: JSON.stringify(data) });

  let res = await insert({ ...row, answers });
  // The answers column comes with a migration; until it runs, keep the answers readable in the notes.
  if (!res.ok) res = await insert({ ...row, notes: answersSummary(answers).slice(0, 2000) || null });
  if (!res.ok) return Response.json({ error: "failed" }, { status: 502 });

  await notifyOwner(
    `Lamaran baru: ${job.title}`,
    `${name} (${phone}${email ? `, ${email}` : ""}) melamar ${job.title} dari website.\nKota: ${city}\n${answersSummary(answers)}\n\nBuka menu Rekrutmen di dashboard untuk memproses.`,
  );
  return Response.json({ ok: true });
}
