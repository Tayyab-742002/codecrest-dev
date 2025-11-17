"use client";

import { type ServiceDetail } from "@/src/data/service.data";
import { Check } from "lucide-react";

const ACCENT_COLORS = [
  "#ff80b5",
  "#c084fc",
  "#38bdf8",
  "#f97316",
  "#22d3ee",
  "#34d399",
  "#facc15",
  "#fb7185",
  "#0ea5e9",
  "#a855f7",
] as const;

interface ServiceBenefitsProps {
  service: ServiceDetail;
}

export function ServiceBenefits({ service }: ServiceBenefitsProps) {
  if (!service.benefits || service.benefits.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 text-white sm:py-32">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            Key Benefits
          </p>
          <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
            Proof that {service.heroTitle} moves the needle
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Every engagement compounds advantages—from efficiency and growth to
            customer trust.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr]">
          <div className="relative overflow-hidden  border border-white/10 bg-white/5 p-8 shadow-[0_45px_120px_rgba(15,23,42,0.45)] sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(147,197,253,0.2),transparent_70%)]" />
            <div className="relative space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                Why it matters
              </p>
              <p className="text-2xl font-medium leading-relaxed text-white sm:text-3xl">
                These wins show up in board decks, customer NPS, and operating
                margin. They&apos;re not fluffy; they&apos;re measurable
                outcomes our clients track quarter over quarter.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 px-4 py-1 text-sm font-semibold text-white/80">
                  Reliable Impact
                </span>
                <span className="rounded-full border border-white/10 px-4 py-1 text-sm font-semibold text-white/80">
                  Executive Ready
                </span>
                <span className="rounded-full border border-white/10 px-4 py-1 text-sm font-semibold text-white/80">
                  Fast to Value
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {service.benefits.map((benefit, index) => {
              const gradient =
              ACCENT_COLORS[index % ACCENT_COLORS.length] ??
              ACCENT_COLORS[0];

              return (
                <div
                  key={benefit + index}
                  className="group relative overflow-hidden  border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(15,23,42,0.55)]"
                >
                  <div
                    className="absolute inset-0 opacity-10 blur-3xl transition-opacity duration-300"
                    style={{ background: gradient }}
                  />
                  <div className="relative flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white text-slate-900 shadow-inner">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                        <Check className="h-4 w-4 text-white" />
                        Benefit
                      </div>
                      <p className="text-base font-semibold text-white">
                        {benefit}
                      </p>
                      <p className="text-sm text-white/70">
                        Unlock compounding value by weaving this capability into
                        your operating rhythm.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
