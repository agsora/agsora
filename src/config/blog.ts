/**
 * Blog content.
 *
 * Posts are stored as structured blocks rather than markdown so the whole
 * blog stays type-safe with zero parsing dependencies and zero build config.
 *
 * Editorial rule: these articles must not contain invented statistics,
 * fabricated case studies, or named clients. Where a claim would need a
 * source, the writing explains the reasoning instead of citing a number.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string };

export type BlogCategory =
  | "Strategi Bisnis"
  | "ERP & Operasional"
  | "POS & Retail"
  | "HR & Tim"
  | "Teknologi"
  | "Panduan Memilih";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string; // ISO date
  readingMinutes: number;
  body: Block[];
};

export const blogCategories: BlogCategory[] = [
  "Strategi Bisnis",
  "ERP & Operasional",
  "POS & Retail",
  "HR & Tim",
  "Teknologi",
  "Panduan Memilih",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "tanda-bisnis-anda-sudah-butuh-erp",
    title: "7 Tanda Bisnis Anda Sudah Butuh ERP",
    excerpt:
      "ERP bukan soal ukuran perusahaan, tapi soal seberapa mahal kekacauan datanya. Ini gejala yang biasanya muncul sebelum sebuah bisnis memutuskan pindah sistem.",
    category: "ERP & Operasional",
    publishedAt: "2026-09-08",
    readingMinutes: 7,
    body: [
      {
        type: "p",
        text: "Banyak pemilik bisnis menunda ERP karena menganggapnya sistem untuk perusahaan besar. Padahal yang menentukan bukan jumlah karyawan atau omzet, melainkan seberapa besar biaya yang timbul karena data tersebar di banyak tempat. Berikut tanda-tanda yang biasanya muncul lebih dulu.",
      },
      { type: "h2", text: "1. Laporan bulanan selalu terlambat" },
      {
        type: "p",
        text: "Jika tutup buku selalu molor karena harus menunggu rekap dari beberapa divisi, masalahnya bukan pada kedisiplinan tim. Itu gejala bahwa data tidak mengalir otomatis dan setiap laporan harus dirakit ulang secara manual setiap bulan.",
      },
      { type: "h2", text: "2. Angka stok di sistem berbeda dengan fisik" },
      {
        type: "p",
        text: "Selisih stok yang berulang biasanya bukan karena kelalaian satu orang, melainkan karena pergerakan barang dicatat di lebih dari satu tempat — nota manual, spreadsheet gudang, dan aplikasi kasir yang tidak saling bicara.",
      },
      { type: "h2", text: "3. Satu transaksi diinput berkali-kali" },
      {
        type: "p",
        text: "Perhatikan berapa kali satu penjualan diketik ulang: di kasir, di rekap penjualan, di kartu stok, lalu di pembukuan. Setiap pengetikan ulang adalah peluang kesalahan sekaligus waktu kerja yang terbuang.",
      },
      { type: "h2", text: "4. Keputusan diambil dari data minggu lalu" },
      {
        type: "p",
        text: "Ketika Anda hanya bisa melihat kondisi bisnis setelah rekap selesai, keputusan selalu tertinggal dari keadaan sebenarnya. Untuk bisnis dengan perputaran cepat, jeda beberapa hari saja sudah cukup untuk salah mengambil langkah.",
      },
      { type: "h2", text: "5. Menambah cabang terasa jauh lebih berat" },
      {
        type: "p",
        text: "Kalau membuka cabang kedua membuat beban administrasi naik lebih dari dua kali lipat, sistem Anda tidak dirancang untuk bertumbuh. Sistem yang sehat seharusnya membuat cabang berikutnya lebih mudah, bukan lebih sulit.",
      },
      { type: "h2", text: "6. Terlalu bergantung pada satu orang" },
      {
        type: "p",
        text: "Jika hanya satu orang yang paham cara merapikan laporan atau memperbaiki data yang kacau, bisnis Anda menanggung risiko yang tidak perlu. Pengetahuan operasional seharusnya ada di sistem, bukan hanya di kepala seseorang.",
      },
      { type: "h2", text: "7. Spreadsheet mulai saling menyalin" },
      {
        type: "p",
        text: "Tanda paling jelas: ada file rekap yang isinya menyalin dari file lain, lalu dipakai file berikutnya. Rantai seperti ini rapuh — satu perubahan di hulu tidak akan terbawa ke hilir, dan tidak ada yang tahu versi mana yang benar.",
      },
      {
        type: "callout",
        title: "Tidak harus langsung menyeluruh",
        text: "ERP tidak wajib diimplementasikan sekaligus. Banyak bisnis mulai dari modul yang paling menyakitkan — biasanya inventori atau keuangan — lalu memperluas setelah tim terbiasa.",
      },
      { type: "h2", text: "Yang perlu disiapkan sebelum mulai" },
      {
        type: "p",
        text: "Sebelum bicara software, petakan dulu alur kerja yang berjalan hari ini, termasuk yang tidak tertulis. Implementasi ERP paling sering gagal bukan karena aplikasinya kurang canggih, tapi karena sistem dibangun di atas asumsi proses yang ternyata berbeda dengan praktik di lapangan.",
      },
    ],
  },
  {
    slug: "custom-software-vs-software-jadi",
    title: "Custom Software atau Software Jadi? Cara Memutuskannya",
    excerpt:
      "Keduanya punya tempat masing-masing. Yang menentukan bukan anggaran, tapi seberapa unik proses bisnis Anda dan seberapa cepat Anda butuh berjalan.",
    category: "Panduan Memilih",
    publishedAt: "2026-09-04",
    readingMinutes: 6,
    body: [
      {
        type: "p",
        text: "Pertanyaan ini muncul di hampir setiap diskusi awal. Jawabannya jarang mutlak, tapi ada beberapa pertimbangan yang biasanya cukup untuk mengarahkan keputusan.",
      },
      { type: "h2", text: "Pilih software jadi ketika…" },
      {
        type: "ul",
        items: [
          "Proses bisnis Anda relatif standar dan tidak banyak pengecualian",
          "Anda butuh berjalan dalam hitungan hari, bukan bulan",
          "Anggaran awal terbatas dan lebih nyaman dengan biaya bulanan",
          "Tim belum punya kapasitas untuk terlibat panjang dalam proses pengembangan",
        ],
      },
      {
        type: "p",
        text: "Produk jadi sudah melewati banyak siklus perbaikan dari banyak pengguna. Anda mendapat sistem yang matang tanpa menanggung biaya dan risiko membangunnya.",
      },
      { type: "h2", text: "Pilih custom development ketika…" },
      {
        type: "ul",
        items: [
          "Alur kerja Anda berbeda dari kebanyakan bisnis sejenis",
          "Cara kerja itu justru bagian dari keunggulan Anda",
          "Butuh integrasi khusus dengan sistem yang sudah berjalan",
          "Ada aturan internal atau regulasi yang tidak diakomodasi produk umum",
          "Biaya lisensi per user mulai lebih mahal daripada membangun sendiri",
        ],
      },
      {
        type: "callout",
        title: "Pertanyaan penyaring yang paling berguna",
        text: "Jika Anda harus mengubah cara kerja tim agar cocok dengan sebuah software — apakah perubahan itu perbaikan, atau justru mengorbankan sesuatu yang selama ini membuat Anda unggul? Kalau perbaikan, pakai produk jadi. Kalau mengorbankan, pertimbangkan custom.",
      },
      { type: "h2", text: "Jalan tengah yang sering terlewat" },
      {
        type: "p",
        text: "Tidak harus memilih salah satu untuk seluruh operasional. Banyak bisnis memakai produk jadi untuk fungsi yang standar — absensi, akuntansi dasar — lalu membangun custom hanya pada bagian yang benar-benar membedakan mereka. Selama sistemnya bisa saling terhubung lewat API, kombinasi ini sering paling masuk akal secara biaya.",
      },
      { type: "h2", text: "Biaya yang sering tidak dihitung" },
      {
        type: "p",
        text: "Pada software jadi, biaya yang terlewat biasanya adalah lisensi per user saat tim bertambah, dan pekerjaan manual yang tetap harus dilakukan karena ada proses yang tidak didukung. Pada custom development, yang terlewat adalah pemeliharaan jangka panjang dan waktu tim internal yang harus terlibat selama pengembangan.",
      },
      {
        type: "p",
        text: "Hitung keduanya dalam rentang tiga tahun, bukan hanya biaya awal. Perbandingannya sering berubah cukup jauh.",
      },
    ],
  },
  {
    slug: "memilih-sistem-pos-multi-outlet",
    title: "Memilih Sistem POS untuk Bisnis Multi-Outlet",
    excerpt:
      "Sistem kasir yang bekerja baik di satu toko belum tentu sanggup menangani lima. Ini yang berubah ketika outlet bertambah.",
    category: "POS & Retail",
    publishedAt: "2026-08-30",
    readingMinutes: 6,
    body: [
      {
        type: "p",
        text: "Saat masih satu outlet, hampir semua aplikasi kasir terasa cukup. Masalah baru muncul di outlet kedua dan ketiga, ketika pertanyaan berubah dari “berapa penjualan hari ini” menjadi “outlet mana yang paling menguntungkan, dan kenapa”.",
      },
      { type: "h2", text: "Kemampuan yang jadi wajib setelah outlet bertambah" },
      { type: "h3", text: "Konsolidasi laporan otomatis" },
      {
        type: "p",
        text: "Anda harus bisa melihat performa seluruh outlet dalam satu tampilan, tanpa mengunduh laporan satu per satu lalu menggabungkannya di spreadsheet. Kalau proses ini masih manual, laporan gabungan akan selalu tertinggal.",
      },
      { type: "h3", text: "Stok per lokasi, bukan stok global" },
      {
        type: "p",
        text: "Sistem harus tahu barang ada di outlet mana, bukan sekadar total keseluruhan. Tanpa ini, Anda akan sering menemukan barang menumpuk di satu tempat sementara outlet lain kehabisan.",
      },
      { type: "h3", text: "Transfer antar outlet yang tercatat" },
      {
        type: "p",
        text: "Perpindahan barang antar lokasi perlu punya jejak: siapa mengirim, siapa menerima, kapan. Tanpa pencatatan ini, selisih stok akan sulit ditelusuri.",
      },
      { type: "h3", text: "Hak akses berjenjang" },
      {
        type: "p",
        text: "Kasir, supervisor outlet, dan pemilik butuh tingkat akses berbeda. Diskon, void transaksi, dan penyesuaian stok sebaiknya hanya bisa dilakukan level tertentu, dan selalu tercatat.",
      },
      { type: "h3", text: "Tetap jalan saat internet mati" },
      {
        type: "p",
        text: "Ini sering diabaikan sampai kejadian. Sistem kasir harus bisa tetap melayani transaksi ketika koneksi terputus, lalu menyinkronkan data begitu koneksi kembali. Outlet yang berhenti melayani karena internet bermasalah adalah kerugian langsung.",
      },
      {
        type: "callout",
        title: "Uji sebelum memutuskan",
        text: "Minta demo dengan skenario yang paling merepotkan di bisnis Anda — retur barang, diskon khusus, transaksi batal setelah struk tercetak. Fitur dasar hampir selalu berjalan mulus saat demo; yang membedakan adalah penanganan kasus tidak normal.",
      },
      { type: "h2", text: "Pertimbangan yang muncul belakangan" },
      {
        type: "p",
        text: "Dua hal yang biasanya baru terasa setelah beberapa bulan: apakah data Anda bisa diekspor sewaktu-waktu, dan apakah sistem bisa disambungkan ke software akuntansi atau ERP nanti. Keduanya menentukan seberapa mudah Anda berpindah atau berkembang di kemudian hari.",
      },
    ],
  },
  {
    slug: "kesalahan-umum-implementasi-hris",
    title: "Kesalahan yang Sering Terjadi Saat Menerapkan HRIS",
    excerpt:
      "Sistem HR gagal biasanya bukan karena fiturnya kurang, tapi karena penerapannya melewatkan hal-hal yang tampak sepele.",
    category: "HR & Tim",
    publishedAt: "2026-08-26",
    readingMinutes: 6,
    body: [
      {
        type: "p",
        text: "HRIS menyentuh hal yang sensitif: kehadiran, gaji, dan penilaian kinerja. Karena itu kesalahan penerapan dampaknya cepat terasa dan cepat menurunkan kepercayaan tim.",
      },
      { type: "h2", text: "Menyalin aturan yang belum jelas" },
      {
        type: "p",
        text: "Banyak perusahaan menemukan bahwa aturan cuti atau lembur mereka sebenarnya tidak pernah tertulis rapi — ada kebiasaan, pengecualian, dan kebijakan lisan. Memindahkan kondisi ini ke sistem tanpa dibereskan lebih dulu hanya akan membuat aturan yang kabur jadi kaku dan salah.",
      },
      {
        type: "p",
        text: "Rapikan dulu kebijakannya, baru diterjemahkan ke sistem.",
      },
      { type: "h2", text: "Mengabaikan pengecualian yang nyata" },
      {
        type: "p",
        text: "Selalu ada kasus yang tidak standar: karyawan shift, staf lapangan tanpa jam tetap, tim yang bekerja lintas hari. Kalau sistem hanya mengakomodasi karyawan kantor jam sembilan sampai lima, bagian lain akan kembali ke pencatatan manual — dan Anda berakhir dengan dua sistem.",
      },
      { type: "h2", text: "Mulai dari payroll" },
      {
        type: "p",
        text: "Payroll adalah modul yang paling tidak memaafkan kesalahan. Memulai dari sana berarti risiko tertinggi ada di awal, saat tim belum terbiasa dengan sistem. Lebih aman memulai dari data karyawan dan absensi, memastikan datanya bersih, baru masuk ke perhitungan gaji.",
      },
      { type: "h2", text: "Menganggap pelatihan sebagai formalitas" },
      {
        type: "p",
        text: "Pengguna HRIS bukan hanya tim HR, tapi seluruh karyawan. Jika pengajuan cuti terasa membingungkan, orang akan kembali mengirim pesan ke atasan seperti sebelumnya, dan data di sistem tidak akan pernah mencerminkan kenyataan.",
      },
      {
        type: "callout",
        title: "Jalankan paralel sebelum beralih penuh",
        text: "Untuk satu atau dua siklus gaji, jalankan sistem lama dan baru bersamaan lalu bandingkan hasilnya. Ini cara paling murah untuk menemukan selisih perhitungan sebelum berdampak ke slip gaji karyawan.",
      },
      { type: "h2", text: "Melupakan siapa pemilik datanya" },
      {
        type: "p",
        text: "Data karyawan termasuk informasi pribadi. Pastikan sejak awal siapa yang boleh mengakses apa, di mana data disimpan, dan bagaimana prosedurnya jika karyawan meminta koreksi. Ini lebih mudah ditetapkan di awal daripada dirapikan setelah sistem berjalan.",
      },
    ],
  },
  {
    slug: "menghitung-biaya-sebenarnya-project-software",
    title: "Menghitung Biaya Sebenarnya dari Sebuah Project Software",
    excerpt:
      "Angka penawaran hanya sebagian dari total biaya. Ini komponen yang sering baru muncul setelah project berjalan.",
    category: "Strategi Bisnis",
    publishedAt: "2026-08-21",
    readingMinutes: 7,
    body: [
      {
        type: "p",
        text: "Membandingkan dua penawaran hanya dari angka totalnya hampir selalu menyesatkan. Yang perlu dibandingkan adalah total biaya kepemilikan selama beberapa tahun, termasuk komponen yang tidak muncul di halaman penawaran.",
      },
      { type: "h2", text: "Biaya yang terlihat" },
      {
        type: "ul",
        items: [
          "Biaya pengembangan sesuai ruang lingkup yang disepakati",
          "Biaya pemeliharaan bulanan setelah rilis",
          "Layanan pihak ketiga: domain, hosting, payment gateway, lisensi API",
        ],
      },
      { type: "h2", text: "Biaya yang sering terlewat" },
      { type: "h3", text: "Waktu tim internal Anda" },
      {
        type: "p",
        text: "Project software menuntut keterlibatan orang yang paling paham proses bisnis — dan orang itu biasanya juga yang paling sibuk. Waktu mereka untuk diskusi, pengujian, dan validasi adalah biaya nyata meski tidak tercatat sebagai pengeluaran.",
      },
      { type: "h3", text: "Pembersihan dan migrasi data" },
      {
        type: "p",
        text: "Data lama hampir tidak pernah rapi: format berbeda, duplikat, kolom kosong. Merapikannya butuh waktu, dan sering kali hanya tim Anda yang tahu mana data yang benar.",
      },
      { type: "h3", text: "Penurunan produktivitas saat transisi" },
      {
        type: "p",
        text: "Selama beberapa minggu pertama, tim bekerja lebih lambat karena sedang menyesuaikan diri. Ini normal dan sementara, tapi sebaiknya diperhitungkan — terutama jika transisi dilakukan di musim sibuk.",
      },
      { type: "h3", text: "Perubahan ruang lingkup" },
      {
        type: "p",
        text: "Hampir setiap project menemukan kebutuhan yang belum terpikir di awal. Menyiapkan cadangan anggaran untuk ini lebih sehat daripada memaksakan ruang lingkup awal yang ternyata kurang tepat.",
      },
      {
        type: "callout",
        title: "Pertanyaan yang layak diajukan ke vendor",
        text: "Apa yang termasuk dan tidak termasuk dalam angka ini? Bagaimana perubahan kebutuhan dihitung? Berapa biaya menjalankan sistem ini setiap bulan setelah rilis? Jawaban yang jelas untuk ketiganya lebih bernilai daripada penawaran yang sekadar murah.",
      },
      { type: "h2", text: "Cara membandingkan yang lebih adil" },
      {
        type: "p",
        text: "Susun perbandingan dalam rentang tiga tahun: biaya awal, ditambah pemeliharaan, ditambah layanan pihak ketiga, ditambah perkiraan pengembangan lanjutan. Penawaran termurah di awal cukup sering berakhir paling mahal ketika dilihat dari rentang ini.",
      },
    ],
  },
  {
    slug: "biaya-tersembunyi-data-silo",
    title: "Data Silo: Biaya yang Jarang Dihitung",
    excerpt:
      "Ketika setiap divisi punya catatan sendiri, biayanya tidak muncul sebagai tagihan — melainkan sebagai waktu, selisih, dan keputusan yang meleset.",
    category: "ERP & Operasional",
    publishedAt: "2026-08-16",
    readingMinutes: 5,
    body: [
      {
        type: "p",
        text: "Data silo terjadi ketika informasi yang sama disimpan terpisah oleh divisi yang berbeda, tanpa satu sumber yang disepakati. Kondisi ini jarang disadari sebagai masalah karena setiap divisi merasa catatannya sudah benar.",
      },
      { type: "h2", text: "Bagaimana silo terbentuk" },
      {
        type: "p",
        text: "Hampir selalu dari niat baik. Satu tim butuh laporan yang tidak disediakan sistem, lalu membuat spreadsheet sendiri. Tim lain melakukan hal serupa untuk kebutuhan berbeda. Beberapa bulan kemudian, ada empat versi angka penjualan dan tidak ada yang salah sepenuhnya.",
      },
      { type: "h2", text: "Biaya yang muncul" },
      {
        type: "ul",
        items: [
          "Waktu terbuang untuk merekonsiliasi angka yang berbeda antar divisi",
          "Rapat yang habis untuk menyepakati data, bukan mengambil keputusan",
          "Keputusan yang diambil dari versi data yang ternyata bukan yang terbaru",
          "Pekerjaan input ganda yang tidak menambah nilai apa pun",
          "Kesulitan audit karena jejak perubahan tidak lengkap",
        ],
      },
      {
        type: "callout",
        title: "Gejala paling mudah dikenali",
        text: "Jika rapat rutin Anda dimulai dengan perdebatan tentang angka mana yang benar, Anda sedang membayar biaya data silo setiap minggu.",
      },
      { type: "h2", text: "Menyelesaikannya secara bertahap" },
      {
        type: "p",
        text: "Tidak perlu mengganti semua sistem sekaligus. Mulai dari menentukan satu sumber resmi untuk data yang paling sering diperdebatkan — biasanya stok atau penjualan. Sistem lain boleh tetap ada, asalkan mengambil dari sumber itu, bukan menyimpan versinya sendiri.",
      },
      {
        type: "p",
        text: "Setelah satu jenis data punya sumber tunggal yang dipercaya semua divisi, pola yang sama biasanya lebih mudah diterapkan ke data berikutnya.",
      },
    ],
  },
  {
    slug: "persiapan-migrasi-data-sistem-baru",
    title: "Persiapan Migrasi Data ke Sistem Baru",
    excerpt:
      "Migrasi data adalah bagian yang paling sering diremehkan dan paling sering menunda peluncuran. Ini cara menyiapkannya.",
    category: "Teknologi",
    publishedAt: "2026-08-11",
    readingMinutes: 6,
    body: [
      {
        type: "p",
        text: "Dalam banyak project, pengembangan selesai tepat waktu tetapi peluncuran tertunda karena data lama belum siap. Menyiapkan data sejak awal — paralel dengan pengembangan — hampir selalu menghemat waktu di akhir.",
      },
      { type: "h2", text: "Tentukan data mana yang benar-benar dibawa" },
      {
        type: "p",
        text: "Tidak semua data lama perlu dipindahkan. Data master seperti produk, pelanggan, dan karyawan hampir selalu wajib. Data transaksi bertahun-tahun ke belakang sering cukup disimpan sebagai arsip terpisah, tidak dimasukkan ke sistem baru.",
      },
      {
        type: "p",
        text: "Memindahkan lebih sedikit data berarti lebih sedikit yang harus dibersihkan, diuji, dan diperbaiki.",
      },
      { type: "h2", text: "Bersihkan sebelum dipindahkan" },
      {
        type: "ul",
        items: [
          "Hapus duplikat — pelanggan atau produk yang tercatat lebih dari sekali",
          "Seragamkan format: tanggal, nomor telepon, satuan, penulisan nama",
          "Lengkapi kolom kosong yang akan jadi wajib di sistem baru",
          "Tandai data tidak aktif agar tidak ikut terbawa",
        ],
      },
      {
        type: "callout",
        title: "Migrasi bukan momen untuk memperbaiki semuanya",
        text: "Godaan terbesar saat migrasi adalah sekalian merapikan seluruh data historis. Batasi pada yang memengaruhi jalannya sistem baru; sisanya bisa dirapikan setelah berjalan.",
      },
      { type: "h2", text: "Uji dengan data sungguhan" },
      {
        type: "p",
        text: "Lakukan migrasi percobaan memakai salinan data asli, lalu minta orang yang paling paham operasional memeriksa hasilnya. Mereka akan langsung menyadari kejanggalan yang tidak akan terlihat oleh siapa pun yang tidak menjalankan proses itu sehari-hari.",
      },
      { type: "h2", text: "Siapkan rencana mundur" },
      {
        type: "p",
        text: "Sebelum peralihan, pastikan ada cadangan lengkap data lama dan kesepakatan tentang apa yang dilakukan jika ada masalah besar di hari pertama. Rencana ini jarang dipakai, tapi ketiadaannya membuat keputusan di saat genting jadi jauh lebih sulit.",
      },
    ],
  },
  {
    slug: "memulai-ai-automation-untuk-operasional",
    title: "Memulai AI Automation untuk Operasional Bisnis",
    excerpt:
      "Bukan soal mengganti orang, tapi memindahkan pekerjaan berulang yang menghabiskan waktu tanpa menambah nilai.",
    category: "Teknologi",
    publishedAt: "2026-08-06",
    readingMinutes: 6,
    body: [
      {
        type: "p",
        text: "Otomatisasi berbasis AI paling berhasil ketika diterapkan pada pekerjaan yang membosankan, berulang, dan punya pola jelas — bukan pada keputusan yang butuh pertimbangan manusia.",
      },
      { type: "h2", text: "Mulai dari pekerjaan yang paling sering diulang" },
      {
        type: "p",
        text: "Cara paling sederhana menemukan kandidatnya: minta tim mencatat pekerjaan yang mereka lakukan lebih dari lima kali seminggu dengan langkah yang hampir sama persis. Daftar itu biasanya sudah cukup untuk menentukan prioritas.",
      },
      { type: "h3", text: "Contoh yang umum ditemui" },
      {
        type: "ul",
        items: [
          "Menjawab pertanyaan pelanggan yang berulang seperti jam operasional atau status pesanan",
          "Merangkum masukan pelanggan menjadi kategori untuk ditindaklanjuti",
          "Menyalin data dari dokumen atau formulir ke dalam sistem",
          "Menyusun draf laporan rutin dari data yang sudah tersedia",
        ],
      },
      { type: "h2", text: "Tetapkan batas sejak awal" },
      {
        type: "p",
        text: "Tentukan mana yang boleh diputuskan otomatis dan mana yang harus melewati persetujuan manusia. Untuk hal yang menyangkut uang, komitmen ke pelanggan, atau data pribadi, sebaiknya selalu ada pemeriksaan manusia sebelum dieksekusi.",
      },
      {
        type: "callout",
        title: "Ukur sebelum dan sesudah",
        text: "Catat waktu yang dihabiskan untuk pekerjaan itu sebelum otomatisasi diterapkan. Tanpa angka pembanding, sulit menilai apakah otomatisasinya benar-benar membantu atau hanya memindahkan pekerjaan.",
      },
      { type: "h2", text: "Hal yang perlu diantisipasi" },
      {
        type: "p",
        text: "Sistem otomatis akan salah pada kasus yang tidak biasa. Karena itu perlu ada jalur agar pekerjaan bisa diambil alih manusia ketika hasilnya meragukan, serta catatan yang memungkinkan Anda menelusuri kenapa suatu keputusan diambil.",
      },
      {
        type: "p",
        text: "Mulai dari satu proses, jalankan beberapa minggu, evaluasi, baru perluas. Otomatisasi yang diterapkan serentak ke banyak proses sekaligus sulit dievaluasi ketika ada yang tidak berjalan sesuai harapan.",
      },
    ],
  },
  {
    slug: "checklist-memilih-software-house",
    title: "Checklist Memilih Software House",
    excerpt:
      "Yang membedakan vendor bukan portofolio yang paling banyak, tapi kejelasan cara mereka bekerja dan jujur soal batasannya.",
    category: "Panduan Memilih",
    publishedAt: "2026-07-31",
    readingMinutes: 7,
    body: [
      {
        type: "p",
        text: "Memilih mitra pengembangan adalah keputusan yang dampaknya terasa bertahun-tahun. Berikut hal-hal yang layak diperiksa sebelum menandatangani apa pun.",
      },
      { type: "h2", text: "Cara mereka menanggapi kebutuhan Anda" },
      {
        type: "p",
        text: "Perhatikan apakah pertanyaan mereka menggali proses bisnis Anda, atau langsung menawarkan solusi. Vendor yang langsung memberi angka tanpa memahami alur kerja biasanya akan menemukan banyak kejutan di tengah pengerjaan — dan kejutan itu berujung pada tambahan biaya.",
      },
      { type: "h2", text: "Kejelasan ruang lingkup" },
      {
        type: "ul",
        items: [
          "Apakah yang termasuk dan tidak termasuk dinyatakan tertulis?",
          "Bagaimana perubahan kebutuhan di tengah jalan dihitung?",
          "Apa definisi “selesai” untuk setiap tahap?",
          "Siapa yang bertanggung jawab menyiapkan data dan konten?",
        ],
      },
      { type: "h2", text: "Kepemilikan source code" },
      {
        type: "p",
        text: "Tanyakan sejak awal dan minta dinyatakan tertulis. Ini bukan pertanyaan yang tidak sopan — justru vendor yang baik akan menghargainya karena menghindarkan salah paham di kemudian hari.",
      },
      { type: "h2", text: "Apa yang terjadi setelah rilis" },
      {
        type: "p",
        text: "Peluncuran bukan akhir project. Pastikan jelas: berapa lama dukungan setelah rilis, apa yang termasuk perbaikan bug versus pengembangan baru, dan berapa biaya pemeliharaan bulanannya.",
      },
      {
        type: "callout",
        title: "Tanda yang menenangkan",
        text: "Vendor yang mengatakan sebuah kebutuhan berada di luar keahlian mereka, atau bahwa anggaran Anda tidak realistis untuk ruang lingkup yang diminta, sedang menunjukkan hal yang justru sulit dinilai dari portofolio: kejujuran saat itu merugikan mereka sendiri.",
      },
      { type: "h2", text: "Dokumentasi dan serah terima" },
      {
        type: "p",
        text: "Tanyakan dokumentasi apa yang akan Anda terima dan apakah ada pelatihan untuk tim. Sistem yang hanya bisa dipahami pembuatnya menempatkan Anda pada posisi bergantung, berapa pun bagusnya sistem itu.",
      },
      { type: "h2", text: "Komunikasi selama pengerjaan" },
      {
        type: "p",
        text: "Sepakati sejak awal seberapa sering ada pembaruan progres dan lewat kanal apa. Project yang bermasalah hampir selalu didahului oleh periode hening yang panjang.",
      },
    ],
  },
  {
    slug: "kenapa-project-software-gagal",
    title: "Kenapa Project Software Gagal — dan Cara Menghindarinya",
    excerpt:
      "Kegagalan jarang disebabkan oleh pilihan teknologi. Penyebabnya biasanya sudah ada sejak sebelum baris kode pertama ditulis.",
    category: "Strategi Bisnis",
    publishedAt: "2026-07-25",
    readingMinutes: 7,
    body: [
      {
        type: "p",
        text: "Ketika sebuah project software tidak berhasil, penjelasan yang muncul biasanya bersifat teknis. Tetapi jika ditelusuri ke belakang, akarnya hampir selalu ada pada tahap sebelum pengembangan dimulai.",
      },
      { type: "h2", text: "Masalah yang dipecahkan tidak jelas" },
      {
        type: "p",
        text: "Project yang dimulai dari “kami butuh sistem baru” tanpa mendefinisikan masalah spesifik akan sulit dinilai keberhasilannya. Tanpa tolok ukur, setiap orang punya bayangan berbeda tentang apa yang dianggap selesai.",
      },
      {
        type: "p",
        text: "Rumuskan dalam kalimat yang bisa diukur: mengurangi waktu tutup buku, menghilangkan input ganda antar divisi, atau memangkas selisih stok. Sistem yang dibangun untuk menjawab masalah yang jelas jauh lebih mudah dievaluasi.",
      },
      { type: "h2", text: "Orang yang paling paham prosesnya tidak dilibatkan" },
      {
        type: "p",
        text: "Keputusan sering diambil di tingkat manajemen, sementara yang menjalankan sistem sehari-hari adalah staf operasional. Ketika mereka baru dilibatkan saat pelatihan, biasanya muncul banyak hal yang ternyata tidak sesuai kenyataan lapangan — dan saat itu perbaikannya sudah mahal.",
      },
      { type: "h2", text: "Ruang lingkup terlalu besar untuk sekali jalan" },
      {
        type: "p",
        text: "Project yang mencoba mengganti seluruh sistem sekaligus menanggung risiko yang menumpuk di satu titik. Semakin panjang jarak antara awal pengerjaan dan hasil yang bisa dicoba, semakin besar kemungkinan asumsi awal sudah tidak relevan saat sistem akhirnya jadi.",
      },
      {
        type: "callout",
        title: "Prinsip yang membantu",
        text: "Lebih baik satu modul yang benar-benar dipakai tim daripada sepuluh modul yang selesai tapi tidak ada yang menggunakannya.",
      },
      { type: "h2", text: "Perubahan kebutuhan tidak dikelola" },
      {
        type: "p",
        text: "Kebutuhan berubah — itu wajar. Yang bermasalah adalah ketika perubahan diterima terus tanpa perhitungan ulang timeline dan biaya. Akibatnya project melar, anggaran habis, dan bagian inti justru belum selesai.",
      },
      { type: "h2", text: "Adopsi tidak direncanakan" },
      {
        type: "p",
        text: "Sistem dianggap selesai saat diserahkan, padahal keberhasilannya baru terbukti ketika tim benar-benar memakainya. Pelatihan, pendampingan di minggu-minggu awal, dan kesediaan memperbaiki hal kecil yang mengganggu adalah bagian dari project, bukan tambahan.",
      },
      { type: "h2", text: "Ringkasnya" },
      {
        type: "ol",
        items: [
          "Definisikan masalahnya secara terukur sebelum bicara solusi",
          "Libatkan pengguna sehari-hari sejak tahap perancangan",
          "Pecah menjadi tahap yang bisa dipakai dan dievaluasi",
          "Kelola perubahan secara tertulis, termasuk dampaknya",
          "Anggap adopsi sebagai bagian dari project, bukan urusan setelahnya",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getSortedPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const sameCategory = getSortedPosts().filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const others = getSortedPosts().filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
