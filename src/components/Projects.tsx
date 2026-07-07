"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  category: string;
  features: string[];
  github: string;
  live: string;
  icon: string;
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "multi-agent-blog",
      title: "Multi-Agentic Blog Generation",
      subtitle: "Stateful AI Content Writer State Machine",
      description: "An autonomous multi-agent platform designed to research, outline, write, and review deep-dive technical articles. It leverages LangGraph for stateful multi-agent coordination, Groq for fast LLM inference, and GitHub Actions for continuous delivery of generated static markdown posts.",
      tech: ["Python", "LangGraph", "Groq API", "LangChain", "GitHub Actions"],
      category: "AI",
      features: [
        "Automates research, outlining, writing, and proofreading phases.",
        "Integrated state-saving mechanisms via state machines.",
        "Generates static files pushed automatically via workflow actions."
      ],
      github: "https://github.com/poojjaguptaa101/Multi-Agentic-Blog-Generation-main",
      live: "https://github.com/poojjaguptaa101/Multi-Agentic-Blog-Generation-main",
      icon: "🤖"
    },
    {
      id: "auragems",
      title: "AuraGems AI",
      subtitle: "AI Jewellery Recommendation Platform",
      description: "A modern jewellery e-commerce platform integrated with intelligent recommendation engines. It curates custom jewelry recommendations for users based on visual searches, user preferences, and style profiles.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI"],
      category: "Full Stack",
      features: [
        "Interactive dashboard interface with detailed inventory grids.",
        "Recommendation module utilizing vector queries and visual attributes.",
        "Responsive bento grid panels for product categories."
      ],
      github: "https://github.com/poojjaguptaa101/AuraGems-AI",
      live: "https://github.com/poojjaguptaa101/AuraGems-AI",
      icon: "💎"
    },
    {
      id: "mern-ecommerce",
      title: "MERN E-Commerce Store",
      subtitle: "Scalable Shop with Payment Integrations",
      description: "A full-featured MERN stack e-commerce web application. Includes a dynamic product catalog, inventory tracking, user cart sessions, secure payment portal simulations, and administrative dashboard control suites.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit"],
      category: "MERN",
      features: [
        "Complete checkout flows with persistent shopping carts.",
        "Dashboard panel for product uploads and sales metrics.",
        "Secure token-based cookies session authentications."
      ],
      github: "https://github.com/poojjaguptaa101/MERN-E-Commerce-Store-main",
      live: "https://github.com/poojjaguptaa101/MERN-E-Commerce-Store-main",
      icon: "🛒"
    },
    {
      id: "binance-bot",
      title: "Binance Futures Bot",
      subtitle: "Automated Algorithmic Futures Trader",
      description: "A cryptocurrency trading bot designed to interface with the Binance Futures API. Executes trades automatically based on pre-defined indicators (RSI, MACD, EMAs) and monitors position risk, leverage thresholds, and profit margins.",
      tech: ["Python", "Binance API", "Pandas", "TA-Lib", "WebSockets"],
      category: "Full Stack",
      features: [
        "Real-time WebSocket connection to stream candle prices.",
        "Adaptive risk management calculating leverage and position sizes.",
        "Automated log alerts via Telegram bot notifications."
      ],
      github: "https://github.com/poojjaguptaa101/binance_futures_bot",
      live: "https://github.com/poojjaguptaa101/binance_futures_bot",
      icon: "📈"
    },
    {
      id: "bus-tracker",
      title: "Bus Transport Tracker",
      subtitle: "Real-Time Fleet Location Monitoring",
      description: "A real-time bus tracking application designed to display vehicle coordinates, routes, and estimated time of arrivals (ETAs). Integrates Google Maps APIs and geolocation tracking layers to improve commuter navigation.",
      tech: ["JavaScript", "Node.js", "Socket.io", "Leaflet.js", "Express"],
      category: "Full Stack",
      features: [
        "Real-time location updates streamed via Socket.io channels.",
        "Interactive map overlays displaying bus stops and routes.",
        "Commuter warning systems notifying of delayed fleet arrivals."
      ],
      github: "https://github.com/poojjaguptaa101/BusTransportTracker-master",
      live: "https://github.com/poojjaguptaa101/BusTransportTracker-master",
      icon: "🚌"
    },
    {
      id: "ecotrace",
      title: "Ecotrace",
      subtitle: "AI-Powered Carbon Footprint Calculator",
      description: "A sustainability tracking application designed to help users calculate, monitor, and reduce their carbon footprint. Uses machine learning models to recommend target optimizations in energy, waste, and transport habits.",
      tech: ["Python", "Machine Learning", "Streamlit", "Pandas", "Matplotlib"],
      category: "AI",
      features: [
        "Automates calculation of household carbon metrics.",
        "Graph dashboards plotting historical footprint reductions.",
        "Custom daily task lists recommending low-carbon alternative actions."
      ],
      github: "https://github.com/poojjaguptaa101/ecotrace",
      live: "https://github.com/poojjaguptaa101/ecotrace",
      icon: "🌱"
    },
    {
      id: "synapse-daily",
      title: "Synapse Daily",
      subtitle: "Intelligent Personalized News Aggregator",
      description: "An AI-driven news feed service that aggregates, summarizes, and classifies news articles from across global channels, delivering a tailored digest based on user interest vectors.",
      tech: ["Python", "NLP Models", "HuggingFace", "FastAPI", "React.js"],
      category: "AI",
      features: [
        "Automatic summary generation using Transformer models.",
        "Dynamic recommendation sorting based on user interaction feedback.",
        "Clean reading views stripping ads and layout clutter from feeds."
      ],
      github: "https://github.com/poojjaguptaa101/Synapse-Daily-main",
      live: "https://github.com/poojjaguptaa101/Synapse-Daily-main",
      icon: "📰"
    },
    {
      id: "mern-task-tracker",
      title: "MERN Task Tracker",
      subtitle: "Real-Time Team Collaboration Suite",
      description: "A collaboration task tracker supporting team boards, task creation, status columns, priorities, and assignments. Includes live comment streams and telemetry tracking metrics.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "WebSockets"],
      category: "MERN",
      features: [
        "KanBan-style drag-and-drop task boards.",
        "Custom priority status color highlights.",
        "Secure workspaces with role-based member permissions."
      ],
      github: "https://github.com/poojjaguptaa101/MERN-task-tracker",
      live: "https://github.com/poojjaguptaa101/MERN-task-tracker",
      icon: "📋"
    }
  ];

  const categories = ["All", "AI", "MERN", "Full Stack"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-cyan-400 font-mono text-sm tracking-widest uppercase"
        >
          My Works
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-space font-bold text-3xl sm:text-5xl mt-2 text-white"
        >
          Featured Projects
        </motion.h2>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono font-semibold transition-all border ${
                filter === cat
                  ? "bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/20"
                  : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((proj) => (
            <motion.div
              layout
              key={proj.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProject(proj)}
              className="glass-panel rounded-2xl overflow-hidden hover:border-purple-500/20 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all flex flex-col group cursor-pointer text-left"
            >
              <div className="h-48 bg-[#0b0d1e] border-b border-white/5 flex items-center justify-center relative">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {proj.icon}
                </span>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-400">
                  {proj.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-space font-bold text-xl text-white group-hover:text-purple-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-white/50 font-mono mt-1 uppercase tracking-wider font-semibold">
                    {proj.subtitle}
                  </p>
                  <p className="text-sm text-white/70 mt-4 line-clamp-3 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-6">
                  {proj.tech.slice(0, 3).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-white/50"
                    >
                      {t}
                    </span>
                  ))}
                  {proj.tech.length > 3 && (
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-white/50">
                      +{proj.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Details overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[99999] flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[#090b1c] border border-purple-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-left"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
                {selectedProject.category} Project
              </span>
              <h3 className="font-space font-bold text-2xl sm:text-3xl text-white mt-2">
                {selectedProject.title}
              </h3>
              <h4 className="text-sm font-medium text-purple-400 mt-1">
                {selectedProject.subtitle}
              </h4>

              <p className="text-sm sm:text-base text-white/80 mt-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mt-6">
                <h5 className="font-space font-bold text-sm text-white uppercase tracking-wider mb-3">
                  Key Features
                </h5>
                <ul className="space-y-2 text-sm text-white/70 pl-4 list-disc">
                  {selectedProject.features.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h5 className="font-space font-bold text-sm text-white uppercase tracking-wider mb-3">
                  Technologies Used
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono text-white/80 bg-white/5 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white text-sm font-semibold transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>GitHub Repository</span>
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white text-sm font-semibold transition-all shadow-lg hover:shadow-cyan-500/10"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
