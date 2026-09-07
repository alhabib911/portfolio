"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  toggleSidebar,
  setSidebarOpen,
  toggleCollapse,
  setActiveSection,
} from "@/redux/slices/sidebarSlice";
import {
  Home,
  User,
  Briefcase,
  Cpu,
  FolderGit2,
  MessageSquareQuote,
  BookOpen,
  Mail,
  X,
  GitBranch,
  Globe,
  FileText,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export const navItems = [
  { id: "home", label: "Home", icon: Home },
//   { id: "about", label: "About", icon: User },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "skills", label: "Skills & Tech", icon: Cpu },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "blogs", label: "Articles & Blog", icon: BookOpen },
  { id: "contact", label: "Get In Touch", icon: Mail },
];

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const { isOpen, isCollapsed, activeSection } = useAppSelector(
    (state) => state.sidebar
  );

  const handleNavClick = (id: string) => {
    dispatch(setActiveSection(id));
    dispatch(setSidebarOpen(false));

    // if (id === "about") {
    //   router.push("/about");
    //   return;
    // }

    if (id === "services") {
      router.push("/services");
      return;
    }

    if (id === "skills") {
      router.push("/skills-tech");
      return;
    }

    if (id === "projects") {
      router.push("/projects");
      return;
    }

    if (id === "blogs") {
      router.push("/blogs");
      return;
    }

    if (id === "contact") {
      router.push("/contacts");
      return;
    }

    if (id === "home") {
      router.push("/");
      return;
    }

    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => dispatch(setSidebarOpen(false))}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col bg-[#F8FAFC] border-r border-slate-800/80 text-slate-300 transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          ${isCollapsed ? "lg:w-20" : "w-72 lg:w-72"}
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800/80">
          <Link
            href="/"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 overflow-hidden group"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-500 via-cyan-500 to-blue-500 p-[2px] shrink-0 shadow-lg shadow-emerald-500/10">
              <div className="w-full h-full bg-[#F8FAFC] rounded-[10px] flex items-center justify-center overflow-hidden">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 text-lg">
                  AH
                </span>
              </div>
            </div>
            {!isCollapsed && (
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-gray-700 truncate text-base leading-tight group-hover:text-emerald-400 transition-colors">
                  Abdullah Al Habib
                </span>
                <span className="text-xs text-emerald-400/90 font-medium truncate flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Full Stack Developer
                </span>
              </div>
            )}
          </Link>

          {/* Close button for mobile */}
          <button
            onClick={() => dispatch(setSidebarOpen(false))}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Desktop collapse toggle icon */}
          <button
            onClick={() => dispatch(toggleCollapse())}
            className="hidden lg:flex p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-emerald-400" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-slate-400 hover:text-emerald-400" />
            )}
          </button>
        </div>

        {/* Availability Badge */}
        {!isCollapsed && (
          <div className="mx-4 mt-4 p-3 rounded-xl bg-gray-200 border border-emerald-500/20 flex items-center gap-3">
            <div className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            <div className="text-xs">
              <p className="font-semibold text-emerald-400">Available for Work</p>
              <p className="text-slate-400 text-[11px]">Freelance & Remote</p>
            </div>
          </div>
        )}

        {/* Navigation Menu Links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1.5 custom-scrollbar">
          {!isCollapsed && (
            <p className="px-3 text-[11px] font-semibold tracking-wider text-slate-500 uppercase mb-2">
              Navigation
            </p>
          )}

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
            //   (pathname === "/about" && item.id === "about") ||
              (pathname === "/services" && item.id === "services") ||
              (pathname === "/skills-tech" && item.id === "skills") ||
              (pathname === "/projects" && item.id === "projects") ||
              (pathname === "/blogs" && item.id === "blogs") ||
              (pathname === "/contacts" && item.id === "contact") ||
              (pathname === "/" && activeSection === item.id);
            const itemHref =
              item.id === "about"
                ? "/about"
                : item.id === "services"
                ? "/services"
                : item.id === "skills"
                ? "/skills-tech"
                : item.id === "projects"
                ? "/projects"
                : item.id === "blogs"
                ? "/blogs"
                : item.id === "contact"
                ? "/contacts"
                : item.id === "home"
                ? "/"
                : `/#${item.id}`;

            return (
              <Link
                key={item.id}
                href={itemHref}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`flex items-center gap-3.5 px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 group relative ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/10 text-emerald-400 border border-emerald-500/30 shadow-lg shadow-emerald-500/5 font-semibold"
                    : "text-slate-400 hover:text-gray-700 hover:bg-gray-200"
                } ${isCollapsed ? "justify-center px-0" : ""}`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon
                  className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                    isActive
                      ? "text-emerald-400 scale-110"
                      : "text-slate-400 group-hover:text-emerald-400 group-hover:scale-105"
                  }`}
                />
                {!isCollapsed && (
                  <span className="truncate">{item.label}</span>
                )}
                {isActive && !isCollapsed && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer & Socials */}
        <div className="p-4 border-t border-slate-800/80 bg-[#F8FAFC] space-y-3">
        </div>
      </aside>
    </>
  );
}
