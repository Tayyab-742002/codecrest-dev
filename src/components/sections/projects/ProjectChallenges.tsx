"use client";
import { useRef } from "react";
import { AlertTriangle } from "lucide-react";
import { TimelineContent } from "../../ui/TimelineContent";
import VerticalCutReveal from "../../ui/vertical-cut-reveal";
import { GlowingEffect } from "../../ui/glowingEffect";

interface ProjectChallenge {
  title: string;
  description: string;
}

interface ProjectChallengesProps {
  challenges: ProjectChallenge[];
}

export default function ProjectChallenges({
  challenges,
}: ProjectChallengesProps) {
  const timelineRef = useRef<HTMLDivElement>(null);

  if (!challenges || challenges.length === 0) {
    return null;
  }

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
    <div className="sm:p-10 p-4 mx-auto bg-[#050505] min-h-screen w-full">
      {/* Header Section */}
      <article className="max-w-7xl mx-auto sm:flex justify-between items-end">
        <h1 className="xl:text-[10rem] lg:text-8xl md:text-7xl text-6xl text-white pt-4 lg:-space-y-10 -space-y-4">
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
            Challenges*
          </VerticalCutReveal>
        </h1>
        <div className="sm:w-96 space-y-1.5 sm:pt-0 pt-4">
          <div className="flex items-center gap-2 justify-end">
            <AlertTriangle className="h-6 w-6 text-yellow-400" />
            <p className="text-sm font-semibold text-yellow-400 text-end">
              Key Obstacles Overcome
            </p>
          </div>
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.1}
            staggerFrom="first"
            reverse={true}
            wordLevelClassName="text-xs lg:text-base text-white/70 text-justify"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 30,
              delay: 0,
            }}
          >
            Every challenge presents an opportunity for innovation and growth in
            delivering exceptional results.
          </VerticalCutReveal>
        </div>
      </article>

      {/* Challenges Grid */}
      <div className="mt-10 max-w-7xl mx-auto py-10" ref={timelineRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {challenges.map((challenge, index) => (
            <TimelineContent
              key={index}
              animationNum={index}
              timelineRef={timelineRef}
              customVariants={revealVariants}
              className="relative"
            >
              <div className="group relative p-6 sm:p-8 bg-black/5 border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-lg">
                {/* Glowing Effect */}
                <GlowingEffect
                  variant="blue-purple"
                  disabled={false}
                  proximity={200}
                  spread={60}
                  blur={0}
                  movementDuration={0.5}
                  borderWidth={2}
                  inactiveZone={0.2}
                />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-yellow-400/50 via-yellow-500/50 to-transparent z-20" />

                {/* Content */}
                <div className="relative z-20 flex items-start gap-4">
                  {/* Number Badge */}
                  <div className="mt-1 shrink-0">
                    <div className="h-8 w-8 flex items-center justify-center bg-yellow-400/20 border border-yellow-400/30">
                      <span className="text-yellow-400 font-bold text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white uppercase tracking-wide">
                      {challenge.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-white/70">
                      {challenge.description}
                    </p>
                  </div>
                </div>

                {/* Large background number */}
                <div className="absolute bottom-4 right-4 text-8xl sm:text-9xl font-extralight text-white/5 pointer-events-none select-none z-10">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </TimelineContent>
          ))}
        </div>
      </div>
    </div>
  );
}
