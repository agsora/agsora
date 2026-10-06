import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Dalam beberapa tahun terakhir, alat low-code dan no-code semakin populer. Janjinya menggoda: membuat aplikasi atau otomatisasi proses dengan menyeret dan menjatuhkan komponen, tanpa menulis kode, dalam hitungan hari. Bagi pemilik bisnis yang selama ini mendengar estimasi pengembangan software dalam hitungan bulan, tawaran seperti itu terdengar sangat masuk akal.",
  },
  {
    type: "p",
    text: "Di sisi lain, banyak bisnis juga mendengar cerita tentang aplikasi low-code yang mulai kewalahan ketika pengguna bertambah, atau tentang biaya langganan yang terus naik, atau tentang proses bisnis unik yang tidak bisa diakomodasi platform. Pertanyaannya bukan mana yang lebih baik secara umum, melainkan mana yang cocok untuk kebutuhan, tahap, dan sumber daya bisnis Anda saat ini.",
  },
  {
    type: "p",
    text: "Artikel ini membandingkan low-code, no-code, dan software buatan khusus dengan cara yang adil. Kita akan melihat apa arti masing-masing istilah, di mana mereka unggul, di mana batasnya, serta kerangka keputusan yang bisa dipakai untuk memilih. Kami menulis ini sebagai pengembang software khusus, tetapi kesimpulannya jujur: ada banyak situasi di mana alat siap pakai adalah pilihan yang lebih tepat.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "No-code dan low-code unggul untuk proses internal sederhana, prototipe, dan kebutuhan yang jelas dengan jumlah pengguna terbatas",
      "Software khusus unggul ketika proses bisnis unik, integrasi rumit, performa tinggi, atau kendali penuh atas data dan biaya jangka panjang diperlukan",
      "Keduanya bukan pilihan satu kali; banyak bisnis memulai dengan alat siap pakai lalu berpindah saat kebutuhan membesar",
      "Biaya sebenarnya mencakup langganan, batas penggunaan, waktu tim, dan biaya berpindah di kemudian hari, bukan hanya harga awal",
      "Kepemilikan data dan kemudahan memindahkannya harus dipastikan sebelum memilih platform apa pun",
    ],
  },
  { type: "h2", text: "Apa arti no-code, low-code, dan software khusus" },
  {
    type: "h3",
    text: "No-code",
  },
  {
    type: "p",
    text: "Platform no-code memungkinkan orang tanpa latar belakang pemrograman membuat aplikasi, formulir, alur kerja, atau halaman web lewat antarmuka visual. Komponen sudah tersedia, dan pembuat aplikasi merangkai serta mengonfigurasinya. Contoh penggunaannya adalah formulir permintaan internal, pelacak tugas sederhana, katalog, atau otomatisasi yang menghubungkan beberapa aplikasi populer.",
  },
  {
    type: "h3",
    text: "Low-code",
  },
  {
    type: "p",
    text: "Low-code mirip dengan no-code, tetapi memberi ruang untuk menulis sedikit kode di tempat yang diperlukan, misalnya untuk logika khusus atau integrasi dengan sistem lain. Platform ini cocok untuk tim yang punya sedikit kemampuan teknis dan ingin fleksibilitas lebih besar, tetapi masih ingin mempercepat pembangunan dengan komponen siap pakai.",
  },
  {
    type: "h3",
    text: "Software buatan khusus",
  },
  {
    type: "p",
    text: "Software khusus ditulis dengan kode sesuai kebutuhan spesifik bisnis. Anda mendapat kendali penuh atas fitur, tampilan, struktur data, integrasi, dan infrastruktur. Fleksibilitas ini datang dengan konsekuensi: waktu pengembangan lebih panjang, biaya awal lebih besar, dan kebutuhan pemeliharaan yang berkelanjutan.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    alt: "Layar laptop menampilkan baris-baris kode program di ruangan gelap",
    caption: "Pilihan antara alat siap pakai dan kode khusus bergantung pada kebutuhan, bukan pada mana yang terdengar lebih canggih.",
  },
  { type: "h2", text: "Di mana alat no-code dan low-code unggul" },
  {
    type: "p",
    text: "Alat jenis ini punya kelebihan nyata, dan menolaknya begitu saja adalah kesalahan. Berikut situasi di mana mereka sering menjadi pilihan terbaik.",
  },
  {
    type: "ul",
    items: [
      "Kecepatan: aplikasi sederhana dapat berjalan dalam hitungan hari atau minggu, sehingga ide bisa diuji dengan cepat",
      "Biaya awal rendah: tidak perlu investasi besar di muka, cocok ketika Anda belum yakin proses atau produknya akan bertahan",
      "Pembuatan oleh orang bisnis: staf yang memahami prosesnya dapat membangun sendiri tanpa menunggu antrean tim teknis",
      "Prototipe dan validasi: sangat baik untuk menguji apakah sebuah alur kerja benar-benar bermanfaat sebelum berinvestasi lebih jauh",
      "Pemeliharaan platform ditangani penyedia: pembaruan keamanan dan infrastruktur menjadi tanggung jawab mereka",
      "Proses internal standar: formulir persetujuan, pelacakan tugas, pengumpulan data sederhana, dan pelaporan dasar umumnya terlayani dengan baik",
    ],
  },
  {
    type: "p",
    text: "Jika kebutuhan Anda berupa proses internal yang cukup standar, dipakai oleh puluhan pengguna, dan tidak melibatkan logika bisnis yang rumit, alat siap pakai sering kali memberi nilai terbaik per rupiah yang dikeluarkan.",
  },
  { type: "h2", text: "Di mana batasnya mulai terasa" },
  {
    type: "p",
    text: "Masalah biasanya tidak muncul di bulan pertama, melainkan setelah aplikasi dipakai lebih luas dan lebih lama. Berikut batasan yang sering ditemui.",
  },
  {
    type: "h3",
    text: "Proses bisnis yang unik",
  },
  {
    type: "p",
    text: "Platform siap pakai dirancang untuk kasus umum. Ketika bisnis Anda punya aturan khusus, misalnya perhitungan harga bertingkat dengan banyak pengecualian, alur persetujuan yang bergantung pada banyak kondisi, atau cara kerja gudang yang tidak lazim, Anda mulai membuat solusi darurat yang rumit di dalam platform. Pada titik tertentu, solusi darurat itu lebih sulit dipelihara daripada kode biasa.",
  },
  {
    type: "h3",
    text: "Skala dan performa",
  },
  {
    type: "p",
    text: "Aplikasi yang lancar untuk sepuluh pengguna dan seribu data bisa melambat ketika pengguna menjadi ratusan dan datanya jutaan baris. Platform siap pakai biasanya menetapkan batas penggunaan atau menaikkan biaya sesuai volume. Dengan software khusus, Anda dapat mengoptimalkan struktur data dan infrastruktur sesuai pola penggunaan yang sebenarnya.",
  },
  {
    type: "h3",
    text: "Integrasi dengan sistem lain",
  },
  {
    type: "p",
    text: "Banyak platform menyediakan konektor ke aplikasi populer, tetapi integrasi dengan sistem lama, perangkat khusus, atau API yang tidak lazim bisa sulit atau tidak mungkin. Jika proses bisnis Anda bergantung pada sistem yang tidak umum, periksa dulu apakah platform yang dipertimbangkan benar-benar bisa terhubung ke sana.",
  },
  {
    type: "h3",
    text: "Biaya jangka panjang",
  },
  {
    type: "p",
    text: "Biaya langganan yang terlihat kecil di awal bisa membesar seiring bertambahnya pengguna, fitur tingkat lanjut, dan batas penggunaan. Sementara itu, software khusus punya biaya awal yang lebih besar tetapi struktur biaya yang lebih bisa diprediksi. Hitung biaya total beberapa tahun ke depan, bukan hanya bulan pertama, dan sertakan skenario ketika jumlah pengguna dan data bertambah.",
  },
  {
    type: "h3",
    text: "Kepemilikan dan keterikatan platform",
  },
  {
    type: "p",
    text: "Aplikasi yang dibangun di platform tertentu biasanya tidak bisa dipindahkan begitu saja. Data mungkin bisa diekspor, tetapi logika dan tampilan yang sudah dibangun harus dibuat ulang jika Anda berpindah. Ini disebut keterikatan platform (vendor lock-in). Selain itu, perubahan harga, fitur, atau kebijakan penyedia berada di luar kendali Anda.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1494059980473-813e73ee784b",
    alt: "Tumpukan keping puzzle",
    caption: "Keputusan teknologi sebaiknya diambil bersama orang yang memahami proses dan yang akan memakai sistem setiap hari.",
  },
  { type: "h2", text: "Kerangka keputusan yang praktis" },
  {
    type: "p",
    text: "Daripada memilih berdasarkan tren, jawab pertanyaan-pertanyaan berikut dengan jujur. Hasilnya biasanya cukup jelas mengarah ke satu sisi.",
  },
  {
    type: "ol",
    items: [
      "Seberapa unik proses bisnis ini? Jika sebagian besar bisnis sejenis memakai proses yang mirip, alat siap pakai kemungkinan cukup",
      "Berapa banyak pengguna dan data yang diperkirakan dalam dua sampai tiga tahun? Perkiraan pertumbuhan yang besar mengarah ke solusi yang lebih terukur",
      "Seberapa penting aplikasi ini bagi operasional? Jika gangguan berarti bisnis berhenti berjalan, kendali dan keandalan menjadi lebih penting",
      "Seberapa banyak integrasi yang dibutuhkan dengan sistem lain, terutama sistem yang tidak umum?",
      "Siapa yang akan memelihara aplikasi? Apakah ada orang di tim yang mampu dan punya waktu, atau perlu mitra eksternal?",
      "Seberapa sensitif datanya, dan apakah ada kebutuhan regulasi atau keamanan yang menuntut kendali lebih ketat?",
      "Berapa total biaya dalam tiga sampai lima tahun untuk setiap opsi, dengan asumsi yang realistis?",
    ],
  },
  {
    type: "callout",
    title: "Satu aturan praktis",
    text: "Jika proses Anda standar dan skalanya kecil, mulailah dengan alat siap pakai. Jika proses Anda adalah keunggulan bersaing, melibatkan banyak integrasi, atau akan tumbuh besar, pertimbangkan software khusus sejak awal atau rencanakan jalur peralihan yang jelas.",
  },
  { type: "h2", text: "Pendekatan campuran dan jalur peralihan" },
  {
    type: "p",
    text: "Pilihan ini tidak harus hitam putih. Banyak bisnis yang berhasil memakai pendekatan campuran. Misalnya, memakai alat no-code untuk proses pendukung seperti formulir internal dan pelaporan sederhana, sementara sistem inti seperti pesanan, stok, atau layanan pelanggan dibangun khusus. Atau, memulai dengan alat siap pakai sebagai MVP untuk memvalidasi proses, lalu membangun versi khusus setelah terbukti bermanfaat.",
  },
  {
    type: "p",
    text: "Jika Anda berencana berpindah di kemudian hari, ada beberapa langkah yang memudahkan. Dokumentasikan proses dan aturan bisnis secara terpisah dari platform. Pastikan data dapat diekspor dalam format standar dan lakukan ekspor percobaan sejak awal. Hindari bergantung pada fitur eksklusif platform untuk logika inti bisnis. Dan sejak awal, tentukan batas yang menjadi tanda sudah waktunya berpindah, misalnya jumlah pengguna, biaya bulanan, atau jenis kebutuhan yang tidak bisa dipenuhi.",
  },
  { type: "h2", text: "Pertanyaan yang perlu diajukan kepada penyedia mana pun" },
  {
    type: "ul",
    items: [
      "Di mana data disimpan dan bagaimana cara mengekspornya secara lengkap?",
      "Apa batas penggunaan pada paket yang dipilih, dan apa yang terjadi jika terlampaui?",
      "Bagaimana kebijakan keamanan, pencadangan, dan ketersediaan layanan?",
      "Apa yang terjadi pada aplikasi dan data jika penyedia mengubah harga, kebijakan, atau berhenti beroperasi?",
      "Bagaimana kontrol hak akses dan jejak audit untuk data sensitif?",
      "Apa dukungan yang tersedia, dalam bahasa dan zona waktu yang bisa dijangkau tim Anda?",
      "Untuk software khusus: siapa pemilik kode, bagaimana serah terima dokumentasi, dan bagaimana pemeliharaan setelah peluncuran?",
    ],
  },
  { type: "h2", text: "Peran tim dan keterampilan yang dibutuhkan" },
  {
    type: "p",
    text: "Satu hal yang sering terlewat dalam perbandingan ini adalah soal manusia. Alat no-code memang tidak memerlukan keahlian pemrograman, tetapi tetap memerlukan orang yang memahami proses bisnis, mampu berpikir terstruktur tentang data dan alur, serta punya waktu untuk membangun dan merawat aplikasi. Jika orang itu adalah staf yang juga memegang pekerjaan harian lain, aplikasi yang dibangunnya bisa menjadi tergantung pada satu orang dan sulit diwariskan ketika ia berpindah tugas.",
  },
  {
    type: "p",
    text: "Untuk software khusus, keterampilan teknis ada di pihak pengembang, tetapi bisnis tetap perlu menyediakan perwakilan yang memahami proses dan bisa mengambil keputusan dengan cepat. Proyek yang kekurangan keterlibatan pemilik proses hampir selalu menghasilkan sistem yang secara teknis baik tetapi tidak cocok dengan cara kerja sebenarnya. Apa pun pilihan Anda, tetapkan sejak awal siapa pemilik prosesnya, siapa yang memelihara, dan bagaimana pengetahuan itu didokumentasikan.",
  },
  { type: "h2", text: "Kesalahan yang sering terjadi" },
  {
    type: "ul",
    items: [
      "Memilih berdasarkan tren atau demo yang menarik tanpa menguji dengan proses nyata",
      "Menganggap no-code berarti tidak perlu perencanaan; proses yang kacau tetap kacau di platform apa pun",
      "Membangun sistem inti bisnis di alat yang dirancang untuk kebutuhan ringan",
      "Mengabaikan biaya jangka panjang dan keterikatan platform",
      "Membangun software khusus untuk proses yang sebenarnya sudah dilayani baik oleh alat siap pakai",
      "Tidak menetapkan siapa yang bertanggung jawab memelihara aplikasi setelah selesai dibuat",
      "Membiarkan banyak aplikasi kecil buatan tiap departemen tumbuh tanpa tata kelola, sehingga data tersebar dan sulit diaudit",
    ],
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Tidak ada jawaban universal antara low-code, no-code, dan software khusus. Alat siap pakai memberi kecepatan dan biaya awal rendah untuk kebutuhan standar; software khusus memberi kendali dan kemampuan tumbuh untuk kebutuhan yang unik atau besar. Keputusan yang baik lahir dari pemahaman jujur tentang proses bisnis, perkiraan pertumbuhan, kebutuhan integrasi, dan total biaya jangka panjang. Jika ragu, mulailah kecil dengan cara yang tidak mengunci Anda, dan biarkan penggunaan nyata menunjukkan kapan saatnya melangkah lebih jauh.",
  },
  {
    type: "cta",
    title: "Bingung memilih antara alat siap pakai dan software khusus?",
    text: "Tim AG·SORA akan membantu menilai kebutuhan Anda secara objektif, termasuk menyarankan alat siap pakai bila itu memang lebih tepat. Konsultasinya gratis, tanpa komitmen.",
    href: "/services/custom-software",
    label: "Konsultasi Gratis",
  },
];
