"use client";

import React, { useEffect, useState } from "react";
import { LoaderOne } from "@/components/ui/loader";
import { cn } from "@/lib/utils";

const DISPLAY_MS = 1600;

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (revealed) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [revealed]);

  useEffect(() => {
    const t = window.setTimeout(() => setRevealed(true), DISPLAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-100 flex items-center justify-center bg-neutral-950 p-4 transition-opacity duration-850 ease-out",
          revealed && "pointer-events-none opacity-0",
        )}
        aria-hidden={revealed}
        aria-busy={!revealed}
      >
        <LoaderOne />
      </div>

      <div
        className={cn(
          "min-h-screen transition-opacity duration-850 ease-out",
          !revealed && "pointer-events-none opacity-0",
          revealed && "opacity-100",
        )}
      >
        {children}
      </div>
    </>
  );
}
