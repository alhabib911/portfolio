'use client'

import { useState } from 'react'

interface SkillFormProps {
  initialData?: any
  action: (formData: FormData) => Promise<void>
  isEditing?: boolean
}

export default function SkillForm({ initialData, action, isEditing }: SkillFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    
    try {
      await action(formData)
    } catch (error) {
      console.error(error)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
      <h2 className="text-xl font-bold text-slate-100 mb-6">
        {isEditing ? 'Edit Skill' : 'Add New Skill'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Skill Name</label>
            <input
              name="name"
              defaultValue={initialData?.name}
              required
              className="admin-input"
              placeholder="e.g. React"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Category</label>
            <input
              name="category"
              defaultValue={initialData?.category}
              required
              className="admin-input"
              placeholder="e.g. Frontend"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Proficiency Level (%)</label>
            <input
              name="level"
              type="number"
              min="0"
              max="100"
              defaultValue={initialData?.level || 80}
              required
              className="admin-input"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Sort Order</label>
            <input
              name="sort_order"
              type="number"
              defaultValue={initialData?.sort_order || 0}
              className="admin-input"
            />
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-slate-300">Icon Name <span className="text-slate-500 text-xs font-normal">(Lucide React icon name)</span></label>
            <input
              name="icon"
              defaultValue={initialData?.icon}
              className="admin-input"
              placeholder="e.g. Code2, Database"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20"
          >
            {isSubmitting ? 'Saving...' : (isEditing ? 'Update Skill' : 'Add Skill')}
          </button>
        </div>
      </form>
    </div>
  )
}
