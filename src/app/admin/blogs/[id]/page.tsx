import { createClient } from '@/lib/supabase/server'
import BlogForm from '@/components/admin/BlogForm'
import { updateBlog } from '../actions'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Edit Blog Post | Admin',
}

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !blog) {
    notFound()
  }

  // Bind the id to the server action
  const updateAction = updateBlog.bind(null, id)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Edit Blog</h1>
        <p className="text-slate-400 text-sm mt-1">Update existing article</p>
      </div>
      <BlogForm initialData={blog} action={updateAction} isEditing />
    </div>
  )
}

