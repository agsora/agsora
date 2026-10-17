import { siteConfig } from "@/config/site";

/**
 * IndexNow: tells Bing (and Yandex, Seznam, Naver, which share submissions)
 * that URLs changed, so they recrawl without waiting for the sitemap.
 *
 * The key is public by design: search engines verify it by fetching
 * public/{KEY}.txt, which must contain exactly this string. Changing the key
 * means renaming that file too.
 */
export const INDEXNOW_KEY = "504f20a258a5bd02925bdd4816eddcc0";

const ENDPOINT = "https://api.indexnow.org/indexnow";
/** The protocol allows up to 10,000 URLs per request. */
const BATCH = 10_000;

export type IndexNowResult = { submitted: number; status: number[] };

export async function submitToIndexNow(urls: string[]): Promise<IndexNowResult> {
  const host = new URL(siteConfig.url).host;
  const own = [...new Set(urls)].filter((u) => new URL(u).host === host);
  const status: number[] = [];

  for (let i = 0; i < own.length; i += BATCH) {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation: `${siteConfig.url}/${INDEXNOW_KEY}.txt`,
        urlList: own.slice(i, i + BATCH),
      }),
      cache: "no-store",
    });
    // 200 = accepted, 202 = accepted while the key is still being checked.
    if (res.status !== 200 && res.status !== 202) {
      console.error("IndexNow submission failed", res.status, await res.text());
    }
    status.push(res.status);
  }

  return { submitted: own.length, status };
}
