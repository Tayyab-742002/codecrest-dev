"use client";
import { useState } from "react";
import Link from "next/link";
import { X, ChevronRight, ChevronDown } from "lucide-react";
import type { NavItem } from "./types";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems?: NavItem[] | undefined;
}

export default function MobileMenu({
  isOpen,
  onClose,
  navigationItems = [],
}: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [expandedColumn, setExpandedColumn] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 md:hidden">
      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-in {
          animation: slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-backdrop {
          animation: fadeIn 0.25s ease-out;
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm animate-backdrop"
        onClick={onClose}
      ></div>

      {/* Slide-out menu */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl animate-slide-in overflow-hidden flex flex-col">
        {/* Header */}
        <div className="shrink-0 px-5 py-4 border-b border-slate-200 bg-white">
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-slate-900">Menu</span>
            <button
              onClick={onClose}
              className="h-10 w-10 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors duration-150 flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          <div className="px-5 py-3">
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-slate-100 last:border-0"
                >
                  <button
                    onClick={() => {
                      setExpandedItem(
                        expandedItem === item.id ? null : item.id
                      );
                      setExpandedColumn(null);
                    }}
                    className="w-full text-left py-4 transition-colors duration-150 flex items-center justify-between group"
                  >
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-slate-700">
                      {item.label}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                        expandedItem === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedItem === item.id && (
                    <div className="pb-5 space-y-4">
                      {/* Hero Card */}
                      <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                        <span className="inline-block px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-blue-700 bg-white rounded mb-2">
                          Featured
                        </span>
                        <h4 className="text-sm font-semibold text-slate-900 leading-tight mb-1.5">
                          {item.hero.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.hero.description}
                        </p>
                      </div>

                      {/* Columns */}
                      <div className="space-y-3">
                        {item.columns && item.columns.map((column, idx) => {
                          const columnId = `${item.id}-${idx}`;
                          const isColumnExpanded = expandedColumn === columnId;

                          return (
                            <div key={idx} className="space-y-2">
                              <button
                                onClick={() =>
                                  setExpandedColumn(
                                    isColumnExpanded ? null : columnId
                                  )
                                }
                                className="w-full flex items-center justify-between py-2 group"
                              >
                                <h5 className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 group-hover:text-slate-700 transition-colors">
                                  {column.title}
                                </h5>
                                <ChevronRight
                                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                                    isColumnExpanded ? "rotate-90" : ""
                                  }`}
                                />
                              </button>

                              {isColumnExpanded && (
                                <ul className="space-y-0.5 pl-2">
                                  {column.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                      <Link
                                        href={link.href}
                                        className="flex items-center justify-between py-2.5 px-3 -mx-3 rounded-md hover:bg-slate-50 transition-colors duration-150 group"
                                        onClick={onClose}
                                      >
                                        <div className="flex-1 min-w-0">
                                          <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 block transition-colors">
                                            {link.label}
                                          </span>
                                          {link.description && (
                                            <span className="text-xs text-slate-500 block mt-0.5">
                                              {link.description}
                                            </span>
                                          )}
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex-shrink-0 ml-2" />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="shrink-0 px-5 py-4 border-t border-slate-200 bg-white">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full inline-flex h-11 px-5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-150 items-center justify-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
