"use client";
import { ReactLenis } from "lenis/react";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { TextScrollHero } from "./text-scroll-section";
import { RevealText } from "@/src/components/ui/reveal-text";

interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  color?: string;
  textColor: string;
}

interface SmoothScrollServicesProps {
  services: Service[];
}

const SmoothScrollServices: React.FC<SmoothScrollServicesProps> = ({
  services,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sections = sectionRefs.current;
          const index = sections.indexOf(entry.target as HTMLElement);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = sectionRefs.current;
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <ReactLenis root>
      <article className="w-full">
        <TextScrollHero enableAnimations={true} startScale={0.55} />
        {services.map((service, index) => (
          <section
            key={service.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="h-screen w-full grid place-content-center sticky top-0 overflow-hidden"
            style={{ backgroundColor: service.color || "transparent" }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 ">
              <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
              {/* <h2
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight leading-tight mb-6 md:mb-8"
                style={{
                  color: service.textColor,
                  textShadow:
                    "0 4px 20px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.2)",
                }}
              >
                {service.title}
              </h2> */}
              <RevealText
                key={`${service.id}-${activeIndex === index ? "active" : "inactive"}`}
                text={service.title.toUpperCase()}
                textColor={service.textColor}
                overlayColor="text-red-500"
                fontSize="text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
                letterDelay={0.08}
                overlayDelay={0.05}
                overlayDuration={0.4}
                springDuration={600}
                shouldAnimate={activeIndex === index}
                letterImages={service.title
                  .split("")
                  .map(() => service.imageUrl)}
              />
              <p
                className="text-lg md:text-2xl lg:text-3xl font-medium max-w-2xl mx-auto leading-relaxed"
                style={{ color: service.textColor }}
              >
                {service.description}
              </p>
            </div>
          </section>
        ))}
      </article>
    </ReactLenis>
  );
};

export default SmoothScrollServices;
