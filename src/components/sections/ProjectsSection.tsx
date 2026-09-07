"use client";

import React from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setProjectCategory } from "@/redux/slices/portfolioSlice";
import {
    ExternalLink,
    GitBranch,
    Layout,
    Code,
    Layers,
    ArrowRight,
    Globe,
    Monitor,
    Smartphone,
    Eye,
    Briefcase,
    Terminal,
} from "lucide-react";

type Project = {
    id: string;
    title: string;
    category: string | null;
    image_url: string | null;
    description: string | null;
    tech_stack: string[] | null;
    live_url: string | null;
    github_url: string | null;
};

export default function ProjectsSection({ projects }: { projects: Project[] }) {
    const dispatch = useAppDispatch();
    const selectedCategory = useAppSelector((state) => state.portfolio.projectCategory);

    const categories = ["All", "SaaS", "ERP", "eCommerce", "Matrimonial", "Educational"];

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((p) => p.category === selectedCategory);

    const visibleProjects = filteredProjects.slice(0, 6);

    return (
        <section id="projects" className="py-16 border-b border-slate-800/80">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        Featured Projects
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-700 tracking-tight">
                        Curated Collection of Works
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                        A curated collection of SaaS platforms, ERP systems, and eCommerce applications built using modern full-stack technologies.
                    </p>
                </div>

                {/* Categories */}
                <div className="flex justify-between flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => dispatch(setProjectCategory(cat))}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${selectedCategory === cat
                                ? "bg-emerald-500 text-slate-950 border-emerald-500 shadow-lg shadow-emerald-500/20"
                                : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

            </div>
            <div className="flex justify-end my-6  text-center">
                <Link
                    href="/my-projects"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-100 transition-colors bg-[#059669] px-3 py-1 rounded-xl border border-emerald-500/20"
                >
                    <span>View All Projects</span>
                    <div className="p-1 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </Link>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {visibleProjects.map((project) => (
                    <div
                        key={project.id}
                        className="group relative bg-gray-100 border border-slate-800/80 rounded-[32px] overflow-hidden hover:border-emerald-500/40 transition-all duration-500 flex flex-col h-full hover:shadow-2xl hover:shadow-emerald-500/10"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900/50 border-b border-slate-800/60">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1322] via-transparent to-transparent z-10 opacity-60"></div>

                            {/* Mock placeholder since actual images from website might not load directly or have CORS/Next.js issues if not optimized */}
                            <div className="w-full h-full bg-slate-800 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,theme(colors.emerald.500)_0%,transparent_100%)]"></div>
                                <div className="text-slate-500 flex flex-col items-center gap-3">
                                    <Monitor className="w-12 h-12 text-slate-700" />
                                    <span className="text-xs font-mono font-bold tracking-widest uppercase opacity-40">Project Preview</span>
                                </div>

                                {/* Overlay Action */}
                                <div className="absolute inset-0 bg-emerald-500/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-3">
                                    <a
                                        href={project.live_url || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-slate-950 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-slate-950 transition-all shadow-xl active:scale-90"
                                    >
                                        <Eye className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Category Badge */}
                            <div className="absolute top-4 left-4 z-20">
                                <span className="px-3 py-1 rounded-full bg-[#0d1322]/80 backdrop-blur-md border border-slate-700/50 text-[10px] font-black uppercase tracking-widest text-emerald-400">
                                    {project.category || "Other"}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1 space-y-4">
                            <div className="space-y-1.5">
                                <h3 className="text-xl font-bold text-gray-700   group-hover:text-emerald-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 font-medium">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 pt-1">
                                {(project.tech_stack || []).map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-0.5 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-500 uppercase tracking-tighter"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Bottom Actions */}
                            <div className="pt-4 mt-auto border-t border-slate-800/40 flex items-center justify-between">
                                <a
                                    href={project.live_url || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-emerald-400 transition-colors"
                                >
                                    <span>Live Demo</span>
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-400 transition-colors"
                                >
                                    {/* <span>Case Study</span> */}
                                    {/* <ArrowRight className="w-3.5 h-3.5" /> */}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}

        </section>
    );
}
