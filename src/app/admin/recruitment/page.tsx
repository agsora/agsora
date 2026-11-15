import Link from "next/link";
import { ArrowRight, ExternalLink, FileText, Globe, UserPlus, XCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { answerLabel } from "@/config/application-form";
import { CANDIDATE_STAGES, nextStage, stageLabel, type CandidateDetail, type JobPost } from "@/lib/recruitment";
import { sbSelect } from "@/lib/supabase";
import { AdminShell, adminGate } from "../shell";
import { addCandidate, addJob, deleteCandidate, makeAgent, moveCandidate, setJobStatus, updateCandidate, updateJob } from "./actions";

const whenLocal = (iso: string) => new Date(iso).toLocaleString("id-ID", { timeZone: "Asia/Jakarta", dateStyle: "medium", timeStyle: "short" });

/** Value for <input type="datetime-local"> in Jakarta time. */
const inputValue = (iso: string | null) => (iso ? new Date(new Date(iso).getTime() + 7 * 3_600_000).toISOString().slice(0, 16) : "");

const AGENT_TEMPLATE = {
  title: "Sales Agen (Komisi)",
  department: "Penjualan",
  location: "Remote · seluruh Indonesia",
  summary: "Pasarkan website, aplikasi, dan sistem bisnis AG·SORA. Komisi 10% dari omzet bila mencapai target Rp100 juta per bulan, 5% bila di bawah target.",
};

function JobFields({ job }: { job?: JobPost }) {
  const t = job ?? null;
  return (
    <div className="sn-form-grid" style={{ marginTop: 0 }}>
      <label className="sn-field">
        Posisi *
        <input name="title" required maxLength={160} className="sn-input" defaultValue={t?.title ?? ""} placeholder="Sales Agen (Komisi)" />
      </label>
      <label className="sn-field">
        Jenis
        <select name="kind" className="sn-input" defaultValue={t?.kind ?? "agent"}>
          <option value="agent">Agen / mitra komisi</option>
          <option value="employee">Karyawan</option>
        </select>
      </label>
      <label className="sn-field">
        Divisi
        <input name="department" maxLength={120} className="sn-input" defaultValue={t?.department ?? ""} placeholder="Penjualan" />
      </label>
      <label className="sn-field">
        Lokasi
        <input name="location" maxLength={120} className="sn-input" defaultValue={t?.location ?? ""} placeholder="Remote · seluruh Indonesia" />
      </label>
      <label className="sn-field" style={{ gridColumn: "1 / -1" }}>
        Ringkasan (tampil di daftar lowongan)
        <input name="summary" maxLength={400} className="sn-input" defaultValue={t?.summary ?? ""} />
      </label>
      <label className="sn-field" style={{ gridColumn: "1 / -1" }}>
        Deskripsi & persyaratan (satu poin per baris)
        <textarea name="description" rows={5} maxLength={6000} className="sn-input" defaultValue={t?.description ?? ""} />
      </label>
      <label style={{ display: "flex", gap: "0.5rem", alignItems: "center", gridColumn: "1 / -1" }}>
        <input type="checkbox" name="published" defaultChecked={t?.published ?? true} />
        <span>Tampilkan di halaman Karier website (agsora.tech/karier)</span>
      </label>
    </div>
  );
}

export default async function RecruitmentPage({ searchParams }: { searchParams: Promise<{ job?: string; notice?: string; type?: string }> }) {
  const gate = await adminGate();
  if (gate) return gate;

  const { job: jobParam, notice, type } = await searchParams;
  const jobs = await sbSelect<JobPost>("jobs", "select=*&order=created_at.desc");
  if (jobs === null) {
    return (
      <AdminShell active="recruitment" title="Rekrutmen" subtitle="Lowongan dan kandidat">
        <section className="sn-card" style={{ padding: "1.5rem" }}>
          <h3 style={{ marginBottom: "0.5rem" }}>Tabel rekrutmen belum ada di database</h3>
          <p className="sn-muted">
            Jalankan file <code>supabase/migrations/20261118150000_sales_agents.sql</code> di Supabase → SQL Editor. File ini aman dijalankan walau migrasi lama belum pernah dijalankan.
          </p>
        </section>
      </AdminShell>
    );
  }

  const selected = jobs.find((j) => String(j.id) === jobParam) ?? jobs.find((j) => j.status === "open") ?? jobs[0];
  const candidates = selected ? ((await sbSelect<CandidateDetail>("candidates", `select=*&job_id=eq.${selected.id}&order=created_at.desc&limit=500`)) ?? []) : [];
  const fromWeb = candidates.filter((c) => c.applied_via === "web").length;

  return (
    <AdminShell active="recruitment" title="Rekrutmen" subtitle="Lowongan, lamaran dari website, dan kandidat">
      {notice ? <p className={`sn-notice ${type === "err" ? "err" : ""}`}>{notice}</p> : null}

      <div className="sn-toolbar">
        {jobs.map((j) => (
          <Link key={j.id} href={`/admin/recruitment?job=${j.id}`} className={`sn-pill ${selected?.id === j.id ? "active" : ""}`} style={j.status === "closed" ? { opacity: 0.55 } : undefined}>
            {j.title}
            {j.published && j.status === "open" ? " · web" : ""}
            {j.status === "closed" ? " (ditutup)" : ""}
          </Link>
        ))}
        <span className="spacer" />
        <a className="sn-btn sn-btn-xs" href={`${siteConfig.url}/karier`} target="_blank" rel="noopener noreferrer">
          <Globe size={12} /> Lihat halaman Karier
        </a>
      </div>

      <details className="sn-card sn-edit" style={{ padding: "1rem 1.25rem", marginBottom: "1rem" }} open={jobs.length === 0}>
        <summary>+ Lowongan baru {jobs.length === 0 ? "(mulai dari template Sales Agen)" : ""}</summary>
        <form action={addJob} style={{ display: "grid", gap: "0.75rem", marginTop: "0.75rem" }}>
          <JobFields job={jobs.length === 0 ? ({ ...AGENT_TEMPLATE, kind: "agent", published: true } as unknown as JobPost) : undefined} />
          <div>
            <button className="sn-btn sn-btn-primary">Simpan lowongan</button>
          </div>
        </form>
      </details>

      {selected ? (
        <>
          <div className="sn-kpis">
            <div className="sn-kpi">
              <div className="sn-kpi-label">Kandidat</div>
              <div className="sn-kpi-value">{candidates.length}</div>
              <div className="sn-kpi-hint">{fromWeb} melamar lewat website</div>
            </div>
            <div className="sn-kpi warn">
              <div className="sn-kpi-label">Perlu diproses</div>
              <div className="sn-kpi-value">{candidates.filter((c) => c.stage === "applied").length}</div>
              <div className="sn-kpi-hint">lamaran baru</div>
            </div>
            <div className="sn-kpi good">
              <div className="sn-kpi-label">Diterima</div>
              <div className="sn-kpi-value">{candidates.filter((c) => c.stage === "hired").length}</div>
              <div className="sn-kpi-hint">{selected.kind === "agent" ? "jadikan agen dari kartunya" : "karyawan baru"}</div>
            </div>
            <div className={`sn-kpi ${selected.published && selected.status === "open" ? "good" : "muted"}`}>
              <div className="sn-kpi-label">Status lowongan</div>
              <div className="sn-kpi-value" style={{ fontSize: "1.05rem" }}>
                {selected.status === "open" ? (selected.published ? "Tayang di web" : "Buka (internal)") : "Ditutup"}
              </div>
              <div className="sn-kpi-hint">{selected.kind === "agent" ? "Agen / mitra komisi" : "Karyawan"}</div>
            </div>
          </div>

          <div className="sn-toolbar">
            <details className="sn-edit">
              <summary>Ubah lowongan &ldquo;{selected.title}&rdquo;</summary>
              <form action={updateJob} style={{ display: "grid", gap: "0.75rem", marginTop: "0.75rem", maxWidth: "52rem" }}>
                <input type="hidden" name="job_id" value={selected.id} />
                <JobFields job={selected} />
                <div>
                  <button className="sn-btn sn-btn-primary sn-btn-sm">Simpan perubahan</button>
                </div>
              </form>
            </details>
            <span className="spacer" />
            <form action={setJobStatus}>
              <input type="hidden" name="job_id" value={selected.id} />
              <button name="status" value={selected.status === "open" ? "closed" : "open"} className="sn-btn sn-btn-xs">
                {selected.status === "open" ? "Tutup lowongan" : "Buka kembali"}
              </button>
            </form>
          </div>

          <details className="sn-card sn-edit" style={{ padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <summary>+ Tambah kandidat manual</summary>
            <form action={addCandidate} className="sn-form-grid">
              <input type="hidden" name="job_id" value={selected.id} />
              <input name="name" required maxLength={160} className="sn-input" placeholder="Nama *" />
              <input name="phone" maxLength={40} className="sn-input" placeholder="WhatsApp" />
              <input name="email" type="email" maxLength={200} className="sn-input" placeholder="Email" />
              <input name="city" maxLength={120} className="sn-input" placeholder="Kota" />
              <input name="source" maxLength={120} className="sn-input" placeholder="Sumber (Instagram, referral…)" />
              <input name="cv_url" maxLength={500} className="sn-input" placeholder="Link CV / LinkedIn (https://…)" />
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
                  {items.length === 0 ? <p className="sn-muted" style={{ padding: "0.5rem", fontSize: "0.8rem" }}>Kosong.</p> : null}
                  {items.map((c) => {
                    const next = nextStage(c.stage);
                    return (
                      <div key={c.id} className="sn-card sn-kcard">
                        <div style={{ display: "flex", gap: "0.35rem", alignItems: "center" }}>
                          <strong style={{ flex: 1 }}>{c.name}</strong>
                          {c.applied_via === "web" ? <span className="sn-badge sn-approved">web</span> : null}
                        </div>
                        <div className="sn-muted">{[c.city, c.phone, c.email, c.source].filter(Boolean).join(" · ") || "–"}</div>
                        {c.answers ? (
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem", marginTop: "0.4rem" }}>
                            {[
                              ["Jualan", answerLabel("salesYears", c.answers.salesYears)],
                              ["Waktu", answerLabel("hours", c.answers.hours)],
                              ["Kontak", answerLabel("contacts", c.answers.contacts)],
                              ["Status", answerLabel("status", c.answers.status)],
                              ["Pend.", answerLabel("education", c.answers.education)],
                              ["NPWP", answerLabel("npwp", c.answers.npwp)],
                            ]
                              .filter(([, v]) => v)
                              .map(([k, v]) => (
                                <span key={k} className="sn-badge" title={k}>
                                  {k}: {v}
                                </span>
                              ))}
                          </div>
                        ) : null}
                        {c.answers?.segments?.length ? <div className="sn-note">Segmen: {c.answers.segments.map((s) => answerLabel("segments", s)).join(", ")}</div> : null}
                        {c.answers?.products ? <div className="sn-note">Pernah menjual: {c.answers.products}</div> : null}
                        {c.experience ? <div className="sn-note">Pencapaian: {c.experience}</div> : null}
                        {c.network ? <div className="sn-note">Calon klien: {c.network}</div> : null}
                        {c.answers?.motivation ? <div className="sn-note">Motivasi: {c.answers.motivation}</div> : null}
                        {c.interview_at ? <div className="sn-note">Interview: {whenLocal(c.interview_at)}</div> : null}
                        {c.notes ? <div className="sn-note" style={{ whiteSpace: "pre-line" }}>{c.notes}</div> : null}
                        {c.answers?.files?.map((file) => (
                          <a
                            key={file.url ?? file.path}
                            className="sn-link"
                            href={file.url ?? `/admin/recruitment/file?path=${encodeURIComponent(file.path ?? "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: "0.8125rem", display: "block" }}
                            title={file.url ? "Buka di Google Drive" : "Unduh"}
                          >
                            <FileText size={12} style={{ display: "inline" }} /> {file.name.replace(/^\d{4}-\d{2}-\d{2} [^-]+ - /, "")}
                            {file.url ? " · Drive" : ""}
                          </a>
                        ))}
                        {c.cv_url ? (
                          <a className="sn-link" href={c.cv_url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8125rem" }}>
                            <ExternalLink size={12} style={{ display: "inline" }} /> CV / profil
                          </a>
                        ) : null}
                        <form action={moveCandidate} style={{ display: "flex", gap: "0.35rem", marginTop: "0.6rem", flexWrap: "wrap" }}>
                          <input type="hidden" name="id" value={c.id} />
                          <input type="hidden" name="job_id" value={selected.id} />
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
                        {selected.kind === "agent" && (c.stage === "offer" || c.stage === "hired") ? (
                          <form action={makeAgent} style={{ marginTop: "0.4rem" }}>
                            <input type="hidden" name="id" value={c.id} />
                            <input type="hidden" name="job_id" value={selected.id} />
                            <button className="sn-btn sn-btn-primary sn-btn-sm">
                              <UserPlus size={12} /> Jadikan agen
                            </button>
                          </form>
                        ) : null}
                        <details className="sn-edit">
                          <summary>Jadwal &amp; catatan</summary>
                          <form action={updateCandidate}>
                            <input type="hidden" name="id" value={c.id} />
                            <input type="hidden" name="job_id" value={selected.id} />
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
                            <input type="hidden" name="job_id" value={selected.id} />
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
