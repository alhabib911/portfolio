import { createClient } from '@/lib/supabase/server'
import ProjectsListClient from './ProjectsListClient'

export const metadata = {
  title: 'Manage Projects | Admin',
}

export default async function ProjectsPage() {
  const supabase = await createClient()
  
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return <div className="p-4 text-red-400 bg-red-400/10 rounded-xl">Error loading projects: {error.message}</div>
  }

  return <ProjectsListClient projects={projects || []} />
}
