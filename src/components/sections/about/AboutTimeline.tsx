"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[#050505] dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <p className="text-sm font-semibold tracking-[0.4em] uppercase text-white/50 mb-4">
          Timeline
        </p>
        <h2 className="text-lg md:text-4xl mb-4 text-white dark:text-white max-w-4xl">
          Where we have been and where we are headed.
        </h2>
        <p className="text-white/70 dark:text-white/60 text-sm md:text-base max-w-sm">
          From our launch to building global delivery capabilities, here&apos;s
          our journey of growth and innovation.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#050505] dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-white/10 dark:bg-neutral-800 border border-white/20 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-white/50 dark:text-white/50">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white/50 dark:text-white/50">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-white/20 dark:via-neutral-700 to-transparent to-99% mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-linear-to-t from-purple-500 via-blue-500 to-transparent from-0% via-10% rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const timelineData: TimelineEntry[] = [
  {
    title: "2019",
    content: (
      <div className="space-y-4">
        <h4 className="text-xl md:text-2xl font-semibold text-white">Launch</h4>
        <p className="text-white/70 dark:text-white/60 text-sm md:text-base leading-relaxed">
          Born inside a venture studio to serve highly regulated industries. We
          started with a vision to bridge the gap between complex technology and
          business outcomes, focusing on sectors that demand the highest levels
          of security, compliance, and reliability.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/70 border border-white/10">
            Venture Studio
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/70 border border-white/10">
            Regulated Industries
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div className="space-y-4">
        <h4 className="text-xl md:text-2xl font-semibold text-white">
          AI Platform Practice
        </h4>
        <p className="text-white/70 dark:text-white/60 text-sm md:text-base leading-relaxed">
          Shipped our first production-grade GenAI stack for a Fortune 100 bank.
          This milestone established our expertise in artificial intelligence
          and machine learning, demonstrating our ability to deliver
          enterprise-grade solutions that meet the strictest regulatory
          requirements.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/70 border border-white/10">
            GenAI
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/70 border border-white/10">
            Fortune 100
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/70 border border-white/10">
            Enterprise AI
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="space-y-4">
        <h4 className="text-xl md:text-2xl font-semibold text-white">
          Global Delivery Pods
        </h4>
        <p className="text-white/70 dark:text-white/60 text-sm md:text-base leading-relaxed">
          Opened engineering hubs in Toronto, Lisbon, and Bengaluru. This
          expansion enabled us to provide 24/7 global delivery coverage,
          bringing together diverse talent and perspectives to serve clients
          across different time zones and markets.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/70 border border-white/10">
            Toronto
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/70 border border-white/10">
            Lisbon
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/70 border border-white/10">
            Bengaluru
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/70 border border-white/10">
            Global Delivery
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div className="space-y-4">
        <h4 className="text-xl md:text-2xl font-semibold text-white">
          Climate Systems
        </h4>
        <p className="text-white/70 dark:text-white/60 text-sm md:text-base leading-relaxed">
          Partnering with energy operators to build emissions intelligence
          platforms. We&apos;re now applying our expertise to address one of the
          world&apos;s most pressing challenges—climate change—by developing
          systems that help organizations measure, track, and reduce their
          environmental impact.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/70 border border-white/10">
            Climate Tech
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/70 border border-white/10">
            Emissions Intelligence
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/70 border border-white/10">
            Energy Sector
          </span>
        </div>
      </div>
    ),
  },
];

export default function AboutTimeline() {
  return <Timeline data={timelineData} />;
}
