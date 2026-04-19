"use client";

import { IconBrightness, IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      disabled={!mounted}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative cursor-pointer z-20 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-gray-100 disabled:opacity-50 dark:text-neutral-200 dark:hover:bg-neutral-800",
        className,
      )}
    >
      {mounted ? (
        <IconBrightness className="h-5 w-5" aria-hidden />
      ) : (
        <span className="h-5 w-5" aria-hidden />
      )}
    </button>
  );
}
