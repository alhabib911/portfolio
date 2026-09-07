import SkillForm from '@/components/admin/SkillForm'
import { createSkill } from '../actions'

export const metadata = { title: 'Add Skill | Admin' }

export default function NewSkillPage() { return <SkillForm action={createSkill} /> }
