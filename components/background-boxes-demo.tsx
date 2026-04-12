"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";

export default function BackgroundBoxesDemo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full overflow-hidden bg-gray-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-gray-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      {children}
    </div>
  );
}
