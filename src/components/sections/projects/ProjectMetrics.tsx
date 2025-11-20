"use client";

import { motion, type Variants } from "framer-motion";
import type { ProjectMetric } from "@/src/data/project.data";

interface ProjectMetricsProps {
  metrics: ProjectMetric[];
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  if (!metrics || metrics.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.03),transparent_70%)]" />

      <div className="container relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Results & Impact
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Measurable outcomes that demonstrate project success
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center space-y-4 p-6 rounded-xl border border-slate-200 bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-black">
                {metric.value}
              </div>
              <div className="text-sm sm:text-base uppercase tracking-widest text-slate-600 font-semibold">
                {metric.label}
              </div>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                {metric.context}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


