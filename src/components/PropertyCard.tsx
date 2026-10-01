import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/lib/data";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.slug}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-[0_8px_30px_rgba(22,119,212,0.06)]">
        <div className="img-zoom relative h-52 w-full shrink-0 overflow-hidden bg-sand sm:h-56">
          <Image
            src={property.image}
            alt={property.name}
            fill
            quality={95}
            className="object-cover object-center"
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          />
          <span className="absolute left-3 top-3 rounded-md bg-navy px-2.5 py-1 text-xs font-medium text-white">
            {property.type}
          </span>
        </div>
        <div className="flex min-h-40 flex-1 flex-col px-5 pb-5 pt-4">
          <h3 className="line-clamp-2 h-12 text-base font-semibold leading-6 text-navy">
            {property.name}
          </h3>
          <p className="mt-1 line-clamp-1 h-5 text-sm leading-5 text-muted">
            {property.location}
          </p>
          <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-3">
            <p className="text-sm text-muted">{property.size}</p>
            <p className="text-base font-semibold tabular-nums text-blue">
              {property.price}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
