import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Banyak orang menyimpan ide aplikasi selama bertahun-tahun tanpa pernah benar-benar memulainya. Bukan karena idenya buruk, tapi karena jarak antara 'punya ide' dan 'punya aplikasi yang berjalan' terasa seperti lompatan yang terlalu jauh untuk dipahami. Berapa biayanya, berapa lama waktunya, harus mulai dari mana — pertanyaan-pertanyaan ini sering membuat ide yang sebenarnya layak dicoba akhirnya tidak pernah keluar dari catatan pribadi.",
  },
  {
    type: "p",
    text: "Kenyataannya, proses membangun software punya tahapan yang cukup jelas, dan memahami tahapan itu adalah langkah pertama untuk mengubah ide menjadi sesuatu yang nyata. Ini bukan berarti prosesnya mudah atau bebas risiko — tetap ada keputusan sulit dan kemungkinan gagal di setiap tahap. Tapi risiko itu jauh lebih mudah dikelola ketika Anda tahu apa yang akan dihadapi, dibanding melompat langsung tanpa gambaran sama sekali.",
  },
  {
    type: "p",
    text: "Artikel ini menjelaskan tahapan dari ide sampai aplikasi yang benar-benar dipakai pengguna, termasuk keputusan yang biasanya paling sering disepelekan di tiap tahap, dan bagaimana menentukan bentuk kolaborasi yang paling masuk akal untuk memulai.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Ide yang tidak pernah jadi aplikasi biasanya berhenti karena ketidakpastian proses, bukan karena idenya buruk",
      "Menajamkan ide menjadi masalah spesifik jauh lebih penting daripada menentukan fitur di awal",
      "Validasi kebutuhan sebelum menulis kode menghemat waktu dan biaya yang jauh lebih besar di kemudian hari",
      "MVP dengan cakupan terbatas lebih mungkin berhasil dibanding mencoba membangun semua fitur sejak awal",
      "Peluncuran bukan garis akhir — pemeliharaan dan iterasi setelahnya sama pentingnya dengan pengembangan awal",
    ],
  },
  { type: "h2", text: "Kenapa banyak ide tidak pernah jadi aplikasi" },
  {
    type: "p",
    text: "Sebagian besar ide yang tidak pernah terwujud bukan karena kekurangan modal atau keahlian teknis, tapi karena tidak ada langkah pertama yang jelas. Ide yang masih dalam bentuk 'aplikasi untuk menyelesaikan masalah X' terasa terlalu besar untuk dimulai, sehingga orang menunda sampai merasa 'lebih siap' — yang sering kali tidak pernah datang. Memecah ide besar menjadi tahapan konkret adalah cara paling efektif untuk keluar dari kebuntuan ini.",
  },
  { type: "h2", text: "Tahap 1: Menajamkan ide menjadi masalah yang spesifik" },
  {
    type: "p",
    text: "Ide yang bagus biasanya masih dalam bentuk yang terlalu luas: 'aplikasi untuk UMKM mengelola stok' atau 'platform untuk menghubungkan freelancer dan klien'. Langkah pertama yang sebenarnya bukan menentukan fitur, tapi mempersempit siapa penggunanya secara spesifik dan masalah apa yang paling mendesak bagi mereka. Semakin spesifik masalah yang ingin diselesaikan, semakin jelas juga bentuk solusi yang dibutuhkan.",
  },
  {
    type: "p",
    text: "Cara sederhana untuk menguji ketajaman ide adalah mencoba menjelaskannya dalam satu kalimat: 'aplikasi ini membantu [siapa] melakukan [apa] tanpa harus [masalah yang selama ini dihadapi]'. Jika kalimat itu masih terasa kabur atau bisa berlaku untuk terlalu banyak orang sekaligus, ide tersebut biasanya masih perlu dipertajam lebih dulu.",
  },
  { type: "h2", text: "Tahap 2: Validasi kebutuhan sebelum menulis kode" },
  {
    type: "p",
    text: "Tahap yang paling sering dilewati adalah memastikan masalah yang ingin diselesaikan benar-benar dirasakan oleh calon pengguna, bukan hanya oleh Anda sendiri. Validasi tidak harus rumit — bisa dimulai dari mengobrol langsung dengan calon pengguna, mengamati bagaimana mereka menangani masalah itu sekarang, atau membuat prototipe sederhana untuk melihat reaksi nyata sebelum satu baris kode produksi ditulis.",
  },
  {
    type: "callout",
    title: "Tanda validasi yang lemah",
    text: "Jika semua orang yang Anda ajak bicara mengatakan 'ide bagus' tapi tidak ada yang benar-benar ingin mencoba versi awalnya begitu ditawarkan, itu sinyal bahwa masalahnya belum cukup mendesak untuk membuat orang mengubah kebiasaan mereka.",
  },
  { type: "h2", text: "Tahap 3: Menentukan cakupan MVP" },
  {
    type: "p",
    text: "Setelah masalah dan calon pengguna cukup jelas, godaan berikutnya adalah membangun semua fitur yang terpikirkan sejak awal. Pendekatan yang lebih aman adalah menentukan minimum viable product (MVP) — versi paling ramping yang tetap bisa menyelesaikan masalah inti, tanpa fitur tambahan yang belum terbukti dibutuhkan.",
  },
  {
    type: "p",
    text: "Menentukan cakupan MVP berarti membuat pilihan yang tidak selalu nyaman: fitur yang terasa 'penting' tapi tidak inti harus ditunda dulu. Ini wajar. Tujuan MVP bukan membangun aplikasi lengkap dalam versi kecil, tapi membangun cukup untuk mulai belajar dari penggunaan nyata secepat mungkin.",
  },
  { type: "h2", text: "Tahap 4: Desain yang lebih dari sekadar tampilan" },
  {
    type: "p",
    text: "Desain sering disalahpahami sebagai soal warna dan tata letak. Padahal bagian yang lebih penting adalah desain alur — bagaimana pengguna berpindah dari satu langkah ke langkah berikutnya untuk mencapai tujuannya. Alur yang membingungkan tidak bisa diperbaiki hanya dengan mempercantik tampilan; strukturnya sendiri yang perlu dirancang ulang.",
  },
  {
    type: "p",
    text: "Pada tahap ini, wireframe sederhana — sketsa struktur halaman tanpa detail visual — jauh lebih berguna daripada langsung membuat desain final yang indah. Wireframe lebih cepat diubah, dan revisi di tahap ini jauh lebih murah dibanding revisi setelah aplikasi selesai dikembangkan.",
  },
  { type: "h2", text: "Tahap 5: Pengembangan bertahap, bukan sekali jadi" },
  {
    type: "p",
    text: "Pengembangan yang sehat berjalan dalam siklus pendek — membangun bagian kecil, mengujinya, lalu lanjut ke bagian berikutnya — bukan menghilang selama berbulan-bulan lalu muncul dengan aplikasi 'lengkap' yang belum pernah diuji sepanjang jalan. Pendekatan bertahap memungkinkan masalah ditemukan lebih awal, ketika biayanya masih kecil untuk diperbaiki.",
  },
  {
    type: "p",
    text: "Bagi pemilik ide yang bukan latar belakang teknis, tahap ini adalah waktu yang tepat untuk tetap terlibat — meninjau progres secara berkala, mencoba versi yang sedang berjalan, dan memberi masukan lebih awal, bukan menunggu sampai semuanya 'selesai' untuk pertama kali melihat hasilnya.",
  },
  { type: "h2", text: "Tahap 6: Pengujian sebelum menyentuh pengguna nyata" },
  {
    type: "p",
    text: "Pengujian bukan hanya soal mencari bug teknis. Sama pentingnya adalah menguji apakah alur yang dirancang benar-benar masuk akal ketika dipakai oleh orang yang belum pernah melihat aplikasinya sebelumnya. Developer yang sudah terlalu familier dengan aplikasinya sendiri sering tidak menyadari bagian yang membingungkan bagi pengguna baru.",
  },
  {
    type: "ul",
    items: [
      "Uji dengan beberapa calon pengguna nyata, bukan hanya tim internal",
      "Perhatikan di mana mereka bingung atau berhenti tanpa diarahkan",
      "Uji juga skenario yang tidak ideal — koneksi lambat, input yang salah, atau langkah yang terlewat",
      "Catat masukan dengan spesifik, bukan sekadar 'sudah bagus' atau 'ada yang aneh'",
    ],
  },
  { type: "h2", text: "Tahap 7: Peluncuran dan mengumpulkan feedback nyata" },
  {
    type: "p",
    text: "Peluncuran tidak harus berarti merilis ke semua orang sekaligus. Meluncurkan ke kelompok pengguna terbatas lebih dulu memberi ruang untuk menemukan masalah sebelum berdampak ke banyak orang, dan memberi waktu untuk menyesuaikan berdasarkan feedback nyata alih-alih asumsi. Banyak aplikasi yang gagal bukan karena idenya salah, tapi karena langsung diluncurkan besar-besaran tanpa kesempatan belajar dari kelompok kecil lebih dulu.",
  },
  {
    type: "p",
    text: "Feedback yang paling berharga di tahap ini sering bukan yang disampaikan secara langsung, tapi yang terlihat dari perilaku: fitur mana yang benar-benar dipakai, di titik mana pengguna berhenti memakai aplikasi, dan seberapa sering mereka kembali. Perilaku nyata sering bercerita lebih jujur dibanding jawaban dalam survei.",
  },
  { type: "h2", text: "Tahap 8: Setelah peluncuran — pemeliharaan bukan pekerjaan tambahan" },
  {
    type: "p",
    text: "Banyak orang memperlakukan peluncuran sebagai garis akhir proyek, padahal itu justru awal dari fase yang sama pentingnya: pemeliharaan. Sistem operasi berubah, library yang dipakai perlu diperbarui, dan celah keamanan baru bisa ditemukan kapan saja. Aplikasi yang dibiarkan tanpa pemeliharaan pelan-pelan menjadi rapuh, bahkan jika fiturnya tidak pernah diubah sama sekali.",
  },
  {
    type: "p",
    text: "Pemeliharaan juga mencakup iterasi berdasarkan bagaimana aplikasi benar-benar dipakai. Fitur yang di awal terasa penting kadang jarang disentuh setelah dipakai nyata, sementara kebutuhan baru muncul dari penggunaan yang tidak terpikirkan sebelumnya. Anggaran dan waktu untuk fase ini sebaiknya direncanakan sejak awal, bukan dianggap sebagai biaya tak terduga setelah aplikasi berjalan.",
  },
  { type: "h2", text: "Berapa lama dan berapa biaya yang realistis" },
  {
    type: "p",
    text: "Durasi dan biaya sangat bergantung pada cakupan MVP yang ditentukan di tahap awal. Aplikasi sederhana dengan alur yang jelas dan fitur terbatas bisa selesai dalam hitungan minggu hingga dua-tiga bulan. Aplikasi dengan integrasi kompleks, banyak jenis pengguna, atau kebutuhan keamanan khusus realistisnya membutuhkan waktu lebih panjang.",
  },
  {
    type: "p",
    text: "Yang paling sering membuat proyek molor bukan pengembangannya sendiri, tapi keputusan yang berubah-ubah di tengah jalan karena cakupan awal tidak dipikirkan matang. Menghabiskan waktu lebih banyak di tahap validasi dan penentuan cakupan MVP, meski terasa lambat di awal, hampir selalu mempercepat keseluruhan proses.",
  },
  { type: "h2", text: "Bekerja sendiri, tim internal, atau software house?" },
  {
    type: "p",
    text: "Bagi sebagian orang dengan latar belakang teknis, membangun sendiri di awal masuk akal untuk menguji ide dengan biaya minimal. Tapi begitu validasi menunjukkan ide ini layak dikembangkan lebih jauh, kebutuhan akan kecepatan dan kualitas biasanya melebihi kapasitas satu orang bekerja sendirian.",
  },
  {
    type: "p",
    text: "Merekrut tim internal masuk akal jika software adalah inti bisnis jangka panjang dan Anda mampu berinvestasi membangun tim yang akan terus berkembang bersama produk. Bekerja sama dengan software house lebih masuk akal ketika Anda butuh tim berpengalaman untuk membangun dan meluncurkan produk tanpa harus merekrut serta mengelola tim teknis sendiri dari nol — terutama pada tahap awal ketika arah produk masih bisa berubah.",
  },
  { type: "h2", text: "Kesalahan yang paling sering diulang" },
  {
    type: "ul",
    items: [
      "Menulis kode sebelum masalah dan calon pengguna benar-benar jelas",
      "Menganggap semua fitur di daftar keinginan harus ada di versi pertama",
      "Melewatkan pengujian dengan orang di luar tim karena merasa 'sudah jelas' cara pakainya",
      "Meluncurkan ke semua orang sekaligus tanpa kelompok uji terbatas lebih dulu",
      "Tidak menyiapkan anggaran maupun waktu untuk pemeliharaan setelah peluncuran",
    ],
  },
  {
    type: "p",
    text: "Kesalahan-kesalahan ini punya benang merah yang sama: melompati tahap yang terasa lambat demi terlihat bergerak cepat. Dalam banyak kasus, tahap yang dilompati itu justru yang paling menentukan apakah aplikasi akhirnya benar-benar dipakai atau hanya selesai dibangun tanpa pernah benar-benar berguna.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Jarak antara ide dan aplikasi yang berjalan terasa jauh terutama karena prosesnya tidak terlihat jelas dari luar. Setelah dipecah menjadi tahapan — menajamkan masalah, memvalidasi kebutuhan, menentukan MVP, mendesain alur, mengembangkan bertahap, menguji, meluncurkan terbatas, lalu memelihara — jarak itu menjadi serangkaian langkah yang bisa diambil satu per satu, bukan lompatan yang harus diambil sekaligus.",
  },
  {
    type: "cta",
    title: "Punya ide yang belum pernah dimulai?",
    text: "Ceritakan idenya, sesederhana apa pun bentuknya saat ini. Tim AG·SORA akan membantu menajamkan masalah yang ingin diselesaikan dan menyusun MVP yang realistis untuk mulai dibangun — konsultasinya gratis, tanpa komitmen.",
    href: "/services/custom-software",
    label: "Konsultasi Gratis",
  },
];
