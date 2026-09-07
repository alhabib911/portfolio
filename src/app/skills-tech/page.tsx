import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Skills & Technology | Abdullah Al Habib",
  description: "Explore the technical expertise and technologies Abdullah Al Habib uses to build modern web applications, including React, Next.js, Node.js, and more.",
};

export default async function SkillsTechPage() {
  const supabase = await createClient();
  const { data: skills } = await supabase.from("skills").select("id, name, category, level, icon, sort_order").order("category").order("sort_order");
  return (
    <DashboardLayout>
      <div className="space-y-12">
        <SkillsSection skills={skills || undefined} />
        {/* <ContactSection /> */}
      </div>
    </DashboardLayout>
  );
}
