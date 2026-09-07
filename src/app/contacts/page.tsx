import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact | Abdullah Al Habib",
  description: "Get in touch with Abdullah Al Habib for business inquiries, remote collaboration, or freelance opportunities.",
};

export default function ContactPage() {
  return (
    <DashboardLayout>
      <div className="space-y-12">
        <ContactSection />
      </div>
    </DashboardLayout>
  );
}
