import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Services | Abdullah Al Habib",
  description: "Explore the professional web development services offered by Abdullah Al Habib, including Full-Stack solutions, AI integration, and SaaS development.",
};

export default async function ServicesPage() {
  const supabase = await createClient();
  const { data: services } = await supabase.from("services").select("id, title, description, icon, features").order("sort_order", { ascending: true });
  return (
    <DashboardLayout>
      <div className="space-y-12">
        <ServicesSection services={services || undefined} />
        {/* <ContactSection /> */}
      </div>
    </DashboardLayout>
  );
}
