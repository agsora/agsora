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
  const cv = clean(body.cvUrl, 500);
  if (!Number.isInteger(jobId) || jobId <= 0 || name.length < 2 || phone.replace(/\D/g, "").length < 9 || (email && !EMAIL.test(email))) {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return Response.json({ error: "unavailable" }, { status: 503 });
  const headers = { apikey: key, "Content-Type": "application/json" };

  // Only open, published jobs accept applications.
  const jobRes = await fetch(`${url}/rest/v1/jobs?select=id,title&id=eq.${jobId}&status=eq.open&published=eq.true`, { headers, cache: "no-store" });
  const job = jobRes.ok ? ((await jobRes.json()) as { id: number; title: string }[])[0] : undefined;
  if (!job) return Response.json({ error: "closed" }, { status: 404 });

  const res = await fetch(`${url}/rest/v1/candidates`, {
    method: "POST",
    headers: { ...headers, Prefer: "return=minimal" },
    body: JSON.stringify({
      job_id: jobId,
      name,
      phone,
      email: email || null,
      city: clean(body.city, 120) || null,
      experience: clean(body.experience, 2000) || null,
      network: clean(body.network, 2000) || null,
      // Only http(s) links are kept, so nothing like "javascript:" is ever rendered.
      cv_url: /^https?:\/\//i.test(cv) ? cv : null,
      source: clean(body.source, 120) || "Website",
      applied_via: "web",
    }),
  });
  if (!res.ok) return Response.json({ error: "failed" }, { status: 502 });

  await notifyOwner(`Lamaran baru: ${job.title}`, `${name} (${phone}${email ? `, ${email}` : ""}) melamar ${job.title} dari website.\nKota: ${clean(body.city, 120) || "-"}\n\nBuka menu Rekrutmen di dashboard untuk memproses.`);
  return Response.json({ ok: true });
}
