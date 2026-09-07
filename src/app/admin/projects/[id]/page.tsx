import { createClient } from '@/lib/supabase/server'
import ProjectForm from '@/components/admin/ProjectForm'
import { updateProject } from '../actions'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Edit Project | Admin',
}

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !project) {
    notFound()
  }

  // Bind the id to the server action
  const updateAction = updateProject.bind(null, id)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Edit Project</h1>
        <p className="text-slate-400 text-sm mt-1">Update existing project</p>
      </div>
      <ProjectForm initialData={project} action={updateAction} isEditing />
    </div>
  )
}
