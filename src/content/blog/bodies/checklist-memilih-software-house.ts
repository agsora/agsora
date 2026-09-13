import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Portofolionya meyakinkan. Presentasinya rapi. Harganya masuk akal. Tiga bulan kemudian, pesan Anda dibalas dua hari sekali, jadwal terus bergeser, dan setiap permintaan kecil dijawab dengan “itu di luar ruang lingkup”. Anda mulai bertanya-tanya: di mana tanda-tandanya seharusnya sudah terlihat sejak awal?",
  },
  {
    type: "p",
    text: "Memilih software house adalah keputusan yang dampaknya terasa bertahun-tahun. Sistem yang mereka bangun akan menopang operasional Anda, dan hubungan dengan mereka sering berlanjut jauh setelah project selesai: pemeliharaan, pengembangan lanjutan, dan perbaikan saat ada masalah. Sayangnya, banyak keputusan ini diambil berdasarkan hal yang paling mudah dinilai — harga dan presentasi — bukan hal yang paling menentukan.",
  },
  {
    type: "p",
    text: "Artikel ini adalah checklist praktis untuk menilai calon mitra pengembangan software. Gunakan sebagai panduan dalam pertemuan pertama, saat membaca proposal, dan sebelum menandatangani kontrak.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Nilai cara vendor memahami masalah Anda, bukan hanya cara mereka menjual solusi",
      "Pastikan ruang lingkup, kepemilikan source code, dan dukungan setelah rilis tertulis jelas",
      "Portofolio penting, tetapi relevansi dan transparansi proses sama pentingnya",
      "Vendor yang jujur soal batasan biasanya lebih bisa dipercaya",
      "Perhatikan komunikasi sejak pertemuan pertama — itu cerminan project nanti",
    ],
  },
  { type: "h2", text: "Kenapa keputusan ini lebih besar dari kelihatannya" },
  {
    type: "p",
    text: "Berbeda dengan membeli barang, memilih software house berarti memilih rekan kerja untuk menyelesaikan masalah yang belum sepenuhnya jelas di awal. Kebutuhan akan berubah, asumsi akan diuji, dan akan ada saat-saat ketika sesuatu tidak berjalan sesuai rencana. Pada saat itulah kualitas mitra benar-benar terlihat: apakah mereka mencari solusi bersama, atau mencari pasal di kontrak untuk melindungi diri.",
  },
  {
    type: "p",
    text: "Karena itu, yang perlu dinilai bukan hanya kemampuan teknis, tetapi juga cara mereka berpikir, berkomunikasi, dan menangani ketidakpastian. Hal-hal ini sulit terlihat dari portofolio, tetapi cukup mudah dikenali jika Anda tahu apa yang harus diperhatikan.",
  },
  { type: "h2", text: "1. Cara mereka menanggapi kebutuhan Anda" },
  {
    type: "p",
    text: "Perhatikan apakah pertanyaan vendor menggali proses bisnis Anda, atau langsung menawarkan solusi. Vendor yang langsung memberi angka tanpa memahami alur kerja biasanya akan menemukan banyak kejutan di tengah pengerjaan — dan kejutan itu hampir selalu berujung pada biaya tambahan atau jadwal yang molor.",
  },
  {
    type: "p",
    text: "Vendor yang baik akan mengajukan pertanyaan yang kadang terasa merepotkan. Justru pertanyaan-pertanyaan itulah yang menunjukkan mereka sedang memikirkan risiko yang belum Anda sadari.",
  },
  {
    type: "ul",
    items: [
      "Masalah apa yang paling mahal bagi bisnis Anda saat ini?",
      "Siapa yang akan memakai sistem setiap hari, dan bagaimana mereka bekerja sekarang?",
      "Kasus tidak normal apa yang sering terjadi?",
      "Sistem apa yang sudah dipakai dan perlu terhubung?",
      "Bagaimana Anda akan menilai bahwa project ini berhasil?",
    ],
  },
  { type: "h2", text: "2. Pemahaman bisnis, bukan hanya teknologi" },
  {
    type: "p",
    text: "Kemampuan menulis kode adalah syarat dasar. Yang membedakan mitra yang baik adalah kemampuan menerjemahkan masalah bisnis menjadi sistem yang tepat. Perhatikan apakah mereka bisa menjelaskan rekomendasi dalam bahasa bisnis — dampaknya pada waktu kerja, biaya, dan risiko — bukan hanya dalam istilah teknis yang sulit dipahami.",
  },
  { type: "h2", text: "3. Kejelasan ruang lingkup" },
  {
    type: "p",
    text: "Ruang lingkup yang kabur adalah sumber perselisihan paling umum dalam project software. Proposal yang baik menjelaskan apa yang dikerjakan, apa yang tidak dikerjakan, dan asumsi apa yang dipakai.",
  },
  {
    type: "ul",
    items: [
      "Apakah yang termasuk dan tidak termasuk dinyatakan tertulis?",
      "Bagaimana perubahan kebutuhan di tengah jalan dihitung?",
      "Apa definisi “selesai” untuk setiap tahap?",
      "Siapa yang bertanggung jawab menyiapkan data dan konten?",
      "Apakah migrasi data, integrasi, dan pelatihan termasuk?",
    ],
  },
  { type: "h2", text: "4. Proses kerja yang transparan" },
  {
    type: "p",
    text: "Tanyakan bagaimana mereka bekerja dari awal hingga akhir. Apakah ada tahap pemetaan kebutuhan sebelum pengembangan? Apakah Anda bisa melihat dan mencoba hasil secara bertahap, atau baru melihat sistem di akhir project? Proses yang memberi Anda kesempatan mencoba hasil sejak awal jauh lebih aman, karena kesalahan pemahaman bisa ditemukan ketika perbaikannya masih murah.",
  },
  { type: "h2", text: "5. Kepemilikan source code" },
  {
    type: "p",
    text: "Tanyakan sejak awal dan minta dinyatakan tertulis. Ini bukan pertanyaan yang tidak sopan — vendor yang baik justru menghargainya karena mencegah salah paham di kemudian hari. Pahami juga apakah ada komponen milik vendor yang hanya dilisensikan, dan apa artinya bagi Anda jika kerja sama berakhir.",
  },
  {
    type: "callout",
    title: "Jangan berasumsi",
    text: "Source code tidak otomatis menjadi milik pemesan hanya karena project dibayar. Semuanya bergantung pada kesepakatan tertulis. Pastikan ketentuan ini jelas sebelum kontrak ditandatangani, bukan saat Anda ingin berganti vendor.",
  },
  { type: "h2", text: "6. Siapa yang benar-benar mengerjakan" },
  {
    type: "p",
    text: "Orang yang hadir saat presentasi belum tentu orang yang mengerjakan project. Tanyakan siapa yang akan menjadi penanggung jawab project, siapa yang bisa Anda hubungi sehari-hari, dan apakah sebagian pekerjaan akan dialihkan ke pihak lain. Jawaban yang jelas membantu Anda menilai kontinuitas dan akuntabilitas.",
  },
  { type: "h2", text: "7. Dokumentasi dan serah terima" },
  {
    type: "p",
    text: "Tanyakan dokumentasi apa yang akan Anda terima dan apakah ada pelatihan untuk tim. Sistem yang hanya bisa dipahami oleh pembuatnya menempatkan Anda pada posisi bergantung, sebagus apa pun sistem itu. Dokumentasi teknis yang memadai memungkinkan sistem dirawat oleh pihak lain jika suatu hari diperlukan.",
  },
  { type: "h2", text: "8. Dukungan setelah rilis" },
  {
    type: "p",
    text: "Peluncuran bukan akhir project, melainkan awal masa paling kritis. Bug yang tidak terdeteksi saat pengujian akan muncul ketika sistem dipakai sungguhan. Pastikan jelas bagaimana dukungan diberikan.",
  },
  {
    type: "ul",
    items: [
      "Berapa lama masa perbaikan bug setelah rilis?",
      "Apa yang termasuk perbaikan, dan apa yang dianggap pengembangan baru?",
      "Seberapa cepat respons saat terjadi gangguan serius?",
      "Berapa biaya pemeliharaan bulanan setelah masa perbaikan berakhir?",
    ],
  },
  { type: "h2", text: "9. Komunikasi selama pengerjaan" },
  {
    type: "p",
    text: "Sepakati sejak awal seberapa sering ada pembaruan progres, dalam bentuk apa, dan lewat kanal apa. Project yang bermasalah hampir selalu didahului oleh periode hening yang panjang. Perhatikan juga kecepatan dan kejelasan komunikasi mereka selama proses penawaran — itu biasanya cerminan yang cukup akurat dari komunikasi selama project.",
  },
  { type: "h2", text: "10. Kejujuran soal batasan" },
  {
    type: "p",
    text: "Salah satu tanda paling menenangkan justru terdengar seperti penolakan: vendor yang mengatakan bahwa sebuah kebutuhan berada di luar keahlian mereka, atau bahwa anggaran Anda tidak realistis untuk ruang lingkup yang diminta. Kejujuran seperti ini merugikan mereka dalam jangka pendek, dan karena itu menunjukkan sesuatu yang sulit dinilai dari portofolio.",
  },
  { type: "h2", text: "Menilai portofolio dengan benar" },
  {
    type: "p",
    text: "Portofolio membantu, tetapi mudah disalahartikan. Tampilan yang bagus tidak menjamin sistem yang andal, dan jumlah project yang banyak tidak menjamin relevansi dengan kebutuhan Anda. Yang lebih penting adalah apakah mereka bisa menjelaskan masalah yang diselesaikan, pendekatan yang dipilih, dan hasilnya.",
  },
  {
    type: "ul",
    items: [
      "Apakah ada project dengan kompleksitas serupa dengan kebutuhan Anda?",
      "Bisakah mereka menjelaskan tantangan yang dihadapi dan cara mengatasinya?",
      "Apakah klaim hasil bisa dijelaskan atau diverifikasi?",
      "Untuk vendor yang lebih baru, seberapa transparan proses dan cara berpikir mereka?",
    ],
  },
  { type: "h2", text: "Tanda bahaya yang perlu diwaspadai" },
  {
    type: "ul",
    items: [
      "Memberi harga pasti sebelum memahami kebutuhan",
      "Menjanjikan jadwal yang jauh lebih cepat dari vendor lain tanpa penjelasan",
      "Menghindari pertanyaan tentang source code dan dokumentasi",
      "Tidak mau menuliskan ruang lingkup dengan rinci",
      "Klaim yang terlalu besar tanpa bukti yang bisa diperiksa",
      "Menekan Anda untuk segera menandatangani",
    ],
  },
  { type: "h2", text: "Pertanyaan untuk pertemuan pertama" },
  {
    type: "ol",
    items: [
      "Bagaimana proses kerja Anda dari pemetaan kebutuhan hingga rilis?",
      "Kapan kami bisa mencoba hasil pertama?",
      "Siapa penanggung jawab project dari sisi Anda?",
      "Bagaimana perubahan kebutuhan ditangani dan dihitung?",
      "Bagaimana skema kepemilikan source code?",
      "Dokumentasi dan pelatihan apa yang termasuk?",
      "Seperti apa dukungan setelah rilis dan berapa biayanya?",
      "Apa risiko terbesar yang Anda lihat dari project ini?",
    ],
  },
  {
    type: "p",
    text: "Pertanyaan terakhir sangat berguna. Vendor yang langsung bisa menyebutkan risiko spesifik biasanya sudah benar-benar memikirkan project Anda. Vendor yang menjawab “tidak ada risiko” sedang menjual, bukan merencanakan.",
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Lebih baik memilih vendor besar atau kecil?" },
  {
    type: "p",
    text: "Keduanya punya kelebihan. Vendor besar biasanya memiliki tim yang lebih banyak dan proses yang lebih baku, tetapi project Anda bisa menjadi satu dari sekian banyak project dan ditangani oleh tim yang berganti-ganti. Vendor yang lebih kecil sering lebih fleksibel dan memberi perhatian lebih dekat, tetapi kapasitasnya terbatas. Yang lebih menentukan bukan ukurannya, melainkan apakah kapasitas dan cara kerja mereka sesuai dengan ukuran dan kompleksitas project Anda.",
  },
  { type: "h3", text: "Apakah vendor harus berpengalaman di industri saya?" },
  {
    type: "p",
    text: "Pengalaman di industri yang sama membantu, karena vendor sudah memahami istilah, alur kerja, dan masalah umum. Tetapi itu bukan satu-satunya ukuran. Vendor yang terbiasa memetakan proses bisnis dengan cermat bisa memahami industri baru dengan cukup cepat, selama Anda menyediakan orang yang bisa menjelaskan detail operasional.",
  },
  { type: "h3", text: "Bagaimana menilai vendor yang portofolionya belum banyak?" },
  {
    type: "p",
    text: "Fokus pada hal yang bisa diuji langsung: seberapa dalam pertanyaan mereka tentang bisnis Anda, seberapa jelas proposal dan ruang lingkupnya, seberapa terbuka mereka soal risiko, dan seberapa konkret penjelasan tentang proses kerja. Anda juga bisa memulai dengan tahap kecil yang hasilnya cepat terlihat, sebelum berkomitmen pada project yang lebih besar.",
  },
  { type: "h3", text: "Bolehkah meminta tahap kecil sebagai uji coba kerja sama?" },
  {
    type: "p",
    text: "Sangat boleh, dan sering kali justru langkah paling bijak. Tahap kecil seperti pemetaan kebutuhan, rancangan tampilan, atau satu modul sederhana memberi Anda kesempatan melihat cara vendor bekerja, berkomunikasi, dan memenuhi janji — sebelum berkomitmen pada anggaran yang besar. Vendor yang percaya diri dengan cara kerjanya biasanya terbuka terhadap pendekatan ini, karena hasil tahap pertama menjadi bukti terbaik bagi mereka sendiri.",
  },
  {
    type: "p",
    text: "Pastikan tahap uji coba itu tetap memiliki ruang lingkup, hasil, dan biaya yang jelas. Tahap kecil yang tidak terdefinisi dengan baik tidak akan memberi gambaran yang adil tentang kemampuan vendor, dan justru bisa menjadi sumber salah paham pertama.",
  },
  { type: "h2", text: "Setelah memilih: mulai dengan benar" },
  {
    type: "ol",
    items: [
      "Sepakati ruang lingkup tertulis dan kriteria penerimaan setiap tahap",
      "Tunjuk penanggung jawab dari sisi bisnis yang punya waktu dan wewenang",
      "Tetapkan jadwal komunikasi rutin",
      "Siapkan data dan akses yang dibutuhkan sejak awal",
      "Mulai dari tahap kecil yang hasilnya bisa dicoba",
    ],
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Software house terbaik untuk Anda bukan yang paling murah atau paling terkenal, tetapi yang paling memahami masalah Anda, paling jelas dalam kesepakatan, dan paling jujur ketika ada yang tidak berjalan sesuai rencana. Gunakan checklist ini, ajukan pertanyaan yang tepat, dan dengarkan baik-baik — bukan hanya jawaban mereka, tetapi juga cara mereka menjawab.",
  },
  {
    type: "cta",
    title: "Uji kami dengan checklist ini",
    text: "Ajukan semua pertanyaan di atas kepada tim AG·SORA. Kami akan menjawabnya secara terbuka — termasuk bagian yang mungkin bukan jawaban yang ingin Anda dengar.",
    href: "/contact",
    label: "Jadwalkan Diskusi",
  },
];
