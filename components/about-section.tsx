"use client";

import { techStack } from "@/components/tech-logos";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Sparkles, Target, Zap } from "lucide-react";
import React from "react";

const aboutCopy =
  "I’m a self-motivated developer who began coding during COVID-19 with HTML, CSS, and JavaScript. Since then I’ve kept learning and building across the modern web stack. I enjoy solving problems and shipping practical solutions, and I use AI tools to move faster on repetitive work while picking up new ideas. My focus is growing through real-world experience and building applications that matter.";

const highlights = [
  {
    icon: Sparkles,
    title: "Always learning",
    description: "Steady growth through shipping real projects.",
  },
  {
    icon: Target,
    title: "Problem-first",
    description: "Practical solutions over buzzword architecture.",
  },
  {
    icon: Zap,
    title: "Efficient workflow",
    description: "AI where it helps; craft where it matters.",
  },
] as const;

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const staggerDelayed = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AboutSection() {
  const row = [...techStack, ...techStack];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full scroll-mt-24 overflow-hidden border-y border-neutral-200/80 bg-gradient-to-b from-neutral-50/90 via-neutral-50/70 to-neutral-100/50 py-20 dark:border-neutral-800/80 dark:from-neutral-950/80 dark:via-neutral-950/60 dark:to-neutral-900/40 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.08),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl dark:bg-violet-500/5"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl dark:bg-sky-500/5"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-16">
          <motion.div
            className="max-w-2xl lg:max-w-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600/90 dark:text-violet-400/90"
            >
              About
            </motion.p>
            <motion.h2
              id="about-heading"
              variants={fadeUp}
              className="mt-3 text-balance text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
            >
              A little about me
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-pretty text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-xl md:leading-relaxed"
            >
              {aboutCopy}
            </motion.p>
          </motion.div>

          <motion.ul
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerDelayed}
          >
            {highlights.map((item) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                className="group rounded-2xl border border-neutral-200/80 bg-white/60 p-5 shadow-sm backdrop-blur-sm transition-colors hover:border-violet-200/80 dark:border-neutral-800/80 dark:bg-neutral-900/40 dark:hover:border-violet-900/50"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                Tech I work with
              </p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Tools and frameworks I reach for most often.
              </p>
            </div>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-800 sm:ml-8 sm:block" />
          </div>

          <div className="relative mt-8 overflow-hidden rounded-2xl border border-neutral-200/60 bg-white/40 py-8 dark:border-neutral-800/60 dark:bg-neutral-900/30">
            <div className="mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div
                className={cn(
                  "flex w-max items-center gap-10 md:gap-14",
                  "animate-marquee",
                )}
              >
                {row.map((tech, i) => (
                  <div
                    key={`${tech.name}-${i}`}
                    className="flex shrink-0 flex-col items-center gap-2"
                  >
                    {tech.darkSrc ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={tech.src}
                          alt=""
                          width={40}
                          height={40}
                          className="h-10 w-10 object-contain dark:hidden"
                          loading="lazy"
                          decoding="async"
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={tech.darkSrc}
                          alt=""
                          width={40}
                          height={40}
                          className="hidden h-10 w-10 object-contain dark:block"
                          loading="lazy"
                          decoding="async"
                        />
                      </>
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={tech.src}
                        alt=""
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    <span className="whitespace-nowrap text-xs font-medium text-neutral-600 dark:text-neutral-400">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
