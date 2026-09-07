"use client";

import React from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "/about"],
    ["Services", "/services"],
    ["Skills", "/skills-tech"],
    ["Projects", "/projects"],
    ["Blogs", "/blogs"],
    ["Contact", "/contacts"],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-[#F8FAFC]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#059669]/60 text-xs font-black text-[#059669] transition-transform group-hover:rotate-6">AH</span>
          <span className="hidden text-xs font-bold tracking-[0.18em] text-gray-700 sm:block">ABDULLAH AL HABIB</span>
        </Link>

        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-slate-300 p-2 text-gray-700 lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav className={`${open ? "absolute left-5 right-5 top-[86px] flex" : "hidden"} flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}>
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-xs text-gray-600 transition-colors hover:bg-emerald-50 hover:text-[#059669] lg:px-0 lg:py-1">
              {label}
            </Link>
          ))}
          <Link href="/contacts" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#059669] px-5 py-2 text-xs font-bold text-white transition-transform hover:-translate-y-0.5 lg:mt-0">
            Let&apos;s Talk <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
