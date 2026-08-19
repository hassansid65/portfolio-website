"use client"

import { useViewport } from "@/lib/use-viewport"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Education from "@/components/sections/Education"
import Testimonials from "@/components/sections/Testimonials"
import Contact from "@/components/sections/Contact"
import MobileHome from "@/components/mobile/MobileHome"
import Chatbot from "@/components/chatbot"

/**
 * Desktop and mobile are two separate trees rather than one responsive one.
 *
 * Before hydration the viewport is unknown, so both render and Tailwind's `md:`
 * classes decide what is painted — the first frame is already correct and there
 * is no layout flash. Once the media query resolves, the losing tree unmounts
 * entirely, so only one of them ever runs animations or loads the 3D scene.
 */
export default function ResponsiveHome() {
  const viewport = useViewport()
  const pending = viewport === "unknown"

  return (
    <>
      {viewport !== "mobile" && (
        <div className={pending ? "hidden md:block" : undefined}>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}

      {viewport !== "desktop" && (
        <div className={pending ? "md:hidden" : undefined}>
          <MobileHome />
        </div>
      )}

      <Chatbot />
    </>
  )
}
