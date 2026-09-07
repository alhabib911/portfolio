import Link from "next/link";
import { notFound } from "next/navigation";
import DashboardLayout from "@/components/DashboardLayout";
import { blogPosts } from "@/data/blogs";

export async function generateStaticParams() {
  return blogPosts.map((blog) => ({ id: String(blog.id) }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = blogPosts.find((item) => String(item.id) === id);

  if (!blog) {
    notFound();
  }

  return (
    <DashboardLayout>
      <article className="mx-auto max-w-4xl space-y-8 pb-16">
        <div className="space-y-4">
          <Link href="/my-blogs" className="inline-flex text-sm font-semibold text-emerald-400 hover:text-emerald-300">
            ← Back to Articles
          </Link>
          <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400">
            {blog.category}
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
            <span>{blog.date}</span>
            <span>{blog.readTime}</span>
          </div>
        </div>

        <img src={blog.image} alt={blog.title} className="h-[320px] w-full rounded-[28px] object-cover shadow-xl shadow-slate-200" />

        <div className="space-y-5 text-base leading-8 text-slate-700">
          {blog.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </DashboardLayout>
  );
}
