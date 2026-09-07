"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useAppSelector } from "@/redux/hooks";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapsed } = useAppSelector((state) => state.sidebar);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex font-sans antialiased selection:bg-emerald-500 selection:text-white">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content Wrap with margin-left according to desktop sidebar state */}
      <div
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${
          isCollapsed ? "lg:ml-20" : "lg:ml-72"
        }`}
      >
        {/* Sticky Header with Hamburger Toggle */}
        <Header />

        {/* Dashboard Main Content Body */}
        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-8 max-w-7xl mx-auto w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 py-6 px-4 sm:px-8 text-center text-xs text-slate-500 bg-white/60 backdrop-blur-md">
          <p>© {new Date().getFullYear()} Abdullah Al Habib. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
