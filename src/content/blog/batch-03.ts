import type { PostSource } from "@/config/blog";

export const posts: PostSource[] = [
  {
    slug: "mencegah-kecurangan-kasir",
    title: "Mencegah Kecurangan di Kasir dengan Kontrol Sistem",
    excerpt:
      "Kebanyakan kecurangan kasir memanfaatkan celah yang sama: transaksi yang bisa dihapus tanpa jejak. Sistem yang tepat menutup celah itu tanpa mencurigai semua orang.",
    category: "POS & Retail",
    publishedAt: "2026-08-17",
    tags: ["pos", "retail", "keamanan", "pelaporan"],
    cover: {
      src: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49",
      alt: "Kasir melayani pelanggan di meja kasir sebuah toko dengan tablet",
    },
    body: [
      {
        type: "p",
        text: "Selisih uang di laci kasir, stok yang berkurang tanpa penjualan, atau diskon yang tidak pernah disetujui — masalah seperti ini sering baru ketahuan setelah berulang kali terjadi. Tujuan kontrol sistem bukan untuk mencurigai karyawan, melainkan membuat kesalahan dan penyalahgunaan sulit terjadi sekaligus mudah ditelusuri.",
      },
      { type: "h2", text: "Celah yang paling sering dimanfaatkan" },
      {
        type: "ul",
        items: [
          "Transaksi dibatalkan setelah pembayaran diterima",
          "Diskon manual tanpa persetujuan",
          "Barang dijual tanpa dipindai atau dicatat",
          "Retur fiktif untuk mengeluarkan uang dari laci",
          "Satu akun kasir dipakai bersama oleh beberapa orang",
        ],
      },
      { type: "h2", text: "Kontrol yang bisa diterapkan di sistem" },
      { type: "h3", text: "Akun per orang" },
      {
        type: "p",
        text: "Setiap kasir masuk dengan akunnya sendiri. Tanpa ini, tidak ada cara mengetahui siapa yang melakukan transaksi tertentu, dan tanggung jawab menjadi kabur.",
      },
      { type: "h3", text: "Persetujuan untuk tindakan berisiko" },
      {
        type: "p",
        text: "Pembatalan transaksi, diskon di atas batas tertentu, dan retur sebaiknya membutuhkan persetujuan supervisor — dengan PIN atau akun terpisah — dan tercatat siapa yang menyetujui.",
      },
      { type: "h3", text: "Jejak perubahan" },
      {
        type: "p",
        text: "Setiap pembatalan dan perubahan harga harus meninggalkan catatan: kapan, oleh siapa, dan apa alasannya. Transaksi yang bisa dihapus tanpa jejak adalah celah terbesar.",
      },
      { type: "h3", text: "Pencocokan per shift" },
      {
        type: "p",
        text: "Di akhir shift, sistem menunjukkan berapa uang yang seharusnya ada di laci berdasarkan transaksi tunai. Kasir menghitung uang fisik, dan selisihnya tercatat — bukan disesuaikan diam-diam.",
      },
      {
        type: "callout",
        title: "Pola lebih penting dari kejadian",
        text: "Satu pembatalan transaksi bukan masalah. Yang patut diperhatikan adalah pola: kasir tertentu yang pembatalannya jauh lebih sering dari yang lain, atau pembatalan yang menumpuk di jam tertentu. Laporan pengecualian membantu menemukan pola ini.",
      },
      { type: "h2", text: "Kontrol di luar sistem tetap perlu" },
      {
        type: "p",
        text: "Sistem tidak menggantikan pengawasan. Kamera di area kasir, stock opname rutin, dan rotasi tugas tetap berperan. Sistem membuat semua itu lebih efektif karena data pembandingnya sudah tersedia.",
      },
      { type: "h2", text: "Seimbangkan dengan kelancaran" },
      {
        type: "p",
        text: "Terlalu banyak persetujuan membuat antrian panjang dan supervisor terus dipanggil. Tetapkan batas yang masuk akal: diskon kecil bisa langsung, diskon besar butuh persetujuan. Tinjau batas itu setelah beberapa minggu berjalan.",
      },
    ],
  },
  {
    slug: "alur-approval-pembelian",
    title: "Merancang Alur Approval Pembelian yang Tidak Menghambat",
    excerpt:
      "Alur persetujuan pembelian dibuat untuk mengendalikan pengeluaran, tapi yang terlalu berlapis justru membuat operasional menunggu. Ini cara menyeimbangkannya.",
    category: "ERP & Operasional",
    publishedAt: "2026-08-15",
    tags: ["erp", "keuangan", "operasional"],
    cover: {
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      alt: "Tangan menandatangani dokumen di atas meja",
    },
    body: [
      {
        type: "p",
        text: "Setiap perusahaan yang tumbuh akhirnya butuh aturan siapa boleh membeli apa. Tanpa alur persetujuan, pengeluaran sulit dikendalikan. Tetapi alur yang dirancang tanpa pertimbangan membuat pembelian sederhana tertahan berhari-hari karena menunggu tanda tangan.",
      },
      { type: "h2", text: "Mulai dari risiko, bukan dari jabatan" },
      {
        type: "p",
        text: "Alur persetujuan sebaiknya ditentukan oleh besarnya risiko sebuah pembelian, bukan sekadar hierarki organisasi. Pembelian rutin bernilai kecil tidak perlu melewati jalur yang sama dengan pembelian aset bernilai besar.",
      },
      { type: "h2", text: "Faktor yang biasanya menentukan jalur" },
      {
        type: "ul",
        items: [
          "Nilai pembelian, dengan batas yang menentukan tingkat persetujuan",
          "Jenis barang atau jasa: rutin, aset, atau layanan jangka panjang",
          "Apakah pembelian sudah masuk dalam anggaran",
          "Pemasok baru atau pemasok yang sudah terdaftar",
          "Departemen yang mengajukan",
        ],
      },
      { type: "h2", text: "Contoh struktur berjenjang" },
      {
        type: "ol",
        items: [
          "Pembelian rutin di bawah batas tertentu dan masih dalam anggaran: cukup persetujuan kepala divisi",
          "Di atas batas pertama: tambahan persetujuan bagian keuangan",
          "Di atas batas kedua atau di luar anggaran: persetujuan manajemen",
        ],
      },
      {
        type: "p",
        text: "Angka batasnya berbeda untuk setiap perusahaan. Yang penting, aturannya tertulis dan diterapkan konsisten di sistem, bukan diputuskan kasus per kasus.",
      },
      {
        type: "callout",
        title: "Siapkan pengganti saat penyetuju tidak ada",
        text: "Penyebab paling umum pembelian tertahan adalah penyetuju yang sedang cuti atau dinas. Sistem sebaiknya mendukung delegasi persetujuan untuk periode tertentu, dan mengirim pengingat ketika pengajuan terlalu lama menunggu.",
      },
      { type: "h2", text: "Hubungkan dengan anggaran dan penerimaan barang" },
      {
        type: "p",
        text: "Persetujuan paling berguna ketika sistem langsung menunjukkan sisa anggaran saat pengajuan dibuat. Setelah barang datang, penerimaan barang dicocokkan dengan pesanan pembelian dan tagihan pemasok — pencocokan ini mencegah pembayaran untuk barang yang tidak pernah diterima.",
      },
      { type: "h2", text: "Ukur waktu tunggu" },
      {
        type: "p",
        text: "Pantau berapa lama pengajuan menunggu di setiap tahap. Tahap yang selalu lambat adalah tanda batasnya perlu dinaikkan, penyetujunya perlu ditambah, atau prosesnya perlu disederhanakan.",
      },
    ],
  },
  {
    slug: "employee-self-service-mengurangi-beban-hr",
    title: "Employee Self-Service: Mengurangi Pekerjaan Administratif HR",
    excerpt:
      "Tim HR sering menghabiskan waktu menjawab pertanyaan yang jawabannya sudah ada di sistem. Layanan mandiri memindahkan pekerjaan itu ke tempat yang tepat.",
    category: "HR & Tim",
    publishedAt: "2026-08-13",
    tags: ["hris", "karyawan", "payroll", "otomasi"],
    cover: {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "Tangan mengetik di keyboard laptop",
    },
    body: [
      {
        type: "p",
        text: "Berapa sisa cuti saya? Bisa minta slip gaji bulan lalu? Bagaimana cara mengubah nomor rekening? Pertanyaan-pertanyaan ini wajar, tetapi ketika semuanya harus melewati tim HR, pekerjaan yang lebih strategis terus tertunda.",
      },
      { type: "h2", text: "Apa itu employee self-service" },
      {
        type: "p",
        text: "Employee self-service adalah bagian sistem HR yang bisa diakses langsung oleh karyawan untuk melihat informasi dan mengajukan permintaan sendiri, tanpa perantara. Tim HR tetap memegang kendali atas persetujuan dan data sensitif.",
      },
      { type: "h2", text: "Fitur yang umumnya paling terasa manfaatnya" },
      {
        type: "ul",
        items: [
          "Melihat sisa cuti dan mengajukan cuti atau izin",
          "Mengunduh slip gaji",
          "Memperbarui data pribadi tertentu, seperti alamat dan kontak darurat",
          "Mengajukan klaim atau penggantian biaya dengan bukti",
          "Melihat riwayat kehadiran sendiri",
        ],
      },
      { type: "h2", text: "Tetapkan mana yang butuh verifikasi" },
      {
        type: "p",
        text: "Tidak semua perubahan data boleh langsung berlaku. Perubahan nomor rekening, misalnya, sebaiknya melewati verifikasi karena berkaitan langsung dengan pembayaran gaji. Tentukan sejak awal data mana yang bisa diubah langsung dan mana yang membutuhkan persetujuan.",
      },
      {
        type: "callout",
        title: "Akses dari ponsel menentukan adopsi",
        text: "Banyak karyawan, terutama di operasional dan lapangan, tidak bekerja di depan komputer. Jika layanan mandiri hanya nyaman dibuka di desktop, sebagian karyawan akan tetap mengirim pertanyaan lewat pesan ke HR.",
      },
      { type: "h2", text: "Informasi yang jelas mengurangi pertanyaan" },
      {
        type: "p",
        text: "Layanan mandiri paling efektif ketika disertai informasi pendukung: aturan cuti, cara menghitung komponen gaji, dan jawaban atas pertanyaan umum. Karyawan yang bisa memahami sendiri tidak perlu bertanya.",
      },
      { type: "h2", text: "Keamanan akun" },
      {
        type: "p",
        text: "Karena menampilkan data gaji dan data pribadi, akses layanan mandiri harus dilindungi dengan baik: kata sandi yang kuat, verifikasi tambahan bila memungkinkan, dan sesi yang otomatis berakhir. Pastikan juga ada prosedur penutupan akses ketika karyawan keluar dari perusahaan.",
      },
      { type: "h2", text: "Ukur dampaknya" },
      {
        type: "p",
        text: "Bandingkan jumlah pertanyaan rutin yang masuk ke HR sebelum dan sesudah layanan mandiri berjalan. Perbandingan ini membantu menilai apakah fitur benar-benar dipakai atau perlu disosialisasikan ulang.",
      },
    ],
  },
  {
    slug: "sistem-follow-up-prospek",
    title: "Sistem Follow-up agar Prospek Tidak Terlewat",
    excerpt:
      "Banyak peluang penjualan hilang bukan karena ditolak, tapi karena tidak ada yang menindaklanjuti. Follow-up yang terjadwal mengubah itu.",
    category: "Penjualan & CRM",
    publishedAt: "2026-08-09",
    tags: ["crm", "sales", "pelanggan", "otomasi"],
    cover: {
      src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      alt: "Seseorang menulis catatan di buku di samping cangkir kopi",
    },
    body: [
      {
        type: "p",
        text: "Prospek yang tertarik minggu lalu bisa sudah memilih pesaing minggu ini — bukan karena penawaran Anda buruk, tetapi karena tidak ada yang menghubungi kembali. Follow-up yang bergantung pada ingatan sales akan selalu bocor, terutama ketika jumlah prospek bertambah.",
      },
      { type: "h2", text: "Setiap peluang harus punya langkah berikutnya" },
      {
        type: "p",
        text: "Prinsip paling sederhana dan paling efektif: tidak boleh ada peluang aktif tanpa jadwal tindakan berikutnya. Setelah setiap interaksi, sales mencatat apa yang akan dilakukan dan kapan. Sistem kemudian mengingatkan ketika waktunya tiba.",
      },
      { type: "h2", text: "Yang perlu tercatat di setiap follow-up" },
      {
        type: "ul",
        items: [
          "Tanggal dan kanal kontak: telepon, WhatsApp, email, atau pertemuan",
          "Ringkasan singkat pembicaraan",
          "Keberatan atau pertanyaan yang muncul",
          "Langkah berikutnya beserta tanggalnya",
        ],
      },
      { type: "h2", text: "Kenali peluang yang mulai terlupakan" },
      {
        type: "p",
        text: "Laporan berkala yang menampilkan peluang tanpa aktivitas dalam periode tertentu membantu manajer sales melihat prospek yang mulai terlupakan, sebelum benar-benar hilang.",
      },
      {
        type: "callout",
        title: "Otomatiskan pengingat, bukan percakapan",
        text: "Pengingat otomatis sangat membantu, tetapi pesan follow-up yang sepenuhnya otomatis sering terasa kaku dan mudah diabaikan. Untuk penjualan bernilai besar, gunakan otomatisasi untuk mengingatkan sales, lalu biarkan sales menulis pesannya sendiri.",
      },
      { type: "h2", text: "Atur jarak follow-up yang wajar" },
      {
        type: "p",
        text: "Terlalu jarang membuat prospek lupa, terlalu sering membuat prospek terganggu. Sepakati pola dasar di tim — misalnya kapan follow-up pertama setelah proposal dikirim — lalu sesuaikan dengan respons masing-masing prospek.",
      },
      { type: "h2", text: "Serah terima saat sales berganti" },
      {
        type: "p",
        text: "Ketika sales keluar atau pindah tugas, riwayat follow-up yang tercatat di sistem memungkinkan penggantinya melanjutkan tanpa memulai dari nol. Tanpa catatan, hubungan dengan prospek ikut pergi bersama sales tersebut.",
      },
      { type: "h2", text: "Nilai aktivitas, bukan hanya hasil" },
      {
        type: "p",
        text: "Selain angka penjualan, lihat juga konsistensi follow-up. Sales dengan hasil rendah tetapi follow-up teratur mungkin butuh bantuan di penawaran, sementara sales yang jarang follow-up punya masalah yang berbeda.",
      },
    ],
  },
  {
    slug: "strategi-backup-data-bisnis",
    title: "Strategi Backup Data untuk Bisnis",
    excerpt:
      "Backup baru terasa penting saat data sudah hilang. Strategi yang baik bukan sekadar menyalin data, tapi memastikan data itu benar-benar bisa dipulihkan.",
    category: "Teknologi",
    publishedAt: "2026-08-07",
    tags: ["infrastruktur", "keamanan", "data"],
    cover: {
      src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
      alt: "Panel jaringan dengan kabel ethernet biru terpasang",
    },
    body: [
      {
        type: "p",
        text: "Server rusak, ransomware, karyawan tidak sengaja menghapus data, atau layanan cloud yang bermasalah — penyebab kehilangan data beragam, dan sebagian besar tidak bisa diprediksi. Yang bisa dikendalikan adalah seberapa siap bisnis Anda ketika itu terjadi.",
      },
      { type: "h2", text: "Prinsip 3-2-1" },
      {
        type: "p",
        text: "Pedoman yang banyak dipakai adalah aturan 3-2-1:",
      },
      {
        type: "ul",
        items: [
          "Simpan setidaknya tiga salinan data",
          "Di dua jenis media atau penyimpanan yang berbeda",
          "Dengan satu salinan berada di lokasi terpisah",
        ],
      },
      {
        type: "p",
        text: "Tujuannya sederhana: satu kejadian — kebakaran, kerusakan perangkat, atau serangan — tidak menghapus semua salinan sekaligus.",
      },
      { type: "h2", text: "Tentukan berapa banyak data yang boleh hilang" },
      {
        type: "p",
        text: "Pertanyaan yang lebih berguna daripada “seberapa sering backup?” adalah: jika terjadi masalah sekarang, data berapa jam terakhir yang masih bisa ditoleransi hilang? Jawaban untuk sistem kasir yang ramai berbeda dengan dokumen arsip. Frekuensi backup mengikuti jawaban itu.",
      },
      { type: "h2", text: "Tentukan seberapa cepat harus pulih" },
      {
        type: "p",
        text: "Selain data yang hilang, perhatikan berapa lama bisnis sanggup berhenti. Memulihkan data dari penyimpanan jarak jauh bisa memakan waktu. Untuk sistem yang kritis, rencana pemulihan perlu dirancang agar sesuai dengan toleransi tersebut.",
      },
      {
        type: "callout",
        title: "Backup yang tidak pernah diuji belum tentu berfungsi",
        text: "Masalah yang paling sering ditemukan bukan ketiadaan backup, melainkan backup yang ternyata tidak lengkap atau tidak bisa dipulihkan. Lakukan uji pemulihan secara berkala ke lingkungan terpisah, dan catat berapa lama prosesnya.",
      },
      { type: "h2", text: "Lindungi dari ransomware" },
      {
        type: "p",
        text: "Ransomware bisa ikut mengenkripsi backup yang terus-menerus terhubung ke sistem utama. Setidaknya satu salinan sebaiknya terpisah atau tidak bisa diubah untuk periode tertentu, sehingga tetap aman meski sistem utama terserang.",
      },
      { type: "h2", text: "Jangan lupa data di luar server" },
      {
        type: "p",
        text: "Data bisnis tidak hanya ada di server utama. Periksa juga laptop karyawan, akun email, dokumen di layanan penyimpanan online, dan konfigurasi sistem. Data yang tidak masuk daftar hampir pasti tidak ikut di-backup.",
      },
      { type: "h2", text: "Tetapkan penanggung jawab" },
      {
        type: "p",
        text: "Backup yang menjadi tanggung jawab semua orang biasanya tidak dikerjakan siapa pun. Tentukan siapa yang memantau backup berjalan, siapa yang melakukan uji pemulihan, dan ke mana laporan kegagalan dikirim.",
      },
    ],
  },
  {
    slug: "seo-dasar-website-perusahaan",
    title: "SEO Dasar untuk Website Perusahaan",
    excerpt:
      "SEO bukan trik untuk mengelabui mesin pencari. Untuk website perusahaan, dasarnya adalah halaman yang jelas, cepat, dan menjawab pertanyaan calon klien.",
    category: "Website & Digital",
    publishedAt: "2026-08-05",
    tags: ["seo", "website"],
    cover: {
      src: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
      alt: "Monitor menampilkan rancangan halaman website di aplikasi desain",
    },
    body: [
      {
        type: "p",
        text: "Banyak pemilik bisnis menganggap SEO sebagai urusan teknis yang rumit, atau sebaliknya sebagai kumpulan trik yang bisa menjamin posisi teratas. Keduanya kurang tepat. Dasar SEO sebenarnya cukup masuk akal: bantu mesin pencari memahami halaman Anda, dan pastikan halaman itu benar-benar berguna bagi pencarinya.",
      },
      { type: "h2", text: "Satu halaman, satu topik utama" },
      {
        type: "p",
        text: "Halaman yang mencoba membahas semua layanan sekaligus sulit dipahami mesin pencari maupun pembaca. Buat halaman terpisah untuk setiap layanan atau topik penting, dengan judul yang jelas menggambarkan isinya.",
      },
      { type: "h2", text: "Elemen dasar di setiap halaman" },
      {
        type: "ul",
        items: [
          "Judul halaman yang spesifik dan tidak terlalu panjang",
          "Deskripsi meta yang merangkum isi halaman untuk hasil pencarian",
          "Satu judul utama (H1) yang menjelaskan topik halaman",
          "Subjudul yang menyusun isi secara logis",
          "Teks alternatif pada gambar yang menjelaskan isi gambar",
          "Alamat halaman yang pendek dan mudah dibaca",
        ],
      },
      { type: "h2", text: "Tulis dengan bahasa calon klien" },
      {
        type: "p",
        text: "Pikirkan kata-kata yang benar-benar diketik calon klien ketika mencari layanan Anda. Istilah internal perusahaan sering berbeda dengan bahasa yang dipakai pencari. Gunakan kata-kata itu secara wajar di dalam tulisan — bukan diulang-ulang berlebihan.",
      },
      {
        type: "callout",
        title: "Tidak ada yang bisa menjamin peringkat",
        text: "Hati-hati dengan tawaran yang menjanjikan posisi pertama dalam waktu singkat. Mesin pencari terus memperbarui cara penilaiannya, dan praktik yang mencoba mengakali sistem justru bisa merugikan website dalam jangka panjang.",
      },
      { type: "h2", text: "Kecepatan dan kenyamanan di ponsel" },
      {
        type: "p",
        text: "Mesin pencari mempertimbangkan pengalaman pengguna, termasuk kecepatan muat dan kenyamanan di ponsel. Halaman yang lambat juga membuat pengunjung pergi sebelum membaca.",
      },
      { type: "h2", text: "Tautan antar halaman" },
      {
        type: "p",
        text: "Hubungkan halaman yang saling berkaitan: artikel blog ke halaman layanan yang relevan, halaman layanan ke artikel pendukung. Tautan internal membantu pengunjung menemukan informasi lanjutan dan membantu mesin pencari memahami struktur website.",
      },
      { type: "h2", text: "Gunakan Google Search Console" },
      {
        type: "p",
        text: "Google Search Console adalah alat gratis untuk memantau bagaimana website tampil di hasil pencarian: halaman mana yang terindeks, kata kunci apa yang memunculkan website Anda, dan apakah ada masalah teknis. Mengirimkan sitemap di sana membantu Google menemukan halaman baru.",
      },
      { type: "h2", text: "Konsisten lebih penting daripada cepat" },
      {
        type: "p",
        text: "SEO adalah pekerjaan jangka panjang. Konten yang berguna dan diperbarui secara konsisten biasanya memberi hasil yang lebih bertahan dibanding perubahan besar yang dilakukan sekali lalu ditinggalkan.",
      },
    ],
  },
  {
    slug: "sistem-informasi-sekolah",
    title: "Sistem Informasi Sekolah yang Benar-benar Dipakai",
    excerpt:
      "Banyak sistem sekolah hanya aktif di awal tahun ajaran, lalu ditinggalkan. Penyebabnya jarang soal fitur — lebih sering soal siapa yang harus mengisinya.",
    category: "Panduan Industri",
    publishedAt: "2026-08-03",
    tags: ["industri", "data", "implementasi"],
    cover: {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      alt: "Guru mengajar di depan kelas yang berisi murid",
    },
    body: [
      {
        type: "p",
        text: "Sekolah mengelola banyak data: siswa, kelas, jadwal, nilai, kehadiran, dan pembayaran. Sistem informasi sekolah menjanjikan semua itu rapi dalam satu tempat. Tetapi cukup sering sistem yang sudah dibeli akhirnya hanya dipakai sebagian, sementara guru kembali ke buku dan spreadsheet.",
      },
      { type: "h2", text: "Sistem gagal di beban guru" },
      {
        type: "p",
        text: "Guru adalah pengisi data terbanyak: kehadiran setiap pertemuan, nilai tugas, dan catatan perkembangan. Jika mengisi sistem lebih lama daripada mencatat di buku, guru akan menunda — dan data menjadi tidak lengkap. Rancang sistem dari sudut pandang guru terlebih dahulu.",
      },
      { type: "h2", text: "Kebutuhan yang biasanya utama" },
      {
        type: "ul",
        items: [
          "Data induk siswa dan pembagian kelas",
          "Jadwal pelajaran dan pengajar",
          "Kehadiran siswa yang bisa diisi cepat",
          "Nilai dan penyusunan rapor",
          "Tagihan dan pembayaran biaya pendidikan",
          "Informasi untuk orang tua",
        ],
      },
      { type: "h2", text: "Kurangi input berulang" },
      {
        type: "p",
        text: "Data yang sudah ada tidak perlu diketik ulang. Daftar siswa per kelas otomatis muncul saat guru mengisi kehadiran, dan nilai yang sudah diinput langsung terhitung ke rapor sesuai bobot yang ditetapkan.",
      },
      {
        type: "callout",
        title: "Uji dengan guru, bukan hanya dengan pimpinan",
        text: "Demo kepada pimpinan sekolah menunjukkan fitur yang tersedia. Uji coba bersama beberapa guru menunjukkan apakah sistem benar-benar bisa dipakai di tengah jadwal mengajar yang padat.",
      },
      { type: "h2", text: "Komunikasi dengan orang tua" },
      {
        type: "p",
        text: "Portal atau notifikasi untuk orang tua — kehadiran, nilai, dan tagihan — mengurangi pertanyaan berulang ke wali kelas dan bagian administrasi. Pastikan informasi yang dibagikan sudah diverifikasi sebelum terlihat oleh orang tua.",
      },
      { type: "h2", text: "Jaga data anak" },
      {
        type: "p",
        text: "Data siswa adalah data pribadi anak yang perlu dijaga ketat. Batasi akses sesuai peran, jangan tampilkan data siswa lain kepada orang tua, dan pastikan pengelolaannya sesuai ketentuan pelindungan data pribadi yang berlaku.",
      },
      { type: "h2", text: "Terapkan mengikuti kalender akademik" },
      {
        type: "p",
        text: "Waktu penerapan sangat berpengaruh. Memulai sistem di tengah semester, saat guru sibuk penilaian, hampir selalu sulit. Persiapan di masa libur dan penerapan di awal tahun ajaran memberi ruang untuk pelatihan dan penyesuaian.",
      },
    ],
  },
  {
    slug: "membaca-proposal-software-house",
    title: "Cara Membaca Proposal dari Software House",
    excerpt:
      "Dua proposal dengan harga berbeda jauh sering kali sebenarnya menawarkan ruang lingkup yang berbeda. Ini yang perlu diperiksa sebelum membandingkan angka.",
    category: "Panduan Memilih",
    publishedAt: "2026-08-01",
    tags: ["vendor", "biaya", "kontrak", "custom-software"],
    cover: {
      src: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a",
      alt: "Dua orang meninjau dokumen kertas di atas meja",
    },
    body: [
      {
        type: "p",
        text: "Setelah menghubungi beberapa software house, Anda akan menerima proposal dengan format, struktur, dan harga yang beragam. Membandingkan angka totalnya saja hampir selalu menyesatkan, karena setiap proposal mungkin mencakup pekerjaan yang berbeda.",
      },
      { type: "h2", text: "Periksa ruang lingkup lebih dulu" },
      {
        type: "p",
        text: "Bagian terpenting proposal bukan harga, melainkan daftar pekerjaan yang dicakup. Cocokkan dengan dokumen kebutuhan Anda: apakah semua kebutuhan wajib tercakup? Mana yang tidak disebut? Kebutuhan yang tidak tertulis di proposal sebaiknya dianggap tidak termasuk.",
      },
      { type: "h2", text: "Hal yang sering tidak tertulis" },
      {
        type: "ul",
        items: [
          "Migrasi data dari sistem lama",
          "Integrasi dengan aplikasi yang sudah dipakai",
          "Pelatihan pengguna dan dokumentasi",
          "Biaya server, domain, dan layanan pihak ketiga",
          "Masa perbaikan bug setelah rilis",
          "Biaya pemeliharaan bulanan",
        ],
      },
      { type: "h2", text: "Pahami cara perubahan dihitung" },
      {
        type: "p",
        text: "Kebutuhan hampir pasti berubah selama pengerjaan. Proposal yang baik menjelaskan bagaimana perubahan ditangani: apakah ada ruang untuk penyesuaian kecil, dan bagaimana tambahan fitur dihitung. Tanpa penjelasan ini, perubahan kecil bisa berujung pada tagihan yang tidak terduga.",
      },
      {
        type: "callout",
        title: "Harga yang jauh lebih murah perlu dipertanyakan",
        text: "Proposal yang jauh di bawah yang lain bisa berarti efisiensi — atau ruang lingkup yang lebih sempit, asumsi yang terlalu optimistis, atau pekerjaan yang akan ditagih terpisah nanti. Tanyakan langsung apa yang membuat harganya berbeda.",
      },
      { type: "h2", text: "Lihat tahapan dan pembayaran" },
      {
        type: "p",
        text: "Periksa bagaimana pekerjaan dibagi dalam tahapan, apa yang diserahkan di setiap tahap, dan bagaimana termin pembayaran dikaitkan dengan hasil. Skema yang mengaitkan pembayaran dengan hasil yang bisa dicoba memberi Anda kendali lebih baik.",
      },
      { type: "h2", text: "Perhatikan pertanyaan yang diajukan vendor" },
      {
        type: "p",
        text: "Vendor yang mengajukan banyak pertanyaan tentang proses bisnis Anda sebelum mengirim proposal biasanya memahami risikonya lebih baik. Proposal yang datang cepat tanpa pertanyaan apa pun layak dibaca lebih hati-hati.",
      },
      { type: "h2", text: "Minta klarifikasi tertulis" },
      {
        type: "p",
        text: "Jika ada bagian yang tidak jelas, minta penjelasan tertulis dan pastikan jawabannya masuk ke dokumen yang menjadi dasar kontrak. Kesepakatan lisan mudah terlupakan ketika project sudah berjalan.",
      },
    ],
  },
  {
    slug: "otomatisasi-input-data-dari-dokumen",
    title: "Mengotomatiskan Input Data dari Dokumen dan Faktur",
    excerpt:
      "Menyalin data dari faktur, nota, dan formulir ke sistem adalah pekerjaan berulang yang rawan salah ketik. Otomatisasi bisa membantu — dengan pemeriksaan yang tepat.",
    category: "Teknologi",
    publishedAt: "2026-07-30",
    tags: ["otomasi", "ai", "data", "keuangan"],
    cover: {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      alt: "Tumpukan formulir, nota, dan kalkulator di atas meja",
    },
    body: [
      {
        type: "p",
        text: "Di banyak perusahaan, ada orang yang menghabiskan berjam-jam setiap minggu mengetik ulang data dari dokumen: faktur pemasok, nota pengeluaran, formulir pendaftaran, atau surat jalan. Pekerjaan ini membosankan, lambat, dan salah ketik kecil bisa berakibat besar di laporan keuangan.",
      },
      { type: "h2", text: "Apa yang bisa diotomatiskan" },
      {
        type: "p",
        text: "Teknologi pengenalan teks dan AI kini mampu membaca dokumen — termasuk hasil pindaian dan foto — lalu mengambil informasi seperti nomor faktur, tanggal, nama pemasok, dan nilai tagihan. Data itu kemudian bisa dimasukkan ke sistem tanpa diketik manual.",
      },
      { type: "h2", text: "Dokumen yang paling cocok" },
      {
        type: "ul",
        items: [
          "Dokumen dengan format yang relatif seragam dan berulang",
          "Volume cukup besar sehingga penghematan waktunya terasa",
          "Informasi yang dibutuhkan jelas dan terbatas",
          "Hasil yang bisa dicocokkan dengan data lain, seperti pesanan pembelian",
        ],
      },
      { type: "h2", text: "Tetap perlu pemeriksaan manusia" },
      {
        type: "p",
        text: "Pembacaan otomatis tidak selalu tepat, terutama pada foto buram, tulisan tangan, atau format yang tidak biasa. Rancang alur di mana sistem menandai data yang tingkat keyakinannya rendah untuk diperiksa petugas, sementara data yang jelas bisa langsung diproses.",
      },
      {
        type: "callout",
        title: "Cocokkan, jangan hanya salin",
        text: "Otomatisasi paling bernilai ketika data yang terbaca langsung dicocokkan dengan data lain — misalnya faktur dengan pesanan pembelian dan penerimaan barang. Ketidakcocokan menjadi daftar yang perlu ditinjau, bukan kesalahan yang lolos diam-diam.",
      },
      { type: "h2", text: "Mulai dari satu jenis dokumen" },
      {
        type: "p",
        text: "Pilih satu jenis dokumen dengan volume terbesar, jalankan beberapa minggu, lalu ukur akurasi dan waktu yang dihemat. Setelah hasilnya jelas, baru perluas ke jenis dokumen lain.",
      },
      { type: "h2", text: "Perhatikan kerahasiaan" },
      {
        type: "p",
        text: "Dokumen keuangan dan formulir sering berisi data sensitif. Jika proses pembacaan memakai layanan pihak ketiga, pahami di mana data diproses dan disimpan, serta pastikan sesuai kebijakan perusahaan dan ketentuan pelindungan data yang berlaku.",
      },
      { type: "h2", text: "Simpan dokumen aslinya" },
      {
        type: "p",
        text: "Data yang sudah diambil sebaiknya tetap terhubung dengan dokumen asli di sistem. Ketika ada pertanyaan atau audit, petugas bisa langsung melihat sumbernya tanpa mencari arsip fisik.",
      },
    ],
  },
  {
    slug: "menerapkan-qris-di-kasir",
    title: "Menerapkan QRIS dan Pembayaran Digital di Kasir",
    excerpt:
      "Menerima pembayaran QRIS itu mudah. Yang sering terlewat adalah memastikan setiap pembayaran digital tercatat rapi dan cocok dengan laporan penjualan.",
    category: "POS & Retail",
    publishedAt: "2026-07-28",
    tags: ["pos", "pembayaran", "retail", "umkm"],
    cover: {
      src: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1",
      alt: "Pelanggan menempelkan kartu pembayaran ke mesin pembaca nontunai",
    },
    body: [
      {
        type: "p",
        text: "Pembayaran nontunai, terutama QRIS, semakin umum di usaha kecil hingga besar. Memasang kode QR di meja kasir bisa dilakukan dengan cepat. Tantangan yang lebih besar justru muncul setelahnya: mencocokkan uang yang masuk dengan transaksi yang tercatat.",
      },
      { type: "h2", text: "Kode QR statis dan dinamis" },
      {
        type: "p",
        text: "Secara umum ada dua pendekatan. Kode QR statis dicetak sekali dan pelanggan memasukkan nominal sendiri. Kode QR dinamis dibuat per transaksi dengan nominal yang sudah terisi. Kode dinamis yang terhubung ke sistem kasir mengurangi salah nominal dan memudahkan pencocokan, karena setiap pembayaran terkait langsung dengan transaksinya.",
      },
      { type: "h2", text: "Masalah yang sering muncul" },
      {
        type: "ul",
        items: [
          "Pembayaran masuk tetapi transaksi di kasir tidak ditandai lunas",
          "Nominal yang dimasukkan pelanggan berbeda dengan tagihan",
          "Kasir mengonfirmasi pembayaran hanya dari layar ponsel pelanggan",
          "Dana masuk ke rekening, tetapi tidak jelas untuk transaksi yang mana",
        ],
      },
      {
        type: "callout",
        title: "Jangan konfirmasi hanya dari layar pelanggan",
        text: "Tangkapan layar atau tampilan ponsel pelanggan bisa dipalsukan. Konfirmasi pembayaran sebaiknya berasal dari notifikasi resmi penyedia pembayaran atau dari sistem kasir yang terhubung.",
      },
      { type: "h2", text: "Integrasi dengan sistem kasir" },
      {
        type: "p",
        text: "Idealnya, sistem kasir terhubung dengan penyedia pembayaran sehingga status transaksi berubah otomatis ketika pembayaran berhasil. Dengan begitu, laporan penjualan per metode pembayaran langsung tersedia tanpa rekap manual.",
      },
      { type: "h2", text: "Pahami biaya dan waktu pencairan" },
      {
        type: "p",
        text: "Penyedia layanan pembayaran umumnya mengenakan biaya transaksi dan memiliki jadwal pencairan dana ke rekening. Ketentuannya berbeda antar penyedia dan dapat berubah, jadi periksa ketentuan terbaru dan masukkan ke perhitungan margin serta arus kas.",
      },
      { type: "h2", text: "Cocokkan secara rutin" },
      {
        type: "p",
        text: "Cocokkan secara berkala total pembayaran digital di sistem kasir dengan dana yang diterima dari penyedia pembayaran. Selisih yang ditemukan cepat jauh lebih mudah ditelusuri daripada selisih yang menumpuk berbulan-bulan.",
      },
      { type: "h2", text: "Latih kasir untuk kasus tidak normal" },
      {
        type: "p",
        text: "Pembayaran gagal, pembayaran ganda, atau pengembalian dana — kasir perlu tahu apa yang harus dilakukan. Prosedur sederhana yang tertulis mencegah keputusan dadakan yang merugikan pelanggan atau bisnis.",
      },
    ],
  },
];
