"use client";
import Image from "next/image";
import { useRef } from "react";
import { TimelineContent } from "../../ui/TimelineContent";
import VerticalCutReveal from "../../ui/vertical-cut-reveal";

interface ProjectDetail {
  title: string;
  overview?: string;
  objectives?: string[];
  overviewImage?: string;
  heroImage?: string;
}

interface ProjectOverviewProps {
  project: ProjectDetail;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  const timelineRef = useRef<HTMLDivElement>(null);

  if (!project.overview) {
    return null;
  }

  const primaryImage = project.overviewImage || project.heroImage;

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(20px)",
      y: 40,
      opacity: 0,
    },
  };

  return (
    <div className="sm:p-10 p-4 mx-auto bg-gray-300 min-h-screen w-full shadow-sm">
      {/* Header Section */}
      <article className="max-w-7xl mx-auto sm:flex justify-between items-end">
        <h1 className="xl:text-[10rem] lg:text-8xl md:text-7xl text-6xl text-black pt-4 lg:-space-y-10 -space-y-4">
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.05}
            staggerFrom="first"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 21,
            }}
          >
            Project
          </VerticalCutReveal>
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.05}
            containerClassName="lg:pl-32 md:pl-16 pl-6 leading-[140%]"
            staggerFrom="first"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 21,
            }}
          >
            Overview*
          </VerticalCutReveal>
        </h1>
      </article>

      {/* Image and Overview Section */}
      <div className="mt-10 max-w-7xl mx-auto" ref={timelineRef}>
        <TimelineContent
          animationNum={0}
          timelineRef={timelineRef}
          customVariants={revealVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10"
        >
          {/* Image */}
          {primaryImage && (
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-slate-100">
              <Image
                src={primaryImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}

          {/* Overview Text */}
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black">
              Overview
            </h2>
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.05}
              staggerFrom="first"
              wordLevelClassName="text-base lg:text-lg text-slate-700"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 30,
                delay: 0.2,
              }}
            >
              {project.overview}
            </VerticalCutReveal>
          </div>
        </TimelineContent>

        {/* Objectives (always visible) */}
        {project.objectives && project.objectives.length > 0 && (
          <div className="py-10">
            <TimelineContent
              animationNum={1}
              timelineRef={timelineRef}
              customVariants={revealVariants}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 uppercase">
                Objectives
              </h2>
            </TimelineContent>

            <TimelineContent
              animationNum={2}
              timelineRef={timelineRef}
              customVariants={revealVariants}
              className="border-t border-neutral-800 pt-6"
            >
              <div className="w-full max-w-[40rem] ml-auto space-y-4">
                {project.objectives.map((objective, index) => (
                  <div key={`${index}-${objective}`} className="flex gap-4">
                    <span className="shrink-0 mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-sm font-semibold text-slate-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {objective}
                    </p>
                  </div>
                ))}
              </div>
            </TimelineContent>
          </div>
        )}
      </div>
    </div>
  );
}
