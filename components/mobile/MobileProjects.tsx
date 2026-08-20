"use client"

import Image from "next/image"
import { Calendar, ExternalLink } from "lucide-react"
import { projects, type Project } from "@/lib/site-data"

/**
 * Card artwork. A brand logo sits contained on its own dark field; screenshots
 * are cropped edge-to-edge and colour-graded so five different product UIs read
 * as one set rather than five clashing palettes.
 */
function CardMedia({ project }: { project: Project }) {
  if (project.brandWallpaper) {
    return (
      <div className="absolute inset-0 bg-[#0d1526] flex items-center justify-center">
        <div className="relative w-[70%] h-[64%]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,.6)]"
          />
        </div>
      </div>
    )
  }

  return (
    <>
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="100vw"
        className="object-cover"
        style={{ filter: "saturate(.72) contrast(1.08) brightness(.9)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg,rgba(0,229,255,.32),rgba(123,47,247,.10) 48%,rgba(241,7,163,.36))",
          mixBlendMode: "overlay"
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(160deg,rgba(10,10,12,.12),rgba(10,10,12,.42))" }}
      />
    </>
  )
}

export default function MobileProjects() {
  return (
    <section id="projects" className="relative py-14 px-[22px]">
      <p data-reveal className="text-[11px] tracking-[.18em] uppercase text-[#00E5FF] mb-2">
        Selected work
      </p>
      <h2 data-reveal className="text-[28px] font-bold leading-[1.05] text-white mb-2">
        AI Projects
      </h2>
      <p data-reveal className="text-sm text-[#8a8a90] mb-[22px]">
        Real-world AI systems deployed in production.
      </p>

      <div className="flex flex-col gap-[18px]">
        {projects.map((project) => (
          <article
            key={project.title}
            data-reveal
            className="bg-white/[.04] border border-white/[.08] rounded-[22px] overflow-hidden"
          >
            <div className="relative h-[172px] overflow-hidden">
              <CardMedia project={project} />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top,rgba(0,0,0,.85),transparent 55%)" }}
              />
              <span className="absolute top-3 right-3 px-2.5 py-[5px] text-[9px] font-bold tracking-[.08em] uppercase rounded-full bg-black/55 border border-white/[.14] text-white">
                {project.statusShort ?? project.status}
              </span>
            </div>

            <div className="p-[18px]">
              {project.client && (
                <p className="text-[11px] tracking-[.16em] uppercase text-[#00E5FF] mb-1.5">
                  {project.client}
                </p>
              )}
              <h3 className="text-[19px] font-bold text-white mb-1.5">{project.title}</h3>
              <p className="flex items-center gap-1.5 text-[11px] text-[#737378] mb-3">
                <Calendar size={12} />
                {project.date}
              </p>
              <p className="text-sm leading-[1.6] text-[#c7c7cc] mb-3.5">{project.description}</p>
              <p className="text-xs font-medium text-[#F107A3] mb-4">{project.tech}</p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-white border border-white/[.16] rounded-full px-4 py-2.5 active:bg-white/10 transition-colors"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
