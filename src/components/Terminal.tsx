"use client";

import { useState, useRef, useEffect } from "react";
import { X, ChevronRight } from "lucide-react";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  input: string;
  output: string[];
}

export default function Terminal({ isOpen, onClose }: TerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      input: "system-init",
      output: [
        "Welcome to Pooja Gupta's Interactive Terminal.",
        "Type 'help' to see the list of available commands.",
      ],
    },
  ]);
  const consoleEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      consoleEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output: string[] = [];

    switch (cmd) {
      case "help":
        output = [
          "Available commands:",
          "  about    - Displays professional summary",
          "  skills   - Lists technical skillsets",
          "  projects - Summarizes key featured projects",
          "  contact  - Shows contact email & LinkedIn",
          "  clear    - Clears the terminal screen",
          "  close    - Closes this developer terminal",
        ];
        break;
      case "about":
        output = [
          "Pooja Gupta",
          "AI Engineer & Full Stack Developer",
          "A B.Tech CSE (AIML) undergraduate skilled in machine learning models, RAG, and cloud architecture.",
        ];
        break;
      case "skills":
        output = [
          "Technical Stack:",
          "  Languages: Python, SQL, Java, JS, TS",
          "  Frameworks: Next.js, React, Node.js, Express, TensorFlow",
          "  AI Tools: LangChain, RAG pipelines, Prompt Engineering",
        ];
        break;
      case "projects":
        output = [
          "Featured Projects:",
          "  - Multi-Agentic Blog Generation",
          "  - Ecotrace - AI-Powered Sustainability Platform",
          "  - Industrial Brain - AI Industrial Assistant",
          "  - Leaf Disease Detection",
        ];
        break;
      case "contact":
        output = [
          "Email: poojjaguptaa101@gmail.com",
          "LinkedIn: linkedin.com/in/poojjaguptaa",
          "GitHub: github.com/poojjaguptaa101",
        ];
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "close":
        onClose();
        setInput("");
        return;
      default:
        output = [`Command not found: '${input}'. Type 'help' for options.`];
    }

    setHistory((prev) => [...prev, { input, output }]);
    setInput("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-80 bg-[#090b16] border-t border-purple-500/30 z-[999] flex flex-col font-mono text-sm shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2 bg-[#05060d] border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="ml-2 text-white/60 text-xs">developer_terminal.sh</span>
        </div>
        <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {history.map((item, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-2 text-cyan-400">
              <ChevronRight className="w-3.5 h-3.5" />
              <span>{item.input}</span>
            </div>
            <div className="mt-1 space-y-1 text-white/80 pl-6">
              {item.output.map((line, lIdx) => (
                <div key={lIdx}>{line}</div>
              ))}
            </div>
          </div>
        ))}
        <div ref={consoleEndRef} />
      </div>

      <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 p-4 bg-[#05060d] border-t border-white/5">
        <ChevronRight className="w-4 h-4 text-purple-400" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a command..."
          className="flex-1 bg-transparent border-none outline-none text-cyan-400 caret-cyan-400"
          autoFocus
        />
      </form>
    </div>
  );
}
