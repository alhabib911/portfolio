import { createClient } from '@/lib/supabase/server'
import SkillsListClient from './SkillsListClient'

export const metadata = {
  title: 'Manage Skills | Admin',
}

export default async function SkillsPage() {
  const supabase = await createClient()
  
  const { data: skills, error } = await supabase
    .from('skills')
    .select('*')
    .order('category', { ascending: true })
    .order('sort_order', { ascending: true })

  if (error) {
    return <div className="p-4 text-red-400 bg-red-400/10 rounded-xl">Error loading skills: {error.message}</div>
  }

  return <SkillsListClient skills={skills || []} />
}
