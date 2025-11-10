"use client";

import { useState, useEffect } from "react";
import { Search, Globe, Sun, Menu } from "lucide-react";
import TabMenu from "./TabMenu";
import MobileMenu from "./mobile-menu";
import { TAB_ITEMS, NAVIGATION_ITEMS } from "./config";
import Link from "next/link";
import { NavItem } from "./types";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState(TAB_ITEMS[0]);
  const [hoveredTab, setHoveredTab] = useState<(typeof TAB_ITEMS)[0] | null>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get mega menu data for the hovered tab
  const activeMegaMenuData = hoveredTab
    ? NAVIGATION_ITEMS.find(
        (item: NavItem) => item.id === hoveredTab.id.toString()
      )
    : null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,border-color,box-shadow]  ease-out ${
          isScrolled
            ? "bg-white/60 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
        style={{ willChange: "background-color, border-color, box-shadow" }}
      >
        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="shrink-0">
              <Link
                href="/"
                className={`text-2xl font-bold transition-colors ease-out ${
                  isScrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Logo
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              <div className="hidden md:block">
                <TabMenu
                  items={TAB_ITEMS}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  hoveredTab={hoveredTab}
                  setHoveredTab={setHoveredTab}
                  megaMenuData={activeMegaMenuData}
                  isScrolled={isScrolled}
                />
              </div>
              {/* Desktop Action Buttons */}
              <button
                className={`hidden md:flex h-10 w-10 items-center justify-center rounded-lg  ease-out ${
                  isScrolled
                    ? "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
                    : "hover:bg-white/20 text-white hover:text-white"
                }`}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                className={`hidden md:flex h-10 w-10 items-center justify-center rounded-lg  ease-out ${
                  isScrolled
                    ? "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
                    : "hover:bg-white/20 text-white hover:text-white"
                }`}
                aria-label="Language"
              >
                <Globe className="h-5 w-5" />
              </button>
              <button
                className={`hidden md:flex h-10 w-10 items-center justify-center rounded-lg  ease-out ${
                  isScrolled
                    ? "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
                    : "hover:bg-white/20 text-white hover:text-white"
                }`}
                aria-label="Theme"
              >
                <Sun className="h-5 w-5" />
              </button>
              <button
                className={`hidden md:inline-flex items-center justify-center px-5 h-10 text-sm font-medium rounded-full  ease-out ${
                  isScrolled
                    ? "text-white bg-blue-600 hover:bg-blue-700"
                    : "text-slate-900 bg-white hover:bg-white/90"
                }`}
              >
                Contact
              </button>

              {/* Mobile Menu Button - Only visible on mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`md:hidden h-10 w-10 flex items-center justify-center rounded-lg  ease-out ${
                  isScrolled
                    ? "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
                    : "hover:bg-white/20 text-white hover:text-white"
                }`}
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Only renders on mobile */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navigationItems={NAVIGATION_ITEMS}
        />
      </header>
    </>
  );
}
