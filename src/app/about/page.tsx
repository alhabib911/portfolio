import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Metadata from "next";

export const metadata = {
  title: "About Me | Abdullah Al Habib",
  description: "Learn more about Abdullah Al Habib, Full Stack Web Developer, experience, education and skills.",
};

export default function AboutPage() {
  return (
    <DashboardLayout>
      <div className="space-y-12">
        {/* <AboutSection /> */}
        {/* <ContactSection /> */}
      </div>
    </DashboardLayout>
  );
}
