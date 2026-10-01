"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ButtonLink } from "./ButtonLink";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";
import { gsap, useGSAP } from "@/lib/gsap";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const bar = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        bar.current,
        { y: -16 },
        { y: 0, duration: 0.8, ease: "power3.out" }
      );
    },
    { scope: bar }
  );

  return (
    <>
      <header ref={bar} className="pointer-events-none fixed top-0 left-0 right-0 z-50">
        <div className="pointer-events-auto mx-auto mt-3 w-[min(1180px,calc(100%-1.25rem))]">
          <nav className="flex h-[4.25rem] items-center justify-between rounded-full border border-blue/15 bg-white/95 px-3 shadow-[0_10px_40px_rgba(22,119,212,0.12)] backdrop-blur-xl sm:px-5">
            <Logo />
            <div className="hidden items-center gap-7 xl:flex">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      active ? "text-blue" : "text-navy/70 hover:text-navy"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center gap-2">
              <ButtonLink
                href="/contact"
                variant="blue"
                className="hidden sm:inline-flex !py-2.5 !px-5"
              >
                Book inspection
              </ButtonLink>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full text-navy xl:hidden"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] bg-navy text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden",
          open ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex h-[4.25rem] items-center justify-between px-5 pt-3">
          <span className="text-lg font-semibold">Hamrex</span>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>
        <div className="flex flex-col gap-2 px-6 pt-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-4xl font-semibold tracking-tight"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 text-[0.8rem] uppercase tracking-[0.2em] text-blue-2"
          >
            Book a site inspection
          </Link>
        </div>
      </div>
    </>
  );
}
