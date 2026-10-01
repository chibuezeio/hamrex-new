import type { Metadata } from "next";
import Image from "next/image";
import { team } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/home/CTA";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hamrex Properties is a subsidiary of the Hamrex Group. We acquire, develop, and sell verified land in Port Harcourt — towards one million landlords by 2050.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden bg-navy pt-32">
        <Image
          src="/images/inspection.jpg"
          alt="Hamrex meeting community stakeholders"
          fill
          quality={95}
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-blue/20" />
        <div className="container-page relative flex min-h-[70vh] flex-col justify-end pb-16 text-white">
          <p className="eyebrow text-blue-2">About Hamrex</p>
          <h1 className="display mt-4 max-w-4xl text-3xl sm:text-5xl">
            We run the city from the soil up.
          </h1>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Everything land</p>
            <h2 className="display mt-4 text-3xl text-navy sm:text-4xl">
              A subsidiary of the Hamrex Group.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.08}>
            <p className="text-lg leading-relaxed text-muted">
              Hamrex Properties acquires, develops, and sells verified lands
              that guarantee peace of mind and deliver outstanding investment
              returns. We are based at 124 NTA Road, Mgbuoba, Port Harcourt —
              and we work the corridors around Isiokpo, Elele, Igwuruta,
              Omagwa, and Oyigbo.
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              Our managing director, Amadi Harry Excellent, is a real-estate
              operator and founder of the Port Harcourt Real Estate Academy. The
              company is built around a single public promise: make housing
              accessible to Africans, and create one million landlords by 2050.
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              That is not a slogan on a flyer. It is why payment starts at
              ₦500,000, why inspections are free, and why we photograph
              meetings, not moodboards.
            </p>
            <div className="mt-8">
              <ButtonLink href="/properties" variant="navy">
                See the land
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ice py-24 sm:py-32">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <Reveal>
            <article className="h-full bg-white p-10 sm:p-14">
              <p className="eyebrow">Mission</p>
              <h3 className="display mt-4 text-3xl text-navy">
                Individuals, landlords.
              </h3>
              <p className="mt-5 leading-relaxed text-muted">
                We exist so ordinary people can own. A plot, then a house, then
                rent. The ladder is supposed to be climbable.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="h-full bg-navy p-10 text-white sm:p-14">
                  <p className="eyebrow text-blue-2">Also</p>
              <h3 className="display mt-4 text-3xl">
                Agents, millionaires.
              </h3>
              <p className="mt-5 leading-relaxed text-white/65">
                The people who sell this land should be able to build a life
                from it. Training, structure, and product that does not
                embarrass anyone at a family meeting.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Team</p>
            <h2 className="display mt-3 max-w-2xl text-4xl text-navy">
              A small bench. Serious work.
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Real estate professionals driven by experience, integrity, and
              results — legal, site, sales, and administration under one roof.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden bg-line sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.03}>
                <article className="bg-white px-6 py-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue text-lg font-semibold text-white">
                    {person.name
                      .split(" ")
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-navy">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                    {person.role}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-wide grid gap-3 sm:grid-cols-3">
          {[
            "/images/estates/estate-11.jpg",
            "/images/estates/estate-07.jpg",
            "/images/inspection.jpg",
          ].map((src) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
              <Image src={src} alt="" fill quality={95} className="object-cover object-center" sizes="33vw" />
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
