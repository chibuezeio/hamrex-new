"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 shrink-0", className)}
      aria-label="Hamrex Properties home"
    >
      <span
        className={cn(
          "relative block h-9 w-[7.4rem] sm:h-10 sm:w-[8.4rem]",
          onDark && "rounded-md bg-white px-2 py-1"
        )}
      >
        <Image
          src="/images/logo.png"
          alt="Hamrex Properties"
          fill
          className="object-contain object-left"
          sizes="140px"
          priority
        />
      </span>
    </Link>
  );
}
