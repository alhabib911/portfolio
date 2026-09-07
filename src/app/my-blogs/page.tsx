'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import DashboardLayout from '@/components/DashboardLayout';
import { createClient } from '@/lib/supabase/client';

type Blog = {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  description: string;
};

const pageSize = 6;

export default function MyBlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from('blogs')
      .select('id, title, date, read_time, category, image_url, description')
      .eq('is_published', true)
      .order('date', { ascending: false })
      .then(({ data }) => {
        setBlogs((data || []).map((blog) => ({
          id: blog.id,
          title: blog.title,
          date: blog.date,
          readTime: blog.read_time,
          category: blog.category,
          image: blog.image_url || '/images/profile.jpg.png',
          description: blog.description || '',
        })));
      });
  }, []);

  const totalPages = Math.ceil(blogs.length / pageSize);
  const visibleBlogs = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return blogs.slice(start, start + pageSize);
  }, [blogs, currentPage]);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            All Articles
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-700 tracking-tight">
            My Blog Collection
          </h1>
          <p className="max-w-2xl text-slate-700 text-base sm:text-lg">
            Insights, tutorials, and product thinking from software engineering, performance, and AI work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {visibleBlogs.map((blog: Blog) => (
            <article
              key={blog.id}
              className="group bg-gray-100 border border-gray-200 rounded-[32px] overflow-hidden hover:border-gray-200 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1322] via-transparent to-transparent z-10 opacity-60"></div>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute top-4 left-4 z-20">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-700 group-hover:text-emerald-400 transition-colors leading-tight">
                  {blog.title}
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {blog.description}
                </p>

                <Link
                  href={`/blog/${blog.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-gray-700 group-hover:text-emerald-400 transition-colors uppercase tracking-widest"
                >
                  <span>Read Article</span>
                  <span className="rounded-lg bg-slate-800 px-2 py-1 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <p className="text-sm text-slate-600">Page {currentPage} of {totalPages}</p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`h-9 w-9 rounded-full text-sm font-bold transition-colors ${
                  currentPage === page
                    ? 'bg-emerald-500 text-slate-950'
                    : 'border border-slate-700 bg-slate-900 text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
