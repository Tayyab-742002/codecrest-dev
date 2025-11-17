"use client";

import { type ServiceDetail } from "@/src/data/service.data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCTAProps {
  service: ServiceDetail;
}

const CTA_VIDEO_FALLBACK =
  "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4";

export function ServiceCTA({ service }: ServiceCTAProps) {
  if (!service.ctaTitle || !service.ctaButtonText) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32 md:py-40">
      <div aria-hidden className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={service.heroImage}
        >
          <source
            src={service.ctaVideo ?? CTA_VIDEO_FALLBACK}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/70 to-black/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            Ready when you are
          </p>
          <h2 className="mb-6 mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {service.ctaTitle}
          </h2>
          {service.ctaDescription && (
            <p className="mb-10 text-lg leading-relaxed text-white/80">
              {service.ctaDescription}
            </p>
          )}

          <Link
            href={service.ctaButtonHref || "/contact"}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white/90 px-8 py-4 text-base font-semibold text-slate-900 shadow-[0_25px_80px_rgba(15,23,42,0.45)] transition-all duration-300 hover:scale-105 hover:bg-white"
          >
            {service.ctaButtonText}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
