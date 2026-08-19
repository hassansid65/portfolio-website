"use client"

import MobileNavbar from "./MobileNavbar"
import MobileHero from "./MobileHero"
import MobileAbout from "./MobileAbout"
import MobileSkills from "./MobileSkills"
import MobileProjects from "./MobileProjects"
import MobileExperience from "./MobileExperience"
import MobileTestimonials from "./MobileTestimonials"
import MobileContact from "./MobileContact"
import MobileFooter from "./MobileFooter"

/**
 * The mobile site. Fully independent of the desktop tree: no scroll snapping,
 * no fixed-height sections, no horizontal layouts — everything flows in a
 * single column sized to the viewport.
 */
export default function MobileHome() {
  return (
    <div className="mobile-view relative w-full max-w-full overflow-x-hidden bg-black">
      <MobileNavbar />
      <MobileHero />
      <MobileAbout />
      <MobileSkills />
      <MobileProjects />
      <MobileExperience />
      <MobileTestimonials />
      <MobileContact />
      <MobileFooter />
    </div>
  )
}
