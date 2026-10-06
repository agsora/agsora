import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Banyak bisnis menganggap pekerjaan membuat aplikasi mobile selesai begitu aplikasinya tayang di toko aplikasi. Kenyataannya, peluncuran justru baris start. Pelanggan mengunduh aplikasi, membukanya satu atau dua kali, lalu ikon itu tenggelam di antara puluhan aplikasi lain di ponsel mereka. Tantangan sesungguhnya bukan membuat orang mengunduh, melainkan membuat mereka punya alasan untuk kembali.",
  },
  {
    type: "p",
    text: "Salah satu alat yang paling sering dipakai untuk mengajak pengguna kembali adalah notifikasi push. Alat ini sangat kuat, tetapi juga sangat mudah disalahgunakan. Notifikasi yang tepat waktu dan relevan terasa seperti pelayanan yang baik. Notifikasi yang berlebihan dan tidak relevan terasa seperti gangguan, dan akibatnya pengguna mematikan izin notifikasi atau bahkan menghapus aplikasinya.",
  },
  {
    type: "p",
    text: "Artikel ini membahas bagaimana notifikasi push dan strategi retensi lain dirancang dengan sehat untuk aplikasi mobile bisnis. Kita akan melihat jenis notifikasi yang bermanfaat, cara meminta izin dengan benar, pentingnya segmentasi dan waktu pengiriman, serta cara mengukur apakah semua upaya itu benar-benar bekerja. Pembahasannya bersifat praktis dan tidak memakai angka rekaan; yang kita pakai adalah penalaran yang bisa Anda uji sendiri pada data bisnis Anda.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Retensi pengguna lahir dari manfaat nyata di dalam aplikasi; notifikasi hanya mengingatkan, bukan menggantikan alasan untuk kembali",
      "Notifikasi transaksional (status pesanan, pembayaran, janji temu) hampir selalu diterima baik; notifikasi promosi harus dibatasi dan dipersonalisasi",
      "Meminta izin notifikasi sebaiknya dilakukan di momen yang relevan, dengan penjelasan manfaat, bukan langsung saat aplikasi pertama dibuka",
      "Segmentasi dan frekuensi yang wajar lebih penting daripada jumlah notifikasi yang dikirim",
      "Ukur bukan hanya berapa notifikasi dibuka, tetapi apakah perilaku pengguna berubah menjadi lebih bernilai",
    ],
  },
  { type: "h2", text: "Mengapa banyak aplikasi ditinggalkan setelah diunduh" },
  {
    type: "p",
    text: "Mengunduh aplikasi adalah keputusan yang murah bagi pengguna, tetapi mempertahankannya di ponsel memerlukan alasan yang lebih kuat. Ponsel setiap orang penuh, ruang penyimpanan terbatas, dan perhatian terpecah ke banyak hal. Aplikasi yang tidak memberi manfaat jelas dalam beberapa hari pertama akan dilupakan, dan kebanyakan pengguna tidak merasa perlu menghapusnya secara aktif; mereka hanya berhenti membukanya.",
  },
  {
    type: "p",
    text: "Penyebab yang paling umum bukan kurangnya notifikasi, melainkan aplikasi yang tidak menyelesaikan masalah nyata dengan lebih baik daripada alternatifnya. Jika pelanggan bisa memesan lewat WhatsApp dengan cara yang sama nyamannya, mereka tidak punya alasan kuat membuka aplikasi Anda. Karena itu, sebelum memikirkan notifikasi, pastikan aplikasi punya hal yang tidak bisa mudah diberikan saluran lain: riwayat pesanan yang rapi, poin loyalitas yang terlihat, pemesanan ulang satu ketukan, atau pelacakan status yang akurat.",
  },
  {
    type: "p",
    text: "Pengalaman beberapa hari pertama menentukan banyak hal. Pengguna yang berhasil menyelesaikan satu tindakan bermakna, seperti pesanan pertama atau pembuatan akun yang tuntas, jauh lebih mungkin kembali daripada yang berhenti di layar pengantar. Merancang alur awal yang pendek, jelas, dan langsung memberi hasil adalah bentuk retensi yang paling murah dan sering paling efektif.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
    alt: "Sketsa wireframe berwarna dari beberapa tata letak layar aplikasi",
    caption: "Ponsel pelanggan penuh aplikasi; yang bertahan adalah yang memberi manfaat nyata, bukan yang paling sering berbunyi.",
  },
  { type: "h2", text: "Memahami jenis notifikasi dan kapan masing-masing cocok" },
  {
    type: "p",
    text: "Tidak semua notifikasi sama nilainya bagi pengguna. Cara paling berguna untuk menyusunnya adalah mengelompokkan berdasarkan tujuan. Dengan pengelompokan itu, Anda bisa memberi aturan frekuensi dan izin yang berbeda untuk setiap kelompok, serta memberi pengguna kendali yang halus alih-alih pilihan ya atau tidak untuk semuanya.",
  },
  { type: "h3", text: "Notifikasi transaksional" },
  {
    type: "p",
    text: "Ini adalah notifikasi yang dipicu oleh tindakan pengguna sendiri atau oleh perubahan status sesuatu yang mereka tunggu: pesanan dikonfirmasi, barang dikirim, pembayaran diterima, janji temu besok, kode verifikasi. Pengguna biasanya mengharapkan dan menghargainya, karena informasinya langsung berguna. Kelompok ini hampir tidak pernah dianggap mengganggu selama isinya akurat dan tepat waktu.",
  },
  { type: "h3", text: "Notifikasi pengingat" },
  {
    type: "p",
    text: "Pengingat membantu pengguna menyelesaikan sesuatu yang sudah mereka mulai atau butuhkan: keranjang yang belum dibayar, jadwal servis yang akan jatuh tempo, voucher yang hampir kedaluwarsa, atau stok produk langganan yang mungkin hampir habis. Kuncinya adalah ketepatan. Pengingat yang muncul saat pengguna memang masih membutuhkannya terasa membantu; pengingat yang muncul berulang-ulang untuk hal yang sudah selesai terasa membuntuti.",
  },
  { type: "h3", text: "Notifikasi promosi dan konten" },
  {
    type: "p",
    text: "Ini kelompok yang paling berisiko. Penawaran khusus, produk baru, atau konten edukasi bisa bermanfaat jika sesuai dengan minat pengguna, tetapi cepat menjadi gangguan jika dikirim ke semua orang tanpa pandang bulu. Kelompok ini sebaiknya dibatasi frekuensinya, dipersonalisasi berdasarkan perilaku nyata, dan diberi pengaturan terpisah agar pengguna bisa mematikannya tanpa kehilangan notifikasi transaksional.",
  },
  { type: "h2", text: "Meminta izin notifikasi dengan cara yang benar" },
  {
    type: "p",
    text: "Pada sistem operasi ponsel modern, pengguna harus memberi izin sebelum aplikasi boleh mengirim notifikasi, dan pada banyak kasus kesempatan untuk meminta izin sistem itu sangat terbatas. Jika pengguna menolak pada permintaan pertama, memintanya lagi bisa jadi sulit atau mengharuskan mereka masuk sendiri ke pengaturan ponsel. Artinya, permintaan izin adalah momen berharga yang tidak boleh disia-siakan.",
  },
  {
    type: "p",
    text: "Kesalahan yang sering terjadi adalah memunculkan permintaan izin segera saat aplikasi dibuka untuk pertama kali, ketika pengguna belum tahu apa manfaat aplikasi tersebut. Pendekatan yang lebih sehat adalah menunggu momen yang relevan. Misalnya, setelah pengguna membuat pesanan pertama, tampilkan penjelasan singkat seperti kami bisa memberi tahu saat pesanan Anda dikirim, lalu baru minta izin sistem. Layar penjelasan buatan sendiri ini juga berfungsi sebagai penyaring: jika pengguna menolaknya, Anda belum menghabiskan kesempatan meminta izin sistem.",
  },
  {
    type: "ul",
    items: [
      "Jelaskan manfaat konkret bagi pengguna sebelum memunculkan permintaan izin sistem",
      "Minta izin pada momen ketika notifikasi terasa masuk akal, misalnya setelah pesanan pertama",
      "Sediakan pengaturan di dalam aplikasi untuk memilih kategori notifikasi yang diinginkan",
      "Hormati penolakan; jangan terus memunculkan permintaan yang sama berulang kali",
      "Tetap sediakan jalur alternatif, seperti email atau pesan di dalam aplikasi, bagi yang tidak mengaktifkan notifikasi",
    ],
  },
  { type: "h2", text: "Segmentasi: mengirim hal yang tepat kepada orang yang tepat" },
  {
    type: "p",
    text: "Segmentasi berarti membagi pengguna menjadi kelompok berdasarkan hal yang relevan, lalu menyesuaikan pesan untuk tiap kelompok. Segmentasi tidak harus rumit. Pembagian sederhana seperti pelanggan baru dan pelanggan lama, yang pernah membeli kategori tertentu, yang belum bertransaksi dalam jangka waktu tertentu, atau yang berada di wilayah tertentu sudah membuat pesan jauh lebih relevan dibandingkan satu pesan untuk semua.",
  },
  {
    type: "p",
    text: "Contoh nyata: sebuah kedai kopi tidak perlu mengirim promo menu sarapan kepada pelanggan yang selalu datang sore hari. Sebuah toko perlengkapan bayi tidak perlu memberi tahu pelanggan yang hanya membeli kebutuhan dapur. Dengan data riwayat pembelian yang tersimpan rapi di sistem, penyesuaian seperti ini bisa dilakukan otomatis. Itulah salah satu alasan aplikasi mobile sebaiknya terhubung dengan sistem POS atau CRM, bukan berdiri sebagai silo terpisah.",
  },
  {
    type: "p",
    text: "Personalisasi juga perlu bijak. Pesan yang terlalu menunjukkan bahwa Anda mengetahui banyak hal tentang pengguna dapat terasa tidak nyaman. Gunakan data yang memang wajar dipakai untuk melayani mereka, jelaskan di kebijakan privasi apa yang dikumpulkan, dan berikan kemudahan bagi pengguna untuk mengatur preferensinya.",
  },
  { type: "h2", text: "Waktu dan frekuensi: lebih sedikit sering kali lebih baik" },
  {
    type: "p",
    text: "Kapan sebuah notifikasi dikirim sama pentingnya dengan apa isinya. Notifikasi promosi yang masuk tengah malam atau saat jam kerja yang sibuk berpeluang diabaikan atau membuat kesal. Gunakan zona waktu pengguna, hindari jam istirahat, dan jika memungkinkan, pelajari dari data kapan pengguna Anda biasanya aktif di aplikasi lalu kirim mendekati waktu itu.",
  },
  {
    type: "p",
    text: "Frekuensi perlu batas yang jelas. Tetapkan batas maksimum notifikasi promosi per minggu, dan buat aturan agar beberapa kampanye tidak menumpuk pada pengguna yang sama pada saat bersamaan. Tanpa batas ini, setiap tim internal, misalnya pemasaran, penjualan, dan operasional, akan merasa pesannya paling penting, dan pengguna menanggung akibatnya.",
  },
  {
    type: "callout",
    title: "Satu aturan sederhana",
    text: "Sebelum mengirim notifikasi, tanyakan: apakah penerima akan merasa terbantu bila membacanya? Jika jawabannya tidak yakin, tahan dulu atau persempit sasarannya. Satu notifikasi yang berguna membangun kepercayaan; sepuluh yang tidak berguna menghapusnya.",
  },
  { type: "h2", text: "Retensi tidak hanya soal notifikasi" },
  {
    type: "p",
    text: "Notifikasi hanyalah satu dari beberapa tuas retensi. Tuas lain sering kali lebih berpengaruh dalam jangka panjang. Pertama, kecepatan dan keandalan aplikasi: aplikasi yang lambat atau sering gagal membuat pengguna enggan kembali, seberapa pun menariknya pesan yang mengajak mereka. Kedua, kemudahan menyelesaikan tugas utama; setiap langkah tambahan pada alur pemesanan atau pembayaran mengurangi peluang selesai.",
  },
  {
    type: "p",
    text: "Ketiga, nilai yang menumpuk seiring pemakaian. Riwayat pesanan, alamat tersimpan, daftar favorit, dan poin loyalitas membuat aplikasi makin berguna semakin lama dipakai, dan membuat berpindah ke alternatif terasa merugikan. Keempat, rasa dikenali: sapaan yang tepat, rekomendasi yang masuk akal, dan pelayanan cepat saat pengguna menghubungi bantuan membuat pengalaman terasa personal, bukan massal.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1512314889357-e157c22f938d",
    alt: "Catatan tempel kuning bergambar bola lampu di papan gabus",
    caption: "Retensi dirancang sejak ide pertama: alur singkat, manfaat jelas, dan alasan nyata untuk kembali.",
  },
  { type: "h2", text: "Pesan di dalam aplikasi sebagai pelengkap" },
  {
    type: "p",
    text: "Selain notifikasi push yang muncul di layar kunci, aplikasi bisa menampilkan pesan di dalam aplikasi: spanduk, kartu informasi, atau kotak masuk kecil yang dibaca ketika pengguna sudah membuka aplikasi. Pesan jenis ini tidak memerlukan izin khusus dan tidak menginterupsi, sehingga cocok untuk informasi yang tidak mendesak, seperti fitur baru, tips penggunaan, atau penawaran musiman.",
  },
  {
    type: "p",
    text: "Pembagian tugasnya sederhana: gunakan notifikasi push untuk hal yang sensitif waktu dan bernilai tinggi, dan gunakan pesan di dalam aplikasi untuk hal lain. Dengan begitu Anda menjaga saluran push tetap berharga dan tidak menguras kesabaran pengguna.",
  },
  { type: "h2", text: "Hal teknis yang perlu disiapkan" },
  {
    type: "p",
    text: "Dari sisi teknis, notifikasi push membutuhkan beberapa komponen. Aplikasi perlu mendaftarkan perangkat ke layanan notifikasi milik platform, server Anda perlu menyimpan token perangkat itu dan menghubungkannya dengan akun pengguna, dan ada logika yang menentukan kapan serta kepada siapa notifikasi dikirim. Karena token bisa berubah atau kedaluwarsa, sistem perlu menangani pembaruan dan pembersihan token yang tidak berlaku lagi.",
  },
  {
    type: "ul",
    items: [
      "Penyimpanan token perangkat yang terhubung dengan akun, lengkap dengan penanganan token kedaluwarsa",
      "Pengaturan preferensi per pengguna untuk kategori notifikasi dan jam tenang",
      "Antrean pengiriman agar lonjakan kampanye tidak membebani server",
      "Pencatatan setiap notifikasi yang dikirim, dibuka, dan menghasilkan tindakan",
      "Pengaturan batas frekuensi yang dapat diubah tanpa merilis ulang aplikasi",
      "Pengujian di berbagai versi sistem operasi, karena perilaku notifikasi bisa berbeda antarperangkat",
    ],
  },
  {
    type: "p",
    text: "Perlu diingat pula bahwa pengiriman notifikasi melibatkan data pribadi pengguna. Pastikan isi notifikasi tidak menampilkan informasi sensitif di layar kunci, dan kelola data token serta preferensi dengan prinsip yang sama seperti data pelanggan lainnya. Untuk panduan keamanan dasar, lihat pembahasan kami tentang keamanan aplikasi bisnis.",
  },
  { type: "h2", text: "Mengukur apakah strategi retensi Anda berhasil" },
  {
    type: "p",
    text: "Banyak tim berhenti pada ukuran yang mudah dilihat, seperti berapa banyak notifikasi terkirim atau dibuka. Angka itu berguna tetapi tidak cukup. Notifikasi yang sering dibuka belum tentu membuat pengguna melakukan sesuatu yang bernilai, dan bisa saja justru memancing pembukaan karena rasa penasaran lalu kecewa. Ukuran yang lebih bermakna adalah perubahan perilaku: apakah pengguna menyelesaikan pembelian, memesan ulang, atau kembali aktif setelah beberapa waktu menghilang.",
  },
  {
    type: "p",
    text: "Pantau juga sinyal negatif. Berapa banyak pengguna yang mematikan izin notifikasi setelah kampanye tertentu? Berapa yang menghapus aplikasi? Sinyal ini sering lebih jujur daripada angka pembukaan. Bandingkan kelompok yang menerima notifikasi dengan kelompok serupa yang tidak menerima, bila memungkinkan, agar Anda bisa melihat pengaruh sebenarnya, bukan sekadar kebetulan musiman.",
  },
  {
    type: "ol",
    items: [
      "Tentukan satu tujuan perilaku yang jelas untuk setiap jenis notifikasi, misalnya menyelesaikan pembayaran atau memesan ulang",
      "Catat siapa yang menerima, kapan, dan apa tindakan setelahnya",
      "Bandingkan dengan kelompok pembanding sebelum menyimpulkan bahwa notifikasi berhasil",
      "Pantau pencabutan izin dan penghapusan aplikasi sebagai tanda kejenuhan",
      "Tinjau hasilnya secara berkala dan sesuaikan segmentasi, waktu, serta frekuensi",
    ],
  },
  { type: "h2", text: "Kesalahan umum yang sebaiknya dihindari" },
  {
    type: "p",
    text: "Kesalahan pertama adalah memperlakukan notifikasi sebagai papan pengumuman bisnis, bukan layanan bagi pengguna. Kesalahan kedua adalah mengirim pesan yang sama kepada seluruh basis pengguna karena itu cara termudah. Kesalahan ketiga adalah tidak memberi jalan bagi pengguna untuk mengatur preferensi, sehingga satu-satunya pilihan mereka adalah mematikan semuanya, termasuk notifikasi transaksional yang sebenarnya penting.",
  },
  {
    type: "p",
    text: "Kesalahan keempat adalah mengabaikan konteks. Notifikasi yang menawarkan diskon untuk barang yang baru saja dibeli pengguna kemarin menunjukkan bahwa sistem tidak benar-benar mengenal mereka. Kesalahan kelima adalah tidak menguji; setiap dugaan tentang waktu terbaik atau kalimat terbaik sebaiknya diuji dengan data, bukan hanya perasaan tim.",
  },
  { type: "h2", text: "Memulai dengan langkah kecil" },
  {
    type: "p",
    text: "Anda tidak perlu membangun mesin kampanye yang rumit sejak hari pertama. Mulailah dari notifikasi transaksional yang jelas manfaatnya, seperti status pesanan dan konfirmasi pembayaran. Tambahkan satu atau dua pengingat yang terbukti membantu, misalnya keranjang yang belum selesai atau jadwal yang akan datang. Setelah dasar itu stabil dan datanya mulai terkumpul, barulah pertimbangkan segmentasi dan notifikasi promosi yang lebih personal.",
  },
  {
    type: "p",
    text: "Pendekatan bertahap ini juga memudahkan pembelajaran. Anda bisa melihat bagaimana pengguna bereaksi pada setiap lapisan sebelum menambah lapisan berikutnya, dan menghindari risiko membanjiri pengguna ketika Anda belum paham apa yang mereka hargai.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Notifikasi push yang baik terasa seperti pelayanan, bukan iklan. Ia hadir saat dibutuhkan, berisi hal yang berguna, dan menghormati kendali pengguna. Namun notifikasi hanya bekerja di atas fondasi yang kuat: aplikasi yang cepat, alur yang sederhana, dan nilai nyata yang membuat pengguna ingin kembali. Rancang retensi sejak awal, ukur dengan jujur, dan perlakukan perhatian pelanggan sebagai sesuatu yang harus dijaga, bukan dihabiskan.",
  },
  {
    type: "cta",
    title: "Ingin aplikasi mobile yang benar-benar dipakai pelanggan?",
    text: "Tim AG·SORA membantu merancang aplikasi mobile lengkap dengan notifikasi, loyalitas, dan integrasi ke sistem bisnis Anda. Konsultasinya gratis, tanpa komitmen.",
    href: "/services/mobile",
    label: "Konsultasi Gratis",
  },
];
