'use client'

import { useState } from 'react'
import ImageUploader from './ImageUploader'

type AboutData = Record<string, string | string[] | null>

export default function AboutForm({ initialData, action }: { initialData?: AboutData; action: (formData: FormData) => Promise<void> }) {
  const [saving, setSaving] = useState(false)
  const defaults: Record<string, string> = {
    hero_title: 'Full Stack',
    hero_role: 'Web Developer',
    hero_subtitle: 'Building Scalable SaaS, ERP & eCommerce Applications',
    hero_availability: 'Available for Freelance & Remote Opportunities',
    hero_tech_stack: 'React, Next.js, Redux, Node.js, Express, MongoDB, PostgreSQL, AI Integration',
    about_heading: 'I design and build products that balance performance and user experience.',
    about_card_one_title: 'Product-first thinking',
    about_card_one_text: 'I translate business needs into clear, usable interfaces and workflows that are easy to extend.',
    about_card_two_title: 'Clean engineering',
    about_card_two_text: 'I build structured, maintainable code with reusable patterns and scalable application architecture.',
    about_card_three_title: 'Business impact',
    about_card_three_text: 'The aim is always practical value: speed, clarity, conversion, and long-term maintainability.',
    name: 'Abdullah Al Habib',
    profile_photo_url: '/images/profile.jpg.png',
    years_exp: '3+',
    projects_count: '50+',
    clients_count: '30+',
    bio: 'I build modern SaaS, ERP, eCommerce, and custom web solutions using React, Next.js, Node.js, Express, Prisma, PostgreSQL, and MongoDB, with a focus on clean UI, performance, and scalable architecture.',
  }
  const fields = [
    ['name', 'Name'], ['years_exp', 'Years experience'],
    ['projects_count', 'Projects count'], ['clients_count', 'Clients count'],
  ]
  const [profileImage, setProfileImage] = useState(valueFor('profile_photo_url'))

  function valueFor(name: string) {
    const current = initialData?.[name]
    return Array.isArray(current) ? current.join(', ') : current ?? defaults[name] ?? ''
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSaving(true)
    try { await action(new FormData(event.currentTarget)) } catch { setSaving(false) }
  }

  return (
    <div className="max-w-4xl space-y-6">
      <div><h1 className="text-2xl font-bold text-slate-100">Hero & About Editor</h1><p className="mt-1 text-sm text-slate-400">Edit every visible point from the homepage Hero and About sections.</p></div>
      <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm md:p-8">
        <section className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <h2 className="mb-4 text-lg font-bold text-emerald-400">Hero Content</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              ['hero_title', 'Main title'], ['hero_role', 'Role / highlighted title'],
              ['hero_subtitle', 'Subtitle'], ['hero_availability', 'Availability text'],
            ].map(([name, label]) => <label key={name} className="space-y-2 text-sm font-medium text-slate-300">{label}<input name={name} defaultValue={valueFor(name)} className="admin-input" /></label>)}
            <label className="space-y-2 text-sm font-medium text-slate-300 md:col-span-2">Tech stack <span className="text-xs text-slate-500">comma separated</span><input name="hero_tech_stack" defaultValue={valueFor('hero_tech_stack')} className="admin-input" /></label>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <h2 className="mb-4 text-lg font-bold text-emerald-400">Profile & Stats</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {fields.map(([name, label]) => <label key={name} className="space-y-2 text-sm font-medium text-slate-300">{label}<input name={name} defaultValue={valueFor(name)} className="admin-input" /></label>)}
            <div className="space-y-2 text-sm font-medium text-slate-300 md:col-span-2">
              <span>Hero profile image</span>
              <ImageUploader bucket="profile-images" folder="hero" value={profileImage} onChange={setProfileImage} />
              <input type="hidden" name="profile_photo_url" value={profileImage} readOnly />
            </div>
            <label className="space-y-2 text-sm font-medium text-slate-300 md:col-span-2">Bio<textarea name="bio" defaultValue={valueFor('bio')} rows={5} className="admin-input" /></label>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <h2 className="mb-4 text-lg font-bold text-emerald-400">About Content</h2>
          <div className="space-y-5">
            <label className="space-y-2 text-sm font-medium text-slate-300">About heading<input name="about_heading" defaultValue={valueFor('about_heading')} className="admin-input" /></label>
            {[1, 2, 3].map((number) => <div key={number} className="grid grid-cols-1 gap-4 rounded-xl border border-slate-800 p-4 md:grid-cols-2"><label className="space-y-2 text-sm font-medium text-slate-300">Card {number} title<input name={`about_card_${number === 1 ? 'one' : number === 2 ? 'two' : 'three'}_title`} defaultValue={valueFor(`about_card_${number === 1 ? 'one' : number === 2 ? 'two' : 'three'}_title`)} className="admin-input" /></label><label className="space-y-2 text-sm font-medium text-slate-300">Card {number} text<textarea name={`about_card_${number === 1 ? 'one' : number === 2 ? 'two' : 'three'}_text`} defaultValue={valueFor(`about_card_${number === 1 ? 'one' : number === 2 ? 'two' : 'three'}_text`)} rows={3} className="admin-input" /></label></div>)}
          </div>
        </section>
        <div className="flex justify-end border-t border-slate-800 pt-5"><button disabled={saving} className="rounded-xl bg-emerald-500 px-6 py-2.5 font-bold text-slate-950 disabled:opacity-50">{saving ? 'Updating...' : 'Update About'}</button></div>
      </form>
    </div>
  )
}
