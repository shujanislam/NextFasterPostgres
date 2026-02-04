"use client";

import { useEffect } from "react";
import { logHydrationTime } from "./actions";

export default function EffectMeasure() {
  useEffect(() => {
    const nav = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    const end = performance.now();

    // navigationStart is the time origin (0) for performance.now() in modern browsers.
    // Using 0 is effectively "since navigation start".
    const sinceNavStart = end;

    logHydrationTime(sinceNavStart.toFixed(2));
  }, []);

  return null;
}
