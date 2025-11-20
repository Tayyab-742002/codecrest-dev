"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ProjectSolution } from "@/src/data/project.data";
import { CheckCircle2 } from "lucide-react";

interface ProjectSolutionsProps {
  solutions: ProjectSolution[];
}

const FeatureRow = ({
  solution,
  index,
  reverse,
}: {
  solution: ProjectSolution;
  index: number;
  reverse: boolean;
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col items-center gap-12 md:gap-20 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <motion.div
        style={{ y: textY }}
        className="max-w-xl space-y-5 text-center md:text-left"
      >
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <CheckCircle2 className="h-5 w-5 text-green-400" />
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            Solution {String(index + 1).padStart(2, "0")}
          </p>
        </div>
        <h3 className="text-3xl font-semibold text-white sm:text-4xl">
          {solution.title}
        </h3>
        <p className="text-base leading-relaxed text-white/70 sm:text-lg">
          {solution.description}
        </p>
      </motion.div>

      {solution.image && (
        <motion.div
          style={{ opacity: imageOpacity, clipPath }}
          className="relative w-full max-w-xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(15,23,42,0.45)]"
        >
          <div className="relative aspect-4/3 w-full">
            <Image
              src={solution.image}
              alt={solution.title}
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-black/40 via-black/10 to-transparent" />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 border border-white/10"
          />
        </motion.div>
      )}
    </div>
  );
};

export default function ProjectSolutions({ solutions }: ProjectSolutionsProps) {
  if (!solutions || solutions.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#050505] py-20 md:py-28">
      <div className="container relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our Solutions
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Innovative approaches that addressed each challenge
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {solutions.map((solution, index) => (
            <FeatureRow
              key={index}
              solution={solution}
              index={index}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
