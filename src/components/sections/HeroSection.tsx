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

type HeroAbout = {
  hero_title?: string | null;
  hero_role?: string | null;
  hero_subtitle?: string | null;
  hero_availability?: string | null;
  hero_tech_stack?: string[] | null;
  name?: string | null;
  tagline?: string | null;
  bio?: string | null;
  profile_photo_url?: string | null;
  linkedin_url?: string | null;
  whatsapp?: string | null;
  years_exp?: string | null;
  projects_count?: string | null;
  clients_count?: string | null;
};

export default function HeroSection({ about }: { about?: HeroAbout | null }) {
  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10 pb-10 pt-10 lg:pb-6 lg:pt-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left main intro */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b8f35b]/20 bg-[#b8f35b]/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#059669]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669]"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]"></span>
            </span>
            {about?.hero_availability || "Available for Freelance & Remote Opportunities"}
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-3">
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-gray-700 sm:text-5xl lg:text-7xl">
              {about?.hero_title || "Full Stack"} <br />
              <span className="text-[#059669]">
                {about?.hero_role || "Web Developer"}
              </span>
            </h1>
            <p className="max-w-2xl text-base font-medium tracking-wide text-[#059669] sm:text-lg">
              {about?.hero_subtitle || "Building Scalable SaaS, ERP & eCommerce Applications"}
            </p>
          </div>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1 font-mono text-xs text-gray-700 sm:text-sm">
            {(about?.hero_tech_stack?.length ? about.hero_tech_stack : [
              "React",
              "Next.js",
              "Redux",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "AI Integration",
            ]).map((tech) => (
              <span
                key={tech}
                className="font-semibold transition-colors hover:text-[#059669]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Paragraph Bio */}
          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-gray-700 sm:text-base">
            <p>
              Hi, I’m <strong className="text-[#059669] font-semibold">{about?.name || "Abdullah Al Habib"}</strong>, a Full Stack Web Developer specializing in fast, scalable, and SEO-friendly web applications.
            </p>
              <p className="text-sm text-gray-700">
              {about?.bio || "I build modern SaaS, ERP, eCommerce, and custom web solutions using React, Next.js, Node.js, Express, Prisma, Supabase, and MongoDB, with a focus on clean UI, performance, and scalable architecture."}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/contacts"
              className="inline-flex items-center gap-2 rounded-full bg-[#059669] px-5 py-3 text-xs font-bold text-gray-100 shadow-xl shadow-emerald-500/10 transition-all hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Lets Connect</span>
            </a>

            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-xs font-semibold text-gray-700 transition-all hover:border-[#059669]/50 hover:text-[#059669]"
            >
              <span>Check Projects</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-3 text-slate-400 text-xs sm:text-sm">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[11px]">Connect:</span>
            <div className="flex items-center gap-3">
              <a
                href={about?.linkedin_url || "https://www.linkedin.com/in/abdullah-al-habib/"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-[#059669] transition-colors"
                title="LinkedIn"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={about?.whatsapp || "https://wa.me/+8801753105250"}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-[#059669] transition-colors"
                title="WhatsApp"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right side: Profile Card & Stats */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            {/* Glow backdrop */}
            {/* <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 opacity-30 blur-xl group-hover:opacity-50 transition duration-500"></div> */}

            <div className="relative space-y-6 p-6">
              {/* Profile Image placeholder/avatar styling */}
              <div className="relative aspect-square overflow-hidden rounded-full border border-[#059669]/35 bg-white p-3 text-center shadow-2xl shadow-emerald-500/10">
                <div className="relative w-full h-full overflow-hidden rounded-full">
                  <Image
                    src={about?.profile_photo_url || "/images/profile.jpg.png"}
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
                <div className="space-y-1 rounded-2xl border border-white/10 bg-white/5 p-3.5 text-center transition-colors hover:border-[#c7f36b]/30">
                  <div className="flex items-center justify-center text-[#059669] mb-1">
                    <Award className="w-4 h-4" />
                  </div>
                  <p className="text-2xl font-black text-gray-700">{about?.years_exp || "3+"}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Years Exp.</p>
                </div>

                <div className="space-y-1 rounded-2xl border border-white/10 bg-white/5 p-3.5 text-center transition-colors hover:border-[#c7f36b]/30">
                  <div className="flex items-center justify-center text-[#059669] mb-1">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <p className="text-2xl font-black text-gray-700">{about?.projects_count || "50+"}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Projects</p>
                </div>

                <div className="space-y-1 rounded-2xl border border-white/10 bg-white/5 p-3.5 text-center transition-colors hover:border-[#c7f36b]/30">
                  <div className="flex items-center justify-center text-[#059669] mb-1">
                    <Users className="w-4 h-4" />
                  </div>
                  <p className="text-2xl font-black text-gray-700">{about?.clients_count || "30+"}</p>
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
