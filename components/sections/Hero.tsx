"use client"
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import { Github, Linkedin, Download } from "lucide-react"
import { FloatingPaths } from "@/components/ui/background-paths"
import { RainbowButton } from "@/components/ui/rainbow-borders-button"
import { useViewport } from "@/lib/use-viewport"
import { RESUME_URL, RESUME_FILENAME } from "@/lib/site-data"

export default function Hero() {
  const viewport = useViewport()

  return (
    <section id="home" className="snap-start relative w-full h-screen bg-black/[0.96] overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center h-full pt-20">
        
        {/* Left content */}
        <div className="flex-1 relative z-10 flex flex-col justify-center text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold tracking-wider text-white uppercase mb-4 block">
              AI Developer
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Hello, I'm <br/>
              <span className="text-gradient">Hassan Siddiqui</span>
            </h1>
            <p className="mt-4 text-neutral-300 max-w-lg text-lg mb-8 leading-relaxed">
              AI Developer specializing in production-grade LLM systems, RAG architectures, Voice AI, and scalable FastAPI microservices.
            </p>
            
            <div className="flex items-center gap-4">
              <RainbowButton asChild className="px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <a href={RESUME_URL} download={RESUME_FILENAME} className="flex items-center gap-2">
                  Download Resume <Download size={18} />
                </a>
              </RainbowButton>
              <a href="https://linkedin.com/in/hassan-siddiqui-193507279" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-white">
                <Linkedin size={22} />
              </a>
              <a href="https://github.com/hassansid65" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-white">
                <Github size={22} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative h-[600px] w-full hidden md:block">
          {/* Mounted only once the viewport is known to be desktop — the mobile
              hero renders its own robot, and neither should load the other's. */}
          {viewport === "desktop" && (
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          )}
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full glow-cyan"
          />
        </div>
        <span className="text-[10px] text-white/50 uppercase tracking-widest mt-2">Scroll</span>
      </div>
    </section>
  )
}
