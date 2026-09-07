import DashboardLayout from "@/components/DashboardLayout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogsSection from "@/components/sections/BlogsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <DashboardLayout>
      <HeroSection />
    </DashboardLayout>
  );
}
