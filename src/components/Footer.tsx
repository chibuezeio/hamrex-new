import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { ButtonLink } from "./ButtonLink";
import { site, navLinks } from "@/lib/site";
import { featuredProperties } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";

function SocialIcon({
  network,
}: {
  network: "instagram" | "facebook" | "youtube";
}) {
  if (network === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (network === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4V10c0-.6.4-1 1-1Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M23 7.5s-.2-1.6-.9-2.3c-.8-.9-1.8-.9-2.2-1C16.7 4 12 4 12 4s-4.7 0-7.9.2c-.4.1-1.4.1-2.2 1C1.2 5.9 1 7.5 1 7.5S.8 9.4.8 11.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.7.2 7.7.2s4.7 0 7.9-.2c.4-.1 1.4-.1 2.2-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8ZM9.8 14.8V8.7l6.4 3.05-6.4 3.05Z" />
    </svg>
  );
}

const social = [
  { href: site.social.instagram, label: "Instagram", network: "instagram" as const },
  { href: site.social.facebook, label: "Facebook", network: "facebook" as const },
  { href: site.social.youtube, label: "YouTube", network: "youtube" as const },
];

export function Footer() {
  const featured = featuredProperties.slice(0, 4);

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue/35 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-blue-2/20 blur-3xl"
      />
      <p
        aria-hidden
        className="pointer-events-none absolute -bottom-8 right-6 select-none text-[8rem] font-semibold leading-none text-white/4 sm:text-[11rem]"
      >
        2050
      </p>

      <div className="h-1 bg-linear-to-r from-blue via-blue-2 to-blue" />

      <div className="relative border-b border-white/10">
        <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:py-12">
          <div>
            <p className="text-sm font-semibold text-blue-2">Port Harcourt · Rivers State</p>
            <p className="mt-2 max-w-lg text-2xl font-semibold tracking-tight sm:text-3xl">
              Start with ₦500,000. Walk the land first.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="white">
              Book inspection
            </ButtonLink>
            <ButtonLink
              href={whatsappLink(
                "Hello Hamrex, I would like to book a free site inspection."
              )}
              variant="ghost"
              external
              className="border-white/40 text-white hover:border-blue-2 hover:text-blue-2"
            >
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="relative container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Logo onDark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            {site.mission} Verified land in Port Harcourt and across Rivers
            State.
          </p>
          <div className="mt-6 flex gap-2">
            {social.map(({ href, label, network }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-blue-2 hover:bg-blue hover:text-white"
              >
                <SocialIcon network={network} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-2">
            Company
          </p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-2">
            Estates
          </p>
          <ul className="mt-4 space-y-2.5">
            {featured.map((property) => (
              <li key={property.slug}>
                <Link
                  href={`/properties/${property.slug}`}
                  className="group inline-flex items-center gap-1 text-sm text-white/75 transition-colors hover:text-white"
                >
                  {property.name}
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/properties"
                className="text-sm font-medium text-blue-2 hover:text-white"
              >
                All 21 listings
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-2">
            Visit
          </p>
          <ul className="mt-4 space-y-4 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-blue-2" />
              <span>{site.address}</span>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone size={16} className="shrink-0 text-blue-2" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail size={16} className="shrink-0 text-blue-2" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hamrex Properties. All rights reserved.</p>
          <p>Port Harcourt, Rivers State, Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
