"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

/** Records where the visitor came from on their first page view (see lib/attribution). Renders nothing. */
export function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
