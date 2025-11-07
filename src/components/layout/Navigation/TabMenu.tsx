"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import MegaMenu from "./MegaMenu";
import type { TabItem, NavItem } from "./types";

interface TabMenuProps {
  items: TabItem[];
  activeTab: TabItem;
  setActiveTab: (item: TabItem) => void;
  hoveredTab: TabItem | null;
  setHoveredTab: (item: TabItem | null) => void;
  megaMenuData: NavItem | null | undefined;
}

const TAB_LEAVE_DELAY = 150; // Delay before clearing hover when leaving a tab

export default function TabMenu({
  items,
  activeTab,
  setActiveTab,
  hoveredTab,
  setHoveredTab,
  megaMenuData,
}: TabMenuProps) {
  const leaveTimeoutRef = useRef<Map<number, NodeJS.Timeout>>(new Map());
  const currentHoveredRef = useRef<TabItem | null>(hoveredTab);

  // Update ref when hoveredTab changes
  useEffect(() => {
    currentHoveredRef.current = hoveredTab;
  }, [hoveredTab]);

  const handleTabMouseLeave = (item: TabItem) => {
    // Clear any existing timeout for this item
    const existingTimeout = leaveTimeoutRef.current.get(item.id);
    if (existingTimeout) {
      clearTimeout(existingTimeout);
    }

    // Set a delay before clearing hover
    const timeout = setTimeout(() => {
      // Only clear if this item is still the hovered tab (user hasn't hovered another)
      if (currentHoveredRef.current?.id === item.id) {
        setHoveredTab(null);
      }
      leaveTimeoutRef.current.delete(item.id);
    }, TAB_LEAVE_DELAY);

    leaveTimeoutRef.current.set(item.id, timeout);
  };

  const handleTabMouseEnter = (item: TabItem) => {
    // Clear any pending leave timeouts for all items
    leaveTimeoutRef.current.forEach((timeout) => clearTimeout(timeout));
    leaveTimeoutRef.current.clear();

    // Immediately set hover when entering
    setHoveredTab(item);
  };

  // Cleanup all timeouts on unmount
  useEffect(() => {
    const timeoutsMap = leaveTimeoutRef.current;
    return () => {
      timeoutsMap.forEach((timeout) => clearTimeout(timeout));
      timeoutsMap.clear();
    };
  }, []);

  return (
    <div className="relative border-b border-slate-200 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center justify-center overflow-x-auto scrollbar-hide">
          {items.map((item) => (
            <li key={item.id} className="shrink-0">
              <button
                className="py-2 relative duration-300 transition-colors"
                onClick={() => setActiveTab(item)}
                onMouseEnter={() => handleTabMouseEnter(item)}
                onMouseLeave={() => handleTabMouseLeave(item)}
              >
                <div className="px-5 py-2 relative cursor-pointer">
                  {/* Hover background - rendered first so it's behind the text */}
                  {hoveredTab?.id === item.id && (
                    <motion.div
                      layoutId="hover-bg"
                      className="absolute inset-0 bg-neutral-300"
                      style={{ borderRadius: 6, zIndex: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  {/* Text - rendered after background so it's on top */}
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      hoveredTab?.id === item.id
                        ? "text-slate-900"
                        : activeTab.id === item.id
                          ? "text-slate-900"
                          : "text-slate-600"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
                {activeTab.id === item.id && (
                  <motion.div
                    layoutId="active"
                    className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-blue-600"
                    style={{ zIndex: 20 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                {hoveredTab?.id === item.id && (
                  <motion.div
                    layoutId="hover"
                    className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-blue-600"
                    style={{ zIndex: 20 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mega Menu - Only shows on hover and on desktop */}
      {hoveredTab && megaMenuData && (
        <div
          className="hidden md:block"
          onMouseEnter={() => {
            // Clear any pending leave timeouts when entering mega menu
            leaveTimeoutRef.current.forEach((timeout) => clearTimeout(timeout));
            leaveTimeoutRef.current.clear();
            setHoveredTab(hoveredTab);
          }}
        >
          <MegaMenu
            hero={megaMenuData.hero}
            columns={megaMenuData.columns}
            onMouseLeave={() => setHoveredTab(null)}
          />
        </div>
      )}
    </div>
  );
}
