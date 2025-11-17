// thanks to oliver: https://www.youtube.com/@olivierlarose1
"use client";

import Image from "next/image";
import { ReactLenis } from "lenis/react";
import { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "motion/react";

import { type ServiceDetail } from "@/src/data/service.data";

const ACCENT_COLORS = [
  "#ff80b5",
  "#c084fc",
  "#38bdf8",
  "#f97316",
  "#22d3ee",
  "#34d399",
  "#facc15",
  "#fb7185",
  "#0ea5e9",
  "#a855f7",
] as const;

interface ServiceUseCasesProps {
  service: ServiceDetail;
}

export default function ServiceUseCases({ service }: ServiceUseCasesProps) {
  const useCases = service.useCases ?? [];

  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (useCases.length === 0) {
    return null;
  }

  return (
    <ReactLenis root className="bg-white">
      <main ref={containerRef} className="bg-white">
        <section className="relative grid min-h-[30vh] place-content-center bg-white px-4 text-center text-slate-900 sm:px-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.08),transparent_60%)]" />
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Use Cases
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            How {service.heroTitle} lands in the real world
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Scroll to see high-impact engagements where we activated this
            service and delivered measurable outcomes.
          </p>
        </section>

        <section className="bg-white text-slate-900">
          {useCases.map((useCase, index) => {
            const targetScale = 1 - (useCases.length - index) * 0.05;
            const tint = ACCENT_COLORS[index % ACCENT_COLORS.length];
            const supportingCopy = `We pair ${service.heroTitle.toLowerCase()} playbooks with cross-functional squads to ensure ${useCase.title.toLowerCase()} programs land with measurable adoption and stakeholder buy-in.`;

            return (
              <Card
                key={`${service.id}-use-case-${useCase.title}-${index}`}
                i={index}
                image={useCase.image || service.heroImage}
                title={useCase.title}
                description={useCase.description}
                supportingCopy={supportingCopy}
                tint={tint}
                ctaHref={service.ctaButtonHref}
                progress={scrollYProgress}
                range={[index * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  supportingCopy: string;
  image: string;
  tint: string;
  ctaHref?: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  supportingCopy,
  image,
  tint,
  ctaHref,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-[85vh] items-center justify-center px-2 sm:px-4 md:h-[90vh]"
    >
      <motion.div
        style={{
          background: `${tint}`,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[18%] flex min-h-[460px] w-full max-w-5xl origin-top flex-col  border border-slate-200/70 bg-white p-5 shadow-[0_45px_120px_rgba(15,23,42,0.18)] sm:p-7 lg:p-9"
      >
        <div className="w-full text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-700">
            Use Case {String(i + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
            {title}
          </h3>
        </div>

        <div className="mt-4 flex h-full flex-col gap-6 md:flex-row">
          <div className="space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base md:w-[50%]">
            <p>{description}</p>
            <p>{supportingCopy}</p>
            {ctaHref && (
              <span className="flex items-center gap-2 pt-1 text-slate-900">
                <a
                  href={ctaHref}
                  className="underline decoration-slate-300 decoration-2 underline-offset-4 transition-colors hover:text-slate-600"
                >
                  Talk to us
                </a>
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" />
                </svg>
              </span>
            )}
          </div>

          <div className="relative h-60 w-full overflow-hidden border border-slate-200 bg-slate-100 md:h-auto md:min-h-[300px] md:w-[50%]">
            <motion.div className="h-full w-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={image}
                alt={title}
                className="object-cover"
                sizes="(min-width: 1024px) 540px, 100vw"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
