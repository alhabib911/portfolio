import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import BlogsSection from "@/components/sections/BlogsSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Articles & Blog | Abdullah Al Habib",
  description: "Read the latest thoughts, tutorials, and insights on web development, AI, and technology trends by Abdullah Al Habib.",
};

export default function BlogsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-12">
        <BlogsSection />
        {/* <ContactSection /> */}
      </div>
    </DashboardLayout>
  );
}
