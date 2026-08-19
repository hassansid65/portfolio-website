"use client"
import { motion } from "framer-motion"
import { skillCategories } from "@/lib/site-data"

export default function Skills() {
  return (
    <section id="skills" className="snap-start min-h-screen py-24 flex flex-col justify-center bg-black text-white relative overflow-hidden skills-glow">
      {/* Red ambient radial glow bottom */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-700/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-[#e53e3e]">My Skills & Expertise</h2>
          <p className="text-neutral-400 tracking-wide text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and specialized capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="glass-effect rounded-2xl p-6 border border-red-500/20 hover:border-red-500/50 transition-colors duration-300 flex flex-col group hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]"
            >
              <h3 className="text-xl font-bold mb-5 text-white group-hover:text-red-400 transition-colors drop-shadow-md">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx} 
                    className="px-3 py-1.5 bg-neutral-900/50 border border-neutral-700/50 rounded-lg text-sm text-neutral-300 hover:text-white hover:border-red-500/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
