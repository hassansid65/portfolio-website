"use client"

import { useState } from "react"
import { Github, Linkedin, Download } from "lucide-react"
import MobileHeroVisual from "./MobileHeroVisual"
import MobileSplineRobot from "./MobileSplineRobot"
import { RESUME_URL, RESUME_FILENAME } from "@/lib/site-data"
import { useViewport } from "@/lib/use-viewport"

/**
 * The Spline robot in the hero, as drawn in the design comp. Costs ~5.2 MB and a
 * WebGL loop on the phone GPU (see MobileSplineRobot); set to false to fall back
 * to the CSS artwork, which is what renders underneath while the scene loads.
 */
const USE_3D_ROBOT = true

/**
 * Full-bleed artwork with the copy layered over it: the visual owns the upper
 * two thirds, a scrim carries it into the page background, and the headline
 * sits on the fade so the two read as one composition.
 */
export default function MobileHero() {
  const viewport = useViewport()
  const [robotReady, setRobotReady] = useState(false)

  // Only mount once the viewport is confirmed mobile. Before hydration both
  // trees render (CSS decides which is painted), and without this a desktop
  // visitor would start downloading the phone's copy of the scene too.
  const showRobot = USE_3D_ROBOT && viewport === "mobile"

  return (
    <section
      id="home"
      className="relative flex flex-col justify-end min-h-[672px] px-[22px] pb-10 overflow-hidden"
    >
      {/* Artwork layer */}
      <div aria-hidden className="absolute -top-2 inset-x-0 h-[452px] z-[1] pointer-events-none">
        <div
          className="absolute top-5 left-1/2 -translate-x-1/2 w-[360px] h-[360px] rounded-full"
          style={{ background: "radial-gradient(closest-side,rgba(241,7,163,.30),transparent 70%)" }}
        />
        <div
          className="absolute top-[150px] -right-[70px] w-[300px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(closest-side,rgba(0,229,255,.18),transparent 70%)" }}
        />
        {/* The CSS artwork holds the frame so the hero is never empty; it fades
            out once the 3D scene has actually finished loading. */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: robotReady ? 0 : 1 }}
        >
          <MobileHeroVisual />
        </div>
        {showRobot && <MobileSplineRobot onLoad={() => setRobotReady(true)} />}
      </div>

      {/* Fades the artwork into the background exactly where the copy starts */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom,transparent 0%,transparent 42%,rgba(10,10,12,.55) 60%,rgba(10,10,12,.9) 72%,#0a0a0c 82%)"
        }}
      />

      <div className="relative z-[3] dc-float-in">
        <span className="inline-flex items-center gap-2 border border-white/[.14] bg-white/[.05] rounded-full px-3 py-1.5 mb-5">
          <span className="dc-pulse w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
          <span className="text-[10px] font-semibold tracking-[.2em] uppercase text-[#d4d4d4] whitespace-nowrap">
            Available for work
          </span>
        </span>

        <h1 className="text-[44px] leading-[1.03] font-bold tracking-[-.02em] text-white mb-3.5">
          Hello, I&apos;m
          <br />
          <span className="dc-gradient-text">Hassan Siddiqui</span>
        </h1>

        <p className="text-[15px] leading-[1.55] text-[#a3a3a3] mb-[26px] max-w-[34ch]">
          Production-grade LLM systems, RAG architectures, Voice AI, and finance data automation.
        </p>

        <div className="flex items-center gap-2.5">
          <a
            href={RESUME_URL}
            download={RESUME_FILENAME}
            className="flex-1 flex items-center justify-center gap-2 h-[52px] rounded-full font-semibold text-[15px] text-white active:scale-[.98] transition-transform"
            style={{
              background: "linear-gradient(90deg,#00E5FF,#7B2FF7 55%,#F107A3)",
              boxShadow: "0 8px 28px rgba(123,47,247,.4)"
            }}
          >
            Download CV
            <Download size={17} strokeWidth={2.2} />
          </a>
          <a
            href="https://linkedin.com/in/hassan-siddiqui-193507279"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-[52px] h-[52px] shrink-0 flex items-center justify-center rounded-full border border-white/[.14] bg-white/[.04] text-white active:bg-white/10 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/hassansid65"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-[52px] h-[52px] shrink-0 flex items-center justify-center rounded-full border border-white/[.14] bg-white/[.04] text-white active:bg-white/10 transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
