"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type Node = { id: string; label: string; x: number; y: number };

const FULL: Node[] = [
  { id: "land", label: "Land banking", x: 0.07, y: 0.5 },
  { id: "inspect", label: "Inspection", x: 0.21, y: 0.26 },
  { id: "title", label: "Title & docs", x: 0.35, y: 0.68 },
  { id: "dev", label: "Development", x: 0.49, y: 0.3 },
  { id: "estates", label: "Estates", x: 0.63, y: 0.66 },
  { id: "income", label: "Rental income", x: 0.77, y: 0.28 },
  { id: "wealth", label: "Wealth", x: 0.92, y: 0.54 },
];

const COMPACT: Node[] = [
  { id: "land", label: "Land", x: 0.1, y: 0.6 },
  { id: "dev", label: "Development", x: 0.37, y: 0.3 },
  { id: "estates", label: "Estates", x: 0.64, y: 0.64 },
  { id: "wealth", label: "Wealth", x: 0.9, y: 0.34 },
];

const FULL_LINKS: [string, string][] = [
  ["land", "inspect"],
  ["inspect", "title"],
  ["title", "dev"],
  ["dev", "estates"],
  ["estates", "income"],
  ["income", "wealth"],
  ["land", "title"],
  ["inspect", "dev"],
  ["dev", "income"],
  ["estates", "wealth"],
];

const COMPACT_LINKS: [string, string][] = [
  ["land", "dev"],
  ["dev", "estates"],
  ["estates", "wealth"],
  ["land", "estates"],
  ["dev", "wealth"],
];

const BLUE = "78, 162, 234";
const WHITE = "255, 255, 255";

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

