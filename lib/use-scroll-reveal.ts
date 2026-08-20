"use client"

import { useEffect } from "react"

/**
 * Fades `[data-reveal]` elements in as they scroll into view.
 *
 * One observer for the whole mobile tree rather than a motion component per
 * element: the reveal is a transition on opacity and transform, so the browser
 * runs it on the compositor and React never re-renders for it.
 *
 * Elements ship visible in the server HTML and are only hidden once this runs,
 * so the page still reads correctly if JS is slow or disabled.
 */
export function useScrollReveal(deps: unknown[] = []) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
    if (nodes.length === 0) return

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((el) => el.classList.add("is-revealed"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-revealed")
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    )

    nodes.forEach((el) => {
      el.classList.add("reveal-armed")
      observer.observe(el)
    })

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
