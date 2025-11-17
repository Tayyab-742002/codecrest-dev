"use client";

import { type ServiceDetail } from "@/src/data/service.data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCTAProps {
  service: ServiceDetail;
}

export function ServiceCTA({ service }: ServiceCTAProps) {
  if (!service.ctaTitle || !service.ctaButtonText) {
    return null;
  }

  return (
    <section className="relative py-24 sm:py-32 md:py-40 bg-gradient-to-b from-background to-slate-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-6">
            {service.ctaTitle}
          </h2>
          {service.ctaDescription && (
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {service.ctaDescription}
            </p>
          )}
          
          <Link
            href={service.ctaButtonHref || "/contact"}
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:scale-105"
          >
            {service.ctaButtonText}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

