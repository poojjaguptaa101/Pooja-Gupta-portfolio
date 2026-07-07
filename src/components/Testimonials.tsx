"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Technical Lead",
      role: "AI & Sustainability Facilitation Track",
      comment: "Pooja demonstrated outstanding capability in building RAG pipelines and deploying CNN classification models. Her ability to translate mathematical concepts into production-grade Python architectures was highly valuable to the project.",
    },
    {
      name: "Senior Mentor",
      role: "Smart Bridge Program",
      comment: "Highly analytical and proactive. Pooja successfully deployed deep learning structures classifying plant disease vectors with high accuracy. Her Streamlit interfaces and code structuring were neat and modular.",
    },
    {
      name: "Evaluator",
      role: "Edunet Foundation Internship",
      comment: "Outstanding data-processing pipelines. Pooja managed and structured features for large datasets exceeding 10,000+ entries. Her LLM fitness planner integrations showed strong command of prompting models safely.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-cyan-400 font-mono text-sm tracking-widest uppercase"
        >
          Endorsements
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-space font-bold text-3xl sm:text-5xl mt-2 text-white"
        >
          Testimonials
        </motion.h2>
      </div>

      <div className="relative min-h-[250px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 sm:p-10 rounded-3xl w-full text-center relative hover:border-purple-500/20 transition-all flex flex-col items-center justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
              <MessageSquare className="w-5 h-5" />
            </div>

            <p className="text-base sm:text-lg text-white/80 italic leading-relaxed mb-6 font-sans">
              "{testimonials[activeIndex].comment}"
            </p>

            <h3 className="font-space font-bold text-lg text-white">
              {testimonials[activeIndex].name}
            </h3>
            <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase mt-1">
              {testimonials[activeIndex].role}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Carousel buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[-16px] sm:left-[-48px]">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white/60 hover:text-white transition-all shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-[-16px] sm:right-[-48px]">
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white/60 hover:text-white transition-all shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
