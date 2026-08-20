"use client"

import Image from "next/image"

const stats = [
  { value: "10+", label: "Months exp" },
  { value: "5+", label: "AI systems" },
  { value: "LLM", label: "Focus" }
]

export default function MobileAbout() {
  return (
    <section id="about" className="relative py-14 px-[22px]">
      <div data-reveal className="flex items-center gap-4 mb-6">
        <div
          className="w-24 h-24 shrink-0 rounded-[24px] p-0.5"
          style={{ background: "linear-gradient(135deg,#F107A3,#7B2FF7,#00E5FF)" }}
        >
          <div className="relative w-full h-full rounded-[22px] overflow-hidden">
            <Image
              src="/profile.jpeg"
              alt="Hassan Siddiqui"
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-[11px] tracking-[.18em] uppercase text-[#00E5FF] mb-1.5">About me</p>
          <h2 className="text-[26px] font-bold leading-[1.05] text-white">AI Developer</h2>
          <p className="text-[13px] text-[#8a8a90] mt-1.5">Bhopal, India</p>
        </div>
      </div>

      <p data-reveal className="text-[15px] leading-[1.62] text-[#c7c7cc] mb-3.5">
        I build production-grade AI systems powered by Large Language Models, Retrieval Augmented
        Generation (RAG), and real-time voice AI pipelines.
      </p>
      <p data-reveal className="text-[15px] leading-[1.62] text-[#c7c7cc] mb-6">
        My work spans scalable FastAPI backends with LangChain, LangGraph and Milvus, plus AI
        finance automation that turns manual accounting and reconciliation into automated pipelines.
      </p>

      <div data-reveal className="grid grid-cols-3 gap-2.5">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white/[.04] border border-white/[.08] rounded-[18px] px-2 py-4 text-center"
          >
            <div className="text-[22px] font-bold text-white">{stat.value}</div>
            <div className="text-[10px] tracking-[.06em] uppercase text-[#8a8a90] mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
