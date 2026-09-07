'use client'

import { useState } from 'react'
import DataTable from '@/components/admin/DataTable'
import { deleteSkill } from './actions'
import { useRouter } from 'next/navigation'

export default function SkillsListClient({ skills }: { skills: any[] }) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    const result = await deleteSkill(id)
    if (result.success) {
      router.refresh()
    } else {
      alert(result.error)
    }
    setIsDeleting(false)
  }

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'category', label: 'Category' },
    { 
      key: 'level', 
      label: 'Level',
      render: (item: any) => (
        <div className="flex items-center gap-2">
          <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 rounded-full" 
              style={{ width: `${item.level}%` }}
            />
          </div>
          <span className="text-xs text-slate-400">{item.level}%</span>
        </div>
      )
    },
    { key: 'sort_order', label: 'Order' },
  ]

  return (
    <div className={isDeleting ? 'opacity-50 pointer-events-none' : ''}>
      <DataTable
        title="Skills & Technologies"
        description="Manage your technical skills"
        data={skills}
        columns={columns}
        createLink="/admin/skills/new"
        editLinkPrefix="/admin/skills"
        onDelete={handleDelete}
      />
    </div>
  )
}
