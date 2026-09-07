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

export default function ProjectsSection() {
    const dispatch = useAppDispatch();
    const selectedCategory = useAppSelector((state) => state.portfolio.projectCategory);

    const categories = ["All", "SaaS", "ERP", "eCommerce", "Matrimonial", "Educational"];

    const projects = [
        {
            id: 1,
            title: "Chada.site",
            category: "SaaS",
            image: "https://www.mobassher.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhajseyww%2Fimage%2Fupload%2Fv1788090824%2Fmobassher%2F%25C3%25A0_%25C3%25A0_%25C3%25A0_%25C3%25A0_%25C3%25A0_-%25C3%25A0_%25C3%25A0_%25C3%25A0_%25C3%25A0_%25C3%25A0_-%25C3%25A0_%25C3%25A0_%25C3%25A0_%25C3%25A0_%25C3%25A0_%25C3%25A0_-%25C3%25A0_%25C3%25A0_%25C3%...&w=640&q=75",
            description: "Built chada.site, an anonymous civic reporting platform designed to help people document and report incidents of extortion.",
            tags: ["TypeScript", "Next.js", "Redux", "NestJS"],
            live: "https://www.chada.site/",
            github: "#",
        },
        {
            id: 2,
            title: "Sohoz Nikah",
            category: "Matrimonial",
            image: "https://www.mobassher.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhajseyww%2Fimage%2Fupload%2Fv1778590013%2Fsohoznikah_gk26ku.png&w=640&q=75",
            description: "A modern matrimonial platform built with Next.js and Node.js for scalable and secure matchmaking system.",
            tags: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
            live: "https://sohoznikah.com/",
            github: "#",
        },
        {
            id: 3,
            title: "Dr. Atik Mujahid",
            category: "Portfolio",
            image: "https://www.mobassher.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhajseyww%2Fimage%2Fupload%2Fv1778590010%2Fatikmujahid_avyreu.png&w=640&q=75",
            description: "Professional political and personal portfolio website built using Next.js with strong SEO optimization.",
            tags: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
            live: "https://dratikmujahid.com/",
            github: "#",
        },
        {
            id: 4,
            title: "Ad-Doha Institute",
            category: "ERP",
            image: "https://www.mobassher.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhajseyww%2Fimage%2Fupload%2Fv1778590010%2Faddoha_bglewk.png&w=640&q=75",
            description: "A complete educational ERP system for managing admissions, courses, teachers, and student data efficiently.",
            tags: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
            live: "https://ad-doha.org/",
            github: "#",
        },
        {
            id: 5,
            title: "CGCS BD",
            category: "Educational",
            image: "https://www.mobassher.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhajseyww%2Fimage%2Fupload%2Fv1778590016%2Fcgcsbd_jugzsf.png&w=640&q=75",
            description: "A research and publication platform for managing academic content, events, and publications.",
            tags: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
            live: "https://cgcsbd.com/",
            github: "#",
        },
        {
            id: 6,
            title: "JobSea",
            category: "SaaS",
            image: "https://www.mobassher.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhajseyww%2Fimage%2Fupload%2Fv1778590010%2Fjobsea_ef71cz.png&w=640&q=75",
            description: "A job portal platform connecting employers and job seekers with advanced filtering and role-based access.",
            tags: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
            live: "https://jobsea.nl/",
            github: "#",
        },
        {
            id: 7,
            title: "NGIT BD",
            category: "Educational",
            image: "https://www.mobassher.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhajseyww%2Fimage%2Fupload%2Fv1778590016%2Fngitbd_d5ef9m.png&w=640&q=75",
            description: "A technology education and institutional website built for digital visibility and student engagement.",
            tags: ["Next.js", "Tailwind", "SEO", "CMS"],
            live: "https://ngitbd.org/",
            github: "#",
        },
        {
            id: 8,
            title: "Save Humanity Trust",
            category: "Educational",
            image: "https://www.mobassher.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhajseyww%2Fimage%2Fupload%2Fv1778590011%2Fsavehumanity_0s4xkz.png&w=640&q=75",
            description: "A mission-driven NGO website crafted to communicate welfare, education, and social development programs clearly.",
            tags: ["WordPress", "UI/UX", "SEO", "Content"],
            live: "https://www.savehumanitytrust.org/",
            github: "#",
        },
        {
            id: 9,
            title: "IRDF",
            category: "Educational",
            image: "https://www.mobassher.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhajseyww%2Fimage%2Fupload%2Fv1778590014%2Firdf_9ryylw.png&w=640&q=75",
            description: "An impact-focused organization website built to showcase rural development, health, and education efforts.",
            tags: ["WordPress", "Responsive", "SEO", "Branding"],
            live: "https://irdfbd.com/",
            github: "#",
        },
        {
            id: 10,
            title: "MASFBD",
            category: "Educational",
            image: "https://www.mobassher.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhajseyww%2Fimage%2Fupload%2Fv1778590015%2Fmasfbd_ae3dts.png&w=640&q=75",
            description: "A foundation website delivering a clean digital presence for institutional communication and community engagement.",
            tags: ["Next.js", "Accessibility", "UI", "Performance"],
            live: "https://masfbd.com/",
            github: "#",
        },
        {
            id: 11,
            title: "BazaarHub",
            category: "eCommerce",
            image: "https://www.mobassher.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhajseyww%2Fimage%2Fupload%2Fv1778590014%2Fbazaarhub_w9o7rl.png&w=640&q=75",
            description: "A modern commerce platform with product, cart, and conversion-focused layouts for better customer experience.",
            tags: ["Next.js", "Stripe", "UI", "Analytics"],
            live: "https://example.com/",
            github: "#",
        },
        {
            id: 12,
            title: "EduPilot",
            category: "ERP",
            image: "https://www.mobassher.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhajseyww%2Fimage%2Fupload%2Fv1778590015%2Fedupilot_t9s0r1.png&w=640&q=75",
            description: "A school management and academic dashboard solution built to streamline operations and reporting.",
            tags: ["React", "Next.js", "Dashboard", "Admin"],
            live: "https://example.com/",
            github: "#",
        },
    ];

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
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-500/5 px-4 py-2 rounded-xl border border-emerald-500/20"
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
                                        href={project.live}
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
                                    {project.category}
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
                                {project.tags.map((tag) => (
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
                                    href={project.live}
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
