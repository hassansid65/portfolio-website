"use client"

import { useState } from "react"
import { m, AnimatePresence } from "framer-motion"
import { Send, X, Trash2, ArrowRight } from "lucide-react"
import Image from "next/image"
import { SiriOrb } from "@/components/ui/siri-orb"

type ChatMessage = {
  role: "assistant" | "user"
  text: string
  cta?: { sectionId: string; label: string }
}

const faqs = [
  {
    question: "Who is Hassan?",
    answer:
      "Hassan Siddiqui is an AI Engineer specializing in production-grade LLM systems, RAG architectures, Voice AI, and scalable FastAPI microservices. He's currently at AskGalore (since Oct 2025), building real-time AI products that interact with users through text, voice, and 3D avatars — and delivering AI finance automation for Plainflow.ai.",
    cta: { sectionId: "about", label: "More about Hassan" }
  },
  {
    question: "What projects has Hassan done?",
    answer:
      "Hassan has shipped 5 production AI projects:\n\n• Finance Data Automation (Plainflow.ai) — transforming finance with AI: pipelines that ingest, reconcile and transform financial data into automated accounting and reporting workflows\n• MachineAvatars — AI human-avatar agents that qualify leads in real time (LangChain, FastAPI, Milvus, LLMs)\n• Remote Physios — 3D avatar RAG chatbot for voice-driven physiotherapy\n• Speakwell — voice-based English learning with TTS/STT and scenario-based error detection\n• Snow Melting Marketing Tool — image AI that simulates snow on property images using LangGraph routing",
    cta: { sectionId: "projects", label: "View all projects" }
  },
  {
    question: "Explain Hassan's skill set",
    answer:
      "Hassan's stack covers the full AI development lifecycle:\n\n• Languages: Python, OOP, REST API design\n• GenAI/LLM: RAG, prompt engineering, embeddings, vector DBs (FAISS, Pinecone, Weaviate, Milvus), AI agents, function calling\n• Frameworks: LangChain, LangGraph, Hugging Face, TensorFlow, PyTorch\n• Backend: FastAPI, Docker, Azure, CI/CD\n• Specialized: NLP, computer vision, Speech AI (TTS/STT), OCR, recommendation systems",
    cta: { sectionId: "skills", label: "View full skill set" }
  },
  {
    question: "What is Hassan's education?",
    answer:
      "Hassan holds a B.Tech in Artificial Intelligence & Data Science from Sagar Institute of Research & Technology Excellence (2021–2025). His professional experience includes AI Developer at AskGalore (Oct 2025–Present) and Network RF Engineer at TCS via RIPL (2025).",
    cta: { sectionId: "education", label: "View education timeline" }
  },
  {
    question: "How can I contact Hassan?",
    answer:
      "You can reach Hassan at:\n\n• Email: hassaansiddiqui65@gmail.com\n• Phone: +91 9407589120\n• Location: Bhopal, India\n• GitHub: github.com/hassansid65\n\nOr scroll down to the Contact section and send a message directly!",
    cta: { sectionId: "contact", label: "Open contact form" }
  }
]

const fallbackAnswer =
  "I can only answer a few preset questions about Hassan right now. Try one of the suggested questions above!"

