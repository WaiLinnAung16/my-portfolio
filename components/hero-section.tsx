import ThreeDCardDemo from "@/components/3d-card-demo";
import React from "react";
import SpotlightPreview from "./spotlight-demo";

export default function HeroSection() {
  return (
    <SpotlightPreview>
      <div className="mx-auto flex max-w-7xl relative h-screen flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="w-full max-w-xl shrink-0 lg:max-w-lg">
          <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl dark:text-neutral-50">
            Frontend Developer. Problem Solver. Builder.
          </h1>
          <p className="mt-2 text-pretty text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-400">
            I’m Wai Linn Aung, crafting modern web and mobile apps with React,
            Vue, and React Native. Focused on performance, scalability, and
            AI-enhanced development.
          </p>
        </div>
        <div className="flex w-full justify-center lg:w-auto lg:justify-end lg:pr-4">
          <ThreeDCardDemo />
        </div>
      </div>
    </SpotlightPreview>
  );
}
