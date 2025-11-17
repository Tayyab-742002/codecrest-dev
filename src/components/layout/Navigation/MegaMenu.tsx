"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import type { MegaMenuColumn, MegaMenuHero } from "./types";

interface MegaMenuProps {
  hero: MegaMenuHero;
  columns: MegaMenuColumn[];
  onMouseLeave: () => void;
}

const CLOSE_DELAY = 200;

export default function MegaMenu({
  hero,
  columns,
  onMouseLeave,
}: MegaMenuProps) {
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = setTimeout(() => {
      onMouseLeave();
    }, CLOSE_DELAY);
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-screen max-w-[1400px] animate-in fade-in slide-in-from-top-1 duration-200 z-50 px-4"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ backfaceVisibility: "hidden", perspective: "1000px" }}
    >
      <div className="rounded-lg bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl overflow-hidden">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Hero Column */}
            <div className="space-y-4 pb-6 sm:pb-0 sm:pr-6 border-b sm:border-b-0 sm:border-r border-slate-200">
              <div className="space-y-3">
                <span className="inline-block px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 rounded">
                  Featured
                </span>

                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight leading-tight">
                  {hero.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {hero.description}
                </p>
              </div>

              {/* Simple decorative element */}
              <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-700">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  <span className="text-xs font-medium">Explore more</span>
                </div>
              </div>
            </div>

            {/* Content Columns */}
            {columns.map((column, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 pb-2 border-b border-slate-200">
                  {column.title}
                </h4>
                <ul className="space-y-1">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between px-3 py-2.5 -mx-3 rounded-md hover:bg-slate-50 transition-colors duration-150"
                      >
                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors duration-150">
                          {link.label}
                        </span>
                        <svg
                          className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
