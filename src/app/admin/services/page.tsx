import { createClient } from '@/lib/supabase/server'
import ServicesListClient from './ServicesListClient'

export const metadata = { title: 'Manage Services | Admin' }

export default async function ServicesPage() {
  const supabase = await createClient()
  const { data: services, error } = await supabase.from('services').select('*').order('sort_order', { ascending: true })
  if (error) return <div className="rounded-xl bg-red-400/10 p-4 text-red-400">Error loading services: {error.message}</div>
  return <ServicesListClient services={services || []} />
}
