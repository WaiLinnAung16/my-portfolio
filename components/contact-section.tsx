"use client";

import { fadeUp, stagger } from "@/lib/motion-variants";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/WaiLinnAung16",
    icon: IconBrandGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/wai-linn-aung-84052324a/",
    icon: IconBrandLinkedin,
  },
] as const;

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full scroll-mt-24 overflow-hidden border-t border-neutral-200/80 bg-linear-to-b from-neutral-50/90 via-neutral-50/70 to-neutral-100/50 py-20 dark:border-neutral-800/80 dark:from-neutral-950/80 dark:via-neutral-950/60 dark:to-neutral-900/40 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.08),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600/90 dark:text-violet-400/90"
          >
            Contact
          </motion.p>
          <motion.h2
            id="contact-heading"
            variants={fadeUp}
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-4xl"
          >
            Let&apos;s build something great
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-pretty text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
          >
            Whether you have a role, a freelance brief, or just want to compare
            notes on the modern frontend stack — I&apos;d love to hear from you.
          </motion.p>
        </motion.div>

        <div className="mt-14 mx-auto max-w-xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="rounded-3xl border border-neutral-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm dark:border-neutral-800/80 dark:bg-neutral-900/50"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold text-neutral-900 dark:text-neutral-100"
            >
              Direct
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="mailto:waia00198@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-lg font-medium text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400 dark:hover:text-violet-300"
            >
              <Mail className="h-5 w-5 shrink-0" aria-hidden />
              waia00198@gmail.com
            </motion.a>
            <motion.p
              variants={fadeUp}
              className="mt-6 flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" aria-hidden />
              Remote-friendly · open to relocation for the right team
            </motion.p>

            <motion.ul
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-3"
              role="list"
            >
              {socials.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-neutral-50/80 px-4 py-2 text-sm font-medium text-neutral-800 transition-colors hover:border-violet-300/80 hover:bg-white dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:border-violet-700/50"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    {name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
