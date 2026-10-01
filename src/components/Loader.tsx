"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

let hasPlayed = false;

export function Loader() {
  const [visible, setVisible] = useState(() => !hasPlayed);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasPlayed) return;
    const fallback = window.setTimeout(() => {
      hasPlayed = true;
      setVisible(false);
    }, 2800);
    return () => window.clearTimeout(fallback);
  }, []);

  useGSAP(
    () => {
      if (!visible || hasPlayed || !ref.current) return;

      const finish = () => {
        hasPlayed = true;
        setVisible(false);
      };

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: reduce)", () => {
        finish();
      });
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.inOut" },
          onComplete: finish,
        });
        tl.fromTo(
          ".loader-mark",
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.5 }
        )
          .fromTo(
            ".loader-bar-inner",
            { scaleX: 0 },
            { scaleX: 1, duration: 0.65, transformOrigin: "left center" },
            "-=0.1"
          )
          .to(ref.current, { yPercent: -100, duration: 0.8, delay: 0.08 });
      });
    },
    { scope: ref, dependencies: [visible] }
  );

  if (!visible) return null;

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-80 flex flex-col items-center justify-center bg-navy text-white"
      aria-hidden="true"
      data-hamrex-loader=""
    >
      <p className="loader-mark text-3xl font-semibold tracking-tight">
        Hamrex
      </p>
      <div className="loader-bar mt-6 h-px w-40 overflow-hidden bg-white/20">
        <div className="loader-bar-inner h-full w-full origin-left scale-x-0 bg-blue" />
      </div>
    </div>
  );
}
