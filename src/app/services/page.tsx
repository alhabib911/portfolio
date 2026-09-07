import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Services | Abdullah Al Habib",
  description: "Explore the professional web development services offered by Abdullah Al Habib, including Full-Stack solutions, AI integration, and SaaS development.",
};

export default function ServicesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-12">
        <ServicesSection />
        {/* <ContactSection /> */}
      </div>
    </DashboardLayout>
  );
}
