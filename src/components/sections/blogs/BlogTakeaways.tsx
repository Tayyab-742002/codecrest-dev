"use client";

import { motion, type Variants } from "framer-motion";

interface BlogTakeawaysProps {
  takeaways: string[];
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function BlogTakeaways({ takeaways }: BlogTakeawaysProps) {
  if (!takeaways || takeaways.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container relative z-10 mx-auto w-full max-w-3xl px-6 sm:px-8 lg:px-12">
        {/* Divider */}
        <div className="h-px w-full bg-slate-200 mb-16 md:mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold leading-[1.2] text-black tracking-tight mb-2">
            Key Takeaways
          </h2>
        </motion.div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5"
        >
          {takeaways.map((takeaway, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex gap-5"
            >
              <div className="mt-1.5 shrink-0">
                <div className="h-0.5 w-8 bg-black" />
              </div>
              <p className="text-base sm:text-lg leading-[1.75] text-slate-700 font-light tracking-wide flex-1">
                {takeaway}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