const initialMessages: ChatMessage[] = [
  { role: "assistant", text: "Hi there 👋 \nHow can I help you today?" }
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = (text: string) => {
    if (!text.trim() || isLoading) return
    setMessages(prev => [...prev, { role: "user", text }])
    setInput("")
    setIsLoading(true)
    setTimeout(() => {
      const match = faqs.find(f => f.question.toLowerCase() === text.trim().toLowerCase())
      const reply: ChatMessage = match
        ? { role: "assistant", text: match.answer, cta: match.cta }
        : { role: "assistant", text: fallbackAnswer }
      setMessages(prev => [...prev, reply])
      setIsLoading(false)
    }, 1200)
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const clearChat = () => {
    setMessages(initialMessages)
    setInput("")
    setIsLoading(false)
  }

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 350)
  }

  return (
    <div className="fixed bottom-[104px] right-4 sm:bottom-6 sm:right-6 z-40 sm:z-50 flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-4 w-[calc(100vw-2rem)] max-w-[380px] h-[min(500px,70dvh)] sm:h-[500px] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden glass-effect"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#7B2FF7]/20 to-[#F107A3]/20">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 shrink-0 rounded-full overflow-hidden ring-2 ring-[#00E5FF]/50">
                  <Image src="/chatbot-avatar.png" alt="Hassan Siddiqui" fill sizes="32px" className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Hassan's Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-neutral-400">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={clearChat}
                  className="text-neutral-400 hover:text-red-400 transition-colors p-1.5 rounded-full hover:bg-white/5"
                  aria-label="Clear chat"
                  title="Clear chat"
                >
                  <Trash2 size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-400 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/5"
                  aria-label="Close Chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
              {messages.map((msg, i) => {
                const cta = msg.cta
                return (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`flex flex-col gap-2 max-w-[85%] ${msg.role === "user" ? "items-end" : "items-start"}`}>
                      <div className={`p-3 rounded-2xl text-sm ${msg.role === "user" ? "bg-gradient-to-r from-[#7B2FF7] to-[#F107A3] text-white rounded-br-none" : "bg-white/5 border border-white/10 text-neutral-200 rounded-bl-none whitespace-pre-wrap"}`}>
                        {msg.text}
                      </div>
                      {cta && (
                        <button
                          onClick={() => scrollToSection(cta.sectionId)}
                          className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-gradient-to-r from-[#00E5FF]/20 to-[#3b82f6]/20 border border-[#00E5FF]/40 text-[#00E5FF] rounded-full hover:bg-[#00E5FF]/30 hover:border-[#00E5FF]/70 hover:shadow-[0_0_12px_rgba(0,229,255,0.3)] transition-all"
                        >
                          {cta.label}
                          <ArrowRight size={12} />
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}

              {messages.length === 1 && !isLoading && (
                <div className="flex flex-col gap-2 items-end mt-4">
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500 self-start mb-1">
                    Suggested questions
                  </p>
                  {faqs.map((faq, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(faq.question)}
                      className={`px-4 py-2 border text-xs rounded-full transition-colors text-left ${
                        i % 2 === 0
                          ? "bg-gradient-to-r from-[#00E5FF]/20 to-[#3b82f6]/20 border-[#00E5FF]/30 text-[#00E5FF] hover:bg-[#00E5FF]/30"
                          : "bg-gradient-to-r from-[#F107A3]/20 to-[#7B2FF7]/20 border-[#F107A3]/30 text-[#F107A3] hover:bg-[#F107A3]/30"
                      }`}
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input Footer */}
            <div className="p-4 border-t border-white/10 bg-black/50">
              <form onSubmit={handleSend} className="relative flex items-center">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Write your message..." 
                  className="w-full bg-transparent border border-white/20 rounded-full py-3 px-4 pr-12 text-[16px] sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#00E5FF] transition-colors"
                />
                <button 
                  type="submit" 
                  disabled={!input.trim() && !isLoading}
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-9 flex items-center justify-center bg-gradient-to-r from-[#00E5FF] to-[#3b82f6] text-black rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  {isLoading ? (
                    <div className="scale-[1.2]">
                      <SiriOrb size="36px" animationDuration={2} />
                    </div>
                  ) : (
                    <Send size={14} className="-ml-0.5" />
                  )}
                </button>
              </form>
            </div>
            
          </m.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <m.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="relative w-[76px] h-[76px] sm:w-[140px] sm:h-[140px] rounded-full flex items-center justify-center glow-cyan border-2 border-white/20 shadow-2xl z-[100] overflow-hidden group cursor-pointer"
          >
            {/* The background animated gradient to match theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7B2FF7] via-[#F107A3] to-[#00E5FF] opacity-80 group-hover:opacity-100 transition-opacity" />
            
            {/* The Avatar itself */}
            <div className="absolute inset-[3px] rounded-full bg-black z-10 flex items-center justify-center overflow-hidden">
               <Image
                  src="/chatbot-avatar.png"
                  alt="Hassan Siddiqui Chatbot"
                  fill
                  sizes="(max-width: 639px) 76px, 140px"
                  className="object-cover"
               />
            </div>
          </m.button>
        )}
      </AnimatePresence>
    </div>
  )
}
