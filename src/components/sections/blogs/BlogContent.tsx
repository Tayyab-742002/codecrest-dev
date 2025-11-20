"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import type { BlogPost } from "@/src/data/blog.data";

interface BlogContentProps {
  blog: BlogPost;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function BlogContent({ blog }: BlogContentProps) {
  if (!blog.sections || blog.sections.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-white pb-10">
      <div className="container relative z-10 mx-auto w-full max-w-3xl px-6 sm:px-8 lg:px-12">
        {/* Excerpt */}
        <motion.div
          className="pt-20 pb-16 md:pt-28 md:pb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-lg sm:text-xl md:text-2xl font-light leading-[1.7] text-slate-600 tracking-tight">
            {blog.excerpt}
          </p>
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-200 mb-20 md:mb-28" />

        {/* Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-20 md:space-y-28"
        >
          {blog.sections.map((section, index) => (
            <motion.article
              key={section.heading}
              variants={itemVariants}
              className="space-y-10"
            >
              {/* Heading */}
              <div className="space-y-6">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold leading-[1.2] text-black tracking-tight">
                  {section.heading}
                </h2>
                {section.summary && (
                  <div className="prose prose-slate max-w-none">
                    <p className="text-base sm:text-lg leading-[1.75] text-slate-600 font-light tracking-wide">
                      {section.summary}
                    </p>
                  </div>
                )}
              </div>

              {/* Image */}
              {section.image && (
                <motion.figure
                  className="relative aspect-16/10 w-full overflow-hidden bg-slate-100"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <Image
                    src={section.image}
                    alt={section.heading}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 700px"
                  />
                </motion.figure>
              )}

              {/* Points */}
              {section.points && section.points.length > 0 && (
                <div className="space-y-5 pt-2">
                  {section.points.map((point, pointIndex) => (
                    <motion.div
                      key={pointIndex}
                      className="flex gap-5"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + pointIndex * 0.05,
                      }}
                    >
                      <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                      <p className="text-base sm:text-lg leading-[1.75] text-slate-700 font-light tracking-wide flex-1">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Insight */}
              {section.insight && (
                <motion.div
                  className="relative mt-12 pt-8 border-t border-slate-400 bg-neutral-500/30 p-5"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0">
                      <div className="h-0.5 w-8 bg-black" />
                    </div>
                    <p className="text-base sm:text-lg leading-[1.75] text-slate-800 font-light italic tracking-wide">
                      {section.insight}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Section Divider */}
              {index < blog.sections.length - 1 && (
                <div className="h-px w-full bg-slate-600 mt-16 md:mt-20" />
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
