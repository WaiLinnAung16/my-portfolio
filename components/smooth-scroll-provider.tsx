"use client";

import { ReactLenis } from "lenis/react";
import { useMemo } from "react";

type SmoothScrollProviderProps = {
  children: React.ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const options = useMemo(
    () => ({
      autoRaf: true,
      anchors: true,
      stopInertiaOnNavigate: true,
    }),
    [],
  );

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
