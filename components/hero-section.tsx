"use client";

import ThreeDCardDemo from "@/components/3d-card-demo";
import SpotlightPreview from "@/components/spotlight-demo";
import { fadeUp, stagger } from "@/lib/motion-variants";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <SpotlightPreview>
      <section
        id="hero"
        aria-label="Introduction"
        className="relative min-h-screen w-full scroll-mt-24"
      >
        <div className="mx-auto flex h-full min-h-screen max-w-7xl flex-col items-center gap-12 px-4 pb-16 pt-28 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-10 lg:pt-20">
          <motion.div
            className="w-full max-w-xl shrink-0 lg:max-w-lg"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-violet-100 dark:bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-violet-800 dark:text-violet-200/90 backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5 dark:text-violet-300 text-violet-800" aria-hidden />
              Open to opportunities
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-5 text-balance text-3xl font-bold tracking-tight text-black dark:text-neutral-50 md:text-4xl lg:text-5xl lg:leading-[1.08]"
            >
              Frontend developer. Problem solver. Builder.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-pretty text-base leading-relaxed dark:text-neutral-400 text-neutral-600 md:text-lg"
            >
              I&apos;m Wai Linn Aung — crafting modern web and mobile
              experiences with React, Vue, and React Native. Focused on
              performance, clarity, and thoughtful UX.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-lg shadow-black/20 transition-colors hover:bg-neutral-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View work
                <ArrowRight className="h-4 w-4" aria-hidden />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/15 bg-black dark:bg-white/5 px-5 py-2.5 text-sm font-medium text-neutral-100 backdrop-blur-sm transition-colors hover:border-violet-400/40 hover:dark:bg-white/10 hover:bg-black/70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in touch
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex w-full justify-center lg:w-auto lg:justify-end lg:pr-4"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
          >
            <ThreeDCardDemo />
          </motion.div>
        </div>
      </section>
    </SpotlightPreview>
  );
}
