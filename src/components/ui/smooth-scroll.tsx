"use client";
import { ReactLenis } from "lenis/react";
import React from "react";
import Image from "next/image";
import { TextScrollHero } from "./text-scroll-section";

interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  color: string;
  textColor: string;
}

interface SmoothScrollServicesProps {
  services: Service[];
}

const SmoothScrollServices: React.FC<SmoothScrollServicesProps> = ({
  services,
}) => {
  return (
    <ReactLenis root>
      <article className="w-full">
        <TextScrollHero enableAnimations={true} startScale={0.55} />
        {services.map((service, index) => (
          <section
            key={service.id}
            className="h-screen w-full grid place-content-center sticky top-0 overflow-hidden"
            style={{ backgroundColor: service.color }}
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
              <h2
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight leading-tight mb-6 md:mb-8"
                style={{ color: service.textColor }}
              >
                {service.title}
              </h2>
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
