"use client"

import { motion } from "framer-motion"
import { experience, education } from "@/lib/site-data"

export default function MobileExperience() {
  return (
    <section id="education" className="relative px-5 py-16">
      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-3xl font-bold mb-8 text-gradient"
        >
          Experience
        </motion.h2>

        <div className="border-l-2 border-white/10 pl-6 ml-2 space-y-9">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: Math.min(idx, 2) * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#00E5FF] glow-cyan" />
              <h3 className="text-lg font-bold text-white mb-1 leading-snug">{exp.title}</h3>
              <p className="text-[#F107A3] font-medium text-sm mb-1">{exp.company}</p>
              <span className="text-[10px] tracking-widest uppercase text-neutral-500 block mb-2.5">
                {exp.date}
              </span>
              <p className="text-neutral-400 leading-relaxed text-[13px]">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-3xl font-bold mb-8 text-gradient"
        >
          Education
        </motion.h2>

        <div className="border-l-2 border-white/10 pl-6 ml-2 space-y-9">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: Math.min(idx, 2) * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#F107A3] glow-red" />
              <h3 className="text-base font-bold text-white mb-1 leading-snug">{edu.degree}</h3>
              <p className="text-[#00E5FF] font-medium text-sm mb-1">{edu.school}</p>
              <span className="text-[10px] tracking-widest uppercase text-neutral-500 block">
                {edu.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
