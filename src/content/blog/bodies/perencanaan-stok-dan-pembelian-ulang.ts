import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Bagi bisnis yang menjual barang, stok adalah uang yang sedang tidur di rak dan gudang. Terlalu sedikit, pelanggan kecewa dan penjualan hilang. Terlalu banyak, modal tertahan, barang menua, rusak, atau kedaluwarsa, dan ruang penyimpanan penuh oleh hal yang tidak laku. Menjaga keseimbangan di antara dua sisi itu adalah salah satu pekerjaan yang paling menentukan kesehatan arus kas sebuah usaha.",
  },
  {
    type: "p",
    text: "Pada banyak bisnis kecil dan menengah, keputusan kapan dan berapa banyak memesan ulang masih bergantung pada ingatan dan insting pemilik atau kepala gudang. Cara itu bisa berhasil selama jumlah barang sedikit dan satu orang menguasai semuanya. Ketika jumlah produk bertambah, cabang bertambah, atau orang yang paham harus cuti, pendekatan berbasis ingatan mulai retak, dan kesalahan menjadi mahal.",
  },
  {
    type: "p",
    text: "Artikel ini membahas cara menyusun perencanaan stok dan pembelian ulang yang lebih terstruktur, dari konsep dasar seperti stok pengaman dan titik pemesanan ulang, hingga bagaimana sistem ERP atau inventori membantu menjalankannya. Kami tidak memakai angka rekaan atau rumus ajaib; yang kami berikan adalah kerangka berpikir yang bisa Anda sesuaikan dengan karakter bisnis Anda sendiri.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Tujuan perencanaan stok adalah menjaga ketersediaan barang yang dibutuhkan pelanggan dengan modal yang tertanam sekecil mungkin",
      "Konsep inti: rata-rata penjualan, waktu tunggu pemasok, stok pengaman, dan titik pemesanan ulang",
      "Tidak semua barang perlu diperlakukan sama; pengelompokan berdasarkan nilai dan perputaran membuat perhatian lebih tepat sasaran",
      "Kualitas data stok yang akurat adalah prasyarat; perencanaan tidak lebih baik daripada data yang mendasarinya",
      "Sistem membantu mengingatkan dan menghitung, tetapi penilaian manusia atas musim, promo, dan kondisi pasar tetap diperlukan",
    ],
  },
  { type: "h2", text: "Dua kesalahan yang saling berlawanan" },
  {
    type: "p",
    text: "Stok yang kurang dan stok yang berlebih sering dianggap dua masalah berbeda yang ditangani dengan cara berbeda, padahal keduanya lahir dari akar yang sama: tidak adanya gambaran yang jelas tentang berapa cepat barang keluar dan berapa lama barang baru tiba. Tanpa gambaran itu, pemesanan cenderung reaktif. Orang memesan saat rak terlihat kosong, dan karena panik, memesan terlalu banyak untuk berjaga-jaga.",
  },
  {
    type: "p",
    text: "Akibatnya muncul pola yang familier. Barang laris sering kosong tepat ketika permintaan tinggi, sementara barang yang lambat justru menumpuk karena pernah dipesan dalam jumlah besar. Modal terikat di tempat yang salah, dan arus kas menjadi ketat meski penjualan tampak baik. Perencanaan yang baik berusaha memutus pola ini dengan mengganti reaksi panik menjadi aturan yang jelas.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1584568694489-f71bdbac55e2",
    alt: "Rak toko kelontong yang kosong",
    caption: "Catatan manual yang menumpuk membuat data stok sulit dipercaya; sistem yang terhubung menggantikannya.",
  },
  { type: "h2", text: "Konsep dasar yang perlu dipahami" },
  { type: "h3", text: "Rata-rata penjualan" },
  {
    type: "p",
    text: "Dasar semua perencanaan adalah pengetahuan tentang seberapa cepat suatu barang terjual. Hitung rata-rata penjualan per hari atau per minggu dari data riwayat transaksi, dan perhatikan bahwa rata-rata ini dapat berubah menurut musim, hari gajian, hari libur, atau promosi. Barang yang tampak lambat di bulan biasa bisa melonjak menjelang hari raya, dan sebaliknya.",
  },
  { type: "h3", text: "Waktu tunggu pemasok" },
  {
    type: "p",
    text: "Waktu tunggu adalah jarak antara Anda memesan dan barang benar-benar siap dijual. Perhitungkan seluruh rantainya: waktu pemasok menyiapkan, pengiriman, pemeriksaan penerimaan, dan pencatatan ke sistem. Pemasok yang kadang terlambat membuat waktu tunggu efektif lebih panjang daripada yang dijanjikan, dan perencanaan sebaiknya berpijak pada kenyataan, bukan janji.",
  },
  { type: "h3", text: "Stok pengaman" },
  {
    type: "p",
    text: "Stok pengaman adalah cadangan untuk menutup ketidakpastian: penjualan yang tiba-tiba melonjak atau pengiriman yang terlambat. Semakin tidak pasti permintaan dan pasokan suatu barang, semakin besar cadangan yang masuk akal. Namun semakin besar cadangan, semakin besar pula modal yang tertahan, sehingga ukurannya adalah keputusan bisnis yang menyeimbangkan risiko kehabisan dengan biaya menyimpan.",
  },
  { type: "h3", text: "Titik pemesanan ulang" },
  {
    type: "p",
    text: "Titik pemesanan ulang adalah tingkat stok ketika Anda sebaiknya memesan lagi. Secara sederhana, ia mencakup penjualan yang diperkirakan selama waktu tunggu ditambah stok pengaman. Ketika stok menyentuh titik itu, sistem atau petugas memicu pemesanan. Dengan begitu keputusan tidak lagi bergantung pada kapan seseorang kebetulan melihat rak yang kosong.",
  },
  {
    type: "callout",
    title: "Contoh penalaran sederhana",
    text: "Jika sebuah barang rata-rata terjual dalam jumlah tertentu per hari dan pemasok membutuhkan beberapa hari untuk mengirim, maka stok harus cukup menutup penjualan selama beberapa hari itu, ditambah cadangan kalau-kalau pengiriman terlambat. Angka pastinya berbeda untuk setiap bisnis dan setiap barang, jadi tetapkan dari data Anda sendiri dan tinjau secara berkala.",
  },
  { type: "h2", text: "Tidak semua barang layak diperlakukan sama" },
  {
    type: "p",
    text: "Perhatian dan waktu tim terbatas, sehingga perencanaan paling efisien bila difokuskan pada barang yang paling berpengaruh. Pendekatan umum adalah mengelompokkan barang berdasarkan kontribusinya, sering disebut analisis ABC. Sejumlah kecil barang biasanya menyumbang sebagian besar nilai penjualan atau modal yang tertanam, dan kelompok inilah yang pantas dipantau ketat dengan aturan pemesanan yang cermat.",
  },
  {
    type: "p",
    text: "Kelompok menengah dipantau secara wajar dengan aturan yang lebih sederhana, sedangkan kelompok dengan nilai kecil dan perputaran lambat bisa diatur dengan aturan longgar, misalnya pemesanan berkala dalam jumlah tetap. Pengelompokan kedua yang berguna adalah menurut kestabilan permintaan: barang yang terjual stabil mudah diramalkan, sedangkan barang musiman atau sporadis memerlukan perlakuan khusus dan pertimbangan manusia.",
  },
  {
    type: "ul",
    items: [
      "Barang bernilai besar dan cepat berputar: pantau ketat, tetapkan titik pemesanan ulang yang cermat, tinjau sering",
      "Barang menengah: aturan standar dengan tinjauan berkala",
      "Barang bernilai kecil atau lambat: aturan sederhana dan pemesanan berkala",
      "Barang musiman: rencanakan lebih awal berdasarkan pola tahun sebelumnya dan rencana promosi",
      "Barang mudah kedaluwarsa atau cepat usang: batasi jumlah dan utamakan perputaran cepat",
    ],
  },
  { type: "h2", text: "Fondasinya: data stok yang akurat" },
  {
    type: "p",
    text: "Seluruh perencanaan di atas bergantung pada satu hal: angka stok di sistem harus sesuai dengan kenyataan di gudang. Jika catatan mengatakan stok ada padahal rak kosong, atau sebaliknya, aturan secanggih apa pun akan memberi keputusan yang salah. Karena itu, kualitas data harus dijaga lewat disiplin proses, bukan hanya lewat perangkat lunak.",
  },
  {
    type: "p",
    text: "Praktik yang membantu antara lain mencatat setiap penerimaan dan pengeluaran barang pada saat kejadian, memakai kode barang yang konsisten, dan menjadwalkan penghitungan fisik secara berkala. Penghitungan dapat dilakukan bergilir per kelompok barang tanpa menghentikan operasional; lihat pembahasan kami tentang stock opname tanpa menghentikan operasional. Selisih yang ditemukan perlu ditelusuri penyebabnya, apakah salah catat, kerusakan, kehilangan, atau kesalahan pengiriman, bukan hanya disesuaikan angkanya.",
  },
  { type: "h2", text: "Merencanakan pembelian ulang dalam praktik" },
  {
    type: "p",
    text: "Dengan konsep dan data yang siap, alur pembelian ulang dapat disusun menjadi rutinitas yang jelas. Rutinitas yang baik memisahkan tiga langkah: mengenali kebutuhan, menyusun dan menyetujui pesanan, lalu menerima dan mencatat barang. Pemisahan ini mengurangi kesalahan dan membuat setiap langkah dapat ditelusuri.",
  },
  {
    type: "ol",
    items: [
      "Tinjau barang yang stoknya mencapai atau mendekati titik pemesanan ulang, baik lewat daftar peringatan dari sistem maupun laporan harian",
      "Periksa konteks: apakah ada promo, musim, atau pesanan besar yang belum tercatat dan memengaruhi kebutuhan",
      "Tentukan jumlah pesanan dengan mempertimbangkan kelipatan minimum pemasok, ruang simpan, dan kemampuan modal",
      "Buat pesanan pembelian dan jalankan persetujuan sesuai batas nilai yang berlaku",
      "Kirim ke pemasok dan catat tanggal perkiraan tiba untuk memantau keterlambatan",
      "Saat barang tiba, periksa terhadap pesanan, catat penerimaan, dan perbarui stok pada hari yang sama",
      "Cocokkan tagihan pemasok dengan pesanan dan penerimaan sebelum membayar",
    ],
  },
  {
    type: "p",
    text: "Untuk bisnis dengan banyak pemasok, pertimbangkan menggabungkan pesanan ke pemasok yang sama agar memenuhi minimum pengiriman dan menghemat ongkos kirim. Bagi bisnis multi-cabang, tentukan apakah pembelian dilakukan terpusat atau per cabang, dan apakah transfer antarcabang boleh dipakai untuk menyeimbangkan stok sebelum memesan dari pemasok. Alur persetujuan pembelian yang jelas, seperti dibahas dalam artikel tentang alur approval pembelian, menjaga kendali tanpa memperlambat pekerjaan.",
  },
  { type: "h2", text: "Peran sistem ERP dan inventori" },
  {
    type: "p",
    text: "Semua yang dibahas bisa dijalankan dengan lembar kerja bila skala bisnis masih kecil. Namun ketika jumlah barang dan transaksi bertambah, pekerjaan manual menjadi lambat dan rawan salah. Sistem inventori atau modul inventori dalam ERP mengambil alih bagian yang berulang dan memberi visibilitas yang sulit dicapai secara manual.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec",
    alt: "Pelabuhan kontainer dengan derek besar dan kapal bermuatan kontainer",
    caption: "Semakin besar skala pergerakan barang dan semakin banyak cabang, semakin penting data stok yang terhubung dan terbarui otomatis.",
  },
  {
    type: "ul",
    items: [
      "Stok terbarui otomatis dari penjualan kasir, penerimaan barang, retur, dan transfer antarcabang",
      "Peringatan saat stok mencapai titik pemesanan ulang, lengkap dengan saran jumlah berdasarkan riwayat penjualan",
      "Pembuatan pesanan pembelian dari saran tersebut dengan alur persetujuan bertingkat",
      "Pencocokan otomatis antara pesanan, penerimaan barang, dan tagihan pemasok",
      "Laporan perputaran, barang lambat, barang kosong berulang, dan nilai persediaan",
      "Dukungan batch dan tanggal kedaluwarsa untuk barang yang mudah rusak",
      "Pandangan terpadu stok di seluruh cabang dan kanal penjualan, termasuk toko online",
    ],
  },
  {
    type: "p",
    text: "Ketika stok toko fisik dan toko online berbagi satu sumber data, risiko menjual barang yang sebenarnya sudah habis menurun drastis. Hal ini dibahas lebih jauh dalam artikel kami tentang menyatukan stok toko fisik dan marketplace. Ingatlah bahwa sistem hanya memberi saran berdasarkan pola masa lalu; keputusan akhir tetap harus mempertimbangkan hal-hal yang belum tercermin di data, seperti rencana promosi besar atau perubahan harga dari pemasok.",
  },
  { type: "h2", text: "Hubungan dengan arus kas" },
  {
    type: "p",
    text: "Perencanaan stok adalah perencanaan keuangan yang menyamar. Setiap keputusan memesan adalah keputusan mengeluarkan kas hari ini untuk barang yang baru menghasilkan uang nanti. Karena itu, tinjau rencana pembelian bersama gambaran arus kas ke depan: kapan tagihan pemasok jatuh tempo, berapa lama barang biasanya terjual, dan kapan piutang pelanggan dibayar. Pembahasan lebih jauh tersedia dalam artikel tentang ERP dan visibilitas arus kas.",
  },
  {
    type: "p",
    text: "Syarat pembayaran dengan pemasok juga berpengaruh. Tempo pembayaran yang lebih panjang memberi napas bagi arus kas, tetapi perhatikan apakah ada konsekuensi harga. Negosiasi yang masuk akal sering lebih bermanfaat daripada sekadar mencari harga satuan terendah, karena yang menentukan adalah biaya total dan dampaknya pada modal kerja.",
  },
  { type: "h2", text: "Kesalahan umum dalam perencanaan stok" },
  {
    type: "p",
    text: "Kesalahan pertama adalah mempercayai angka sistem tanpa memeriksa kenyataan fisik secara berkala. Kesalahan kedua adalah memakai satu aturan untuk semua barang sehingga barang penting kurang diperhatikan dan barang remeh menghabiskan waktu. Kesalahan ketiga adalah mengabaikan waktu tunggu nyata pemasok dan hanya memakai angka yang dijanjikan.",
  },
  {
    type: "p",
    text: "Kesalahan keempat adalah tidak memasukkan rencana promosi dan musim ke dalam perhitungan sehingga sistem terkejut saat permintaan melonjak. Kesalahan kelima adalah membiarkan barang lambat menumpuk tanpa rencana keluar, misalnya diskon terarah atau paket penjualan. Barang yang tidak bergerak lama bukan hanya mengikat modal, tetapi juga menutup ruang untuk barang yang lebih menguntungkan.",
  },
  { type: "h2", text: "Memulai dari yang sederhana" },
  {
    type: "p",
    text: "Anda tidak perlu menunggu sistem sempurna untuk memperbaiki perencanaan stok. Mulailah dengan memilih sejumlah kecil barang terpenting, hitung rata-rata penjualannya, catat waktu tunggu nyata pemasoknya, dan tetapkan titik pemesanan ulang awal. Jalankan selama beberapa siklus, bandingkan hasilnya dengan kenyataan, lalu perbaiki angkanya. Pelajaran dari kelompok kecil ini dapat diperluas ke seluruh katalog.",
  },
  {
    type: "p",
    text: "Bersamaan dengan itu, rapikan disiplin pencatatan dan jadwalkan penghitungan fisik berkala. Ketika proses manual sudah jelas dan mulai terasa berat, itulah saat yang tepat untuk mempertimbangkan sistem yang mengotomatisasi, karena Anda sudah tahu persis apa yang ingin diotomatisasi.",
  },
  {
    "type": "h2",
    "text": "Ilustrasi: dua cabang dengan cara kerja berbeda"
  },
  {
    "type": "p",
    "text": "Sebagai ilustrasi hipotetis, bayangkan sebuah toko perlengkapan rumah tangga dengan dua cabang. Cabang pertama dikelola seorang kepala toko berpengalaman yang memesan berdasarkan firasat. Cabang kedua baru dibuka, dikelola staf yang belum hafal pola penjualan. Tanpa aturan bersama, cabang pertama jarang kehabisan barang tetapi gudangnya penuh barang lambat, sedangkan cabang kedua sering kosong pada barang laris dan menumpuk pada barang yang salah dipesan."
  },
  {
    "type": "p",
    "text": "Dengan data penjualan yang terpusat, pemilik dapat melihat bahwa beberapa barang laris di cabang pertama tetapi lambat di cabang kedua, dan sebaliknya. Stok berlebih di satu cabang bisa dipindahkan ke cabang lain sebelum memesan lagi dari pemasok. Titik pemesanan ulang ditetapkan per cabang berdasarkan kecepatan jual masing-masing, dan permintaan pembelian ditinjau terpusat untuk digabungkan ke pemasok yang sama."
  },
  {
    "type": "p",
    "text": "Hasil yang diharapkan bukanlah angka ajaib, melainkan perubahan cara kerja: keputusan memesan tidak lagi bergantung pada firasat satu orang, pengetahuan tentang pola penjualan tersimpan di sistem sehingga staf baru cepat belajar, dan pemilik dapat melihat kondisi kedua cabang dalam satu laporan. Ilustrasi ini sengaja sederhana agar mudah dibayangkan; situasi bisnis Anda tentu punya detail tersendiri yang perlu dipertimbangkan."
  },
  {
    "type": "p",
    "text": "Pelajaran utamanya: aturan yang jelas dan data yang dibagi bersama membuat kualitas keputusan tidak lagi bergantung pada siapa yang kebetulan bertugas. Itulah nilai terbesar perencanaan stok yang terstruktur, jauh melampaui sekadar efisiensi angka."
  },
  {
    "type": "h2",
    "text": "Menjaga kebiasaan tinjauan rutin"
  },
  {
    "type": "p",
    "text": "Perencanaan stok bukan proyek sekali jadi. Pola penjualan berubah, pemasok berganti, harga bergerak, dan produk baru masuk. Aturan yang tepat enam bulan lalu bisa tidak lagi cocok hari ini. Jadwalkan tinjauan rutin, misalnya bulanan, untuk memeriksa apakah titik pemesanan ulang dan stok pengaman masih masuk akal, barang mana yang mulai melambat, dan pemasok mana yang waktu tunggunya memburuk. Libatkan orang yang paling dekat dengan lapangan, karena mereka sering mengetahui perubahan sebelum data menunjukkannya."
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Perencanaan stok yang baik membuat bisnis tenang: pelanggan jarang kecewa karena barang kosong, gudang tidak sesak oleh barang yang tidak laku, dan kas tidak tertahan di tempat yang salah. Kuncinya bukan rumus rumit, melainkan data yang akurat, aturan yang jelas, perhatian yang difokuskan pada barang terpenting, dan kebiasaan meninjau hasilnya. Sistem yang tepat memperkuat semua itu, tetapi dasar-dasarnya dapat Anda mulai hari ini.",
  },
  {
    type: "cta",
    title: "Ingin stok dan pembelian lebih terkendali?",
    text: "Tim AG·SORA membantu merancang sistem ERP dan inventori yang mengingatkan kapan memesan, mencatat penerimaan, dan menyatukan stok semua cabang. Konsultasinya gratis, tanpa komitmen.",
    href: "/services/erp",
    label: "Konsultasi Gratis",
  },
];
