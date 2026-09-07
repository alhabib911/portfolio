import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import SkillForm from '@/components/admin/SkillForm'
import { updateSkill } from '../actions'

export const metadata = { title: 'Edit Skill | Admin' }

export default async function EditSkillPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: skill } = await supabase.from('skills').select('*').eq('id', id).single()
  if (!skill) notFound()
  return <SkillForm initialData={skill} action={updateSkill.bind(null, id)} isEditing />
}
