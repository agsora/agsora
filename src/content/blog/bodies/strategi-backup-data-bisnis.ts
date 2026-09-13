import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Laptop admin keuangan terkena ransomware Jumat sore. File yang terenkripsi termasuk data pelanggan tiga tahun terakhir. Ada backup, katanya. Ternyata backup terakhir yang berhasil adalah delapan bulan lalu — folder tujuan backup sudah penuh sejak saat itu dan tidak ada yang memperhatikan notifikasi errornya.",
  },
  {
    type: "p",
    text: "Server rusak, ransomware, karyawan tidak sengaja menghapus data, atau layanan cloud yang bermasalah — penyebab kehilangan data beragam, dan sebagian besar tidak bisa diprediksi kapan terjadinya. Yang bisa dikendalikan adalah seberapa siap bisnis Anda ketika itu terjadi. Artikel ini membahas strategi backup yang benar-benar bisa diandalkan, bukan sekadar rutinitas yang dijalankan tanpa pernah diuji.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Aturan 3-2-1 adalah pedoman dasar: tiga salinan, dua media berbeda, satu lokasi terpisah",
      "Tentukan berapa banyak data yang boleh hilang dan berapa lama pemulihan boleh berlangsung",
      "Backup yang tidak pernah diuji belum tentu bisa dipulihkan saat dibutuhkan",
      "Lindungi dari ransomware dengan salinan yang tidak bisa diubah untuk periode tertentu",
      "Jangan lupakan data di luar server utama: laptop, email, dan layanan cloud",
    ],
  },
  { type: "h2", text: "Kenapa backup sering diabaikan sampai terlambat" },
  {
    type: "p",
    text: "Backup adalah salah satu hal yang mudah ditunda karena manfaatnya tidak terasa sampai benar-benar dibutuhkan. Selama tidak ada masalah, backup terasa seperti biaya dan pekerjaan tambahan yang tidak menghasilkan apa-apa. Begitu masalah terjadi, backup menjadi satu-satunya hal yang menentukan apakah bisnis bisa pulih dalam hitungan jam atau kehilangan data penting selamanya.",
  },
  { type: "h2", text: "Prinsip 3-2-1" },
  {
    type: "p",
    text: "Pedoman yang banyak dipakai dan terbukti efektif adalah aturan 3-2-1, yang sederhana untuk diingat dan diterapkan:",
  },
  {
    type: "ul",
    items: [
      "Simpan setidaknya tiga salinan data — data asli plus dua salinan",
      "Di dua jenis media atau penyimpanan yang berbeda, misalnya server lokal dan cloud",
      "Dengan satu salinan berada di lokasi yang secara fisik terpisah dari yang lain",
    ],
  },
  {
    type: "p",
    text: "Tujuannya sederhana: satu kejadian — kebakaran, kerusakan perangkat, pencurian, atau serangan siber — tidak menghapus semua salinan sekaligus. Jika hanya ada satu salinan cadangan yang tersimpan di komputer yang sama dengan data aslinya, itu bukan strategi backup yang aman.",
  },
  { type: "h2", text: "Tentukan berapa banyak data yang boleh hilang" },
  {
    type: "p",
    text: "Pertanyaan yang lebih berguna daripada sekadar “seberapa sering backup?” adalah: jika terjadi masalah sekarang, data berapa jam atau berapa hari terakhir yang masih bisa ditoleransi hilang? Ini disebut recovery point objective dalam istilah teknis, tapi konsepnya sederhana — jawaban untuk sistem kasir yang ramai transaksi setiap menit berbeda dengan jawaban untuk arsip dokumen yang jarang berubah.",
  },
  {
    type: "p",
    text: "Sistem dengan transaksi tinggi mungkin membutuhkan backup setiap beberapa jam, atau bahkan replikasi real-time. Dokumen administratif yang jarang berubah mungkin cukup dengan backup harian atau mingguan. Frekuensi backup sebaiknya mengikuti jawaban ini, bukan ditentukan sembarangan.",
  },
  { type: "h2", text: "Tentukan seberapa cepat harus pulih" },
  {
    type: "p",
    text: "Selain data yang hilang, perhatikan berapa lama bisnis sanggup berhenti beroperasi sebelum kerugiannya menjadi signifikan. Memulihkan data dari penyimpanan jarak jauh atau cloud bisa memakan waktu berjam-jam tergantung volumenya. Untuk sistem yang kritis bagi operasional harian, rencana pemulihan perlu dirancang agar sesuai dengan toleransi waktu henti yang bisa diterima bisnis Anda.",
  },
  {
    type: "callout",
    title: "Backup yang tidak pernah diuji belum tentu berfungsi",
    text: "Masalah yang paling sering ditemukan bukan ketiadaan backup, melainkan backup yang ternyata tidak lengkap, rusak, atau tidak bisa dipulihkan saat benar-benar dibutuhkan. Lakukan uji pemulihan secara berkala ke lingkungan terpisah, dan catat berapa lama prosesnya benar-benar memakan waktu — bukan hanya berasumsi backup berjalan lancar karena tidak ada notifikasi error.",
  },
  { type: "h2", text: "Lindungi dari ransomware" },
  {
    type: "p",
    text: "Ransomware modern sering menargetkan tidak hanya data utama, tetapi juga backup yang terus-menerus terhubung ke sistem yang sama — sehingga backup ikut terenkripsi bersama data aslinya. Setidaknya satu salinan sebaiknya terpisah secara jaringan (air-gapped) atau tidak bisa diubah untuk periode tertentu (immutable), sehingga tetap aman meski sistem utama berhasil diserang.",
  },
  { type: "h2", text: "Jangan lupakan data di luar server utama" },
  {
    type: "p",
    text: "Data bisnis tidak hanya ada di server pusat. Periksa juga laptop karyawan yang menyimpan file kerja lokal, akun email yang berisi komunikasi penting, dokumen di layanan penyimpanan online yang mungkin tidak ikut ter-backup otomatis, dan konfigurasi sistem yang sulit dibangun ulang dari nol. Data yang tidak masuk daftar inventaris hampir pasti tidak ikut di-backup, dan baru disadari hilang setelah terlambat.",
  },
  { type: "h2", text: "Ilustrasi: uji pemulihan yang menyelamatkan bisnis" },
  {
    type: "p",
    text: "Bayangkan sebuah perusahaan distribusi yang rutin melakukan backup harian ke layanan cloud. Suatu hari, server utama mengalami kerusakan perangkat keras yang parah. Tim IT mereka, yang sebelumnya rutin menguji pemulihan setiap tiga bulan, tahu persis langkah-langkah yang harus dilakukan dan berapa lama waktunya. Sistem pulih dalam waktu empat jam, dan bisnis kembali berjalan hari itu juga.",
  },
  {
    type: "p",
    text: "Bandingkan dengan perusahaan lain yang juga rutin backup tapi tidak pernah mengujinya. Ketika insiden serupa terjadi, mereka baru menyadari sebagian file backup rusak dan proses pemulihan yang seharusnya beberapa jam menjadi berhari-hari karena tim harus mencari cara memperbaiki file yang korup sambil bisnis terhenti total.",
  },
  { type: "h2", text: "Tetapkan penanggung jawab" },
  {
    type: "p",
    text: "Backup yang menjadi tanggung jawab semua orang biasanya tidak benar-benar dikerjakan siapa pun secara konsisten. Tentukan secara eksplisit siapa yang memantau backup berjalan setiap hari, siapa yang melakukan uji pemulihan berkala, dan ke mana laporan kegagalan backup dikirim serta siapa yang harus segera menindaklanjutinya.",
  },
  { type: "h2", text: "Memilih layanan backup yang tepat" },
  {
    type: "p",
    text: "Untuk bisnis tanpa tim IT khusus, layanan backup cloud terkelola sering menjadi pilihan paling praktis — penyedia menangani sebagian besar aspek teknis. Yang tetap perlu diperiksa: seberapa mudah proses pemulihan, berapa biaya untuk volume data Anda, dan apakah penyedia menawarkan enkripsi yang memadai untuk data sensitif.",
  },
  { type: "h2", text: "Langkah menyusun strategi backup" },
  {
    type: "ol",
    items: [
      "Inventarisasi semua data penting dan di mana lokasinya",
      "Tentukan toleransi kehilangan data dan waktu pemulihan untuk setiap jenis data",
      "Terapkan aturan 3-2-1 sesuai kebutuhan dan anggaran",
      "Aktifkan perlindungan dari ransomware dengan salinan yang tidak bisa diubah",
      "Tetapkan penanggung jawab pemantauan dan pengujian",
      "Jadwalkan uji pemulihan rutin, minimal setiap beberapa bulan",
      "Dokumentasikan langkah pemulihan agar bisa dijalankan siapa pun saat darurat",
    ],
  },
  { type: "h2", text: "Kesalahan umum dalam strategi backup" },
  {
    type: "ul",
    items: [
      "Hanya menyimpan satu salinan backup di lokasi yang sama dengan data asli",
      "Tidak pernah menguji apakah backup benar-benar bisa dipulihkan",
      "Mengabaikan notifikasi kegagalan backup karena dianggap tidak penting",
      "Tidak melindungi backup dari ancaman ransomware",
      "Lupa mem-backup data di luar server utama",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Berapa biaya wajar untuk strategi backup yang baik?" },
  {
    type: "p",
    text: "Biayanya jauh lebih kecil dibanding kerugian akibat kehilangan data permanen. Untuk bisnis kecil, layanan backup cloud dengan biaya bulanan terjangkau sudah cukup memadai. Investasi terbesar sebenarnya adalah waktu untuk merancang dan menguji strategi, bukan biaya penyimpanannya.",
  },
  { type: "h3", text: "Seberapa sering uji pemulihan perlu dilakukan?" },
  {
    type: "p",
    text: "Minimal setiap tiga hingga enam bulan untuk sebagian besar bisnis, dan setiap kali ada perubahan signifikan pada sistem atau infrastruktur. Untuk sistem yang sangat kritis, uji lebih sering bisa dipertimbangkan.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Backup yang baik bukan sekadar rutinitas yang berjalan di latar belakang tanpa diperhatikan, melainkan strategi yang direncanakan, diuji, dan dipertanggungjawabkan. Ketika insiden benar-benar terjadi — dan cepat atau lambat akan terjadi — perbedaan antara bisnis yang pulih dalam hitungan jam dan yang kehilangan data selamanya sering kali hanya soal seberapa serius backup ini disiapkan sebelumnya.",
  },
  {
    type: "cta",
    title: "Kapan terakhir kali backup Anda benar-benar diuji?",
    text: "Diskusikan strategi backup dan pemulihan data yang sesuai untuk sistem bisnis Anda bersama tim AG·SORA.",
    href: "/contact",
    label: "Konsultasi Gratis",
  },
];
