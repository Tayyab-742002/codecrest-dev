"use client";
import { useRef, useEffect, useMemo } from "react";
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

const TAB_LEAVE_DELAY = 150;

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
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Update ref when hoveredTab changes
  useEffect(() => {
    currentHoveredRef.current = hoveredTab;
  }, [hoveredTab]);

  const handleTabMouseLeave = (item: TabItem) => {
    const existingTimeout = leaveTimeoutRef.current.get(item.id);
    if (existingTimeout) {
      clearTimeout(existingTimeout);
    }

    const timeout = setTimeout(() => {
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

    // Clear mega menu timeout
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }

    // Immediate hover state update (no requestAnimationFrame delay)
    setHoveredTab(item);
  };

  // Cleanup all timeouts on unmount
  useEffect(() => {
    const timeoutsMap = leaveTimeoutRef.current;
    return () => {
      timeoutsMap.forEach((timeout) => clearTimeout(timeout));
      timeoutsMap.clear();
      if (megaMenuTimeoutRef.current) {
        clearTimeout(megaMenuTimeoutRef.current);
      }
    };
  }, []);

  // Get text color class - uses CSS variable for scroll state
  const getTextColorClass = useMemo(() => {
    return (itemId: number) => {
      const isHovered = hoveredTab?.id === itemId;
      const isActive = activeTab.id === itemId;

      if (isHovered || isActive) {
        return "tab-menu-text-active";
      }
      return "tab-menu-text";
    };
  }, [hoveredTab?.id, activeTab.id]);

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center justify-center overflow-x-auto scrollbar-hide">
          {items.map((item) => {
            const isItemHovered = hoveredTab?.id === item.id;
            const isItemActive = activeTab.id === item.id;

            return (
              <li key={item.id} className="shrink-0">
                <button
                  className="py-2 relative transition-colors"
                  onClick={() => setActiveTab(item)}
                  onMouseEnter={() => handleTabMouseEnter(item)}
                  onMouseLeave={() => handleTabMouseLeave(item)}
                >
                  <div className="px-5 py-2 relative cursor-pointer">
                    {/* Hover background */}
                    {isItemHovered && (
                      <div
                        className="absolute inset-0 tab-menu-hover-bg"
                        style={{
                          borderRadius: 6,
                          zIndex: 0,
                          backfaceVisibility: "hidden",
                          transform: "translateZ(0)",
                        }}
                      />
                    )}
                    {/* Text */}
                    <span
                      className={`relative z-10 ${getTextColorClass(item.id)}`}
                      style={{
                        transition: "color 150ms ease-out",
                      }}
                    >
                      {item.title}
                    </span>
                  </div>
                  {(isItemActive || isItemHovered) && (
                    <div
                      className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-blue-600"
                      style={{
                        zIndex: 20,
                        transition: "opacity 150ms ease-out",
                        backfaceVisibility: "hidden",
                        transform: "translateZ(0)",
                      }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mega Menu - Optimized rendering */}
      {hoveredTab && megaMenuData && (
        <div
          className="hidden md:block"
          onMouseEnter={() => {
            leaveTimeoutRef.current.forEach((timeout) => clearTimeout(timeout));
            leaveTimeoutRef.current.clear();
            if (megaMenuTimeoutRef.current) {
              clearTimeout(megaMenuTimeoutRef.current);
              megaMenuTimeoutRef.current = null;
            }
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
