
import React, { useEffect } from "react";
import { Footerdemo } from "@/components/ui/footer-section";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { AnimatedTestimonialsDemo } from "@/components/ui/animated-testimonials-demo";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-foreground">
      <NavBar />
      <AuroraBackground showRadialGradient={true}>
        <div id="home">
          <HeroSection />
        </div>
      </AuroraBackground>
      <div id="education" className="bg-background">
        <EducationSection />
      </div>
      <div id="skills" className="bg-background">
        <SkillsSection />
      </div>
      <div id="projects" className="bg-background">
        <ProjectsSection />
      </div>
      <div id="testimonials" className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Client Testimonials
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              What my clients say about working with me
            </p>
          </div>
          <AnimatedTestimonialsDemo />
        </div>
      </div>
      <div id="contact" className="bg-background">
        <ContactSection />
      </div>
      <Footerdemo />
    </div>
  );
};

export default Index;
