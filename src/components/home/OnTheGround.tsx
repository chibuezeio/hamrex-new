import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const frames = [
  {
    src: "/images/estates/estate-11.jpg",
    caption: "Worthland Residence, Rumuodogho",
    className: "lg:col-span-7",
  },
  {
    src: "/images/estates/estate-07.jpg",
    caption: "Grosvenor Estate, Choba",
    className: "lg:col-span-5",
  },
  {
    src: "/images/inspection.jpg",
    caption: "Site inspection, Rivers State",
    className: "lg:col-span-5",
  },
  {
    src: "/images/estates/estate-08.jpg",
    caption: "Buy and build in progress, Elele",
    className: "lg:col-span-7",
  },
];

export function OnTheGround() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">On the ground</p>
          <h2 className="display mt-3 max-w-3xl text-3xl text-navy sm:text-4xl">
            The work is not a render. It is a meeting, a road, a gate.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            Land in Rivers State is a people business. We sit with communities,
            walk the soil with buyers, and keep machinery on site until a layout
            is actually a place.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {frames.map((frame, i) => (
            <Reveal key={frame.src} delay={i * 0.05} className={frame.className}>
              <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-sand">
                <Image
                  src={frame.src}
                  alt={frame.caption}
                  fill
                  quality={95}
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/55 to-transparent px-5 pb-4 pt-10 text-sm font-medium text-white">
                  {frame.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
