"use client"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { navLinks } from "@/lib/site-data"

export default function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (previous && latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all glass-effect border-b-0"
    >
      <div className="flex-1 font-bold text-xl tracking-widest text-white">
        Hassan's <span className="text-[#00E5FF]">Portfolio</span>
      </div>

      <div className="hidden md:flex gap-8 items-center bg-black/40 backdrop-blur-xl px-8 py-3 rounded-full border border-white/10">
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-neutral-300 hover:text-white hover:glow-cyan transition-all">
            {link}
          </a>
        ))}
      </div>

      <div className="flex-1 flex justify-end">
        <button className="px-6 py-2 rounded-full border border-[#F107A3] text-[#F107A3] font-medium hover:bg-[#F107A3]/10 transition-colors text-sm">
          Stop Music
        </button>
      </div>
    </motion.nav>
  )
}
