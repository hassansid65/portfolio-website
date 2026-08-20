"use client"
import { m } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="snap-start min-h-screen py-24 flex flex-col justify-center bg-black text-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-2/5 w-full flex justify-center">
            <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] rounded-3xl overflow-hidden glass-effect glow-cyan p-2">
              <Image src="/profile.jpeg" alt="Hassan Siddiqui" fill sizes="(max-width: 1023px) 450px, 500px" priority className="object-cover rounded-2xl" />
            </div>
          </div>
          
          <div className="lg:w-3/5 w-full">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Hassan Siddiqui</h2>
            <h3 className="text-xl text-neutral-400 mb-8 font-medium">AI Developer</h3>
            <p className="text-neutral-300 leading-relaxed mb-10 text-lg">
              I am an AI Developer specializing in building production-grade AI systems powered by Large Language Models, Retrieval Augmented Generation (RAG), and real-time voice AI pipelines.
              <br/><br/>
              My work focuses on designing scalable backend architectures using FastAPI, LangChain, LangGraph, and vector databases such as Milvus to enable intelligent, context-aware applications. Alongside this, I build AI finance automation that turns manual accounting and reconciliation work into automated data pipelines. I am passionate about building real-time AI products that interact with users naturally through text, voice, and avatars.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-effect p-6 rounded-2xl text-center">
                <h4 className="text-sm text-neutral-400 uppercase tracking-wider mb-2">Experience</h4>
                <p className="text-[#00E5FF] font-bold text-xl">10+ Months</p>
              </div>
              <div className="glass-effect p-6 rounded-2xl text-center">
                <h4 className="text-sm text-neutral-400 uppercase tracking-wider mb-2">Speciality</h4>
                <p className="text-[#00E5FF] font-bold text-xl">AI Systems & LLM</p>
              </div>
              <div className="glass-effect p-6 rounded-2xl text-center">
                <h4 className="text-sm text-neutral-400 uppercase tracking-wider mb-2">Focus</h4>
                <p className="text-[#00E5FF] font-bold text-xl">Production AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
