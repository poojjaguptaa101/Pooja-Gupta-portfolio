"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { Sparkles, Terminal as TermIcon, Play } from "lucide-react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const titleText = "Building AI-powered solutions and modern digital experiences.";
  const titleWords = titleText.split(" ");

  const roles = ["AI Engineer", "Software Engineer", "Full Stack Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const logs = [
    "Initializing Neural Engines...",
    "Injecting RAG Pipelines...",
    "Querying GitHub Contributions...",
    "Assembling Bento Viewports...",
    "Compiling 3D Starfields...",
    "Interface Ready. Welcome."
  ];

  // 1. Interactive Mouse Lightspot Track
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 2. Interactive Canvas Particles Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    // Create initial floating nodes
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? "124, 58, 237" : "6, 182, 212", // purple or cyan
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw background spotlight
      const gradient = ctx.createRadialGradient(
        mousePos.x,
        mousePos.y,
        10,
        mousePos.x,
        mousePos.y,
        width * 0.4
      );
      gradient.addColorStop(0, "rgba(20, 15, 45, 0.2)");
      gradient.addColorStop(1, "rgba(5, 8, 22, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw interactive connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p1.color}, ${p1.alpha})`;
        ctx.fill();

        // Check distance with mouse to add pull
        const dx = mousePos.x - p1.x;
        const dy = mousePos.y - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p1.x += dx * 0.005;
          p1.y += dy * 0.005;
        }

        // Draw links
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ldx = p1.x - p2.x;
          const ldy = p1.y - p2.y;
          const distance = Math.sqrt(ldx * ldx + ldy * ldy);
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.12 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  // 3. Typist Title rotation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullRole = roles[roleIndex];

    const tick = () => {
      if (!isDeleting) {
        setRoleText(currentFullRole.substring(0, roleText.length + 1));
        if (roleText === currentFullRole) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
        } else {
          timer = setTimeout(tick, 100);
        }
      } else {
        setRoleText(currentFullRole.substring(0, roleText.length - 1));
        if (roleText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          timer = setTimeout(tick, 400);
        } else {
          timer = setTimeout(tick, 50);
        }
      }
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIndex]);

  // 4. Loading Progress Bar Simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoaded(true);
          return 100;
        }
        // Logs updates based on progress thresholds
        const step = Math.floor(Math.random() * 12) + 4;
        const next = prev + step;
        const logIndex = Math.min(Math.floor((next / 100) * logs.length), logs.length - 1);
        setCurrentLogIndex(logIndex);
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // 5. Cinematic Entrance Switch Transition (using GSAP and framer exit)
  const handleEnter = () => {
    if (screenRef.current) {
      // Explode scale and blur transition using GSAP
      gsap.to(screenRef.current, {
        scale: 1.15,
        filter: "blur(20px)",
        opacity: 0,
        duration: 1.1,
        ease: "power3.inOut",
        onComplete: () => {
          setVisible(false);
          onComplete();
        },
      });
    } else {
      setVisible(false);
      onComplete();
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <div
          ref={screenRef}
          className="fixed inset-0 bg-[#050816] z-[99999] overflow-hidden flex flex-col justify-between"
        >
          {/* Subtle noise and radial spot light effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.06),transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none" />

          {/* Interactive particles background canvas */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

          {/* Top header navigation style stats */}
          <div className="max-w-7xl w-full mx-auto px-8 pt-8 flex items-center justify-between z-10">
            <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Subsystem v1.0.5 // Pooja Gupta</span>
            </span>
            
            <button
              onClick={handleEnter}
              className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white/50 hover:text-white transition-all text-xs font-mono"
            >
              Skip Intro
            </button>
          </div>

          {/* Center Immersive Area */}
          <div className="max-w-4xl w-full mx-auto px-6 flex flex-col items-center justify-center text-center z-10 flex-1">
            {/* Immersive glow light mesh backdrop */}
            <div className="absolute w-[450px] h-[450px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-[pulse_6s_infinite]" />

            <motion.h1
              initial={{ letterSpacing: "0.2em", opacity: 0, y: -20 }}
              animate={{ letterSpacing: "0.08em", opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="font-space font-bold text-5xl sm:text-7xl tracking-widest text-white uppercase relative drop-shadow-[0_0_15px_rgba(124,58,237,0.3)] mb-4"
            >
              POOJA GUPTA
            </motion.h1>

            {/* Subtitle Roles Typewriter */}
            <div className="h-8 mb-6 font-mono text-cyan-400 text-sm sm:text-lg tracking-wider font-semibold">
              <span className="text-white/60">I build as an </span>
              <span className="text-cyan-400 border-r-2 border-cyan-400 pr-1 animate-[pulse_0.8s_infinite]">{roleText}</span>
            </div>

            {/* Fade Up Paragraph word-by-word */}
            <div className="max-w-xl mb-12 flex flex-wrap justify-center gap-x-1.5 gap-y-1">
              {titleWords.map((word, wIdx) => (
                <motion.span
                  key={wIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + wIdx * 0.05 }}
                  className="text-white/70 text-sm sm:text-base font-sans"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Dynamic Console status logging */}
            <AnimatePresence mode="wait">
              {!isLoaded ? (
                <motion.div
                  key="loader"
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-sm flex flex-col items-center"
                >
                  {/* Console logs */}
                  <div className="h-6 mb-3 flex items-center gap-2 text-white/40 font-mono text-xs">
                    <TermIcon className="w-3.5 h-3.5 text-purple-400" />
                    <span>{logs[currentLogIndex]}</span>
                  </div>

                  {/* Glass progress bar */}
                  <div className="w-64 h-[3px] bg-white/10 rounded-full overflow-hidden relative mb-2">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-amber-400 transition-all duration-100 ease-out"
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                  </div>

                  <span className="text-[10px] font-mono text-cyan-400/60 tracking-widest uppercase">
                    {Math.min(progress, 100)}% Synchronized
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="enter-action"
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  className="relative group"
                >
                  {/* Magnetic glowing rings */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur-xl opacity-40 group-hover:opacity-75 transition-all duration-300 -z-10 group-hover:scale-105" />
                  
                  <button
                    onClick={handleEnter}
                    className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-purple-500/30 hover:border-cyan-400 text-white font-space font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(124,58,237,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all cursor-pointer overflow-hidden relative"
                  >
                    <Play className="w-4 h-4 text-purple-400 fill-purple-400 group-hover:text-cyan-400 group-hover:fill-cyan-400 transition-colors" />
                    <span>Enter Portfolio</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom details copyright indicator */}
          <div className="max-w-7xl w-full mx-auto px-8 pb-8 flex items-center justify-between text-[9px] font-mono text-white/20 z-10">
            <span>// DEEP-TECH COGNITIVE INTERFACE</span>
            <span>PRESS ESCAPE FOR QUICK ACCESS</span>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
