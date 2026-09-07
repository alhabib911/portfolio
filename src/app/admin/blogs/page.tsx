import { createClient } from '@/lib/supabase/server'
import BlogsListClient from './BlogsListClient'

export const metadata = {
  title: 'Manage Blogs | Admin',
}

export default async function BlogsPage() {
  const supabase = await createClient()
  
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return <div className="p-4 text-red-400 bg-red-400/10 rounded-xl">Error loading blogs: {error.message}</div>
  }

  return <BlogsListClient blogs={blogs || []} />
}

