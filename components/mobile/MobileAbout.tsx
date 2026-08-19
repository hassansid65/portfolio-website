"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const stats = [
  { label: "Experience", value: "10+ Months" },
  { label: "Speciality", value: "AI Systems & LLM" },
  { label: "Focus", value: "Production AI" }
]

export default function MobileAbout() {
  return (
    <section id="about" className="relative px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full aspect-square max-w-[300px] mx-auto rounded-3xl overflow-hidden glass-effect p-1.5 mb-8">
          <Image
            src="/profile.jpeg"
            alt="Hassan Siddiqui"
            fill
            sizes="300px"
            className="object-cover rounded-[1.25rem]"
          />
        </div>

        <h2 className="text-3xl font-bold mb-1 text-gradient">Hassan Siddiqui</h2>
        <h3 className="text-base text-neutral-400 mb-5 font-medium">AI Developer</h3>

        <p className="text-[15px] text-neutral-300 leading-relaxed mb-4">
          I am an AI Developer specializing in building production-grade AI systems powered by
          Large Language Models, Retrieval Augmented Generation (RAG), and real-time voice AI
          pipelines.
        </p>
        <p className="text-[15px] text-neutral-300 leading-relaxed mb-8">
          My work spans scalable FastAPI backends with LangChain, LangGraph and Milvus, plus AI
          finance automation that turns manual accounting and reconciliation work into automated
          pipelines.
        </p>

        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-effect rounded-2xl px-2 py-4 text-center flex flex-col justify-center min-h-[92px]"
            >
              <h4 className="text-[9px] text-neutral-500 uppercase tracking-wider mb-1.5">
                {stat.label}
              </h4>
              <p className="text-[#00E5FF] font-bold text-[13px] leading-tight break-words">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
