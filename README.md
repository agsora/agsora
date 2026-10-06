# AG·SORA website

Next.js (App Router) marketing site in Indonesian, English and Chinese.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Environment

Copy `.env.example` to `.env.local`. Everything is optional in development;
features that need a variable quietly do nothing without it.

| Variable | Used for |
|---|---|
| `SUPABASE_URL`, `SUPABASE_SECRET_KEY` | Blog view counts and contact-form leads |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 + conversion events |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console verification |
| `RESEND_API_KEY`, `LEAD_NOTIFY_EMAIL`, `LEAD_FROM_EMAIL` | Email alert for each new lead |

## Database

SQL in `supabase/migrations/` must be applied to the Supabase project
(`supabase db push`, or paste into the SQL editor), including `leads`.

## Lead flow

Contact form → opens WhatsApp with a prefilled message **and** posts the lead
to `/api/lead` (stored in `public.leads`, optional email alert). Price cards,
the estimator and service pages link to `/contact?plan=<id>&from=<page>`.

Conversion events sent to GA4: `generate_lead`, `quote_click`,
`whatsapp_click`, `email_click`. Mark them as key events in GA4.
