import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "“Kami mau aplikasi mobile untuk semuanya, biar keren dan modern.” Enam bulan dan anggaran yang cukup besar kemudian, aplikasi mobile itu jadi, tapi tim admin di kantor yang seharusnya jadi pengguna utama justru mengeluh — mereka kerja di depan komputer seharian, dan mengetik laporan panjang lewat layar ponsel kecil ternyata jauh lebih merepotkan dibanding versi web yang sederhana.",
  },
  {
    type: "p",
    text: "Ketika merencanakan sistem baru, banyak bisnis langsung membayangkan aplikasi yang diunduh dari Play Store atau App Store sebagai standar modern yang wajib dimiliki. Padahal, untuk banyak kebutuhan bisnis, aplikasi web yang cukup dibuka lewat browser sudah lebih dari cukup — bahkan lebih cepat dibangun dan jauh lebih mudah dirawat dalam jangka panjang.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Aplikasi web unggul untuk pekerjaan administratif yang dilakukan di depan komputer",
      "Aplikasi mobile unggul untuk kebutuhan lapangan yang butuh kamera, lokasi, dan notifikasi",
      "Pertimbangkan siapa pengguna utama dan di mana mereka bekerja sehari-hari",
      "Banyak sistem bisnis akhirnya membutuhkan kombinasi keduanya, bukan salah satu saja",
      "Mulai dari bentuk yang melayani kebutuhan paling mendesak lebih dulu",
    ],
  },
  { type: "h2", text: "Aplikasi web" },
  {
    type: "ul",
    items: [
      "Diakses langsung lewat browser, baik di komputer maupun ponsel",
      "Tidak perlu diunduh atau diperbarui secara manual oleh pengguna",
      "Satu versi berlaku untuk semua jenis perangkat, membuat pengembangan lebih efisien",
      "Sangat cocok untuk dashboard, sistem administrasi, dan pekerjaan yang dilakukan di depan komputer",
      "Akses ke fitur khusus perangkat lebih terbatas dibanding aplikasi mobile native",
    ],
  },
  { type: "h2", text: "Aplikasi mobile" },
  {
    type: "ul",
    items: [
      "Dipasang langsung di ponsel dan bisa dibuka dengan cepat dari layar utama",
      "Akses yang jauh lebih luas ke kamera, lokasi GPS, dan notifikasi push",
      "Bisa dirancang untuk tetap berfungsi bahkan saat sedang offline",
      "Harus melewati proses pengajuan dan persetujuan di toko aplikasi setiap kali dirilis atau diperbarui",
      "Biaya pengembangan lebih besar jika harus dibuat untuk Android dan iOS sekaligus",
    ],
  },
  { type: "h2", text: "Pertanyaan yang membantu memutuskan" },
  {
    type: "ol",
    items: [
      "Siapa pengguna utamanya, dan di lingkungan seperti apa mereka bekerja sehari-hari?",
      "Seberapa sering sistem akan dibuka — sesekali dalam sehari, atau berkali-kali setiap jam?",
      "Apakah dibutuhkan akses ke kamera, lokasi, atau notifikasi push secara langsung?",
      "Apakah pengguna sering berada di lokasi dengan koneksi internet yang tidak stabil?",
      "Apakah aplikasi ini untuk digunakan pelanggan umum, atau khusus untuk karyawan internal?",
    ],
  },
  {
    type: "callout",
    title: "Sering kali jawabannya adalah keduanya",
    text: "Banyak sistem bisnis pada akhirnya terdiri dari aplikasi web untuk kebutuhan administrasi di kantor, dan aplikasi mobile untuk kebutuhan tim yang bekerja di lapangan. Keduanya bisa memakai data yang sama persis, tetapi masing-masing dirancang khusus sesuai cara kerja penggunanya yang berbeda.",
  },
  { type: "h2", text: "Aplikasi web yang tetap nyaman di ponsel" },
  {
    type: "p",
    text: "Aplikasi web bisa dirancang secara responsif sehingga tetap terasa nyaman diakses dari ponsel, bahkan bisa ditambahkan ke layar utama ponsel layaknya aplikasi biasa untuk akses yang lebih cepat. Untuk pengguna yang hanya membuka sistem sesekali dan tidak membutuhkan fitur khusus perangkat, pendekatan responsif seperti ini sering kali sudah memadai tanpa perlu membangun aplikasi mobile native yang lebih mahal.",
  },
  { type: "h2", text: "Ilustrasi: dua kebutuhan, dua solusi berbeda" },
  {
    type: "p",
    text: "Bayangkan sebuah perusahaan konstruksi yang membutuhkan dua hal sekaligus: sistem administrasi proyek untuk staf kantor yang bekerja di depan komputer sepanjang hari, dan aplikasi untuk mandor lapangan yang perlu melaporkan progres proyek lengkap dengan foto lokasi secara real-time.",
  },
  {
    type: "p",
    text: "Untuk staf kantor, aplikasi web yang bisa diakses dari laptop dengan tampilan yang kaya fitur dan mudah dinavigasi jauh lebih cocok. Untuk mandor lapangan, aplikasi mobile yang bisa mengakses kamera secara langsung dan tetap berfungsi meski sinyal di lokasi proyek terbatas jauh lebih praktis. Membangun keduanya, dengan data yang saling terhubung, memberi hasil terbaik dibanding memaksakan satu bentuk untuk semua kebutuhan yang sebenarnya berbeda.",
  },
  { type: "h2", text: "Mulai dari kebutuhan yang paling mendesak" },
  {
    type: "p",
    text: "Jika anggaran terbatas dan tidak memungkinkan membangun keduanya sekaligus, mulailah dari bentuk yang melayani kebutuhan pengguna paling penting dan paling mendesak bagi operasional bisnis. Aplikasi mobile bisa ditambahkan kemudian sebagai pengembangan lanjutan, selama sistem sejak awal dirancang dengan API yang memungkinkan berbagai jenis aplikasi mengakses data yang sama tanpa harus membangun ulang dari nol.",
  },
  { type: "h2", text: "Mempertimbangkan biaya pemeliharaan jangka panjang" },
  {
    type: "p",
    text: "Aplikasi mobile membutuhkan pemeliharaan berkelanjutan yang berbeda dari aplikasi web — pembaruan sistem operasi ponsel yang terus berubah, persyaratan toko aplikasi yang bisa berubah sewaktu-waktu, dan pengujian di berbagai jenis perangkat. Pertimbangkan biaya pemeliharaan jangka panjang ini, bukan hanya biaya pembangunan awal, saat memutuskan antara aplikasi web atau mobile.",
  },
  { type: "h2", text: "Langkah memutuskan bentuk aplikasi yang tepat" },
  {
    type: "ol",
    items: [
      "Identifikasi semua kelompok pengguna dan lingkungan kerja mereka masing-masing",
      "Tentukan fitur perangkat spesifik yang benar-benar dibutuhkan, seperti kamera atau GPS",
      "Evaluasi kondisi koneksi internet di lokasi kerja pengguna",
      "Pertimbangkan anggaran untuk pembangunan dan pemeliharaan jangka panjang",
      "Mulai dari bentuk yang paling mendesak, kembangkan bertahap sesuai kebutuhan",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah aplikasi web dianggap kurang profesional dibanding aplikasi mobile?" },
  {
    type: "p",
    text: "Tidak sama sekali. Banyak sistem bisnis besar dan terpercaya berjalan sebagai aplikasi web, terutama untuk kebutuhan administratif. Yang menentukan profesionalitas adalah seberapa baik sistem tersebut menyelesaikan masalah penggunanya, bukan bentuk platformnya.",
  },
  { type: "h3", text: "Bisakah aplikasi web nantinya diubah menjadi aplikasi mobile?" },
  {
    type: "p",
    text: "Bisa, terutama jika sistem sejak awal dibangun dengan API yang terstruktur baik. Bagian data dan logika bisnis yang sudah ada bisa dipakai kembali, sehingga pengembangan aplikasi mobile di kemudian hari tidak perlu dimulai sepenuhnya dari nol.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Memilih antara aplikasi web, mobile, atau keduanya bukan soal mana yang terlihat lebih modern, melainkan soal mana yang benar-benar sesuai dengan cara kerja pengguna Anda sehari-hari. Pahami kebutuhan setiap kelompok pengguna dengan jujur, dan bentuk aplikasi yang tepat akan terlihat dengan sendirinya tanpa perlu mengikuti tren semata.",
  },
  {
    type: "cta",
    title: "Bingung menentukan aplikasi web atau mobile untuk bisnis Anda?",
    text: "Tim AG·SORA membantu menganalisis kebutuhan pengguna Anda untuk menentukan solusi yang paling tepat.",
    href: "/contact",
    label: "Konsultasi Gratis",
  },
];
