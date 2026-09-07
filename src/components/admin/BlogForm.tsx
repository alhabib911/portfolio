'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ImageUploader from '@/components/admin/ImageUploader'

interface BlogFormProps {
  initialData?: any
  action: (formData: FormData) => Promise<void>
  isEditing?: boolean
}

export default function BlogForm({ initialData, action, isEditing }: BlogFormProps) {
  const [imageUrl, setImageUrl] = useState(initialData?.image_url || '')
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Format array to string with double newlines for text area
  const initialContent = initialData?.content ? initialData.content.join('\n\n') : ''

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
        {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
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
              placeholder="Post title"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Slug</label>
            <input
              name="slug"
              defaultValue={initialData?.slug}
              required
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="post-url-slug"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Category</label>
            <input
              name="category"
              defaultValue={initialData?.category}
              required
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="e.g. AI, WEB DEVELOPMENT"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Read Time</label>
            <input
              name="read_time"
              defaultValue={initialData?.read_time || '2 min read'}
              required
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-slate-300">Date</label>
            <input
              type="date"
              name="date"
              defaultValue={initialData?.date || new Date().toISOString().split('T')[0]}
              required
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Thumbnail Image</label>
          <ImageUploader
            bucket="blog-images"
            value={imageUrl}
            onChange={setImageUrl}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Short Description</label>
          <textarea
            name="description"
            defaultValue={initialData?.description}
            required
            rows={2}
            className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
            placeholder="Brief summary for card display"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">
            Content Paragraphs <span className="text-slate-500 text-xs font-normal">(Separate paragraphs with double enter / blank line)</span>
          </label>
          <textarea
            name="content"
            defaultValue={initialContent}
            required
            rows={10}
            className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            placeholder="Paragraph 1...&#10;&#10;Paragraph 2..."
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
            <span className="ml-3 text-sm font-medium text-slate-300">Publish Post</span>
          </label>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20"
          >
            {isSubmitting ? 'Saving...' : (isEditing ? 'Update Post' : 'Create Post')}
          </button>
        </div>
      </form>
    </div>
  )
}

