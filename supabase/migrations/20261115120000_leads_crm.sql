-- Lead CRM fields for the dashboard (dashboard.agsora.tech): segment, deal
-- value, lost reason, notes and a follow-up log. All optional, so existing
-- rows and the public /api/lead insert keep working unchanged.

alter table public.leads
  add column segment text check (segment in ('hot', 'warm', 'cold')),
  add column deal_value bigint check (deal_value is null or deal_value >= 0),
  add column lost_reason text check (char_length(lost_reason) <= 300),
  add column notes text check (char_length(notes) <= 2000),
  -- [{ "at": "<iso timestamp>", "note": "<what was said>" }, ...] in order.
  add column followups jsonb not null default '[]'::jsonb;

comment on column public.leads.followups is 'Follow-up log: array of {at, note}; the count is the follow-up stage.';
