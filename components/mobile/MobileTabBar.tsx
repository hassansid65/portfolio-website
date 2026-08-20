"use client"

import { useEffect, useState } from "react"
import { Home, Briefcase, Star, Mail } from "lucide-react"
import { mobileTabs } from "@/lib/site-data"

const ICONS = { home: Home, projects: Briefcase, skills: Star, contact: Mail }

const ACTIVE = "#00E5FF"
const IDLE = "rgba(255,255,255,.45)"

/**
 * Native-style bottom tab bar. Replaces the hamburger drawer: four destinations
 * are always one thumb-reach away, and the active tab follows the scroll
 * position so the bar doubles as a progress indicator.
 */
export default function MobileTabBar() {
  const [active, setActive] = useState<string>("home")

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        const y = window.scrollY
        let current = "home"
        for (const tab of mobileTabs) {
          const el = document.getElementById(tab.id)
          if (el && el.offsetTop - 130 <= y) current = tab.id
        }
        setActive((prev) => (prev === current ? prev : current))
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const go = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const el = document.getElementById(id)
    if (!el) return
    window.scrollTo({ top: Math.max(0, el.offsetTop - 60), behavior: "smooth" })
  }

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 pt-2 pb-[env(safe-area-inset-bottom)] border-t border-white/[.08]"
      style={{ background: "rgba(10,10,12,.94)" }}
    >
      <div className="flex items-stretch justify-around px-2 pb-2">
        {mobileTabs.map((tab) => {
          const Icon = ICONS[tab.id]
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => go(tab.id)}
              aria-current={isActive ? "true" : undefined}
              className="flex-1 flex flex-col items-center gap-1 py-1.5 bg-transparent border-none cursor-pointer transition-colors"
              style={{ color: isActive ? ACTIVE : IDLE }}
            >
              <Icon size={22} strokeWidth={2} />
              <span className="text-[10px] font-semibold tracking-[.02em]">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
