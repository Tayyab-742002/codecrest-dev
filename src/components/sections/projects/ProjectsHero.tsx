"use client";

import Image from "next/image";
import { useMemo } from "react";

const HERO_BACKGROUND =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80";

const headlineLines = [
  {
    id: "line-1",
    text: "OUR",
    size: "text-[clamp(1.5rem,5vw,3.5rem)]",
  },
  {
    id: "line-2",
    text: "PROJECTS",
    size: "text-[clamp(2.2rem,8vw,5.5rem)]",
  },
];

export default function ProjectsHero() {
  const glowText = useMemo(
    () =>
      headlineLines.map((line) => (
        <p
          key={line.id}
          className={`${line.size} font-black uppercase tracking-[0.35em] text-white/90 drop-shadow-[0_0_35px_rgba(255,255,255,0.55)]`}
        >
          {line.text}
        </p>
      )),
    []
  );

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src={HERO_BACKGROUND}
          alt="Technology and innovation workspace"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/80 to-black" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-5 text-center sm:gap-8 sm:px-10 lg:px-16">
        <p className="text-[10px] font-semibold uppercase tracking-[0.6em] text-white/70 sm:text-xs">
          Codecrest // Portfolio
        </p>
        <div
          className="w-full space-y-3 text-balance"
          style={{
            fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
            fontWeight: "900",
            color: "white",
            textAlign: "center",
            textShadow: "0 0 50px rgba(255,255,255,0.3)",
            filter: "contrast(1.2)",
          }}
        >
          {glowText}
        </div>
        <p className="max-w-3xl text-sm text-white/80 sm:text-base md:text-lg">
          Explore our portfolio of transformative projects. From enterprise AI
          platforms to cloud-native solutions, see how we deliver impact at
          scale.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] uppercase tracking-[0.4em] text-white/65 sm:text-xs">
          <span className="rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
            Enterprise Solutions
          </span>
          <span className="rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
            AI · Cloud · DevOps · Data
          </span>
        </div>
      </div>
    </section>
  );
}

