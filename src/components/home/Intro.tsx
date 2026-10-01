"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const sheet = [
  { label: "Estates in market", value: "21" },
  { label: "Communities", value: "7" },
  { label: "Standard plot", value: "400 sqm" },
  { label: "Land banking plots", value: "₦900,000 – ₦3M" },
  { label: "First payment", value: "from ₦500,000" },
];

export function Intro() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-page grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="display max-w-md text-[1.75rem] leading-[1.3] text-navy sm:text-[2rem]">
              Hamrex Properties is the land arm of the Hamrex Group, working
              across seven communities in Rivers State.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-7 max-w-md leading-relaxed text-muted">
              We buy directly from the families that hold the land, open the
              access roads, fence the perimeter, and register the survey before
              a single plot goes on sale.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              Most of that work is unglamorous — community meetings, bush
              clearing, beacon setting, paperwork. It is also the reason our
              buyers end up with a title they can defend.
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy"
            >
              <span className="border-b border-navy/25 pb-0.5 transition-colors group-hover:border-navy">
                How Hamrex started
              </span>
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
          </Reveal>

          <Reveal delay={0.12}>
            <dl className="mt-14 border-t border-line">
              {sheet.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-3.5"
                >
                  <dt className="text-sm text-muted">{row.label}</dt>
                  <dd className="text-sm font-semibold text-navy tabular-nums">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal y={24}>
            <figure>
              <div className="relative h-64 overflow-hidden bg-sand sm:h-80 lg:h-88">
                <Image
                  src="/images/hero-gate.jpg"
                  alt="Gated entrance at Worthland Residence, Rumuodogho"
                  fill
                  quality={95}
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </div>
              <figcaption className="mt-3 border-t border-line pt-3 text-[0.8rem] leading-relaxed text-muted">
                Worthland Residence, Rumuodogho — gated entrance
              </figcaption>
            </figure>
          </Reveal>
          <Reveal y={24} delay={0.08}>
            <figure className="mt-10 sm:ml-auto sm:w-2/3">
              <div className="relative h-56 overflow-hidden bg-sand sm:h-64 lg:h-72">
                <Image
                  src="/images/hero-on-site.jpg"
                  alt="Block work under way on a Hamrex site"
                  fill
                  quality={95}
                  className="object-cover object-[center_45%]"
                  sizes="(min-width: 1024px) 36vw, 100vw"
                />
              </div>
              <figcaption className="mt-3 border-t border-line pt-3 text-[0.8rem] leading-relaxed text-muted">
                Block work on site, before allocation
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
