import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Setiap pagi, satu staf admin membuka tumpukan faktur dari pemasok — ada yang hasil scan, ada yang foto dari WhatsApp, ada yang PDF rapi. Ia mengetik ulang nomor faktur, tanggal, nama pemasok, dan total tagihan ke sistem, satu per satu. Tiga jam kemudian, tumpukan itu belum juga habis, dan besok akan datang tumpukan baru.",
  },
  {
    type: "p",
    text: "Di banyak perusahaan, ada orang yang menghabiskan berjam-jam setiap minggu mengetik ulang data dari dokumen: faktur pemasok, nota pengeluaran, formulir pendaftaran, atau surat jalan. Pekerjaan ini membosankan, lambat, dan yang lebih penting, satu salah ketik kecil pada angka bisa berakibat besar di laporan keuangan yang mengandalkan data tersebut.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Teknologi pengenalan teks dan AI bisa membaca dokumen dan mengambil data pentingnya otomatis",
      "Cocok untuk dokumen berformat relatif seragam dengan volume yang cukup besar",
      "Tetap perlu pemeriksaan manusia untuk data dengan tingkat keyakinan rendah",
      "Paling bernilai ketika data yang terbaca langsung dicocokkan dengan data lain",
      "Perhatikan kerahasiaan jika memakai layanan pihak ketiga untuk memproses dokumen",
    ],
  },
  { type: "h2", text: "Apa yang bisa diotomatiskan" },
  {
    type: "p",
    text: "Teknologi pengenalan teks (OCR) yang dipadukan dengan AI kini mampu membaca dokumen — termasuk hasil pindaian dan foto yang tidak selalu sempurna kualitasnya — lalu mengambil informasi seperti nomor faktur, tanggal, nama pemasok, dan nilai tagihan secara otomatis. Data yang berhasil dibaca itu kemudian bisa dimasukkan langsung ke sistem tanpa diketik manual satu per satu.",
  },
  {
    type: "p",
    text: "Kemampuan ini bukan sekadar membaca teks secara harfiah, tetapi memahami konteks: mengetahui bahwa angka tertentu adalah total tagihan bukan nomor telepon, atau bahwa deretan angka tertentu adalah tanggal meski formatnya berbeda-beda antar dokumen.",
  },
  { type: "h2", text: "Dokumen yang paling cocok diotomatiskan" },
  {
    type: "ul",
    items: [
      "Dokumen dengan format yang relatif seragam dan berulang, seperti faktur dari pemasok tetap",
      "Volume yang cukup besar sehingga penghematan waktunya benar-benar terasa",
      "Informasi yang dibutuhkan jelas dan terbatas jumlahnya",
      "Hasil yang bisa dicocokkan dengan data lain, seperti pesanan pembelian yang sudah ada",
    ],
  },
  {
    type: "p",
    text: "Dokumen yang formatnya sangat bervariasi, tulisan tangan yang sulit dibaca, atau volumenya sangat kecil sering kali tidak sepadan untuk diotomatiskan — biaya pengembangan dan pemeliharaannya bisa lebih besar dari waktu yang dihemat.",
  },
  { type: "h2", text: "Tetap perlu pemeriksaan manusia" },
  {
    type: "p",
    text: "Pembacaan otomatis tidak selalu tepat seratus persen, terutama pada foto yang buram, tulisan tangan, atau format dokumen yang tidak biasa dan belum pernah ditemui sistem sebelumnya. Rancang alur kerja di mana sistem menandai data dengan tingkat keyakinan rendah untuk diperiksa manual oleh petugas, sementara data yang jelas dan meyakinkan bisa langsung diproses tanpa hambatan.",
  },
  {
    type: "p",
    text: "Pendekatan ini — memproses yang jelas secara otomatis, menandai yang meragukan untuk diperiksa — jauh lebih realistis daripada mengharapkan otomatisasi sempurna sejak hari pertama.",
  },
  {
    type: "callout",
    title: "Cocokkan, jangan hanya salin",
    text: "Otomatisasi paling bernilai ketika data yang terbaca langsung dicocokkan dengan data lain — misalnya faktur yang dicocokkan dengan pesanan pembelian dan catatan penerimaan barang. Ketidakcocokan antara ketiganya menjadi daftar yang perlu ditinjau petugas, bukan kesalahan yang lolos begitu saja tanpa disadari.",
  },
  { type: "h2", text: "Mulai dari satu jenis dokumen" },
  {
    type: "p",
    text: "Pilih satu jenis dokumen dengan volume terbesar dan format paling seragam, jalankan otomatisasinya selama beberapa minggu, lalu ukur akurasi dan waktu yang benar-benar dihemat. Setelah hasilnya jelas dan terbukti bermanfaat, baru perluas cakupannya ke jenis dokumen lain yang lebih bervariasi.",
  },
  { type: "h2", text: "Perhatikan kerahasiaan data" },
  {
    type: "p",
    text: "Dokumen keuangan dan formulir yang diproses sering berisi data sensitif — nilai transaksi, data pemasok, kadang data pribadi. Jika proses pembacaan memakai layanan pihak ketiga, pahami bagaimana penyedia layanan menyimpan dan menggunakan data tersebut, pilih layanan yang ketentuannya sesuai kebijakan internal perusahaan, dan pastikan sesuai dengan ketentuan pelindungan data yang berlaku.",
  },
  { type: "h2", text: "Simpan dokumen aslinya" },
  {
    type: "p",
    text: "Data yang sudah diambil dari dokumen sebaiknya tetap terhubung dengan file dokumen aslinya di dalam sistem. Ketika ada pertanyaan, ketidaksesuaian, atau kebutuhan audit di kemudian hari, petugas bisa langsung membuka dokumen sumbernya tanpa harus mencari arsip fisik yang mungkin sudah tersimpan entah di mana.",
  },
  { type: "h2", text: "Ilustrasi: dari tiga jam menjadi tiga puluh menit" },
  {
    type: "p",
    text: "Bayangkan sebuah distributor yang menerima rata-rata lima puluh faktur pemasok setiap hari, dalam berbagai format: PDF, foto WhatsApp, dan hasil scan. Sebelumnya, satu staf menghabiskan sekitar tiga jam setiap hari untuk mengetik ulang detail setiap faktur ke sistem akuntansi.",
  },
  {
    type: "p",
    text: "Setelah menerapkan otomatisasi pembacaan faktur, sebagian besar dokumen dengan format yang sudah dikenali sistem — dari pemasok tetap yang formatnya konsisten — terbaca otomatis dalam hitungan detik dan langsung dicocokkan dengan pesanan pembelian yang ada. Staf tersebut kini hanya perlu memeriksa sekitar sepuluh faktur yang ditandai sistem karena formatnya baru atau kualitas gambarnya kurang jelas, menghabiskan waktu sekitar tiga puluh menit alih-alih tiga jam.",
  },
  { type: "h2", text: "Menangani perubahan format dari pemasok" },
  {
    type: "p",
    text: "Pemasok kadang mengubah template faktur mereka tanpa pemberitahuan, yang bisa membuat sistem otomatisasi gagal membaca dengan benar untuk sementara. Pantau tingkat akurasi secara berkala, dan siapkan mekanisme agar sistem bisa “belajar” format baru dengan cepat setelah beberapa contoh diperiksa dan dikoreksi manual.",
  },
  { type: "h2", text: "Menangani dokumen multi-halaman dan lampiran" },
  {
    type: "p",
    text: "Tidak semua dokumen sesederhana satu faktur satu halaman. Sebagian pemasok mengirim satu berkas PDF berisi beberapa faktur sekaligus, atau melampirkan surat jalan dan bukti pengiriman dalam berkas yang sama. Sistem otomatisasi perlu mampu memisahkan setiap dokumen di dalam satu berkas gabungan, mengenali mana yang merupakan dokumen utama dan mana yang lampiran pendukung, sebelum data masing-masing bisa diambil dengan benar.",
  },
  {
    type: "p",
    text: "Jika sistem yang dipakai belum mendukung pemisahan otomatis seperti ini, langkah sementara yang lebih realistis adalah meminta staf memisahkan berkas gabungan menjadi dokumen tunggal sebelum diproses sistem — masih jauh lebih cepat dibanding mengetik ulang seluruh isinya secara manual satu per satu.",
  },
  { type: "h2", text: "Mengukur laba atas investasi otomatisasi" },
  {
    type: "p",
    text: "Sebelum memperluas cakupan otomatisasi ke lebih banyak jenis dokumen, hitung dengan jujur berapa waktu staf yang benar-benar terhemat dibanding biaya berlangganan atau biaya pengembangan sistem yang dipakai. Untuk volume dokumen yang kecil, terkadang biaya lisensi layanan otomatisasi justru lebih besar dari waktu yang dihemat, sehingga tetap memproses manual bisa jadi pilihan yang lebih masuk akal untuk saat itu.",
  },
  {
    type: "p",
    text: "Perhitungan ini sebaiknya ditinjau ulang secara berkala, karena volume dokumen yang terus bertambah seiring pertumbuhan bisnis bisa mengubah kalkulasi yang tadinya belum menguntungkan menjadi jauh lebih layak di kemudian hari.",
  },
  { type: "h3", text: "Bagaimana menangani dokumen dari pemasok baru yang belum pernah dikenali sistem?" },
  {
    type: "p",
    text: "Dokumen dari pemasok baru biasanya akan ditandai dengan tingkat keyakinan rendah pada percobaan pertama, karena sistem belum pernah mempelajari formatnya. Setelah beberapa dokumen dari pemasok yang sama diperiksa dan dikoreksi manual, sebagian besar sistem otomatisasi modern akan mulai mengenali pola formatnya dan tingkat akurasinya meningkat untuk dokumen berikutnya dari pemasok tersebut.",
  },
  { type: "h2", text: "Langkah menerapkan otomatisasi input dokumen" },
  {
    type: "ol",
    items: [
      "Identifikasi jenis dokumen dengan volume terbesar dan format paling seragam",
      "Tentukan data spesifik yang perlu diambil dari dokumen tersebut",
      "Tetapkan ambang keyakinan untuk data yang bisa diproses otomatis vs perlu diperiksa",
      "Hubungkan hasil pembacaan dengan pencocokan data lain yang relevan",
      "Jalankan uji coba dan ukur akurasi serta waktu yang dihemat",
      "Perluas ke jenis dokumen lain setelah hasil awal terbukti baik",
    ],
  },
  { type: "h2", text: "Kesalahan umum" },
  {
    type: "ul",
    items: [
      "Mengharapkan akurasi sempurna sejak hari pertama tanpa pemeriksaan manusia",
      "Mencoba mengotomatiskan semua jenis dokumen sekaligus",
      "Tidak mencocokkan hasil pembacaan dengan data lain untuk validasi",
      "Mengabaikan kerahasiaan data saat memilih layanan pihak ketiga",
      "Tidak menyimpan dokumen asli yang terhubung dengan data hasil ekstraksi",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Seberapa akurat teknologi ini untuk dokumen berbahasa Indonesia?" },
  {
    type: "p",
    text: "Teknologi pengenalan teks modern umumnya sudah cukup baik untuk bahasa Indonesia, terutama untuk dokumen dengan format cetak yang jelas. Akurasi untuk tulisan tangan dan dokumen dengan kualitas gambar rendah tetap lebih rendah dan membutuhkan lebih banyak pemeriksaan manual.",
  },
  { type: "h3", text: "Apakah ini hanya untuk perusahaan besar dengan volume dokumen tinggi?" },
  {
    type: "p",
    text: "Manfaatnya paling terasa pada volume tinggi, tetapi bisnis dengan volume sedang yang stafnya terbatas juga bisa merasakan manfaat signifikan, terutama jika waktu staf tersebut lebih berharga dipakai untuk pekerjaan lain yang membutuhkan penilaian manusia.",
  },
  { type: "h2", text: "Siapa yang bertanggung jawab meninjau hasil ekstraksi" },
  {
    type: "p",
    text: "Otomatisasi yang berjalan tanpa pemilik yang jelas cenderung terbengkalai begitu masalah kecil muncul. Tentukan sejak awal siapa yang bertanggung jawab memeriksa data berkeyakinan rendah, siapa yang berwenang mengoreksi kesalahan pembacaan, dan siapa yang memantau tingkat akurasi dari waktu ke waktu. Tanpa kejelasan ini, antrean dokumen yang perlu ditinjau manual bisa menumpuk tanpa ada yang benar-benar merasa itu tugasnya, sampai akhirnya menumpuk menjadi masalah yang lebih besar dari proses manual yang digantikannya.",
  },
  {
    type: "p",
    text: "Tanggung jawab ini tidak harus dipegang satu orang penuh waktu — untuk volume yang belum terlalu besar, cukup dijadikan bagian dari tugas harian staf admin yang sudah ada, dengan waktu khusus yang dialokasikan setiap hari untuk meninjau dokumen yang ditandai sistem. Yang penting bukan besarnya alokasi waktu, melainkan kejelasan bahwa tugas ini benar-benar menjadi milik seseorang.",
  },
  { type: "h2", text: "Menangani dokumen dalam mata uang atau bahasa berbeda" },
  {
    type: "p",
    text: "Bisnis yang berhubungan dengan pemasok atau pelanggan dari luar negeri sering menerima dokumen dalam bahasa asing atau dengan format mata uang dan tanggal yang berbeda dari konvensi lokal. Sistem otomatisasi perlu dikonfigurasi untuk mengenali variasi ini — misalnya format tanggal hari-bulan-tahun versus bulan-hari-tahun, atau simbol mata uang yang berbeda-beda — agar tidak salah menafsirkan angka yang sebenarnya sudah jelas bagi manusia yang membacanya secara langsung.",
  },
  {
    type: "p",
    text: "Untuk volume dokumen asing yang masih kecil, sering kali lebih realistis memperlakukannya sebagai pengecualian yang ditinjau manual sejak awal, dibanding memaksakan sistem mengenali seluruh variasi format yang mungkin muncul dari berbagai negara. Perluas cakupan otomatisasi ke dokumen asing hanya setelah volumenya benar-benar cukup besar untuk membenarkan usaha konfigurasi tambahan tersebut.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Mengotomatiskan input data dari dokumen bukan tentang menghilangkan pekerjaan manusia sepenuhnya, melainkan memindahkan waktu dari mengetik berulang menjadi memeriksa pengecualian. Mulai dari satu jenis dokumen dengan volume terbesar, ukur hasilnya, dan biarkan data yang menentukan apakah layak diperluas ke dokumen lain.",
  },
  {
    type: "cta",
    title: "Masih mengetik ulang faktur satu per satu?",
    text: "Kami bantu merancang otomatisasi pembacaan dokumen yang terintegrasi dengan sistem Anda.",
    href: "/services/ai-automation",
    label: "Pelajari AI Automation",
  },
];
