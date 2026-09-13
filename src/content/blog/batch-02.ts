import type { PostSource } from "@/config/blog";

export const posts: PostSource[] = [
  {
    slug: "digitalisasi-umkm-mulai-dari-mana",
    title: "Digitalisasi UMKM: Mulai dari Mana?",
    excerpt:
      "Digitalisasi tidak harus dimulai dari sistem besar. Untuk UMKM, langkah paling berguna biasanya justru yang paling sederhana — asal urutannya tepat.",
    category: "Strategi Bisnis",
    publishedAt: "2026-09-12",
    tags: ["umkm", "operasional", "saas", "biaya", "pos"],
    featured: true,
    cover: {
      src: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
      alt: "Papan bertuliskan open tergantung di pintu kaca sebuah toko",
    },
    body: [
      {
        type: "p",
        text: "Banyak pemilik UMKM merasa tertinggal ketika mendengar kata digitalisasi, seolah harus langsung punya aplikasi, website, dan sistem lengkap. Kenyataannya, digitalisasi yang berhasil hampir selalu dimulai dari satu masalah yang paling sering mengganggu, lalu diperluas perlahan.",
      },
      { type: "h2", text: "Mulai dari pertanyaan, bukan dari aplikasi" },
      {
        type: "p",
        text: "Sebelum memilih software apa pun, tanyakan: pekerjaan apa yang paling banyak menyita waktu Anda setiap minggu? Di mana uang atau barang paling sering “hilang” tanpa jelas penyebabnya? Jawaban dua pertanyaan itu biasanya menunjuk ke titik awal yang paling bernilai.",
      },
      { type: "h2", text: "Urutan yang umumnya masuk akal" },
      {
        type: "ol",
        items: [
          "Pencatatan penjualan — sistem kasir sederhana agar setiap transaksi tercatat dan bisa direkap tanpa menghitung ulang nota",
          "Stok — begitu penjualan tercatat, stok bisa berkurang otomatis dan selisih lebih mudah ditelusuri",
          "Keuangan dasar — pemasukan dan pengeluaran usaha yang terpisah dari rekening pribadi pemilik",
          "Kehadiran online — profil bisnis, katalog, atau website sederhana agar pelanggan mudah menemukan Anda",
          "Otomatisasi dan integrasi — setelah data dasar rapi, baru masuk akal menghubungkan satu sistem dengan yang lain",
        ],
      },
      {
        type: "p",
        text: "Urutan ini tidak mutlak. Bisnis jasa mungkin lebih butuh penjadwalan daripada stok. Tetapi prinsipnya sama: bangun fondasi data dulu, baru fitur yang lebih canggih.",
      },
      { type: "h2", text: "Pilih yang bisa langsung dipakai" },
      {
        type: "p",
        text: "Untuk tahap awal, produk siap pakai dengan biaya bulanan biasanya lebih masuk akal daripada membangun sistem sendiri. Risikonya kecil, bisa dicoba cepat, dan kalau ternyata kurang cocok, Anda belum menanam biaya besar. Custom development baru layak dipertimbangkan ketika proses Anda benar-benar tidak terakomodasi oleh produk yang ada.",
      },
      {
        type: "callout",
        title: "Satu sistem yang benar-benar dipakai",
        text: "Lebih baik satu aplikasi kasir yang dipakai setiap hari oleh seluruh tim daripada tiga aplikasi yang hanya dibuka pemiliknya sesekali. Digitalisasi baru menghasilkan sesuatu ketika datanya terisi secara konsisten.",
      },
      { type: "h2", text: "Jangan lupakan orang yang menjalankannya" },
      {
        type: "p",
        text: "Karyawan yang terbiasa mencatat di buku perlu waktu untuk berpindah. Libatkan mereka saat memilih sistem, beri pelatihan singkat, dan terima bahwa minggu-minggu pertama akan terasa lebih lambat. Itu wajar dan sementara.",
      },
      { type: "h2", text: "Tanda Anda siap ke langkah berikutnya" },
      {
        type: "ul",
        items: [
          "Data transaksi sudah tercatat rutin setidaknya beberapa bulan",
          "Anda mulai membutuhkan laporan yang tidak disediakan aplikasi saat ini",
          "Pekerjaan menyalin data antar aplikasi mulai memakan waktu",
          "Bisnis bersiap membuka cabang atau saluran penjualan baru",
        ],
      },
      {
        type: "p",
        text: "Ketika tanda-tanda ini muncul, saatnya mempertimbangkan sistem yang lebih terintegrasi — dan pada titik itu Anda sudah punya data yang cukup untuk memutuskan dengan tepat.",
      },
    ],
  },
  {
    slug: "fitur-sistem-kasir-untuk-bisnis-fnb",
    title: "Fitur Sistem Kasir yang Dibutuhkan Bisnis F&B",
    excerpt:
      "Restoran dan kafe punya ritme yang berbeda dari toko retail. Sistem kasir yang cocok harus mengikuti alur dari meja, dapur, sampai stok bahan baku.",
    category: "POS & Retail",
    publishedAt: "2026-09-10",
    tags: ["pos", "fnb", "inventori", "retail"],
    cover: {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
      alt: "Interior kafe dengan meja kasir dan area duduk pelanggan",
    },
    body: [
      {
        type: "p",
        text: "Aplikasi kasir untuk toko retail berfokus pada barang yang dipindai lalu dibayar. Bisnis F&B lebih rumit: pesanan bisa berubah, dibayar belakangan, dimasak di dapur, dan setiap menu mengurangi beberapa bahan baku sekaligus. Karena itu, kebutuhan sistemnya juga berbeda.",
      },
      { type: "h2", text: "Pesanan yang bisa diubah dan dipisah" },
      {
        type: "p",
        text: "Pelanggan menambah pesanan di tengah makan, meminta tagihan dipisah per orang, atau menggabungkan dua meja. Sistem harus menangani semua itu tanpa kasir perlu menghapus dan membuat ulang transaksi — karena setiap penghapusan manual adalah celah untuk kesalahan dan kecurangan.",
      },
      { type: "h2", text: "Terhubung ke dapur" },
      {
        type: "p",
        text: "Pesanan yang diteruskan otomatis ke layar atau printer dapur mengurangi salah dengar dan salah catat. Status pesanan — sedang dimasak, siap diantar — juga membantu pelayan tanpa harus bolak-balik bertanya.",
      },
      { type: "h2", text: "Resep dan stok bahan baku" },
      {
        type: "p",
        text: "Ini fitur yang paling sering diremehkan. Satu porsi nasi goreng memakai beras, telur, minyak, dan bumbu. Dengan resep yang tercatat di sistem, setiap penjualan otomatis mengurangi bahan baku sesuai takarannya. Hasilnya, Anda bisa membandingkan pemakaian bahan teoretis dengan stok fisik — dan selisihnya menunjukkan pemborosan atau kebocoran.",
      },
      {
        type: "callout",
        title: "Selisih bahan baku adalah informasi",
        text: "Jika pemakaian bahan di dapur jauh melampaui yang seharusnya berdasarkan penjualan, penyebabnya bisa porsi yang tidak seragam, bahan terbuang, atau pencatatan yang terlewat. Tanpa resep di sistem, selisih ini tidak pernah terlihat.",
      },
      { type: "h2", text: "Menu dengan varian dan tambahan" },
      {
        type: "p",
        text: "Level pedas, ukuran minuman, tambahan topping — semua ini perlu diatur sebagai varian atau tambahan dengan harga masing-masing, bukan sebagai menu terpisah yang membuat daftar menu membengkak dan laporan sulit dibaca.",
      },
      { type: "h2", text: "Fitur lain yang layak diperiksa" },
      {
        type: "ul",
        items: [
          "Pembayaran nontunai, termasuk QRIS, yang tercatat langsung di transaksi",
          "Laporan per shift dan per kasir untuk mencocokkan uang di laci",
          "Pesanan dari layanan pesan antar yang masuk ke sistem yang sama",
          "Tetap bisa melayani saat koneksi internet terputus",
          "Diskon dan pembatalan yang hanya bisa dilakukan supervisor",
        ],
      },
      { type: "h2", text: "Uji di jam sibuk" },
      {
        type: "p",
        text: "Demo di jam sepi hampir selalu terlihat lancar. Jika memungkinkan, coba sistem saat jam makan siang atau malam, ketika pesanan menumpuk dan kasir harus bekerja cepat. Di situlah terlihat apakah alur sistem benar-benar membantu atau justru memperlambat.",
      },
    ],
  },
  {
    slug: "modul-erp-yang-diterapkan-pertama",
    title: "Modul ERP Mana yang Sebaiknya Diterapkan Lebih Dulu?",
    excerpt:
      "Menerapkan semua modul ERP sekaligus menumpuk risiko di satu titik. Ini cara menentukan modul mana yang layak jadi langkah pertama.",
    category: "ERP & Operasional",
    publishedAt: "2026-09-06",
    tags: ["erp", "implementasi", "keuangan", "inventori"],
    cover: {
      src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12",
      alt: "Tangan menyusun kertas-kertas diagram alur kerja yang ditempel di dinding",
    },
    body: [
      {
        type: "p",
        text: "ERP terdiri dari banyak modul yang saling terhubung: keuangan, inventori, pembelian, penjualan, produksi, dan lainnya. Godaan terbesar adalah menerapkan semuanya sekaligus agar integrasinya langsung terasa. Dalam praktik, pendekatan bertahap hampir selalu lebih aman.",
      },
      { type: "h2", text: "Kenapa tidak sekaligus" },
      {
        type: "p",
        text: "Setiap modul butuh data yang bersih, aturan yang jelas, dan pengguna yang terlatih. Ketika semua dimulai bersamaan, masalah di satu modul menjalar ke modul lain, dan tim kewalahan mempelajari banyak hal dalam waktu yang sama. Sumber masalah juga sulit ditemukan ketika semuanya baru.",
      },
      { type: "h2", text: "Tiga pertimbangan memilih titik awal" },
      { type: "h3", text: "Di mana masalahnya paling mahal" },
      {
        type: "p",
        text: "Modul yang menjawab masalah paling mahal hari ini akan paling cepat dirasakan manfaatnya — dan dukungan tim terhadap project akan tumbuh dari situ.",
      },
      { type: "h3", text: "Seberapa bergantung modul lain padanya" },
      {
        type: "p",
        text: "Beberapa modul menjadi fondasi bagi yang lain. Data master produk dan daftar akun keuangan, misalnya, dipakai hampir di semua modul. Memulai dari fondasi membuat modul berikutnya lebih mudah dipasang.",
      },
      { type: "h3", text: "Seberapa siap datanya" },
      {
        type: "p",
        text: "Modul dengan data yang relatif rapi bisa berjalan lebih cepat. Modul yang datanya berantakan butuh waktu pembersihan lebih lama, dan sebaiknya tidak menjadi satu-satunya penentu jadwal.",
      },
      { type: "h2", text: "Pola yang sering masuk akal" },
      {
        type: "ul",
        items: [
          "Perdagangan dan distribusi: inventori dan pembelian lebih dulu, lalu penjualan dan keuangan",
          "Bisnis dengan banyak pencatatan keuangan manual: keuangan dan akuntansi lebih dulu",
          "Manufaktur: data master bahan dan produk, lalu inventori, baru produksi",
          "Multi-cabang: satu cabang percontohan sebelum diperluas ke cabang lain",
        ],
      },
      {
        type: "callout",
        title: "Satu cabang dulu",
        text: "Untuk bisnis multi-cabang, menerapkan ERP di satu cabang sebagai percontohan membantu menemukan masalah alur kerja dalam skala kecil — sebelum masalah itu terulang di semua cabang.",
      },
      { type: "h2", text: "Tetapkan kriteria “siap lanjut”" },
      {
        type: "p",
        text: "Sebelum masuk ke modul berikutnya, sepakati tanda bahwa modul sebelumnya sudah berjalan: tim menggunakannya setiap hari tanpa kembali ke cara lama, laporan dari modul itu dipercaya, dan tidak ada lagi pencatatan paralel di spreadsheet. Tanpa kriteria ini, tahap berikutnya sering dimulai di atas fondasi yang belum kokoh.",
      },
    ],
  },
  {
    slug: "mengelola-absensi-karyawan-lapangan",
    title: "Mengelola Absensi Karyawan Lapangan",
    excerpt:
      "Sales, kurir, dan teknisi tidak bekerja di satu lokasi. Absensi mereka butuh pendekatan yang berbeda dari mesin sidik jari di kantor.",
    category: "HR & Tim",
    publishedAt: "2026-09-02",
    tags: ["hris", "karyawan", "mobile", "operasional"],
    cover: {
      src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7",
      alt: "Truk pengiriman melaju di jalan raya di bawah langit cerah",
    },
    body: [
      {
        type: "p",
        text: "Mesin absensi di pintu kantor bekerja baik untuk karyawan yang datang ke tempat yang sama setiap hari. Untuk tim lapangan — sales, kurir, teknisi, petugas survei — cara ini tidak berlaku. Akibatnya, kehadiran mereka sering dicatat lewat laporan manual atau pesan singkat yang sulit diverifikasi dan direkap.",
      },
      { type: "h2", text: "Apa yang sebenarnya perlu dicatat" },
      {
        type: "p",
        text: "Untuk tim lapangan, kehadiran bukan sekadar jam masuk dan pulang. Yang biasanya lebih relevan: apakah karyawan benar-benar mengunjungi lokasi yang dijadwalkan, berapa lama di sana, dan pekerjaan apa yang diselesaikan. Menentukan ini lebih dulu mencegah sistem yang terlalu rumit atau justru melewatkan hal penting.",
      },
      { type: "h2", text: "Pilihan pendekatan" },
      {
        type: "ul",
        items: [
          "Check-in lewat aplikasi ponsel dengan lokasi GPS di awal dan akhir kunjungan",
          "Foto di lokasi sebagai bukti pendukung kunjungan",
          "Batas area yang hanya mengizinkan check-in di sekitar lokasi tertentu",
          "Laporan kunjungan singkat yang langsung terhubung ke data kehadiran",
        ],
      },
      { type: "h2", text: "Pertimbangkan kondisi di lapangan" },
      {
        type: "p",
        text: "Sinyal internet di lapangan tidak selalu stabil. Aplikasi sebaiknya tetap bisa mencatat saat offline dan mengirim data begitu koneksi kembali. Ponsel karyawan juga beragam spesifikasinya, sehingga aplikasi yang ringan lebih mudah diadopsi.",
      },
      {
        type: "callout",
        title: "Keterbukaan mencegah penolakan",
        text: "Pelacakan lokasi bisa terasa seperti pengawasan berlebihan. Jelaskan sejak awal data apa yang dikumpulkan, kapan, dan untuk apa — misalnya lokasi hanya direkam saat check-in, bukan sepanjang hari. Aturan yang jelas membuat karyawan lebih mudah menerima.",
      },
      { type: "h2", text: "Hubungkan dengan payroll dan kinerja" },
      {
        type: "p",
        text: "Data kehadiran lapangan paling berguna ketika mengalir ke perhitungan tunjangan, uang transport, atau lembur tanpa direkap ulang. Data kunjungan juga bisa menjadi bahan penilaian kinerja yang lebih objektif dibanding laporan lisan.",
      },
      { type: "h2", text: "Perhatikan pelindungan data" },
      {
        type: "p",
        text: "Lokasi dan foto karyawan termasuk data pribadi. Batasi siapa yang bisa mengaksesnya, tetapkan berapa lama data disimpan, dan pastikan pengelolaannya sesuai ketentuan pelindungan data pribadi yang berlaku.",
      },
    ],
  },
  {
    slug: "mendefinisikan-tahapan-pipeline-penjualan",
    title: "Mendefinisikan Tahapan Pipeline Penjualan",
    excerpt:
      "CRM hanya seberguna tahapan pipeline di dalamnya. Tahapan yang kabur membuat laporan penjualan terlihat rapi tapi tidak bisa dipercaya.",
    category: "Penjualan & CRM",
    publishedAt: "2026-08-31",
    tags: ["crm", "sales", "pelanggan", "pelaporan"],
    cover: {
      src: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1",
      alt: "Papan tulis penuh catatan tempel kuning hasil sesi perencanaan",
    },
    body: [
      {
        type: "p",
        text: "Banyak tim sales mulai memakai CRM dengan tahapan bawaan seperti “Lead”, “Prospek”, dan “Negosiasi” tanpa pernah menyepakati artinya. Akibatnya, dua sales bisa menempatkan peluang yang kondisinya sama di tahap berbeda, dan angka pipeline tidak mencerminkan kenyataan.",
      },
      { type: "h2", text: "Tahapan berdasarkan kejadian, bukan perasaan" },
      {
        type: "p",
        text: "Tahapan yang baik didefinisikan oleh sesuatu yang benar-benar terjadi dan bisa dicek — bukan oleh keyakinan sales bahwa peluangnya “sudah hangat”. Contohnya:",
      },
      {
        type: "ul",
        items: [
          "Kontak awal: prospek sudah merespons dan bersedia berdiskusi",
          "Kebutuhan dipetakan: sudah ada pertemuan untuk memahami kebutuhan dan pengambil keputusan",
          "Proposal terkirim: penawaran tertulis sudah diterima prospek",
          "Negosiasi: prospek memberi tanggapan atas harga atau ruang lingkup",
          "Menang atau kalah: ada keputusan yang jelas",
        ],
      },
      { type: "h2", text: "Tetapkan syarat pindah tahap" },
      {
        type: "p",
        text: "Untuk setiap tahap, tuliskan apa yang harus terpenuhi sebelum peluang boleh dipindah ke tahap berikutnya. Syarat ini membuat pipeline antar-sales bisa dibandingkan, dan membantu sales baru memahami proses lebih cepat.",
      },
      {
        type: "callout",
        title: "Jangan terlalu banyak tahap",
        text: "Pipeline dengan terlalu banyak tahap membuat sales enggan memperbarui status. Umumnya lima sampai tujuh tahap sudah cukup menggambarkan perjalanan penjualan tanpa menjadi beban administrasi.",
      },
      { type: "h2", text: "Catat alasan kalah" },
      {
        type: "p",
        text: "Peluang yang kalah sama berharganya dengan yang menang. Dengan pilihan alasan yang seragam — harga, waktu, memilih pesaing, kebutuhan berubah — Anda bisa melihat pola yang berulang dan memperbaiki penawaran.",
      },
      { type: "h2", text: "Tinjau secara berkala" },
      {
        type: "p",
        text: "Peluang yang terlalu lama diam di satu tahap biasanya sudah tidak aktif, meski belum ditandai kalah. Tinjauan rutin, misalnya mingguan, membantu membersihkan pipeline agar perkiraan penjualan tetap realistis.",
      },
      { type: "h2", text: "Sesuaikan dengan cara Anda menjual" },
      {
        type: "p",
        text: "Bisnis dengan transaksi cepat dan bisnis B2B dengan siklus berbulan-bulan butuh tahapan yang berbeda. Mulailah dari cara tim benar-benar menjual hari ini, lalu sesuaikan setelah beberapa bulan data terkumpul.",
      },
    ],
  },
  {
    slug: "cloud-atau-on-premise",
    title: "Cloud atau On-Premise: Menentukan Tempat Sistem Berjalan",
    excerpt:
      "Menjalankan sistem di cloud atau di server sendiri bukan soal mana yang lebih modern, tapi soal biaya, kendali, dan kemampuan tim merawatnya.",
    category: "Teknologi",
    publishedAt: "2026-08-29",
    tags: ["infrastruktur", "keamanan", "biaya"],
    cover: {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      alt: "Rak server dengan kabel jaringan yang tersusun rapat",
    },
    body: [
      {
        type: "p",
        text: "Saat membangun atau membeli sistem bisnis, salah satu keputusan teknis yang cukup menentukan adalah di mana sistem itu dijalankan: di layanan cloud, atau di server milik perusahaan sendiri (on-premise). Keduanya punya tempat, dan pilihan yang tepat bergantung pada kondisi bisnis Anda.",
      },
      { type: "h2", text: "Cloud" },
      {
        type: "p",
        text: "Sistem berjalan di infrastruktur penyedia layanan dan diakses lewat internet.",
      },
      {
        type: "ul",
        items: [
          "Tidak perlu membeli dan merawat perangkat server",
          "Kapasitas mudah ditambah ketika pengguna bertambah",
          "Bisa diakses dari berbagai lokasi dan cabang",
          "Biaya bulanan yang bisa naik seiring pemakaian",
          "Bergantung pada koneksi internet",
        ],
      },
      { type: "h2", text: "On-premise" },
      {
        type: "p",
        text: "Sistem berjalan di server yang berada di lokasi perusahaan dan dikelola sendiri.",
      },
      {
        type: "ul",
        items: [
          "Kendali penuh atas perangkat dan data",
          "Tetap bisa berjalan di jaringan lokal meski internet terputus",
          "Butuh investasi perangkat di awal dan penggantian di kemudian hari",
          "Membutuhkan orang yang merawat server, pembaruan keamanan, dan backup",
          "Akses dari luar lokasi perlu pengaturan tambahan",
        ],
      },
      {
        type: "callout",
        title: "Biaya yang sering tidak dihitung",
        text: "Server sendiri tidak berhenti di harga perangkat. Ada listrik, pendingin ruangan, perangkat cadangan, lisensi, dan waktu orang yang merawatnya. Bandingkan total biaya dalam beberapa tahun, bukan hanya pengeluaran awal.",
      },
      { type: "h2", text: "Pertanyaan yang membantu memutuskan" },
      {
        type: "ol",
        items: [
          "Apakah ada regulasi atau kebijakan internal yang mengatur di mana data harus disimpan?",
          "Apakah tim punya kemampuan merawat server secara berkelanjutan?",
          "Seberapa stabil koneksi internet di lokasi-lokasi operasional?",
          "Apakah sistem perlu diakses dari banyak cabang atau oleh tim lapangan?",
          "Bagaimana rencana pertumbuhan pengguna dalam beberapa tahun ke depan?",
        ],
      },
      { type: "h2", text: "Pilihan campuran" },
      {
        type: "p",
        text: "Tidak harus satu pilihan untuk semua. Beberapa bisnis menjalankan sistem utama di cloud, tetapi tetap memakai aplikasi yang bisa bekerja offline di lokasi dengan koneksi tidak stabil. Yang penting, keputusan diambil berdasarkan kebutuhan nyata, bukan tren.",
      },
    ],
  },
  {
    slug: "website-company-profile-yang-menghasilkan-prospek",
    title: "Website Company Profile yang Menghasilkan Prospek",
    excerpt:
      "Website perusahaan yang hanya berisi sejarah dan visi-misi jarang menghasilkan pertanyaan dari calon klien. Ini yang membedakan website yang bekerja.",
    category: "Website & Digital",
    publishedAt: "2026-08-27",
    tags: ["website", "seo", "pelanggan"],
    cover: {
      src: "https://images.unsplash.com/photo-1547658719-da2b51169166",
      alt: "Meja kerja dengan monitor, tablet, dan ponsel yang menampilkan rancangan halaman web",
    },
    body: [
      {
        type: "p",
        text: "Banyak website company profile dibuat sebagai formalitas: halaman tentang perusahaan, daftar layanan, dan alamat kontak. Website seperti itu tidak salah, tetapi jarang menghasilkan prospek, karena disusun dari sudut pandang perusahaan — bukan dari pertanyaan calon klien.",
      },
      { type: "h2", text: "Jawab pertanyaan pengunjung secara berurutan" },
      {
        type: "p",
        text: "Calon klien biasanya datang dengan pertanyaan yang cukup bisa ditebak: apakah perusahaan ini menyediakan yang saya butuhkan, apakah cocok untuk bisnis seperti saya, berapa kira-kira biayanya, dan bagaimana cara memulai. Susun halaman agar pertanyaan itu terjawab tanpa pengunjung harus mencari.",
      },
      { type: "h2", text: "Halaman layanan yang spesifik" },
      {
        type: "p",
        text: "Satu halaman yang merangkum semua layanan sulit ditemukan lewat mesin pencari dan sulit meyakinkan pembaca. Halaman terpisah untuk setiap layanan utama memungkinkan Anda menjelaskan apa yang didapat, untuk siapa layanan itu cocok, dan menjawab pertanyaan yang spesifik.",
      },
      { type: "h2", text: "Tunjukkan bukti yang bisa diverifikasi" },
      {
        type: "p",
        text: "Klaim seperti “terpercaya” atau “terbaik” tidak meyakinkan siapa pun. Yang lebih bernilai adalah hal yang bisa dicek: contoh pekerjaan nyata, penjelasan proses kerja, harga yang dipublikasikan, atau komitmen tertulis. Jika belum punya portofolio, lebih baik jujur daripada menampilkan klien yang tidak ada.",
      },
      {
        type: "callout",
        title: "Jalan menghubungi yang jelas",
        text: "Setiap halaman sebaiknya punya jalan yang jelas untuk menghubungi Anda. Untuk banyak bisnis di Indonesia, tombol WhatsApp yang tidak mengganggu sering lebih efektif daripada formulir panjang.",
      },
      { type: "h2", text: "Formulir yang tidak mengusir" },
      {
        type: "p",
        text: "Formulir dengan terlalu banyak kolom membuat calon klien mundur. Minta hanya informasi yang benar-benar dibutuhkan untuk menindaklanjuti, dan jelaskan apa yang terjadi setelah formulir dikirim.",
      },
      { type: "h2", text: "Cepat dan nyaman di ponsel" },
      {
        type: "p",
        text: "Banyak pengunjung membuka website dari ponsel. Halaman yang lambat dimuat atau sulit dibaca di layar kecil kehilangan pengunjung sebelum mereka sempat membaca penawaran Anda.",
      },
      { type: "h2", text: "Ukur, lalu perbaiki" },
      {
        type: "p",
        text: "Pasang pengukuran sederhana: dari mana pengunjung datang, halaman mana yang paling sering dibaca, dan berapa yang akhirnya menghubungi. Data ini menunjukkan bagian mana yang perlu diperbaiki lebih dulu.",
      },
    ],
  },
  {
    slug: "sistem-manajemen-klinik",
    title: "Sistem Manajemen Klinik: Dari Antrian hingga Rekam Medis",
    excerpt:
      "Klinik menangani data yang sensitif dengan alur yang padat. Sistem yang tepat harus mempercepat pelayanan tanpa mengorbankan keamanan data pasien.",
    category: "Panduan Industri",
    publishedAt: "2026-08-25",
    tags: ["industri", "data", "keamanan", "operasional"],
    cover: {
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
      alt: "Meja resepsionis di area lobi fasilitas kesehatan",
    },
    body: [
      {
        type: "p",
        text: "Operasional klinik melibatkan banyak tahap yang saling bergantung: pendaftaran, antrian, pemeriksaan, resep, farmasi, dan pembayaran. Ketika tahap-tahap ini dicatat terpisah, pasien menunggu lebih lama dan informasi penting mudah tercecer.",
      },
      { type: "h2", text: "Alur yang perlu terhubung" },
      {
        type: "ul",
        items: [
          "Pendaftaran dan antrian, termasuk pendaftaran sebelum pasien datang",
          "Rekam medis elektronik yang bisa diakses dokter saat pemeriksaan",
          "Resep yang diteruskan langsung ke bagian farmasi",
          "Stok obat dan bahan medis habis pakai",
          "Tagihan dan pembayaran, termasuk penjaminan",
        ],
      },
      { type: "h2", text: "Rekam medis elektronik" },
      {
        type: "p",
        text: "Di Indonesia, fasilitas pelayanan kesehatan diwajibkan menyelenggarakan rekam medis elektronik sesuai Peraturan Menteri Kesehatan Nomor 24 Tahun 2022, termasuk ketentuan terkait integrasi dengan platform SATUSEHAT milik Kementerian Kesehatan. Karena regulasi dan panduan teknisnya dapat diperbarui, pastikan sistem yang dipilih mengikuti ketentuan terbaru.",
      },
      {
        type: "callout",
        title: "Tanyakan kesiapan integrasi secara spesifik",
        text: "Saat menilai sistem klinik, tanyakan bagaimana sistem tersebut memenuhi kewajiban rekam medis elektronik dan integrasi yang disyaratkan. Jawaban yang umum atau mengambang patut ditanyakan lebih lanjut.",
      },
      { type: "h2", text: "Keamanan dan hak akses" },
      {
        type: "p",
        text: "Data kesehatan termasuk data pribadi yang sensitif. Hak akses perlu dibatasi sesuai peran: petugas pendaftaran tidak perlu melihat catatan pemeriksaan, dan setiap akses ke rekam medis sebaiknya tercatat. Backup data juga perlu dirancang sejak awal.",
      },
      { type: "h2", text: "Kecepatan di meja depan" },
      {
        type: "p",
        text: "Antrian di pendaftaran adalah kesan pertama pasien. Sistem yang memerlukan terlalu banyak kolom atau langkah justru memperpanjang antrian. Pastikan pencarian data pasien lama cepat dan pendaftaran pasien baru bisa diselesaikan singkat.",
      },
      { type: "h2", text: "Laporan untuk pengelola" },
      {
        type: "p",
        text: "Selain melayani pasien, pengelola klinik membutuhkan gambaran operasional: jumlah kunjungan, pemakaian obat, pendapatan per layanan, dan waktu tunggu. Laporan ini membantu mengatur jadwal dokter dan persediaan dengan lebih tepat.",
      },
      { type: "h2", text: "Libatkan tenaga medis" },
      {
        type: "p",
        text: "Dokter dan perawat adalah pengguna utama. Sistem yang memperlambat pemeriksaan akan ditolak atau diakali. Libatkan mereka saat mencoba sistem agar alurnya sesuai praktik sehari-hari.",
      },
    ],
  },
  {
    slug: "menyusun-dokumen-kebutuhan-software",
    title: "Menyusun Dokumen Kebutuhan Sebelum Menghubungi Vendor",
    excerpt:
      "Dokumen kebutuhan yang sederhana membuat penawaran dari vendor bisa dibandingkan, dan mencegah salah paham yang mahal di tengah project.",
    category: "Panduan Memilih",
    publishedAt: "2026-08-23",
    tags: ["vendor", "custom-software", "implementasi"],
    cover: {
      src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
      alt: "Tangan menulis daftar periksa di buku catatan",
    },
    body: [
      {
        type: "p",
        text: "Menghubungi software house dengan kalimat “kami butuh aplikasi seperti ini” hampir selalu menghasilkan penawaran yang sulit dibandingkan. Setiap vendor menafsirkan kebutuhan dengan caranya sendiri, dan perbedaan tafsir itu baru terasa ketika pengerjaan sudah berjalan.",
      },
      { type: "h2", text: "Tidak perlu dokumen teknis" },
      {
        type: "p",
        text: "Anda tidak perlu menulis spesifikasi teknis. Yang dibutuhkan adalah penjelasan dari sudut pandang bisnis: apa masalahnya, siapa yang akan memakai sistem, dan apa yang dianggap berhasil. Bagian teknis adalah pekerjaan vendor.",
      },
      { type: "h2", text: "Isi yang sebaiknya ada" },
      {
        type: "ol",
        items: [
          "Latar belakang: masalah apa yang ingin diselesaikan dan kenapa sekarang",
          "Pengguna: siapa saja yang akan memakai sistem dan apa peran masing-masing",
          "Alur kerja saat ini: bagaimana pekerjaan dilakukan hari ini, termasuk kendalanya",
          "Kebutuhan utama: hal yang wajib ada agar sistem dianggap berguna",
          "Kebutuhan tambahan: hal yang bagus jika ada, tapi bisa menyusul",
          "Sistem yang sudah dipakai: aplikasi lain yang mungkin perlu dihubungkan",
          "Batasan: kisaran anggaran, target waktu, atau aturan yang harus diikuti",
        ],
      },
      { type: "h2", text: "Pisahkan yang wajib dan yang tambahan" },
      {
        type: "p",
        text: "Bagian ini paling sering dilewatkan, padahal paling berguna. Dengan memisahkan kebutuhan wajib dari tambahan, vendor bisa memberikan penawaran bertahap, dan Anda punya ruang negosiasi ketika anggaran terbatas.",
      },
      {
        type: "callout",
        title: "Ceritakan contoh kasus",
        text: "Satu contoh kejadian nyata — misalnya bagaimana sebuah pesanan diproses dari awal sampai selesai — sering lebih jelas daripada daftar fitur yang panjang. Contoh seperti ini membantu vendor memahami pengecualian dan kasus tidak normal.",
      },
      { type: "h2", text: "Kirim dokumen yang sama ke semua vendor" },
      {
        type: "p",
        text: "Dengan dokumen yang sama, perbedaan penawaran lebih mudah dibaca: siapa yang memahami kebutuhan, siapa yang melewatkan hal penting, dan siapa yang mengajukan pertanyaan yang tepat.",
      },
      { type: "h2", text: "Dokumen akan berubah, dan itu wajar" },
      {
        type: "p",
        text: "Diskusi dengan vendor hampir pasti memunculkan hal yang belum terpikir. Perbarui dokumen seiring diskusi, dan pastikan versi akhirnya menjadi acuan ruang lingkup dalam kontrak.",
      },
    ],
  },
  {
    slug: "chatbot-layanan-pelanggan-manfaat-dan-batasan",
    title: "Chatbot Layanan Pelanggan: Manfaat dan Batasannya",
    excerpt:
      "Chatbot bisa menjawab pertanyaan berulang kapan saja, tapi juga bisa membuat pelanggan frustrasi. Kuncinya ada pada batas yang ditetapkan sejak awal.",
    category: "Teknologi",
    publishedAt: "2026-08-19",
    tags: ["ai", "otomasi", "pelanggan"],
    cover: {
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      alt: "Robot humanoid putih dengan layar tablet di bagian dada",
    },
    body: [
      {
        type: "p",
        text: "Chatbot semakin mudah dibuat, terutama dengan kemajuan AI. Bagi bisnis yang menerima banyak pertanyaan serupa setiap hari, chatbot tampak seperti solusi yang jelas. Tetapi chatbot yang dirancang tanpa batas yang jelas justru bisa merusak pengalaman pelanggan.",
      },
      { type: "h2", text: "Di mana chatbot membantu" },
      {
        type: "ul",
        items: [
          "Pertanyaan berulang: jam operasional, lokasi, cara pemesanan, syarat layanan",
          "Status pesanan yang datanya tersedia di sistem",
          "Mengumpulkan informasi awal sebelum diteruskan ke petugas",
          "Melayani pertanyaan sederhana di luar jam kerja",
        ],
      },
      { type: "h2", text: "Di mana chatbot sering gagal" },
      {
        type: "ul",
        items: [
          "Keluhan yang membutuhkan empati dan keputusan",
          "Kasus tidak biasa yang tidak tercakup dalam informasi yang disiapkan",
          "Permintaan yang menyangkut uang, pembatalan, atau pengembalian",
          "Pertanyaan yang jawabannya bergantung pada kebijakan yang sering berubah",
        ],
      },
      { type: "h2", text: "Jalur ke manusia harus jelas" },
      {
        type: "p",
        text: "Pelanggan yang terjebak dalam percakapan berulang dengan chatbot biasanya kesal pada bisnisnya, bukan pada teknologinya. Sediakan jalan yang jelas untuk berbicara dengan petugas, dan teruskan riwayat percakapan agar pelanggan tidak perlu mengulang cerita.",
      },
      {
        type: "callout",
        title: "Chatbot berbasis AI bisa salah dengan yakin",
        text: "Model AI bisa menghasilkan jawaban yang terdengar meyakinkan tetapi keliru. Batasi chatbot pada sumber informasi yang Anda kendalikan, dan jangan izinkan chatbot membuat janji — harga khusus, jadwal, atau kompensasi — tanpa konfirmasi petugas.",
      },
      { type: "h2", text: "Mulai dari pertanyaan yang paling sering" },
      {
        type: "p",
        text: "Kumpulkan pertanyaan pelanggan beberapa minggu terakhir dan kelompokkan. Biasanya sebagian kecil jenis pertanyaan mendominasi. Mulailah dari kelompok itu, pastikan jawabannya akurat, baru perluas.",
      },
      { type: "h2", text: "Tinjau percakapan secara rutin" },
      {
        type: "p",
        text: "Baca contoh percakapan setiap minggu: pertanyaan apa yang tidak terjawab, di titik mana pelanggan meminta petugas, dan jawaban mana yang keliru. Chatbot yang tidak dirawat akan tertinggal dari kebijakan dan produk yang terus berubah.",
      },
      { type: "h2", text: "Terbuka bahwa itu chatbot" },
      {
        type: "p",
        text: "Beri tahu pelanggan bahwa mereka sedang berbicara dengan asisten otomatis. Keterbukaan ini mengatur ekspektasi dan membuat pelanggan lebih mudah memaklumi keterbatasannya.",
      },
    ],
  },
];
