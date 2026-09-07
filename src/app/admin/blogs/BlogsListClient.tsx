'use client'

import { useState } from 'react'
import DataTable from '@/components/admin/DataTable'
import { deleteBlog } from './actions'
import { useRouter } from 'next/navigation'

export default function BlogsListClient({ blogs }: { blogs: any[] }) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    const result = await deleteBlog(id)
    if (result.success) {
      router.refresh()
    } else {
      alert(result.error)
    }
    setIsDeleting(false)
  }

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'category', label: 'Category' },
    { key: 'date', label: 'Date' },
    { 
      key: 'is_published', 
      label: 'Status',
      render: (item: any) => (
        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
          item.is_published ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800 text-slate-400 border border-slate-700'
        }`}>
          {item.is_published ? 'Published' : 'Draft'}
        </span>
      )
    },
  ]

  return (
    <div className={isDeleting ? 'opacity-50 pointer-events-none' : ''}>
      <DataTable
        title="Blog Posts"
        description="Manage your blog articles"
        data={blogs}
        columns={columns}
        createLink="/admin/blogs/new"
        editLinkPrefix="/admin/blogs"
        onDelete={handleDelete}
      />
    </div>
  )
}

