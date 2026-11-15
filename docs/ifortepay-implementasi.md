# iFortepay: panduan implementasi untuk PT Agsora Teknologi Indonesia

Sumber: PG Services Agreement V19, Registration Form Merchant, NDA V2 (belum ditandatangani, masih template).
Ini ringkasan kerja, bukan nasihat hukum. Minta notaris/konsultan hukum membaca draf final sebelum tanda tangan.

## 1. Peran Agsora
iFortepay (PT Iforte Payment Infrastructure) adalah penyelenggara jasa pembayaran berizin Bank Indonesia (payment initiation/acquiring).
Ada dua cara Agsora memakainya:
- **A. Sebagai merchant:** Agsora menerima pembayaran klien lewat QRIS/VA/e-wallet di website sendiri.
- **B. Sebagai integrator:** Agsora memasang iFortepay di website/aplikasi klien (Integrasi Payment Gateway/QRIS di daftar harga). Setiap klien tetap harus menjadi merchant iFortepay sendiri dengan akta/NIB/NPWP-nya. Agsora hanya mengerjakan integrasi (API/Plugin WP) dan menagih jasa integrasi.

Untuk A atau B, kontrak merchant ditandatangani oleh badan usaha yang menerima uang.

## 2. Data Agsora yang sudah siap untuk formulir
| Kolom formulir | Isi |
|---|---|
| Company Registered Name | PT Agsora Teknologi Indonesia (singkatan PT AG SORA) |
| Brand Name (maks 19 karakter) | AgsoraTech atau agsora-tech |
| Domain | agsora.tech |
| Company Registered Address | Jl. Sei Tj No. 42, Sendang Sari, Kisaran Barat, Kab. Asahan, Sumut 21211 |
| Deed of Incorporation | Akta No. 147, 4 September 2026, notaris Nyak Raja, S.H., M.Kn. (Langsa) |
| Pengesahan Menkumham | AHU-0073253.AH.01.01.Tahun 2026 (10 September 2026) |
| NIB | 2109260106509 (terbit 21 September 2026) |
| NPWP | 1000 0000 1121 3027 (KPP Pratama Kisaran) |
| Type of Business | Corporation (PT, PMDN, usaha kecil) |
| Owner / PIC | Hendrik, Direktur (99%). Komisaris: Shcelin Veronica (1%) |
| Email / telepon | hello@agsora.tech / 081265593904 |
| MCC / Line of business | Jasa pengembangan software dan IT (KBLI 62199, 62191) |
| PKP atau Non-PKP | **Non-PKP** (belum dikukuhkan) |

Harus Anda siapkan sendiri:
- KTP direktur dan NPWP pribadi direktur.
- Foto lokasi kantor dan surat sewa lokasi (atau bukti kepemilikan).
- Rekening bank atas nama PT (rekening perusahaan, bukan pribadi).
- Tangkapan layar website yang sudah live.
- Logo perusahaan.
- Estimasi omzet dan transaksi per bulan (angka yang realistis dan konsisten).
- Data dari akta lengkap: daftar komisaris, direksi, dan modal.

## 3. Hal penting di perjanjian (poin yang perlu Anda pahami)
**Pajak (Pasal 18 dan Section VII formulir).** Jika salah satu pihak Non-PKP, pihak PKP menanggung kewajiban pajak pihak Non-PKP dan **berhak memotong settlement** sebesar pajak itu. Karena Agsora Non-PKP, kemungkinan ada pemotongan settlement. Tanyakan ke iFortepay berapa persen dan atas dasar apa, lalu masukkan ke harga. Jika nanti menjadi PKP, kirim SKPPKP dan aktifkan toggle PKP di Atur Website → Pajak.

**Biaya dan settlement.**
- Biaya transaksi dan pajak dipotong dari settlement. Tarif tiap kanal diisi saat negosiasi: kartu dan e-wallet dalam persen, VA dan QRIS dalam rupiah per transaksi. Semua belum termasuk PPN.
- Settlement H+2 untuk semua kanal. QRIS dibatasi Rp5.000.000 per transaksi.
- Perubahan tarif butuh pemberitahuan tertulis 30 hari (formulir). Di Pasal 6, iFortepay boleh mengubah biaya jika penyedia layanan mengubah biayanya, dengan pemberitahuan **1 hari kalender setelah perubahan berlaku**. Sebaiknya minta diubah menjadi pemberitahuan di muka.

