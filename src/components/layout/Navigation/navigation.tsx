"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import TabMenu from "./TabMenu";
import MobileMenu from "./mobile-menu";
import { TAB_ITEMS, NAVIGATION_ITEMS } from "./config";
import Link from "next/link";
import { NavItem } from "./types";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState(TAB_ITEMS[0]);
  const [hoveredTab, setHoveredTab] = useState<(typeof TAB_ITEMS)[0] | null>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const matchedTab =
      TAB_ITEMS.find((item) =>
        item.matchPrefixes?.some((prefix) => pathname.startsWith(prefix))
      ) ?? TAB_ITEMS.find((item) => item.href === pathname);

    if (matchedTab && matchedTab.id !== activeTab.id) {
      setActiveTab(matchedTab);
    }
  }, [pathname, activeTab.id]);

  const activeMegaMenuData = hoveredTab
    ? NAVIGATION_ITEMS.find(
        (item: NavItem) => item.id === hoveredTab.id.toString()
      )
    : null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-9999 transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "bg-transparent border-b border-white/10"
        }`}
        style={{ willChange: "background-color, border-color, box-shadow" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="shrink-0">
              <Link
                href="/"
                className={`text-xl sm:text-2xl font-bold transition-colors duration-200 ${
                  isScrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Logo
              </Link>
            </div>

            {/* Center Navigation */}
            <div className="flex items-center gap-3 sm:gap-4">
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

              {/* CTA Button */}
              <Link
                href="/contact"
                className={`hidden md:inline-flex items-center justify-center px-5 h-10 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? "text-white bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600"
                    : "text-white bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600"
                }`}
              >
                Contact
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`md:hidden h-10 w-10 flex items-center justify-center rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? "hover:bg-slate-100 text-slate-600"
                    : "hover:bg-white/10 text-white"
                }`}
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navigationItems={NAVIGATION_ITEMS}
        />
      </header>
    </>
  );
}
