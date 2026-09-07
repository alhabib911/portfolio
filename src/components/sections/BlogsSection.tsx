"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowUpRight,
  TrendingUp,
  Tag,
} from "lucide-react";

type Blog = {
  id: string;
  title: string;
  date: string;
  read_time: string;
  category: string;
  image_url: string | null;
  description: string | null;
};

export default function BlogsSection({ blogs }: { blogs: Blog[] }) {

  return (
    <section id="blogs" className="py-16 border-b border-slate-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Latest Articles
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-700 tracking-tight">
            Insights & Tutorials
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Thoughts on software development, UI/UX design, and technology trends.
          </p>
        </div>

        <Link
          href="/my-blogs"
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-100 bg-[#059669] px-4 py-2 rounded-xl border border-emerald-500/20"
        >
          <span>View All Articles</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="group bg-gray-100 border border-gray-200 rounded-[32px] overflow-hidden hover:border-gray-200 transition-all duration-300 flex flex-col h-full"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1322] via-transparent to-transparent z-10 opacity-60"></div>
              <img
                src={blog.image_url || "/images/profile.jpg.png"}
                alt={blog.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute top-4 left-4 z-20">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-widest shadow-lg">
                  <Tag className="w-3 h-3" />
                  {blog.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1 space-y-4">
              <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-500/60" />
                  {blog.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-500/60" />
                  {blog.read_time}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-700 group-hover:text-emerald-400 transition-colors line-clamp-2 leading-tight">
                {blog.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                {blog.description}
              </p>

              <div className="pt-4 mt-auto">
                <Link
                  href={`/blog/${blog.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-gray-700 group-hover:text-emerald-400 transition-colors uppercase tracking-widest"
                >
                  <span>Read Article</span>
                  <div className="p-1 rounded-lg bg-slate-800 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Featured Newsletter CTA */}
      <div className="mt-16 shadow rounded-[40px] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
         <div className="space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-[#059669] text-[10px] font-black uppercase tracking-widest border border-cyan-500/20">
               <TrendingUp className="w-3 h-3" />
               Stay Updated
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-700">Subscribe to My Newsletter</h3>
            <p className="text-gray-700 text-sm sm:text-base max-w-lg">
               Subscribe to receive updates about my latest projects, tutorials, articles, and development insights.
            </p>
         </div>

         <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch gap-3">
            <input 
               type="email" 
               placeholder="Enter your email address" 
               className="px-4 py-2 rounded-2xl bg-gray-50/5 border border-emerald-500/50 text-gray-400 focus:outline-none focus:border-emerald-500/50 transition-colors w-full sm:w-80 text-sm font-medium"
            />
            <button className="px-8 py-4 rounded-2xl bg-[#059669] text-gray-100 font-bold text-sm transition-all shadow-xl shadow-emerald-500/10 active:scale-95 cursor-pointer">
               Join Now
            </button>
         </div>
      </div>
    </section>
  );
}
