"use client";

import { motion } from "framer-motion";
import { Brain, Trophy, Cpu, Code } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Total Projects", value: "15+", icon: Code },
    { label: "AI Projects", value: "5+", icon: Brain },
    { label: "DSA Solved", value: "300+", icon: Trophy },
    { label: "Certifications", value: "5+", icon: Cpu },
  ];

  return (
    <section id="about" className="py-24 relative max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-cyan-400 font-mono text-sm tracking-widest uppercase"
        >
          My Story
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-space font-bold text-3xl sm:text-5xl mt-2 text-white"
        >
          About Me
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Bio Text */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/80 leading-relaxed text-base sm:text-lg font-sans"
          >
            I am a dynamic and motivated <strong>AI/ML Undergraduate</strong> skilled in transforming complex datasets into actionable insights. I have a proven capability in developing machine learning models and interactive applications, such as AI-powered planners and computer vision classifiers.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 leading-relaxed text-base sm:text-lg font-sans"
          >
            My work merges strong analytical skills with a deep passion for innovation in technology and sustainability. Throughout my internship experiences, I have focused on designing clean data preprocessing pipelines, optimizing deep learning model performance, and implementing agentic workflows.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 leading-relaxed text-base sm:text-lg font-sans"
          >
            I hold a B.Tech in CSE (AIML) from Ajay Kumar Garg Engineering College and a Diploma in CSE, providing me with a robust theoretical foundation coupled with practical hands-on experience in cloud architectures and model deployment.
          </motion.p>
        </div>

        {/* Right Side Stats Bento Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-purple-500/30 transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-space font-bold text-3xl text-white mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
