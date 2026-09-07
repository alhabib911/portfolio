'use client'

import { useState } from 'react'

type ServiceData = { title?: string; description?: string; icon?: string; features?: string[]; sort_order?: number }

export default function ServiceForm({ initialData, action, isEditing }: { initialData?: ServiceData; action: (formData: FormData) => Promise<void>; isEditing?: boolean }) {
  const [saving, setSaving] = useState(false)
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSaving(true)
    try { await action(new FormData(event.currentTarget)) } catch { setSaving(false) }
  }
  return <div className="max-w-3xl space-y-6"><div><h1 className="text-2xl font-bold text-slate-100">{isEditing ? 'Edit Service' : 'Add Service'}</h1><p className="mt-1 text-sm text-slate-400">Manage a service card shown on the portfolio.</p></div><form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8"><div className="grid grid-cols-1 gap-5 md:grid-cols-2"><label className="space-y-2 text-sm font-medium text-slate-300">Title<input name="title" required defaultValue={initialData?.title} className="admin-input" /></label><label className="space-y-2 text-sm font-medium text-slate-300">Icon name<input name="icon" defaultValue={initialData?.icon} placeholder="Layers" className="admin-input" /></label><label className="space-y-2 text-sm font-medium text-slate-300">Sort order<input name="sort_order" type="number" defaultValue={initialData?.sort_order || 0} className="admin-input" /></label><label className="space-y-2 text-sm font-medium text-slate-300 md:col-span-2">Description<textarea name="description" required defaultValue={initialData?.description} rows={4} className="admin-input" /></label><label className="space-y-2 text-sm font-medium text-slate-300 md:col-span-2">Features <span className="text-xs text-slate-500">comma separated</span><input name="features" defaultValue={initialData?.features?.join(', ')} className="admin-input" /></label></div><div className="flex justify-end border-t border-slate-800 pt-5"><button disabled={saving} className="rounded-xl bg-emerald-500 px-6 py-2.5 font-bold text-slate-950 disabled:opacity-50">{saving ? 'Saving...' : isEditing ? 'Update Service' : 'Add Service'}</button></div></form></div>
}
