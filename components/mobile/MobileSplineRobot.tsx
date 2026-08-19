"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SplineScene } from "@/components/ui/splite"

const SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"

/**
 * The hero robot as a full-bleed backdrop layer.
 *
 * The parent positions this; it only owns the canvas. Spline fits the scene to
 * the canvas, so the wrapper is laid out slightly larger than the clipping box
 * and then cropped — that trims the scene's empty margins and lets the robot
 * fill the frame.
 *
 * `pointer-events-none` is essential: the Spline canvas swallows touch events,
 * which would otherwise trap vertical scrolling on the hero.
 */
export default function MobileSplineRobot({ className = "" }: { className?: string }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Spotlight behind the robot */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
        <div
          className="glow-orb mt-[6%] w-[120%] aspect-square"
          style={{ "--orb-color": "rgba(123,47,247,0.30)" } as React.CSSProperties}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 1.04 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -inset-x-[6%] -top-[4%] bottom-[-2%]">
          <SplineScene
            scene={SCENE}
            className="w-full h-full"
            onLoad={() => setLoaded(true)}
            fallback={null}
          />
        </div>
      </motion.div>

      {/* Placeholder while the 3D scene streams in */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none">
          <div className="w-10 h-10 rounded-full border-2 border-white/15 border-t-[#00E5FF] animate-spin" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
            Loading 3D
          </span>
        </div>
      )}

      {/* Masks the Spline watermark in the canvas corner */}
      <div className="absolute bottom-0 right-0 w-36 h-14 bg-black blur-lg pointer-events-none" />
    </div>
  )
}
