import { createClient } from '@/lib/supabase/server'
import AboutForm from '@/components/admin/AboutForm'
import { updateAbout } from './actions'

export const metadata = { title: 'Manage About | Admin' }

export default async function AboutPage() {
  const supabase = await createClient()
  const { data: about } = await supabase.from('about').select('*').limit(1).maybeSingle()
  return <AboutForm initialData={about || undefined} action={updateAbout} />
}
