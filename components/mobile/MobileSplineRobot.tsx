"use client"

import { SplineScene } from "@/components/ui/splite"

const SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"

/**
 * The Spline robot, sized to fill the hero's artwork layer.
 *
 * Costs roughly 5.2 MB on a phone — 3.9 MB of Three.js runtime plus a 1.35 MB
 * scene — and parsing that much JS is what makes the first seconds of the page
 * stutter on mid-range hardware. Off by default; see USE_3D_ROBOT in
 * MobileHero. SplineScene stops its render loop once the canvas leaves the
 * viewport, so the ongoing cost is limited to the hero.
 *
 * `pointer-events-none` is essential: the canvas swallows touch events, which
 * would otherwise trap vertical scrolling on the hero.
 */
export default function MobileSplineRobot({ onLoad }: { onLoad?: () => void }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <SplineScene scene={SCENE} className="w-full h-full" onLoad={onLoad} fallback={null} />
    </div>
  )
}
