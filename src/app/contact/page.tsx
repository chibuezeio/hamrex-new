import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free Hamrex site inspection in Port Harcourt. Call, WhatsApp, or visit 124 NTA Road, Mgbuoba.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy pt-36 pb-16 text-white">
        <div className="container-page">
          <p className="eyebrow text-blue-2">Contact</p>
          <h1 className="display mt-4 max-w-3xl text-3xl sm:text-4xl">
            Come to Mgbuoba, or we will come to the land.
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display text-3xl text-navy">Visit</h2>
            <p className="mt-5 max-w-sm leading-relaxed text-muted">
              {site.address}
            </p>
            <div className="mt-8 space-y-3 text-navy">
              <p>
                <a href={site.phoneHref} className="hover:text-blue">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-blue">
                  {site.email}
                </a>
              </p>
              <p>
                <a
                  href={site.social.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue"
                >
                  WhatsApp {site.whatsapp}
                </a>
              </p>
            </div>
            <p className="mt-10 text-sm text-muted">
              Inspections are free. Bring a date, an estate, and the amount you
              can start with.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="pb-0">
        <iframe
          title="Hamrex Properties office map"
          src={site.mapsUrl}
          className="h-[420px] w-full border-0 grayscale"
          loading="lazy"
        />
      </section>
    </>
  );
}
