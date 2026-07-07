import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pooja Gupta | AI Engineer & Full Stack Developer",
  description: "AI/ML Undergraduate and Full Stack Developer portfolio detailing neural network deployments, RAG agents, and cloud platforms.",
  keywords: "Pooja Gupta, AI Engineer, Full Stack Developer, Next.js, Portfolio, React, Three.js, Generative AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark scroll-smooth`}
    >
      <body className="bg-[#050816] text-white min-h-screen font-sans antialiased overflow-x-hidden relative">
        {/* Glow blob backgrounds */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full glow-orb-1 -z-10 pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full glow-orb-2 -z-10 pointer-events-none"></div>
        {children}
      </body>
    </html>
  );
}
