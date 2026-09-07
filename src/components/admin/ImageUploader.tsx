'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Image from 'next/image'
import { Upload, X, Loader2 } from 'lucide-react'

interface ImageUploaderProps {
  bucket: string
  folder?: string
  value?: string
  onChange: (url: string) => void
}

export default function ImageUploader({ bucket, folder = '', value, onChange }: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const supabase = createClient()

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    setError(null)

    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`
      const filePath = folder ? `${folder}/${fileName}` : fileName

      const { error: uploadError, data } = await supabase.storage
        .from(bucket)
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath)

      onChange(publicUrl)
    } catch (err: any) {
      setError(err.message || 'Error uploading image')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="space-y-4">
      {value ? (
        <div className="relative w-full max-w-sm aspect-video rounded-xl overflow-hidden border border-slate-700 bg-slate-800">
          <Image src={value} alt="Uploaded" fill className="object-cover" />
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute top-2 right-2 p-1.5 bg-slate-900/80 hover:bg-red-500/80 text-white rounded-lg transition-colors backdrop-blur-sm"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full max-w-sm aspect-video rounded-xl border-2 border-dashed border-slate-700 hover:border-emerald-500 bg-slate-800/50 hover:bg-slate-800 transition-colors cursor-pointer relative overflow-hidden">
          {isUploading ? (
            <div className="flex flex-col items-center gap-2 text-emerald-400">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span className="text-sm font-medium">Uploading...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-slate-400 group">
              <Upload className="w-6 h-6 group-hover:text-emerald-400 transition-colors" />
              <span className="text-sm font-medium group-hover:text-emerald-400 transition-colors">Click to upload image</span>
            </div>
          )}
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleUpload}
            disabled={isUploading}
          />
        </label>
      )}
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  )
}

