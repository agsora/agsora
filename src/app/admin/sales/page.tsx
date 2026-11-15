import { sbSelect } from "@/lib/supabase";
import { AdminShell, adminGate } from "../shell";
import { setSalesActive } from "./actions";
import { CreateSalesForm, ResetPasswordForm } from "./forms";

type SalesUser = { id: number; name: string; username: string; active: boolean; created_at: string };

export default async function SalesTeamPage() {
  const gate = await adminGate();
  if (gate) return gate;

  const [users, assigned] = await Promise.all([
    sbSelect<SalesUser>("sales_users", "select=id,name,username,active,created_at&order=created_at.asc"),
    sbSelect<{ assigned_to: number | null; status: string }>("leads", "select=assigned_to,status&assigned_to=not.is.null&status=in.(new,contacted)&limit=10000"),
  ]);
  const openCount = new Map<number, number>();
  for (const l of assigned ?? []) if (l.assigned_to) openCount.set(l.assigned_to, (openCount.get(l.assigned_to) ?? 0) + 1);

  return (
    <AdminShell active="sales" title="Tim Sales" subtitle="Akun login sales dan lead yang mereka pegang">
      <section className="sn-card" style={{ marginBottom: "1.5rem" }}>
        <div className="sn-card-header">
          <h3 className="sn-card-title">Tambah akun sales</h3>
        </div>
        <CreateSalesForm />
        <p className="sn-muted" style={{ padding: "0 1.5rem 1.25rem" }}>
          Berikan username dan password ke sales. Mereka masuk di halaman login yang sama dan hanya melihat lead yang kamu tugaskan.
          Tugaskan lead dari menu Leads.
        </p>
      </section>

      <section className="sn-card">
        <div className="sn-card-header">
          <h3 className="sn-card-title">Daftar sales</h3>
        </div>
        {users === null ? (
          <p className="sn-empty">
            Tabel <code>sales_users</code> belum bisa dibaca. Jalankan migrasi <code>20261116120000_sales_quotes_content.sql</code>.
          </p>
        ) : users.length === 0 ? (
          <p className="sn-empty">Belum ada akun sales.</p>
        ) : (
          <div className="sn-table-wrap">
            <table className="sn-table">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Username</th>
                  <th>Lead terbuka</th>
                  <th>Status</th>
                  <th>Ganti password</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <td>
                      <strong>{u.name}</strong>
                    </td>
                    <td>{u.username}</td>
                    <td>{openCount.get(u.id) ?? 0}</td>
                    <td>
                      <span className={`sn-badge ${u.active ? "sn-won" : "sn-lost"}`}>{u.active ? "Aktif" : "Nonaktif"}</span>
                    </td>
                    <td>
                      <ResetPasswordForm id={u.id} />
                    </td>
                    <td>
                      <form action={setSalesActive}>
                        <input type="hidden" name="id" value={u.id} />
                        <button name="active" value={u.active ? "0" : "1"} className="sn-btn sn-btn-sm">
                          {u.active ? "Nonaktifkan" : "Aktifkan"}
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </AdminShell>
  );
}
