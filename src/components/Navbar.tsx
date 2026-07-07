"use client";

import { useState, useEffect } from "react";
import { Menu, X, Terminal, Search } from "lucide-react";

interface NavbarProps {
  onToggleTerminal: () => void;
}

export default function Navbar({ onToggleTerminal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ["hero", "about", "experience", "skills", "projects", "achievements", "contact"];
      const currentScroll = window.scrollY + 160;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.clientHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact", id: "contact" },
  ];

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
        isScrolled
          ? "bg-[#050816]/70 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="font-space font-bold text-xl tracking-tight text-white hover:text-purple-400 transition-colors"
        >
          Pooja Gupta<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    activeSection === item.id ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-white/10" />

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                // Dispatch event to open command palette
                window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }));
              }}
              className="text-white/60 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 text-xs"
              title="Search console (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Ctrl+K</span>
            </button>

            <button
              onClick={onToggleTerminal}
              className="text-white/60 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              title="Open console"
            >
              <Terminal className="w-4 h-4" />
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onToggleTerminal}
            className="text-white/60 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white/60 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#050816] border-b border-white/5 py-6 px-6 shadow-2xl">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className={`text-left w-full py-2 text-lg font-medium transition-colors ${
                    activeSection === item.id ? "text-purple-400" : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
