import type { Block } from "@/config/blog";
import { translations as t_dari_ide_ke_aplikasi_proses_membangun_software } from "./dari-ide-ke-aplikasi-proses-membangun-software";
import { translations as t_digitalisasi_bisnis_keluarga_generasi_penerus } from "./digitalisasi-bisnis-keluarga-generasi-penerus";
import { translations as t_erp_dan_visibilitas_arus_kas } from "./erp-dan-visibilitas-arus-kas";
import { translations as t_kapan_waktu_tepat_menerapkan_erp } from "./kapan-waktu-tepat-menerapkan-erp";
import { translations as t_kenapa_bisnis_butuh_website_2026 } from "./kenapa-bisnis-butuh-website-2026";
import { translations as t_mvp_aplikasi_bisnis_mulai_dari_yang_kecil } from "./mvp-aplikasi-bisnis-mulai-dari-yang-kecil";
import { translations as t_progressive_web_app_untuk_bisnis } from "./progressive-web-app-untuk-bisnis";
import { translations as t_tanda_bisnis_siap_punya_aplikasi_sendiri } from "./tanda-bisnis-siap-punya-aplikasi-sendiri";
import { translations as t_tren_teknologi_bisnis_tahun_ini } from "./tren-teknologi-bisnis-tahun-ini";
import { translations as t_ux_website_yang_mengubah_pengunjung_jadi_pelanggan } from "./ux-website-yang-mengubah-pengunjung-jadi-pelanggan";
import { translations as t_integrasi_whatsapp_business_untuk_layanan_pelanggan } from "./integrasi-whatsapp-business-untuk-layanan-pelanggan";
import { translations as t_seo_lokal_dan_google_business_profile } from "./seo-lokal-dan-google-business-profile";
import { translations as t_dashboard_bisnis_untuk_keputusan_harian } from "./dashboard-bisnis-untuk-keputusan-harian";
import { translations as t_low_code_no_code_atau_software_custom } from "./low-code-no-code-atau-software-custom";
import { translations as t_pemeliharaan_aplikasi_setelah_peluncuran } from "./pemeliharaan-aplikasi-setelah-peluncuran";
import { translations as t_notifikasi_push_dan_retensi_aplikasi_mobile } from "./notifikasi-push-dan-retensi-aplikasi-mobile";
import { translations as t_aksesibilitas_website_untuk_bisnis } from "./aksesibilitas-website-untuk-bisnis";
import { translations as t_perencanaan_stok_dan_pembelian_ulang } from "./perencanaan-stok-dan-pembelian-ulang";
import { translations as t_asisten_ai_untuk_bisnis_kecil_tren_realistis } from "./asisten-ai-untuk-bisnis-kecil-tren-realistis";
import { translations as t_ar_vr_untuk_bisnis_ritel_yang_realistis } from "./ar-vr-untuk-bisnis-ritel-yang-realistis";
import { translations as t_blog_perusahaan_sebagai_mesin_prospek } from "./blog-perusahaan-sebagai-mesin-prospek";
import { translations as t_infrastruktur_jaringan_dan_perangkat_toko } from "./infrastruktur-jaringan-dan-perangkat-toko";
import { translations as t_integrasi_payment_gateway_website_dan_aplikasi } from "./integrasi-payment-gateway-website-dan-aplikasi";
import { translations as t_master_data_erp_kode_barang_pelanggan_pemasok } from "./master-data-erp-kode-barang-pelanggan-pemasok";
import { translations as t_onboarding_aplikasi_mobile_pengguna_baru } from "./onboarding-aplikasi-mobile-pengguna-baru";
import { translations as t_pengiriman_dan_logistik_toko_online } from "./pengiriman-dan-logistik-toko-online";
import { translations as t_tim_digital_internal_atau_vendor_eksternal } from "./tim-digital-internal-atau-vendor-eksternal";
import { translations as t_uat_pengujian_sebelum_aplikasi_diluncurkan } from "./uat-pengujian-sebelum-aplikasi-diluncurkan";
import { translations as t_website_multibahasa_untuk_pasar_regional } from "./website-multibahasa-untuk-pasar-regional";
import { translations as t_checkout_toko_online_mengurangi_keranjang_terbengkalai } from "./checkout-toko-online-mengurangi-keranjang-terbengkalai";

