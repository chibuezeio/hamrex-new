import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/inspection.jpg"
          alt="Hamrex site inspection in Rivers State"
          fill
          quality={95}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/45 to-blue/25" />
      </div>
      <div className="container-page relative py-24 text-white sm:py-32">
        <Reveal>
          <p className="eyebrow text-blue-2">Next step</p>
          <h2 className="display mt-4 max-w-3xl text-3xl sm:text-4xl">
            Come and see the land.
          </h2>
          <p className="mt-5 max-w-lg text-white/85">
            Free inspection. No obligation. We will pick a layout, walk it with
            you, and talk numbers without the theatre.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="white">
              Book inspection
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="ghost" external>
              {site.phone}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
