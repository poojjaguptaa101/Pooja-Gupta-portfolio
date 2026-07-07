"use client";

import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { FileText, ArrowRight, MessageSquare } from "lucide-react";
// Sphere points generator helper to prevent maath SSR and typing issues
const generateSpherePoints = (count: number, radius: number): Float32Array => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = radius * Math.cbrt(Math.random());
    
    points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    points[i * 3 + 2] = r * Math.cos(phi);
  }
  return points;
};

// StarField Plexus Background Component
function StarField() {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => generateSpherePoints(1500, 1.2));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06B6D4"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// Client-only canvas container to prevent SSR hydrate issues
function ThreeCanvas() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 -z-10 bg-transparent">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
    </div>
  );
}

export default function Hero() {
  const roles = ["AI Engineer.", "MERN Developer.", "Generative AI Architect.", "Software Engineer."];
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

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* 3D constellations backdrop */}
      <ThreeCanvas />

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="https://github.com/poojjaguptaa101"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-medium shadow-lg hover:shadow-cyan-500/25 transition-all text-sm"
            >
              <span>Download Resume</span>
              <FileText className="w-4 h-4" />
            </a>

            <button
              onClick={() => handleScrollTo("projects")}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white font-medium transition-all text-sm"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 text-purple-400" />
            </button>

            <button
              onClick={() => handleScrollTo("contact")}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-purple-500/30 hover:border-purple-500 text-white font-medium transition-all text-sm"
            >
              <span>Hire Me</span>
              <MessageSquare className="w-4 h-4 text-cyan-400" />
            </button>
          </motion.div>
        </div>

        {/* Right Side Photo with floating effects */}
        <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-80 h-80 rounded-full bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 backdrop-blur-3xl flex items-center justify-center border border-purple-500/10 relative glow-purple group"
          >
            {/* Center profile image */}
            <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-purple-500/30 flex items-center justify-center shadow-2xl relative hover:border-cyan-400/40 transition-all duration-300 bg-[#050816]">
              <img
                src="/profile.jpg"
                alt="Pooja Gupta"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Floating orb satellites */}
            <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-cyan-400/50 blur-[2px] animate-bounce"></div>
            <div className="absolute bottom-10 right-4 w-8 h-8 rounded-full bg-purple-500/50 blur-[2px] animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