**Risiko yang harus dikelola.**
- **Rolling reserve:** iFortepay boleh menahan sebagian settlement tiap bulan dan persentasenya bisa diubah sepihak. Sisa dikembalikan tanggal 6 bulan berikutnya. Rencanakan arus kas.
- **Security deposit** boleh diminta jika ada fraud atau transaksi terlarang. Setor dalam 14 hari, lalu top-up kembali dalam 1 hari jika dipotong.
- **Chargeback dan denda:** settlement ditahan dan dipotong, bahkan setelah 7 hari tidak diselesaikan. Denda keterlambatan 0,1% per hari dari tagihan.
- **Suspend otomatis** jika tidak ada transaksi 30 hari, dan **permanen** setelah 60 hari. Ini penting untuk website yang transaksinya sedikit.
- **Transaksi terlarang:** judi, narkotika, produk tiruan, pinjaman tidak berizin, konten dewasa, penarikan tunai kartu kredit. Jasa software Agsora aman, tetapi klien Anda juga harus bebas dari kategori ini.
- Ganti rugi iFortepay ke merchant dibatasi sebesar biaya transaksi yang sudah dibayar. Merchant tidak punya batas seimbang.
- iFortepay boleh memakai logo dan nama merchant untuk promosi.
- Jangka waktu 1 tahun, otomatis diperpanjang. Pemutusan butuh pemberitahuan 30 hari. Sengketa di BANI Jakarta dengan 3 arbiter, bahasa Indonesia. Jika versi bahasa Indonesia dan Inggris berbeda, versi Indonesia berlaku.

**Kewajiban teknis.**
- Integrasi harus memenuhi standar **SNAP** Bank Indonesia.
- Lolos uji fungsionalitas sebelum mendapat credential.
- Credential dan Dashboard tidak boleh dibagikan ke pihak lain. Penting untuk Agsora: jangan menyimpan atau memakai credential klien atas nama sendiri tanpa kontrak.
- Merchant bertanggung jawab atas keamanan website dan data pelanggan, termasuk penghapusan data atas permintaan pelanggan (kaitan dengan UU PDP).

## 4. NDA (V2)
- Berlaku 1 tahun sejak tanggal efektif. Kerahasiaan berlanjut 6 bulan sesudahnya.
- Dokumen yang diterima dari iFortepay (dokumentasi API, tarif, credential) bersifat rahasia. Jangan taruh di repo publik, README, atau halaman publik.
- Pastikan tidak ada tarif atau detail API iFortepay yang masuk ke website atau proposal klien tanpa izin.

## 5. Rencana implementasi di sistem Agsora
1. Isi formulir merchant (data di tabel di atas) dan lampirkan dokumen onboarding.
2. Negosiasikan tarif, rolling reserve, kebijakan pajak Non-PKP, dan pemberitahuan perubahan biaya.
3. Tandatangani NDA lebih dulu, baru minta dokumentasi API.
4. Setelah mendapat kunci sandbox: buat endpoint server untuk membuat transaksi dan menerima callback.
   - Simpan kunci di variabel lingkungan Vercel, bukan di repo.
   - Verifikasi tanda tangan callback sebelum mengubah status pembayaran.
   - Ikuti spesifikasi SNAP.
5. Buat tabel pembayaran di Supabase (tagihan, status, kanal, nominal, referensi iFortepay) dan hubungkan ke modul penawaran, supaya klien bisa membayar dari proposal dan status otomatis berubah menjadi lunas.
6. Uji skenario yang diminta iFortepay, lalu produksi.

Catatan: rencana ini belum dikerjakan. Spesifikasi API iFortepay belum tersedia di dokumen yang saya baca, jadi kode integrasi baru bisa ditulis setelah dokumentasi API diterima.

## 6. Penyesuaian KBLI
Kegiatan yang Anda tagih lewat sistem pembayaran sebaiknya tercakup di NIB. KBLI yang sudah aktif: 62199, 62191, 58290, 47901, 60390. Aktifkan juga yang sesuai layanan (misalnya 62209 konsultasi, 62201 keamanan siber, 63102 hosting, 85572 pelatihan, 74192 desain) agar deskripsi bisnis di formulir merchant sejalan dengan NIB.
