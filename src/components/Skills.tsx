"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Code2, Layout, Database, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Cpu,
      color: "text-purple-400",
      skills: ["Machine Learning", "Deep Learning", "LangChain", "Vector DB", "RAG Pipelines", "Prompt Engineering", "OpenAI API", "Gemini API"],
    },
    {
      title: "Programming Languages",
      icon: Terminal,
      color: "text-cyan-400",
      skills: ["Python", "SQL", "Java", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend Engineering",
      icon: Layout,
      color: "text-blue-400",
      skills: ["React.js", "Next.js 15", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
    },
    {
      title: "Backend & Systems",
      icon: Code2,
      color: "text-emerald-400",
      skills: ["Node.js", "Express.js", "REST APIs", "Flask"],
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      color: "text-yellow-400",
      skills: ["MongoDB", "SQL Databases", "Firebase", "Google Cloud Arcade"],
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      color: "text-rose-400",
      skills: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Vite"],
    },
  ];

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col items-start hover:border-purple-500/20 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${category.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-space font-bold text-lg text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono text-white/70 bg-white/5 border border-white/5 hover:border-purple-500/30 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
