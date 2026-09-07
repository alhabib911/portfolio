import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Skills & Technology | Abdullah Al Habib",
  description: "Explore the technical expertise and technologies Abdullah Al Habib uses to build modern web applications, including React, Next.js, Node.js, and more.",
};

export default function SkillsTechPage() {
  return (
    <DashboardLayout>
      <div className="space-y-12">
        <SkillsSection />
        <ContactSection />
      </div>
    </DashboardLayout>
  );
}
