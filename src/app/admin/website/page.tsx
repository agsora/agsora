import { services } from "@/config/services";
import { getSiteData } from "@/lib/site-content";
import { AdminShell, adminGate } from "../shell";
import { ContactForm, PricingEditor, ProposalForm, ServicePricesForm } from "./forms";

export default async function WebsiteSettingsPage() {
  const gate = await adminGate();
  if (gate) return gate;
  const data = await getSiteData();

  const card = (title: string, note: string, body: React.ReactNode) => (
    <section className="sn-card" style={{ marginBottom: "1.5rem" }}>
      <div className="sn-card-header">
        <h3 className="sn-card-title">{title}</h3>
      </div>
      <p className="sn-muted" style={{ padding: "0 1.5rem 1rem" }}>
        {note}
      </p>
      {body}
    </section>
  );

  return (
    <AdminShell active="website" title="Atur Website" subtitle="Harga, kontak, dan isi proposal. Perubahan langsung tampil di agsora.tech">
      {card(
        "Daftar harga layanan",
        "Dipakai di halaman Harga, kalkulator estimasi, formulir kontak, daftar item penawaran sales, dan proposal PDF.",
        <PricingEditor items={data.pricing} />
      )}
      {card(
        "Harga Mulai dari per layanan",
        "Tampil di beranda, halaman layanan, dan chat WhatsApp di website.",
        <ServicePricesForm services={services.map((s) => ({ id: s.id, title: s.title.id }))} prices={data.servicePrices} />
      )}
      {card("Kontak & media sosial", "Tampil di footer, header, halaman kontak, dan data terstruktur Google.", <ContactForm contact={data.contact} />)}
      {card("Isi proposal (filosofi AG·SORA)", "Bagian filosofi, pilar, tahapan kerja, dan komitmen pada PDF proposal.", <ProposalForm proposal={data.proposal} />)}
    </AdminShell>
  );
}
