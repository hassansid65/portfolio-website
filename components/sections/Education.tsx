"use client"
import { motion } from "framer-motion"
import { experience, education } from "@/lib/site-data"

export default function Education() {
  return (
    <section id="education" className="snap-start min-h-screen py-24 flex flex-col justify-center bg-black text-white relative">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-16">
        
        {/* Experience Side */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-10 text-gradient">Experience</h2>
          
          <div className="border-l-2 border-white/10 pl-8 relative space-y-12">
            {experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-black border-2 border-[#00E5FF] glow-cyan"></div>
                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                <p className="text-[#F107A3] font-medium mb-1">{exp.company}</p>
                <span className="text-xs tracking-widest uppercase text-neutral-500 block mb-4">{exp.date}</span>
                <p className="text-neutral-400 leading-relaxed text-sm">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Side */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-10 text-gradient">Education</h2>
          
          <div className="border-l-2 border-white/10 pl-8 relative space-y-12">
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-black border-2 border-[#F107A3] glow-red"></div>
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-[#00E5FF] font-medium mb-1">{edu.school}</p>
                <span className="text-xs tracking-widest uppercase text-neutral-500 block mb-4">{edu.date}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
