"use client";

import { motion } from "framer-motion";
import { Brain, Trophy, Cpu, Code, Coffee, BookOpen, Heart } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Total Projects", value: "15+", icon: Code },
    { label: "AI Projects", value: "5+", icon: Brain },
    { label: "DSA Solved", value: "300+", icon: Trophy },
    { label: "Certifications", value: "5+", icon: Cpu },
  ];

  const pills = [
    { text: "Fueled by coffee and curiosity", icon: Coffee, colorClass: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
    { text: "Always learning something new", icon: BookOpen, colorClass: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
    { text: "Passionate about mentoring", icon: Heart, colorClass: "border-pink-500/30 text-pink-400 bg-pink-500/5" },
  ];

  return (
    <section id="about" className="py-24 relative max-w-7xl mx-auto px-6">
      {/* 1. Immersive Image Replicated Header Area */}
      <div className="flex flex-col items-center text-center mb-16 relative">
        <div className="relative inline-block mb-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-space font-bold text-5xl sm:text-7xl text-white tracking-tight"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">Me</span>
          </motion.h2>

          {/* Little Yellow Star decoration */}
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute -top-3 -right-6 text-yellow-400"
          >
            <svg className="w-6 h-6 fill-transparent stroke-2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </motion.div>
        </div>

        {/* Flashing vertical cursor line indicator */}
        <div className="w-0.5 h-6 bg-cyan-400 animate-pulse my-4" />

        {/* Bio paragraph with highlighted gradient text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-xl text-white/80 max-w-3xl leading-relaxed mb-10 font-sans"
        >
          Full-Stack Developer & Google Cloud Facilitator passionate about creating{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 font-bold">
            immersive digital experiences
          </span>{" "}
          that push the boundaries of what's possible on the web.
        </motion.p>

        {/* Action badges/pills row */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
          {pills.map((pill, idx) => {
            const Icon = pill.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs sm:text-sm font-medium tracking-wide shadow-sm hover:scale-105 transition-all ${pill.colorClass}`}
              >
                <Icon className="w-4 h-4" />
                <span>{pill.text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 2. Bento Statistics Row below */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-purple-500/30 transition-all cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-3 text-purple-400 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5" />
              </div>
              <div className="font-space font-bold text-2xl sm:text-3xl text-white mb-0.5 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] text-white/50 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
