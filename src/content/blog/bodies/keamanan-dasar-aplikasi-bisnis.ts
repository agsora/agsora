import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Aplikasi internal perusahaan sudah dipakai dua tahun tanpa masalah berarti. Sampai suatu hari, seorang karyawan magang iseng mengubah angka di alamat browser dan tiba-tiba bisa melihat data gaji karyawan lain yang seharusnya tidak bisa diaksesnya. Tidak ada yang meretas apa pun secara canggih — celahnya memang ada sejak awal, hanya belum pernah ditemukan siapa pun.",
  },
  {
    type: "p",
    text: "Aplikasi bisnis menyimpan data transaksi, data pelanggan, dan informasi internal yang sangat berharga bagi perusahaan maupun pihak yang ingin menyalahgunakannya. Meski begitu, keamanan sering diperlakukan sebagai urusan yang bisa ditunda — dikerjakan setelah semua fitur utama selesai dibangun, atau bahkan baru dipikirkan serius setelah terjadi masalah nyata. Padahal beberapa perlindungan dasar jauh lebih murah dan mudah dibangun sejak awal dibanding ditambal belakangan setelah insiden terjadi.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Autentikasi yang kuat adalah lapisan pertahanan pertama yang wajib ada",
      "Hak akses harus diperiksa di sisi server, bukan hanya disembunyikan di tampilan",
      "Validasi semua input dari pengguna untuk mencegah serangan umum",
      "Koneksi terenkripsi (HTTPS) adalah standar minimum, bukan fitur tambahan",
      "Perbarui komponen pihak ketiga secara rutin karena celah keamanan terus ditemukan",
    ],
  },
  { type: "h2", text: "Kenapa keamanan sering diabaikan di awal" },
  {
    type: "p",
    text: "Tekanan untuk segera meluncurkan aplikasi dan menunjukkan hasil sering membuat aspek keamanan terpinggirkan, dianggap sebagai sesuatu yang bisa ditambahkan nanti setelah fitur-fitur utama selesai dan berjalan lancar. Masalahnya, menambahkan keamanan setelah aplikasi sudah dibangun jauh lebih sulit dan mahal dibanding merancangnya sejak arsitektur awal — beberapa celah bahkan hampir mustahil ditambal tanpa membangun ulang sebagian besar sistem.",
  },
  { type: "h2", text: "Autentikasi yang kuat" },
  {
    type: "ul",
    items: [
      "Kata sandi disimpan dalam bentuk hash yang aman, bukan tersimpan sebagai teks biasa yang bisa dibaca langsung",
      "Batas jumlah percobaan masuk untuk mencegah tebakan kata sandi yang dilakukan berulang-ulang",
      "Verifikasi dua langkah untuk akun-akun dengan akses ke data atau fungsi penting",
      "Sesi pengguna yang otomatis berakhir setelah periode tidak aktif tertentu",
    ],
  },
  { type: "h2", text: "Hak akses diperiksa di server, bukan hanya di tampilan" },
  {
    type: "p",
    text: "Menyembunyikan tombol tertentu di tampilan layar tidak sama artinya dengan benar-benar membatasi akses pengguna terhadap fungsi tersebut. Setiap permintaan data yang masuk harus diperiksa ulang di sisi server: apakah pengguna yang mengirim permintaan ini benar-benar berhak melihat atau mengubah data yang diminta? Tanpa pemeriksaan yang konsisten di server, pengguna yang cukup paham teknis bisa mengakses data milik orang lain hanya dengan mengubah alamat atau parameter di permintaan yang dikirim, meski tombol untuk itu tidak pernah ditampilkan kepadanya.",
  },
  { type: "h2", text: "Validasi semua input" },
  {
    type: "p",
    text: "Data yang dimasukkan pengguna — lewat formulir, unggahan file, atau parameter lainnya — harus divalidasi secara ketat di sisi server sebelum diproses lebih lanjut. Input yang tidak divalidasi dengan benar adalah pintu masuk bagi berbagai jenis serangan umum, termasuk upaya menyisipkan perintah berbahaya ke dalam basis data yang bisa membocorkan atau merusak seluruh data yang tersimpan di dalamnya.",
  },
  {
    type: "callout",
    title: "Koneksi terenkripsi adalah standar minimum",
    text: "Semua akses ke aplikasi bisnis sebaiknya melalui koneksi HTTPS yang terenkripsi, tanpa pengecualian. Tanpa enkripsi ini, kata sandi dan data sensitif yang dikirim antara perangkat pengguna dan server bisa disadap oleh pihak yang tidak berwenang, terutama saat pengguna terhubung ke jaringan Wi-Fi publik yang tidak aman seperti di kafe atau bandara.",
  },
  { type: "h2", text: "Pembaruan komponen secara rutin" },
  {
    type: "p",
    text: "Aplikasi bisnis modern hampir selalu dibangun dengan memanfaatkan banyak pustaka dan komponen kode dari pihak ketiga untuk mempercepat pengembangan. Celah keamanan pada komponen-komponen ini ditemukan secara berkala oleh komunitas keamanan global. Rencanakan pembaruan komponen secara rutin sebagai bagian normal dari pemeliharaan aplikasi, bukan hanya dilakukan reaktif setelah ada masalah yang sudah terlanjur dieksploitasi pihak lain.",
  },
  { type: "h2", text: "Pencatatan dan pemantauan aktivitas" },
  {
    type: "p",
    text: "Catat aktivitas-aktivitas penting seperti upaya masuk ke sistem, perubahan hak akses pengguna, dan perubahan pada data-data sensitif. Tanpa pencatatan yang memadai, insiden keamanan menjadi sangat sulit dideteksi tepat waktu, dan bahkan setelah diketahui pun akan sangat sulit ditelusuri bagaimana insiden itu sebenarnya terjadi dan seberapa luas dampaknya.",
  },
  { type: "h2", text: "Ilustrasi: celah kecil dengan dampak besar" },
  {
    type: "p",
    text: "Bayangkan sebuah aplikasi manajemen proyek internal di mana setiap karyawan bisa melihat detail proyek dengan mengetikkan nomor identifikasi proyek di alamat browser. Sistemnya hanya menyembunyikan menu untuk proyek yang bukan tanggung jawab pengguna tersebut di tampilan, tanpa benar-benar memeriksa hak akses di sisi server ketika permintaan data proyek dikirim.",
  },
  {
    type: "p",
    text: "Seorang karyawan yang penasaran mencoba mengubah angka nomor proyek di alamat browser secara berurutan, dan menemukan dirinya bisa melihat detail proyek-proyek rahasia milik divisi lain, termasuk proyek yang melibatkan klien sensitif yang seharusnya hanya diketahui tim tertentu. Celah sesederhana ini bisa dicegah sepenuhnya jika sistem memeriksa hak akses secara konsisten di server untuk setiap permintaan data, bukan hanya mengandalkan penyembunyian tampilan di sisi pengguna.",
  },
  { type: "h2", text: "Menangani unggahan file dengan aman" },
  {
    type: "p",
    text: "Fitur unggah file, seperti untuk lampiran dokumen atau foto, membutuhkan perhatian keamanan khusus. Batasi jenis dan ukuran file yang diperbolehkan, periksa isi file bukan hanya nama ekstensinya, dan simpan file yang diunggah di lokasi yang tidak bisa dieksekusi langsung sebagai kode program, untuk mencegah penyalahgunaan fitur ini sebagai jalur masuk serangan.",
  },
  { type: "h2", text: "Tanyakan kepada vendor secara spesifik" },
  {
    type: "p",
    text: "Saat bekerja sama dengan software house untuk membangun aplikasi bisnis, tanyakan secara spesifik bagaimana mereka menangani setiap aspek keamanan yang dibahas di atas. Vendor yang benar-benar serius soal keamanan akan bisa menjelaskan pendekatan mereka secara konkret dan detail — bukan sekadar memberikan jawaban umum bahwa “aplikasinya pasti aman” tanpa penjelasan lebih lanjut.",
  },
  { type: "h2", text: "Langkah memastikan keamanan dasar aplikasi" },
  {
    type: "ol",
    items: [
      "Terapkan autentikasi yang kuat dengan verifikasi dua langkah untuk akses penting",
      "Pastikan hak akses diperiksa konsisten di sisi server untuk setiap permintaan",
      "Validasi semua input pengguna sebelum diproses lebih lanjut",
      "Gunakan koneksi HTTPS terenkripsi untuk seluruh akses aplikasi",
      "Jadwalkan pembaruan rutin untuk komponen dan pustaka pihak ketiga",
      "Aktifkan pencatatan aktivitas untuk mendeteksi dan menelusuri insiden keamanan",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah aplikasi bisnis kecil tetap perlu memperhatikan keamanan seketat ini?" },
  {
    type: "p",
    text: "Ya. Ukuran bisnis tidak mengurangi nilai data yang dikelola bagi pihak yang ingin menyalahgunakannya. Bahkan aplikasi sederhana untuk bisnis kecil tetap perlu menerapkan dasar-dasar keamanan ini, meski implementasinya bisa disesuaikan dengan skala dan anggaran yang tersedia.",
  },
  { type: "h3", text: "Bagaimana cara mengetahui apakah aplikasi yang sudah ada memiliki celah keamanan?" },
  {
    type: "p",
    text: "Pertimbangkan melakukan audit keamanan oleh pihak yang berpengalaman, yang bisa menguji aplikasi secara sistematis untuk menemukan celah yang mungkin ada. Untuk aplikasi yang sudah lama berjalan tanpa pernah diaudit, langkah ini sangat disarankan sebelum masalah benar-benar terjadi.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Keamanan aplikasi bisnis bukan fitur tambahan yang bisa dipasang belakangan tanpa konsekuensi, melainkan fondasi yang perlu dipikirkan sejak awal proses perancangan. Dengan autentikasi yang kuat, pemeriksaan hak akses yang konsisten, dan validasi input yang ketat, celah-celah keamanan yang paling umum dan paling merugikan bisa dicegah sejak awal, jauh sebelum menjadi masalah nyata yang merugikan bisnis dan penggunanya.",
  },
  {
    type: "cta",
    title: "Yakin aplikasi bisnis Anda sudah aman dari celah dasar?",
    text: "Tim AG·SORA membangun aplikasi dengan standar keamanan yang diperhatikan sejak awal perancangan.",
    href: "/contact",
    label: "Konsultasi Gratis",
  },
];
