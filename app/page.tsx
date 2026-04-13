import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import JourneySection from "@/components/journey-section";
import PageLoader from "@/components/page-loader";
import { ProjectsSection } from "@/components/projects";
import NavbarDemo from "@/components/resizable-navbar-demo";
import SiteFooter from "@/components/site-footer";
import React from "react";

function Home() {
  return (
    <NavbarDemo>
      <PageLoader>
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <JourneySection />
          <ContactSection />
        </main>
        <SiteFooter />
      </PageLoader>
    </NavbarDemo>
  );
}

export default Home;
