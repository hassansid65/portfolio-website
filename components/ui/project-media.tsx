"use client"

import Image from "next/image"
import type { Project } from "@/lib/site-data"

/** Cards are half-width on desktop, full-bleed on phones. */
const SIZES = "(max-width: 767px) 100vw, 50vw"

/**
 * Project card artwork. Screenshots are cropped edge-to-edge; brand logos are
 * laid over a blurred copy of themselves so a wide logo strip reads as a
 * wallpaper instead of a stretched or cropped image.
 *
 * Everything goes through next/image: the source screenshots are ~1 MB PNGs and
 * were being shipped at full resolution to phones rendering them 170px tall.
 */
export function ProjectMedia({
  project,
  className = ""
}: {
  project: Project
  className?: string
}) {
  if (project.brandWallpaper) {
    return (
      <div className={`relative overflow-hidden bg-[#0d1526] ${className}`}>
        <Image
          src={project.image}
          alt=""
          aria-hidden
          fill
          sizes={SIZES}
          quality={25}
          className="object-cover scale-125 blur-2xl opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1526]/60 via-transparent to-[#7B2FF7]/20" />
        <Image
          src={project.image}
          alt={`${project.client ?? project.title} logo`}
          fill
          sizes={SIZES}
          className="relative z-10 object-contain p-6 drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
        />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes={SIZES}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
    </div>
  )
}
