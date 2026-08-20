export const RESUME_URL = "/Hassan_Siddiqui_AI_Engineer_Resume.pdf"
export const RESUME_FILENAME = "Hassan_Siddiqui_AI_Engineer_Resume.pdf"

export type Project = {
  title: string
  client?: string
  description: string
  tech: string
  status: string
  /** Delivery date, or a range while the work is ongoing */
  date: string
  /** Compact status for the mobile card badge, where space is tight */
  statusShort?: string
  image: string
  /** Render the image as a brand wallpaper (contained + tinted) instead of a screenshot crop */
  brandWallpaper?: boolean
  /** Show first, full width, in the desktop grid */
  featured?: boolean
  link?: string
}

export const projects: Project[] = [
  {
    title: "Finance Data Automation",
    client: "Plainflow.ai",
    description:
      "Transforming finance with AI. Pipelines that ingest, reconcile, and transform financial data into automated accounting and reporting workflows — replacing repetitive manual data entry and reconciliation for international clients and cutting manual processing time significantly.",
    tech: "AI Automation | Data Pipelines | Reconciliation | Reporting",
    status: "Live · Client Engagement",
    statusShort: "Live · Client",
    date: "June 2026 – Present",
    image: "/plainflow.png",
    brandWallpaper: true,
    featured: true,
    link: "https://plainflow.ai"
  },
  {
    title: "MachineAvatars",
    description:
      "AI-powered human avatar agents that interact with website visitors in real time, qualify leads, and automate sales conversations. Backed by a standalone MCP + OCR + LLM data-extraction service on a multi-tenant backend with CRM integration.",
    tech: "LangChain | FastAPI | Milvus | LLMs",
    status: "Live in Production",
    date: "June 2026",
    image: "/Screenshot 2026-03-17 160919.png",
    link: "https://machineavatars.com/"
  },
  {
    title: "Remote Physios",
    description:
      "A remote physiotherapy platform powered by a 3D avatar-based RAG chatbot with voice-driven personalized therapy.",
    tech: "LLM | Voice AI | RAG | FastAPI",
    status: "Completed",
    date: "December 2025",
    image: "/Screenshot 2026-03-17 161408.png",
    link: "https://remotephysios.com/"
  },
  {
    title: "Speakwell",
    description:
      "AI-powered English learning platform that uses voice interaction to improve speaking skills. Scenario based speaking with a free-talk evaluation engine analyzing grammar and performance insights.",
    tech: "TTS | STT | LLM | FastAPI",
    status: "Completed",
    date: "March 2026",
    image: "/Screenshot 2026-03-17 161432.png",
    link: "https://talkbuddy.live/"
  },
  {
    title: "Snow Melting Marketing Tool",
    description:
      "AI image analysis system that simulates realistic snow placement on property images for marketing with confidence based routing.",
    tech: "LangGraph | Image AI | FastAPI",
    status: "Completed",
    date: "June 2026",
    image: "/Screenshot 2026-03-17 161502.png",
    link: "https://snowmarketingfe.karmikkarma.com/"
  }
]

export const experience = [
  {
    title: "AI Engineer",
    company: "AskGalore",
    date: "Oct 2025 – Present",
    desc: "Designing and shipping production RAG systems over scalable FastAPI REST APIs, document ingestion pipelines (OCR fallback, semantic chunking, Milvus) that lifted retrieval relevance 50–60%, real-time TTS/STT voice pipelines, and a multi-tenant backend serving concurrent live clients."
  },
  {
    title: "AI Finance Automation",
    company: "Plainflow.ai (client engagement)",
    date: "2026 – Present",
    desc: "Building pipelines that ingest, reconcile, and transform financial data into automated accounting and reporting workflows, working directly with international clients to map their finance processes into tailored automation."
  },
  {
    title: "Network RF Engineer",
    company: "TCS (via RIPL)",
    date: "2025",
    desc: "Worked on RF network optimization, KPI monitoring, and performance analysis."
  }
]

export const education = [
  {
    degree: "B.Tech – Artificial Intelligence & Data Science",
    school: "Sagar Institute of Research & Technology Excellence",
    date: "2021 – 2025"
  },
  {
    degree: "Senior Secondary",
    school: "Jawahar Lal Nehru School",
    date: "2020 – 2021"
  },
  {
    degree: "Secondary",
    school: "Jawahar Lal Nehru School",
    date: "2018 – 2019"
  }
]

