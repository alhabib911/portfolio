"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Award,
  Code2,
  Users,
  CheckCircle2,
  GitBranch,
  Globe,
  Bird,
  Mail,
  ExternalLink,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="pt-2 pb-16 lg:pb-24 border-b border-slate-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left main intro */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7F5F5]  text-emerald-400 text-xs font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Freelance & Remote Opportunities
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold ">
              Full Stack <br />
              <span className=" bg-clip-text text-[#00D492]">
                Web Developer
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-medium text-emerald-400/90 tracking-wide">
              Building Scalable SaaS, ERP & eCommerce Applications
            </p>
          </div>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1 pt-1 text-xs sm:text-sm font-mono text-slate-300">
            {[
              "React",
              "Next.js",
              "Redux",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "AI Integration",
            ].map((tech) => (
              <span
                key={tech}
                className="pr-2.5 font-semibold cursor-pointer text-gray-700 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Paragraph Bio */}
          <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3  ">
            <p>
              Hi, I’m <strong className="text-[#00D492] font-semibold">Abdullah Al Habib</strong>, a Full Stack Web Developer specializing in fast, scalable, and SEO-friendly web applications.
            </p>
            <p className="text-slate-800 text-sm">
              I build modern SaaS, ERP, eCommerce, and custom web solutions using React, Next.js, Node.js, Express, Prisma, PostgreSQL, and MongoDB, with a focus on clean UI, performance, and scalable architecture.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/contacts"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Lets Connect</span>
            </a>

            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-[#00D492] text-slate-200 hover:text-gray-700 border border-slate-700 font-semibold text-sm transition-all hover:border-emerald-500/50"
            >
              <span>Check Projects</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-3 text-slate-400 text-xs sm:text-sm">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[11px]">Connect:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/abdullah-al-habib/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-colors"
                title="LinkedIn"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/+8801753105250"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 transition-colors"
                title="WhatsApp"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right side: Profile Card & Stats */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative group mx-auto max-w-sm lg:max-w-none">
            {/* Glow backdrop */}
            {/* <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 opacity-30 blur-xl group-hover:opacity-50 transition duration-500"></div> */}

            <div className="relative p-6 shadow- space-y-6">
              {/* Profile Image placeholder/avatar styling */}
              <div className="relative overflow-hidden rounded-full aspect-square flex flex-col items-center justify-center p-3  text-center bg-gray-200">
                <div className="relative w-full h-full overflow-hidden rounded-full">
                  <Image
                    src="/images/profile.jpg"
                    alt="Abdullah Al Habib"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center"
                    priority
                  />
                </div>
              </div>

              {/* Counter Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-1 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center justify-center text-emerald-400 mb-1">
                    <Award className="w-4 h-4" />
                  </div>
                  <p className="text-2xl font-black text-slate-100">3+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Years Exp.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-1 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center justify-center text-cyan-400 mb-1">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <p className="text-2xl font-black text-slate-100">50+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Projects</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-1 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center justify-center text-blue-400 mb-1">
                    <Users className="w-4 h-4" />
                  </div>
                  <p className="text-2xl font-black text-slate-100">30+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
