"use client"
import { Github, Linkedin, Instagram, Twitter, Send, Sun, Moon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="snap-start w-full bg-[#050505] text-white py-16 border-t border-white/10 relative z-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Stay Connected */}
          <div className="lg:pr-8">
            <h3 className="text-3xl font-bold mb-6 text-white leading-tight">
              Stay<br />Connected
            </h3>
            <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border border-white/20 rounded-full py-3 px-5 pr-12 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#7B2FF7] transition-colors"
              />
              <button 
                type="button" 
                onClick={() => alert("This feature is coming soon")}
                className="absolute right-1.5 top-1.5 bottom-1.5 w-9 flex items-center justify-center bg-white text-black rounded-full hover:bg-neutral-200 transition-colors"
                aria-label="Subscribe"
              >
                <Send size={14} className="-ml-0.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li>186/2 Sudama Nagar<br />Govindpura, Bhopal</li>
              <li>Phone: <a href="tel:+919407589120" className="hover:text-[#00E5FF] transition-colors">+91 9407589120</a></li>
              <li>Email: <a href="mailto:hassaansiddiqui65@gmail.com" className="hover:text-[#F107A3] transition-colors">hassaansiddiqui65@gmail.com</a></li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="lg:pr-4">
            <h4 className="text-lg font-bold mb-6">Follow Us</h4>
            <div className="flex gap-4 mb-8">
              <a href="https://github.com/hassansid65" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all bg-transparent text-neutral-400">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/mr_sid_25?igsh=ZGJkenB2MWljZ296" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#E1306C] hover:border-[#E1306C] hover:text-white transition-all bg-transparent text-neutral-400">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:text-white transition-all bg-transparent text-neutral-400">
                <Twitter size={18} />
              </a>
            </div>
            
            {/* Theme Toggle placeholder */}
            <div className="flex items-center gap-3 text-neutral-400 pt-2">
              <Sun size={20} className="hover:text-white cursor-pointer transition-colors" />
              <div className="w-12 h-6 rounded-full border border-white/20 bg-black relative cursor-pointer flex items-center px-1">
                <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
              </div>
              <Moon size={18} className="text-white drop-shadow-md" />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© 2026 Hassan Siddiqui. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
