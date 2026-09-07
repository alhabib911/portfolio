'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createBlog(formData: FormData) {
  const supabase = await createClient()

  // Parse content into array of paragraphs (splitting by double newline)
  const contentText = formData.get('content') as string
  const content = contentText.split('\n\n').filter(p => p.trim() !== '')

  const data = {
    title: formData.get('title') as string,
    slug: formData.get('slug') as string,
    date: formData.get('date') as string || new Date().toISOString().split('T')[0],
    read_time: formData.get('read_time') as string,
    category: formData.get('category') as string,
    image_url: formData.get('image_url') as string,
    description: formData.get('description') as string,
    content,
    is_published: formData.get('is_published') === 'true',
  }

  const { error } = await supabase.from('blogs').insert(data)

  if (error) {
    console.error('Error creating blog:', error)
    throw new Error('Failed to create blog')
  }

  revalidatePath('/admin/blogs')
  revalidatePath('/blogs')
  redirect('/admin/blogs')
}

export async function updateBlog(id: string, formData: FormData) {
  const supabase = await createClient()

  const contentText = formData.get('content') as string
  const content = contentText.split('\n\n').filter(p => p.trim() !== '')

  const data = {
    title: formData.get('title') as string,
    slug: formData.get('slug') as string,
    date: formData.get('date') as string,
    read_time: formData.get('read_time') as string,
    category: formData.get('category') as string,
    image_url: formData.get('image_url') as string,
    description: formData.get('description') as string,
    content,
    is_published: formData.get('is_published') === 'true',
  }

  const { error } = await supabase.from('blogs').update(data).eq('id', id)

  if (error) {
    console.error('Error updating blog:', error)
    throw new Error('Failed to update blog')
  }

  revalidatePath('/admin/blogs')
  revalidatePath('/blogs')
  redirect('/admin/blogs')
}

export async function deleteBlog(id: string) {
  const supabase = await createClient()
  
  const { error } = await supabase.from('blogs').delete().eq('id', id)

  if (error) {
    console.error('Error deleting blog:', error)
    return { success: false, error: 'Failed to delete blog' }
  }

  revalidatePath('/admin/blogs')
  revalidatePath('/blogs')
  return { success: true }
}

