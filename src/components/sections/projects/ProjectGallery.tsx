"use client";

import { useRef } from "react";
import Image from "next/image";
import VerticalCutReveal from "../../ui/vertical-cut-reveal";

interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
  type: "screenshot" | "diagram";
}

interface ProjectGalleryProps {
  images: ProjectImage[];
}

// Card Component for each gallery item
const GalleryCard = ({
  image,
  index,
}: {
  image: ProjectImage;
  index: number;
}) => {
  // Color palette for cards
  const colors = [
    { bg: "#FF6B6B", text: "#FFFFFF" },
    { bg: "#4ECDC4", text: "#FFFFFF" },
    { bg: "#FFE66D", text: "#000000" },
    { bg: "#A8DADC", text: "#000000" },
    { bg: "#F4A261", text: "#FFFFFF" },
    { bg: "#E76F51", text: "#FFFFFF" },
    { bg: "#264653", text: "#FFFFFF" },
    { bg: "#2A9D8F", text: "#FFFFFF" },
  ];

  const colorScheme = colors[index % colors.length];

  return (
    <div className="h-screen flex items-center justify-center sticky top-0 md:p-0 px-4">
      <div
        className="relative flex flex-col h-[300px] w-full max-w-[700px] py-12 px-6 md:px-12
        md:h-[400px] md:w-[600px] items-center justify-center mx-auto 
        shadow-2xl overflow-hidden"
        style={{ backgroundColor: colorScheme.bg }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-full object-cover opacity-30"
            src={image.url}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4">
          {/* Title/Number */}
          <span
            className="font-black text-7xl md:text-8xl tracking-tight"
            style={{ color: colorScheme.text }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Caption/Description */}
          {image.caption && (
            <div
              className="text-base md:text-xl font-medium lowercase tracking-wide max-w-md px-4"
              style={{ lineHeight: 1.4, color: colorScheme.text }}
            >
              {image.caption}
            </div>
          )}

          {/* Image Type Badge */}
          <div
            className="text-xs uppercase tracking-widest font-bold px-4 py-1.5 border-2 rounded-full"
            style={{
              color: colorScheme.text,
              borderColor: colorScheme.text,
            }}
          >
            {image.type}
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div
          className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2"
          style={{ borderColor: colorScheme.text }}
        />
        <div
          className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2"
          style={{ borderColor: colorScheme.text }}
        />
        <div
          className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2"
          style={{ borderColor: colorScheme.text }}
        />
        <div
          className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2"
          style={{ borderColor: colorScheme.text }}
        />
      </div>
    </div>
  );
};

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const timelineRef = useRef<HTMLDivElement>(null);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-300 min-h-screen w-full">
      {/* Header Section */}
      <div className="sm:p-10 p-4 mx-auto" ref={timelineRef}>
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
              Gallery*
            </VerticalCutReveal>
          </h1>
          <div className="sm:w-96 space-y-1.5 sm:pt-0 pt-4">
            <p className="text-sm font-semibold text-end">
              Visual Documentation
            </p>
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.1}
              staggerFrom="first"
              reverse={true}
              wordLevelClassName="text-xs lg:text-base text-justify"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 30,
                delay: 0,
              }}
            >
              Explore the visual journey of our project through carefully
              curated screenshots and architectural diagrams that showcase our
              design and development process.
            </VerticalCutReveal>
          </div>
        </article>
      </div>

      {/* Gallery Cards - Sticky Scroll */}
      <div className="min-h-screen">
        {images.map((image, index) => (
          <GalleryCard key={index} image={image} index={index} />
        ))}
      </div>


    </div>
  );
}
