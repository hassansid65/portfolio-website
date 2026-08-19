"use client"
import { motion } from "framer-motion"
import { RainbowButton } from "@/components/ui/rainbow-borders-button"

export default function Contact() {
  return (
    <section id="contact" className="snap-start min-h-screen py-24 flex flex-col justify-center bg-black text-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl font-bold mb-4 text-gradient">Let's Connect</h2>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed max-w-md">
              Interested in AI systems, LLM infrastructure, or voice AI solutions? Feel free to reach out.
            </p>
            <div className="mb-10 w-[80%] h-64 rounded-3xl overflow-hidden glass-effect">
              <img
                src="/astronaut-guitar.png"
                alt="Astronaut playing guitar"
                className="w-full h-full object-cover opacity-80 mix-blend-screen"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <form className="glass-effect p-8 md:p-12 rounded-3xl w-full max-w-lg border-white/5 mx-auto">
              <h3 className="text-2xl font-bold mb-8">Send Message</h3>

              <div className="space-y-6">
                <div>
                  <input type="text" placeholder="Full Name" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#00E5FF] transition-colors text-white placeholder-neutral-500" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#00E5FF] transition-colors text-white placeholder-neutral-500" />
                </div>
                <div>
                  <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#F107A3] transition-colors text-white placeholder-neutral-500 appearance-none">
                    <option value="" disabled selected>Select Project Type</option>
                    <option value="rag">RAG Architecture</option>
                    <option value="llm">LLM Systems</option>
                    <option value="voice">Voice AI</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea rows={4} placeholder="Message..." className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#F107A3] transition-colors text-white placeholder-neutral-500 resize-none"></textarea>
                </div>

                <RainbowButton className="w-full bg-black text-white font-bold text-lg rounded-xl py-4 hover:opacity-90 transition-opacity uppercase tracking-wider">
                  Send Message
                </RainbowButton>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
