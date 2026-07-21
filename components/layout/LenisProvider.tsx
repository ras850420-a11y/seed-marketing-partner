"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        duration: 1.05,
        easing: (time: number) => Math.min(1, 1.001 - 2 ** (-10 * time)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.05
      }}
    >
      {children}
    </ReactLenis>
  );
}
