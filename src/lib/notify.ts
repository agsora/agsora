import "server-only";

/**
 * Instant notifications to the owner's phone, next to the emails.
 *
 * - Telegram (free): TELEGRAM_BOT_TOKEN from @BotFather and TELEGRAM_CHAT_ID (your chat with the bot).
 * - WhatsApp via Fonnte (paid gateway, optional): FONNTE_TOKEN and OWNER_WHATSAPP (e.g. 62823...).
 *
 * Each channel is used only when its variables are set; failures never break the action that triggered them.
 */
export async function pushOwner(text: string): Promise<void> {
  const jobs: Promise<unknown>[] = [];

  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChat = process.env.TELEGRAM_CHAT_ID;
  if (tgToken && tgChat) {
    jobs.push(
      fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: tgChat, text: text.slice(0, 4000), disable_web_page_preview: true }),
      }),
    );
  }

  const fonnte = process.env.FONNTE_TOKEN;
  const ownerWa = process.env.OWNER_WHATSAPP;
  if (fonnte && ownerWa) {
    const body = new URLSearchParams({ target: ownerWa, message: text.slice(0, 4000) });
    jobs.push(fetch("https://api.fonnte.com/send", { method: "POST", headers: { Authorization: fonnte }, body }));
  }

  await Promise.allSettled(jobs);
}
