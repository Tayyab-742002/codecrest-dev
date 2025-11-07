"use client";

import { useState } from "react";
import { Search, Globe, Sun, Menu } from "lucide-react";
import TabMenu from "./TabMenu";
import MobileMenu from "./mobile-menu";
import { TAB_ITEMS, NAVIGATION_ITEMS } from "./config";
import { NavItem } from "./types";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState(TAB_ITEMS[0]);
  const [hoveredTab, setHoveredTab] = useState<(typeof TAB_ITEMS)[0] | null>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get mega menu data for the hovered tab
  const activeMegaMenuData = hoveredTab
    ? NAVIGATION_ITEMS.find(
        (item: NavItem) => item.id === hoveredTab.id.toString()
      )
    : null;

  return (
    <div>
      <div className="bg-white  border-b border-slate-200 ">
        {/* Top Tab Menu with Mega Menu */}

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="shrink-0">
              <a href="#" className="text-2xl font-bold text-slate-900 ">
                Logo
              </a>
            </div>
            {/* Tab menu */}
            <TabMenu
              items={TAB_ITEMS}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              hoveredTab={hoveredTab}
              setHoveredTab={setHoveredTab}
              megaMenuData={activeMegaMenuData}
            />
            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              <button className="hidden md:flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100  text-slate-600  hover:text-slate-900  transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="hidden md:flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100  text-slate-600  hover:text-slate-900  transition-colors">
                <Globe className="h-5 w-5" />
              </button>
              <button className="hidden md:flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100  text-slate-600  hover:text-slate-900  transition-colors">
                <Sun className="h-5 w-5" />
              </button>
              <button className="hidden md:inline-flex items-center justify-center px-5 h-10 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700  rounded-full transition-colors duration-200">
                Contact
              </button>

              {/* Mobile Menu Button - Only visible on mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden h-10 w-10 flex items-center justify-center rounded-lg hover:bg-slate-100  text-slate-600  hover:text-slate-900  transition-colors"
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
      </div>

      {/* Demo Content */}
      <div className="bg-slate-5 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white  rounded-2xl shadow-sm border border-slate-200  p-12 text-center">
            <h1 className="text-4xl font-bold text-slate-900  mb-4">
              Corporate Navigation System
            </h1>
            <p className="text-lg text-slate-600  max-w-2xl mx-auto mb-8">
              Hover over the tab menu items to see the mega menu. On mobile,
              click the menu button to access the mobile navigation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-slate-50  rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900  mb-2">
                  Tab Menu
                </h3>
                <p className="text-sm text-slate-600 ">
                  Hover over tabs to see mega menu with detailed navigation
                  options
                </p>
              </div>
              <div className="p-6 bg-slate-50  rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900  mb-2">
                  Mega Menu
                </h3>
                <p className="text-sm text-slate-600 ">
                  Rich content with hero section and organized link categories
                </p>
              </div>
              <div className="p-6 bg-slate-50  rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900  mb-2">
                  Mobile Menu
                </h3>
                <p className="text-sm text-slate-600 ">
                  Responsive slide-out menu with accordion navigation (mobile
                  only)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
