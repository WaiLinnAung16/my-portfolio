"use client";

import { Timeline } from "@/components/ui/timeline";
import { motion } from "motion/react";
import React from "react";

function EntryHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg font-semibold leading-snug text-neutral-900 dark:text-neutral-100 md:text-xl">
      {children}
    </p>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-normal leading-relaxed text-neutral-800 dark:text-neutral-200 md:text-base">
      {children}
    </p>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-neutral-200/80 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-300"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-inside list-disc space-y-1.5 text-sm text-neutral-800 dark:text-neutral-200 md:text-base">
      {items.map((item) => (
        <li key={item} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}

const milestones = [
  {
    title: "2020",
    content: (
      <div className="space-y-4">
        <EntryHeading>
          🦠 2020 — The Beginning (COVID-19 Era)
        </EntryHeading>
        <Body>
          Started my frontend development journey by learning HTML, CSS, and
          JavaScript through YouTube. This was my first step into the world of
          web development and sparked my passion for building user interfaces.
        </Body>
        <TagList
          tags={["HTML", "CSS", "JavaScript", "YouTube", "Self-taught"]}
        />
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div className="space-y-4">
        <EntryHeading>📚 2021 — Building Foundations</EntryHeading>
        <Body>
          Joined a web development class to gain structured knowledge. Learned
          core frontend technologies including React, Vue, Bootstrap, Tailwind
          CSS, and explored design tools like Figma. Strengthened both coding and
          UI/UX understanding.
        </Body>
        <TagList
          tags={["React", "Vue", "Bootstrap", "Tailwind CSS", "Figma", "UI/UX"]}
        />
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div className="space-y-4">
        <EntryHeading>
          🤝 2022 — Real-World Experience (Volunteer)
        </EntryHeading>
        <Body>
          Volunteered for 3 months at Forward Society, collaborating on real
          projects, improving teamwork skills, and gaining practical development
          experience.
        </Body>
        <TagList tags={["Forward Society", "Volunteer", "Teamwork", "Real projects"]} />
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="space-y-4">
        <EntryHeading>
          💼 2023 — First Job (Junior Frontend Developer)
        </EntryHeading>
        <Body>
          Started my professional career at startup companies in the music and
          news industry.
        </Body>
        <BulletList
          items={[
            "Worked mainly with React",
            "Gained hands-on experience in real-world applications",
            "Improved problem-solving and teamwork skills",
          ]}
        />
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Duration: 6 months
        </p>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="space-y-4">
        <EntryHeading>📈 2024 — Skill Growth &amp; Expansion</EntryHeading>
        <Body>
          Focused on continuous learning and expanding my tech stack:
        </Body>
        <BulletList
          items={[
            "Advanced frontend: Next.js, React Native, Framer Motion",
            "Backend basics: Node.js, MongoDB",
          ]}
        />
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div className="space-y-4">
        <EntryHeading>
          🏫 2025 — Mid-Level Frontend Developer
        </EntryHeading>
        <Body>
          Joined ConceptX International School as a Mid-Level Frontend
          Developer.
        </Body>
        <BulletList
          items={[
            "Built and maintained websites and web applications using Vue & Tailwind CSS",
            "Contributed to improving digital systems for the school",
          ]}
        />
      </div>
    ),
  },
  {
    title: "2025 — Present",
    content: (
      <div className="space-y-4">
        <EntryHeading>
          📱 2025 – Present — Mobile Development &amp; Deployment
        </EntryHeading>
        <Body>
          Currently developing a mobile application using React Native for the
          school.
        </Body>
        <BulletList
          items={[
            "Managing deployment for both iOS and Android",
            "Expanding skills in cross-platform development and production release processes",
          ]}
        />
      </div>
    ),
  },
];

export default function JourneySection() {
  return (
    <div
      id="journey"
      className="relative w-full scroll-mt-24 overflow-clip border-y border-neutral-200/80 bg-linear-to-b from-white to-neutral-50/90 dark:border-neutral-800/80 dark:from-neutral-950 dark:to-neutral-900/50"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-400/30 to-transparent dark:via-violet-500/20"
        aria-hidden
      />
      <Timeline
        data={milestones}
        heading="My journey"
        subheading="From learning HTML on YouTube to mid-level frontend work and React Native deployment — how I grew year by year."
      />
    </div>
  );
}
