import type { User } from '@supabase/supabase-js'
import { LayoutDashboard } from 'lucide-react'

export default function AdminHeader({ user }: { user: User }) {
  return (
    <header className="sticky top-0 z-30 h-16 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <LayoutDashboard className="w-5 h-5 text-emerald-400" />
        <span className="text-sm font-semibold text-slate-300">Admin Dashboard</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-xs text-slate-400">Logged in as</p>
          <p className="text-sm font-medium text-slate-200 truncate max-w-[200px]">{user.email}</p>
        </div>
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center font-bold text-slate-950 text-sm">
          A
        </div>
      </div>
    </header>
  )
}

