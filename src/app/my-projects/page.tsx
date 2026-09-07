'use client';

import { useEffect, useMemo, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { createClient } from '@/lib/supabase/client';

const projects = [
  { id: 1, title: 'Chada.site', category: 'SaaS', description: 'Built chada.site, an anonymous civic reporting platform designed to help people document and report incidents of extortion.', tags: ['TypeScript', 'Next.js', 'Redux', 'NestJS'], live: 'https://www.chada.site/' },
  { id: 2, title: 'Sohoz Nikah', category: 'Matrimonial', description: 'A modern matrimonial platform built with Next.js and Node.js for scalable and secure matchmaking system.', tags: ['Next.js', 'TypeScript', 'Redux', 'Tailwind CSS'], live: 'https://sohoznikah.com/' },
  { id: 3, title: 'Dr. Atik Mujahid', category: 'Portfolio', description: 'Professional political and personal portfolio website built using Next.js with strong SEO optimization.', tags: ['Next.js', 'TypeScript', 'Redux', 'Tailwind CSS'], live: 'https://dratikmujahid.com/' },
  { id: 4, title: 'Ad-Doha Institute', category: 'ERP', description: 'A complete educational ERP system for managing admissions, courses, teachers, and student data efficiently.', tags: ['Next.js', 'TypeScript', 'Redux', 'Tailwind CSS'], live: 'https://ad-doha.org/' },
  { id: 5, title: 'CGCS BD', category: 'Educational', description: 'A research and publication platform for managing academic content, events, and publications.', tags: ['Next.js', 'TypeScript', 'Redux', 'Tailwind CSS'], live: 'https://cgcsbd.com/' },
  { id: 6, title: 'JobSea', category: 'SaaS', description: 'A job portal platform connecting employers and job seekers with advanced filtering and role-based access.', tags: ['Next.js', 'TypeScript', 'Redux', 'Tailwind CSS'], live: 'https://jobsea.nl/' },
  { id: 7, title: 'NGIT BD', category: 'Educational', description: 'A technology education and institutional website built for digital visibility and student engagement.', tags: ['Next.js', 'Tailwind', 'SEO', 'CMS'], live: 'https://ngitbd.org/' },
  { id: 8, title: 'Save Humanity Trust', category: 'Educational', description: 'A mission-driven NGO website crafted to communicate welfare, education, and social development programs clearly.', tags: ['WordPress', 'UI/UX', 'SEO', 'Content'], live: 'https://www.savehumanitytrust.org/' },
  { id: 9, title: 'IRDF', category: 'Educational', description: 'An impact-focused organization website built to showcase rural development, health, and education efforts.', tags: ['WordPress', 'Responsive', 'SEO', 'Branding'], live: 'https://irdfbd.com/' },
  { id: 10, title: 'MASFBD', category: 'Educational', description: 'A foundation website delivering a clean digital presence for institutional communication and community engagement.', tags: ['Next.js', 'Accessibility', 'UI', 'Performance'], live: 'https://masfbd.com/' },
  { id: 11, title: 'BazaarHub', category: 'eCommerce', description: 'A modern commerce platform with product, cart, and conversion-focused layouts for better customer experience.', tags: ['Next.js', 'Stripe', 'UI', 'Analytics'], live: 'https://example.com/' },
  { id: 12, title: 'EduPilot', category: 'ERP', description: 'A school management and academic dashboard solution built to streamline operations and reporting.', tags: ['React', 'Next.js', 'Dashboard', 'Admin'], live: 'https://example.com/' },
];

const pageSize = 6;

export default function MyProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [databaseProjects, setDatabaseProjects] = useState<typeof projects>([]);

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from('projects')
      .select('id, title, category, description, tech_stack, live_url')
      .eq('is_published', true)
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setDatabaseProjects((data || []).map((project) => ({
          id: project.id,
          title: project.title,
          category: project.category || 'Other',
          description: project.description || '',
          tags: project.tech_stack || [],
          live: project.live_url || '#',
        })));
      });
  }, []);

  const visibleProjectList = databaseProjects.length ? databaseProjects : projects;

  const totalPages = Math.ceil(visibleProjectList.length / pageSize);

  const visibleProjects = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return visibleProjectList.slice(start, start + pageSize);
  }, [currentPage, visibleProjectList]);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            All Projects
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-700 tracking-tight">
            My Project Collection
          </h1>
          <p className="max-w-2xl text-slate-700 text-base sm:text-lg">
            A curated set of SaaS products, ERP systems, educational platforms, and business websites built for scale and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-[28px] border border-slate-800/80 bg-white/80 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-emerald-500/10"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/40 p-6 flex items-end">
                <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300">
                  {project.category}
                </span>
              </div>

              <div className="space-y-4 p-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-500 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-slate-200 bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 transition-colors hover:text-emerald-500"
                >
                  Visit Project
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <p className="text-sm text-slate-600">
            Page {currentPage} of {totalPages}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            <div className="flex items-center gap-2">
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
            </div>

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
