import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Ruang tunggu penuh. Pasien baru mengisi formulir kertas yang sama seperti kunjungan sebelumnya, karena rekam medisnya tidak bisa ditemukan dengan cepat. Dokter memanggil pasien berikutnya sambil masih mencari catatan pemeriksaan terakhir. Resep ditulis tangan, dibawa ke apotek, dan ada yang sulit dibaca.",
  },
  {
    type: "p",
    text: "Operasional klinik melibatkan banyak tahap yang saling bergantung: pendaftaran, antrian, pemeriksaan, resep, farmasi, dan pembayaran. Ketika tahap-tahap ini dicatat terpisah, pasien menunggu lebih lama, informasi penting mudah tercecer, dan risiko kesalahan medis meningkat. Artikel ini membahas kebutuhan sistem manajemen klinik yang menyeluruh: dari alur pasien, rekam medis elektronik, kepatuhan regulasi, hingga keamanan data.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Alur klinik saling terhubung: pendaftaran, rekam medis, resep, farmasi, dan pembayaran",
      "Rekam medis elektronik di Indonesia diatur regulasi yang perlu diikuti dan diperbarui",
      "Keamanan dan hak akses data pasien harus dirancang sejak awal, bukan ditambahkan belakangan",
      "Kecepatan di meja pendaftaran menentukan kesan pertama pasien",
      "Libatkan dokter dan perawat sejak awal, karena mereka pengguna utama sistem",
    ],
  },
  { type: "h2", text: "Kenapa klinik butuh pendekatan berbeda" },
  {
    type: "p",
    text: "Klinik bukan sekadar bisnis jasa biasa. Data yang dikelola menyangkut kesehatan orang, keputusan yang diambil bisa berdampak pada keselamatan pasien, dan setiap tahap dalam alur kerja saling memengaruhi. Kesalahan kecil — resep yang salah dibaca, riwayat alergi yang tidak tercatat, antrian yang kacau — bisa berakibat serius, bukan sekadar merepotkan.",
  },
  {
    type: "p",
    text: "Karena itu, sistem manajemen klinik perlu dirancang dengan pemahaman yang mendalam tentang alur kerja medis, bukan sekadar aplikasi pencatatan yang disesuaikan seadanya. Setiap fitur harus mempertimbangkan dampaknya terhadap keselamatan dan kenyamanan pasien.",
  },
  { type: "h2", text: "Alur yang perlu terhubung" },
  { type: "h3", text: "Pendaftaran dan antrian" },
  {
    type: "p",
    text: "Pendaftaran adalah kesan pertama pasien. Sistem yang baik memungkinkan pendaftaran sebelum pasien datang — lewat telepon, aplikasi, atau website — dan pencarian data pasien lama yang cepat. Nomor antrian yang jelas dan estimasi waktu tunggu mengurangi kegelisahan pasien di ruang tunggu.",
  },
  { type: "h3", text: "Rekam medis elektronik" },
  {
    type: "p",
    text: "Rekam medis elektronik menyimpan riwayat pemeriksaan, diagnosis, alergi, dan pengobatan pasien dalam format yang bisa diakses dokter kapan saja. Ini menghilangkan kebutuhan mencari berkas fisik dan mengurangi risiko riwayat penting terlewat saat pemeriksaan.",
  },
  { type: "h3", text: "Resep dan farmasi" },
  {
    type: "p",
    text: "Resep yang diteruskan langsung dari dokter ke bagian farmasi mengurangi kesalahan baca tulisan tangan dan mempercepat proses pengambilan obat. Sistem juga bisa memberi peringatan jika ada potensi interaksi obat atau alergi yang tercatat di rekam medis pasien.",
  },
  { type: "h3", text: "Stok obat dan bahan medis" },
  {
    type: "p",
    text: "Setiap resep yang diproses mengurangi stok obat secara otomatis. Ini membantu klinik mengetahui kapan harus memesan ulang, menghindari kehabisan obat yang sering diresepkan, dan memantau tanggal kedaluwarsa.",
  },
  { type: "h3", text: "Tagihan dan pembayaran" },
  {
    type: "p",
    text: "Tagihan yang tersusun otomatis dari pemeriksaan, obat, dan tindakan yang dilakukan mengurangi kesalahan hitung dan mempercepat proses pembayaran, termasuk untuk pasien dengan penjaminan asuransi atau BPJS.",
  },
  { type: "h2", text: "Rekam medis elektronik dan regulasi" },
  {
    type: "p",
    text: "Di Indonesia, fasilitas pelayanan kesehatan diwajibkan menyelenggarakan rekam medis elektronik sesuai Peraturan Menteri Kesehatan Nomor 24 Tahun 2022, termasuk ketentuan terkait integrasi dengan platform SATUSEHAT milik Kementerian Kesehatan. Ketentuan ini mencakup standar data, keamanan, dan interoperabilitas antar fasilitas kesehatan.",
  },
  {
    type: "p",
    text: "Karena regulasi dan panduan teknisnya dapat diperbarui dari waktu ke waktu, pastikan sistem yang dipilih mengikuti ketentuan terbaru dan vendor memiliki komitmen untuk memperbarui sistem seiring perubahan regulasi. Jangan berasumsi sistem yang dibeli beberapa tahun lalu masih sesuai ketentuan terkini tanpa pemeriksaan ulang.",
  },
  {
    type: "callout",
    title: "Tanyakan kesiapan integrasi secara spesifik",
    text: "Saat menilai sistem klinik, tanyakan bagaimana sistem tersebut memenuhi kewajiban rekam medis elektronik dan integrasi yang disyaratkan. Minta demo langsung, bukan hanya klaim di brosur. Jawaban yang umum atau mengambang patut ditanyakan lebih lanjut.",
  },
  { type: "h2", text: "Keamanan dan hak akses" },
  {
    type: "p",
    text: "Data kesehatan termasuk data pribadi yang sangat sensitif. Hak akses perlu dibatasi sesuai peran: petugas pendaftaran tidak perlu melihat catatan pemeriksaan detail, perawat mungkin perlu akses berbeda dari dokter, dan setiap akses ke rekam medis sebaiknya tercatat untuk keperluan audit.",
  },
  {
    type: "ul",
    items: [
      "Enkripsi data pasien, baik saat disimpan maupun saat dikirim",
      "Autentikasi yang kuat untuk setiap akun pengguna sistem",
      "Jejak audit untuk setiap akses dan perubahan rekam medis",
      "Cadangan data yang rutin dan teruji",
      "Kebijakan yang jelas soal siapa yang bisa mengakses data apa",
    ],
  },
  { type: "h2", text: "Kecepatan di meja depan" },
  {
    type: "p",
    text: "Antrian di pendaftaran adalah pengalaman pertama pasien setiap kunjungan. Sistem yang memerlukan terlalu banyak kolom atau langkah justru memperpanjang antrian dan membuat pasien frustrasi sebelum bertemu dokter. Pastikan pencarian data pasien lama cepat, dan pendaftaran pasien baru bisa diselesaikan dalam waktu singkat.",
  },
  { type: "h2", text: "Laporan untuk pengelola" },
  {
    type: "p",
    text: "Selain melayani pasien, pengelola klinik membutuhkan gambaran operasional: jumlah kunjungan per hari, pemakaian obat, pendapatan per layanan, dan waktu tunggu rata-rata. Laporan ini membantu mengatur jadwal dokter, persediaan obat, dan kapasitas ruang periksa dengan lebih tepat.",
  },
  { type: "h2", text: "Libatkan tenaga medis sejak awal" },
  {
    type: "p",
    text: "Dokter dan perawat adalah pengguna utama sistem, dan waktu mereka sangat berharga. Sistem yang memperlambat pemeriksaan — terlalu banyak klik, alur yang membingungkan — akan ditolak atau diakali dengan mencatat di kertas terlebih dahulu. Libatkan mereka saat memilih dan menguji sistem agar alurnya benar-benar sesuai praktik sehari-hari.",
  },
  { type: "h2", text: "Integrasi dengan laboratorium dan penunjang lain" },
  {
    type: "p",
    text: "Klinik yang lebih besar sering bekerja sama dengan laboratorium eksternal atau memiliki layanan penunjang seperti radiologi. Hasil pemeriksaan penunjang yang bisa langsung masuk ke rekam medis pasien, tanpa harus diunggah manual atau ditempel sebagai lampiran terpisah, mempercepat dokter mengambil keputusan dan mengurangi risiko hasil yang tercecer.",
  },
  {
    type: "p",
    text: "Jika klinik Anda bekerja sama dengan laboratorium tertentu, tanyakan apakah sistem yang dipertimbangkan mendukung integrasi tersebut, atau setidaknya memudahkan pengunggahan dan pengorganisasian hasil pemeriksaan penunjang.",
  },
  { type: "h2", text: "Menangani jadwal dan kapasitas dokter" },
  {
    type: "p",
    text: "Penjadwalan yang baik menyeimbangkan antara mengisi slot praktik dokter secara optimal dan tidak membuat pasien menunggu terlalu lama. Sistem yang menampilkan ketersediaan dokter secara real-time, termasuk saat dokter tiba-tiba berhalangan, membantu petugas pendaftaran memberi informasi yang akurat kepada pasien tanpa harus mengecek manual ke ruang praktik.",
  },
  { type: "h2", text: "Ilustrasi: klinik sebelum dan sesudah" },
  {
    type: "p",
    text: "Bayangkan klinik keluarga dengan tiga dokter. Sebelumnya, rekam medis tersimpan dalam map kertas yang harus dicari petugas setiap kunjungan. Dokter kadang menunggu beberapa menit hanya untuk mendapatkan berkas pasien. Resep ditulis tangan dan kadang tidak terbaca jelas oleh apotek.",
  },
  {
    type: "p",
    text: "Setelah beralih ke sistem terintegrasi, riwayat pasien muncul otomatis saat nomor antrian dipanggil. Dokter menulis resep digital yang langsung diteruskan ke farmasi, lengkap dengan peringatan jika ada riwayat alergi. Waktu tunggu berkurang signifikan, dan pengelola klinik bisa melihat laporan operasional harian tanpa merekap manual.",
  },
  { type: "h2", text: "Langkah menerapkan sistem klinik" },
  {
    type: "ol",
    items: [
      "Petakan alur pasien dari pendaftaran hingga pembayaran",
      "Libatkan dokter dan perawat dalam memilih dan menguji sistem",
      "Pastikan sistem memenuhi ketentuan rekam medis elektronik terbaru",
      "Rancang hak akses sesuai peran sebelum migrasi data",
      "Migrasikan data pasien lama secara bertahap dan bersih",
      "Latih seluruh staf, termasuk petugas pendaftaran dan farmasi",
      "Uji alur lengkap sebelum benar-benar dipakai untuk pasien",
    ],
  },
  { type: "h2", text: "Menangani klinik dengan banyak cabang" },
  {
    type: "p",
    text: "Untuk klinik yang memiliki beberapa cabang, rekam medis pasien idealnya bisa diakses dari cabang mana pun, bukan terkunci hanya di cabang tempat pasien pertama kali mendaftar. Ini penting terutama untuk pasien yang berpindah domisili atau memilih berobat di cabang terdekat sesuai kebutuhan mendesak. Pastikan sistem mendukung akses rekam medis lintas cabang dengan kontrol keamanan yang tetap ketat.",
  },
  { type: "h2", text: "Kesalahan umum dalam penerapan" },
  {
    type: "ul",
    items: [
      "Memilih sistem hanya berdasarkan harga tanpa memeriksa kepatuhan regulasi",
      "Tidak melibatkan dokter dan perawat dalam pengujian",
      "Migrasi rekam medis pasien lama yang tidak bersih",
      "Hak akses yang terlalu longgar untuk semua peran",
      "Tidak menyiapkan rencana jika sistem mengalami gangguan saat jam praktik",
    ],
  },
  { type: "h2", text: "Biaya yang perlu dipertimbangkan" },
  {
    type: "p",
    text: "Selain biaya lisensi atau berlangganan sistem, perhitungkan biaya migrasi rekam medis pasien lama, pelatihan staf, perangkat seperti komputer di setiap ruang periksa, dan kemungkinan penurunan kecepatan pelayanan sementara di minggu-minggu awal transisi. Klinik yang menganggarkan hanya biaya lisensi sering terkejut dengan total biaya sebenarnya saat implementasi berjalan.",
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah klinik kecil tetap perlu rekam medis elektronik?" },
  {
    type: "p",
    text: "Kewajiban ini berlaku luas bagi fasilitas pelayanan kesehatan, tidak hanya rumah sakit besar. Klinik kecil sebaiknya memeriksa ketentuan yang berlaku bagi jenis fasilitasnya dan mulai bertransisi secara bertahap jika belum menerapkannya.",
  },
  { type: "h3", text: "Bagaimana jika koneksi internet di klinik tidak stabil?" },
  {
    type: "p",
    text: "Pilih sistem yang bisa tetap mencatat pemeriksaan secara lokal saat koneksi terputus, lalu menyinkronkan data begitu koneksi kembali. Untuk klinik di lokasi dengan koneksi yang sering bermasalah, ini adalah pertimbangan penting saat memilih sistem.",
  },
  { type: "h3", text: "Siapa yang bertanggung jawab atas keamanan data pasien?" },
  {
    type: "p",
    text: "Tanggung jawab tetap berada di pihak klinik sebagai pengendali data, meski sistem dikelola vendor. Pastikan ada perjanjian tertulis dengan vendor tentang keamanan, kerahasiaan, dan apa yang terjadi terhadap data jika kerja sama berakhir.",
  },
  { type: "h3", text: "Bagaimana menangani pasien yang datang tanpa membawa kartu identitas atau kartu berobat?" },
  {
    type: "p",
    text: "Pencarian data pasien sebaiknya tidak hanya mengandalkan nomor kartu, tetapi juga bisa berdasarkan nama, tanggal lahir, atau nomor telepon yang pernah didaftarkan sebelumnya. Ini penting karena pasien sering lupa membawa kartu, terutama untuk kunjungan lanjutan yang jaraknya sudah cukup lama dari kunjungan pertama.",
  },
  { type: "h2", text: "Memilih antara membangun sendiri atau memakai produk siap pakai" },
  {
    type: "p",
    text: "Untuk klinik dengan alur kerja yang relatif standar, sistem manajemen klinik siap pakai bisa menjadi pilihan yang lebih cepat dan terjangkau untuk memulai. Untuk klinik dengan spesialisasi khusus atau alur kerja yang tidak umum — misalnya klinik yang menggabungkan beberapa layanan kesehatan sekaligus — sistem yang dibangun mengikuti kebutuhan spesifik mungkin lebih tepat dalam jangka panjang.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Sistem manajemen klinik yang baik mempercepat pelayanan tanpa mengorbankan keamanan data pasien. Ia dibangun dari pemahaman alur medis yang sebenarnya, mematuhi regulasi yang berlaku, dan dirancang bersama dokter dan perawat yang akan memakainya setiap hari. Investasi ini bukan sekadar soal efisiensi administratif, tetapi soal kualitas pelayanan kepada pasien.",
  },
  {
    type: "cta",
    title: "Ingin klinik Anda melayani lebih cepat dan lebih aman?",
    text: "Diskusikan kebutuhan sistem manajemen klinik Anda bersama tim AG·SORA — dari alur pasien hingga kepatuhan regulasi.",
    href: "/contact",
    label: "Konsultasi Gratis",
  },
];
