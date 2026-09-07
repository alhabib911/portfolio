import ProjectForm from '@/components/admin/ProjectForm'
import { createProject } from '../actions'

export const metadata = {
  title: 'New Project | Admin',
}

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Create New Project</h1>
        <p className="text-slate-400 text-sm mt-1">Add a new project to your portfolio</p>
      </div>
      <ProjectForm action={createProject} />
    </div>
  )
}
