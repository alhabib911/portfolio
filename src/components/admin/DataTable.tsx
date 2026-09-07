'use client'

import React from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2 } from 'lucide-react'

interface Column<T> {
  key: string
  label: string
  render?: (item: T) => React.ReactNode
}

interface DataTableProps<T> {
  title: string
  description?: string
  data: T[]
  columns: Column<T>[]
  createLink?: string
  onDelete?: (id: string) => void
  editLinkPrefix?: string
}

export default function DataTable<T extends { id: string }>({
  title,
  description,
  data,
  columns,
  createLink,
  onDelete,
  editLinkPrefix,
}: DataTableProps<T>) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-100">{title}</h2>
          {description && <p className="text-sm text-slate-400 mt-1">{description}</p>}
        </div>
        {createLink && (
          <Link
            href={createLink}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-colors text-sm shadow-lg shadow-emerald-500/20"
          >
            <Plus className="w-4 h-4" />
            Add New
          </Link>
        )}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-800/50 border-b border-slate-800 text-slate-400 uppercase tracking-wider text-xs font-semibold">
              <tr>
                {columns.map((col) => (
                  <th key={col.key} className="px-6 py-4">
                    {col.label}
                  </th>
                ))}
                {(editLinkPrefix || onDelete) && (
                  <th className="px-6 py-4 text-right">Actions</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {data.length === 0 ? (
                <tr>
                  <td colSpan={columns.length + 1} className="px-6 py-8 text-center text-slate-500">
                    No records found.
                  </td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/50 transition-colors">
                    {columns.map((col) => (
                      <td key={col.key} className="px-6 py-4">
                        {col.render ? col.render(item) : (item as any)[col.key]}
                      </td>
                    ))}
                    {(editLinkPrefix || onDelete) && (
                      <td className="px-6 py-4 text-right space-x-3">
                        {editLinkPrefix && (
                          <Link
                            href={`${editLinkPrefix}/${item.id}`}
                            className="inline-flex p-1.5 text-slate-400 hover:text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>
                        )}
                        {onDelete && (
                          <button
                            onClick={() => {
                              if (confirm('Are you sure you want to delete this item?')) {
                                onDelete(item.id)
                              }
                            }}
                            className="inline-flex p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

