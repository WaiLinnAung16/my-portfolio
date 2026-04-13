"use client";

import { cn } from "@/lib/utils";
import {
  IconBrandFigma,
  IconBrandFramerMotion,
  IconBrandGraphql,
  IconBrandHeadlessui,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandNuxt,
  IconBrandPrisma,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVue,
  IconCode,
  IconDatabase,
  IconMovie,
} from "@tabler/icons-react";
import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
} from "@floating-ui/dom";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  stacks?: string[];
};

/** Brand colors for stack icons (beside title) */
const STACK_ICON_COLOR: Record<string, string> = {
  "next.js": "#ffffff",
  nextjs: "#ffffff",
  "tailwind css": "#06b6d4",
  tailwind: "#06b6d4",
  typescript: "#3178c6",
  javascript: "#f7df1e",
  react: "#61dafb",
  "node.js": "#339933",
  nodejs: "#339933",
  python: "#3776ab",
  "tmdb api": "#01d277",
  tmdb: "#01d277",
  prisma: "#2d3748",
  postgres: "#4169e1",
  postgresql: "#4169e1",
  mongodb: "#47a248",
  graphql: "#e10098",
  figma: "#f24e1e",
  vue: "#4fc08d",
  nuxt: "#4fc08d",
};

const FALLBACK_ICON_COLOR = "#a78bfa";

function stackIconColor(label: string) {
  const key = label.toLowerCase().trim();
  return STACK_ICON_COLOR[key] ?? FALLBACK_ICON_COLOR;
}

const ICON_SIZE = 22;
const iconProps = { size: ICON_SIZE, stroke: 1.5 } as const;

function StackIcon({ name }: { name: string }) {
  const key = name.toLowerCase().trim();
  const color = stackIconColor(name);

  let node: React.ReactNode;
  switch (key) {
    case "next.js":
    case "nextjs":
      node = <IconBrandNextjs {...iconProps} />;
      break;
    case "tailwind css":
    case "tailwind":
      node = <IconBrandTailwind {...iconProps} />;
      break;
    case "typescript":
      node = <IconBrandTypescript {...iconProps} />;
      break;
    case "javascript":
      node = <IconBrandJavascript {...iconProps} />;
      break;
    case "react":
      node = <IconBrandReact {...iconProps} />;
      break;
    case "node.js":
    case "nodejs":
      node = <IconBrandNodejs {...iconProps} />;
      break;
    case "python":
      node = <IconBrandPython {...iconProps} />;
      break;
    case "tmdb api":
    case "tmdb":
      node = <IconMovie {...iconProps} />;
      break;
    case "prisma":
      node = <IconBrandPrisma {...iconProps} />;
      break;
    case "postgres":
    case "postgresql":
      node = <IconDatabase {...iconProps} />;
      break;
    case "mongodb":
      node = <IconBrandMongodb {...iconProps} />;
      break;
    case "graphql":
      node = <IconBrandGraphql {...iconProps} />;
      break;
    case "figma":
      node = <IconBrandFigma {...iconProps} />;
      break;
    case "framer motion":
      node = <IconBrandFramerMotion {...iconProps} />;
      break;
    case "vue":
      node = <IconBrandVue {...iconProps} />;
      break;
    case "headless ui":
      node = <IconBrandHeadlessui {...iconProps} />;
      break;
    case "nuxt":
      node = <IconBrandNuxt {...iconProps} />;
      break;
    default:
      node = <IconCode {...iconProps} />;
  }

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const anchorRef = useRef<HTMLSpanElement>(null);
  const floatingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!open || !mounted) return;
    const anchor = anchorRef.current;
    const floating = floatingRef.current;
    if (!anchor || !floating) return;

    setShowTip(false);

    function update() {
      const a = anchorRef.current;
      const f = floatingRef.current;
      if (!a || !f) return;
      computePosition(a, f, {
        strategy: "fixed",
        placement: "bottom",
        middleware: [
          offset(6),
          flip({ fallbackPlacements: ["top", "right", "left"] }),
          shift({ padding: 8 }),
        ],
      }).then(({ x, y }) => {
        setPos({ x, y });
        setShowTip(true);
      });
    }

    update();
    return autoUpdate(anchor, floating, update);
  }, [open, mounted]);

  const tooltip =
    open &&
    mounted &&
    createPortal(
      <span
        ref={floatingRef}
        aria-hidden
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          zIndex: 9999,
          opacity: showTip ? 1 : 0,
          transition: "opacity 150ms ease-out",
        }}
        className={cn(
          "pointer-events-none max-w-[min(18rem,calc(100vw-1rem))] text-pretty rounded-md px-2 py-1.5 text-left text-xs font-medium leading-snug text-neutral-50",
          "bg-neutral-800/95 shadow-md ring-1 ring-white/10",
        )}
      >
        {name}
      </span>,
      document.body,
    );

  return (
    <span
      ref={anchorRef}
      className="relative inline-flex shrink-0 [&_svg]:pointer-events-none"
      style={{ color }}
      onMouseEnter={() => {
        setShowTip(false);
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
        setShowTip(false);
      }}
    >
      <span className="sr-only">{name}</span>
      <span aria-hidden>{node}</span>
      {tooltip}
    </span>
  );
}

