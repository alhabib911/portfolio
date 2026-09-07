import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import BlogsSection from "@/components/sections/BlogsSection";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Articles & Blog | Abdullah Al Habib",
  description: "Read the latest thoughts, tutorials, and insights on web development, AI, and technology trends by Abdullah Al Habib.",
};

export default async function BlogsPage() {
  const supabase = await createClient();
  const { data: blogs } = await supabase
    .from("blogs")
    .select("id, title, date, read_time, category, image_url, description")
    .eq("is_published", true)
    .order("date", { ascending: false });

  return (
    <DashboardLayout>
      <div className="space-y-12">
        <BlogsSection blogs={blogs || []} />
        {/* <ContactSection /> */}
      </div>
    </DashboardLayout>
  );
}
