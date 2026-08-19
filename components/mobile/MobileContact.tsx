"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function MobileContact() {
  return (
    <section id="contact" className="relative px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-3 text-gradient">Let&apos;s Connect</h2>
        <p className="text-neutral-400 text-[15px] leading-relaxed mb-7">
          Interested in AI systems, LLM infrastructure, voice AI, or finance automation? Feel free
          to reach out.
        </p>

        <div className="space-y-3 mb-8">
          <a
            href="mailto:hassaansiddiqui65@gmail.com"
            className="flex items-center gap-3 glass-effect rounded-2xl px-4 py-3.5 active:bg-white/[0.06] transition-colors"
          >
            <span className="w-9 h-9 shrink-0 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
              <Mail size={16} />
            </span>
            <span className="text-[13px] text-neutral-300 break-all">
              hassaansiddiqui65@gmail.com
            </span>
          </a>
          <a
            href="tel:+919407589120"
            className="flex items-center gap-3 glass-effect rounded-2xl px-4 py-3.5 active:bg-white/[0.06] transition-colors"
          >
            <span className="w-9 h-9 shrink-0 rounded-full bg-[#F107A3]/10 border border-[#F107A3]/30 flex items-center justify-center text-[#F107A3]">
              <Phone size={16} />
            </span>
            <span className="text-[14px] text-neutral-300">+91 9407589120</span>
          </a>
          <div className="flex items-center gap-3 glass-effect rounded-2xl px-4 py-3.5">
            <span className="w-9 h-9 shrink-0 rounded-full bg-[#7B2FF7]/10 border border-[#7B2FF7]/30 flex items-center justify-center text-[#7B2FF7]">
              <MapPin size={16} />
            </span>
            <span className="text-[14px] text-neutral-300">Bhopal, India</span>
          </div>
        </div>

        <form
          className="glass-effect p-5 rounded-3xl border-white/5"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-xl font-bold mb-5">Send Message</h3>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-[16px] outline-none focus:border-[#00E5FF] transition-colors text-white placeholder-neutral-500"
            />
            <input
              type="email"
              inputMode="email"
              placeholder="Email Address"
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-[16px] outline-none focus:border-[#00E5FF] transition-colors text-white placeholder-neutral-500"
            />
            <select
              defaultValue=""
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-[16px] outline-none focus:border-[#F107A3] transition-colors text-white appearance-none"
            >
              <option value="" disabled>
                Select Project Type
              </option>
              <option value="rag">RAG Architecture</option>
              <option value="llm">LLM Systems</option>
              <option value="voice">Voice AI</option>
              <option value="finance">Finance Automation</option>
              <option value="other">Other</option>
            </select>
            <textarea
              rows={4}
              placeholder="Message..."
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-[16px] outline-none focus:border-[#F107A3] transition-colors text-white placeholder-neutral-500 resize-none"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#00E5FF] via-[#7B2FF7] to-[#F107A3] active:scale-[0.99] transition-transform"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  )
}
