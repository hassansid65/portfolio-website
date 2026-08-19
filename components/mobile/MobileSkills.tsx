"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { skillCategories } from "@/lib/site-data"

/**
 * Nine skill categories as flat cards would be an endless scroll on a phone, so
 * they collapse into an accordion with the first one open.
 */
export default function MobileSkills() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="skills" className="relative px-5 py-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="glow-orb absolute top-[18%] left-1/2 -translate-x-1/2 w-[460px] h-[460px]"
          style={{ "--orb-color": "rgba(185,28,28,0.16)" } as React.CSSProperties}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-2 text-[#e53e3e]">My Skills &amp; Expertise</h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            A comprehensive overview of my technical stack and specialized capabilities.
          </p>
        </motion.div>

        <div className="space-y-3">
          {skillCategories.map((category, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={category.title}
                className={`glass-effect rounded-2xl border overflow-hidden transition-colors ${
                  isOpen ? "border-red-500/40" : "border-white/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left"
                >
                  <span className="text-[15px] font-bold text-white leading-snug">
                    {category.title}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-neutral-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-red-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-2 px-4 pb-4">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-neutral-900/60 border border-neutral-700/50 rounded-lg text-[12px] text-neutral-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
