"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "AI Intern",
      org: "1M1B AI for Sustainability",
      duration: "May 2026 - June 2026 (6 Weeks)",
      desc: "Gained hands-on experience in AI, Machine Learning, LLMs, Retrieval-Augmented Generation (RAG), and Agentic AI. Developed an AI-powered Clean Water & Sanitation project to promote water conservation. Managed version control and documentation using GitHub.",
      type: "work",
    },
    {
      title: "AI Intern",
      org: "Smart Bridge",
      duration: "Feb 2026 - April 2026 (3 Months)",
      desc: "Developed an AI-powered Leaf Disease Detection system using Convolutional Neural Networks (CNN) to classify plant leaf diseases from uploaded images. Built an interactive Streamlit application using Python and TensorFlow.",
      type: "work",
    },
    {
      title: "AI/ML Intern",
      org: "Edunet Foundation",
      duration: "Feb 2026 - Mar 2026 (6 Weeks)",
      desc: "Developed ML models using Python and Scikit-learn, spearheading end-to-end data preprocessing and feature engineering for datasets exceeding 10,000+ records. Designed and built an AI-powered Fitness Planner using LLMs.",
      type: "work",
    },
    {
      title: "Machine Learning Intern",
      org: "Enginow",
      duration: "Jan 2026",
      desc: "Validated predictive ML models using Python, Pandas, and Scikit-learn, delivering data-driven insights across 3+ project domains. Conducted Exploratory Data Analysis (EDA) and model evaluations.",
      type: "work",
    },
    {
      title: "Google Cloud Student Ambassador",
      org: "Google Cloud Campus Program",
      duration: "August 2025 - Jan 2026",
      desc: "Promoted cloud literacy, conducted technical workshops on GCP services, and facilitated study jams and cohort tracks across campus.",
      type: "work",
    },
    {
      title: "Google Cloud Arcade Cohort 1 & 2",
      org: "Google Cloud Academy",
      duration: "April 2025 - Dec 2025",
      desc: "Completed intensive practical programs covering serverless architectures, Kubernetes engine clusters, BigQuery data pipelines, and foundational GenAI workflows on GCP.",
      type: "work",
    },
  ];

  const education = [
    {
      title: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering (AIML)",
      org: "Ajay Kumar Garg Engineering College",
      duration: "2024 - 2027 | GPA: 7.65",
      desc: "Specializing in Computer Science with a focus on Artificial Intelligence and Machine Learning models, mathematical scaling, and deep neural networks.",
    },
    {
      title: "Diploma in CSE",
      field: "Computer Science & Engineering",
      org: "Km. Mayawati Gov. Girls Polytechnic College",
      duration: "2021 - 2024 | Percentage: 79%",
      desc: "Acquired foundational training in programming methodologies, database management systems, data structures, and standard web development paradigms.",
    },
  ];

  return (
    <section id="experience" className="py-24 relative max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-cyan-400 font-mono text-sm tracking-widest uppercase"
        >
          My Journey
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-space font-bold text-3xl sm:text-5xl mt-2 text-white"
        >
          History & Qualifications
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Experience */}
        <div className="space-y-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-space font-bold text-2xl text-white">Work Experience</h3>
          </div>

          <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-4 space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative text-left"
              >
                {/* Point Indicator */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[#050816] border-2 border-purple-500 flex items-center justify-center text-purple-400 shadow-[0_0_12px_rgba(124,58,237,0.3)]">
                  <Briefcase className="w-3 h-3" />
                </div>

                {/* Timeline Card */}
                <div className="glass-panel p-6 rounded-2xl hover:border-purple-500/20 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all">
                  <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
                    {exp.duration}
                  </span>
                  <h4 className="font-space font-bold text-lg sm:text-xl text-white mt-1">
                    {exp.title}
                  </h4>
                  <h5 className="text-xs font-semibold text-purple-400 uppercase tracking-wide mt-0.5">
                    {exp.org}
                  </h5>
                  <p className="text-sm text-white/70 mt-3 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Education */}
        <div className="space-y-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-space font-bold text-2xl text-white">Education</h3>
          </div>

          <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-4 space-y-10">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative text-left"
              >
                {/* Point Indicator */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[#050816] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                  <GraduationCap className="w-3 h-3" />
                </div>

                {/* Timeline Card */}
                <div className="glass-panel p-6 rounded-2xl hover:border-cyan-400/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all">
                  <span className="text-xs font-mono font-semibold tracking-wider text-purple-400 uppercase">
                    {edu.duration}
                  </span>
                  <h4 className="font-space font-bold text-lg sm:text-xl text-white mt-1">
                    {edu.title}
                  </h4>
                  <div className="text-xs font-mono text-white/50 uppercase mt-0.5 font-semibold">
                    {edu.field}
                  </div>
                  <h5 className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mt-1">
                    {edu.org}
                  </h5>
                  <p className="text-sm text-white/70 mt-3 leading-relaxed">
                    {edu.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
