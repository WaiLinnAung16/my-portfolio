import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import PageLoader from "@/components/page-loader";
import { LayoutGridDemo } from "@/components/projects";
import NavbarDemo from "@/components/resizable-navbar-demo";
import TimelineDemo from "@/components/timeline-demo";
import React from "react";

function Home() {
  return (
    <NavbarDemo>
      <PageLoader>
        <HeroSection />
        <AboutSection />
        <LayoutGridDemo />
        <TimelineDemo />
      </PageLoader>
    </NavbarDemo>
  );
}

export default Home;
