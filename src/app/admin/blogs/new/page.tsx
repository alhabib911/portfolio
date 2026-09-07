import BlogForm from '@/components/admin/BlogForm'
import { createBlog } from '../actions'

export const metadata = {
  title: 'New Blog Post | Admin',
}

export default function NewBlogPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Create New Blog</h1>
        <p className="text-slate-400 text-sm mt-1">Add a new article to your portfolio</p>
      </div>
      <BlogForm action={createBlog} />
    </div>
  )
}

