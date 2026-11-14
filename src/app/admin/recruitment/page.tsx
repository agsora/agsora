import Link from "next/link";
import { ArrowRight, ExternalLink, XCircle } from "lucide-react";
import { CANDIDATE_STAGES, nextStage, stageLabel, type Candidate, type Job } from "@/lib/recruitment";
import { sbSelect } from "@/lib/supabase";
import { AdminShell, adminGate } from "../shell";
import { addCandidate, addJob, deleteCandidate, moveCandidate, setJobStatus, updateCandidate } from "./actions";

const whenLocal = (iso: string) =>
  new Date(iso).toLocaleString("id-ID", { timeZone: "Asia/Jakarta", dateStyle: "medium", timeStyle: "short" });

/** Value for <input type="datetime-local"> in Jakarta time. */
const inputValue = (iso: string | null) =>
  iso ? new Date(new Date(iso).getTime() + 7 * 3_600_000).toISOString().slice(0, 16) : "";

export default async function RecruitmentPage({ searchParams }: { searchParams: Promise<{ job?: string }> }) {
  const gate = await adminGate();
  if (gate) return gate;

  const { job: jobParam } = await searchParams;
  const jobs = await sbSelect<Job>("jobs", "select=*&order=created_at.desc");
  if (jobs === null) {
    return (
      <AdminShell active="recruitment" title="Rekrutmen" subtitle="Lowongan dan kandidat">
        <section className="sn-card">
          <p className="sn-empty">
            Tabel <code>jobs</code> belum bisa dibaca. Jalankan migrasi <code>20261115130000_ads_recruitment.sql</code> di Supabase.
          </p>
        </section>
      </AdminShell>
    );
  }

  const selected = jobs.find((j) => String(j.id) === jobParam) ?? jobs.find((j) => j.status === "open") ?? jobs[0];
  const candidates = selected
    ? ((await sbSelect<Candidate>("candidates", `select=*&job_id=eq.${selected.id}&order=created_at.desc&limit=500`)) ?? [])
    : [];

  return (
    <AdminShell active="recruitment" title="Rekrutmen" subtitle="Lowongan dan kandidat">
      <section className="sn-card" style={{ marginBottom: "1.5rem" }}>
        <div className="sn-card-header">
          <h3 className="sn-card-title">Lowongan</h3>
          <form action={addJob} style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <input name="title" required maxLength={160} className="sn-input" placeholder="Posisi, mis. Frontend Developer" style={{ width: "16rem" }} />
            <input name="department" maxLength={120} className="sn-input" placeholder="Divisi (opsional)" style={{ width: "11rem" }} />
            <button className="sn-btn sn-btn-primary">Tambah lowongan</button>
          </form>
        </div>
        {jobs.length === 0 ? (
          <p className="sn-empty">Belum ada lowongan. Tambahkan yang pertama di atas.</p>
        ) : (
          <div style={{ padding: "0 1.5rem 1.25rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {jobs.map((j) => (
              <Link
                key={j.id}
                href={`/admin/recruitment?job=${j.id}`}
                className={`sn-pill ${selected?.id === j.id ? "active" : ""}`}
                style={j.status === "closed" ? { opacity: 0.6 } : undefined}
              >
                {j.title}
                {j.status === "closed" ? " (ditutup)" : ""}
              </Link>
            ))}
          </div>
        )}
      </section>

      {selected ? (
        <>
          <div className="sn-card-header" style={{ padding: "0 0 1rem" }}>
            <div>
              <strong>{selected.title}</strong>
              <div className="sn-muted">
                {selected.department ? `${selected.department} · ` : ""}
                {candidates.length} kandidat
              </div>
            </div>
            <form action={setJobStatus}>
              <input type="hidden" name="id" value={selected.id} />
              <button name="status" value={selected.status === "open" ? "closed" : "open"} className="sn-btn sn-btn-sm">
                {selected.status === "open" ? "Tutup lowongan" : "Buka kembali"}
              </button>
            </form>
          </div>

          <details className="sn-card sn-edit" style={{ padding: "1rem 1.25rem", marginBottom: "1.5rem" }}>
            <summary>+ Tambah kandidat</summary>
            <form action={addCandidate} className="sn-form-grid">
              <input type="hidden" name="job_id" value={selected.id} />
              <input name="name" required maxLength={160} className="sn-input" placeholder="Nama *" />
              <input name="email" type="email" maxLength={200} className="sn-input" placeholder="Email" />
              <input name="phone" maxLength={40} className="sn-input" placeholder="WhatsApp" />
              <input name="source" maxLength={120} className="sn-input" placeholder="Sumber (JobStreet, LinkedIn, referral…)" />
              <input name="cv_url" maxLength={500} className="sn-input" placeholder="Link CV (https://…)" />
              <button className="sn-btn sn-btn-primary">Simpan kandidat</button>
            </form>
          </details>

          <div className="sn-board sn-board-wide">
            {CANDIDATE_STAGES.map((stage) => {
              const items = candidates.filter((c) => c.stage === stage);
              return (
                <div key={stage} className="sn-column">
                  <div className="sn-column-head">
                    <strong>{stageLabel[stage]}</strong>
                    <span className="sn-badge sn-new">{items.length}</span>
                  </div>
                  {items.map((c) => {
                    const next = nextStage(c.stage);
                    return (
                      <div key={c.id} className="sn-card sn-kcard">
                        <strong>{c.name}</strong>
                        <div className="sn-muted">
                          {[c.source, c.phone, c.email].filter(Boolean).join(" · ") || "–"}
                        </div>
                        {c.interview_at ? <div className="sn-note">Interview: {whenLocal(c.interview_at)}</div> : null}
                        {c.notes ? <div className="sn-note">{c.notes}</div> : null}
                        {c.cv_url ? (
                          <a className="sn-link" href={c.cv_url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8125rem" }}>
                            <ExternalLink size={12} style={{ display: "inline" }} /> Lihat CV
                          </a>
                        ) : null}
                        <form action={moveCandidate} style={{ display: "flex", gap: "0.35rem", marginTop: "0.6rem", flexWrap: "wrap" }}>
                          <input type="hidden" name="id" value={c.id} />
                          {next ? (
                            <button name="stage" value={next} className="sn-btn sn-btn-sm">
                              <ArrowRight size={12} /> {stageLabel[next]}
                            </button>
                          ) : null}
                          {c.stage !== "rejected" && c.stage !== "hired" ? (
                            <button name="stage" value="rejected" className="sn-btn sn-btn-sm">
                              <XCircle size={12} /> Tolak
                            </button>
                          ) : null}
                          {c.stage === "rejected" ? (
                            <button name="stage" value="applied" className="sn-btn sn-btn-sm">
                              Buka lagi
                            </button>
                          ) : null}
                        </form>
                        <details className="sn-edit">
                          <summary>Jadwal &amp; catatan</summary>
                          <form action={updateCandidate}>
                            <input type="hidden" name="id" value={c.id} />
                            <label>
                              Jadwal interview (WIB)
                              <input type="datetime-local" name="interview_at" className="sn-input" defaultValue={inputValue(c.interview_at)} />
                            </label>
                            <label>
                              Catatan
                              <textarea name="notes" rows={3} className="sn-input" defaultValue={c.notes ?? ""} />
                            </label>
                            <button className="sn-btn sn-btn-primary sn-btn-sm">Simpan</button>
                          </form>
                          <form action={deleteCandidate} style={{ marginTop: "0.5rem" }}>
                            <input type="hidden" name="id" value={c.id} />
                            <button className="sn-btn sn-btn-sm" style={{ color: "var(--sn-danger)" }}>
                              Hapus kandidat
                            </button>
                          </form>
                        </details>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </AdminShell>
  );
}
