"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import { Search, Globe, Sun, Menu } from "lucide-react";
import TabMenu from "./TabMenu";
import MobileMenu from "./mobile-menu";
import { TAB_ITEMS, NAVIGATION_ITEMS } from "./config";
import { NavItem } from "./types";
import Link from "next/link";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState(TAB_ITEMS[0]);
  const [hoveredTab, setHoveredTab] = useState<(typeof TAB_ITEMS)[0] | null>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Use Intersection Observer with CSS variables - minimal JS, CSS handles styling
  useEffect(() => {
    const sentinel = sentinelRef.current;
    const nav = navRef.current;
    if (!sentinel || !nav) return;

    // Update CSS variable instead of React state - CSS handles all styling
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (nav) {
          // Update CSS variable on the navigation element
          nav.style.setProperty(
            "--is-scrolled",
            entry.isIntersecting ? "0" : "1"
          );
        }
      },
      {
        threshold: [1],
        rootMargin: "-50px 0px 0px 0px",
      }
    );

    observer.observe(sentinel);

    // Set initial state
    nav.style.setProperty("--is-scrolled", "0");

    return () => {
      observer.disconnect();
    };
  }, []);

  // Memoize mega menu data lookup to prevent recalculation
  const activeMegaMenuData = useMemo(() => {
    return hoveredTab
      ? NAVIGATION_ITEMS.find(
          (item: NavItem) => item.id === hoveredTab.id.toString()
        )
      : null;
  }, [hoveredTab]);

  // CSS handles all styling based on --is-scrolled variable - no React state needed

  return (
    <>
      {/* Scroll sentinel - used by Intersection Observer for scroll detection */}
      <div
        ref={sentinelRef}
        style={{
          position: "absolute",
          top: "50px",
          left: 0,
          width: "1px",
          height: "1px",
          pointerEvents: "none",
          visibility: "hidden",
        }}
        aria-hidden="true"
      />
      <header
        ref={navRef}
        className="nav-header"
        style={{
          "--is-scrolled": "0",
        } as React.CSSProperties & { "--is-scrolled": string }}
      >
        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="shrink-0">
              <Link
                href="/"
                className="nav-logo text-2xl font-bold"
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
                />
              </div>

              {/* Desktop Action Buttons */}
              <button
                className="nav-icon-btn hidden md:flex h-10 w-10 items-center justify-center rounded-lg"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>

              <button
                className="nav-icon-btn hidden md:flex h-10 w-10 items-center justify-center rounded-lg"
                aria-label="Language"
              >
                <Globe className="h-5 w-5" />
              </button>

              <button
                className="nav-icon-btn hidden md:flex h-10 w-10 items-center justify-center rounded-lg"
                aria-label="Theme"
              >
                <Sun className="h-5 w-5" />
              </button>

              <button
                className="nav-cta-btn hidden md:inline-flex items-center justify-center px-5 h-10 text-sm font-medium rounded-full"
              >
                Contact
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="nav-mobile-btn md:hidden h-10 w-10 flex items-center justify-center rounded-lg"
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navigationItems={NAVIGATION_ITEMS}
        />
      </header>
    </>
  );
}
