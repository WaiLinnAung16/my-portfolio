"use client";

import { ProjectCards, type ProjectItem } from "@/components/project-cards";
import { fadeUp, stagger } from "@/lib/motion-variants";
import { motion } from "motion/react";
import React from "react";

const projects: ProjectItem[] = [
  {
    id: "moviezine",
    title: "Moviezine",
    description:
      "A responsive web app for exploring movies and TV shows using the TMDB API.",
    imageSrc: "/projects/movie.png",
    imageAlt: "Moviezine app screenshot",
    href: "https://movie-zine.vercel.app/",
    stacks: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "everyonecancook",
    title: "Everyone Can Cook",
    description:
      "A recipe browsing app powered by a public API with search and category filtering.",
    imageSrc: "/projects/everyonecancook.png",
    imageAlt: "Everyone Can Cook app screenshot",
    href: "https://everyonecancook.vercel.app/",
    stacks: ["React", "Tailwind CSS"],
  },
  {
    id: "conceptx",
    title: "ConceptX Website",
    description:
      "A modern landing site for an international school with clean UI and smooth animations.",
    imageSrc: "/projects/conceptx.png",
    imageAlt: "ConceptX Website app screenshot",
    href: "https://conceptx.edu.mm/",
    stacks: ["Nuxt", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "edomnis",
    title: "EdOmnis",
    description:
      "A free LMS where users can create, share content, and build quizzes with multiple question types.",
    imageSrc: "/projects/edomnis.png",
    imageAlt: "EdOmnis app screenshot",
    href: "https://edomnis.com",
    stacks: ["Vue", "Tailwind CSS", "Headless UI"],
  },
  {
    id: "wisdomc",
    title: "WisdomC",
    description:
      "A clean and modern college landing page focused on programs and user engagement.",
    imageSrc: "/projects/wisdomc.png",
    imageAlt: "WisdomC app screenshot",
    href: "https://wisdomc.org/",
    stacks: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
];
export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative w-full scroll-mt-24 overflow-hidden border-y border-neutral-200/80 bg-linear-to-b from-neutral-100/50 via-neutral-50/80 to-neutral-50/90 py-20 dark:border-neutral-800/80 dark:from-neutral-900/40 dark:via-neutral-950/60 dark:to-neutral-950/80 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_80%_0%,rgba(56,189,248,0.08),transparent)] dark:bg-[radial-gradient(ellipse_70%_45%_at_80%_0%,rgba(56,189,248,0.06),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-violet-400/10 blur-3xl dark:bg-violet-500/5"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600/90 dark:text-violet-400/90"
          >
            Projects
          </motion.p>
          <motion.h2
            id="projects-heading"
            variants={fadeUp}
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-4xl lg:text-[2.25rem] lg:leading-[1.15]"
          >
            Selected work
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-pretty text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
          >
            A few builds that show how I think about UI, data, and shipping
            end-to-end product experiences.
          </motion.p>
        </motion.div>

        <div className="mt-12 md:mt-16">
          <ProjectCards projects={projects} />
        </div>
      </div>
    </section>
  );
}