function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  stacks,
}: ProjectItem) {
  const prefersReducedMotion = useReducedMotion();

  const inner = (
    <>
      <div className="relative z-10 px-8 pb-2 pt-9 md:px-5 md:pt-5">
        <div className="flex items-start gap-3 md:gap-4">
          <h3 className="min-w-0 flex-1 text-pretty text-lg font-bold tracking-tight text-white md:text-[1.65rem] md:leading-snug">
            {title}
          </h3>
          {stacks?.length ? (
            <ul
              className="flex shrink-0 items-center gap-1.5 pt-0.5"
              aria-label="Tech stack"
            >
              {stacks.map((name) => (
                <li key={name}>
                  <StackIcon name={name} />
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-400 md:text-sm">
          {description}
        </p>
      </div>

      <div className="w-full h-[250px] absolute -bottom-12 lg:-bottom-3 -right-24 -rotate-4 lg:-rotate-8 rounded-lg overflow-hidden group-hover:scale-105 group-hover:rotate-0 transition-all duration-300">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={800}
          className="w-full h-full object-cover object-left"
        />
      </div>
    </>
  );

  const shellClass = cn(
    "group flex h-full min-h-[22rem] flex-col overflow-hidden rounded-xl border border-neutral-800 bg-[#0a0a0a] shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset]",
    "md:min-h-[24rem]",
  );

  const motionHover = prefersReducedMotion
    ? undefined
    : {
        scale: 1.02,
        transition: { type: "spring" as const, stiffness: 380, damping: 28 },
      };

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={cn(
          shellClass,
          "block outline-none ring-offset-2 ring-offset-[#0a0a0a] focus-visible:ring-2 focus-visible:ring-violet-500/80 relative",
        )}
        whileHover={motionHover}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.995 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.article
      className={shellClass}
      whileHover={motionHover}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.995 }}
    >
      {inner}
    </motion.article>
  );
}

export function ProjectCards({ projects }: { projects: ProjectItem[] }) {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7 lg:gap-8">
      {projects.map((project, i) => (
        <motion.li
          key={project.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: i * 0.06,
          }}
          className="h-full min-w-0"
        >
          <ProjectCard {...project} />
        </motion.li>
      ))}
    </ul>
  );
}

// <div className="overflow-hidden rounded-t-2xl border-x border-t border-white/[0.07] bg-neutral-900/50 md:rounded-t-[1.25rem]">
//           <div className="relative aspect-16/10 w-full overflow-hidden md:aspect-video md:min-h-54">
//             eslint-disable-next-line @next/next/no-img-element
//             <img
//               src={imageSrc}
//               alt={imageAlt}
//               width={1200}
//               height={675}
//               className={cn(
//                 "absolute inset-0 h-full w-full object-cover object-top",
//                 !prefersReducedMotion &&
//                   "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:-translate-y-2",
//               )}
//               loading="lazy"
//               decoding="async"
//             />
//           </div>
//         </div>
