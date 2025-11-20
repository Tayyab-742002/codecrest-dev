"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import MegaMenu from "./MegaMenu";
import type { TabItem, NavItem } from "./types";

interface TabMenuProps {
  items: TabItem[];
  activeTab: TabItem;
  setActiveTab: (item: TabItem) => void;
  hoveredTab: TabItem | null;
  setHoveredTab: (item: TabItem | null) => void;
  megaMenuData: NavItem | null | undefined;
  isScrolled?: boolean;
}

const TAB_LEAVE_DELAY = 150;

export default function TabMenu({
  items,
  activeTab,
  setActiveTab,
  hoveredTab,
  setHoveredTab,
  megaMenuData,
  isScrolled = false,
}: TabMenuProps) {
  const router = useRouter();
  const leaveTimeoutRef = useRef<Map<number, NodeJS.Timeout>>(new Map());
  const currentHoveredRef = useRef<TabItem | null>(hoveredTab);

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
    leaveTimeoutRef.current.forEach((timeout) => clearTimeout(timeout));
    leaveTimeoutRef.current.clear();
    setHoveredTab(item);
  };

  const handleTabClick = (item: TabItem) => {
    setActiveTab(item);
    setHoveredTab(null);
    if (item.href) {
      router.push(item.href);
    }
  };

  useEffect(() => {
    const timeoutsMap = leaveTimeoutRef.current;
    return () => {
      timeoutsMap.forEach((timeout) => clearTimeout(timeout));
      timeoutsMap.clear();
    };
  }, []);

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <ul className="flex items-center justify-center gap-1 overflow-x-auto scrollbar-hide">
          {items.map((item) => (
            <li key={item.id} className="shrink-0">
              <button
                type="button"
                className="relative transition-all duration-150 "
                onClick={() => handleTabClick(item)}
                onMouseEnter={() => handleTabMouseEnter(item)}
                onMouseLeave={() => handleTabMouseLeave(item)}
              >
                <div className="px-4 py-2.5 relative cursor-pointer">
                  {/* Hover background */}
                  {hoveredTab?.id === item.id && (
                    <motion.div
                      layoutId="hover-bg"
                      className={`absolute inset-0 ${
                        isScrolled ? "bg-slate-100" : "bg-white/10"
                      }`}
                      style={{ borderRadius: 6, zIndex: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Text */}
                  <span
                    className={`relative z-10 font-medium text-sm transition-colors duration-150 ${
                      isScrolled
                        ? hoveredTab?.id === item.id || activeTab.id === item.id
                          ? "text-slate-900"
                          : "text-slate-600"
                        : hoveredTab?.id === item.id || activeTab.id === item.id
                          ? "text-white"
                          : "text-white/80"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>

                {/* Active indicator */}
                {activeTab.id === item.id && (
                  <motion.div
                    layoutId="active"
                    className={`absolute bottom-0 left-0 right-0 w-full h-[2px] ${
                      isScrolled
                        ? "bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400"
                        : "bg-white"
                    }`}
                    style={{ zIndex: 20 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mega Menu */}
      {hoveredTab && megaMenuData && (
        <div
          className="hidden md:block"
          onMouseEnter={() => {
            leaveTimeoutRef.current.forEach((timeout) => clearTimeout(timeout));
            leaveTimeoutRef.current.clear();
            setHoveredTab(hoveredTab);
          }}
        >
          <MegaMenu
            hero={megaMenuData.hero}
            columns={megaMenuData.columns || []}
            footerLink={megaMenuData.footerLink}
            onMouseLeave={() => setHoveredTab(null)}
          />
        </div>
      )}
    </div>
  );
}
