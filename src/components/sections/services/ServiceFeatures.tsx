"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

import {
  type ServiceDetail,
  type ServiceFeature,
} from "@/src/data/service.data";

interface ServiceFeaturesProps {
  service: ServiceDetail;
}

interface FeatureRowProps {
  feature: ServiceFeature;
  index: number;
  reverse: boolean;
  fallbackImage: string;
}

const FeatureRow = ({
  feature,
  index,
  reverse,
  fallbackImage,
}: FeatureRowProps) => {
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

  const imageSrc = feature.image ?? fallbackImage;

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
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">
          Feature {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="text-3xl font-semibold text-white sm:text-4xl">
          {feature.title}
        </h3>
        <p className="text-base leading-relaxed text-white/70 sm:text-lg">
          {feature.description}
        </p>
      </motion.div>

      <motion.div
        style={{ opacity: imageOpacity, clipPath }}
        className="relative w-full max-w-xl overflow-hidden  border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(15,23,42,0.45)]"
      >
        <div className="relative aspect-4/3 w-full">
          <Image
            src={imageSrc}
            alt={feature.title}
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-black/40 via-black/10 to-transparent" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0  border border-white/10"
        />
      </motion.div>
    </div>
  );
};

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
  if (!service.features || service.features.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#050505] py-32 text-white sm:py-36">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            Signature Capabilities
          </p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Why {service.heroTitle} Works
          </h2>
          <p className="mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            Each capability stacks to deliver measurable impact&mdash;scroll to
            explore how we solve mission-critical challenges for your teams.
          </p>
          <div className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.5em] text-white/50">
            Scroll
            <ArrowDown className="h-4 w-4" />
            to explore
          </div>
        </div>

        <div className="flex flex-col gap-28">
          {service.features.map((feature, index) => (
            <FeatureRow
              key={`${service.id}-feature-${feature.title}-${index}`}
              feature={feature}
              index={index}
              reverse={index % 2 === 1}
              fallbackImage={service.heroImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