export function HeroNetwork() {
  const wrap = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGSAP(
    () => {
      const canvas = canvasRef.current;
      const host = wrap.current;
      if (!canvas || !host) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      let width = 0;
      let height = 0;
      let compact = false;
      let nodes = FULL;
      let links = FULL_LINKS;
      let nodeMap = new Map(nodes.map((n) => [n.id, n]));
      let running = true;

      const reveal = { p: reduce ? 1 : 0 };

      const particles = Array.from({ length: 14 }, (_, i) => ({
        i,
        t: Math.random(),
        speed: 0.14 + Math.random() * 0.14,
      }));

      const resize = () => {
        const rect = host.getBoundingClientRect();
        width = Math.max(1, Math.round(rect.width));
        height = Math.max(1, Math.round(rect.height));
        compact = width < 700;
        nodes = compact ? COMPACT : FULL;
        links = compact ? COMPACT_LINKS : FULL_LINKS;
        nodeMap = new Map(nodes.map((n) => [n.id, n]));
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };

      const drawScale = (p: number) => {
        const y = height - 18;
        ctx.strokeStyle = `rgba(${WHITE}, ${0.08 * p})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width * p, y + 0.5);
        ctx.stroke();
        for (let x = 0; x < width * p; x += 40) {
          const major = x % 200 === 0;
          ctx.beginPath();
          ctx.moveTo(x + 0.5, y + 0.5);
          ctx.lineTo(x + 0.5, y - (major ? 7 : 3) + 0.5);
          ctx.stroke();
        }
      };

      const draw = () => {
        if (!running) return;
        const time = gsap.globalTimeline.time();
        const p = reveal.p;
        ctx.clearRect(0, 0, width, height);
        ctx.lineCap = "butt";
        ctx.textBaseline = "middle";

        drawScale(p);

        links.forEach(([a, b], i) => {
          const na = nodeMap.get(a);
          const nb = nodeMap.get(b);
          if (!na || !nb) return;
          const lp = clamp01((p - i * 0.045) / 0.4);
          if (lp <= 0) return;
          const x1 = na.x * width;
          const y1 = na.y * height;
          const x2 = x1 + (nb.x * width - x1) * lp;
          const y2 = y1 + (nb.y * height - y1) * lp;
          const primary = i < links.length - (compact ? 2 : 4);
          ctx.strokeStyle = primary
            ? `rgba(${BLUE}, 0.42)`
            : `rgba(${WHITE}, 0.09)`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        });

        if (!reduce) {
          ctx.fillStyle = `rgba(${WHITE}, ${0.75 * p})`;
          particles.forEach((particle) => {
            const link = links[particle.i % links.length];
            const na = nodeMap.get(link[0]);
            const nb = nodeMap.get(link[1]);
            if (!na || !nb) return;
            const x = (na.x + (nb.x - na.x) * particle.t) * width;
            const y = (na.y + (nb.y - na.y) * particle.t) * height;
            ctx.fillRect(Math.round(x), Math.round(y), 1.5, 1.5);
          });
        }

        nodes.forEach((node, i) => {
          const np = clamp01((p - i * 0.07) / 0.3);
          if (np <= 0) return;
          const x = Math.round(node.x * width) + 0.5;
          const y = Math.round(node.y * height) + 0.5;
          const anchor = node.id === "land" || node.id === "wealth";
          const r = anchor ? 7 : 5;

          const spikes = compact ? 8 : 10;
          ctx.strokeStyle = `rgba(${WHITE}, ${0.16 * np})`;
          ctx.lineWidth = 1;
          for (let s = 0; s < spikes; s++) {
            const ang = (Math.PI * 2 * s) / spikes + time * 0.08;
            const len = r + 4 + (s % 2) * 5;
            ctx.beginPath();
            ctx.moveTo(x + Math.cos(ang) * (r + 2), y + Math.sin(ang) * (r + 2));
            ctx.lineTo(x + Math.cos(ang) * len, y + Math.sin(ang) * len);
            ctx.stroke();
          }

          ctx.strokeStyle = `rgba(${BLUE}, ${0.85 * np})`;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.stroke();

          if (anchor) {
            ctx.fillStyle = `rgba(${WHITE}, ${np})`;
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.strokeStyle = `rgba(${BLUE}, ${0.5 * np})`;
            ctx.beginPath();
            ctx.moveTo(x - r - 4, y);
            ctx.lineTo(x - r + 1, y);
            ctx.moveTo(x + r - 1, y);
            ctx.lineTo(x + r + 4, y);
            ctx.stroke();
          }

          const la = clamp01((p - 0.45) / 0.35);
          if (la <= 0) return;
          const above = node.y < 0.5;
          const tickEnd = above ? y - r - 11 : y + r + 11;
          ctx.strokeStyle = `rgba(${WHITE}, ${0.18 * la})`;
          ctx.beginPath();
          ctx.moveTo(x, above ? y - r - 3 : y + r + 3);
          ctx.lineTo(x, tickEnd);
          ctx.stroke();

          ctx.font = `500 ${compact ? 9.5 : 10}px Inter, ui-sans-serif, system-ui, sans-serif`;
          ctx.letterSpacing = "0.16em";
          ctx.textAlign =
            node.x > 0.86 ? "right" : node.x < 0.12 ? "left" : "center";
          const tx = node.x > 0.86 ? x + 10 : node.x < 0.12 ? x - 10 : x;
          ctx.fillStyle = `rgba(${WHITE}, ${0.62 * la})`;
          ctx.fillText(
            node.label.toUpperCase(),
            tx,
            above ? tickEnd - 7 : tickEnd + 7
          );
          ctx.letterSpacing = "0px";
        });
      };

      const tick = () => {
        if (!reduce) {
          const step = gsap.ticker.deltaRatio() * 0.016;
          for (const particle of particles) {
            particle.t += particle.speed * step;
            if (particle.t > 1) particle.t -= 1;
          }
        }
        draw();
      };

      resize();
      draw();

      const ro = new ResizeObserver(() => {
        resize();
        draw();
      });
      ro.observe(host);

      let revealTween: gsap.core.Tween | undefined;
      let fallback: number | undefined;
      if (!reduce) {
        const loaderUp = Boolean(document.querySelector("[data-hamrex-loader]"));
        const delay = loaderUp ? 2.1 : 0.45;
        revealTween = gsap.to(reveal, {
          p: 1,
          duration: 1.6,
          ease: "power2.out",
          delay,
        });
        gsap.ticker.add(tick);

        // The animation clock can stall in a throttled tab; never leave the band blank.
        fallback = window.setTimeout(() => {
          if (reveal.p < 1) {
            reveal.p = 1;
            draw();
          }
        }, (delay + 2.4) * 1000);
      }

      return () => {
        running = false;
        ro.disconnect();
        revealTween?.kill();
        if (fallback) window.clearTimeout(fallback);
        if (!reduce) gsap.ticker.remove(tick);
      };
    },
    { scope: wrap }
  );

  return (
    <div ref={wrap} className="absolute inset-0" aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
