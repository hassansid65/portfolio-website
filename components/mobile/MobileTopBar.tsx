"use client"

import { useEffect, useState } from "react"
import { Download } from "lucide-react"
import { RESUME_URL, RESUME_FILENAME } from "@/lib/site-data"

/**
 * Slim app bar. Transparent over the hero so the artwork runs to the top of the
 * screen, then fills in once the page scrolls.
 */
export default function MobileTopBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 inset-x-0 z-30 transition-colors duration-250 pt-[env(safe-area-inset-top)]"
      style={{
        background: scrolled ? "rgba(10,10,12,.9)" : "transparent",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,.08)" : "transparent"}`
      }}
    >
      <div className="h-[50px] flex items-center justify-between px-5">
        <span className="text-base font-bold tracking-[.01em] text-white">
          Hassan<span className="text-[#00E5FF]">.dev</span>
        </span>

        <a
          href={RESUME_URL}
          download={RESUME_FILENAME}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white border border-white/[.16] rounded-full px-3.5 py-[7px] active:bg-white/10 transition-colors"
        >
          <Download size={13} strokeWidth={2.2} />
          CV
        </a>
      </div>
    </header>
  )
}
