import type { Block } from "@/config/blog";
import { translations as t_dari_ide_ke_aplikasi_proses_membangun_software } from "./dari-ide-ke-aplikasi-proses-membangun-software";
import { translations as t_kapan_waktu_tepat_menerapkan_erp } from "./kapan-waktu-tepat-menerapkan-erp";
import { translations as t_kenapa_bisnis_butuh_website_2026 } from "./kenapa-bisnis-butuh-website-2026";
import { translations as t_tanda_bisnis_siap_punya_aplikasi_sendiri } from "./tanda-bisnis-siap-punya-aplikasi-sendiri";
import { translations as t_tren_teknologi_bisnis_tahun_ini } from "./tren-teknologi-bisnis-tahun-ini";

export type BodyTranslations = { en: Block[]; zh: Block[] };

/**
 * Optional English/Chinese article bodies, keyed by slug. Only slugs authored
 * with translations appear here — posts without an entry fall back to the
 * Indonesian body from ./bodies for every locale, same as before this map
 * existed.
 */
export const bodiesI18n: Record<string, BodyTranslations> = {
  "dari-ide-ke-aplikasi-proses-membangun-software": t_dari_ide_ke_aplikasi_proses_membangun_software,
  "kapan-waktu-tepat-menerapkan-erp": t_kapan_waktu_tepat_menerapkan_erp,
  "kenapa-bisnis-butuh-website-2026": t_kenapa_bisnis_butuh_website_2026,
  "tanda-bisnis-siap-punya-aplikasi-sendiri": t_tanda_bisnis_siap_punya_aplikasi_sendiri,
  "tren-teknologi-bisnis-tahun-ini": t_tren_teknologi_bisnis_tahun_ini,
};
