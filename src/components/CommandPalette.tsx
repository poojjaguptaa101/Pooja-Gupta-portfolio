"use client";

import { useEffect, useState, useRef } from "react";
import { Terminal as TerminalIcon, Home, User, Briefcase, Code, Award, Trophy, Mail, Search } from "lucide-react";

interface CommandPaletteProps {
  onToggleTerminal: () => void;
}

export default function CommandPalette({ onToggleTerminal }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const items = [
    { name: "Scroll to Home", icon: Home, action: () => handleScroll("hero") },
    { name: "Scroll to About", icon: User, action: () => handleScroll("about") },
    { name: "Scroll to Experience", icon: Briefcase, action: () => handleScroll("experience") },
    { name: "Scroll to Skills", icon: Code, action: () => handleScroll("skills") },
    { name: "Scroll to Projects", icon: Award, action: () => handleScroll("projects") },
    { name: "Scroll to Achievements", icon: Trophy, action: () => handleScroll("achievements") },
    { name: "Scroll to Contact", icon: Mail, action: () => handleScroll("contact") },
    { name: "Toggle Interactive Terminal", icon: TerminalIcon, action: () => { onToggleTerminal(); setIsOpen(false); } },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);
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

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div 
        className="w-full max-w-lg glass-panel rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-white/5 flex items-center gap-3">
          <Search className="w-5 h-5 text-purple-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-white placeholder-white/40 text-base"
          />
          <kbd className="hidden sm:inline-block px-2 py-1 text-xs text-white/40 bg-white/5 rounded border border-white/10">
            ESC
          </kbd>
        </div>

        <div className="max-h-72 overflow-y-auto p-2">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={item.action}
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left text-sm text-white/80 hover:text-white hover:bg-purple-500/10 transition-colors group"
                >
                  <Icon className="w-4 h-4 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="flex-1">{item.name}</span>
                </button>
              );
            })
          ) : (
            <div className="p-4 text-center text-sm text-white/40">No results found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
