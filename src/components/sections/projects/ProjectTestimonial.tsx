"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface ProjectTestimonialProps {
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export default function ProjectTestimonial({
  testimonial,
}: ProjectTestimonialProps) {
  if (!testimonial) {
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
          className="relative rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-12 md:p-16 backdrop-blur-sm"
        >
          <Quote className="h-12 w-12 text-white/20 mb-6" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-white mb-8">
            {testimonial.quote}
          </blockquote>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-white/10">
            <div>
              <div className="text-lg sm:text-xl font-semibold text-white">
                {testimonial.author}
              </div>
              <div className="text-sm sm:text-base text-white/60">
                {testimonial.role}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


