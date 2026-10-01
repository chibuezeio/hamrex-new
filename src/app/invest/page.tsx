import type { Metadata } from "next";
import Image from "next/image";
import { getProperty } from "@/lib/data";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { whatsappLink } from "@/lib/utils";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Invest in NextCity",
  description:
    "NextCity Estate in Tumbee, beside Afam Power Plant — ₦3M plots, flexible payment from ₦500,000. A Hamrex flagship layout.",
};

const points = [
  "Tumbee, Afam Link Road, Oyigbo",
  "Beside the Afam Power Plant",
  "₦3 million per 400 sqm plot",
  "Start from ₦500,000",
  "Buy to build, or hold for appreciation",
  "Documented Hamrex allocation",
];

export default function InvestPage() {
  const nextcity = getProperty("nextcity-estate");

  return (
    <>
      <section className="relative min-h-[80vh] overflow-hidden bg-navy pt-32">
        <Image
          src="/images/hero-land.jpg"
          alt="NextCity development in progress"
          fill
          quality={95}
          className="object-cover object-[center_70%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-blue/20" />
        <div className="container-page relative flex min-h-[80vh] flex-col justify-end pb-16 text-white">
          <p className="eyebrow text-blue-2">Flagship layout</p>
          <h1 className="display mt-4 max-w-4xl text-3xl sm:text-5xl">
            NextCity Estate. The long game.
          </h1>
          <p className="mt-6 max-w-xl text-white/70">
            A residential land development at Tumbee, beside the Afam Power
            Plant. ₦3M a plot. Built for people who want to own — and for people
            who want the land to work while they wait.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href={whatsappLink(
                "Hello Hamrex, I want to invest in NextCity Estate. Please share allocation and payment details."
              )}
              variant="white"
              external
            >
              Invest on WhatsApp
            </ButtonLink>
            {nextcity ? (
              <ButtonLink href={`/properties/${nextcity.slug}`} variant="ghost">
                Estate details
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="display text-3xl text-navy">
              Why this corridor.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.08}>
            <p className="text-lg leading-relaxed text-muted">
              Power infrastructure, a growing Oyigbo–Afam axis, and a price
              that still lets first-time buyers in. NextCity is not a brochure
              city. It is land, opened, documented, and sold with a plan.
            </p>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {points.map((point) => (
                <li key={point} className="py-4 text-navy">
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted">
              Questions go to {site.phone} or a free inspection. We would rather
              you stand on it than take our word.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
