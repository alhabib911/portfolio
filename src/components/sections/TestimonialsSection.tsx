"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Md Abu Rubayet",
    role: "CEO & Founder @ Sohoz Nikah",
    project: "SOHOZNIKAH.COM",
    text: "Definitely satisfied with Md Mobassher’s work. He is highly skilled, detail-oriented, and thoughtful throughout the full product lifecycle.",
    stars: 5,
  },
  {
    name: "Dr. Atiqur Rahman Mujahid",
    role: "Founding Executive Director @ CGCS",
    project: "CGCSBD.COM",
    text: "Mobassher built a professional, SEO-friendly platform that improved our digital presence and user experience significantly.",
    stars: 5,
  },
  {
    name: "Mawlana Mohammad Salman",
    role: "Chief Advisor @ Ad-Doha Institute",
    project: "AD-DOHA.ORG",
    text: "The project was delivered with quality, speed, and a strong design sense. The platform is organized, modern, and easy to maintain.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  const goPrev = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-16 border-b border-slate-800/80">
      <div className="space-y-3 mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          Client Success Stories
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-700 tracking-tight">
          Client Success Stories
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
                <Quote className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-black leading-none">100%</p>
                <p className="text-xs uppercase tracking-widest text-slate-400">Success Rate</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
                <Star className="w-6 h-6" fill="currentColor" />
              </div>
              <div>
                <p className="text-2xl font-black leading-none">5.0</p>
                <p className="text-xs uppercase tracking-widest text-slate-400">Average Rating</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={goPrev} className="p-3 rounded-xl bg-slate-900 text-slate-300 border border-slate-700 hover:text-emerald-400">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={goNext} className="p-3 rounded-xl bg-slate-900 text-slate-300 border border-slate-700 hover:text-emerald-400">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-8 relative">
          <div className="relative bg-[#E5F5F5] border border-emerald-500/20 rounded-[32px] p-8 shadow-xl">
            <div className="flex gap-1 mb-6">
              {[...Array(current.stars)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
              ))}
            </div>

            <blockquote className="text-xl sm:text-2xl font-medium text-gray-700 leading-relaxed italic mb-8">
              “{current.text}”
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-gray-700">{current.name}</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest">{current.role}</p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-900 text-white px-3 py-1 rounded-full">
                Project: {current.project}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
