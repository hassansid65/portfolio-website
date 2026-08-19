"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Download } from "lucide-react"
import MobileSplineRobot from "./MobileSplineRobot"
import { RESUME_URL, RESUME_FILENAME } from "@/lib/site-data"

/**
 * Full-bleed 3D backdrop with the copy layered over it.
 *
 * Stacking the robot above a text block read as two glued-together boxes with a
 * hard seam. Here the scene fills the viewport, a gradient scrim carries it into
 * black, and the headline sits on top of that fade — one composition instead of
 * two, which is how hero sections with a 3D or video backdrop are normally built.
 */
export default function MobileHero() {
  return (
    <section id="home" className="relative w-full min-h-[100dvh] overflow-hidden">
      {/* --- Backdrop --- */}
      <div className="absolute inset-0 z-0">
        <MobileSplineRobot className="absolute inset-x-0 top-0 h-[72dvh]" />

        {/* Colour wash */}
        <div
          className="glow-orb absolute -top-28 -left-32 w-[440px] h-[440px]"
          style={{ "--orb-color": "rgba(123,47,247,0.25)" } as React.CSSProperties}
        />
        <div
          className="glow-orb absolute top-[38%] -right-36 w-[420px] h-[420px]"
          style={{ "--orb-color": "rgba(241,7,163,0.20)" } as React.CSSProperties}
        />

        {/* Scrim: darkens under the navbar, stays clear across the robot, then
            goes solid black exactly where the headline begins. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 14%, rgba(0,0,0,0) 34%, rgba(0,0,0,0.65) 52%, rgba(0,0,0,0.94) 62%, #000 70%)"
          }}
        />
      </div>

      {/* --- Copy, anchored to the lower half --- */}
      <div className="relative z-10 min-h-[100dvh] flex flex-col justify-end px-5 pb-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md px-3 py-1.5 mb-5">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[#00E5FF] opacity-70 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
            </span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-neutral-200 uppercase">
              AI Developer
            </span>
          </span>

          <h1 className="text-[2.75rem] leading-[1.05] font-bold text-white tracking-tight mb-4">
            Hello, I&apos;m
            <br />
            <span className="text-gradient">Hassan Siddiqui</span>
          </h1>

          <p className="text-[15px] leading-relaxed text-neutral-400 mb-7 max-w-[34ch]">
            Production-grade LLM systems, RAG architectures, Voice AI, and finance data
            automation.
          </p>

          <div className="flex items-center gap-3">
            <a
              href={RESUME_URL}
              download={RESUME_FILENAME}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-[15px] text-white bg-gradient-to-r from-[#00E5FF] via-[#7B2FF7] to-[#F107A3] shadow-[0_0_28px_rgba(123,47,247,0.4)] active:scale-[0.98] transition-transform"
            >
              Download Resume <Download size={17} />
            </a>
            <a
              href="https://linkedin.com/in/hassan-siddiqui-193507279"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md text-white active:bg-white/10 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/hassansid65"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md text-white active:bg-white/10 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col items-center gap-1.5 mt-8">
          <div className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full glow-cyan"
            />
          </div>
          <span className="text-[9px] text-white/35 uppercase tracking-[0.25em]">Scroll</span>
        </div>
      </div>
    </section>
  )
}
