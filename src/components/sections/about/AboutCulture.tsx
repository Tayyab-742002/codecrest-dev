"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";

const culturePillars = [
  {
    eyebrow: "Clarity",
    title: "Operate with Clarity",
    description:
      "Translate complex platform decisions into succinct narratives and measurable outcomes.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    className: "max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl",
    fade: [] as ("top" | "bottom")[],
  },
  {
    eyebrow: "Accountability",
    title: "Ship with Accountability",
    description:
      "Every initiative has an owner, a runbook, and an explicit definition of success.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    className: "lg:col-span-3 lg:rounded-tr-4xl",
    fade: [] as ("top" | "bottom")[],
  },
  {
    eyebrow: "Scale",
    title: "Design for Scale",
    description:
      "Bias toward resilient systems that scale across markets, teams, and regulatory surfaces.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    className: "lg:col-span-2 lg:rounded-bl-4xl",
    fade: ["bottom"] as ("top" | "bottom")[],
  },
  {
    eyebrow: "Customers",
    title: "Stay Close to Customers",
    description:
      "Weekly customer reviews keep research, design, and delivery tightly aligned.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    className: "max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl",
    fade: ["top"] as ("top" | "bottom")[],
  },
];

function BentoCard({
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic?: React.ReactNode;
  fade?: ("top" | "bottom")[];
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-lg",
        "bg-black dark:bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] shadow-sm ring-1 ring-white/10",
        "data-dark:bg-gray-800 data-dark:ring-white/15"
      )}
    >
      <div className="relative h-116 shrink-0">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-linear-to-b from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%] opacity-25" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-linear-to-t from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%] opacity-25" />
        )}
      </div>
      <div className="relative p-10 z-20 isolate mt-[-110px] h-56 backdrop-blur-xl text-white">
        <h1 className="text-sm font-semibold uppercase tracking-wider text-white/60">
          {eyebrow}
        </h1>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight dark:text-gray-100 text-gray-150 group-data-dark:text-white">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-100 dark:text-gray-300 group-data-dark:text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function AboutCulture() {
  return (
    <section className="pt-32 container mx-auto bg-[#0b0b0b] min-w-screen flex flex-col p-10">
      <h1 className="font-geistMono tracking-tight text-3xl md:text-5xl text-white">
        Culture
      </h1>
      <p className="max-w-3xl text-2xl/8 font-medium tracking-tight mt-2 bg-linear-to-br from-white/90 to-white/40 bg-clip-text text-transparent dark:from-white dark:to-white/40">
        Principles that shape every engagement.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        {culturePillars.map((pillar) => (
          <BentoCard
            key={pillar.title}
            eyebrow={pillar.eyebrow}
            title={pillar.title}
            description={pillar.description}
            graphic={
              <div className="absolute inset-0">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            }
            className={pillar.className}
            fade={pillar.fade}
          />
        ))}
      </div>
    </section>
  );
}
