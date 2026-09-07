"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleSidebar, toggleCollapse } from "@/redux/slices/sidebarSlice";
import { Menu, PanelLeft, MessageCircle, Download, ExternalLink, Sparkles } from "lucide-react";

export default function Header() {
  const dispatch = useAppDispatch();
  const { isCollapsed, activeSection } = useAppSelector((state) => state.sidebar);

  const formattedSectionName =
    activeSection.charAt(0).toUpperCase() + activeSection.slice(1);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 lg:px-8  backdrop-blur-md border-b border-slate-800/80 transition-all">
      {/* Left side: Hamburger button + Breadcrumb / Active Section */}
      <div className="flex items-center gap-3 lg:gap-4">
        {/* Mobile Hamburger Button */}
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="p-2 rounded-xl  hover:bg-slate-700/80 text-emerald-400 border border-slate-700/60 lg:hidden transition-colors shadow-sm"
          aria-label="Toggle Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Desktop Collapse Toggle Hamburger Icon */}
        <button
          onClick={() => dispatch(toggleCollapse())}
          className="hidden lg:flex p-2 rounded-xl bg-[#C6EEE3] hover:bg-gray-100 text-emerald-400 border border-slate-700/60 transition-colors shadow-sm cursor-pointer"
          aria-label="Toggle Sidebar Collapse"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          <PanelLeft className="w-5 h-5" />
        </button>

        {/* Breadcrumb / Title */}
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium text-slate-400 hidden sm:inline">
            Dashboard
          </span>
          <span className="text-slate-600 hidden sm:inline">/</span>
          <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 text-xs sm:text-sm">
            {formattedSectionName}
          </span>
        </div>
      </div>

      {/* Right side: Action links & status */}
      <div className="flex items-center gap-2 sm:gap-3">
        <a
          href="https://wa.me/+8801753105250"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium text-xs sm:text-sm transition-all"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        <a
          href="https://calendly.com/habib02cluster/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
        >
          <Sparkles className="w-4 h-4" />
          <span>Let's Discuss</span>
        </a>
      </div>
    </header>
  );
}
