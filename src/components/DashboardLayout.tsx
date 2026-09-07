"use client";

import React from "react";
import Header from "./Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-700 font-sans antialiased">
      <Header />
      <main className="portfolio-shell mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {children}
      </main>
      <footer className="border-t border-white/10 px-5 py-8 text-center text-xs text-white/40 sm:px-8 lg:px-12">
        <p>© {new Date().getFullYear()} Abdullah Al Habib. All rights reserved.</p>
      </footer>
    </div>
  );
}
