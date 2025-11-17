"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { type ServiceDetail } from "@/src/data/service.data";

interface ServiceOverviewProps {
  service: ServiceDetail;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function buildStats(service: ServiceDetail) {
  const stats: { value: string; label: string }[] = [];

  if (service.features?.length) {
    stats.push({
      value: `${service.features.length}+`,
      label: "Core Capabilities",
    });
  }

  if (service.useCases?.length) {
    stats.push({
      value: `${service.useCases.length}`,
      label: "Use Cases",
    });
  }

  if (service.benefits?.length) {
    stats.push({
      value: `${service.benefits.length}`,
      label: "Key Benefits",
    });
  }

  return stats.slice(0, 3);
}

export function ServiceOverview({ service }: ServiceOverviewProps) {
  if (!service.overview) {
    return null;
  }

  const primaryImage = service.overviewImage || service.heroImage;
  const secondaryImage = service.heroImage || primaryImage;
  const stats = buildStats(service);
  const reverseLayout =
    service.slug.length % 2 === 0 || service.category.includes("Data");
  const descriptionNodes = service.overview
    .split("\n")
    .filter(Boolean)
    .map((paragraph, index) => (
      <p key={index} className="text-slate-600">
        {paragraph.trim()}
      </p>
    ));

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.04),transparent_55%)]" />

      <div className="container relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <motion.div
          className={`grid grid-cols-1 gap-16 md:gap-12 items-center ${
            reverseLayout
              ? "md:grid-cols-2 md:grid-flow-col-dense"
              : "md:grid-cols-2"
          }`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className={`flex flex-col items-start gap-6 max-w-[560px] mx-auto md:mx-0 ${
              reverseLayout ? "md:col-start-2" : ""
            }`}
            variants={itemVariants}
          >
            <div className="h-1 w-12 bg-black" />

            <h2 className="font-heading text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
              {service.heroSubtitle || service.heroTitle}
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {descriptionNodes}
            </div>

            {stats.length > 0 && (
              <div className="grid w-full grid-cols-3 gap-6 border-t border-neutral-400 pt-6">
                {stats.map((stat, index) => (
                  <div key={stat.label + index}>
                    <div className="font-heading text-2xl font-bold text-black sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-black/50">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {service.ctaButtonText && service.ctaButtonHref && (
              <Link
                href={service.ctaButtonHref}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black px-8 py-4 font-semibold text-white shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/80"
              >
                {service.ctaButtonText}
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </Link>
            )}
          </motion.div>

          <motion.div
            className={`relative mx-auto mt-10 w-full max-w-[340px] sm:max-w-[420px] md:mt-0 md:max-w-[520px] ${
              reverseLayout ? "md:col-start-1" : ""
            }`}
            variants={itemVariants}
          >
            <motion.div
              className="absolute z-0 h-[320px] w-[280px] bg-white sm:h-[420px] sm:w-[360px] md:h-[520px] md:w-[440px]"
              style={{
                top: reverseLayout ? "auto" : "10%",
                bottom: reverseLayout ? "10%" : "auto",
                left: reverseLayout ? "auto" : "-15%",
                right: reverseLayout ? "-15%" : "auto",
              }}
              initial={{ y: reverseLayout ? 0 : 0 }}
              whileInView={{ y: reverseLayout ? -20 : -30 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={secondaryImage}
                  alt={`${service.heroTitle} secondary`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 30vw"
                />
              </div>
            </motion.div>

            <motion.div
              className="relative z-10 h-[420px] w-full overflow-hidden  border border-slate-200 bg-white shadow-2xl sm:h-[520px] md:h-[640px]"
              initial={{ y: 0 }}
              whileInView={{ y: reverseLayout ? 20 : 30 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image
                src={primaryImage}
                alt={service.heroTitle}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 35vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 z-0 h-px w-full"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0) 100%)",
        }}
      />
    </section>
  );
}
