"use client";

import { motion, type Variants } from "framer-motion";
import type { ProjectTimeline as ProjectTimelineType } from "@/src/data/project.data";
import { Calendar, CheckCircle2 } from "lucide-react";

interface ProjectTimelineProps {
  timeline: ProjectTimelineType[];
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function ProjectTimeline({
  timeline,
}: ProjectTimelineProps) {
  if (!timeline || timeline.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#050505] py-20 md:py-28">
      <div className="container relative z-10 mx-auto w-full max-w-4xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Project Timeline
          </h2>
          <p className="text-base sm:text-lg text-white/70">
            A structured approach to project delivery
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/20 md:left-1/2 md:-translate-x-0.5" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {timeline.map((phase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex gap-6 md:items-center"
              >
                {/* Timeline dot */}
                <div className="relative z-10 shrink-0">
                  <div className="h-16 w-16 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center backdrop-blur-sm md:absolute md:left-1/2 md:-translate-x-1/2">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 pb-12 md:pb-0 ${
                    index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                  }`}
                >
                  <div className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="h-4 w-4 text-white/60" />
                      <span className="text-xs uppercase tracking-wider text-white/60 font-medium">
                        {phase.duration}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                      {phase.phase}
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
                      {phase.description}
                    </p>
                    {phase.deliverables && phase.deliverables.length > 0 && (
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, dIndex) => (
                          <li
                            key={dIndex}
                            className="flex gap-2 text-xs sm:text-sm text-white/60"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


