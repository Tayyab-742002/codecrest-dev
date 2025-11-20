"use client";

import { motion, type Variants } from "framer-motion";
import type { BlogStat } from "@/src/data/blog.data";

interface BlogStatsProps {
  stats: BlogStat[];
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BlogStats({ stats }: BlogStatsProps) {
  if (!stats || stats.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#050505] py-16 md:py-24">
      <div className="container relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.metric}
              variants={itemVariants}
              className="text-center space-y-4"
            >
              <div className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base uppercase tracking-widest text-white/60 font-semibold">
                {stat.metric}
              </div>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xs mx-auto">
                {stat.context}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

