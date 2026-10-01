import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProperties } from "@/lib/data";
import { PropertyCard } from "@/components/PropertyCard";
import { Reveal } from "@/components/Reveal";

export function Estates() {
  return (
    <section id="estates" className="scroll-mt-28 bg-ice py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow">Estates</p>
              <h2 className="display mt-3 text-3xl text-navy sm:text-4xl">
                Selected land in Port Harcourt
              </h2>
            </div>
            <Link
              href="/properties"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-blue"
            >
              All 21 listings
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
