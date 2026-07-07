"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Layout, Server, Terminal, Database } from "lucide-react";

interface SkillItem {
  name: string;
  percentage: number;
  emoji: string;
}

// Colored SVG brand icons component to replicate Anshul's portfolio exactly
function BrandIcon({ name }: { name: string }) {
  switch (name) {
    case "Google Cloud Platform":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4" />
          <path d="M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" fill="#34A853" />
        </svg>
      );
    case "VS Code":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M23.9 6.5l-2.7-2.6c-.2-.2-.5-.2-.7 0L12 12.4 3.5 3.9c-.2-.2-.5-.2-.7 0L.1 6.5c-.2.2-.2.5 0 .7l7.7 7.7L.1 22.6c-.2.2-.2.5 0 .7l2.7 2.6c.2.2.5.2.7 0L12 17.4l8.5 8.5c.2.2.5.2.7 0l2.7-2.6c.2-.2.2-.5 0-.7l-7.7-7.7 7.7-7.7c.2-.2.2-.5 0-.7z" fill="#007ACC" />
        </svg>
      );
    case "Postman":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm4.186 16.914l-2.186-2.186-2.186 2.186-1.414-1.414 2.186-2.186-2.186-2.186 1.414-1.414 2.186 2.186 2.186-2.186 1.414 1.414-2.186 2.186 2.186 2.186-1.414 1.414z" fill="#FF6C37" />
        </svg>
      );
    case "Chrome DevTools":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#4285F4" />
          <path d="M12 2a10 10 0 0 1 10 10c0 .92-.12 1.82-.36 2.68L12.5 7.5l-5.6 5.6L12 2z" fill="#EA4335" />
          <path d="M12 22a10 10 0 0 1-10-10c0-1.85.5-3.57 1.38-5.06l6.83 6.83.69 2.5 1.1 3.73z" fill="#FBBC05" />
          <circle cx="12" cy="12" r="4" fill="#FFFFFF" />
          <circle cx="12" cy="12" r="3" fill="#4285F4" />
        </svg>
      );
    case "IntelliJ IDEA":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#000000" />
          <path d="M4 4h16v16H4V4z" fill="url(#intellij-grad)" />
          <text x="5" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="sans-serif">IJ</text>
          <defs>
            <linearGradient id="intellij-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FE2857" />
              <stop offset="100%" stopColor="#9600FE" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Figma":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M8 2c-2.2 0-4 1.8-4 4s1.8 4 4 4h4V2H8z" fill="#F24E1E" />
          <path d="M16 2c-2.2 0-4 1.8-4 4v4h4c2.2 0 4-1.8 4-4s-1.8-4-4-4z" fill="#FF7262" />
          <path d="M8 10c-2.2 0-4 1.8-4 4s1.8 4 4 4h4v-8H8z" fill="#A259FF" />
          <path d="M8 18c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4v-4H8z" fill="#1ABCFE" />
          <path d="M16 10c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4s4-1.8 4-4v-4c0-2.2-1.8-4-4-4z" fill="#0ACF83" />
        </svg>
      );
    case "React.js":
      return (
        <svg className="w-6 h-6 animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="4" ry="11" stroke="#00d8ff" strokeWidth="1.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="4" ry="11" stroke="#00d8ff" strokeWidth="1.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="4" ry="11" stroke="#00d8ff" strokeWidth="1.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="#00d8ff" />
        </svg>
      );
    case "Next.js 15":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#000000" stroke="#ffffff" strokeWidth="1" />
          <path d="M17.5 17.5L9.5 7.5v8.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.5 7.5h1" stroke="#ffffff" strokeWidth="1.5" />
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 6.5c-2.8 0-4.5 1.4-5.2 4.2 1-1.4 2.2-1.9 3.5-1.4.8.3 1.3.8 1.9 1.4 1 1 2.1 2.1 4.5 2.1 2.8 0 4.5-1.4 5.2-4.2-1 1.4-2.2 1.9-3.5 1.4-.8-.3-1.3-.8-1.9-1.4-1-1-2.1-2.1-4.5-2.1z" fill="#06B6D4" />
          <path d="M6.8 12.2c-2.8 0-4.5 1.4-5.2 4.2 1-1.4 2.2-1.9 3.5-1.4.8.3 1.3.8 1.9 1.4 1 1 2.1 2.1 4.5 2.1 2.8 0 4.5-1.4 5.2-4.2-1 1.4-2.2 1.9-3.5 1.4-.8-.3-1.3-.8-1.9-1.4-1-1-2.1-2.1-4.5-2.1z" fill="#06B6D4" />
        </svg>
      );
    case "HTML5 & CSS3":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M4 2l1.5 17 6.5 3 6.5-3L20 2H4zm11.5 6h-6l.2 2h5.8l-.5 5.5-3 1-3-1-.2-2h2l.1 1 1.1.3 1.1-.3.2-2.2H8l-.5-5h8.5l-.2 2.2z" fill="#E44D26" />
        </svg>
      );
    case "Framer Motion":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M0 0h12v6H0zm0 12h12v6H0zm0 6h12v6H0zm12-12h12v6H12z" fill="#FF00C8" />
        </svg>
      );
    case "Node.js":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7.8v11.5l10 5.8 10-5.8V7.8L12 2zm8 16.3l-8 4.6-8-4.6V8.9l8-4.6 8 4.6v9.4z" fill="#339933" />
          <path d="M12 6.5v11m-4-7.5l4-2.3 4 2.3-4 2.3-4-2.3z" fill="#339933" />
        </svg>
      );
    case "Express.js":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#333333" />
          <text x="3" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="sans-serif">EX</text>
        </svg>
      );
    case "REST APIs":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#A855F7" strokeWidth="2" />
          <path d="M8 12h8m-2-2l2 2-2 2" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "Flask":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="#4B5563" />
        </svg>
      );
    case "Python":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 2c-2.76 0-5 2.24-5 5v3h5v2H5c-1.66 0-3 1.34-3 3v4c0 1.66 1.34 3 3 3h3v-3c0-2.76 2.24-5 5-5h5v-2h-7V7c0-1.66 1.34-3 3-3h4V2h-4zm0 20c2.76 0 5-2.24 5-5v-3h-5v-2h7c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3h-3v3c0 2.76-2.24 5-5 5H7v2h7v3c0 1.66-1.34 3-3 3H7v2h5z" fill="#3776AB" />
        </svg>
      );
    case "SQL":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="6" rx="8" ry="3" fill="#007ACC" />
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="#007ACC" opacity="0.8" />
          <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" fill="#007ACC" opacity="0.6" />
        </svg>
      );
    case "Java":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M2 18.5a6 6 0 0 1 10-4.5 6 6 0 0 1 10 4.5v1.5H2v-1.5z" fill="#ED8B00" />
          <path d="M12 2C8.69 2 6 4.69 6 8c0 3.31 4 8 6 10 2-2 6-6.69 6-10 0-3.31-2.69-6-6-6z" fill="#ED8B00" />
        </svg>
      );
    case "JavaScript":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <text x="13" y="18" fill="#000000" fontSize="11" fontWeight="bold" fontFamily="sans-serif">JS</text>
        </svg>
      );
    case "TypeScript":
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <text x="13" y="18" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">TS</text>
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#8B5CF6" strokeWidth="2" />
          <path d="M9 12l2 2 4-4" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("AI/ML");

  const categories = [
    { id: "AI/ML", label: "AI/ML", icon: Brain },
    { id: "Frontend", label: "Frontend", icon: Layout },
    { id: "Backend", label: "Backend", icon: Server },
    { id: "Programming", label: "Programming", icon: Terminal },
    { id: "Tools & Cloud", label: "Tools & Cloud", icon: Database },
  ];

  const skillData: Record<string, SkillItem[]> = {
    "AI/ML": [
      { name: "Machine Learning", percentage: 90, emoji: "🤖" },
      { name: "Deep Learning", percentage: 88, emoji: "🧠" },
      { name: "LangChain & Agents", percentage: 85, emoji: "⚙️" },
      { name: "LLMs & Prompts", percentage: 92, emoji: "💬" },
      { name: "RAG Pipelines", percentage: 86, emoji: "📚" },
      { name: "Computer Vision", percentage: 84, emoji: "👁️" },
    ],
    Frontend: [
      { name: "React.js", percentage: 90, emoji: "⚛️" },
      { name: "Next.js 15", percentage: 88, emoji: "🚀" },
      { name: "Tailwind CSS", percentage: 95, emoji: "🎨" },
      { name: "HTML5 & CSS3", percentage: 92, emoji: "🌐" },
      { name: "Framer Motion", percentage: 85, emoji: "✨" },
    ],
    Backend: [
      { name: "Node.js", percentage: 85, emoji: "🟢" },
      { name: "Express.js", percentage: 88, emoji: "⚡" },
      { name: "REST APIs", percentage: 90, emoji: "🔌" },
      { name: "Flask", percentage: 80, emoji: "🐍" },
    ],
    Programming: [
      { name: "Python", percentage: 92, emoji: "🐍" },
      { name: "SQL", percentage: 88, emoji: "🗄️" },
      { name: "Java", percentage: 80, emoji: "☕" },
      { name: "JavaScript", percentage: 90, emoji: "💛" },
      { name: "TypeScript", percentage: 86, emoji: "💙" },
    ],
    "Tools & Cloud": [
      { name: "Google Cloud Platform", percentage: 88, emoji: "☁️" },
      { name: "VS Code", percentage: 95, emoji: "💻" },
      { name: "Postman", percentage: 85, emoji: "📮" },
      { name: "Chrome DevTools", percentage: 90, emoji: "🔍" },
      { name: "IntelliJ IDEA", percentage: 82, emoji: "🧠" },
      { name: "Figma", percentage: 75, emoji: "🎨" },
    ],
  };

  return (
    <section id="skills" className="py-24 relative max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-cyan-400 font-mono text-sm tracking-widest uppercase"
        >
          Capabilities
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-space font-bold text-3xl sm:text-5xl mt-2 text-white"
        >
          Skills & Technologies
        </motion.h2>
      </div>

      {/* Tabs list with premium styling */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-space font-bold transition-all duration-300 relative overflow-hidden ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/40"
                  : "bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[350px] items-start">
        <AnimatePresence mode="wait">
          {skillData[activeTab].map((skill, idx) => {
            return (
              <motion.div
                key={`${activeTab}-${skill.name}`}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="glass-panel p-6 rounded-3xl flex flex-col justify-between hover:border-purple-500/20 hover:shadow-[0_0_25px_rgba(124,58,237,0.15)] transition-all relative group text-left h-36"
              >
                {/* Upper row: brand icon, name, emoji badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BrandIcon name={skill.name} />
                    </div>
                    <span className="font-space font-bold text-base text-white group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  
                  {/* Small emoji badge in top right */}
                  <span className="text-xl opacity-80 group-hover:scale-125 transition-transform duration-300">
                    {skill.emoji}
                  </span>
                </div>

                {/* Lower row: percentage & bar */}
                <div className="space-y-2 mt-4">
                  <div className="flex items-center justify-between text-xs font-mono text-white/50">
                    <span className="flex items-center gap-1">
                      <span className="text-yellow-400 font-bold">★</span>
                      <span>{skill.percentage}%</span>
                    </span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
