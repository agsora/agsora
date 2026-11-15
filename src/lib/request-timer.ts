import "server-only";
import { cache } from "react";

/** When the current request started rendering (memoised per request), so the dashboard can show its server time. */
export const requestStart = cache(() => ({ at: Date.now() }));

/** Milliseconds since requestStart() was first called in this request. */
export const elapsedMs = () => Date.now() - requestStart().at;
