import { newTotpSecret, otpauthUrl, totpEnabled } from "@/lib/totp";
import { AdminShell, adminGate } from "../shell";

/** Owner security settings: two-factor login status and setup steps. */
export default async function SecurityPage() {
  const gate = await adminGate();
  if (gate) return gate;
  const on = totpEnabled();
  // A fresh suggestion on every visit; nothing is stored until the owner puts it in Vercel.
  const secret = newTotpSecret();

  return (
    <AdminShell active="security" title="Keamanan" subtitle="Verifikasi dua langkah untuk login owner">
      <section className="sn-card" style={{ padding: "1.25rem", marginBottom: "1.25rem", borderLeft: `4px solid var(--sn-${on ? "success" : "warning"})` }}>
        <h3 style={{ marginBottom: "0.4rem" }}>Verifikasi dua langkah (2FA): {on ? "aktif" : "belum aktif"}</h3>
        <p className="sn-muted">
          {on
            ? "Login owner meminta kode 6 digit dari aplikasi authenticator selain password."
            : "Saat ini login owner hanya memakai password. Aktifkan 2FA agar password yang bocor tidak cukup untuk masuk."}
        </p>
      </section>

      {!on ? (
        <section className="sn-card" style={{ padding: "1.25rem" }}>
          <h3 style={{ marginBottom: "0.6rem" }}>Cara mengaktifkan</h3>
          <ol style={{ paddingLeft: "1.2rem", display: "grid", gap: "0.5rem" }}>
            <li>Pasang Google Authenticator, Microsoft Authenticator, atau Authy di ponsel.</li>
            <li>
              Pilih tambah akun, lalu &quot;masukkan kunci penyiapan&quot;. Nama akun: <strong>AG·SORA Dashboard</strong>, kunci:
              <div style={{ margin: "0.4rem 0" }}>
                <code style={{ userSelect: "all", fontSize: "1rem", letterSpacing: "0.05em" }}>{secret}</code>
              </div>
              <span className="sn-muted">Jenis: berbasis waktu. Kunci ini dibuat acak setiap halaman dibuka dan tidak disimpan di mana pun.</span>
            </li>
            <li>
              Di Vercel → Settings → Environment Variables, tambahkan <code>OWNER_TOTP_SECRET</code> dengan kunci yang sama persis, lalu redeploy.
            </li>
            <li>Setelah deploy, login owner meminta kode 6 digit dari aplikasi tersebut.</li>
          </ol>
          <p className="sn-muted" style={{ marginTop: "0.8rem" }}>
            Simpan kunci di tempat aman (misalnya password manager). Jika ponsel hilang, hapus <code>OWNER_TOTP_SECRET</code> di Vercel untuk masuk dengan password saja, lalu siapkan ulang.
          </p>
          <p className="sn-muted" style={{ marginTop: "0.4rem", wordBreak: "break-all" }}>
            Tautan untuk aplikasi yang mendukung: <code>{otpauthUrl(secret)}</code>
          </p>
        </section>
      ) : null}

      <section className="sn-card" style={{ padding: "1.25rem", marginTop: "1.25rem" }}>
        <h3 style={{ marginBottom: "0.4rem" }}>Perlindungan lain yang sudah aktif</h3>
        <ul style={{ paddingLeft: "1.2rem" }}>
          <li>Batas percobaan login: 5 kali per 10 menit per alamat IP.</li>
          <li>Sesi berakhir otomatis setelah 12 jam; mengganti password owner mengeluarkan semua sesi owner.</li>
          <li>Dashboard tidak diindeks mesin pencari dan tidak tersedia di domain publik.</li>
          <li>Cadangan data: ekspor CSV di menu Keuangan.</li>
        </ul>
      </section>
    </AdminShell>
  );
}
