import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "“Sisa cuti saya berapa ya?” Pesan itu masuk ke inbox HR untuk ketiga kalinya hari ini, dari tiga orang berbeda. Admin HR membuka spreadsheet, mencari nama, menghitung manual, lalu membalas satu per satu. Lima menit per orang, dikali puluhan pertanyaan serupa setiap minggu — waktu yang habis untuk sesuatu yang sebenarnya bisa dilihat sendiri oleh karyawan.",
  },
  {
    type: "p",
    text: "Berapa sisa cuti saya? Bisa minta slip gaji bulan lalu? Bagaimana cara mengubah nomor rekening? Pertanyaan-pertanyaan ini wajar dan penting bagi karyawan, tetapi ketika semuanya harus melewati tim HR secara manual, pekerjaan yang lebih strategis — perencanaan tenaga kerja, pengembangan karyawan, perbaikan kebijakan — terus tertunda karena waktu habis untuk hal administratif berulang.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Employee self-service memindahkan pekerjaan administratif rutin dari HR ke karyawan sendiri",
      "Fitur yang paling terasa manfaatnya: cuti, slip gaji, data pribadi, dan klaim",
      "Tidak semua perubahan data boleh langsung berlaku — tetapkan mana yang butuh verifikasi",
      "Akses dari ponsel menentukan seberapa besar fitur ini benar-benar dipakai",
      "Keamanan akun harus kuat karena menampilkan data gaji dan data pribadi",
    ],
  },
  { type: "h2", text: "Apa itu employee self-service" },
  {
    type: "p",
    text: "Employee self-service adalah bagian sistem HR yang bisa diakses langsung oleh karyawan untuk melihat informasi dan mengajukan permintaan sendiri, tanpa perantara staf HR untuk setiap transaksi kecil. Tim HR tetap memegang kendali atas persetujuan, kebijakan, dan data yang sensitif — yang berubah bukan wewenang HR, melainkan siapa yang mengetik dan mencari informasi rutin sehari-hari.",
  },
  {
    type: "p",
    text: "Konsep ini bukan tentang mengurangi peran HR, melainkan mengubah fokusnya. Alih-alih menghabiskan waktu menjawab pertanyaan yang sama berulang kali, HR bisa fokus pada hal yang benar-benar membutuhkan penilaian manusia: menangani kasus khusus, merancang kebijakan, dan mendukung pengembangan karyawan.",
  },
  { type: "h2", text: "Fitur yang umumnya paling terasa manfaatnya" },
  {
    type: "ul",
    items: [
      "Melihat sisa cuti dan mengajukan cuti atau izin secara online",
      "Mengunduh slip gaji tanpa harus meminta ke HR setiap bulan",
      "Memperbarui data pribadi tertentu, seperti alamat dan kontak darurat",
      "Mengajukan klaim atau penggantian biaya dengan bukti foto atau dokumen",
      "Melihat riwayat kehadiran sendiri dan mengajukan koreksi jika ada kesalahan",
      "Mengakses dokumen kepegawaian seperti surat keterangan kerja",
    ],
  },
  { type: "h2", text: "Tetapkan mana yang butuh verifikasi" },
  {
    type: "p",
    text: "Tidak semua perubahan data boleh langsung berlaku tanpa pemeriksaan. Perubahan nomor rekening, misalnya, sebaiknya melewati verifikasi karena berkaitan langsung dengan pembayaran gaji — kesalahan atau penyalahgunaan di sini bisa berakibat serius. Tentukan sejak awal data mana yang bisa diubah langsung oleh karyawan dan mana yang membutuhkan persetujuan atau verifikasi tambahan sebelum berlaku.",
  },
  {
    type: "ul",
    items: [
      "Bisa langsung diubah: alamat, nomor telepon, kontak darurat",
      "Butuh verifikasi dokumen: status pernikahan, jumlah tanggungan untuk pajak",
      "Butuh persetujuan atasan: pengajuan cuti, klaim, perubahan jadwal",
      "Butuh verifikasi berlapis: nomor rekening, data yang memengaruhi perhitungan gaji",
    ],
  },
  {
    type: "callout",
    title: "Akses dari ponsel menentukan adopsi",
    text: "Banyak karyawan, terutama di operasional dan lapangan, tidak bekerja di depan komputer sepanjang hari. Jika layanan mandiri hanya nyaman dibuka di desktop, sebagian karyawan akan tetap mengirim pertanyaan lewat pesan ke HR karena aplikasi terasa merepotkan diakses dari ponsel mereka.",
  },
  { type: "h2", text: "Informasi yang jelas mengurangi pertanyaan" },
  {
    type: "p",
    text: "Layanan mandiri paling efektif ketika disertai informasi pendukung yang mudah dipahami: aturan cuti dijelaskan dalam bahasa sederhana, cara menghitung komponen gaji ditunjukkan dengan jelas di slip, dan jawaban atas pertanyaan umum tersedia tanpa harus bertanya. Karyawan yang bisa memahami sendiri tidak perlu menghubungi HR untuk hal yang sebenarnya sudah dijelaskan di sistem.",
  },
  { type: "h2", text: "Keamanan akun adalah prioritas" },
  {
    type: "p",
    text: "Karena menampilkan data gaji dan data pribadi, akses layanan mandiri harus dilindungi dengan baik: kata sandi yang kuat dan wajib diganti secara berkala, verifikasi tambahan bila memungkinkan, dan sesi yang otomatis berakhir setelah tidak aktif dalam waktu tertentu.",
  },
  {
    type: "p",
    text: "Pastikan juga ada prosedur yang jelas untuk penutupan akses ketika karyawan keluar dari perusahaan. Akun yang lupa dinonaktifkan setelah karyawan resign adalah celah keamanan yang sering terlewat, dan bisa berarti mantan karyawan masih bisa mengakses sistem perusahaan.",
  },
  { type: "h2", text: "Ilustrasi: sebelum dan sesudah" },
  {
    type: "p",
    text: "Bayangkan perusahaan dengan seratus karyawan dan dua staf HR. Sebelum ada layanan mandiri, kedua staf HR menghabiskan sekitar sepertiga waktu kerja mereka setiap minggu untuk menjawab pertanyaan rutin: sisa cuti, slip gaji, status pengajuan izin. Waktu untuk merancang program pengembangan karyawan atau memperbaiki kebijakan yang sudah usang selalu terdesak oleh urusan administratif harian.",
  },
  {
    type: "p",
    text: "Setelah layanan mandiri diterapkan, karyawan bisa melihat sendiri sisa cuti dan mengunduh slip gaji kapan saja. Pertanyaan rutin ke HR turun signifikan. Staf HR mulai punya waktu untuk proyek yang selama ini tertunda, seperti menyusun program orientasi karyawan baru yang lebih terstruktur.",
  },
  { type: "h2", text: "Menangani penolakan dari karyawan senior" },
  {
    type: "p",
    text: "Karyawan yang sudah lama terbiasa dengan cara manual — bertanya langsung ke HR atau mengisi formulir kertas — kadang enggan beralih ke sistem digital, terutama jika merasa kurang familiar dengan teknologi. Sediakan pelatihan singkat yang sabar, panduan bergambar langkah demi langkah, dan pendampingan pribadi di minggu-minggu awal untuk kelompok ini, alih-alih memaksakan peralihan sekaligus tanpa dukungan.",
  },
  { type: "h2", text: "Langkah menerapkan employee self-service" },
  {
    type: "ol",
    items: [
      "Identifikasi pertanyaan rutin yang paling sering diterima HR",
      "Pilih fitur layanan mandiri yang menjawab pertanyaan tersebut lebih dulu",
      "Tentukan data mana yang bisa diubah langsung dan mana yang butuh verifikasi",
      "Pastikan aplikasi nyaman diakses dari ponsel",
      "Siapkan panduan dan pelatihan untuk semua level karyawan",
      "Tetapkan kebijakan keamanan akun dan prosedur penutupan akses",
    ],
  },
  { type: "h2", text: "Mengukur dampaknya" },
  {
    type: "p",
    text: "Bandingkan jumlah pertanyaan rutin yang masuk ke HR sebelum dan sesudah layanan mandiri berjalan, dari email, pesan, atau kunjungan langsung ke meja HR. Perbandingan ini membantu menilai apakah fitur benar-benar dipakai secara konsisten atau perlu disosialisasikan ulang kepada karyawan yang masih ragu.",
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah employee self-service cocok untuk perusahaan kecil?" },
  {
    type: "p",
    text: "Ya, bahkan untuk perusahaan dengan belasan karyawan, fitur ini tetap menghemat waktu HR atau pemilik yang sering merangkap urusan administratif. Skalanya bisa disesuaikan — tidak perlu semua fitur diterapkan sekaligus.",
  },
  { type: "h3", text: "Bagaimana jika karyawan mengubah data yang salah?" },
  {
    type: "p",
    text: "Simpan riwayat perubahan data sehingga bisa ditelusuri dan dikoreksi jika terjadi kesalahan. Untuk data yang berisiko tinggi, tambahkan langkah konfirmasi sebelum perubahan benar-benar tersimpan.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Employee self-service bukan sekadar fitur tambahan, melainkan cara mengembalikan waktu tim HR untuk pekerjaan yang benar-benar membutuhkan penilaian manusia. Dengan memilih fitur yang tepat, menjaga keamanan data, dan memastikan kemudahan akses dari ponsel, pertanyaan rutin yang dulu memenuhi inbox HR bisa dijawab karyawan sendiri kapan saja mereka butuhkan.",
  },
  {
    type: "cta",
    title: "HR Anda masih sibuk menjawab pertanyaan sisa cuti?",
    text: "AG·SORA HR menyediakan layanan mandiri karyawan untuk cuti, slip gaji, dan data pribadi dalam satu aplikasi.",
    href: "/products#hr",
    label: "Lihat AG·SORA HR",
  },
];
