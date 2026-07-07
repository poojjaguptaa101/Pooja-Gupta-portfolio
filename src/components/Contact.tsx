"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully (Simulated EmailJS Integration)!");
  };

  const socials = [
    { 
      name: "Email", 
      icon: <Mail className="w-5 h-5" />, 
      url: "mailto:poojjaguptaa101@gmail.com", 
      color: "hover:text-red-400" 
    },
    { 
      name: "GitHub", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ), 
      url: "https://github.com/poojjaguptaa101", 
      color: "hover:text-purple-400" 
    },
    { 
      name: "LinkedIn", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ), 
      url: "https://www.linkedin.com/in/poojjaguptaa/", 
      color: "hover:text-blue-400" 
    },
    { 
      name: "Twitter", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ), 
      url: "https://x.com", 
      color: "hover:text-cyan-400" 
    },
  ];

  return (
    <section id="contact" className="py-24 relative max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-cyan-400 font-mono text-sm tracking-widest uppercase"
        >
          Get In Touch
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-space font-bold text-3xl sm:text-5xl mt-2 text-white"
        >
          Let's Connect
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Side Details */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left">
          <div className="glass-panel p-8 rounded-3xl flex-1 flex flex-col justify-center">
            <h3 className="font-space font-bold text-2xl text-white mb-4">
              Collaborate on AI & Full Stack Projects
            </h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8">
              Have an interesting machine learning model pipeline to build, cloud resources to deploy, or a full-stack dashboard opportunity? Drop me a message!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/40 font-medium uppercase tracking-wider">Email Me</div>
                  <a href="mailto:poojjaguptaa101@gmail.com" className="text-sm font-semibold text-white hover:text-purple-400 transition-colors">
                    poojjaguptaa101@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/40 font-medium uppercase tracking-wider">Location</div>
                  <span className="text-sm font-semibold text-white">
                    Greater Noida, India - 201306
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((soc, idx) => {
              return (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 ${soc.color} hover:bg-white/10 hover:border-white/20 transition-all`}
                  title={soc.name}
                >
                  {soc.icon}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Side Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-7 glass-panel p-8 rounded-3xl flex flex-col gap-6 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-mono font-semibold text-white/50 uppercase tracking-wider">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="John Doe"
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/40 text-white placeholder-white/20 outline-none transition-all text-sm font-medium"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-mono font-semibold text-white/50 uppercase tracking-wider">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="john@example.com"
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/40 text-white placeholder-white/20 outline-none transition-all text-sm font-medium"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-xs font-mono font-semibold text-white/50 uppercase tracking-wider">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              required
              placeholder="Project Collaboration"
              className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/40 text-white placeholder-white/20 outline-none transition-all text-sm font-medium"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-mono font-semibold text-white/50 uppercase tracking-wider">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/40 text-white placeholder-white/20 outline-none transition-all text-sm font-medium resize-none"
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold transition-all self-start shadow-lg hover:shadow-cyan-500/10 text-sm"
          >
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
