import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Projects | Abdullah Al Habib",
  description: "Explore the portfolio of Abdullah Al Habib, featuring a curated collection of SaaS platforms, ERP systems, and eCommerce applications.",
};

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-12">
        <ProjectsSection />
        {/* <ContactSection /> */}
      </div>
    </DashboardLayout>
  );
}
