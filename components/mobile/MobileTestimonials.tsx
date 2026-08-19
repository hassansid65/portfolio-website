"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { reviews } from "@/lib/site-data"

export default function MobileTestimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const active = reviews[index]

  const go = (step: number) => {
    setDirection(step)
    setIndex((prev) => (prev + step + reviews.length) % reviews.length)
  }

  return (
    <section id="testimonials" className="relative px-5 py-16 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[320px] h-[320px] rounded-full bg-blue-900/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-8">
          What People <span className="text-gradient">Say</span>
        </h2>

        {/* Fixed height keeps the card from jumping as quotes change length */}
        <div className="relative min-h-[420px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={active.id}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1)
                else if (info.offset.x > 60) go(-1)
              }}
              className="glass-effect rounded-3xl border border-white/10 p-6 cursor-grab active:cursor-grabbing"
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={active.thumbnailSrc}
                  alt={active.name}
                  className="w-14 h-14 rounded-2xl object-cover border border-white/10"
                />
                <div>
                  <p className="text-[11px] font-medium text-[#00E5FF] uppercase tracking-wider">
                    {active.affiliation}
                  </p>
                  <h3 className="text-lg font-bold text-white">{active.name}</h3>
                </div>
              </div>

              <Quote size={28} className="text-white/15 mb-3" />
              <blockquote className="text-[17px] leading-relaxed font-medium text-neutral-200">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            {reviews.map((review, i) => (
              <button
                key={review.id}
                onClick={() => {
                  setDirection(i > index ? 1 : -1)
                  setIndex(i)
                }}
                aria-label={`Show review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-[#00E5FF]" : "w-1.5 bg-white/25"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="w-11 h-11 rounded-full border border-white/20 bg-black/50 text-white flex items-center justify-center active:bg-white/10 transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next review"
              className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center active:bg-neutral-200 transition-colors"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
