"use client";

import { type ServiceDetail } from "@/src/data/service.data";
import { Check } from "lucide-react";

interface ServiceBenefitsProps {
  service: ServiceDetail;
}

export function ServiceBenefits({ service }: ServiceBenefitsProps) {
  if (!service.benefits || service.benefits.length === 0) {
    return null;
  }

  return (
    <section className="relative py-24 sm:py-32 md:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
            Key Benefits
          </h2>
          <p className="text-lg text-muted-foreground">
            The advantages you'll gain with our {service.heroTitle.toLowerCase()}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/30 p-6 border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 hover:bg-slate-100/50 dark:hover:bg-slate-900/50 hover:border-primary/20 hover:shadow-md"
              >
                {/* Check Icon */}
                <div className="flex-shrink-0 mt-0.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-5 w-5" />
                  </div>
                </div>

                {/* Benefit Text */}
                <p className="text-base font-medium text-foreground leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

