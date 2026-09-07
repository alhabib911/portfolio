'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createSkill(formData: FormData) {
  const supabase = await createClient()

  const data = {
    name: formData.get('name') as string,
    category: formData.get('category') as string,
    level: parseInt(formData.get('level') as string, 10),
    icon: formData.get('icon') as string,
    sort_order: parseInt(formData.get('sort_order') as string, 10) || 0,
  }

  const { error } = await supabase.from('skills').insert(data)

  if (error) {
    console.error('Error creating skill:', error)
    throw new Error('Failed to create skill')
  }

  revalidatePath('/admin/skills')
  revalidatePath('/skills-tech')
  revalidatePath('/')
  redirect('/admin/skills')
}

export async function updateSkill(id: string, formData: FormData) {
  const supabase = await createClient()

  const data = {
    name: formData.get('name') as string,
    category: formData.get('category') as string,
    level: parseInt(formData.get('level') as string, 10),
    icon: formData.get('icon') as string,
    sort_order: parseInt(formData.get('sort_order') as string, 10) || 0,
  }

  const { error } = await supabase.from('skills').update(data).eq('id', id)

  if (error) {
    console.error('Error updating skill:', error)
    throw new Error('Failed to update skill')
  }

  revalidatePath('/admin/skills')
  revalidatePath('/skills-tech')
  revalidatePath('/')
  redirect('/admin/skills')
}

export async function deleteSkill(id: string) {
  const supabase = await createClient()
  
  const { error } = await supabase.from('skills').delete().eq('id', id)

  if (error) {
    console.error('Error deleting skill:', error)
    return { success: false, error: 'Failed to delete skill' }
  }

  revalidatePath('/admin/skills')
  revalidatePath('/skills-tech')
  revalidatePath('/')
  return { success: true }
}
