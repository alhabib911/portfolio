import DashboardLayout from "@/components/DashboardLayout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BlogsSection from "@/components/sections/BlogsSection";
import ContactSection from "@/components/sections/ContactSection";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const [{ data: projects }, { data: blogs }, { data: about }, { data: services }, { data: skills }] = await Promise.all([
    supabase.from("projects").select("id, title, category, image_url, description, tech_stack, live_url, github_url").eq("is_published", true).order("created_at", { ascending: false }),
    supabase.from("blogs").select("id, title, date, read_time, category, image_url, description").eq("is_published", true).order("date", { ascending: false }),
    supabase.from("about").select("*").limit(1).maybeSingle(),
    supabase.from("services").select("id, title, description, icon, features").order("sort_order", { ascending: true }),
    supabase.from("skills").select("id, name, category, level, icon, sort_order").order("category").order("sort_order"),
  ]);

  return (
    <DashboardLayout>
      <HeroSection about={about} />
      <AboutSection about={about} />
      <ServicesSection services={services || undefined} />
      <SkillsSection skills={skills || undefined} />
      <ProjectsSection projects={projects || []} />
      <BlogsSection blogs={blogs || []} />
      <ContactSection about={about} />
    </DashboardLayout>
  );
}
