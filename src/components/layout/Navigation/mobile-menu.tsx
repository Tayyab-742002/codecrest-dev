"use client";

import { useState } from "react";
import { Search, Globe, X } from "lucide-react";
import type { NavItem } from "./types";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavItem[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  navigationItems,
}: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Slide-out menu */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl animate-in slide-in-from-right duration-300 overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center space-x-2">
              <button className="h-10 w-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center">
                <Search className="h-5 w-5" />
              </button>
              <button className="h-10 w-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center">
                <Globe className="h-5 w-5" />
              </button>
            </div>
            <button
              onClick={onClose}
              className="h-10 w-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className="border-b border-slate-200 dark:border-slate-800 last:border-0"
              >
                <button
                  onClick={() =>
                    setExpandedItem(expandedItem === item.id ? null : item.id)
                  }
                  className="w-full text-left text-base font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 py-4 transition-colors duration-200 flex items-center justify-between min-h-[48px]"
                >
                  {item.label}
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedItem === item.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {expandedItem === item.id && (
                  <div className="space-y-5 pl-3 pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* Hero description */}
                    <div className="py-3 px-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 space-y-1.5">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                        {item.hero.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.hero.description}
                      </p>
                    </div>

                    {/* Column categories */}
                    {item.columns.map((column, idx) => (
                      <div key={idx} className="space-y-2.5">
                        <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 px-1">
                          {column.title}
                        </h5>
                        <ul className="space-y-1">
                          {column.links.map((link, linkIdx) => (
                            <li key={linkIdx}>
                              <a
                                href={link.href}
                                className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-2.5 px-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 min-h-[48px]"
                                onClick={onClose}
                              >
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <button className="w-full inline-flex items-center justify-center px-5 h-12 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
