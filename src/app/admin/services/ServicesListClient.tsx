'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import DataTable from '@/components/admin/DataTable'
import { deleteService } from './actions'

type Service = { id: string; title: string; description: string | null; sort_order: number }

export default function ServicesListClient({ services }: { services: Service[] }) {
  const router = useRouter(); const [busy, setBusy] = useState(false)
  async function handleDelete(id: string) { setBusy(true); const result = await deleteService(id); if (!result.success) alert(result.error); else router.refresh(); setBusy(false) }
  return <div className={busy ? 'pointer-events-none opacity-50' : ''}><DataTable title="Services" description="Manage the six service cards shown on the portfolio." data={services} columns={[{ key: 'title', label: 'Title' }, { key: 'description', label: 'Description' }, { key: 'sort_order', label: 'Order' }]} createLink="/admin/services/new" editLinkPrefix="/admin/services" onDelete={handleDelete} /></div>
}
