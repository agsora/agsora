import type { PostSource } from "@/config/blog";

export const posts: PostSource[] = [
  {
    slug: "stock-opname-tanpa-menghentikan-operasional",
    title: "Stock Opname Tanpa Menghentikan Operasional",
    excerpt:
      "Menutup gudang seharian untuk menghitung stok memang sederhana, tapi mahal. Hitung siklus membuat stok tetap akurat tanpa menghentikan penjualan.",
    category: "ERP & Operasional",
    publishedAt: "2026-07-26",
    tags: ["inventori", "erp", "operasional"],
    cover: {
      src: "https://images.unsplash.com/photo-1553413077-190dd305871c",
      alt: "Lorong gudang dengan rak tinggi berisi tumpukan kardus",
    },
    body: [
      {
        type: "p",
        text: "Banyak bisnis melakukan stock opname setahun sekali atau setiap akhir periode dengan menghentikan seluruh aktivitas gudang. Cara ini memberikan satu angka yang pasti, tetapi mengorbankan penjualan dan pengiriman selama penghitungan — dan selisih yang ditemukan sudah menumpuk berbulan-bulan, sehingga sulit ditelusuri penyebabnya.",
      },
      { type: "h2", text: "Hitung siklus sebagai alternatif" },
      {
        type: "p",
        text: "Hitung siklus (cycle count) membagi penghitungan menjadi bagian-bagian kecil yang dilakukan rutin. Setiap hari atau minggu, hanya sebagian barang yang dihitung, sehingga dalam satu periode seluruh barang tetap tercakup tanpa gudang harus ditutup.",
      },
      { type: "h2", text: "Menentukan barang yang dihitung lebih sering" },
      {
        type: "p",
        text: "Tidak semua barang perlu frekuensi yang sama. Pendekatan yang umum adalah mengelompokkan barang berdasarkan nilai dan pergerakannya:",
      },
      {
        type: "ul",
        items: [
          "Barang bernilai tinggi atau cepat laku: dihitung paling sering",
          "Barang yang sering selisih atau rawan hilang: dihitung lebih sering",
          "Barang bernilai rendah dan jarang bergerak: dihitung lebih jarang",
        ],
      },
      { type: "h2", text: "Menangani barang yang sedang bergerak" },
      {
        type: "p",
        text: "Tantangan utama menghitung tanpa berhenti adalah transaksi yang terjadi selama penghitungan. Beberapa cara mengatasinya:",
      },
      {
        type: "ul",
        items: [
          "Menghitung lokasi tertentu pada jam ketika pergerakannya paling sepi",
          "Mengunci sementara lokasi yang sedang dihitung dari pengambilan barang",
          "Mencatat waktu penghitungan agar transaksi sesudahnya bisa diperhitungkan",
        ],
      },
      {
        type: "callout",
        title: "Selidiki selisih saat masih segar",
        text: "Keuntungan terbesar hitung siklus bukan hanya stok yang akurat, melainkan selisih yang ditemukan cepat. Ketika selisih diketahui dalam hitungan hari, penyebabnya — salah catat penerimaan, salah ambil barang, atau kehilangan — masih bisa ditelusuri.",
      },
      { type: "h2", text: "Peran sistem" },
      {
        type: "p",
        text: "Sistem inventori membantu menjadwalkan barang yang perlu dihitung, menyediakan lembar atau aplikasi hitung, mencatat hasil, dan menampilkan selisih dibanding catatan. Penyesuaian stok sebaiknya membutuhkan persetujuan dan menyimpan alasan, bukan langsung menimpa angka.",
      },
      { type: "h2", text: "Hitung tanpa melihat angka sistem" },
      {
        type: "p",
        text: "Petugas yang menghitung sebaiknya tidak melihat jumlah stok di sistem. Jika angka sistem terlihat, ada kecenderungan “menyesuaikan” hasil hitung agar cocok — dan selisih yang sebenarnya tidak pernah terungkap.",
      },
    ],
  },
  {
    slug: "menyusun-proses-onboarding-karyawan",
    title: "Menyusun Proses Onboarding Karyawan Baru yang Rapi",
    excerpt:
      "Minggu pertama karyawan baru sering habis untuk menunggu akun, perangkat, dan penjelasan yang tercecer. Onboarding yang terstruktur mempercepat mereka produktif.",
    category: "HR & Tim",
    publishedAt: "2026-07-24",
    tags: ["hris", "karyawan", "operasional"],
    cover: {
      src: "https://images.unsplash.com/photo-1552581234-26160f608093",
      alt: "Beberapa orang bekerja bersama di meja putih dengan laptop dan catatan tempel di dinding",
    },
    body: [
      {
        type: "p",
        text: "Karyawan baru datang di hari pertama, tetapi akun email belum dibuat, laptop belum siap, dan atasan sedang rapat. Situasi seperti ini umum, dan meninggalkan kesan pertama yang kurang baik sekaligus membuang waktu produktif di minggu-minggu awal.",
      },
      { type: "h2", text: "Onboarding dimulai sebelum hari pertama" },
      {
        type: "p",
        text: "Banyak hal bisa disiapkan sebelum karyawan datang: dokumen administrasi, akun sistem, perangkat kerja, dan jadwal minggu pertama. Proses yang dimulai lebih awal membuat hari pertama bisa langsung diisi dengan hal yang bermakna.",
      },
      { type: "h2", text: "Daftar periksa per peran" },
      {
        type: "p",
        text: "Kebutuhan karyawan gudang berbeda dengan staf keuangan. Susun daftar periksa standar yang bisa disesuaikan per peran:",
      },
      {
        type: "ul",
        items: [
          "Dokumen dan data yang perlu dilengkapi",
          "Akun sistem dan hak akses yang dibutuhkan",
          "Perangkat dan perlengkapan kerja",
          "Orang yang perlu ditemui dan dikenal",
          "Pelatihan wajib, termasuk keselamatan kerja jika relevan",
          "Target sederhana untuk minggu dan bulan pertama",
        ],
      },
      { type: "h2", text: "Tetapkan penanggung jawab setiap langkah" },
      {
        type: "p",
        text: "Onboarding melibatkan HR, IT, dan atasan langsung. Tanpa pembagian yang jelas, setiap pihak mengira pihak lain sudah menyiapkan. Sistem HR yang membuat tugas otomatis ke masing-masing penanggung jawab ketika karyawan baru didaftarkan membantu mencegah langkah yang terlewat.",
      },
      {
        type: "callout",
        title: "Hak akses secukupnya sejak awal",
        text: "Berikan akses sesuai kebutuhan peran, bukan menyalin akses karyawan lain yang mungkin jauh lebih luas. Kebiasaan menyalin akses adalah salah satu penyebab data sensitif bisa dibuka oleh orang yang sebenarnya tidak memerlukannya.",
      },
      { type: "h2", text: "Pendamping untuk pertanyaan sehari-hari" },
      {
        type: "p",
        text: "Menunjuk rekan kerja sebagai pendamping di minggu-minggu awal membantu karyawan baru bertanya tanpa merasa mengganggu atasan. Banyak hal praktis — cara kerja tim, kebiasaan, dan aturan tidak tertulis — lebih mudah dipelajari lewat rekan.",
      },
      { type: "h2", text: "Minta masukan" },
      {
        type: "p",
        text: "Setelah beberapa minggu, tanyakan kepada karyawan baru apa yang membingungkan dan apa yang seharusnya disiapkan lebih awal. Masukan dari orang yang baru saja melewati prosesnya adalah bahan perbaikan yang paling berguna.",
      },
      { type: "h2", text: "Offboarding sama pentingnya" },
      {
        type: "p",
        text: "Ketika karyawan keluar, prosesnya juga perlu daftar periksa: pengembalian perangkat, penutupan akses sistem, dan serah terima pekerjaan. Akses yang lupa ditutup adalah risiko keamanan yang sering luput.",
      },
    ],
  },
  {
    slug: "data-pelanggan-tersebar-di-whatsapp-sales",
    title: "Ketika Data Pelanggan Tersebar di WhatsApp Pribadi Sales",
    excerpt:
      "Percakapan dengan pelanggan di WhatsApp pribadi terasa praktis — sampai sales tersebut keluar dan membawa semua riwayatnya. Ini cara mengelolanya lebih aman.",
    category: "Penjualan & CRM",
    publishedAt: "2026-07-22",
    tags: ["crm", "pelanggan", "sales", "data"],
    cover: {
      src: "https://images.unsplash.com/photo-1611746872915-64382b5c76da",
      alt: "Layar ponsel menampilkan kumpulan aplikasi pesan instan",
    },
    body: [
      {
        type: "p",
        text: "Di banyak bisnis Indonesia, WhatsApp adalah kanal utama berhubungan dengan pelanggan. Sales menyimpan kontak di ponsel pribadi, bernegosiasi lewat chat, dan mengirim penawaran dari akun sendiri. Cara ini cepat dan nyaman — tetapi menyimpan risiko yang baru terasa belakangan.",
      },
      { type: "h2", text: "Risikonya" },
      {
        type: "ul",
        items: [
          "Riwayat komunikasi dan kontak pelanggan pergi bersama sales yang keluar",
          "Manajer tidak bisa melihat perkembangan peluang tanpa bertanya satu per satu",
          "Janji harga atau diskon tidak tercatat di sistem perusahaan",
          "Pelanggan menerima informasi yang tidak konsisten dari sales berbeda",
          "Data pribadi pelanggan tersimpan di perangkat yang tidak dikelola perusahaan",
        ],
      },
      { type: "h2", text: "Tidak perlu melarang WhatsApp" },
      {
        type: "p",
        text: "Melarang WhatsApp biasanya tidak realistis, karena pelanggan memang nyaman memakainya. Yang lebih masuk akal adalah memindahkan percakapan bisnis ke akun dan sistem milik perusahaan.",
      },
      { type: "h2", text: "Pilihan pendekatan" },
      { type: "h3", text: "Nomor WhatsApp Business milik perusahaan" },
      {
        type: "p",
        text: "Nomor yang dimiliki perusahaan, bukan pribadi, memastikan kontak dan riwayat tetap ada ketika sales berganti.",
      },
      { type: "h3", text: "Integrasi dengan CRM" },
      {
        type: "p",
        text: "Dengan WhatsApp Business API, percakapan bisa terhubung ke CRM sehingga riwayat chat tercatat pada data pelanggan, beberapa sales bisa menangani satu nomor, dan manajer bisa melihat perkembangan tanpa meminta tangkapan layar.",
      },
      { type: "h3", text: "Ringkasan wajib di CRM" },
      {
        type: "p",
        text: "Jika integrasi belum memungkinkan, minimal wajibkan ringkasan percakapan penting — penawaran, keberatan, dan kesepakatan — dicatat di CRM setelah setiap interaksi.",
      },
      {
        type: "callout",
        title: "Kesepakatan harus tercatat di sistem",
        text: "Apa pun kanal komunikasinya, harga, diskon, dan komitmen kepada pelanggan harus tercatat di sistem perusahaan. Kesepakatan yang hanya ada di chat pribadi sulit ditelusuri ketika terjadi perselisihan.",
      },
      { type: "h2", text: "Perhatikan data pribadi pelanggan" },
      {
        type: "p",
        text: "Nomor telepon dan riwayat percakapan termasuk data pribadi. Gunakan untuk tujuan yang wajar sesuai hubungan bisnis, hindari pesan massal kepada pelanggan yang tidak menginginkannya, dan kelola sesuai ketentuan pelindungan data pribadi yang berlaku.",
      },
      { type: "h2", text: "Mulai dari kebiasaan, bukan dari aplikasi" },
      {
        type: "p",
        text: "Perubahan ini lebih banyak soal kebiasaan tim daripada teknologi. Jelaskan alasannya kepada sales — perlindungan bagi pelanggan, perusahaan, dan juga sales sendiri ketika ada perselisihan — agar perubahan tidak dianggap sekadar pengawasan.",
      },
    ],
  },
  {
    slug: "apa-itu-api-untuk-pemilik-bisnis",
    title: "Apa Itu API? Penjelasan untuk Pemilik Bisnis",
    excerpt:
      "API sering disebut dalam diskusi soal software, tapi jarang dijelaskan. Singkatnya: API adalah cara dua sistem saling bertukar data tanpa perlu diketik ulang manusia.",
    category: "Teknologi",
    publishedAt: "2026-07-20",
    tags: ["api", "integrasi"],
    cover: {
      src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
      alt: "Potongan kode program berwarna di layar monitor",
    },
    body: [
      {
        type: "p",
        text: "Ketika membicarakan sistem baru, istilah API hampir selalu muncul: “sistemnya punya API?”, “bisa diintegrasikan lewat API?”. Bagi pemilik bisnis, istilah ini terdengar teknis. Padahal konsepnya cukup sederhana, dan memahaminya membantu Anda mengambil keputusan yang lebih baik.",
      },
      { type: "h2", text: "Analogi sederhana" },
      {
        type: "p",
        text: "Bayangkan pelayan di restoran. Anda tidak masuk ke dapur untuk memasak sendiri; Anda menyampaikan pesanan kepada pelayan dengan cara yang disepakati, lalu pelayan membawakan hasilnya. API bekerja serupa: satu sistem mengirim permintaan dengan format tertentu, dan sistem lain membalas dengan data atau hasil yang diminta — tanpa kedua sistem perlu tahu cara kerja internal masing-masing.",
      },
      { type: "h2", text: "Contoh dalam bisnis sehari-hari" },
      {
        type: "ul",
        items: [
          "Sistem kasir mengirim data penjualan ke software akuntansi",
          "Toko online menanyakan status pembayaran ke payment gateway",
          "Aplikasi mengambil ongkos kirim dari layanan ekspedisi",
          "Pesanan dari marketplace masuk otomatis ke sistem stok",
          "Data karyawan dari sistem HR dipakai sistem absensi",
        ],
      },
      { type: "h2", text: "Kenapa ini penting bagi bisnis" },
      {
        type: "p",
        text: "Tanpa integrasi, data dipindahkan manusia: diekspor, disalin, diketik ulang. Pekerjaan itu memakan waktu, rawan salah, dan membuat data di satu sistem tertinggal dari sistem lain. API memungkinkan data mengalir otomatis, sehingga setiap sistem bekerja dengan informasi yang sama dan terbaru.",
      },
      {
        type: "callout",
        title: "Pertanyaan yang layak diajukan saat membeli software",
        text: "Apakah sistem ini menyediakan API? Apakah dokumentasinya tersedia? Apakah ada biaya tambahan untuk memakainya? Sistem tanpa API bisa membuat data Anda terkunci di dalamnya dan menyulitkan integrasi di masa depan.",
      },
      { type: "h2", text: "Integrasi tidak selalu sederhana" },
      {
        type: "p",
        text: "Adanya API tidak berarti integrasi pasti mudah. Kedua sistem mungkin menyimpan data dengan cara berbeda, ada batasan jumlah permintaan, atau dokumentasinya kurang lengkap. Karena itu, kemungkinan integrasi sebaiknya diperiksa sejak awal, sebelum project berjalan.",
      },
      { type: "h2", text: "Rencanakan saat integrasi gagal" },
      {
        type: "p",
        text: "Koneksi bisa terputus dan layanan pihak ketiga bisa bermasalah. Integrasi yang baik punya mekanisme mencoba ulang, pencatatan kegagalan, dan pemberitahuan kepada tim — agar data yang gagal terkirim tidak hilang tanpa disadari.",
      },
    ],
  },
  {
    slug: "kecepatan-website-dan-dampaknya",
    title: "Kenapa Kecepatan Website Berpengaruh pada Bisnis",
    excerpt:
      "Website yang lambat kehilangan pengunjung sebelum mereka sempat membaca penawaran. Kecepatan juga termasuk hal yang diperhatikan mesin pencari.",
    category: "Website & Digital",
    publishedAt: "2026-07-18",
    tags: ["website", "seo"],
    cover: {
      src: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2",
      alt: "Monitor menampilkan kode program dengan keyboard bercahaya di meja gelap",
    },
    body: [
      {
        type: "p",
        text: "Pengunjung jarang mau menunggu lama. Ketika halaman tidak kunjung tampil, terutama di ponsel dengan koneksi yang tidak selalu stabil, banyak orang menutupnya dan kembali ke hasil pencarian. Bagi bisnis, itu berarti calon klien yang hilang sebelum sempat mengenal penawaran Anda.",
      },
      { type: "h2", text: "Kecepatan dari sudut pandang pengguna" },
      {
        type: "p",
        text: "Google mengukur pengalaman halaman lewat metrik yang disebut Core Web Vitals. Secara sederhana, ketiganya menjawab hal yang dirasakan pengunjung:",
      },
      {
        type: "ul",
        items: [
          "Largest Contentful Paint (LCP): seberapa cepat konten utama halaman terlihat",
          "Interaction to Next Paint (INP): seberapa cepat halaman merespons ketika diklik atau diketuk",
          "Cumulative Layout Shift (CLS): apakah tampilan bergeser tiba-tiba saat halaman dimuat",
        ],
      },
      { type: "h2", text: "Penyebab website lambat yang umum" },
      {
        type: "ul",
        items: [
          "Gambar berukuran besar yang tidak dikompresi atau tidak disesuaikan dengan layar",
          "Terlalu banyak skrip pihak ketiga, seperti widget, pelacak, dan plugin",
          "Hosting yang kurang memadai untuk jumlah pengunjung",
          "Font dan animasi yang berlebihan",
          "Halaman yang memuat semua konten sekaligus, termasuk yang belum terlihat",
        ],
      },
      {
        type: "callout",
        title: "Uji di ponsel dan koneksi biasa",
        text: "Website yang terasa cepat di laptop kantor dengan internet kencang bisa sangat lambat di ponsel pelanggan. Uji dengan perangkat dan koneksi yang mewakili pengunjung Anda, bukan hanya di lingkungan pengembangan.",
      },
      { type: "h2", text: "Perbaikan yang biasanya paling berdampak" },
      {
        type: "ol",
        items: [
          "Mengoptimalkan gambar: ukuran sesuai tampilan dan format modern",
          "Menunda pemuatan gambar yang berada di bawah layar pertama",
          "Mengurangi skrip pihak ketiga yang tidak benar-benar diperlukan",
          "Memastikan konten utama tidak tersembunyi di balik animasi saat halaman dibuka",
        ],
      },
      { type: "h2", text: "Ukur sebelum dan sesudah" },
      {
        type: "p",
        text: "Gunakan alat seperti PageSpeed Insights untuk mengukur kondisi saat ini, lalu bandingkan setelah perbaikan. Data dari pengguna nyata di Google Search Console juga membantu melihat apakah perbaikan benar-benar terasa oleh pengunjung.",
      },
      { type: "h2", text: "Kecepatan adalah pekerjaan berkelanjutan" },
      {
        type: "p",
        text: "Website cenderung melambat seiring waktu karena konten, gambar, dan skrip terus ditambahkan. Jadikan pengecekan kecepatan sebagai bagian rutin setiap kali ada perubahan besar pada website.",
      },
    ],
  },
  {
    slug: "kebutuhan-sistem-bisnis-distribusi",
    title: "Kebutuhan Sistem untuk Bisnis Distribusi",
    excerpt:
      "Bisnis distribusi bergerak di antara gudang, armada, sales lapangan, dan tagihan pelanggan. Sistemnya harus menyatukan semua titik itu, bukan hanya mencatat stok.",
    category: "Panduan Industri",
    publishedAt: "2026-07-16",
    tags: ["industri", "inventori", "multi-cabang", "mobile"],
    cover: {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
      alt: "Gudang distribusi besar dengan rak dan tumpukan kontainer kuning",
    },
    body: [
      {
        type: "p",
        text: "Distributor menghubungkan pemasok dengan banyak pelanggan — toko, agen, atau perusahaan lain. Operasionalnya melibatkan pembelian dalam jumlah besar, penyimpanan di satu atau beberapa gudang, pengambilan pesanan oleh sales, pengiriman, dan penagihan. Masalah kecil di salah satu titik cepat berdampak ke titik lain.",
      },
      { type: "h2", text: "Stok yang akurat per gudang" },
      {
        type: "p",
        text: "Distributor dengan beberapa gudang perlu mengetahui stok di setiap lokasi, bukan hanya total. Transfer antar gudang harus tercatat, dan barang yang sedang dalam perjalanan perlu dibedakan dari barang yang tersedia untuk dijual.",
      },
      { type: "h2", text: "Pesanan dari sales lapangan" },
      {
        type: "p",
        text: "Sales yang mengunjungi toko membutuhkan informasi stok dan harga terbaru ketika menerima pesanan. Aplikasi pemesanan di ponsel yang terhubung ke sistem mencegah sales menjanjikan barang yang ternyata sudah habis.",
      },
      { type: "h2", text: "Harga dan syarat per pelanggan" },
      {
        type: "p",
        text: "Distributor sering memiliki harga berbeda untuk kategori pelanggan, diskon bertingkat berdasarkan jumlah, dan batas kredit per pelanggan. Aturan ini sebaiknya diterapkan otomatis di sistem, bukan diingat oleh sales satu per satu.",
      },
      {
        type: "callout",
        title: "Batas kredit mencegah piutang macet",
        text: "Sistem yang menahan pesanan baru ketika pelanggan melewati batas kredit atau memiliki tagihan jatuh tempo membantu mengendalikan risiko piutang — tanpa bergantung pada sales mengecek status tagihan secara manual.",
      },
      { type: "h2", text: "Pengiriman dan bukti terima" },
      {
        type: "p",
        text: "Perencanaan rute, pemuatan barang, dan bukti serah terima menentukan apakah barang benar-benar sampai. Bukti terima digital — tanda tangan atau foto di lokasi — mempercepat penagihan dan mengurangi perselisihan.",
      },
      { type: "h2", text: "Penagihan dan piutang" },
      {
        type: "p",
        text: "Faktur sebaiknya terbentuk otomatis dari pesanan yang terkirim, dan status pembayaran bisa dipantau per pelanggan. Laporan umur piutang membantu tim penagihan memprioritaskan tagihan yang paling berisiko.",
      },
      { type: "h2", text: "Kebutuhan yang saling terhubung" },
      {
        type: "ul",
        items: [
          "Pembelian dan penerimaan barang dari pemasok",
          "Stok per gudang dan per lokasi rak",
          "Pesanan penjualan dari kantor dan sales lapangan",
          "Pengiriman, armada, dan bukti terima",
          "Faktur, pembayaran, dan piutang",
          "Laporan penjualan per wilayah, sales, dan produk",
        ],
      },
      {
        type: "p",
        text: "Karena semua titik saling bergantung, bisnis distribusi termasuk yang paling merasakan manfaat sistem terintegrasi — dan paling dirugikan oleh data yang tersebar di banyak aplikasi terpisah.",
      },
    ],
  },
  {
    slug: "saas-atau-lisensi-sekali-beli",
    title: "Berlangganan SaaS atau Lisensi Sekali Beli?",
    excerpt:
      "Biaya bulanan terlihat lebih ringan, lisensi sekali beli terlihat lebih hemat. Keduanya bisa benar — tergantung apa saja yang dihitung.",
    category: "Panduan Memilih",
    publishedAt: "2026-07-14",
    tags: ["saas", "biaya", "vendor"],
    cover: {
      src: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
      alt: "Tunas tanaman tumbuh dari tumpukan koin",
    },
    body: [
      {
        type: "p",
        text: "Saat memilih software bisnis, Anda sering dihadapkan pada dua model: berlangganan (SaaS) dengan biaya berkala, atau lisensi yang dibeli sekali. Membandingkan keduanya hanya dari harga di brosur hampir selalu menyesatkan.",
      },
      { type: "h2", text: "Model berlangganan" },
      {
        type: "ul",
        items: [
          "Biaya awal rendah, dibayar bulanan atau tahunan",
          "Pembaruan dan perbaikan biasanya sudah termasuk",
          "Server dan pemeliharaan dikelola penyedia",
          "Mudah mulai dan mudah berhenti",
          "Total biaya terus bertambah selama dipakai",
          "Data berada di sistem penyedia",
        ],
      },
      { type: "h2", text: "Lisensi sekali beli" },
      {
        type: "ul",
        items: [
          "Biaya awal lebih besar",
          "Hak pakai tidak berakhir, meski versi baru mungkin berbayar",
          "Sering membutuhkan server dan pemeliharaan sendiri",
          "Biaya dukungan dan pembaruan bisa ditagih terpisah",
          "Kendali lebih besar atas instalasi dan data",
        ],
      },
      { type: "h2", text: "Bandingkan total biaya dalam beberapa tahun" },
      {
        type: "p",
        text: "Perbandingan yang lebih adil menghitung semua biaya dalam rentang waktu yang sama, misalnya tiga tahun. Untuk lisensi, tambahkan biaya server, pemeliharaan, dukungan teknis, dan pembaruan. Untuk berlangganan, perhitungkan kenaikan biaya ketika jumlah pengguna bertambah.",
      },
      {
        type: "callout",
        title: "Perhatikan biaya per pengguna",
        text: "Banyak layanan berlangganan menghitung biaya per pengguna. Harga yang terjangkau untuk lima pengguna bisa berubah signifikan ketika tim tumbuh menjadi puluhan orang. Masukkan rencana pertumbuhan ke dalam perhitungan.",
      },
      { type: "h2", text: "Pertanyaan yang sering terlewat" },
      {
        type: "ol",
        items: [
          "Apakah data bisa diekspor lengkap jika berhenti berlangganan?",
          "Apa yang terjadi pada lisensi jika penyedianya berhenti beroperasi?",
          "Apakah harga berlangganan bisa naik, dan bagaimana ketentuannya?",
          "Apakah lisensi mencakup pembaruan keamanan?",
          "Siapa yang bertanggung jawab atas backup data?",
        ],
      },
      { type: "h2", text: "Bukan sekadar soal biaya" },
      {
        type: "p",
        text: "Model berlangganan cocok ketika Anda ingin cepat berjalan tanpa mengurus infrastruktur. Lisensi atau sistem milik sendiri lebih masuk akal ketika kendali penuh atas data dan instalasi menjadi prioritas, atau ketika skala penggunaan membuat biaya berlangganan terlalu besar. Pilih berdasarkan kebutuhan dan kemampuan tim, bukan hanya angka di awal.",
      },
    ],
  },
  {
    slug: "risiko-ai-dalam-operasional",
    title: "Risiko Menggunakan AI dalam Proses Operasional",
    excerpt:
      "AI bisa mempercepat banyak pekerjaan, tapi membawa risiko yang berbeda dari software biasa. Mengenalinya sejak awal membuat penerapannya lebih aman.",
    category: "Teknologi",
    publishedAt: "2026-07-12",
    tags: ["ai", "otomasi", "keamanan"],
    cover: {
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      alt: "Tulisan AI tiga dimensi berwarna biru",
    },
    body: [
      {
        type: "p",
        text: "Banyak bisnis mulai memakai AI untuk merangkum dokumen, menjawab pelanggan, menyusun draf, atau membantu analisis. Manfaatnya nyata. Tetapi AI bekerja dengan cara yang berbeda dari software konvensional, sehingga risikonya juga perlu dipahami dengan cara yang berbeda.",
      },
      { type: "h2", text: "Jawaban yang meyakinkan tapi keliru" },
      {
        type: "p",
        text: "Model AI generatif bisa menghasilkan jawaban yang terdengar tepat tetapi salah — termasuk angka, kutipan, atau fakta yang tidak ada. Ini bukan kerusakan sesekali, melainkan bagian dari cara kerjanya. Karena itu, keluaran AI untuk hal penting perlu diperiksa manusia sebelum dipakai.",
      },
      { type: "h2", text: "Kebocoran data" },
      {
        type: "p",
        text: "Memasukkan dokumen internal, data pelanggan, atau data karyawan ke layanan AI pihak ketiga berarti data tersebut dikirim ke luar perusahaan. Pahami bagaimana penyedia menyimpan dan menggunakan data, pilih layanan yang ketentuannya sesuai kebijakan perusahaan, dan tetapkan data apa yang tidak boleh dimasukkan.",
      },
      {
        type: "callout",
        title: "Buat aturan pemakaian sebelum AI menyebar",
        text: "Karyawan sering sudah memakai alat AI secara mandiri sebelum ada kebijakan resmi. Aturan sederhana — alat mana yang boleh dipakai dan data apa yang tidak boleh dimasukkan — lebih efektif daripada larangan total yang diabaikan.",
      },
      { type: "h2", text: "Keputusan yang sulit dijelaskan" },
      {
        type: "p",
        text: "Ketika AI membantu mengambil keputusan yang berdampak pada orang — misalnya menyaring lamaran kerja atau menilai pelanggan — sulit menjelaskan mengapa sebuah keputusan diambil. Keputusan seperti ini sebaiknya tetap di tangan manusia, dengan AI sebagai alat bantu.",
      },
      { type: "h2", text: "Ketergantungan pada penyedia" },
      {
        type: "p",
        text: "Layanan AI bisa berubah harga, berubah perilaku setelah pembaruan model, atau mengalami gangguan. Proses bisnis yang sepenuhnya bergantung pada satu layanan perlu rencana cadangan agar operasional tidak berhenti.",
      },
      { type: "h2", text: "Cara menerapkan dengan lebih aman" },
      {
        type: "ol",
        items: [
          "Mulai dari pekerjaan berisiko rendah, seperti draf internal dan ringkasan",
          "Sediakan pemeriksaan manusia untuk keluaran yang dipakai ke luar",
          "Batasi data yang boleh diproses, terutama data pribadi dan rahasia",
          "Catat penggunaan AI dalam proses penting agar bisa ditelusuri",
          "Evaluasi hasilnya secara berkala, bukan hanya di awal penerapan",
        ],
      },
      {
        type: "p",
        text: "Dengan batas yang jelas, AI bisa memberi manfaat nyata tanpa menciptakan risiko yang tidak disadari.",
      },
    ],
  },
  {
    slug: "mengelola-promo-dan-diskon",
    title: "Mengelola Promo dan Diskon Tanpa Merusak Laporan",
    excerpt:
      "Promo yang diatur manual di kasir sulit diukur dan mudah disalahgunakan. Mengaturnya di sistem membuat hasil promo bisa dinilai dengan jujur.",
    category: "POS & Retail",
    publishedAt: "2026-07-10",
    tags: ["pos", "retail", "pelaporan", "pelanggan"],
    cover: {
      src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
      alt: "Tas belanja merah dan hitam berjajar di atas latar gelap",
    },
    body: [
      {
        type: "p",
        text: "Promo adalah alat penjualan yang umum: potongan harga, beli dua gratis satu, diskon member, atau harga khusus di jam tertentu. Masalahnya, ketika promo diterapkan secara manual — kasir mengetik potongan sendiri — laporan penjualan menjadi sulit dibaca dan dampak promo tidak pernah benar-benar diketahui.",
      },
      { type: "h2", text: "Atur promo di sistem, bukan di ingatan kasir" },
      {
        type: "p",
        text: "Promo sebaiknya didefinisikan di sistem dengan aturan yang jelas: produk apa, berapa potongannya, periode berlaku, dan syaratnya. Kasir tidak perlu menghitung atau mengingat, dan promo otomatis berhenti saat periodenya berakhir.",
      },
      { type: "h2", text: "Jenis aturan yang umum" },
      {
        type: "ul",
        items: [
          "Potongan persentase atau nominal untuk produk tertentu",
          "Harga paket untuk kombinasi produk",
          "Beli sejumlah tertentu, dapat tambahan gratis",
          "Diskon berdasarkan total belanja",
          "Harga khusus untuk member atau periode waktu tertentu",
        ],
      },
      { type: "h2", text: "Pisahkan diskon di laporan" },
      {
        type: "p",
        text: "Laporan penjualan harus memisahkan harga normal, nilai diskon, dan penjualan bersih. Tanpa pemisahan ini, penjualan saat promo terlihat seperti penurunan harga biasa, dan Anda tidak tahu berapa biaya sebenarnya dari promo tersebut.",
      },
      {
        type: "callout",
        title: "Ukur dampak, bukan hanya volume",
        text: "Promo yang menaikkan jumlah transaksi belum tentu menguntungkan. Bandingkan margin, bukan hanya omzet, dan perhatikan apakah penjualan produk lain justru turun selama promo berlangsung.",
      },
      { type: "h2", text: "Batasi diskon manual" },
      {
        type: "p",
        text: "Kebutuhan diskon di luar promo resmi pasti ada, misalnya untuk barang cacat. Tetapi diskon manual sebaiknya dibatasi nilainya, membutuhkan persetujuan di atas batas tertentu, dan selalu disertai alasan. Diskon manual tanpa kontrol adalah celah kebocoran yang umum.",
      },
      { type: "h2", text: "Hati-hati dengan promo yang bertumpuk" },
      {
        type: "p",
        text: "Ketika beberapa promo berlaku bersamaan, sistem perlu aturan yang jelas: apakah promo bisa digabung, atau hanya satu yang berlaku. Tanpa aturan ini, pelanggan bisa mendapatkan potongan jauh lebih besar dari yang direncanakan.",
      },
      { type: "h2", text: "Evaluasi setelah promo berakhir" },
      {
        type: "p",
        text: "Jadwalkan evaluasi singkat setelah setiap promo: berapa transaksi yang memakai promo, berapa nilai diskon yang diberikan, dan bagaimana dampaknya pada margin. Catatan ini membuat keputusan promo berikutnya lebih tepat.",
      },
    ],
  },
  {
    slug: "konsolidasi-laporan-multi-cabang",
    title: "Konsolidasi Laporan Keuangan Multi-Cabang",
    excerpt:
      "Menggabungkan laporan dari banyak cabang secara manual lambat dan rawan selisih. Konsolidasi yang baik dimulai dari struktur data yang seragam di semua cabang.",
    category: "ERP & Operasional",
    publishedAt: "2026-07-08",
    tags: ["erp", "multi-cabang", "keuangan", "pelaporan"],
    cover: {
      src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
      alt: "Laptop menampilkan dashboard berisi grafik dan tabel laporan",
    },
    body: [
      {
        type: "p",
        text: "Bisnis dengan beberapa cabang biasanya menerima laporan dari setiap lokasi dalam format yang sedikit berbeda, lalu menggabungkannya di spreadsheet. Proses ini memakan waktu, dan angka gabungan sering baru tersedia jauh setelah periode berakhir — terlalu terlambat untuk mengambil tindakan.",
      },
      { type: "h2", text: "Masalahnya biasanya bukan di penggabungan" },
      {
        type: "p",
        text: "Kesulitan konsolidasi jarang disebabkan oleh proses menjumlahkan angka. Penyebab utamanya adalah setiap cabang mencatat dengan cara berbeda: nama akun yang tidak seragam, kategori biaya yang berbeda, atau waktu pencatatan yang tidak sama.",
      },
      { type: "h2", text: "Seragamkan struktur lebih dulu" },
      {
        type: "ul",
        items: [
          "Daftar akun yang sama untuk semua cabang",
          "Kategori pendapatan dan biaya dengan definisi yang disepakati",
          "Aturan kapan transaksi dicatat",
          "Kode cabang pada setiap transaksi",
        ],
      },
      {
        type: "p",
        text: "Dengan struktur yang seragam, laporan setiap cabang bisa digabung otomatis dan tetap bisa dirinci kembali per cabang.",
      },
      { type: "h2", text: "Transaksi antar cabang" },
      {
        type: "p",
        text: "Transfer barang atau dana antar cabang perlu dicatat dengan cara khusus. Jika tidak, transaksi internal bisa terhitung sebagai pendapatan atau biaya ganda dalam laporan gabungan. Sistem sebaiknya menandai transaksi antar cabang agar bisa dieliminasi saat konsolidasi.",
      },
      {
        type: "callout",
        title: "Tutup periode dengan disiplin",
        text: "Laporan gabungan hanya bisa dipercaya jika semua cabang menyelesaikan pencatatan periode yang sama. Tetapkan batas waktu penutupan periode yang jelas, dan kunci transaksi periode yang sudah ditutup agar tidak berubah diam-diam.",
      },
      { type: "h2", text: "Satu sistem atau banyak sistem" },
      {
        type: "p",
        text: "Konsolidasi paling mudah ketika semua cabang memakai sistem yang sama. Jika cabang terpaksa memakai sistem berbeda, misalnya karena akuisisi, pemetaan akun menjadi pekerjaan tambahan yang perlu direncanakan.",
      },
      { type: "h2", text: "Laporan yang layak dipantau" },
      {
        type: "ul",
        items: [
          "Laba rugi per cabang dan gabungan",
          "Perbandingan performa antar cabang pada periode yang sama",
          "Biaya operasional per cabang terhadap pendapatannya",
          "Arus kas gabungan",
        ],
      },
      {
        type: "p",
        text: "Ketika laporan gabungan tersedia cepat dan bisa dirinci per cabang, manajemen dapat melihat cabang mana yang perlu perhatian sebelum masalahnya membesar.",
      },
    ],
  },
];
