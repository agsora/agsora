import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Sebuah bisnis ingin punya aplikasi di ponsel pelanggannya. Tim sudah membayangkan ikon di layar utama, notifikasi promo, dan pemesanan yang lebih cepat. Tapi ketika mulai menghitung, muncul pertanyaan yang lebih rumit: perlu dua aplikasi terpisah untuk Android dan iOS? Bagaimana proses publikasi di toko aplikasi? Apakah pelanggan mau mengunduh aplikasi baru hanya untuk memesan sesekali?",
  },
  {
    type: "p",
    text: "Di antara pilihan membuat website biasa dan membuat aplikasi native, ada jalan tengah yang semakin matang dalam beberapa tahun terakhir: progressive web app, atau PWA. PWA adalah aplikasi web yang bisa dipasang di layar utama ponsel, dibuka seperti aplikasi, tetap bisa bekerja saat koneksi lemah, dan dalam banyak kasus bisa mengirim notifikasi — semuanya tanpa melalui toko aplikasi.",
  },
  {
    type: "p",
    text: "Artikel ini menjelaskan apa itu PWA dengan bahasa yang mudah dipahami pemilik bisnis, kapan PWA menjadi pilihan yang tepat, kapan aplikasi native tetap lebih baik, dan apa saja yang perlu dipertimbangkan sebelum memutuskan.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "PWA adalah aplikasi web yang bisa dipasang di ponsel dan terasa seperti aplikasi, tanpa harus diunduh dari toko aplikasi",
      "Satu basis kode PWA berjalan di Android, iOS, dan desktop, sehingga pengembangan dan pemeliharaan lebih efisien",
      "PWA bisa tetap berfungsi saat koneksi lemah dengan menyimpan data dan halaman penting di perangkat",
      "Aplikasi native masih unggul untuk kebutuhan yang sangat bergantung pada fitur perangkat atau kehadiran di toko aplikasi",
      "Keputusan terbaik dimulai dari cara pengguna Anda benar-benar berinteraksi dengan layanan, bukan dari tren teknologi",
    ],
  },
  { type: "h2", text: "Apa itu PWA, tanpa istilah teknis" },
  {
    type: "p",
    text: "Bayangkan sebuah website yang, ketika dibuka di ponsel, menawarkan untuk dipasang di layar utama. Setelah dipasang, ia muncul dengan ikon sendiri, terbuka di layar penuh tanpa bilah alamat browser, dan terasa seperti aplikasi biasa. Ketika sinyal hilang, halaman yang pernah dibuka tetap bisa diakses, dan data yang diinput bisa disimpan sementara lalu dikirim ketika koneksi kembali. Itulah pengalaman yang ditawarkan PWA.",
  },
  {
    type: "p",
    text: "Secara teknis, PWA tetap sebuah aplikasi web. Ia dibangun dengan teknologi web yang sama, dijalankan oleh browser di perangkat pengguna, dan diperbarui setiap kali pengguna membukanya. Perbedaannya ada pada lapisan tambahan yang memungkinkan aplikasi dipasang, menyimpan data untuk penggunaan offline, dan berinteraksi dengan beberapa fitur perangkat. Bagi pengguna, perbedaan antara PWA yang dibangun dengan baik dan aplikasi native sering kali sulit dirasakan dalam penggunaan sehari-hari.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6",
    alt: "Tangan memegang ponsel yang menampilkan layar utama penuh ikon aplikasi",
    caption: "PWA dapat dipasang di layar utama dan dibuka seperti aplikasi lain, tanpa melalui toko aplikasi.",
  },
  { type: "h2", text: "Keunggulan PWA untuk bisnis" },
  { type: "h3", text: "Satu aplikasi untuk semua perangkat" },
  {
    type: "p",
    text: "Aplikasi native biasanya membutuhkan pengembangan terpisah untuk Android dan iOS, atau setidaknya penyesuaian yang cukup banyak untuk masing-masing platform. PWA dibangun sekali dan berjalan di browser modern pada ponsel, tablet, maupun komputer. Bagi bisnis dengan anggaran terbatas, ini berarti biaya pengembangan dan pemeliharaan yang lebih efisien, serta fitur baru yang tersedia untuk semua pengguna di waktu yang sama.",
  },
  { type: "h3", text: "Tanpa hambatan unduhan" },
  {
    type: "p",
    text: "Setiap langkah tambahan antara pelanggan dan layanan Anda adalah kesempatan bagi mereka untuk berubah pikiran. Meminta pelanggan membuka toko aplikasi, mencari nama aplikasi, menunggu unduhan selesai, lalu mendaftar adalah proses yang panjang. Dengan PWA, pelanggan bisa langsung memakai layanan dari tautan yang dibagikan lewat chat, media sosial, atau kode QR, lalu memasangnya di layar utama jika merasa berguna.",
  },
  { type: "h3", text: "Pembaruan langsung tanpa persetujuan toko aplikasi" },
  {
    type: "p",
    text: "Setiap pembaruan aplikasi native harus melewati proses peninjauan toko aplikasi dan menunggu pengguna memperbaruinya. Pembaruan PWA tersedia begitu dirilis ke server. Perbaikan kesalahan, perubahan harga, atau fitur baru langsung dirasakan semua pengguna, tanpa ada versi lama yang masih beredar di ponsel sebagian pelanggan.",
  },
  { type: "h3", text: "Tetap bisa ditemukan di mesin pencari" },
  {
    type: "p",
    text: "Karena PWA pada dasarnya adalah website, halamannya bisa diindeks mesin pencari. Katalog produk, halaman layanan, atau informasi lokasi di dalam PWA dapat muncul di hasil pencarian, sesuatu yang tidak bisa dilakukan konten di dalam aplikasi native. Bagi bisnis yang mengandalkan pencarian untuk mendatangkan pelanggan baru, ini keuntungan yang signifikan.",
  },
  {
    type: "callout",
    title: "Cocok untuk memulai",
    text: "Jika Anda belum yakin seberapa sering pelanggan akan memakai aplikasi, PWA adalah cara yang relatif rendah risiko untuk mengujinya. Jika penggunaan tumbuh dan kebutuhan fitur perangkat meningkat, pengembangan aplikasi native bisa dipertimbangkan berdasarkan data nyata.",
  },
  { type: "h2", text: "Batasan yang perlu dipahami" },
  {
    type: "p",
    text: "PWA bukan jawaban untuk semua kebutuhan. Beberapa batasan berikut perlu dipertimbangkan secara jujur sebelum memutuskan.",
  },
  {
    type: "ul",
    items: [
      "Akses ke fitur perangkat tertentu — seperti Bluetooth untuk printer khusus, sensor tertentu, atau integrasi mendalam dengan sistem operasi — masih lebih terbatas dibanding aplikasi native",
      "Dukungan fitur bisa berbeda antar platform dan browser, sehingga pengujian di berbagai perangkat tetap penting",
      "Tanpa kehadiran di toko aplikasi, sebagian pengguna mungkin tidak tahu bahwa layanan Anda bisa dipasang seperti aplikasi",
      "Aplikasi yang sangat berat secara grafis atau membutuhkan pemrosesan intensif di perangkat biasanya lebih cocok dibangun native",
      "Kemampuan notifikasi dan fitur latar belakang terus berkembang, jadi periksa dukungan terbaru untuk perangkat yang dipakai pengguna Anda",
    ],
  },
  {
    type: "p",
    text: "Batasan-batasan ini terus bergeser seiring perkembangan browser dan sistem operasi. Fitur yang dulu hanya bisa diakses aplikasi native kini semakin banyak tersedia untuk aplikasi web. Karena itu, keputusan sebaiknya didasarkan pada pengecekan dukungan terkini untuk fitur yang benar-benar Anda butuhkan, bukan pada anggapan umum yang mungkin sudah usang.",
  },
  { type: "h2", text: "Kapan PWA menjadi pilihan yang tepat" },
  {
    type: "p",
    text: "PWA sangat cocok untuk kebutuhan yang sebagian besar berupa menampilkan informasi, mengisi formulir, dan bertransaksi. Beberapa contoh penggunaan yang umum:",
  },
  {
    type: "ul",
    items: [
      "Katalog produk dan pemesanan untuk pelanggan yang memesan secara berkala",
      "Aplikasi internal untuk tim lapangan: laporan kunjungan, pengecekan stok, atau pencatatan pesanan",
      "Portal pelanggan untuk melihat status pesanan, tagihan, dan riwayat transaksi",
      "Sistem reservasi dan antrean untuk bisnis jasa seperti klinik, salon, atau bengkel",
      "Dasbor operasional yang perlu diakses manajemen dari ponsel maupun komputer",
    ],
  },
  {
    type: "p",
    text: "Aplikasi internal adalah salah satu kasus penggunaan yang paling menguntungkan. Tim lapangan tidak perlu mengunduh aplikasi dari toko publik, perusahaan tidak perlu mengelola distribusi aplikasi ke setiap perangkat, dan pembaruan langsung diterima semua orang. Dengan kemampuan offline, pencatatan tetap bisa dilakukan di lokasi dengan sinyal lemah, lalu disinkronkan ketika koneksi kembali.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    alt: "Layar komputer menampilkan kode program di editor dengan logo React di sampingnya",
    caption: "PWA dibangun dengan teknologi web modern yang sama dengan website, lalu dilengkapi kemampuan layaknya aplikasi.",
  },
  {
    type: "p",
    text: "Untuk layanan pelanggan, PWA juga membantu menjaga hubungan setelah transaksi pertama. Pelanggan yang sudah memasang ikon di layar utama lebih mudah kembali untuk memesan ulang, mengecek status pesanan, atau melihat promo terbaru. Ini memberi bisnis saluran komunikasi yang lebih langsung dibanding hanya mengandalkan media sosial, yang jangkauannya ditentukan oleh algoritma platform lain.",
  },
  { type: "h2", text: "Kapan aplikasi native tetap lebih baik" },
  {
    type: "p",
    text: "Aplikasi native tetap menjadi pilihan yang lebih tepat ketika pengalaman pengguna sangat bergantung pada fitur perangkat, performa grafis tinggi, atau kehadiran di toko aplikasi sebagai saluran pemasaran. Contohnya aplikasi yang harus terhubung erat dengan perangkat keras tertentu, aplikasi dengan animasi dan interaksi yang sangat kompleks, atau layanan konsumen yang target penggunanya terbiasa mencari segala sesuatu melalui toko aplikasi.",
  },
  {
    type: "p",
    text: "Pilihannya juga tidak harus salah satu. Banyak bisnis memulai dengan PWA untuk menguji kebutuhan dan membangun basis pengguna, lalu menambahkan aplikasi native di kemudian hari untuk fitur yang memang membutuhkannya. Jika arsitektur back-end dirancang dengan baik sejak awal — misalnya dengan API yang terpisah dari tampilan — kedua jenis aplikasi bisa memakai data dan logika bisnis yang sama.",
  },
  { type: "h2", text: "Perbandingan singkat: website, PWA, dan aplikasi native" },
  {
    type: "p",
    text: "Untuk memudahkan keputusan, bayangkan ketiganya sebagai tingkatan komitmen. Website biasa adalah pintu depan yang terbuka untuk siapa saja: mudah ditemukan, tidak perlu dipasang, tapi hanya bekerja optimal saat online dan jarang dibuka ulang tanpa alasan khusus. PWA menambahkan kemampuan untuk tinggal di layar utama, bekerja saat koneksi lemah, dan terasa lebih cepat saat dibuka berulang kali, dengan tetap mempertahankan keunggulan website dalam hal akses dan pencarian.",
  },
  {
    type: "p",
    text: "Aplikasi native adalah komitmen paling besar, baik dari sisi bisnis maupun pengguna. Bisnis perlu membangun dan memelihara aplikasi untuk setiap platform, sementara pengguna perlu mengunduh dan memberi ruang di ponselnya. Sebagai gantinya, aplikasi native memberi akses paling lengkap ke fitur perangkat dan kehadiran di toko aplikasi.",
  },
  {
    type: "ul",
    items: [
      "Website: terbaik untuk menjangkau dan meyakinkan pengunjung baru",
      "PWA: terbaik untuk layanan yang dipakai berulang kali dengan kebutuhan fitur perangkat yang wajar",
      "Aplikasi native: terbaik untuk pengalaman yang sangat bergantung pada perangkat atau toko aplikasi",
    ],
  },
  {
    type: "p",
    text: "Banyak bisnis sebenarnya berada di tengah: pelanggan memakai layanan cukup sering sehingga website biasa terasa kurang praktis, tapi kebutuhannya tidak cukup kompleks untuk membenarkan dua aplikasi native terpisah. Di posisi inilah PWA biasanya memberi nilai terbaik.",
  },
  { type: "h2", text: "Hal yang perlu dipersiapkan" },
  {
    type: "ol",
    items: [
      "Petakan perilaku pengguna: seberapa sering mereka akan membuka aplikasi, dari perangkat apa, dan dalam kondisi koneksi seperti apa",
      "Daftar fitur perangkat yang benar-benar dibutuhkan, lalu periksa dukungannya di platform yang dipakai pengguna",
      "Tentukan data apa yang harus tersedia saat offline dan bagaimana konflik data ditangani saat sinkronisasi",
      "Rancang cara mengajak pengguna memasang aplikasi di layar utama tanpa terasa memaksa",
      "Pastikan performa dan keamanan diperhatikan sejak awal, termasuk penggunaan koneksi terenkripsi",
    ],
  },
  {
    type: "p",
    text: "Persiapan ini membantu memastikan PWA yang dibangun benar-benar memberi pengalaman seperti aplikasi, bukan sekadar website biasa dengan ikon di layar utama. Perbedaan antara keduanya terletak pada detail: kecepatan membuka, perilaku saat offline, dan kenyamanan navigasi dengan satu tangan.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Teknologi web telah berkembang jauh, dan PWA adalah salah satu hasilnya yang paling praktis untuk bisnis. Bagi banyak kebutuhan — katalog, pemesanan, portal pelanggan, dan aplikasi tim lapangan — PWA menawarkan pengalaman seperti aplikasi dengan biaya dan kerumitan yang lebih rendah. Mulailah dari cara pengguna Anda benar-benar berinteraksi dengan layanan, periksa fitur yang dibutuhkan, lalu pilih pendekatan yang paling sesuai. Keputusan yang didasarkan pada kebutuhan nyata hampir selalu lebih baik daripada keputusan yang didasarkan pada tren.",
  },
  {
    type: "cta",
    title: "Ingin aplikasi untuk pelanggan atau tim, tapi ragu soal pendekatannya?",
    text: "Tim AG·SORA dapat membantu menilai apakah PWA, aplikasi native, atau kombinasi keduanya paling sesuai dengan kebutuhan dan anggaran Anda. Konsultasinya gratis, tanpa komitmen.",
    href: "/services/mobile",
    label: "Konsultasi Gratis",
  },
];
