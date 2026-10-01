import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProperty, properties } from "@/lib/data";
import { ButtonLink } from "@/components/ButtonLink";
import { PropertyCard } from "@/components/PropertyCard";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) return { title: "Estate" };
  return {
    title: property.name,
    description: `${property.name} — ${property.location}. ${property.price}. ${property.summary}`,
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  const related = properties
    .filter((p) => p.slug !== property.slug && p.type === property.type)
    .slice(0, 3);

  const message = `Hello Hamrex, I am interested in ${property.name} (${property.price}) at ${property.location}. I would like to book a site inspection.`;

  return (
    <>
      <section className="pt-28">
        <div className="container-page">
          <p className="eyebrow">
            <Link href="/properties" className="hover:text-navy">
              Estates
            </Link>
            <span className="mx-2">/</span>
            {property.type}
          </p>
          <div className="mt-4 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <h1 className="display max-w-3xl text-3xl text-navy sm:text-4xl">
              {property.name}
            </h1>
            <p className="text-3xl font-semibold text-blue">{property.price}</p>
          </div>
          {property.priceNote ? (
            <p className="mt-2 text-sm text-muted">{property.priceNote}</p>
          ) : null}
        </div>

        <div className="container-wide mt-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-sand">
            <Image
              src={property.image}
              alt={property.name}
              fill
              priority
              quality={95}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-muted">{property.summary}</p>
            <ul className="mt-8 space-y-3">
              {property.highlights.map((item) => (
                <li
                  key={item}
                  className="border-t border-line pt-3 text-sm text-navy"
                >
                  {item}
                </li>
              ))}
            </ul>
            {property.gallery.length > 1 ? (
              <div className="mt-12 grid gap-3 sm:grid-cols-2">
                {property.gallery.slice(1).map((src) => (
                  <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sand">
                    <Image
                      src={src}
                      alt=""
                      fill
                      quality={95}
                      className="object-cover object-center"
                      sizes="40vw"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="sticky top-28 border border-line bg-ice p-8">
              <p className="eyebrow">Details</p>
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-muted">Location</dt>
                  <dd className="text-right text-navy">{property.location}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-muted">Area</dt>
                  <dd className="text-right text-navy">{property.area}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-muted">Type</dt>
                  <dd className="text-right text-navy">{property.type}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-muted">Size</dt>
                  <dd className="text-right text-navy">{property.size}</dd>
                </div>
                {property.beds ? (
                  <div className="flex justify-between gap-4 border-b border-line pb-3">
                    <dt className="text-muted">Layout</dt>
                    <dd className="text-right text-navy">{property.beds}</dd>
                  </div>
                ) : null}
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Price</dt>
                  <dd className="text-right text-navy">{property.price}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-3">
                <ButtonLink href={whatsappLink(message)} variant="navy" external>
                  WhatsApp this estate
                </ButtonLink>
                <ButtonLink href={site.phoneHref} variant="ghost" external>
                  Call {site.phone}
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length ? (
        <section className="border-t border-line py-20">
          <div className="container-page">
            <h2 className="display text-3xl text-navy">Other {property.type.toLowerCase()}</h2>
            <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <PropertyCard key={item.slug} property={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
