/**
 * The AG·SORA sales agent programme. One place for the terms, so the careers page, the dashboard
 * commission report and the agency agreement always say the same thing.
 */
export const AGENT_PROGRAM = {
  /** Commission when the month's collected revenue reaches the target. */
  rateFull: 10,
  /** Commission when the target is not reached. */
  rateReduced: 5,
  /** Monthly revenue target in rupiah (collected payments, before VAT). */
  monthlyTarget: 100_000_000,
  /** Commission is paid by this day of the following month. */
  payoutDay: 10,
  /** A client counts as the agent's when the agent registered the lead and the client signs within this many days. */
  attributionDays: 90,
} as const;

/** Commission for one month: full rate at or above target, reduced rate below it. */
export function commissionFor(revenue: number, rates: { rate_full: number; rate_reduced: number; monthly_target: number } = {
  rate_full: AGENT_PROGRAM.rateFull,
  rate_reduced: AGENT_PROGRAM.rateReduced,
  monthly_target: AGENT_PROGRAM.monthlyTarget,
}) {
  const hit = revenue >= Number(rates.monthly_target);
  const rate = hit ? Number(rates.rate_full) : Number(rates.rate_reduced);
  return { hit, rate, amount: Math.round((revenue * rate) / 100) };
}
