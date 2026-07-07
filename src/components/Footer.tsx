"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-[#05060d]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="font-mono text-xs text-white/40 tracking-wider">
          © {new Date().getFullYear()} POOJA GUPTA. ALL RIGHTS RESERVED.
        </span>

        <button
          onClick={handleScrollTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-white/60 hover:text-white transition-all text-xs font-semibold"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
