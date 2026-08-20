"use client"

/**
 * Hero artwork — an "AI core" built entirely from CSS.
 *
 * Stands in for the Spline robot on phones. Everything animates `transform` and
 * `opacity` only, so the compositor handles it without a layout or paint per
 * frame, and it costs zero bytes over the wire against the robot's ~5.2 MB.
 */
export default function MobileHeroVisual() {
  return (
    <div className="absolute inset-0 grid place-items-center pointer-events-none">
      <div className="relative grid place-items-center w-[19rem] h-[19rem]">
        <span className="hv-ring hv-spin-slow absolute w-[19rem] h-[19rem] rounded-full border border-white/[0.07] border-t-[#00E5FF]/60 border-r-[#7B2FF7]/30" />
        <span className="hv-ring hv-spin-rev absolute w-[14rem] h-[14rem] rounded-full border border-white/[0.06] border-b-[#F107A3]/55 border-l-[#7B2FF7]/25" />
        <span className="hv-ring hv-spin-mid absolute w-[9.5rem] h-[9.5rem] rounded-full border border-dashed border-white/[0.10]" />

        <span className="hv-orbit hv-spin-slow absolute w-[19rem] h-[19rem]">
          <span className="absolute left-1/2 top-0 w-2 h-2 -translate-x-1/2 rounded-full bg-[#00E5FF] shadow-[0_0_12px_#00E5FF]" />
        </span>
        <span className="hv-orbit hv-spin-rev absolute w-[14rem] h-[14rem]">
          <span className="absolute left-1/2 top-0 w-1.5 h-1.5 -translate-x-1/2 rounded-full bg-[#F107A3] shadow-[0_0_12px_#F107A3]" />
        </span>

        <span className="hv-core relative w-[6.5rem] h-[6.5rem] rounded-full bg-gradient-to-br from-[#00E5FF] via-[#7B2FF7] to-[#F107A3]" />
      </div>
    </div>
  )
}
