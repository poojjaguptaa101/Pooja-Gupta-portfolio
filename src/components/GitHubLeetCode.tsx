"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Star, GitFork, Users, Code, Calendar } from "lucide-react";

interface GitHubStats {
  followers: number;
  publicRepos: number;
  stars: number;
  languages: { name: string; percentage: number }[];
}

interface LeetCodeStats {
  solved: number;
  total: number;
  rating: number;
  badge: string;
}

export default function GitHubLeetCode() {
  const [gitStats, setGitStats] = useState<GitHubStats>({
    followers: 12,
    publicRepos: 26,
    stars: 18,
    languages: [
      { name: "Python", percentage: 65 },
      { name: "JavaScript", percentage: 20 },
      { name: "TypeScript", percentage: 10 },
      { name: "Java", percentage: 5 }
    ]
  });

  const [lcStats] = useState<LeetCodeStats>({
    solved: 312,
    total: 3200,
    rating: 1540,
    badge: "Knight / Guardian"
  });

  useEffect(() => {
    // Attempt dynamic fetch from Github API (non-blocking)
    const fetchGitHubData = async () => {
      try {
        const userRes = await fetch("https://api.github.com/users/poojjaguptaa101");
        if (userRes.ok) {
          const userData = await userRes.json();
          
          // Fetch repos to calculate stars
          const reposRes = await fetch("https://api.github.com/users/poojjaguptaa101/repos?per_page=100");
          let starsCount = 18;
          if (reposRes.ok) {
            const reposData = await reposRes.json();
            starsCount = reposData.reduce((acc: number, curr: any) => acc + curr.stargazers_count, 0);
          }

          setGitStats({
            followers: userData.followers || 12,
            publicRepos: userData.public_repos || 26,
            stars: starsCount,
            languages: [
              { name: "Python", percentage: 65 },
              { name: "JavaScript", percentage: 20 },
              { name: "TypeScript", percentage: 10 },
              { name: "Java", percentage: 5 }
            ]
          });
        }
      } catch (err) {
        console.warn("GitHub API limit exceeded or network down, falling back to mock data.");
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="achievements" className="py-24 relative max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-cyan-400 font-mono text-sm tracking-widest uppercase"
        >
          Activity
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-space font-bold text-3xl sm:text-5xl mt-2 text-white"
        >
          Code Profiles & Stats
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* GitHub Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:border-purple-500/20 transition-all text-left"
        >
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-space font-bold text-lg text-white">GitHub Analytics</h3>
                  <a href="https://github.com/poojjaguptaa101" target="_blank" className="text-xs font-mono text-cyan-400 hover:underline">
                    @poojjaguptaa101
                  </a>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/50 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                <span>Active</span>
              </div>
            </div>

            {/* GitHub Stats counters bento */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 border border-white/5 p-4 rounded-2xl text-center">
                <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center mx-auto mb-2 text-purple-400">
                  <Star className="w-4 h-4" />
                </div>
                <div className="font-space font-bold text-xl text-white">{gitStats.stars}</div>
                <div className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">Stars</div>
              </div>

              <div className="bg-white/5 border border-white/5 p-4 rounded-2xl text-center">
                <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center mx-auto mb-2 text-cyan-400">
                  <GitFork className="w-4 h-4" />
                </div>
                <div className="font-space font-bold text-xl text-white">{gitStats.publicRepos}</div>
                <div className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">Repos</div>
              </div>

              <div className="bg-white/5 border border-white/5 p-4 rounded-2xl text-center">
                <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center mx-auto mb-2 text-yellow-400">
                  <Users className="w-4 h-4" />
                </div>
                <div className="font-space font-bold text-xl text-white">{gitStats.followers}</div>
                <div className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">Followers</div>
              </div>
            </div>

            {/* Languages progress list */}
            <div>
              <h4 className="font-space font-bold text-sm text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Code className="w-4 h-4 text-purple-400" />
                <span>Language Breakdown</span>
              </h4>
              <div className="space-y-3">
                {gitStats.languages.map((lang, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono text-white/80">
                      <span>{lang.name}</span>
                      <span>{lang.percentage}%</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-400"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* LeetCode Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:border-purple-500/20 transition-all text-left"
        >
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-space font-bold text-lg text-white">LeetCode Achievements</h3>
                  <a href="https://leetcode.com" target="_blank" className="text-xs font-mono text-cyan-400 hover:underline">
                    Coding Track
                  </a>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/50 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Daily Practice</span>
              </div>
            </div>

            {/* LeetCode solved progress */}
            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl mb-8 flex flex-col sm:flex-row items-center gap-6 justify-around">
              <div className="relative w-28 h-28 flex items-center justify-center">
                {/* Circular ring representation */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="56" cy="56" r="48" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="transparent" />
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    stroke="#7C3AED"
                    strokeWidth="6"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 48}
                    strokeDashoffset={2 * Math.PI * 48 * (1 - lcStats.solved / lcStats.total)}
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="font-space font-bold text-2xl text-white">{lcStats.solved}</span>
                  <span className="text-[10px] text-white/40 uppercase font-semibold">Solved</span>
                </div>
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="text-sm font-medium text-white/70">
                  Rating: <span className="text-cyan-400 font-bold">{lcStats.rating}</span>
                </div>
                <div className="text-sm font-medium text-white/70">
                  Badge: <span className="text-purple-400 font-bold">{lcStats.badge}</span>
                </div>
                <div className="text-xs text-white/40 font-mono">
                  Targeting 500+ problems by year-end.
                </div>
              </div>
            </div>

            {/* Heatmap-like grid visualization */}
            <div>
              <h4 className="font-space font-bold text-sm text-white uppercase tracking-wider mb-4">
                Consistency Grid
              </h4>
              <div className="grid grid-cols-7 gap-1 max-w-sm mx-auto sm:mx-0">
                {Array.from({ length: 49 }).map((_, idx) => {
                  const opacity = idx % 3 === 0 ? "bg-purple-600/60" : idx % 5 === 0 ? "bg-cyan-500/80" : idx % 7 === 0 ? "bg-purple-500" : "bg-white/5";
                  return (
                    <div
                      key={idx}
                      className={`w-4 h-4 rounded ${opacity} border border-transparent hover:border-white/20 transition-all`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
