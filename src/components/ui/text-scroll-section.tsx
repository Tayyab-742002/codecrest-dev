"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface TextScrollHeroProps {
  enableAnimations?: boolean;
  className?: string;
  startScale?: number;
}

export function TextScrollHero({
  enableAnimations = true,
  className = "",
  startScale = 0.4,
}: TextScrollHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!enableAnimations || shouldReduceMotion) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrolled = Math.max(0, -rect.top);
      const maxScroll = Math.max(containerHeight - windowHeight, 1);
      const progress = Math.min(Math.max(scrolled / maxScroll, 0), 1);

      // Ultra smooth easing
      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      setScrollProgress(eased);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableAnimations, shouldReduceMotion]);

  const shouldAnimate = enableAnimations && !shouldReduceMotion;

  // Refined animation properties
  const scale = startScale + scrollProgress * (1 - startScale);
  const opacity = 0.2 + scrollProgress * 0.8;
  const blur = (1 - scrollProgress) * 24;
  const letterSpacing = (1 - scrollProgress) * 0.6;
  const yOffset = (1 - scrollProgress) * 40;

  return (
    <div
      ref={containerRef}
      className={`relative min-h-[200vh] z-50 w-full ${className}`}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-zinc-50 via-neutral-50 to-stone-50">
        {/* Sophisticated background layers */}
        <div className="absolute inset-0">
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02),transparent_70%)]" />

          {/* Subtle noise texture */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Elegant grid */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgb(0 0 0 / 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgb(0 0 0 / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        {/* Ambient light effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(100, 100, 100, 0.03), transparent 60%)",
            opacity: scrollProgress * 0.5,
          }}
        />

        {/* Main text container */}
        <div className="relative z-10 px-8">
          <motion.div
            className="relative"
            style={{
              scale: shouldAnimate ? scale : 1,
              opacity: shouldAnimate ? opacity : 1,
              filter: shouldAnimate ? `blur(${blur}px)` : "none",
              y: shouldAnimate ? yOffset : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              mass: 0.5,
            }}
          >
            {/* Glow effect behind text */}
            <motion.div
              className="absolute inset-0 blur-3xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 100%)",
                opacity: scrollProgress * 0.4,
              }}
            />

            {/* Main heading */}
            <h1
              className="relative text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tight text-center"
              style={{
                letterSpacing: shouldAnimate ? `${letterSpacing}em` : "normal",
                background:
                  "linear-gradient(135deg, #8B4513 0%, #A0522D 30%, #CD853F 60%, #D2691E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 40px rgba(139, 69, 19, 0.2)",
              }}
            >
              Our Services
            </h1>

            {/* Animated underline */}
            <motion.div
              className="relative mx-auto mt-6 h-px overflow-hidden"
              style={{
                width: shouldAnimate
                  ? `${Math.min(scrollProgress * 120, 100)}%`
                  : "0%",
                maxWidth: "600px",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#8B4513] to-transparent" />
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-[#CD853F] to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  opacity: scrollProgress,
                }}
              />
            </motion.div>

            {/* Subtle tagline */}
            <motion.p
              className="mt-8 text-center text-sm md:text-base tracking-widest font-light text-slate-500 uppercase"
              style={{
                opacity: scrollProgress * 0.7,
              }}
            >
              Excellence in Every Detail
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