export const skillCategories = [
  {
    title: "🧠 Core Programming Skills",
    skills: [
      "Python",
      "Object-Oriented Programming (OOP)",
      "REST API Development (FastAPI / Flask)",
      "SQL",
      "Git & GitHub"
    ]
  },
  {
    title: "🤖 AI / Machine Learning",
    skills: [
      "Machine Learning (Supervised & Unsupervised)",
      "Deep Learning (CNNs, RNNs, Transformers)",
      "Model Training & Evaluation"
    ]
  },
  {
    title: "🧬 GenAI / LLM Skills",
    skills: [
      "OpenAI / GPT",
      "Anthropic / Claude",
      "Prompt Engineering",
      "RAG (Retrieval-Augmented Generation)",
      "Embeddings & Vector DBs (Milvus, FAISS)",
      "Agentic Workflows",
      "MCP / Function Calling",
      "Multi-modal AI (Text + Image)"
    ]
  },
  {
    title: "⚙️ Frameworks & Libraries",
    skills: [
      "LangChain",
      "LangGraph",
      "Hugging Face Transformers",
      "TensorFlow / PyTorch",
      "Scikit-learn",
      "NumPy, Pandas, Matplotlib",
      "OpenCV"
    ]
  },
  {
    title: "☁️ Deployment & Backend",
    skills: [
      "FastAPI",
      "Docker (containerization)",
      "Azure AI Foundry",
      "OpenAI API / HuggingFace Inference",
      "CI/CD"
    ]
  },
  {
    title: "🗄️ Data & Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Vector Databases",
      "Data Cleaning & Preprocessing"
    ]
  },
  {
    title: "💹 Finance Automation",
    skills: [
      "Financial Data Ingestion",
      "Reconciliation Workflows",
      "Automated Accounting & Reporting",
      "Client Process Mapping",
      "Power BI"
    ]
  },
  {
    title: "📊 Specialized",
    skills: [
      "NLP (NER, Text Classification)",
      "Computer Vision (Detection, Processing)",
      "Speech AI (TTS, STT)",
      "OCR Systems",
      "Recommendation Systems"
    ]
  },
  {
    title: "🚀 Real-World System Skills",
    skills: [
      "Building AI Chatbots (RAG-based)",
      "End-to-end ML pipelines",
      "AI-powered automation systems",
      "Latency optimization"
    ]
  }
]

export const mobileSkillCategories = [
  {
    title: "🧠 Core Programming",
    skills: ["Python", "OOP", "REST API (FastAPI / Flask)", "SQL", "Git & GitHub"]
  },
  {
    title: "🤖 AI / Machine Learning",
    skills: [
      "ML (Supervised & Unsupervised)",
      "Deep Learning (CNNs, RNNs, Transformers)",
      "Model Training & Evaluation"
    ]
  },
  {
    title: "🧬 GenAI / LLM",
    skills: [
      "OpenAI / GPT",
      "Anthropic / Claude",
      "Prompt Engineering",
      "RAG",
      "Embeddings & Vector DBs",
      "Agentic Workflows",
      "MCP / Function Calling",
      "Multi-modal AI"
    ]
  },
  {
    title: "⚙️ Frameworks & Libraries",
    skills: [
      "LangChain",
      "LangGraph",
      "Hugging Face",
      "TensorFlow / PyTorch",
      "Scikit-learn",
      "NumPy, Pandas, Matplotlib",
      "OpenCV"
    ]
  },
  {
    title: "☁️ Deployment & Backend",
    skills: ["FastAPI", "Docker", "Azure AI Foundry", "OpenAI / HF Inference", "CI/CD"]
  },
  {
    title: "🗄️ Data & Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Vector Databases",
      "Data Cleaning & Preprocessing"
    ]
  },
  {
    title: "💹 Finance Automation",
    skills: [
      "Financial Data Ingestion",
      "Reconciliation Workflows",
      "Automated Accounting & Reporting",
      "Client Process Mapping",
      "Power BI"
    ]
  },
  {
    title: "📊 Specialized",
    skills: [
      "NLP (NER, Classification)",
      "Computer Vision",
      "Speech AI (TTS, STT)",
      "OCR Systems",
      "Recommendation Systems"
    ]
  },
  {
    title: "🚀 Real-World Systems",
    skills: [
      "AI Chatbots (RAG)",
      "End-to-end ML pipelines",
      "AI automation systems",
      "Latency optimization"
    ]
  }
]

/** Bottom tab bar destinations, in order. */
export const mobileTabs = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
] as const

export const reviews = [
  {
    id: 1,
    name: "AI Product Lead",
    affiliation: "AskGalore",
    quote:
      "Hassan built a highly scalable RAG architecture that significantly improved our AI product performance. His ability to design production-ready pipelines is exceptional.",
    imageSrc:
      "https://images.unsplash.com/photo-1542385151-efd9000785db?q=80&w=400&h=600&auto=format&fit=crop",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1542385151-efd9000785db?q=80&w=100&h=120&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Sarah Chen",
    affiliation: "TechFlow",
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. His LLM integration was exactly what we needed to scale our voice AI product.",
    imageSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=600&auto=format&fit=crop",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=120&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "James Kim",
    affiliation: "DevScale",
    quote:
      "Outstanding support and professionalism throughout the project. Hassan's FastAPI microservices architecture delivered beyond our expectations in both speed and reliability.",
    imageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=600&auto=format&fit=crop",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=120&auto=format&fit=crop"
  }
]

export const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Education",
  "Testimonials",
  "Contact"
]
