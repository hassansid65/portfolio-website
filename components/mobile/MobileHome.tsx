"use client"

import { useScrollReveal } from "@/lib/use-scroll-reveal"

import MobileTopBar from "./MobileTopBar"
import MobileTabBar from "./MobileTabBar"
import MobileHero from "./MobileHero"
import MobileAbout from "./MobileAbout"
import MobileSkills from "./MobileSkills"
import MobileProjects from "./MobileProjects"
import MobileExperience from "./MobileExperience"
import MobileTestimonials from "./MobileTestimonials"
import MobileContact from "./MobileContact"

/**
 * The mobile site. Fully independent of the desktop tree: no scroll snapping,
 * no fixed-height sections, no horizontal layouts, and no motion library —
 * section reveals are CSS transitions driven by one IntersectionObserver.
 *
 * Chrome is a transparent app bar at the top and a fixed tab bar at the bottom,
 * so the padding here reserves room for both plus the device safe areas.
 */
export default function MobileHome() {
  useScrollReveal()

  return (
    <div
      className="mobile-view dc-grain relative w-full max-w-full overflow-x-hidden bg-[#0a0a0c]"
      style={{
        paddingTop: "calc(50px + env(safe-area-inset-top))",
        paddingBottom: "calc(96px + env(safe-area-inset-bottom))"
      }}
    >
      <MobileTopBar />

      <MobileHero />
      <MobileAbout />
      <MobileSkills />
      <MobileProjects />
      <MobileExperience />
      <MobileTestimonials />
      <MobileContact />

      <MobileTabBar />
    </div>
  )
}
