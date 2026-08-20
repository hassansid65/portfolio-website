"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { mobileSkillCategories } from "@/lib/site-data"

/**
 * Nine categories as flat cards would be an endless scroll on a phone, so they
 * collapse into an accordion with the first one open. Only one is open at a
 * time, which keeps the section a predictable length.
 */
export default function MobileSkills() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section id="skills" className="relative py-14 px-[22px] overflow-hidden">
      <div
        aria-hidden
        className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[360px] h-[360px] rounded-full z-0 pointer-events-none"
        style={{ background: "radial-gradient(closest-side,rgba(229,62,62,.14),transparent 70%)" }}
      />

      <div className="relative z-[1]">
        <p data-reveal className="text-[11px] tracking-[.18em] uppercase text-[#F107A3] mb-2">
          Toolbox
        </p>
        <h2 data-reveal className="text-[28px] font-bold leading-[1.05] text-white mb-2">
          Skills &amp; Expertise
        </h2>
        <p data-reveal className="text-sm text-[#8a8a90] leading-[1.5] mb-[22px]">
          A comprehensive overview of my technical stack and specialized capabilities.
        </p>

        <div className="flex flex-col gap-2.5">
          {mobileSkillCategories.map((category, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={category.title}
                data-reveal
                className="bg-white/[.04] rounded-[18px] overflow-hidden border transition-colors"
                style={{ borderColor: isOpen ? "rgba(241,7,163,.4)" : "rgba(255,255,255,.08)" }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-3 p-4 bg-transparent border-none cursor-pointer text-left"
                >
                  <span className="text-[15px] font-semibold text-white leading-[1.3]">
                    {category.title}
                  </span>
                  <ChevronDown
                    size={18}
                    strokeWidth={2.4}
                    className="shrink-0 transition-transform duration-300"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      color: isOpen ? "#F107A3" : "rgba(255,255,255,.5)"
                    }}
                  />
                </button>

                {isOpen && (
                  <div className="flex flex-wrap gap-2 px-4 pb-4">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-[7px] bg-white/[.05] border border-white/[.08] rounded-[10px] text-xs text-[#c7c7cc]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
