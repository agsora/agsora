"use server";

import { redirect } from "next/navigation";
import { revalidatePath, updateTag } from "next/cache";
import { isAdmin } from "@/lib/admin-auth";
import { CANDIDATE_STAGES, JOBS_TAG, type CandidateDetail, type CandidateStage } from "@/lib/recruitment";
import { sbInsert, sbSelect, sbWrite } from "@/lib/supabase";

const text = (f: FormData, name: string, max: number) => {
  const v = f.get(name);
  return typeof v === "string" && v.trim() ? v.trim().slice(0, max) : null;
};
const num = (f: FormData, name: string) => {
  const n = Number(f.get(name));
  return Number.isInteger(n) && n > 0 ? n : null;
};

/** Back to the recruitment page (on the job that was being edited) with a visible result. */
function back(f: FormData, notice: string, error = false): never {
  revalidatePath("/admin/recruitment");
  const job = num(f, "job_id") ?? num(f, "return_job");
  redirect(`/admin/recruitment?${job ? `job=${job}&` : ""}notice=${encodeURIComponent(notice)}${error ? "&type=err" : ""}`);
}

const MIGRATION_HINT = "Jalankan migrasi 20261118150000_sales_agents.sql di Supabase.";

async function guard(f: FormData) {
  if (!(await isAdmin())) back(f, "Hanya owner yang bisa mengubah rekrutmen.", true);
}

/** Public job pages are cached; any change to a job refreshes them. */
const publishChanged = () => updateTag(JOBS_TAG);

export async function addJob(formData: FormData) {
  await guard(formData);
  const title = text(formData, "title", 160);
  if (!title) back(formData, "Isi nama posisi.", true);
  const made = await sbInsert<{ id: number }>("jobs", {
    title,
    department: text(formData, "department", 120),
    kind: formData.get("kind") === "agent" ? "agent" : "employee",
    location: text(formData, "location", 120),
    summary: text(formData, "summary", 400),
    description: text(formData, "description", 6000),
    published: formData.get("published") === "on",
  });
  if (!made?.length) back(formData, `Gagal menyimpan lowongan. ${MIGRATION_HINT}`, true);
  publishChanged();
  formData.set("return_job", String(made![0].id));
  back(formData, "Lowongan ditambahkan.");
}

export async function updateJob(formData: FormData) {
  await guard(formData);
  const id = num(formData, "job_id");
  const title = text(formData, "title", 160);
  if (!id || !title) back(formData, "Data lowongan tidak lengkap.", true);
  const ok = await sbWrite(
    "jobs",
    "PATCH",
    {
      title,
      department: text(formData, "department", 120),
      kind: formData.get("kind") === "agent" ? "agent" : "employee",
      location: text(formData, "location", 120),
      summary: text(formData, "summary", 400),
      description: text(formData, "description", 6000),
      published: formData.get("published") === "on",
    },
    `id=eq.${id}`,
  );
  if (ok) publishChanged();
  back(formData, ok ? "Lowongan diperbarui." : `Gagal menyimpan. ${MIGRATION_HINT}`, !ok);
}

export async function setJobStatus(formData: FormData) {
  await guard(formData);
  const id = num(formData, "job_id");
  const status = formData.get("status");
  if (!id || (status !== "open" && status !== "closed")) back(formData, "Data tidak valid.", true);
  const ok = await sbWrite("jobs", "PATCH", { status }, `id=eq.${id}`);
  if (ok) publishChanged();
  back(formData, ok ? (status === "open" ? "Lowongan dibuka kembali." : "Lowongan ditutup.") : "Gagal mengubah status.", !ok);
}

export async function addCandidate(formData: FormData) {
  await guard(formData);
  const jobId = num(formData, "job_id");
  const name = text(formData, "name", 160);
  if (!jobId || !name) back(formData, "Isi nama kandidat.", true);
  const cv = text(formData, "cv_url", 500);
  const ok = await sbWrite("candidates", "POST", {
    job_id: jobId,
    name,
    email: text(formData, "email", 200),
    phone: text(formData, "phone", 40),
    city: text(formData, "city", 120),
    // Only http(s) links, so a pasted "javascript:" URL is never rendered as a link.
    cv_url: cv && /^https?:\/\//i.test(cv) ? cv : null,
    source: text(formData, "source", 120),
  });
  back(formData, ok ? "Kandidat ditambahkan." : `Gagal menyimpan kandidat. ${MIGRATION_HINT}`, !ok);
}

export async function moveCandidate(formData: FormData) {
  await guard(formData);
  const id = num(formData, "id");
  const stage = formData.get("stage") as CandidateStage;
  if (!id || !CANDIDATE_STAGES.includes(stage)) back(formData, "Tahap tidak valid.", true);
  const ok = await sbWrite("candidates", "PATCH", { stage }, `id=eq.${id}`);
  back(formData, ok ? "Tahap kandidat diperbarui." : "Gagal memindahkan kandidat.", !ok);
}

export async function updateCandidate(formData: FormData) {
  await guard(formData);
  const id = num(formData, "id");
  if (!id) back(formData, "Data tidak valid.", true);
  const when = text(formData, "interview_at", 40);
  // <input type="datetime-local"> is Jakarta wall time without an offset.
  const interview = when ? new Date(`${when}+07:00`) : null;
  const ok = await sbWrite(
    "candidates",
    "PATCH",
    { interview_at: interview && !isNaN(interview.getTime()) ? interview.toISOString() : null, notes: text(formData, "notes", 2000) },
    `id=eq.${id}`,
  );
  back(formData, ok ? "Catatan disimpan." : "Gagal menyimpan catatan.", !ok);
}

export async function deleteCandidate(formData: FormData) {
  await guard(formData);
  const id = num(formData, "id");
  if (!id) back(formData, "Data tidak valid.", true);
  const ok = await sbWrite("candidates", "DELETE", undefined, `id=eq.${id}`);
  back(formData, ok ? "Kandidat dihapus." : "Gagal menghapus.", !ok);
}

/** A hired sales-agent candidate becomes an agent with the next free code (AG-001, AG-002…). */
export async function makeAgent(formData: FormData) {
  await guard(formData);
  const id = num(formData, "id");
  const c = id ? (await sbSelect<CandidateDetail>("candidates", `select=*&id=eq.${id}`))?.[0] : null;
  if (!c) back(formData, "Kandidat tidak ditemukan.", true);
  const existing = await sbSelect<{ id: number; code: string; candidate_id: number | null }>("agents", "select=id,code,candidate_id");
  if (existing === null) back(formData, `Tabel agen belum ada. ${MIGRATION_HINT}`, true);
  if (existing!.some((a) => a.candidate_id === c!.id)) back(formData, "Kandidat ini sudah menjadi agen.", true);
  const next = Math.max(0, ...existing!.map((a) => Number(a.code.slice(3)) || 0)) + 1;
  const code = `AG-${String(next).padStart(3, "0")}`;
  const made = await sbInsert("agents", { candidate_id: c!.id, code, name: c!.name, phone: c!.phone, email: c!.email, city: c!.city ?? null });
  if (!made) back(formData, "Gagal membuat agen.", true);
  await sbWrite("candidates", "PATCH", { stage: "hired" }, `id=eq.${c!.id}`);
  back(formData, `${c!.name} kini agen ${code}. Unduh perjanjiannya di menu Agen Sales.`);
}
