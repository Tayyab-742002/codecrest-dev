"use client";

import { type ServiceDetail } from "@/src/data/service.data";
import { Code2 } from "lucide-react";

interface ServiceTechnologiesProps {
  service: ServiceDetail;
}

export function ServiceTechnologies({ service }: ServiceTechnologiesProps) {
  if (!service.technologies || service.technologies.length === 0) {
    return null;
  }

  return (
    <section className="relative py-24 sm:py-32 md:py-40 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <div className="mb-6 inline-flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Code2 className="h-7 w-7" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
            Technologies & Tools
          </h2>
          <p className="text-lg text-muted-foreground">
            The technologies and platforms we use to deliver exceptional results
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-4 justify-center">
            {service.technologies.map((technology, index) => (
              <div
                key={index}
                className="group relative rounded-full border border-slate-300 dark:border-slate-700 bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:shadow-md hover:scale-105"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

