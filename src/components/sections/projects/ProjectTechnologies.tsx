"use client";

import { motion, type Variants } from "framer-motion";
import type { ProjectTechnology } from "@/src/data/project.data";

interface ProjectTechnologiesProps {
  technologies: ProjectTechnology[];
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const categoryColors: Record<string, string> = {
  Frontend: "bg-blue-500/10 border-blue-500/30 text-blue-400",
  Backend: "bg-purple-500/10 border-purple-500/30 text-purple-400",
  Database: "bg-green-500/10 border-green-500/30 text-green-400",
  DevOps: "bg-orange-500/10 border-orange-500/30 text-orange-400",
  Cloud: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
  "AI/ML": "bg-pink-500/10 border-pink-500/30 text-pink-400",
  Other: "bg-slate-500/10 border-slate-500/30 text-slate-400",
};

export default function ProjectTechnologies({
  technologies,
}: ProjectTechnologiesProps) {
  if (!technologies || technologies.length === 0) {
    return null;
  }

  const groupedByCategory = technologies.reduce(
    (acc, tech) => {
      const category = tech.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(tech);
      return acc;
    },
    {} as Record<string, ProjectTechnology[]>
  );

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Technology Stack
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Tools and technologies powering this project
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(groupedByCategory).map(([category, techs]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-black">
                {category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-wrap gap-3"
              >
                {techs.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`rounded-lg border px-4 py-2.5 text-sm font-medium backdrop-blur-sm hover:scale-105 transition-all duration-300 ${categoryColors[category] || categoryColors.Other}`}
                  >
                    {tech.name}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


