"use client";

import React from "react";
import {
  Layers,
  Bot,
  LayoutDashboard,
  Code,
  Server,
  ShoppingCart,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = { id?: string; title: string; description: string; icon?: string | LucideIcon | null; features: string[]; color?: string };

const fallbackServices: Service[] = [
    {
      title: "Full-Stack Solutions",
      icon: Layers,
      color: "from-emerald-500 to-teal-500",
      description:
        "End-to-end web application development from UI/UX design to backend, database, and deployment.",
      features: [
        "Complete Web Apps",
        "Modern Responsive Architecture",
        "Production Deployment",
        "Clean Code Standards",
      ],
    },
    {
      title: "AI Integration & Automation",
      icon: Bot,
      color: "from-cyan-500 to-blue-500",
      description:
        "Integrating AI features into web apps using OpenAI API, LangChain, and custom GPT models — chatbots, smart search, and RAG systems.",
      features: [
        "OpenAI & Custom LLMs",
        "AI Chatbots & Agents",
        "RAG & Smart Search",
        "Workflow Automation",
      ],
    },
    {
      title: "SaaS Application Development",
      icon: LayoutDashboard,
      color: "from-purple-500 to-indigo-500",
      description:
        "Building scalable SaaS platforms with authentication, subscription systems, dashboards, and multi-tenant architecture.",
      features: [
        "Multi-Tenant Architecture",
        "Stripe / Payment Billing",
        "Admin Dashboards",
        "User Auth & Roles",
      ],
    },
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-amber-500 to-orange-500",
      description:
        "Building fast, responsive, and SEO-friendly user interfaces using React, Next.js, and modern UI frameworks like Tailwind CSS.",
      features: [
        "React & Next.js 15/16",
        "Tailwind CSS & Shadcn UI",
        "Pixel-Perfect Responsive UI",
        "SEO & Core Web Vitals",
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-emerald-500 to-green-600",
      description:
        "Developing secure, scalable REST APIs and server-side applications using Node.js, Express, and MongoDB with clean architecture.",
      features: [
        "REST & GraphQL APIs",
        "Node.js & Express",
        "MongoDB & PostgreSQL",
        "Security & Auth Protocols",
      ],
    },
    {
      title: "eCommerce Development",
      icon: ShoppingCart,
      color: "from-rose-500 to-pink-500",
      description:
        "Developing high-performance online stores with cart, payment integration, admin dashboard, and SEO optimization.",
      features: [
        "Custom Online Stores",
        "Cart & Checkout Systems",
        "Payment Gateway Integration",
        "Inventory Management",
      ],
    },
];

export default function ServicesSection({ services: databaseServices }: { services?: Service[] }) {
  const iconMap: Record<string, LucideIcon> = { Layers, Bot, LayoutDashboard, Code, Server, ShoppingCart };
  const services = databaseServices?.length
    ? databaseServices.map((service) => ({
        ...service,
        icon: typeof service.icon === "string" ? iconMap[service.icon] || Layers : service.icon || Layers,
        color: "from-emerald-500 to-teal-500",
      }))
    : fallbackServices;

  return (
    <section id="services" className="py-16 border-b border-slate-800/80">
      {/* Section Header */}
      <div className="space-y-3 mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          Services I Offer
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-700 tracking-tight">
          Services I Offer
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Scalable SaaS, ERP, eCommerce and modern web solutions built with performance, security, and clean architecture.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = typeof service.icon === "string" ? iconMap[service.icon] || Layers : service.icon || Layers;
          return (
            <div
              key={index}
              className="bg-gray-100  rounded-3xl p-6 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-emerald-500/5 hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Icon box */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.color} p-0.5 shadow-lg`}
                  >
                    <div className="w-full h-full bg-[#0a0f1d] rounded-[14px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-slate-100 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-700 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 pt-2 border-t border-slate-800/60">
                  {service.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className="text-xs text-gray-700 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action link */}
              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  {/* <span>Discuss Project</span> */}
                  {/* <ArrowUpRight className="w-4 h-4" /> */}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
