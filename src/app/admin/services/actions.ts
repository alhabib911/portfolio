'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

function parseService(formData: FormData) {
  return {
    title: String(formData.get('title') || ''),
    description: String(formData.get('description') || ''),
    icon: String(formData.get('icon') || ''),
    features: String(formData.get('features') || '').split(',').map((item) => item.trim()).filter(Boolean),
    sort_order: Number(formData.get('sort_order') || 0),
  }
}

export async function createService(formData: FormData) {
  const supabase = await createClient()
  const { error } = await supabase.from('services').insert(parseService(formData))
  if (error) throw new Error('Failed to create service')
  revalidatePath('/admin/services')
  revalidatePath('/services')
  revalidatePath('/')
  redirect('/admin/services')
}

export async function updateService(id: string, formData: FormData) {
  const supabase = await createClient()
  const { error } = await supabase.from('services').update(parseService(formData)).eq('id', id)
  if (error) throw new Error('Failed to update service')
  revalidatePath('/admin/services')
  revalidatePath('/services')
  revalidatePath('/')
  redirect('/admin/services')
}

export async function deleteService(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('services').delete().eq('id', id)
  if (error) return { success: false, error: 'Failed to delete service' }
  revalidatePath('/admin/services')
  revalidatePath('/services')
  revalidatePath('/')
  return { success: true }
}
