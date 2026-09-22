import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Setiap awal tahun, daftar 'tren teknologi yang wajib diikuti' beredar di mana-mana, dan sebagian besar bisnis mengabaikannya karena terdengar seperti hype yang tidak relevan dengan operasional sehari-hari. Sikap skeptis itu sering kali beralasan — banyak 'tren' hanyalah kata kunci pemasaran tanpa dampak nyata. Tapi di antara kebisingan itu, ada beberapa pergeseran teknologi yang benar-benar memengaruhi cara bisnis beroperasi, bukan karena sedang tren, tapi karena menyelesaikan masalah yang sudah lama ada.",
  },
  {
    type: "p",
    text: "Artikel ini tidak membahas teknologi yang terdengar futuristik tapi belum siap dipakai bisnis kebanyakan. Fokusnya adalah pergeseran yang sudah cukup matang untuk diterapkan tahun ini, disertai konteks kapan pergeseran itu benar-benar relevan untuk bisnis Anda — dan kapan sebaiknya belum.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "AI automation bergeser dari eksperimen ke alat operasional harian, terutama untuk pekerjaan administratif berulang",
      "Integrasi sistem menjadi kebutuhan dasar, bukan lagi fitur tambahan",
      "Aplikasi yang bekerja offline semakin penting bagi bisnis dengan operasional lapangan",
      "Keamanan data menjadi tanggung jawab dasar setiap bisnis, bukan hanya perusahaan besar",
      "Bukan berarti bisnis harus mengadopsi semuanya sekaligus — relevansi tiap tren berbeda tergantung jenis bisnis",
    ],
  },
  { type: "h2", text: "AI automation: dari eksperimen ke alat operasional" },
  {
    type: "p",
    text: "Beberapa tahun lalu, penggunaan AI dalam bisnis sering terbatas pada eksperimen atau demo yang mengesankan tapi jarang dipakai sungguhan. Pergeseran yang terjadi sekarang adalah AI mulai masuk ke pekerjaan operasional yang sangat spesifik: menjawab pertanyaan pelanggan yang berulang, merangkum dokumen panjang, menyortir data yang masuk dari berbagai sumber, atau membantu menyusun draf laporan rutin.",
  },
  {
    type: "p",
    text: "Yang membedakan penerapan yang berhasil dari yang gagal biasanya bukan seberapa canggih teknologinya, tapi seberapa spesifik masalah yang coba diselesaikan. AI yang diarahkan untuk satu tugas sempit — misalnya menyortir email masuk berdasarkan kategori — jauh lebih mudah berhasil dibanding AI yang diharapkan 'mengotomatiskan customer service' secara keseluruhan tanpa batasan yang jelas.",
  },
  {
    type: "callout",
    title: "Mulai dari satu tugas",
    text: "Daripada mencoba menerapkan AI di banyak proses sekaligus, pilih satu pekerjaan berulang yang paling menghabiskan waktu tim, dan uji di situ dulu. Hasilnya lebih mudah diukur, dan risikonya lebih kecil jika ternyata belum sesuai ekspektasi.",
  },
  { type: "h2", text: "Integrasi sistem: dari nice-to-have menjadi kebutuhan dasar" },
  {
    type: "p",
    text: "Bisnis modern biasanya memakai banyak alat sekaligus — sistem kasir, akuntansi, CRM, platform pembayaran, dan marketplace. Selama bertahun-tahun, banyak bisnis menerima kenyataan bahwa alat-alat ini tidak saling terhubung, dan mengandalkan staf untuk memindahkan data secara manual antar sistem. Pergeseran yang terjadi sekarang adalah integrasi API antar sistem menjadi jauh lebih terjangkau dan lebih mudah diterapkan dibanding beberapa tahun lalu.",
  },
  {
    type: "p",
    text: "Dampaknya terasa langsung: penjualan di kasir otomatis mengurangi stok di sistem inventori, transaksi pembayaran otomatis tercatat di pembukuan, dan data pelanggan tidak perlu diketik ulang di setiap sistem yang berbeda. Bisnis yang masih memindahkan data secara manual antar alat-alat ini kehilangan waktu yang seharusnya bisa dipakai untuk pekerjaan yang lebih bernilai.",
  },
  { type: "h2", text: "Aplikasi yang tetap bekerja tanpa koneksi internet" },
  {
    type: "p",
    text: "Untuk bisnis dengan operasional di lapangan — pengiriman, kunjungan sales, atau layanan di lokasi pelanggan — koneksi internet yang stabil tidak selalu bisa diandalkan. Aplikasi yang dirancang untuk tetap berfungsi saat koneksi terputus, lalu menyinkronkan data begitu koneksi kembali tersedia, semakin menjadi standar yang diharapkan, bukan lagi fitur mewah.",
  },
  {
    type: "p",
    text: "Ini relevan khususnya bagi bisnis yang timnya bekerja di area dengan sinyal tidak stabil — gudang bawah tanah, daerah pinggiran, atau lokasi konstruksi. Kehilangan akses ke data hanya karena sinyal hilang sejenak bisa berarti transaksi yang tertunda atau data yang hilang sama sekali jika tidak dirancang untuk menangani kondisi ini.",
  },
  { type: "h2", text: "Keamanan data: tanggung jawab semua ukuran bisnis" },
  {
    type: "p",
    text: "Anggapan bahwa hanya perusahaan besar yang perlu serius soal keamanan data semakin tidak relevan. Bisnis kecil dan menengah menyimpan data pelanggan, karyawan, dan transaksi keuangan yang sama sensitifnya dengan perusahaan besar, tapi sering kali dengan perlindungan yang jauh lebih minim. Kebocoran data tidak hanya berdampak pada reputasi, tapi juga bisa membawa konsekuensi hukum tergantung jenis data yang bocor.",
  },
  {
    type: "p",
    text: "Praktik keamanan dasar tidak harus rumit atau mahal: kontrol akses berdasarkan peran, pencadangan data yang teratur, dan pembaruan sistem yang rutin sudah menutup sebagian besar celah yang paling sering dieksploitasi. Yang sering hilang bukan anggaran, tapi kesadaran bahwa ini bukan tanggung jawab yang bisa ditunda sampai bisnis 'lebih besar'.",
  },
  { type: "h2", text: "Alat no-code dan low-code mempercepat proses internal" },
  {
    type: "p",
    text: "Tidak semua kebutuhan otomatisasi harus menunggu tim developer membangun sistem dari nol. Alat no-code dan low-code memungkinkan tim non-teknis membangun alur kerja sederhana sendiri — misalnya formulir permintaan yang otomatis masuk ke sistem approval, atau notifikasi otomatis ketika stok menipis — tanpa menulis kode. Ini sangat berguna untuk proses internal yang spesifik bagi satu bisnis dan tidak cukup besar untuk membenarkan proyek pengembangan penuh.",
  },
  {
    type: "p",
    text: "Batasannya juga perlu disadari. Alat no-code cocok untuk alur kerja yang relatif sederhana dan berdiri sendiri, tapi mulai terasa terbatas ketika kebutuhan semakin kompleks atau perlu terhubung mendalam dengan sistem inti bisnis seperti ERP atau database pelanggan. Pada titik itu, pengembangan khusus biasanya memberi hasil yang lebih stabil dalam jangka panjang.",
  },
  { type: "h2", text: "Personalisasi memakai data yang sudah dimiliki bisnis" },
  {
    type: "p",
    text: "Banyak bisnis sebenarnya sudah punya data yang cukup untuk mempersonalisasi pengalaman pelanggan — riwayat pembelian, preferensi produk, atau pola kunjungan — tapi data itu tersebar dan tidak pernah dipakai secara aktif. Pergeseran yang terjadi adalah bisnis mulai memanfaatkan data yang sudah ada ini untuk hal-hal sederhana namun berdampak: rekomendasi produk yang relevan, pengingat pembelian ulang pada waktu yang tepat, atau promosi yang ditargetkan berdasarkan kebiasaan nyata, bukan tebakan.",
  },
  {
    type: "p",
    text: "Yang membuat ini mungkin dilakukan bisnis kecil sekalipun adalah data itu sudah ada di sistem kasir atau CRM yang mereka pakai sehari-hari — tantangannya bukan mengumpulkan data baru, melainkan menyusun cara sederhana untuk memakainya secara konsisten, bukan membiarkannya hanya tersimpan tanpa pernah dianalisis.",
  },
  { type: "h2", text: "Dashboard dan data real-time menggantikan laporan mingguan" },
  {
    type: "p",
    text: "Pergeseran lain yang terjadi pelan-pelan adalah beralihnya kebiasaan menunggu laporan mingguan atau bulanan menjadi memantau dashboard yang datanya diperbarui secara real-time. Pemilik bisnis yang bisa melihat kondisi penjualan, stok, atau arus kas kapan pun dibutuhkan — bukan menunggu laporan disusun — bisa mengambil keputusan lebih cepat saat masalah masih kecil, bukan setelah membesar.",
  },
  {
    type: "p",
    text: "Perubahan ini juga mengurangi beban tim yang sebelumnya menghabiskan waktu menyusun laporan berulang dari data yang sama setiap minggu. Waktu itu bisa dipindahkan ke pekerjaan yang benar-benar butuh analisis, bukan sekadar kompilasi angka.",
  },
  {
    type: "p",
    text: "Pergeseran ini juga membuat rekonsiliasi akhir bulan jauh lebih cepat. Ketika tim keuangan tidak lagi perlu mencocokkan puluhan atau ratusan baris mutasi satu per satu dengan catatan penjualan manual, waktu yang biasanya habis untuk pekerjaan itu bisa dipakai untuk menganalisis tren penjualan atau memeriksa anomali yang benar-benar butuh perhatian.",
  },
  { type: "h2", text: "Cara menilai tren mana yang relevan untuk bisnis Anda" },
  {
    type: "p",
    text: "Tidak semua tren di atas relevan untuk setiap bisnis, dan mencoba mengadopsi semuanya sekaligus biasanya berujung pada proyek yang setengah jalan. Cara yang lebih realistis adalah menilai setiap tren berdasarkan masalah spesifik yang sedang dihadapi bisnis Anda saat ini, bukan berdasarkan seberapa sering tren itu disebut di media.",
  },
  {
    type: "ol",
    items: [
      "Identifikasi satu pekerjaan berulang yang paling menghabiskan waktu tim setiap minggu",
      "Cek apakah ada sistem yang sudah dipakai tapi belum saling terhubung",
      "Tanyakan pada tim lapangan apakah koneksi internet pernah menjadi hambatan nyata",
      "Tinjau kapan terakhir kali kontrol akses dan pencadangan data diperiksa",
      "Perhatikan berapa lama biasanya dibutuhkan untuk mendapat jawaban atas kondisi bisnis terkini",
    ],
  },
  {
    type: "p",
    text: "Dari lima pertanyaan ini, biasanya akan terlihat satu atau dua area yang paling mendesak untuk ditangani lebih dulu — dan itu titik awal yang jauh lebih masuk akal dibanding mencoba mengejar semua tren sekaligus.",
  },
  { type: "h2", text: "Pembayaran digital yang semakin menyatu dengan sistem operasional" },
  {
    type: "p",
    text: "Menerima pembayaran digital — QRIS, transfer instan, atau dompet digital — sudah jadi hal yang umum di hampir semua jenis bisnis. Pergeseran yang lebih baru adalah bagaimana pembayaran-pembayaran ini semakin terhubung langsung dengan sistem pencatatan, sehingga setiap transaksi otomatis masuk ke laporan keuangan tanpa perlu direkap ulang secara manual di akhir hari.",
  },
  {
    type: "p",
    text: "Bagi bisnis yang masih mencocokkan mutasi rekening dengan catatan penjualan secara manual setiap hari, ini adalah salah satu area dengan potensi penghematan waktu paling besar untuk usaha yang relatif kecil. Kesalahan pencocokan manual juga menjadi sumber selisih yang sering sulit ditelusuri — sesuatu yang bisa dihindari sepenuhnya jika pencatatan sudah terhubung sejak transaksi terjadi.",
  },
  { type: "h2", text: "Risiko mengejar tren tanpa kebutuhan yang jelas" },
  {
    type: "p",
    text: "Mengadopsi teknologi karena 'kompetitor sudah pakai' tanpa memahami masalah yang sebenarnya ingin diselesaikan adalah cara paling umum proyek teknologi berakhir sebagai investasi yang tidak terpakai. Alat yang canggih tapi tidak sesuai dengan cara kerja tim biasanya ditinggalkan dalam beberapa bulan, sementara biayanya tetap harus dibayar.",
  },
  {
    type: "p",
    text: "Pendekatan yang lebih aman adalah memulai dari masalah, bukan dari teknologi. Setelah masalahnya jelas, baru dicari teknologi yang paling sesuai untuk menyelesaikannya — bukan sebaliknya, mencari-cari masalah yang cocok dengan teknologi yang sedang populer.",
  },
  {
    type: "p",
    text: "Sinyal paling sederhana untuk mengetahui apakah sebuah tren layak diprioritaskan adalah bertanya: apakah ini menghilangkan pekerjaan yang selama ini dianggap 'ya memang begitu caranya', padahal sebenarnya bisa dilakukan lebih sederhana? Tren yang jawabannya ya biasanya bernilai, terlepas dari seberapa ramai ia dibicarakan di media.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Tren teknologi yang benar-benar berpengaruh biasanya bukan yang paling ramai dibicarakan, tapi yang paling langsung menjawab masalah operasional yang sudah lama dirasakan. AI automation untuk pekerjaan berulang, integrasi sistem yang menghilangkan input ganda, aplikasi yang tetap bekerja tanpa koneksi, dan keamanan data yang mendasar — semuanya bukan soal mengikuti tren, tapi soal menghilangkan gesekan yang sudah terlalu lama dianggap normal.",
  },
  {
    type: "cta",
    title: "Ingin tahu tren mana yang paling relevan untuk bisnis Anda?",
    text: "Ceritakan proses operasional Anda saat ini. Tim AG·SORA akan membantu memetakan teknologi yang benar-benar berdampak, bukan sekadar mengikuti tren — konsultasinya gratis.",
    href: "/services/ai-automation",
    label: "Konsultasi Gratis",
  },
];
