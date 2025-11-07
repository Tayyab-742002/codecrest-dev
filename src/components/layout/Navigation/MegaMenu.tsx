"use client";

import type { MegaMenuColumn, MegaMenuHero } from "./types";

interface MegaMenuProps {
  hero: MegaMenuHero;
  columns: MegaMenuColumn[];
  onMouseLeave: () => void;
}

export default function MegaMenu({
  hero,
  columns,
  onMouseLeave,
}: MegaMenuProps) {
  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-[1200px] animate-in fade-in slide-in-from-top-2 duration-200 z-50"
      onMouseLeave={onMouseLeave}
      style={{ backfaceVisibility: "hidden", perspective: "1000px" }}
    >
      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl">
        <div className="px-20 py-12">
          <div className="grid grid-cols-4 gap-12">
            {/* Hero Column */}
            <div className="space-y-4 pr-6 border-r border-slate-200 dark:border-slate-800">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white tracking-tight leading-tight">
                  {hero.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {hero.description}
                </p>
              </div>

              {/* Decorative gradient element */}
              <div className="mt-8 relative h-24 rounded-xl bg-linear-to-br from-blue-500/10 to-purple-500/10 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-400/20 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>

            {/* Content Columns */}
            {columns.map((column, idx) => (
              <div key={idx} className="space-y-5">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {column.title}
                </h4>
                <ul className="space-y-3.5">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="group relative inline-block text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </a>
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
