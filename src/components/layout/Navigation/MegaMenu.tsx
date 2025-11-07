"use client";

import { useEffect, useRef, memo } from "react";
import type { MegaMenuColumn, MegaMenuHero } from "./types";

interface MegaMenuProps {
  hero: MegaMenuHero;
  columns: MegaMenuColumn[];
  onMouseLeave: () => void;
}

const CLOSE_DELAY = 200;

function MegaMenu({ hero, columns, onMouseLeave }: MegaMenuProps) {
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
      className="absolute left-1/2 mt-2 w-screen max-w-[1200px] z-50"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        backfaceVisibility: "hidden",
        transform: "translateX(-50%) translateZ(0)",
        willChange: "opacity, transform",
      }}
    >
      <div
        className="rounded-2xl bg-white border border-slate-300 shadow-2xl"
        style={{
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
          animation: "megaMenuFadeIn 150ms ease-out forwards",
        }}
      >
        <div className="px-20 py-12">
          <div className="grid grid-cols-4 gap-12">
            {/* Hero Column */}
            <div className="space-y-4 pr-6 border-r border-slate-300">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-slate-900 tracking-tight leading-tight">
                  {hero.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {hero.description}
                </p>
              </div>

              {/* Decorative gradient element */}
              <div className="mt-8 relative h-24 rounded-xl bg-gradient-to-br from-blue-500/50 to-purple-500/0 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/50 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-400/50 rounded-full blur-xl" />
                </div>
              </div>
            </div>

            {/* Content Columns */}
            {columns.map((column, idx) => (
              <div key={idx} className="space-y-5">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {column.title}
                </h4>
                <ul className="space-y-3.5">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="group relative inline-block text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-150"
                      >
                        <span className="relative">
                          {link.label}
                          <span
                            className="absolute bottom-0 left-0 w-full h-[1.1px] bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out"
                            style={{ willChange: "transform" }}
                          />
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

// Memoize the component to prevent unnecessary re-renders
export default memo(MegaMenu, (prevProps, nextProps) => {
  return (
    prevProps.hero.title === nextProps.hero.title &&
    prevProps.columns.length === nextProps.columns.length
  );
});
