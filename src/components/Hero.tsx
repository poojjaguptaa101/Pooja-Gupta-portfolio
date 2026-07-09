"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, ArrowRight, MessageSquare } from "lucide-react";

export default function Hero() {
  const roles = ["AI Engineer & Software Developer.", "Full Stack Developer."];
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setRoleText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setRoleText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-transparent">
      {/* Hero content grid */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-cyan-400 font-mono font-medium text-sm tracking-widest uppercase mb-3"
          >
            Hi, I'm
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-space font-bold text-5xl sm:text-7xl tracking-tight text-white mb-4"
          >
            Pooja Gupta
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl font-mono text-purple-400 font-semibold mb-6 flex items-center gap-2 h-8"
          >
            <span>I am an</span>
            <span className="text-white border-r-2 border-cyan-400 pr-1 animate-pulse">{roleText}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-white/70 max-w-xl mb-10 leading-relaxed font-sans"
          >
            I build AI-powered applications, scalable web platforms, and intelligent digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 w-full"
          >
            <button
              onClick={() => handleScroll("projects")}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-space font-bold uppercase tracking-wider text-xs shadow-lg shadow-purple-500/20 hover:shadow-cyan-500/30 transition-all cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScroll("contact")}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/30 text-white font-space font-bold uppercase tracking-wider text-xs transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-purple-400" />
              <span>Let's Talk</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/30 text-white font-space font-bold uppercase tracking-wider text-xs transition-all"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side Glass Shield Visual */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-72 h-72 sm:w-96 sm:h-96 rounded-full relative flex items-center justify-center"
          >
            {/* Animated outer glowing neon rings */}
            <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-cyan-500/10 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 rounded-full border border-amber-500/10 animate-[spin_25s_linear_infinite]" />
            
            {/* Inner profile image container */}
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.25)] relative group transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_60px_rgba(6,182,212,0.35)] flex items-center justify-center">
              {/* Subtle gradient overlay to match dark mode */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
              
              <img
                src="/profile.jpg"
                alt="Pooja Gupta"
                className="w-full h-full object-cover object-[center_12%] group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Futuristic scan line effect */}
              <div className="absolute inset-x-0 h-[2px] bg-cyan-400 opacity-0 group-hover:opacity-100 group-hover:top-full top-0 transition-all duration-[2.5s] ease-linear shadow-[0_0_10px_#06b6d4] pointer-events-none z-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
