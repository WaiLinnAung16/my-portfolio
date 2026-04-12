import React from "react";

/** Tech stack for the marquee: Simple Icons CDN serves SVGs with brand colors. */
export const techStack: { name: string; src: string; darkSrc?: string }[] = [
  { name: "HTML5", src: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3", src: "https://cdn.simpleicons.org/css/1572B6" },
  { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "React", src: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Vue.js", src: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
  {
    name: "Next.js",
    src: "https://cdn.simpleicons.org/nextdotjs/000000",
    darkSrc: "https://cdn.simpleicons.org/nextdotjs/ffffff",
  },
  { name: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "MongoDB", src: "https://cdn.simpleicons.org/mongodb/47A248" },
  {
    name: "Prisma",
    src: "https://cdn.simpleicons.org/prisma/2D3748",
    darkSrc: "https://cdn.simpleicons.org/prisma/ffffff",
  },
];
