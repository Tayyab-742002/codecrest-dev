"use client";

import { useEffect, useId } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const heroMetrics = [
  { metric: "45%", label: "avg. cycle time reduction" },
  { metric: "18", label: "markets supported" },
  { metric: "92%", label: "executive NPS" },
  { metric: "24/7", label: "global delivery coverage" },
];

export default function AboutHero() {
  const textControls = useAnimation();
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    textControls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.025 + 0.2,
        duration: 0.7,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }));
  }, [textControls]);

  const title = "We build systems that compound momentum for modern operators.";
  const description =
    "From financial services to climate infrastructure, we embed with teams, redesign operating models, and ship platforms that turn strategy into measurable value.";

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#050505] text-white overflow-hidden"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <div className="pointer-events-none absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-40"
          src="/background-video-2.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">
          About Codecrest
        </span>
        <h1
          id={titleId}
          className={`font-heading text-4xl md:text-6xl lg:text-[4.75rem] font-black leading-tight tracking-tight text-white`}
        >
          {title.split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              custom={index}
              initial={{ opacity: 0, y: 60 }}
              animate={textControls}
              className="inline-block"
              style={{ whiteSpace: "pre" }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <motion.p
          id={descriptionId}
          custom={title.length}
          initial={{ opacity: 0, y: 30 }}
          animate={textControls}
          className={` max-w-3xl text-base md:text-lg text-white/70`}
        >
          {description}
        </motion.p>
        <motion.div
          custom={title.length + 20}
          initial={{ opacity: 0, y: 30 }}
          animate={textControls}
          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Explore case studies
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-slate-200"
          >
            Connect with our team
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
