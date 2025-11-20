"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import type { MegaMenuColumn, MegaMenuHero, NavItem } from "./types";

interface MegaMenuProps {
  hero: MegaMenuHero;
  columns: MegaMenuColumn[];
  footerLink?: NavItem["footerLink"];
  onMouseLeave: () => void;
}

const CLOSE_DELAY = 200;

export default function MegaMenu({
  hero,
  columns,
  footerLink,
  onMouseLeave,
}: MegaMenuProps) {
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastColumnWithLinksIndex = (() => {
    for (let i = columns.length - 1; i >= 0; i -= 1) {
      if (columns[i]?.links?.length) {
        return i;
      }
    }
    return -1;
  })();

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
      className="absolute left-1/2 transform shadow-2xl -translate-x-1/2 mt-1 w-screen max-w-[1400px] animate-in fade-in slide-in-from-top-1 duration-200 z-50 px-4"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ backfaceVisibility: "hidden", perspective: "1000px" }}
    >
      <div className=" bg-white border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl overflow-hidden">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Hero Column - Enhanced */}
            <div className="space-y-4 pb-6 sm:pb-0 sm:pr-6 border-b sm:border-b-0 sm:border-r border-slate-200/60">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-700 bg-linear-to-r from-blue-50 to-indigo-50 rounded-md">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Featured
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
                  {hero.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {hero.description}
                </p>
              </div>

              {/* Enhanced CTA Card */}
              <Link
                href="/contact"
                className="mt-6 block p-4 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 border border-slate-200/60 hover:border-blue-200 transition-colors duration-200 group rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-200">
                      <svg
                        className="w-4 h-4 text-blue-600"
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
                    </div>
                    <span className="text-xs font-semibold  text-white">
                      Talk to our team
                    </span>
                  </div>
                  <svg
                    className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200"
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
                </div>
              </Link>
            </div>

            {/* Content Columns - Enhanced */}
            {columns.map((column, idx) => {
              const hasLinks = column.links && column.links.length > 0;

              return (
                <div key={idx} className="space-y-4 pl-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-200/60">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-purple-600">
                      {column.title}
                    </h4>
                  </div>

                  {hasLinks ? (
                    <ul className="space-y-0.5">
                      {column.links.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <Link
                            href={link.href}
                            className="group flex items-center  group-hover:border-b group-hover:border-purple-600  justify-between px-3 py-2.5 -mx-3 rounded-lg  transition-all duration-200"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-purple-500 group-hover:scale-125 transition-all duration-200"></div>
                              <span className="text-sm font-medium text-slate-700 group-hover:text-purple-600 transition-colors duration-200">
                                {link.label}
                              </span>
                            </div>
                            <svg
                              className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
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
                  ) : column.image ? (
                    <div className="relative overflow-hidden  border border-slate-200/60 shadow-inner">
                      <div className="relative h-40 w-full">
                        <Image
                          src={column.image}
                          alt={`${column.title} visual`}
                          fill
                          sizes="(min-width: 1024px) 300px, 50vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                      </div>
                      {/* <div className="absolute inset-x-0 bottom-0 p-3">
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/80">
                          Coming Soon
                        </p>
                      </div> */}
                    </div>
                  ) : (
                    <p className="text-sm text-slate-500">
                      Details coming soon.
                    </p>
                  )}

                  {footerLink && hasLinks && idx === lastColumnWithLinksIndex && (
                    <div className="pt-4 mt-4 border-t border-slate-500/60">
                      <Link
                        href={footerLink.href}
                        className="group flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        <span>{footerLink.label}</span>
                        <svg
                          className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Accent Bar */}
        <div className="h-1 bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400"></div>
      </div>
    </div>
  );
}
