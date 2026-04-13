"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Heart } from "lucide-react";
import React from "react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-neutral-200/80 bg-neutral-950 text-neutral-300 dark:border-neutral-800/80">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/25 to-transparent"
        aria-hidden
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 md:flex-row md:items-start md:justify-between md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300/90">
            Wai Linn Aung
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            Frontend developer focused on crisp interfaces, resilient code, and
            product-minded delivery.
          </p>
        </motion.div>

        <nav aria-label="Footer">
          <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-6">
            {footerLinks.map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <a
                  href={item.href}
                  className="group inline-flex items-center gap-1 text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                >
                  {item.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
          <p>
            © {new Date().getFullYear()} Wai Linn Aung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
