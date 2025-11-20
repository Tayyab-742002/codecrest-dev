"use client";
import Image from "next/image";
import { useRef } from "react";

import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "../../ui/accordtion";
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

        {/* Objectives Accordion */}
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

            <Accordion defaultValue="item-0">
              {project.objectives.map((objective, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="mb-0 rounded-none bg-transparent w-full"
                >
                  <TimelineContent
                    animationNum={index + 2}
                    timelineRef={timelineRef}
                    customVariants={revealVariants}
                    className="border-t border-neutral-800 py-2"
                  >
                    <AccordionHeader
                      customIcon
                      className="hover:no-underline p-0 py-2 relative data-[active]:bg-transparent hover:bg-transparent text-black sm:text-base text-sm"
                    >
                      <p className="md:text-8xl sm:text-6xl text-3xl sm:font-extralight font-normal text-black/20 uppercase">
                        \{String(index + 1).padStart(2, "0")}
                      </p>
                      <div className="lg:w-[40rem] md:w-[30rem] sm:w-96 flex items-center justify-between">
                        <h3 className="font-medium md:text-4xl sm:text-3xl text-xl uppercase">
                          Objective {index + 1}
                        </h3>

                        <span className="relative group-data-[active]:rotate-90 text-neutral-600 p-2 -translate-x-1 rounded-xl">
                          <Plus className="group-data-[active]:rotate-90 transition-all duration-300" />
                        </span>
                      </div>
                    </AccordionHeader>
                  </TimelineContent>
                  <TimelineContent
                    animationNum={index + 2}
                    timelineRef={timelineRef}
                    customVariants={revealVariants}
                  >
                    <AccordionPanel
                      className="space-y-4 w-full mx-auto bg-transparent data-[active]:bg-transparent px-0"
                      articleClassName="pt-2 px-0 bg-transparent w-[40rem] ml-auto"
                    >
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {objective}
                      </p>
                    </AccordionPanel>
                  </TimelineContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </div>
    </div>
  );
}
