'use client'

import { useState } from 'react'
import DataTable from '@/components/admin/DataTable'
import { deleteProject } from './actions'
import { useRouter } from 'next/navigation'

export default function ProjectsListClient({ projects }: { projects: any[] }) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    const result = await deleteProject(id)
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
        title="Projects"
        description="Manage your portfolio projects"
        data={projects}
        columns={columns}
        createLink="/admin/projects/new"
        editLinkPrefix="/admin/projects"
        onDelete={handleDelete}
      />
    </div>
  )
}
