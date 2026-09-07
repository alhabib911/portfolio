'use client'

import { useState } from 'react'
import ImageUploader from '@/components/admin/ImageUploader'

interface ProjectFormProps {
  initialData?: any
  action: (formData: FormData) => Promise<void>
  isEditing?: boolean
}

export default function ProjectForm({ initialData, action, isEditing }: ProjectFormProps) {
  const [imageUrl, setImageUrl] = useState(initialData?.image_url || '')
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Format array to string
  const initialTechStack = initialData?.tech_stack ? initialData.tech_stack.join(', ') : ''

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    formData.append('image_url', imageUrl)
    
    // Checkbox hack
    formData.set('is_published', formData.get('is_published') ? 'true' : 'false')
    
    try {
      await action(formData)
    } catch (error) {
      console.error(error)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
      <h2 className="text-xl font-bold text-slate-100 mb-6">
        {isEditing ? 'Edit Project' : 'Create New Project'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Title</label>
            <input
              name="title"
              defaultValue={initialData?.title}
              required
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="Project Name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Category</label>
            <input
              name="category"
              defaultValue={initialData?.category}
              required
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="e.g. SaaS, eCommerce"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Live URL</label>
            <input
              name="live_url"
              type="url"
              defaultValue={initialData?.live_url}
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="https://"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">GitHub URL</label>
            <input
              name="github_url"
              type="url"
              defaultValue={initialData?.github_url}
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="https://github.com/..."
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Thumbnail Image</label>
          <ImageUploader
            bucket="project-images"
            value={imageUrl}
            onChange={setImageUrl}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Tech Stack <span className="text-slate-500 text-xs font-normal">(Comma separated)</span></label>
          <input
            name="tech_stack"
            defaultValue={initialTechStack}
            className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            placeholder="Next.js, TypeScript, Tailwind CSS"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Description</label>
          <textarea
            name="description"
            defaultValue={initialData?.description}
            required
            rows={4}
            className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            placeholder="Describe your project..."
          />
        </div>

        <div className="flex items-center gap-3 py-2">
          <label className="relative flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              name="is_published" 
              defaultChecked={initialData?.is_published}
              className="sr-only peer" 
            />
            <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
            <span className="ml-3 text-sm font-medium text-slate-300">Publish Project</span>
          </label>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20"
          >
            {isSubmitting ? 'Saving...' : (isEditing ? 'Update Project' : 'Create Project')}
          </button>
        </div>
      </form>
    </div>
  )
}
