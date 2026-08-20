"use client"

import { useRef, useState } from "react"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { reviews } from "@/lib/site-data"

export default function MobileTestimonials() {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const active = reviews[index]

  const go = (step: number) => setIndex((prev) => (prev + step + reviews.length) % reviews.length)

  return (
    <section id="testimonials" className="relative py-14 px-[22px] overflow-hidden">
      <div
        aria-hidden
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full z-0 pointer-events-none"
        style={{ background: "radial-gradient(closest-side,rgba(30,58,138,.22),transparent 70%)" }}
      />

      <div className="relative z-[1]">
        <h2 data-reveal className="text-[28px] font-bold leading-[1.05] text-white mb-[22px]">
          What people <span className="dc-gradient-text">say</span>
        </h2>

        <div
          data-reveal
          className="bg-white/[.04] border border-white/[.08] rounded-[24px] p-6 min-h-[300px]"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX
          }}
          onTouchEnd={(e) => {
            const start = touchStartX.current
            touchStartX.current = null
            if (start === null) return
            const delta = e.changedTouches[0].clientX - start
            if (delta < -60) go(1)
            else if (delta > 60) go(-1)
          }}
        >
          <div className="flex items-center gap-3.5 mb-[18px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.thumbnailSrc}
              alt={active.name}
              loading="lazy"
              decoding="async"
              className="w-[52px] h-[52px] rounded-2xl object-cover border border-white/10"
            />
            <div>
              <p className="text-[11px] font-medium tracking-[.1em] uppercase text-[#00E5FF] mb-[3px]">
                {active.affiliation}
              </p>
              <h3 className="text-[17px] font-bold text-white">{active.name}</h3>
            </div>
          </div>

          <Quote size={30} className="text-white/[.14] mb-2.5" fill="currentColor" strokeWidth={0} />
          <blockquote className="text-[17px] leading-[1.55] font-medium text-[#e5e5e7]">
            &ldquo;{active.quote}&rdquo;
          </blockquote>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            {reviews.map((review, i) => (
              <button
                key={review.id}
                onClick={() => setIndex(i)}
                aria-label={`Show review ${i + 1}`}
                className="h-1.5 rounded-full border-none cursor-pointer transition-all duration-300"
                style={{
                  width: i === index ? "26px" : "6px",
                  background: i === index ? "#00E5FF" : "rgba(255,255,255,.25)"
                }}
              />
            ))}
          </div>

          <div className="flex gap-2.5">
            <button
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="w-11 h-11 rounded-full border border-white/20 bg-black/40 text-white flex items-center justify-center active:bg-white/10 transition-colors"
            >
              <ArrowLeft size={18} strokeWidth={2.2} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next review"
              className="w-11 h-11 rounded-full border-none bg-white text-black flex items-center justify-center active:bg-neutral-200 transition-colors"
            >
              <ArrowRight size={18} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
