'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateAbout(formData: FormData) {
  const supabase = await createClient()
  const data = {
    name: String(formData.get('name') || ''),
    bio: String(formData.get('bio') || ''),
    hero_title: String(formData.get('hero_title') || 'Full Stack'),
    hero_role: String(formData.get('hero_role') || 'Web Developer'),
    hero_subtitle: String(formData.get('hero_subtitle') || ''),
    hero_availability: String(formData.get('hero_availability') || ''),
    hero_tech_stack: String(formData.get('hero_tech_stack') || '').split(',').map((item) => item.trim()).filter(Boolean),
    about_heading: String(formData.get('about_heading') || ''),
    about_card_one_title: String(formData.get('about_card_one_title') || ''),
    about_card_one_text: String(formData.get('about_card_one_text') || ''),
    about_card_two_title: String(formData.get('about_card_two_title') || ''),
    about_card_two_text: String(formData.get('about_card_two_text') || ''),
    about_card_three_title: String(formData.get('about_card_three_title') || ''),
    about_card_three_text: String(formData.get('about_card_three_text') || ''),
    profile_photo_url: String(formData.get('profile_photo_url') || ''),
    years_exp: String(formData.get('years_exp') || '3+'),
    projects_count: String(formData.get('projects_count') || '50+'),
    clients_count: String(formData.get('clients_count') || '30+'),
  }

  const { data: existing } = await supabase.from('about').select('id').limit(1).maybeSingle()
  const result = existing
    ? await supabase.from('about').update(data).eq('id', existing.id)
    : await supabase.from('about').insert(data)

  if (result.error) throw new Error('Failed to update about information')

  revalidatePath('/admin/about')
  revalidatePath('/')
  revalidatePath('/about')
}
