# 🚀 Pooja Gupta - Premium 3D Developer Portfolio

A world-class, premium, dark-themed personal portfolio website featuring immersive 3D canvas particles, interactive keyboard command consoles, developer shell terminals, and dynamic GitHub/LeetCode bento dashboard statistics.

**Live Staging Link**: [https://pooja-gupta-portfolio.surge.sh](https://pooja-gupta-portfolio.surge.sh)

---

## 🛠️ Tech Stack

*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
*   **Library**: [React 19](https://react.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://gsap.com/)
*   **3D Graphics**: [Three.js](https://threejs.org/) ([React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction) + [Drei](https://github.com/pmndrs/drei))
*   **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
*   **Icons**: [Lucide Icons](https://lucide.dev/)

---

## ✨ Features & Architecture

### 🎭 Stage 1: Cinematic Intro Page
*   **Interactive Particle Canvas**: Features a responsive canvas particle field reacting to user cursor pull physics.
*   **Typist Sequence Subtitles**: Alternates through primary engineering roles (`AI Engineer`, `Software Engineer`, `Full Stack Developer`).
*   **GSAP Exit Transition**: Fades out using scale, zoom, and high-blur filters when the glassmorphic **ENTER PORTFOLIO** button is clicked.

### 🌐 Stage 2: Main Portfolio
*   **3D Constellations Plexus Hero**: Interactive WebGL particle mesh canvas tracking frame delta orbits.
*   **HUD Command Palette (`Ctrl+K`)**: Modal interface enabling keyboard-driven navigation across sections.
*   **Developer Terminal console**: Slide-up interactive CLI drawer supporting basic commands (`help`, `about`, `skills`, `projects`, `clear`).
*   **Split Timeline Columns**: Restructured vertical experience timelines separating **Work Experience** and **Education** side-by-side.
*   **Bento Analytics Dashboard**: Integrates users endpoint queries to pull live GitHub repositories, stars, followers, and language charts alongside LeetCode solved status bars.
*   **Responsive layouts**: Fully optimized and responsive on both mobile and desktop viewports.

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Compile Production Static Export
Generates a highly optimized static HTML/CSS/JS export inside the `out/` directory:
```bash
npm run build
```

### 4. Deploy to Surge
```bash
npx surge out pooja-gupta-portfolio.surge.sh
```
