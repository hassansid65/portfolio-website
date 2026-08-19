"use client"

import { useEffect, useState } from "react"

/**
 * "unknown" is the server / pre-hydration state. While unknown, both the desktop
 * and mobile trees render and are gated with Tailwind's `md:` classes so the
 * first paint is already correct. Once resolved, only the matching tree stays
 * mounted — heavy things (the Spline robot) therefore load exactly once.
 */
export type Viewport = "unknown" | "mobile" | "desktop"

/** Matches Tailwind's `md` breakpoint, so CSS gating and JS gating agree. */
const MOBILE_QUERY = "(max-width: 767px)"

export function useViewport(): Viewport {
  const [viewport, setViewport] = useState<Viewport>("unknown")

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY)
    const apply = () => setViewport(mql.matches ? "mobile" : "desktop")

    apply()
    mql.addEventListener("change", apply)
    return () => mql.removeEventListener("change", apply)
  }, [])

  return viewport
}

export function useIsMobile() {
  return useViewport() === "mobile"
}
