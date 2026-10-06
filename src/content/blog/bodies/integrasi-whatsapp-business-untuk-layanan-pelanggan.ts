import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Di Indonesia, WhatsApp adalah saluran komunikasi yang paling alami antara bisnis dan pelanggan. Orang bertanya harga, menanyakan status pesanan, meminta penawaran, sampai mengajukan komplain lewat WhatsApp, karena aplikasinya sudah ada di ponsel mereka dan terasa lebih akrab daripada email atau formulir di website. Bagi banyak bisnis, WhatsApp bahkan sudah menjadi pintu masuk penjualan yang utama.",
  },
  {
    type: "p",
    text: "Masalahnya muncul ketika volume pesan mulai tumbuh. Satu nomor ponsel dipegang oleh satu atau dua orang, pesan menumpuk di luar jam kerja, riwayat percakapan tersimpan di perangkat pribadi karyawan, dan tidak ada yang tahu persis berapa prospek yang belum dibalas. Saat karyawan itu resign, seluruh riwayat pelanggan ikut pergi bersama ponselnya. Di titik inilah bisnis mulai bertanya tentang integrasi WhatsApp Business ke sistem yang lebih terstruktur.",
  },
  {
    type: "p",
    text: "Artikel ini membahas perbedaan WhatsApp Business biasa dan WhatsApp Business Platform (API), apa saja yang bisa diintegrasikan ke website, aplikasi, CRM, atau ERP, bagaimana merancang alur layanan yang tidak terasa seperti robot, serta hal-hal yang perlu diwaspadai dari sisi kebijakan dan keamanan data. Tujuannya membantu Anda memutuskan apakah integrasi sudah dibutuhkan, dan kalau ya, bagaimana memulainya dengan langkah yang masuk akal.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Aplikasi WhatsApp Business biasa cocok untuk bisnis kecil dengan satu atau dua penjawab; API dibutuhkan saat banyak agen, integrasi sistem, atau otomatisasi diperlukan",
      "Integrasi bernilai paling besar ketika percakapan terhubung ke data pelanggan, pesanan, dan stok, bukan sekadar membalas otomatis",
      "Otomatisasi sebaiknya menangani pertanyaan berulang, sementara kasus yang rumit tetap diteruskan ke manusia dengan konteks lengkap",
      "Kebijakan WhatsApp mengatur izin pelanggan dan jenis pesan yang boleh dikirim; selalu periksa aturan terbaru sebelum merancang alur",
      "Mulai dari satu alur yang jelas, ukur hasilnya, lalu tambah secara bertahap",
    ],
  },
  { type: "h2", text: "WhatsApp Business biasa dan WhatsApp Business Platform" },
  {
    type: "p",
    text: "Ada dua cara menggunakan WhatsApp untuk bisnis, dan keduanya sering tertukar. Cara pertama adalah aplikasi WhatsApp Business yang diunduh di ponsel. Aplikasi ini gratis, mudah dipakai, dan menyediakan fitur dasar seperti profil bisnis, katalog sederhana, label percakapan, serta pesan otomatis untuk salam dan di luar jam kerja. Untuk bisnis kecil dengan satu atau dua orang yang menjawab, ini sering sudah cukup.",
  },
  {
    type: "p",
    text: "Cara kedua adalah WhatsApp Business Platform, yang sering disebut API. Berbeda dari aplikasi, platform ini tidak punya antarmuka percakapan sendiri. Ia dihubungkan ke perangkat lunak lain, misalnya kotak masuk bersama untuk tim, CRM, sistem tiket, atau aplikasi buatan Anda sendiri. Dengan cara ini, banyak agen bisa melayani satu nomor yang sama secara bersamaan, percakapan bisa dicatat ke data pelanggan, dan pesan tertentu bisa dikirim otomatis dari sistem, misalnya konfirmasi pesanan atau pengingat jadwal.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    alt: "Ponsel pintar menampilkan layar utama dengan berbagai ikon aplikasi komunikasi",
    caption: "Pelanggan sudah nyaman di WhatsApp; tantangannya adalah mengelola percakapan itu secara rapi di sisi bisnis.",
  },
  {
    type: "p",
    text: "Akses ke platform ini biasanya melalui penyedia resmi atau langsung melalui Meta, dan ada ketentuan biaya serta verifikasi bisnis yang berlaku. Karena skema harga dan aturannya dapat berubah, kami tidak menuliskan angka di sini; periksa dokumentasi resmi atau tanyakan kepada penyedia yang Anda pilih sebelum menghitung anggaran.",
  },
  { type: "h2", text: "Tanda bisnis Anda sudah perlu integrasi" },
  {
    type: "p",
    text: "Tidak semua bisnis perlu langsung melompat ke API. Beberapa tanda berikut menunjukkan bahwa cara kerja saat ini mulai menghambat.",
  },
  {
    type: "ul",
    items: [
      "Lebih dari dua orang membalas pelanggan dan sering terjadi balasan ganda atau pesan terlewat",
      "Pelanggan harus mengulang cerita yang sama setiap kali berganti penjawab",
      "Tim sales tidak tahu status percakapan dengan prospek tanpa bertanya satu per satu",
      "Konfirmasi pesanan, pengingat pembayaran, atau notifikasi pengiriman masih diketik manual",
      "Riwayat percakapan penting tersimpan di ponsel pribadi karyawan",
      "Pemilik tidak bisa melihat berapa pesan masuk, berapa yang dibalas, dan berapa lama rata-rata waktu responsnya",
    ],
  },
  {
    type: "p",
    text: "Jika dua atau tiga poin di atas terasa akrab, integrasi kemungkinan besar akan memberi dampak nyata. Jika tidak satu pun terasa, sebaiknya bereskan dulu proses di aplikasi biasa; mengotomatisasi proses yang berantakan hanya membuat kekacauannya berjalan lebih cepat.",
  },
  { type: "h2", text: "Apa saja yang bisa diintegrasikan" },
  {
    type: "h3",
    text: "Kotak masuk bersama untuk tim",
  },
  {
    type: "p",
    text: "Fondasi paling dasar adalah satu kotak masuk yang bisa dibuka beberapa agen. Setiap percakapan bisa ditugaskan ke orang tertentu, diberi label, dan dilihat riwayatnya. Pemilik bisa memantau beban kerja dan waktu respons. Hanya dengan langkah ini, banyak bisnis sudah merasakan perbedaan besar: tidak ada lagi pesan yang menggantung karena semua orang mengira orang lain sudah membalasnya.",
  },
  {
    type: "h3",
    text: "Data pelanggan dan CRM",
  },
  {
    type: "p",
    text: "Ketika nomor WhatsApp pelanggan dicocokkan dengan data di CRM, agen langsung melihat siapa yang sedang berbicara: riwayat pembelian, pesanan yang sedang berjalan, catatan dari tim sales, dan status pembayaran. Percakapan baru dari nomor tak dikenal bisa otomatis membuat prospek baru lengkap dengan sumbernya. Ini menjawab masalah klasik data pelanggan yang tersebar di banyak ponsel dan buku catatan.",
  },
  {
    type: "h3",
    text: "Pesanan, stok, dan pembayaran",
  },
  {
    type: "p",
    text: "Integrasi dengan sistem pesanan memungkinkan pelanggan menanyakan status pesanan dan menerima jawaban dari data sebenarnya, bukan dari ingatan karyawan. Notifikasi seperti pesanan diterima, sedang dikemas, dan sudah dikirim bisa dikirim otomatis saat status berubah di sistem. Untuk bisnis yang menerima pembayaran, pengingat tagihan yang sopan dan tepat waktu sering kali menurunkan jumlah piutang yang terlambat tanpa menambah pekerjaan tim keuangan.",
  },
  {
    type: "h3",
    text: "Website dan aplikasi",
  },
  {
    type: "p",
    text: "Tombol WhatsApp di website bisa dibuat lebih cerdas: membawa konteks halaman yang sedang dilihat pengunjung, misalnya produk atau layanan yang diminati, sehingga agen tidak perlu bertanya dari nol. Di aplikasi mobile, hal serupa berlaku untuk bantuan pelanggan: pengguna menekan tombol bantuan dan percakapan terbuka dengan data akun yang relevan sudah menyertai. Pengunjung website yang sulit dilacak sumbernya pun bisa dikaitkan dengan kampanye yang membawa mereka datang.",
  },
  { type: "h2", text: "Merancang alur percakapan yang tidak terasa seperti robot" },
  {
    type: "p",
    text: "Otomatisasi pada WhatsApp sering gagal bukan karena teknologinya, melainkan karena rancangan percakapannya. Pelanggan yang terjebak di menu bertingkat tanpa jalan keluar akan cepat kesal dan beralih ke saluran lain. Beberapa prinsip berikut membantu menjaga pengalaman tetap manusiawi.",
  },
  {
    type: "ol",
    items: [
      "Tentukan dulu pertanyaan yang paling sering muncul, misalnya jam buka, status pesanan, harga dasar, atau cara pembayaran. Otomatisasi hanya untuk hal-hal ini terlebih dahulu",
      "Selalu sediakan jalan keluar ke manusia dengan jelas, misalnya dengan membalas satu kata tertentu atau menekan satu tombol",
      "Teruskan percakapan ke agen beserta ringkasan: siapa pelanggannya, apa yang sudah ditanyakan, dan apa yang sudah dijawab sistem",
      "Gunakan bahasa yang sama dengan yang dipakai tim Anda sehari-hari; nada yang terlalu kaku justru terasa asing",
      "Batasi panjang pesan otomatis dan hindari mengirim banyak pesan beruntun sekaligus",
      "Beri tahu pelanggan kapan mereka bisa mengharapkan balasan dari manusia, terutama di luar jam kerja",
    ],
  },
  {
    type: "callout",
    title: "Otomatisasi bukan pengganti empati",
    text: "Jawaban otomatis cocok untuk informasi yang pasti dan berulang. Komplain, negosiasi harga, dan situasi sensitif tetap sebaiknya ditangani manusia. Rancang sistem agar mengenali kata kunci seperti komplain atau refund lalu langsung meneruskannya ke orang yang tepat.",
  },
  { type: "h2", text: "Kebijakan, izin, dan privasi data" },
  {
    type: "p",
    text: "Berbeda dari saluran pesan pribadi, WhatsApp Business Platform punya aturan yang cukup ketat tentang siapa yang boleh dikirimi pesan dan jenis pesan apa yang boleh dikirim. Secara umum, bisnis perlu mendapat izin pelanggan sebelum mengirim pesan yang dimulai oleh bisnis, dan pesan di luar jendela percakapan aktif biasanya harus memakai templat yang disetujui lebih dulu. Pelanggaran dapat berujung pada pembatasan atau pemblokiran nomor, yang akan sangat mengganggu jika nomor tersebut adalah saluran penjualan utama Anda.",
  },
  {
    type: "p",
    text: "Karena kebijakan ini bisa berubah, jangan merancang alur hanya berdasarkan ingatan atau artikel lama. Baca dokumentasi resmi terbaru, dan pastikan penyedia yang Anda pilih ikut membantu memantau perubahan aturan. Dari sisi pelanggan, sediakan cara yang mudah untuk berhenti menerima pesan, dan hormati permintaan itu secara konsisten.",
  },
  {
    type: "p",
    text: "Dari sisi data, percakapan WhatsApp berisi informasi pribadi pelanggan: nama, nomor telepon, alamat, kadang dokumen. Saat percakapan dihubungkan ke sistem Anda, data itu menjadi tanggung jawab bisnis. Pastikan akses ke kotak masuk dibatasi sesuai peran, jejak akses tercatat, data disimpan dengan enkripsi, dan ada kebijakan penyimpanan yang jelas tentang berapa lama riwayat disimpan. Untuk bisnis yang mengelola data pribadi dalam jumlah besar, tinjau juga kewajiban pelindungan data pribadi yang berlaku dan konsultasikan dengan penasihat hukum.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957",
    alt: "Ponsel pintar menampilkan ikon kunci keamanan di atas meja kayu",
    caption: "Percakapan pelanggan sering tersebar di banyak perangkat; integrasi menyatukannya di satu tempat yang terkontrol.",
  },
  { type: "h2", text: "Langkah memulai integrasi secara bertahap" },
  {
    type: "p",
    text: "Seperti proyek sistem lainnya, integrasi WhatsApp paling berhasil ketika dimulai kecil dan terukur. Berikut urutan yang biasanya masuk akal.",
  },
  {
    type: "h3",
    text: "Tahap 1: rapikan yang sudah ada",
  },
  {
    type: "p",
    text: "Sebelum menyentuh teknologi, petakan bagaimana percakapan WhatsApp mengalir sekarang. Siapa yang menjawab, jenis pertanyaan apa yang paling sering, di mana pesan sering terlewat, dan informasi apa yang perlu dilihat agen saat menjawab. Dokumentasikan 10 sampai 20 pertanyaan paling umum beserta jawaban terbaiknya. Dokumen sederhana ini akan menjadi bahan baku seluruh otomatisasi berikutnya.",
  },
  {
    type: "h3",
    text: "Tahap 2: kotak masuk bersama dan pencatatan pelanggan",
  },
  {
    type: "p",
    text: "Pindahkan nomor ke platform dengan kotak masuk bersama, hubungkan ke data pelanggan, dan latih tim menggunakan label serta penugasan. Pada tahap ini belum ada otomatisasi pesan sama sekali. Tujuannya membuat tim terbiasa dengan satu tempat kerja baru dan memberi pemilik visibilitas pertama atas volume serta waktu respons.",
  },
  {
    type: "h3",
    text: "Tahap 3: otomatisasi untuk hal yang pasti",
  },
  {
    type: "p",
    text: "Setelah tim nyaman, tambahkan pesan sambutan, jawaban untuk pertanyaan berulang, dan notifikasi transaksi yang dipicu oleh perubahan status di sistem. Mulai dari satu atau dua alur, misalnya konfirmasi pesanan dan pengingat jadwal, lalu perhatikan bagaimana pelanggan merespons sebelum menambah yang lain.",
  },
  {
    type: "h3",
    text: "Tahap 4: ukur dan sempurnakan",
  },
  {
    type: "p",
    text: "Pantau metrik sederhana yang relevan: waktu respons pertama, jumlah percakapan yang diteruskan ke manusia, pertanyaan yang tidak terjawab otomatis, dan umpan balik pelanggan. Gunakan data itu untuk menyempurnakan jawaban dan menambah topik baru. Jangan mengejar persentase otomatisasi setinggi mungkin; ukuran keberhasilan yang lebih sehat adalah pelanggan terbantu lebih cepat dan tim punya waktu lebih banyak untuk kasus yang benar-benar butuh perhatian.",
  },
  { type: "h2", text: "Kesalahan yang sering terjadi" },
  {
    type: "ul",
    items: [
      "Mengirim pesan massal tanpa izin jelas, sehingga nomor dilaporkan dan dibatasi",
      "Membangun menu otomatis yang terlalu panjang dan tidak menyediakan jalan keluar ke manusia",
      "Mengintegrasikan WhatsApp tanpa merapikan data pelanggan terlebih dahulu, sehingga agen melihat data ganda atau usang",
      "Tidak menetapkan siapa yang bertanggung jawab atas percakapan di luar jam kerja",
      "Memberi akses ke seluruh riwayat percakapan kepada semua karyawan tanpa pembatasan peran",
      "Menganggap proyek selesai saat peluncuran, padahal jawaban otomatis perlu diperbarui seiring perubahan produk, harga, dan kebijakan",
    ],
  },
  { type: "h2", text: "Mengukur dampaknya terhadap bisnis" },
  {
    type: "p",
    text: "Tanpa ukuran, sulit membuktikan bahwa integrasi sepadan dengan biayanya. Tetapkan beberapa indikator sebelum memulai, lalu bandingkan setelah beberapa bulan berjalan. Indikator yang berguna antara lain rata-rata waktu respons pertama, jumlah prospek yang tidak dibalas, jumlah percakapan yang berhasil menjadi pesanan, serta waktu yang dihabiskan tim untuk membalas pertanyaan berulang. Perhatikan juga indikator kualitatif seperti komentar pelanggan dan beban kerja yang dirasakan tim.",
  },
  {
    type: "p",
    text: "Hindari membandingkan dengan angka industri yang tidak jelas sumbernya. Bandingkan bisnis Anda dengan dirinya sendiri sebelum dan sesudah integrasi; itulah perbandingan yang paling jujur dan paling berguna untuk pengambilan keputusan berikutnya.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "WhatsApp tidak perlu diganti dengan saluran lain; pelanggan sudah ada di sana. Yang perlu ditingkatkan adalah cara bisnis mengelola percakapan itu: terhubung ke data pelanggan, terbagi rata di antara tim, dibantu otomatisasi untuk hal-hal yang berulang, dan tetap dijaga oleh manusia untuk hal-hal yang penting. Mulailah dari proses yang sudah ada, rapikan, lalu integrasikan selangkah demi selangkah dengan ukuran keberhasilan yang jelas.",
  },
  {
    type: "cta",
    title: "Ingin menghubungkan WhatsApp ke sistem bisnis Anda?",
    text: "Tim AG·SORA dapat membantu merancang integrasi WhatsApp dengan website, CRM, atau aplikasi Anda, mulai dari alur percakapan sampai keamanan datanya. Konsultasinya gratis, tanpa komitmen.",
    href: "/services/custom-software",
    label: "Konsultasi Gratis",
  },
];
