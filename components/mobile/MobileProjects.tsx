"use client"

import { motion } from "framer-motion"
import { ExternalLink, CalendarDays } from "lucide-react"
import { projects } from "@/lib/site-data"
import { ProjectMedia } from "@/components/ui/project-media"

export default function MobileProjects() {
  return (
    <section id="projects" className="relative px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold mb-2 text-gradient">AI Projects</h2>
        <p className="text-neutral-400 text-sm">Real-world AI systems deployed in production</p>
      </motion.div>

      <div className="space-y-6">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: Math.min(idx, 2) * 0.05 }}
            className="glass-effect rounded-2xl border border-white/10 overflow-hidden"
          >
            <div className="relative">
              <ProjectMedia project={project} className="h-44 w-full" />
              <span className="absolute top-3 right-3 z-30 px-2.5 py-1 text-[9px] uppercase tracking-wider font-bold rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10">
                {project.status}
              </span>
            </div>

            <div className="p-5">
              {project.client && (
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#00E5FF] mb-1.5">
                  {project.client}
                </p>
              )}
              <h3 className="text-xl font-bold text-white mb-1.5">{project.title}</h3>
              <span className="flex items-center gap-1.5 text-[11px] text-neutral-500 mb-3">
                <CalendarDays size={12} /> {project.date}
              </span>
              <p className="text-[14px] text-neutral-300 leading-relaxed mb-4">
                {project.description}
              </p>
              <p className="text-[12px] font-medium text-[#F107A3] mb-4">{project.tech}</p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-white border border-white/15 rounded-full px-4 py-2 active:bg-white/10 transition-colors"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
