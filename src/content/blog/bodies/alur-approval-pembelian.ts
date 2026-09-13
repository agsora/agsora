import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Kepala gudang butuh sepuluh dus kertas fotokopi. Pengajuan dikirim, menunggu tanda tangan manajer yang sedang dinas luar kota tiga hari. Kertas benar-benar habis di hari kedua. Staf terpaksa membeli sendiri pakai uang pribadi, lalu repot mengurus penggantian yang juga butuh persetujuan berlapis.",
  },
  {
    type: "p",
    text: "Setiap perusahaan yang tumbuh akhirnya membutuhkan aturan tentang siapa yang boleh membeli apa dan sampai nilai berapa. Tanpa alur persetujuan, pengeluaran sulit dikendalikan dan berisiko disalahgunakan. Tetapi alur yang dirancang tanpa mempertimbangkan kelancaran operasional justru membuat pembelian sederhana tertahan berhari-hari hanya karena menunggu satu tanda tangan.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Alur persetujuan sebaiknya ditentukan oleh besarnya risiko, bukan sekadar hierarki jabatan",
      "Struktur berjenjang berdasarkan nilai pembelian mengurangi kemacetan untuk pembelian rutin",
      "Delegasi persetujuan saat penyetuju berhalangan mencegah pembelian tertahan tanpa alasan jelas",
      "Hubungkan persetujuan dengan sisa anggaran secara real-time",
      "Ukur waktu tunggu di setiap tahap untuk menemukan titik kemacetan",
    ],
  },
  { type: "h2", text: "Kenapa alur persetujuan dibutuhkan" },
  {
    type: "p",
    text: "Tanpa alur yang jelas, setiap orang bisa membeli apa saja atas nama perusahaan, dan pengeluaran menjadi sulit dipantau sampai laporan keuangan bulanan keluar — pada saat itu, uang sudah terlanjur keluar. Alur persetujuan memberi kesempatan meninjau kebutuhan, harga, dan kesesuaian anggaran sebelum komitmen dibuat, bukan sesudahnya.",
  },
  {
    type: "p",
    text: "Namun alur yang terlalu berlapis untuk semua jenis pembelian menciptakan biaya yang berbeda: waktu yang terbuang, operasional yang tersendat, dan karyawan yang mencari jalan pintas di luar sistem resmi karena proses resminya terlalu lambat.",
  },
  { type: "h2", text: "Mulai dari risiko, bukan dari jabatan" },
  {
    type: "p",
    text: "Alur persetujuan sebaiknya ditentukan oleh besarnya risiko sebuah pembelian, bukan sekadar hierarki organisasi. Pembelian rutin bernilai kecil — alat tulis, konsumsi rapat — tidak perlu melewati jalur yang sama dengan pembelian aset bernilai besar atau kontrak jasa jangka panjang.",
  },
  {
    type: "ul",
    items: [
      "Nilai pembelian, dengan batas nominal yang menentukan tingkat persetujuan",
      "Jenis barang atau jasa: rutin, aset, atau layanan jangka panjang",
      "Apakah pembelian sudah masuk dalam anggaran yang disetujui sebelumnya",
      "Pemasok baru yang belum pernah diverifikasi, atau pemasok yang sudah terdaftar",
      "Departemen yang mengajukan dan riwayat kepatuhannya terhadap kebijakan",
    ],
  },
  { type: "h2", text: "Contoh struktur berjenjang" },
  {
    type: "ol",
    items: [
      "Pembelian rutin di bawah batas tertentu dan masih dalam anggaran: cukup persetujuan kepala divisi",
      "Di atas batas pertama namun masih dalam anggaran: tambahan persetujuan bagian keuangan",
      "Di atas batas kedua atau di luar anggaran yang direncanakan: persetujuan manajemen senior",
      "Pemasok baru yang belum terverifikasi: verifikasi tambahan sebelum pesanan dibuat, terlepas dari nilainya",
    ],
  },
  {
    type: "p",
    text: "Angka batasnya berbeda untuk setiap perusahaan, tergantung skala operasional dan tingkat kepercayaan yang diberikan kepada setiap level manajemen. Yang penting, aturannya tertulis dan diterapkan konsisten di sistem, bukan diputuskan kasus per kasus berdasarkan siapa yang mengajukan.",
  },
  {
    type: "callout",
    title: "Siapkan pengganti saat penyetuju tidak ada",
    text: "Penyebab paling umum pembelian tertahan adalah penyetuju yang sedang cuti, sakit, atau dinas luar kota. Sistem sebaiknya mendukung delegasi persetujuan untuk periode tertentu — bukan menunggu penyetuju utama kembali — dan mengirim pengingat otomatis ketika pengajuan terlalu lama menunggu tanpa tindakan.",
  },
  { type: "h2", text: "Menghubungkan persetujuan dengan anggaran" },
  {
    type: "p",
    text: "Persetujuan paling berguna ketika sistem langsung menunjukkan sisa anggaran divisi saat pengajuan dibuat. Tanpa ini, penyetuju hanya menilai apakah pembelian tersebut masuk akal secara terpisah, tanpa melihat gambaran anggaran keseluruhan yang mungkin sudah hampir habis.",
  },
  {
    type: "p",
    text: "Setelah barang datang, penerimaan barang perlu dicocokkan dengan pesanan pembelian dan tagihan dari pemasok. Pencocokan tiga arah ini — pesanan, penerimaan, dan tagihan — mencegah pembayaran untuk barang yang tidak pernah benar-benar diterima, atau jumlah yang tidak sesuai dengan yang dipesan.",
  },
  { type: "h2", text: "Menangani pembelian mendesak" },
  {
    type: "p",
    text: "Beberapa kebutuhan benar-benar mendesak dan tidak bisa menunggu proses persetujuan normal — misalnya suku cadang mesin yang rusak dan menghentikan produksi. Siapkan jalur khusus untuk kondisi darurat dengan batas nilai yang wajar, disertai kewajiban melaporkan dan mendapatkan persetujuan retroaktif segera setelahnya. Tanpa jalur ini, karyawan akan mengambil jalan pintas di luar sistem saat benar-benar terdesak, dan jalan pintas itu biasanya tidak terdokumentasi sama sekali.",
  },
  { type: "h2", text: "Ilustrasi: sebelum dan sesudah" },
  {
    type: "p",
    text: "Bayangkan perusahaan distribusi dengan alur persetujuan yang mewajibkan semua pembelian, berapa pun nilainya, disetujui langsung oleh direktur. Direktur yang sibuk membuat pengajuan menumpuk berhari-hari, staf mulai membeli kebutuhan kecil dengan uang kas kecil tanpa melalui sistem, dan pengeluaran informal ini tidak pernah benar-benar terpantau.",
  },
  {
    type: "p",
    text: "Setelah alur diubah menjadi berjenjang berdasarkan nilai — kepala divisi untuk pembelian kecil, keuangan untuk menengah, direktur hanya untuk pembelian besar — pengajuan kecil selesai dalam hitungan jam. Direktur hanya menerima notifikasi untuk keputusan yang benar-benar membutuhkan perhatiannya, dan pengeluaran informal berkurang drastis karena jalur resmi jauh lebih praktis dipakai.",
  },
  { type: "h2", text: "Mengukur efektivitas alur persetujuan" },
  {
    type: "ul",
    items: [
      "Waktu rata-rata dari pengajuan hingga persetujuan, per tahap",
      "Persentase pengajuan yang tertahan lebih dari batas waktu wajar",
      "Jumlah pembelian yang dilakukan di luar sistem resmi",
      "Frekuensi pemakaian jalur darurat",
      "Selisih antara anggaran yang disetujui dan realisasi pembelian",
    ],
  },
  {
    type: "p",
    text: "Tahap yang selalu lambat dalam laporan ini adalah tanda bahwa batasnya perlu dinaikkan, penyetujunya perlu ditambah, atau prosesnya perlu disederhanakan. Data ini jauh lebih objektif daripada sekadar keluhan lisan tentang proses yang lambat.",
  },
  { type: "h2", text: "Kesalahan umum dalam merancang alur persetujuan" },
  {
    type: "ul",
    items: [
      "Mewajibkan persetujuan direktur untuk semua nilai pembelian tanpa kecuali",
      "Tidak menyiapkan delegasi saat penyetuju berhalangan",
      "Tidak menghubungkan persetujuan dengan sisa anggaran real-time",
      "Tidak menyediakan jalur darurat untuk kebutuhan mendesak",
      "Aturan yang tidak konsisten diterapkan antar divisi",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Berapa banyak tingkat persetujuan yang ideal?" },
  {
    type: "p",
    text: "Untuk sebagian besar bisnis menengah, dua hingga tiga tingkat sudah cukup: kepala divisi, keuangan, dan manajemen senior untuk nilai terbesar. Terlalu banyak tingkat membuat proses lambat tanpa menambah kontrol yang berarti.",
  },
  { type: "h3", text: "Bagaimana menangani pembelian rutin yang berulang setiap bulan?" },
  {
    type: "p",
    text: "Untuk pembelian rutin seperti langganan atau pasokan tetap, pertimbangkan persetujuan anggaran tahunan sekali di awal, sehingga transaksi bulanan berikutnya tidak perlu melalui persetujuan berulang selama masih sesuai dengan yang disetujui.",
  },
  { type: "h2", text: "Jejak audit yang bisa dipertanggungjawabkan" },
  {
    type: "p",
    text: "Setiap pengajuan yang melewati alur persetujuan sebaiknya meninggalkan jejak yang jelas: siapa yang mengajukan, siapa yang menyetujui, kapan setiap langkah terjadi, dan catatan apa pun yang ditambahkan di sepanjang proses. Jejak ini bukan sekadar formalitas administratif — ketika audit internal atau eksternal bertanya mengapa sebuah pembelian besar disetujui, jawabannya harus bisa ditelusuri dalam hitungan menit, bukan dengan mencari-cari email lama atau bertanya ke orang yang mungkin sudah lupa detailnya.",
  },
  {
    type: "p",
    text: "Jejak audit yang rapi juga melindungi penyetuju itu sendiri. Ketika keputusan pembelian dipertanyakan di kemudian hari — misalnya karena harga yang ternyata lebih mahal dari pasar, atau pemasok yang bermasalah — penyetuju bisa menunjukkan pertimbangan apa yang tersedia saat itu, bukan disalahkan berdasarkan informasi yang baru diketahui belakangan. Ini mengubah persetujuan dari sekadar formalitas menjadi keputusan yang bisa dipertanggungjawabkan.",
  },
  { type: "h2", text: "Menangani pengajuan yang ditolak" },
  {
    type: "p",
    text: "Alur persetujuan yang sehat bukan hanya soal menyetujui, tapi juga soal menolak dengan cara yang jelas dan membangun. Penolakan tanpa alasan membuat pengaju bingung harus memperbaiki apa, dan sering berujung pada pengajuan ulang yang sama persis karena tidak tahu bagian mana yang bermasalah. Setiap penolakan sebaiknya disertai alasan singkat — nilainya melebihi anggaran, spesifikasi kurang jelas, atau pemasok belum terverifikasi — sehingga pengaju bisa memperbaiki dan mengajukan kembali dengan tepat.",
  },
  {
    type: "p",
    text: "Perlu juga dibedakan antara penolakan permanen dan penolakan yang sebenarnya hanya butuh informasi tambahan. Banyak sistem yang hanya mengenal dua status — disetujui atau ditolak — padahal status ketiga seperti “butuh klarifikasi” akan jauh lebih membantu, karena pengajuan tetap berada di tangan pengaju untuk dilengkapi, bukan mati begitu saja dan harus dibuat ulang dari awal.",
  },
  { type: "h2", text: "Melibatkan tim di awal, bukan memaksakan dari atas" },
  {
    type: "p",
    text: "Alur persetujuan yang dirancang tanpa melibatkan orang-orang yang akan menjalankannya sehari-hari cenderung gagal dipatuhi. Kepala divisi yang terbiasa membeli kebutuhan operasional secara cepat akan mencari cara memutar jika aturan baru terasa menghambat tanpa alasan yang mereka pahami. Libatkan perwakilan dari divisi yang paling sering mengajukan pembelian saat merancang batas nominal dan jumlah tingkat persetujuan, sehingga aturan yang dihasilkan realistis dengan cara kerja mereka, bukan sekadar kebijakan yang diturunkan dari atas tanpa konteks lapangan.",
  },
  {
    type: "p",
    text: "Setelah alur baru diterapkan, beri masa transisi di mana tim keuangan atau admin sistem aktif membantu karyawan yang masih bingung dengan proses baru, alih-alih langsung menolak pengajuan yang tidak sesuai format tanpa penjelasan. Kepatuhan terhadap alur persetujuan tumbuh lebih cepat ketika karyawan merasa dibantu memahami sistem baru, bukan sekadar diawasi lebih ketat.",
  },
  { type: "h2", text: "Meninjau ulang batas nominal secara berkala" },
  {
    type: "p",
    text: "Batas nominal yang ditetapkan di awal jarang cocok selamanya. Seiring bisnis tumbuh, biaya operasional naik, dan volume pembelian bertambah, batas yang dulu terasa wajar bisa menjadi terlalu ketat sehingga pembelian rutin yang sebenarnya kecil mulai ikut tersangkut di tingkat persetujuan yang lebih tinggi dari seharusnya. Tinjau ulang batas nominal ini setidaknya sekali dalam setahun, dibandingkan dengan data waktu tunggu dan volume pengajuan di setiap tingkat, untuk memastikan strukturnya masih sesuai dengan skala bisnis saat ini.",
  },
  { type: "h3", text: "Bagaimana jika penyetuju tidak pernah merespons pengajuan?" },
  {
    type: "p",
    text: "Tetapkan batas waktu wajar untuk setiap tingkat persetujuan, misalnya dua hari kerja untuk pembelian rutin. Jika batas waktu ini terlewati tanpa tindakan, sistem sebaiknya mengirim pengingat otomatis, lalu meningkatkan eskalasi ke penyetuju pengganti jika tetap tidak ada respons. Tanpa mekanisme ini, pengajuan bisa tertahan tanpa batas waktu yang jelas hanya karena satu orang lupa membukanya.",
  },
  { type: "h2", text: "Menyelaraskan approval dengan evaluasi pemasok" },
  {
    type: "p",
    text: "Alur persetujuan sering dirancang seolah-olah hanya soal nilai rupiah, padahal keputusan membeli dari pemasok tertentu juga membawa risiko tersendiri yang layak dipertimbangkan dalam proses yang sama. Pemasok baru yang belum pernah bertransaksi dengan perusahaan idealnya melewati pemeriksaan dasar — legalitas usaha, riwayat pengiriman jika tersedia referensinya, dan kejelasan syarat pembayaran — sebelum pesanan pertama dibuat, bukan setelah barang sudah dikirim dan ternyata bermasalah. Menggabungkan pemeriksaan pemasok ke dalam alur persetujuan, alih-alih menjadikannya proses terpisah yang mudah terlewat, memastikan setiap pembelian dari pemasok baru otomatis melalui langkah verifikasi ini tanpa bergantung pada inisiatif orang per orang untuk mengingatnya.",
  },
  {
    type: "p",
    text: "Untuk pemasok yang sudah lama bekerja sama dan terbukti dapat diandalkan, alur persetujuan sebaiknya tidak memperlakukan mereka sama ketatnya dengan pemasok baru yang belum punya rekam jejak. Sistem yang menyimpan riwayat transaksi dengan setiap pemasok — ketepatan waktu pengiriman, kesesuaian kualitas, dan konsistensi harga dari waktu ke waktu — memberi penyetuju konteks yang jauh lebih kaya dibanding sekadar melihat nominal pengajuan. Pembelian rutin dari pemasok dengan rekam jejak baik bisa diberi jalur persetujuan yang lebih ringkas, sementara pemasok dengan riwayat bermasalah otomatis mendapat pengawasan lebih ketat pada pengajuan berikutnya.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Alur approval pembelian yang baik menyeimbangkan kontrol dan kelancaran. Dengan struktur berjenjang berdasarkan risiko, delegasi yang jelas, dan hubungan langsung ke anggaran, pembelian yang wajar bisa berjalan cepat sementara pembelian berisiko tetap mendapat pengawasan yang layak.",
  },
  {
    type: "cta",
    title: "Alur persetujuan pembelian Anda masih lewat WhatsApp?",
    text: "AG·SORA ERP menyediakan alur approval pembelian yang terstruktur dan terhubung langsung dengan anggaran.",
    href: "/products#erp",
    label: "Lihat AG·SORA ERP",
  },
];
