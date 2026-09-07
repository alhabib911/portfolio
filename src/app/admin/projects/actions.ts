'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createProject(formData: FormData) {
  const supabase = await createClient()

  // Parse tech stack into an array (splitting by comma)
  const techStackText = formData.get('tech_stack') as string
  const tech_stack = techStackText.split(',').map(t => t.trim()).filter(t => t !== '')

  const data = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    tech_stack,
    live_url: formData.get('live_url') as string,
    github_url: formData.get('github_url') as string,
    image_url: formData.get('image_url') as string,
    category: formData.get('category') as string,
    is_published: formData.get('is_published') === 'true',
  }

  const { error } = await supabase.from('projects').insert(data)

  if (error) {
    console.error('Error creating project:', error)
    throw new Error('Failed to create project')
  }

  revalidatePath('/admin/projects')
  revalidatePath('/my-projects')
  revalidatePath('/') // if shown on home
  redirect('/admin/projects')
}

export async function updateProject(id: string, formData: FormData) {
  const supabase = await createClient()

  const techStackText = formData.get('tech_stack') as string
  const tech_stack = techStackText.split(',').map(t => t.trim()).filter(t => t !== '')

  const data = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    tech_stack,
    live_url: formData.get('live_url') as string,
    github_url: formData.get('github_url') as string,
    image_url: formData.get('image_url') as string,
    category: formData.get('category') as string,
    is_published: formData.get('is_published') === 'true',
  }

  const { error } = await supabase.from('projects').update(data).eq('id', id)

  if (error) {
    console.error('Error updating project:', error)
    throw new Error('Failed to update project')
  }

  revalidatePath('/admin/projects')
  revalidatePath('/my-projects')
  revalidatePath('/')
  redirect('/admin/projects')
}

export async function deleteProject(id: string) {
  const supabase = await createClient()
  
  const { error } = await supabase.from('projects').delete().eq('id', id)

  if (error) {
    console.error('Error deleting project:', error)
    return { success: false, error: 'Failed to delete project' }
  }

  revalidatePath('/admin/projects')
  revalidatePath('/my-projects')
  revalidatePath('/')
  return { success: true }
}
