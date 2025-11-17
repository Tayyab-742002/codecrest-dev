"use client";

import { type ServiceDetail } from "@/src/data/service.data";
import { ArrowRight } from "lucide-react";

interface ServiceUseCasesProps {
  service: ServiceDetail;
}

export function ServiceUseCases({ service }: ServiceUseCasesProps) {
  if (!service.useCases || service.useCases.length === 0) {
    return null;
  }

  return (
    <section className="relative py-24 sm:py-32 md:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
            Use Cases
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-world applications and scenarios where our {service.heroTitle.toLowerCase()} delivers value
          </p>
        </div>

        {/* Use Cases List */}
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            {service.useCases.map((useCase, index) => (
              <div
                key={index}
                className="group relative rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 p-8 transition-all duration-300 hover:border-primary/30 hover:bg-slate-100/50 dark:hover:bg-slate-900/50 hover:shadow-lg"
              >
                <div className="flex items-start gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

