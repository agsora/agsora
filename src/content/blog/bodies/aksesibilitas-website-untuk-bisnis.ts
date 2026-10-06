import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Ketika membicarakan website bisnis, kebanyakan orang memikirkan tampilan, kecepatan, dan peringkat di Google. Ada satu aspek yang sering terlewat padahal dampaknya luas: aksesibilitas, yaitu seberapa mudah website Anda dipakai oleh orang dengan beragam kondisi dan kemampuan. Ini bukan topik khusus untuk segelintir orang. Setiap pengunjung pernah berada dalam situasi di mana mengakses website menjadi lebih sulit dari biasanya.",
  },
  {
    type: "p",
    text: "Bayangkan seseorang dengan penglihatan terbatas yang memakai pembaca layar, orang tua yang membutuhkan huruf lebih besar, pengguna yang tangannya cedera sehingga hanya bisa memakai papan ketik, atau pelanggan yang membuka website di bawah terik matahari dengan layar yang silau. Mereka semua adalah calon pelanggan. Website yang sulit dipakai oleh mereka kehilangan kesempatan, sering tanpa pemiliknya menyadari.",
  },
  {
    type: "p",
    text: "Artikel ini menjelaskan aksesibilitas website dengan bahasa yang praktis bagi pemilik bisnis. Kita akan melihat mengapa hal ini penting bagi bisnis, prinsip-prinsip dasarnya, perbaikan yang paling berdampak, cara memeriksanya, dan bagaimana aksesibilitas ternyata sejalan dengan SEO dan pengalaman pengguna secara umum. Tidak ada klaim angka yang tidak bisa dipertanggungjawabkan; yang kita bahas adalah praktik yang bisa Anda terapkan dan periksa sendiri.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Aksesibilitas berarti website dapat dipakai oleh orang dengan beragam kondisi, termasuk sementara dan situasional, bukan hanya penyandang disabilitas permanen",
      "Banyak perbaikan paling berdampak murah dan sederhana: kontras warna, teks alternatif gambar, label formulir, dan navigasi dengan papan ketik",
      "Praktik yang aksesibel hampir selalu juga baik untuk SEO, kecepatan, dan kenyamanan semua pengunjung",
      "Pemeriksaan otomatis menolong tetapi tidak cukup; uji langsung dengan papan ketik dan pembaca layar tetap diperlukan",
      "Aksesibilitas lebih murah bila dimasukkan sejak perancangan daripada ditambal setelah website selesai",
    ],
  },
  { type: "h2", text: "Mengapa aksesibilitas penting bagi bisnis" },
  {
    type: "p",
    text: "Alasan pertama adalah jangkauan. Semakin banyak orang yang bisa menggunakan website Anda dengan nyaman, semakin banyak yang bisa menjadi pelanggan. Hambatan kecil, seperti tombol yang tidak bisa dijangkau tanpa mouse atau formulir yang tidak jelas labelnya, bisa membuat seseorang menyerah di tengah jalan, dan Anda tidak akan melihatnya di laporan sebagai apa pun selain pengunjung yang pergi.",
  },
  {
    type: "p",
    text: "Alasan kedua adalah kondisi yang bersifat sementara dan situasional. Tangan yang patah, mata yang lelah, layar yang menyilaukan, koneksi lambat, atau ponsel yang dipakai sambil berdiri di kendaraan umum, semuanya menurunkan kemampuan seseorang menggunakan antarmuka. Desain yang aksesibel menolong orang dalam semua kondisi ini, bukan hanya mereka yang punya keterbatasan permanen. Pengguna usia lanjut, yang jumlahnya terus bertambah, juga mendapat manfaat besar.",
  },
  {
    type: "p",
    text: "Alasan ketiga adalah reputasi dan kepercayaan. Website yang rapi dan mudah dipakai oleh siapa saja mencerminkan bisnis yang peduli pada pelanggannya. Selain itu, di sejumlah negara ada aturan atau standar yang mengharuskan layanan digital tertentu aksesibel. Bila bisnis Anda melayani pasar luar negeri atau sektor yang diatur, periksalah ketentuan terbaru yang berlaku, karena aturan bisa berubah dan berbeda antarwilayah.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    alt: "Meja kerja dengan monitor dan laptop yang menampilkan halaman website, lampu meja, dan tanaman",
    caption: "Aksesibilitas paling murah ketika dipikirkan sejak tahap rancangan, bukan setelah halaman jadi.",
  },
  { type: "h2", text: "Empat prinsip dasar yang mudah diingat" },
  {
    type: "p",
    text: "Standar aksesibilitas web yang diakui luas menyusun prinsipnya dalam empat kelompok. Anda tidak perlu menghafal dokumen standarnya untuk memahami intinya. Empat kata kunci berikut cukup untuk membantu Anda menilai website sendiri.",
  },
  { type: "h3", text: "Dapat dipersepsi" },
  {
    type: "p",
    text: "Informasi harus bisa ditangkap oleh pengguna melalui setidaknya satu indra yang mereka miliki. Gambar penting perlu punya teks pengganti agar bisa dibacakan, video perlu takarir, dan teks perlu kontras yang cukup terhadap latar belakangnya. Informasi tidak boleh hanya disampaikan lewat warna, misalnya hanya menandai kolom salah dengan warna merah tanpa pesan teks.",
  },
  { type: "h3", text: "Dapat dioperasikan" },
  {
    type: "p",
    text: "Semua fungsi harus bisa dipakai tanpa bergantung pada satu cara input saja. Menu, tombol, dan formulir harus dapat dijangkau dan dioperasikan dengan papan ketik. Pengguna butuh waktu cukup untuk membaca dan bertindak, dan halaman tidak boleh berkedip atau bergerak dengan cara yang bisa mengganggu atau membahayakan. Target ketuk pada ponsel perlu cukup besar agar tidak salah sentuh.",
  },
  { type: "h3", text: "Dapat dipahami" },
  {
    type: "p",
    text: "Bahasa, tata letak, dan perilaku halaman harus konsisten dan dapat diprediksi. Instruksi jelas, pesan kesalahan menjelaskan apa yang salah dan cara memperbaikinya, dan navigasi bekerja dengan pola yang sama di semua halaman. Menyebutkan bahasa halaman dengan benar juga membantu pembaca layar mengucapkan teks dengan tepat.",
  },
  { type: "h3", text: "Kokoh" },
  {
    type: "p",
    text: "Konten harus bekerja dengan baik pada beragam peramban, perangkat, dan teknologi bantu, termasuk yang akan datang. Praktik paling dasar untuk ini adalah memakai elemen HTML yang benar sesuai fungsinya, bukan meniru tombol atau judul dengan elemen sembarang yang diberi gaya agar tampak serupa.",
  },
  { type: "h2", text: "Perbaikan yang paling berdampak" },
  {
    type: "p",
    text: "Kabar baiknya, sebagian besar masalah aksesibilitas yang umum bisa diatasi dengan perbaikan yang relatif sederhana. Berikut yang paling sering memberi dampak terbesar pada website bisnis biasa seperti company profile, toko online, dan landing page.",
  },
  { type: "h3", text: "Kontras dan keterbacaan teks" },
  {
    type: "p",
    text: "Teks abu-abu muda di atas latar putih mungkin tampak elegan di layar desainer, tetapi sulit dibaca bagi banyak orang, terutama di layar ponsel di bawah cahaya terang. Pastikan perbandingan kontras antara teks dan latarnya memadai, ukuran huruf dasar cukup besar, dan teks bisa diperbesar oleh pengunjung tanpa merusak tata letak. Hindari teks yang tertanam di dalam gambar karena tidak bisa diperbesar atau dibacakan dengan baik.",
  },
  { type: "h3", text: "Teks alternatif untuk gambar" },
  {
    type: "p",
    text: "Setiap gambar yang membawa makna perlu deskripsi singkat dan jujur tentang isinya. Deskripsi ini dibacakan oleh pembaca layar dan juga dipakai mesin pencari untuk memahami gambar. Gambar yang murni hiasan sebaiknya ditandai agar dilewati. Hindari deskripsi yang berisi sekadar gambar atau nama berkas; jelaskan apa yang tampak dan mengapa itu relevan bagi halaman.",
  },
  { type: "h3", text: "Label formulir yang jelas" },
  {
    type: "p",
    text: "Formulir kontak, pendaftaran, dan pembayaran adalah tempat bisnis menghasilkan uang, sekaligus tempat hambatan aksesibilitas paling merugikan. Setiap kolom perlu label yang terhubung secara benar sehingga pembaca layar tahu fungsinya. Jangan hanya mengandalkan teks contoh di dalam kolom yang menghilang saat mengetik. Pesan kesalahan harus muncul dekat kolomnya, dijelaskan dengan kata-kata, dan tidak hanya lewat perubahan warna.",
  },
  { type: "h3", text: "Navigasi dengan papan ketik" },
  {
    type: "p",
    text: "Cobalah menjelajahi website Anda hanya dengan tombol Tab, Shift+Tab, Enter, dan spasi. Apakah Anda bisa mencapai semua menu dan tombol? Apakah urutan fokusnya masuk akal? Apakah terlihat jelas elemen mana yang sedang difokuskan? Banyak website menghilangkan garis tanda fokus demi estetika, padahal itu satu-satunya petunjuk posisi bagi pengguna papan ketik. Menyediakan tautan lompat ke konten utama juga sangat membantu.",
  },
  { type: "h3", text: "Struktur judul yang benar" },
  {
    type: "p",
    text: "Gunakan judul yang berjenjang secara logis, dengan satu judul utama per halaman dan subjudul yang mengikuti hierarki. Pengguna pembaca layar sering melompat antarjudul untuk memindai halaman, sama seperti pembaca biasa memindai dengan mata. Struktur yang rapi ini juga membantu mesin pencari memahami isi halaman Anda.",
  },
  {
    type: "ul",
    items: [
      "Kontras teks dan latar yang memadai, serta ukuran huruf dasar yang nyaman dibaca",
      "Teks alternatif bermakna untuk setiap gambar informatif",
      "Label formulir yang terhubung benar, dengan pesan kesalahan yang jelas",
      "Seluruh fungsi dapat dijangkau dan dipakai dengan papan ketik, dengan penanda fokus yang terlihat",
      "Hierarki judul yang logis dan penggunaan elemen HTML sesuai fungsinya",
      "Takarir atau transkrip untuk konten video dan audio penting",
      "Target ketuk yang cukup besar di perangkat seluler",
    ],
  },
  { type: "h2", text: "Aksesibilitas dan SEO berjalan beriringan" },
  {
    type: "p",
    text: "Salah satu kabar menggembirakan bagi pemilik bisnis adalah banyak praktik aksesibilitas yang sekaligus menguntungkan SEO. Mesin pencari pada dasarnya adalah pengunjung yang tidak bisa melihat: mereka membaca struktur dan teks, bukan tampilan visual. Teks alternatif membantu mereka memahami gambar. Judul yang berjenjang membantu mereka memahami topik. Tautan dengan teks yang deskriptif, bukan sekadar klik di sini, membantu mereka memahami tujuan halaman tujuan.",
  },
  {
    type: "p",
    text: "Demikian pula kecepatan dan kerapian kode. Website yang memakai elemen HTML dengan benar umumnya lebih ringan, lebih mudah dirawat, dan lebih stabil di berbagai perangkat. Itu menguntungkan pengalaman pengguna, yang pada gilirannya memengaruhi seberapa lama pengunjung bertahan dan apakah mereka menyelesaikan tindakan yang Anda harapkan. Untuk dasar-dasarnya, lihat pembahasan kami tentang SEO dasar website perusahaan.",
  },
  { type: "h2", text: "Cara memeriksa aksesibilitas website Anda" },
  {
    type: "p",
    text: "Pemeriksaan aksesibilitas yang baik memadukan alat otomatis dengan uji manual. Alat otomatis, yang tersedia sebagai ekstensi peramban atau fitur audit, cepat menemukan masalah teknis seperti gambar tanpa teks alternatif, kontras yang kurang, atau label formulir yang hilang. Namun alat otomatis hanya mampu menangkap sebagian masalah; banyak hal yang menyangkut makna dan pengalaman hanya bisa dinilai manusia.",
  },
  {
    type: "ol",
    items: [
      "Jalankan pemeriksaan otomatis pada halaman terpenting: beranda, halaman produk atau layanan, formulir kontak, dan alur pembayaran",
      "Jelajahi halaman-halaman itu hanya dengan papan ketik dan catat titik yang tidak bisa dijangkau atau tidak jelas fokusnya",
      "Perbesar tampilan hingga beberapa kali lipat dan pastikan tata letak tetap terbaca tanpa harus menggulir ke samping",
      "Coba pembaca layar bawaan di sistem operasi Anda pada satu alur utama untuk merasakan pengalamannya",
      "Lihat website pada layar ponsel di bawah cahaya terang dan dengan pengaturan ukuran huruf sistem yang lebih besar",
      "Catat temuan, urutkan menurut dampak terhadap tugas penting pengunjung, lalu perbaiki secara bertahap",
    ],
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    alt: "Laptop menampilkan kode program di meja putih dengan tanaman dalam pot kuning",
    caption: "Uji website di berbagai perangkat dan cara pakai, bukan hanya di layar yang dipakai tim pembuatnya.",
  },
  { type: "h2", text: "Hal yang sering terlewat" },
  {
    type: "p",
    text: "Beberapa area sering luput dari perhatian. Pertama adalah konten pihak ketiga, seperti widget obrolan, peta tertanam, pemutar video, dan formulir eksternal. Elemen-elemen ini bisa membawa masalah aksesibilitas sendiri, sehingga pilihlah penyedia yang memperhatikannya dan ujilah setelah dipasang. Kedua adalah dokumen yang diunduh, seperti brosur dan katalog dalam format PDF, yang sering berupa gambar hasil pindai tanpa teks yang bisa dibaca.",
  },
  {
    type: "p",
    text: "Ketiga adalah elemen interaktif kustom: menu geser, carousel, jendela popup, dan tab. Komponen buatan sendiri sering tidak bisa dioperasikan dengan papan ketik atau tidak memberi tahu pembaca layar tentang perubahannya. Jendela popup yang menutupi halaman tetapi tidak menangkap fokus dengan benar adalah contoh klasik yang membuat sebagian pengguna terjebak. Keempat adalah animasi dan konten bergerak; sediakan cara untuk menghentikannya, dan hormati pengaturan sistem bagi pengguna yang tidak nyaman dengan gerakan.",
  },
  {
    type: "callout",
    title: "Hindari solusi instan yang berlebihan",
    text: "Beberapa layanan menawarkan satu baris kode yang katanya membuat website langsung aksesibel. Alat bantu semacam itu bisa melengkapi, tetapi tidak menggantikan fondasi yang benar: struktur HTML yang baik, kontras yang memadai, dan teks alternatif yang bermakna. Perbaikan yang sejati ada pada kode dan konten Anda.",
  },
  { type: "h2", text: "Memasukkan aksesibilitas ke dalam proses kerja" },
  {
    type: "p",
    text: "Aksesibilitas paling murah dan paling efektif bila menjadi bagian dari proses sejak awal. Pada tahap desain, tetapkan palet warna yang memenuhi kontras, ukuran huruf yang nyaman, dan gaya penanda fokus yang jelas. Pada tahap pengembangan, gunakan elemen HTML yang tepat dan komponen yang sudah teruji. Pada tahap konten, biasakan menulis teks alternatif, judul yang bermakna, dan tautan yang deskriptif.",
  },
  {
    type: "p",
    text: "Masukkan juga pemeriksaan aksesibilitas ke dalam daftar periksa peluncuran dan ke dalam pembaruan rutin. Banyak website mulai baik lalu menurun karena konten baru ditambahkan tanpa teks alternatif atau dengan gambar berisi teks. Menetapkan kebiasaan sederhana bagi tim yang mengelola konten sering kali lebih efektif daripada audit besar yang dilakukan sekali.",
  },
  { type: "h2", text: "Dampaknya pada penjualan dan layanan" },
  {
    type: "p",
    text: "Untuk toko online, aksesibilitas langsung terkait penjualan. Proses pembayaran yang hanya bisa diselesaikan dengan mouse, kolom alamat yang tidak berlabel, atau tombol bayar yang sulit dikenali akan menghentikan sebagian pembeli di langkah terakhir. Untuk website company profile, kontak yang sulit dijangkau berarti prospek hilang. Untuk bisnis jasa, formulir janji temu yang tidak ramah papan ketik berarti ada pelanggan yang tidak bisa memesan.",
  },
  {
    type: "p",
    text: "Karena itu, perlakukan aksesibilitas sebagai bagian dari kualitas layanan, bukan beban tambahan. Perbaikan yang membantu satu kelompok pengguna biasanya membuat pengalaman semua orang lebih mulus. Bandingkan dengan jalan landai di pintu masuk toko yang dibuat untuk pengguna kursi roda, tetapi juga dipakai orang yang mendorong kereta bayi atau membawa barang berat.",
  },
  {
    "type": "h2",
    "text": "Pertanyaan yang sering diajukan pemilik bisnis"
  },
  {
    "type": "h3",
    "text": "Apakah aksesibilitas membuat website jadi jelek atau mahal?"
  },
  {
    "type": "p",
    "text": "Tidak. Aksesibilitas membatasi sebagian pilihan, seperti warna dengan kontras terlalu rendah, tetapi tidak menghalangi desain yang indah. Banyak website yang tampil menarik sekaligus aksesibel. Biayanya paling rendah bila dipikirkan sejak awal; memperbaikinya belakangan memang lebih mahal karena sebagian struktur harus dibongkar."
  },
  {
    "type": "h3",
    "text": "Apakah cukup memasang alat bantu pihak ketiga di website?"
  },
  {
    "type": "p",
    "text": "Alat bantu semacam itu dapat menambah kenyamanan, misalnya pengatur ukuran huruf, tetapi tidak menggantikan fondasi yang benar di dalam kode dan konten. Pengguna teknologi bantu sering sudah memiliki perangkat mereka sendiri, dan yang mereka butuhkan adalah website yang bekerja baik dengan perangkat itu."
  },
  {
    "type": "h3",
    "text": "Dari mana sebaiknya memulai bila website sudah berjalan?"
  },
  {
    "type": "p",
    "text": "Mulailah dari halaman dan alur yang paling menentukan bisnis: beranda, halaman layanan atau produk, formulir kontak, dan proses pembayaran. Perbaiki kontras, teks alternatif, label formulir, dan navigasi papan ketik di sana terlebih dahulu. Setelah itu, jadikan standar untuk semua halaman dan konten baru, sehingga masalah tidak muncul lagi."
  },
  {
    "type": "h3",
    "text": "Seberapa sering perlu diperiksa ulang?"
  },
  {
    "type": "p",
    "text": "Setiap kali ada perubahan besar pada tampilan, penambahan fitur, atau pergantian penyedia komponen pihak ketiga, dan paling tidak berkala beberapa kali setahun. Website adalah hal yang terus berubah, dan aksesibilitas yang baik hari ini bisa menurun bila konten baru ditambahkan tanpa perhatian."
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Aksesibilitas bukan fitur mewah dan bukan urusan sekelompok kecil pengguna. Ia adalah ukuran seberapa siap website Anda menyambut semua orang yang ingin berurusan dengan bisnis Anda. Mulailah dari langkah kecil: periksa kontras, lengkapi teks alternatif, rapikan formulir, dan coba jelajahi website dengan papan ketik. Dari sana, jadikan aksesibilitas bagian dari cara tim Anda merancang, membangun, dan mengisi website. Hasilnya adalah website yang lebih ramah, lebih mudah ditemukan, dan lebih siap menghasilkan pelanggan.",
  },
  {
    type: "cta",
    title: "Ingin website yang ramah bagi semua pengunjung?",
    text: "Tim AG·SORA membangun website yang cepat, rapi, dan aksesibel sejak perancangan. Konsultasinya gratis, tanpa komitmen.",
    href: "/services/website",
    label: "Konsultasi Gratis",
  },
];
