import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Projects | Abdullah Al Habib",
  description: "Explore the portfolio of Abdullah Al Habib, featuring a curated collection of SaaS platforms, ERP systems, and eCommerce applications.",
};

export default async function ProjectsPage() {
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from("projects")
    .select("id, title, category, image_url, description, tech_stack, live_url, github_url")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  return (
    <DashboardLayout>
      <div className="space-y-12">
        <ProjectsSection projects={projects || []} />
        {/* <ContactSection /> */}
      </div>
    </DashboardLayout>
  );
}
