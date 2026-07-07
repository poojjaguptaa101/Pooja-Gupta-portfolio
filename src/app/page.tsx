"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GitHubLeetCode from "@/components/GitHubLeetCode";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Terminal from "@/components/Terminal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <>
      {/* 1. Loading Entrance Loader Screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="flex flex-col min-h-screen">
          {/* 2. Custom trailing cursor */}
          <CustomCursor />

          {/* 3. Sticky glass header navbar */}
          <Navbar onToggleTerminal={() => setIsTerminalOpen((prev) => !prev)} />

          {/* 4. Keyboard dialog commands palette (Ctrl+K) */}
          <CommandPalette onToggleTerminal={() => setIsTerminalOpen((prev) => !prev)} />

          <main className="flex-1">
            {/* 5. 3D Stars Plexus Hero Canvas */}
            <Hero />

            {/* 6. Text bios & statistics counters */}
            <About />

            {/* 7. Timeline Experience & Education */}
            <Experience />

            {/* 8. Categorized Skills bento cards */}
            <Skills />

            {/* 9. Dynamic Filter projects grids */}
            <Projects />

            {/* 10. GitHub stars and LeetCode solved progress panels */}
            <GitHubLeetCode />

            {/* 11. Sliding recruiters comments */}
            <Testimonials />

            {/* 12. EmailJS contact forms */}
            <Contact />
          </main>

          {/* 13. Interactive developer shell terminal */}
          <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

          {/* 14. Footer panel with copyright */}
          <Footer />
        </div>
      )}
    </>
  );
}
