"use client";

import { useRef } from "react";
import Image from "next/image";
import { PropertySearch } from "@/components/PropertySearch";
import { gsap, useGSAP } from "@/lib/gsap";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const loaderUp = Boolean(document.querySelector("[data-hamrex-loader]"));
        const tl = gsap.timeline({
          delay: loaderUp ? 1.9 : 0.15,
          defaults: { ease: "power3.out" },
        });

        tl.fromTo(
          ".hero-copy > *",
          { y: 28 },
          { y: 0, duration: 0.85, stagger: 0.1 }
        )
          .fromTo(
            ".hero-shot",
            { scale: 1.16 },
            { scale: 1, duration: 2.4, ease: "power2.out" },
            0
          )
          .fromTo(
            ".hero-search",
            { y: 28 },
            { y: 0, duration: 0.9 },
            0.45
          );

        gsap.to(".hero-shot", {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative bg-white pb-10">
      <div className="relative isolate flex min-h-[74svh] flex-col justify-end overflow-hidden pt-32 pb-28 sm:min-h-[78svh] sm:pb-32">
        <Image
          src="/images/hero-corridor.jpg"
          alt="Access road and perimeter wall on a Hamrex estate in Rivers State"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="hero-shot -z-10 object-cover object-[center_52%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-t from-navy via-navy/70 to-navy/25"
        />

        <div className="hero-copy container-wide">
          <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-white/70 uppercase">
            Verified land · Rivers State
          </p>
          <h1 className="display mt-5 max-w-3xl text-[2.75rem] leading-[1.02] tracking-[-0.03em] text-white sm:text-[3.5rem] xl:text-[4rem]">
            Land you can stand on.
          </h1>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.7] text-white/80">
            We buy the land, open the roads, fence the perimeter, and register
            the survey before a single plot goes on sale. Walk it on a Saturday,
            then decide.
          </p>
        </div>
      </div>

      <div className="hero-search container-wide relative z-10 -mt-14 sm:-mt-18">
        <PropertySearch />
        <p className="mt-5 text-[0.82rem] text-muted">
          21 estates across 7 communities · plots from ₦900,000 · first payment
          from ₦500,000
        </p>
      </div>
    </section>
  );
}
