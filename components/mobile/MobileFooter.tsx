"use client"

import { Github, Linkedin, Instagram, Twitter } from "lucide-react"
import { navLinks } from "@/lib/site-data"

const socials = [
  { href: "https://github.com/hassansid65", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com/in/hassan-siddiqui-193507279", label: "LinkedIn", Icon: Linkedin },
  {
    href: "https://www.instagram.com/mr_sid_25?igsh=ZGJkenB2MWljZ296",
    label: "Instagram",
    Icon: Instagram
  },
  { href: "#", label: "Twitter", Icon: Twitter }
]

export default function MobileFooter() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/10 px-5 pt-12 pb-32">
      <h3 className="text-2xl font-bold mb-5 text-white leading-tight">Stay Connected</h3>

      <div className="flex gap-3 mb-10">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href === "#" ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={label}
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-neutral-400 active:bg-white active:text-black transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-10">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm text-neutral-400 active:text-white transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="space-y-2 text-sm text-neutral-400 mb-10">
        <p>
          186/2 Sudama Nagar
          <br />
          Govindpura, Bhopal
        </p>
        <p>
          <a href="tel:+919407589120" className="active:text-[#00E5FF] transition-colors">
            +91 9407589120
          </a>
        </p>
        <p className="break-all">
          <a
            href="mailto:hassaansiddiqui65@gmail.com"
            className="active:text-[#F107A3] transition-colors"
          >
            hassaansiddiqui65@gmail.com
          </a>
        </p>
      </div>

      <div className="border-t border-white/10 pt-6 text-[11px] text-neutral-600">
        <p>© 2026 Hassan Siddiqui. All rights reserved.</p>
      </div>
    </footer>
  )
}
