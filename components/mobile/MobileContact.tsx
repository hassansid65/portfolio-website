"use client"

import { Mail, Phone, MapPin } from "lucide-react"

const INPUT =
  "w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-3.5 text-[16px] text-white placeholder-neutral-500 outline-none focus:border-[#00E5FF] transition-colors"

export default function MobileContact() {
  return (
    <section id="contact" className="relative pt-14 pb-10 px-[22px]">
      <h2 data-reveal className="text-[28px] font-bold leading-[1.05] text-white mb-3">
        Let&apos;s <span className="dc-gradient-text">connect</span>
      </h2>
      <p data-reveal className="text-[15px] leading-[1.6] text-[#a3a3a8] mb-[22px]">
        Interested in AI systems, LLM infrastructure, voice AI, or finance automation? Reach out.
      </p>

      <div data-reveal className="flex flex-col gap-2.5 mb-6">
        <a
          href="mailto:hassaansiddiqui65@gmail.com"
          className="flex items-center gap-3.5 bg-white/[.04] border border-white/[.08] rounded-2xl px-4 py-3.5 active:bg-white/[.07] transition-colors"
        >
          <span className="w-[38px] h-[38px] shrink-0 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
            <Mail size={16} />
          </span>
          <span className="text-[13px] text-[#c7c7cc] break-all">hassaansiddiqui65@gmail.com</span>
        </a>

        <a
          href="tel:+919407589120"
          className="flex items-center gap-3.5 bg-white/[.04] border border-white/[.08] rounded-2xl px-4 py-3.5 active:bg-white/[.07] transition-colors"
        >
          <span className="w-[38px] h-[38px] shrink-0 rounded-full bg-[#F107A3]/10 border border-[#F107A3]/30 flex items-center justify-center text-[#F107A3]">
            <Phone size={16} />
          </span>
          <span className="text-sm text-[#c7c7cc]">+91 9407589120</span>
        </a>

        <div className="flex items-center gap-3.5 bg-white/[.04] border border-white/[.08] rounded-2xl px-4 py-3.5">
          <span className="w-[38px] h-[38px] shrink-0 rounded-full bg-[#7B2FF7]/10 border border-[#7B2FF7]/30 flex items-center justify-center text-[#7B2FF7]">
            <MapPin size={16} />
          </span>
          <span className="text-sm text-[#c7c7cc]">Bhopal, India</span>
        </div>
      </div>

      <form
        data-reveal
        onSubmit={(e) => e.preventDefault()}
        className="bg-white/[.04] border border-white/[.08] rounded-[24px] p-5"
      >
        <h3 className="text-[18px] font-bold text-white mb-[18px]">Send a message</h3>
        <div className="flex flex-col gap-3">
          <input type="text" placeholder="Full name" className={INPUT} />
          <input type="email" inputMode="email" placeholder="Email address" className={INPUT} />
          <textarea rows={4} placeholder="Message..." className={`${INPUT} resize-none`} />
          <button
            type="submit"
            className="w-full h-[52px] rounded-xl border-none font-bold tracking-[.06em] uppercase text-sm text-white active:scale-[.99] transition-transform"
            style={{ background: "linear-gradient(90deg,#00E5FF,#7B2FF7 55%,#F107A3)" }}
          >
            Send message
          </button>
        </div>
      </form>

      <p className="text-center text-xs text-[#5c5c62] mt-8">
        © 2026 Hassan Siddiqui · Built with AI
      </p>
    </section>
  )
}
