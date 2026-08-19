"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import { navLinks, RESUME_URL, RESUME_FILENAME } from "@/lib/site-data"

export default function MobileNavbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll while the drawer is open so the page behind cannot move.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const go = (id: string) => {
    setOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 250)
  }

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 h-16 transition-colors duration-300 ${
          scrolled ? "glass-effect border-b border-white/10" : "bg-transparent"
        }`}
      >
        <span className="font-bold text-base tracking-wider text-white">
          Hassan&apos;s <span className="text-[#00E5FF]">Portfolio</span>
        </span>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="w-10 h-10 -mr-1 flex items-center justify-center rounded-full border border-white/15 bg-black/40 text-white active:scale-95 transition-transform"
        >
          <Menu size={20} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-[#0A0A0A] border-l border-white/10 flex flex-col"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-white/10 shrink-0">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 -mr-2 flex items-center justify-center rounded-full text-neutral-400 active:scale-95 transition-transform"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                    onClick={() => go(link.toLowerCase())}
                    className="w-full text-left px-6 py-4 text-lg font-medium text-neutral-300 active:text-white active:bg-white/5 transition-colors border-b border-white/5"
                  >
                    {link}
                  </motion.button>
                ))}
              </div>

              <div className="p-5 border-t border-white/10 shrink-0">
                <a
                  href={RESUME_URL}
                  download={RESUME_FILENAME}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#00E5FF] via-[#7B2FF7] to-[#F107A3] active:opacity-90 transition-opacity"
                >
                  Download Resume <Download size={18} />
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
