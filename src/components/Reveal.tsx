"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.fromTo(
        el,
        { y, opacity: 0.35 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
        }
      );

      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    { scope: ref, dependencies: [delay, y] }
  );

  return (
    <div ref={ref} className={cn("h-full", className)}>
      {children}
    </div>
  );
}
