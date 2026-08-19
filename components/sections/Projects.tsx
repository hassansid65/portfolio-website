"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ExternalLink, Github, CalendarDays } from "lucide-react"
import { projects } from "@/lib/site-data"
import { ProjectMedia } from "@/components/ui/project-media"

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="snap-start min-h-screen py-24 flex flex-col justify-center bg-black text-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">AI Projects</h2>
          <p className="text-neutral-400 tracking-wide">Real-world AI systems deployed in production</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured: full-width, media beside the copy so the row stays compact */}
          {featured.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2"
            >
              <Card className="glass-effect border-white/10 overflow-hidden group hover:border-[#00E5FF]/50 transition-colors duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-2/5 shrink-0">
                    <ProjectMedia project={project} className="h-44 md:h-full w-full min-h-[176px]" />
                    <div className="absolute top-4 right-4 z-30">
                      <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 p-6 flex flex-col justify-center">
                    {project.client && (
                      <p className="text-xs uppercase tracking-[0.18em] text-[#00E5FF] mb-2">{project.client}</p>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">
                      {project.title}
                    </h3>
                    <span className="flex items-center gap-1.5 text-xs text-neutral-500 mb-3">
                      <CalendarDays size={13} /> {project.date}
                    </span>
                    <p className="text-neutral-300 mb-4 leading-relaxed">{project.description}</p>
                    <p className="text-sm font-medium text-[#F107A3] mb-4">{project.tech}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors w-fit"
                      >
                        <ExternalLink size={16} /> Visit Plainflow
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          {rest.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="glass-effect border-white/10 overflow-hidden group hover:border-[#00E5FF]/50 transition-colors duration-300">
                <div className="relative h-48 w-full">
                  <ProjectMedia project={project} className="h-full w-full" />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-white/10 text-white backdrop-blur-md">
                      {project.status}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">{project.title}</CardTitle>
                  <span className="flex items-center gap-1.5 text-xs text-neutral-500 pt-1">
                    <CalendarDays size={13} /> {project.date}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300 mb-4">{project.description}</p>
                  <p className="text-sm font-medium text-[#F107A3]">{project.tech}</p>
                </CardContent>
                <CardFooter className="flex gap-4">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  ) : (
                    <button className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </button>
                  )}
                  <button className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors">
                    <Github size={16} /> GitHub
                  </button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