export type BodyTranslations = { en: Block[]; zh: Block[] };

/**
 * Optional English/Chinese article bodies, keyed by slug. Only slugs authored
 * with translations appear here — posts without an entry fall back to the
 * Indonesian body from ./bodies for every locale, same as before this map
 * existed.
 */
export const bodiesI18n: Record<string, BodyTranslations> = {
  "dari-ide-ke-aplikasi-proses-membangun-software": t_dari_ide_ke_aplikasi_proses_membangun_software,
  "digitalisasi-bisnis-keluarga-generasi-penerus": t_digitalisasi_bisnis_keluarga_generasi_penerus,
  "erp-dan-visibilitas-arus-kas": t_erp_dan_visibilitas_arus_kas,
  "kapan-waktu-tepat-menerapkan-erp": t_kapan_waktu_tepat_menerapkan_erp,
  "kenapa-bisnis-butuh-website-2026": t_kenapa_bisnis_butuh_website_2026,
  "mvp-aplikasi-bisnis-mulai-dari-yang-kecil": t_mvp_aplikasi_bisnis_mulai_dari_yang_kecil,
  "progressive-web-app-untuk-bisnis": t_progressive_web_app_untuk_bisnis,
  "tanda-bisnis-siap-punya-aplikasi-sendiri": t_tanda_bisnis_siap_punya_aplikasi_sendiri,
  "tren-teknologi-bisnis-tahun-ini": t_tren_teknologi_bisnis_tahun_ini,
  "ux-website-yang-mengubah-pengunjung-jadi-pelanggan": t_ux_website_yang_mengubah_pengunjung_jadi_pelanggan,
  "integrasi-whatsapp-business-untuk-layanan-pelanggan": t_integrasi_whatsapp_business_untuk_layanan_pelanggan,
  "seo-lokal-dan-google-business-profile": t_seo_lokal_dan_google_business_profile,
  "dashboard-bisnis-untuk-keputusan-harian": t_dashboard_bisnis_untuk_keputusan_harian,
  "low-code-no-code-atau-software-custom": t_low_code_no_code_atau_software_custom,
  "pemeliharaan-aplikasi-setelah-peluncuran": t_pemeliharaan_aplikasi_setelah_peluncuran,
  "notifikasi-push-dan-retensi-aplikasi-mobile": t_notifikasi_push_dan_retensi_aplikasi_mobile,
  "aksesibilitas-website-untuk-bisnis": t_aksesibilitas_website_untuk_bisnis,
  "perencanaan-stok-dan-pembelian-ulang": t_perencanaan_stok_dan_pembelian_ulang,
  "asisten-ai-untuk-bisnis-kecil-tren-realistis": t_asisten_ai_untuk_bisnis_kecil_tren_realistis,
  "checkout-toko-online-mengurangi-keranjang-terbengkalai": t_checkout_toko_online_mengurangi_keranjang_terbengkalai,
  "ar-vr-untuk-bisnis-ritel-yang-realistis": t_ar_vr_untuk_bisnis_ritel_yang_realistis,
  "blog-perusahaan-sebagai-mesin-prospek": t_blog_perusahaan_sebagai_mesin_prospek,
  "infrastruktur-jaringan-dan-perangkat-toko": t_infrastruktur_jaringan_dan_perangkat_toko,
  "integrasi-payment-gateway-website-dan-aplikasi": t_integrasi_payment_gateway_website_dan_aplikasi,
  "master-data-erp-kode-barang-pelanggan-pemasok": t_master_data_erp_kode_barang_pelanggan_pemasok,
  "onboarding-aplikasi-mobile-pengguna-baru": t_onboarding_aplikasi_mobile_pengguna_baru,
  "pengiriman-dan-logistik-toko-online": t_pengiriman_dan_logistik_toko_online,
  "tim-digital-internal-atau-vendor-eksternal": t_tim_digital_internal_atau_vendor_eksternal,
  "uat-pengujian-sebelum-aplikasi-diluncurkan": t_uat_pengujian_sebelum_aplikasi_diluncurkan,
  "website-multibahasa-untuk-pasar-regional": t_website_multibahasa_untuk_pasar_regional,
};
