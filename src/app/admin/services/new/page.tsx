import ServiceForm from '@/components/admin/ServiceForm'
import { createService } from '../actions'

export const metadata = { title: 'Add Service | Admin' }

export default function NewServicePage() {
  return <ServiceForm action={createService} />
}
