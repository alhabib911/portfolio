"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSkillCategory } from "@/redux/slices/portfolioSlice";
import {
  Code2,
  Database,
  Globe,
  Monitor,
  Server,
  Wrench,
  BrainCircuit,
  Terminal,
  Kanban,
  Layout,
  Cpu,
  Fingerprint,
  CheckCircle,
} from "lucide-react";

export default function SkillsSection() {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector((state) => state.portfolio.skillCategory);

  const categories = [
    { name: "Frontend", icon: Monitor },
    { name: "Backend", icon: Server },
    { name: "Database", icon: Database },
    { name: "Language", icon: Code2 },
    { name: "Tools", icon: Wrench },
    { name: "AI/ML", icon: BrainCircuit },
    { name: "DevOps", icon: Terminal },
  ];

  const skillData: Record<string, { name: string; proficiency: number }[]> = {
    Frontend: [
      { name: "React", proficiency: 95 },
      { name: "Next.js", proficiency: 98 },
      { name: "Tailwind CSS", proficiency: 95 },
      { name: "Redux / Zustand", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "Shadcn UI", proficiency: 95 },
      { name: "NextUI / Ant Design", proficiency: 85 },
    ],
    Backend: [
      { name: "Node.js", proficiency: 92 },
      { name: "Express", proficiency: 95 },
      { name: "NestJS", proficiency: 80 },
      { name: "Prisma / Mongoose", proficiency: 90 },
      { name: "REST API", proficiency: 98 },
      { name: "GraphQL", proficiency: 75 },
    ],
    Database: [
      { name: "MongoDB", proficiency: 95 },
      { name: "PostgreSQL", proficiency: 88 },
      { name: "MySQL", proficiency: 85 },
      { name: "Firebase", proficiency: 80 },
      { name: "Redis", proficiency: 70 },
    ],
    Language: [
      { name: "JavaScript (ES6+)", proficiency: 95 },
      { name: "TypeScript", proficiency: 90 },
      { name: "Python", proficiency: 75 },
      { name: "SQL", proficiency: 85 },
    ],
    Tools: [
      { name: "Git & GitHub", proficiency: 95 },
      { name: "VS Code", proficiency: 98 },
      { name: "Postman", proficiency: 92 },
      { name: "Docker", proficiency: 75 },
      { name: "Figma (UI/UX)", proficiency: 80 },
    ],
    "AI/ML": [
      { name: "OpenAI API", proficiency: 90 },
      { name: "LangChain", proficiency: 85 },
      { name: "Custom GPTs", proficiency: 92 },
      { name: "Prompt Engineering", proficiency: 95 },
    ],
    DevOps: [
      { name: "Vercel", proficiency: 98 },
      { name: "Netlify", proficiency: 90 },
      { name: "DigitalOcean", proficiency: 75 },
      { name: "CI/CD", proficiency: 80 },
    ],
  };

  const currentSkills = skillData[selectedCategory] || skillData["Frontend"];

  return (
    <section id="skills" className="py-16 border-b border-slate-800/80">
      <div className="space-y-3 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          Technical Expertise
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-700 tracking-tight">
          Technical Expertise
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Modern full-stack development skills across frontend, backend, databases, DevOps, and scalable system design.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Category List */}
        <div className="lg:col-span-4 flex flex-col gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => dispatch(setSkillCategory(cat.name))}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl shadow transition-all duration-200 text-left group ${
                  isActive
                    ? " text-emerald-400 shadow-lg shadow-emerald-500/5 cursor-pointer"
                    : "bg-gray-100  text-gray-700 hover:border-slate-600 hover:text-slate-200 cursor-pointer shadow-emerald-300"
                }`}
              >
                <div
                  className={`p-2 rounded-xl transition-colors ${
                    isActive ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-slate-400 group-hover:text-slate-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="font-bold text-sm sm:text-base">{cat.name}</span>
                  <div className="flex items-center gap-1 mt-0.5 opacity-60">
                    <span className="text-[10px] font-mono">{skillData[cat.name].length} Skills</span>
                  </div>
                </div>
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>}
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="lg:col-span-8 bg-[#1D293D] border border-slate-800/80 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-800/60">
            <Cpu className="w-5 h-5 text-emerald-400" />
            <h3 className="text-xl font-bold text-slate-100">
              {selectedCategory} Proficiency
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {currentSkills.map((skill) => (
              <div key={skill.name} className="space-y-3 group">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-200 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-500/80">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-800/50 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
              <Fingerprint className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-100 mb-1">Continuous Learning</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                I regularly update my skill set with emerging technologies and best practices to ensure I deliver the most modern and efficient solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
