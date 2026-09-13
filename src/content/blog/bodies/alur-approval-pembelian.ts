import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Kepala gudang butuh sepuluh dus kertas fotokopi. Pengajuan dikirim, menunggu tanda tangan manajer yang sedang dinas luar kota tiga hari. Kertas benar-benar habis di hari kedua. Staf terpaksa membeli sendiri pakai uang pribadi, lalu repot mengurus penggantian yang juga butuh persetujuan berlapis.",
  },
  {
    type: "p",
    text: "Setiap perusahaan yang tumbuh akhirnya membutuhkan aturan tentang siapa yang boleh membeli apa dan sampai nilai berapa. Tanpa alur persetujuan, pengeluaran sulit dikendalikan dan berisiko disalahgunakan. Tetapi alur yang dirancang tanpa mempertimbangkan kelancaran operasional justru membuat pembelian sederhana tertahan berhari-hari hanya karena menunggu satu tanda tangan.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Alur persetujuan sebaiknya ditentukan oleh besarnya risiko, bukan sekadar hierarki jabatan",
      "Struktur berjenjang berdasarkan nilai pembelian mengurangi kemacetan untuk pembelian rutin",
      "Delegasi persetujuan saat penyetuju berhalangan mencegah pembelian tertahan tanpa alasan jelas",
      "Hubungkan persetujuan dengan sisa anggaran secara real-time",
      "Ukur waktu tunggu di setiap tahap untuk menemukan titik kemacetan",
    ],
  },
  { type: "h2", text: "Kenapa alur persetujuan dibutuhkan" },
  {
    type: "p",
    text: "Tanpa alur yang jelas, setiap orang bisa membeli apa saja atas nama perusahaan, dan pengeluaran menjadi sulit dipantau sampai laporan keuangan bulanan keluar — pada saat itu, uang sudah terlanjur keluar. Alur persetujuan memberi kesempatan meninjau kebutuhan, harga, dan kesesuaian anggaran sebelum komitmen dibuat, bukan sesudahnya.",
  },
  {
    type: "p",
    text: "Namun alur yang terlalu berlapis untuk semua jenis pembelian menciptakan biaya yang berbeda: waktu yang terbuang, operasional yang tersendat, dan karyawan yang mencari jalan pintas di luar sistem resmi karena proses resminya terlalu lambat.",
  },
  { type: "h2", text: "Mulai dari risiko, bukan dari jabatan" },
  {
    type: "p",
    text: "Alur persetujuan sebaiknya ditentukan oleh besarnya risiko sebuah pembelian, bukan sekadar hierarki organisasi. Pembelian rutin bernilai kecil — alat tulis, konsumsi rapat — tidak perlu melewati jalur yang sama dengan pembelian aset bernilai besar atau kontrak jasa jangka panjang.",
  },
  {
    type: "ul",
    items: [
      "Nilai pembelian, dengan batas nominal yang menentukan tingkat persetujuan",
      "Jenis barang atau jasa: rutin, aset, atau layanan jangka panjang",
      "Apakah pembelian sudah masuk dalam anggaran yang disetujui sebelumnya",
      "Pemasok baru yang belum pernah diverifikasi, atau pemasok yang sudah terdaftar",
      "Departemen yang mengajukan dan riwayat kepatuhannya terhadap kebijakan",
    ],
  },
  { type: "h2", text: "Contoh struktur berjenjang" },
  {
    type: "ol",
    items: [
      "Pembelian rutin di bawah batas tertentu dan masih dalam anggaran: cukup persetujuan kepala divisi",
      "Di atas batas pertama namun masih dalam anggaran: tambahan persetujuan bagian keuangan",
      "Di atas batas kedua atau di luar anggaran yang direncanakan: persetujuan manajemen senior",
      "Pemasok baru yang belum terverifikasi: verifikasi tambahan sebelum pesanan dibuat, terlepas dari nilainya",
    ],
  },
  {
    type: "p",
    text: "Angka batasnya berbeda untuk setiap perusahaan, tergantung skala operasional dan tingkat kepercayaan yang diberikan kepada setiap level manajemen. Yang penting, aturannya tertulis dan diterapkan konsisten di sistem, bukan diputuskan kasus per kasus berdasarkan siapa yang mengajukan.",
  },
  {
    type: "callout",
    title: "Siapkan pengganti saat penyetuju tidak ada",
    text: "Penyebab paling umum pembelian tertahan adalah penyetuju yang sedang cuti, sakit, atau dinas luar kota. Sistem sebaiknya mendukung delegasi persetujuan untuk periode tertentu — bukan menunggu penyetuju utama kembali — dan mengirim pengingat otomatis ketika pengajuan terlalu lama menunggu tanpa tindakan.",
  },
  { type: "h2", text: "Menghubungkan persetujuan dengan anggaran" },
  {
    type: "p",
    text: "Persetujuan paling berguna ketika sistem langsung menunjukkan sisa anggaran divisi saat pengajuan dibuat. Tanpa ini, penyetuju hanya menilai apakah pembelian tersebut masuk akal secara terpisah, tanpa melihat gambaran anggaran keseluruhan yang mungkin sudah hampir habis.",
  },
  {
    type: "p",
    text: "Setelah barang datang, penerimaan barang perlu dicocokkan dengan pesanan pembelian dan tagihan dari pemasok. Pencocokan tiga arah ini — pesanan, penerimaan, dan tagihan — mencegah pembayaran untuk barang yang tidak pernah benar-benar diterima, atau jumlah yang tidak sesuai dengan yang dipesan.",
  },
  { type: "h2", text: "Menangani pembelian mendesak" },
  {
    type: "p",
    text: "Beberapa kebutuhan benar-benar mendesak dan tidak bisa menunggu proses persetujuan normal — misalnya suku cadang mesin yang rusak dan menghentikan produksi. Siapkan jalur khusus untuk kondisi darurat dengan batas nilai yang wajar, disertai kewajiban melaporkan dan mendapatkan persetujuan retroaktif segera setelahnya. Tanpa jalur ini, karyawan akan mengambil jalan pintas di luar sistem saat benar-benar terdesak, dan jalan pintas itu biasanya tidak terdokumentasi sama sekali.",
  },
  { type: "h2", text: "Ilustrasi: sebelum dan sesudah" },
  {
    type: "p",
    text: "Bayangkan perusahaan distribusi dengan alur persetujuan yang mewajibkan semua pembelian, berapa pun nilainya, disetujui langsung oleh direktur. Direktur yang sibuk membuat pengajuan menumpuk berhari-hari, staf mulai membeli kebutuhan kecil dengan uang kas kecil tanpa melalui sistem, dan pengeluaran informal ini tidak pernah benar-benar terpantau.",
  },
  {
    type: "p",
    text: "Setelah alur diubah menjadi berjenjang berdasarkan nilai — kepala divisi untuk pembelian kecil, keuangan untuk menengah, direktur hanya untuk pembelian besar — pengajuan kecil selesai dalam hitungan jam. Direktur hanya menerima notifikasi untuk keputusan yang benar-benar membutuhkan perhatiannya, dan pengeluaran informal berkurang drastis karena jalur resmi jauh lebih praktis dipakai.",
  },
  { type: "h2", text: "Mengukur efektivitas alur persetujuan" },
  {
    type: "ul",
    items: [
      "Waktu rata-rata dari pengajuan hingga persetujuan, per tahap",
      "Persentase pengajuan yang tertahan lebih dari batas waktu wajar",
      "Jumlah pembelian yang dilakukan di luar sistem resmi",
      "Frekuensi pemakaian jalur darurat",
      "Selisih antara anggaran yang disetujui dan realisasi pembelian",
    ],
  },
  {
    type: "p",
    text: "Tahap yang selalu lambat dalam laporan ini adalah tanda bahwa batasnya perlu dinaikkan, penyetujunya perlu ditambah, atau prosesnya perlu disederhanakan. Data ini jauh lebih objektif daripada sekadar keluhan lisan tentang proses yang lambat.",
  },
  { type: "h2", text: "Kesalahan umum dalam merancang alur persetujuan" },
  {
    type: "ul",
    items: [
      "Mewajibkan persetujuan direktur untuk semua nilai pembelian tanpa kecuali",
      "Tidak menyiapkan delegasi saat penyetuju berhalangan",
      "Tidak menghubungkan persetujuan dengan sisa anggaran real-time",
      "Tidak menyediakan jalur darurat untuk kebutuhan mendesak",
      "Aturan yang tidak konsisten diterapkan antar divisi",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Berapa banyak tingkat persetujuan yang ideal?" },
  {
    type: "p",
    text: "Untuk sebagian besar bisnis menengah, dua hingga tiga tingkat sudah cukup: kepala divisi, keuangan, dan manajemen senior untuk nilai terbesar. Terlalu banyak tingkat membuat proses lambat tanpa menambah kontrol yang berarti.",
  },
  { type: "h3", text: "Bagaimana menangani pembelian rutin yang berulang setiap bulan?" },
  {
    type: "p",
    text: "Untuk pembelian rutin seperti langganan atau pasokan tetap, pertimbangkan persetujuan anggaran tahunan sekali di awal, sehingga transaksi bulanan berikutnya tidak perlu melalui persetujuan berulang selama masih sesuai dengan yang disetujui.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Alur approval pembelian yang baik menyeimbangkan kontrol dan kelancaran. Dengan struktur berjenjang berdasarkan risiko, delegasi yang jelas, dan hubungan langsung ke anggaran, pembelian yang wajar bisa berjalan cepat sementara pembelian berisiko tetap mendapat pengawasan yang layak.",
  },
  {
    type: "cta",
    title: "Alur persetujuan pembelian Anda masih lewat WhatsApp?",
    text: "AG·SORA ERP menyediakan alur approval pembelian yang terstruktur dan terhubung langsung dengan anggaran.",
    href: "/products#erp",
    label: "Lihat AG·SORA ERP",
  },
];
