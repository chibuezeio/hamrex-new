"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { gsap, useGSAP } from "@/lib/gsap";

export function ButtonLink({
  href,
  children,
  variant = "navy",
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "navy" | "white" | "ghost" | "blue";
  className?: string;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const el = ref.current;
      if (!el || !contextSafe) return;
      const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });

      const onMove = contextSafe((e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * 0.18);
        yTo((e.clientY - r.top - r.height / 2) * 0.18);
      });
      const onLeave = contextSafe(() => {
        xTo(0);
        yTo(0);
      });

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: ref }
  );

  const styles = {
    navy: "bg-navy text-white hover:bg-navy-2",
    white: "bg-white text-navy hover:bg-ice",
    ghost:
      "bg-transparent text-current border border-current/20 hover:border-current/50",
    blue: "bg-blue text-white hover:bg-blue-2",
  }[variant];

  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold",
    styles,
    className
  );

  if (external) {
    return (
      <a
        ref={ref}
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link ref={ref} href={href} className={cls}>
      {children}
    </Link>
  );
}
