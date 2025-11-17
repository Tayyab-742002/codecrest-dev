"use client";

import { type ServiceDetail } from "@/src/data/service.data";
import { Building2 } from "lucide-react";

interface ServiceIndustryOfferingsProps {
  service: ServiceDetail;
}

export function ServiceIndustryOfferings({ service }: ServiceIndustryOfferingsProps) {
  if (!service.industryOfferings || service.industryOfferings.length === 0) {
    return null;
  }

  return (
    <section className="relative py-24 sm:py-32 md:py-40 bg-gradient-to-b from-background to-slate-50 dark:to-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
            Industry Applications
          </h2>
          <p className="text-lg text-muted-foreground">
            How {service.heroTitle} transforms operations across different industries
          </p>
        </div>

        {/* Industry Offerings Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {service.industryOfferings.map((offering, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-background border border-slate-200 dark:border-slate-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/20"
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary">
                <Building2 className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {offering.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {offering.description}
              </p>

              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/2 group-hover:to-primary/5 transition-all duration-300 pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

