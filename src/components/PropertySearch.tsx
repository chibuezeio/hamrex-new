"use client";

import { useRouter } from "next/navigation";
import type { FormEvent, ReactNode } from "react";
import { budgets, communities, propertyTypes } from "@/lib/filters";

const fieldNames = ["area", "type", "budget"] as const;

function Field({
  label,
  name,
  defaultValue,
  children,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  children: ReactNode;
}) {
  return (
    <label className="block flex-1 px-4 py-3 sm:px-5">
      <span className="block text-[0.65rem] font-semibold tracking-[0.14em] text-blue uppercase">
        {label}
      </span>
      <span className="relative mt-1.5 block">
        <select
          name={name}
          defaultValue={defaultValue}
          className="w-full cursor-pointer appearance-none truncate bg-transparent pr-7 text-sm font-medium text-navy outline-none"
        >
          {children}
        </select>
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-0 h-4 w-4 -translate-y-1/2 text-blue"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5.5 8l4.5 4.5L14.5 8" />
        </svg>
      </span>
    </label>
  );
}

export function PropertySearch({
  initial = {},
}: {
  initial?: { area?: string; type?: string; budget?: string };
}) {
  const router = useRouter();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const params = new URLSearchParams();
    for (const name of fieldNames) {
      const value = data.get(name);
      if (value) params.set(name, String(value));
    }
    const query = params.toString();
    router.push(query ? `/properties?${query}` : "/properties");
  }

  return (
    <form
      action="/properties"
      onSubmit={onSubmit}
      className="rounded-2xl border border-line bg-white p-1.5 shadow-[0_24px_60px_-30px_rgba(4,30,58,0.45)] sm:flex sm:items-stretch sm:p-2"
    >
      <Field label="Location" name="area" defaultValue={initial.area}>
        <option value="">All locations</option>
        {communities.map((community) => (
          <option key={community} value={community}>
            {community}
          </option>
        ))}
      </Field>

      <span className="mx-4 block h-px bg-line sm:mx-0 sm:h-auto sm:w-px" />

      <Field label="Type" name="type" defaultValue={initial.type}>
        <option value="">Any type</option>
        {propertyTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </Field>

      <span className="mx-4 block h-px bg-line sm:mx-0 sm:h-auto sm:w-px" />

      <Field label="Budget" name="budget" defaultValue={initial.budget}>
        <option value="">Any budget</option>
        {budgets.map((budget) => (
          <option key={budget.id} value={budget.id}>
            {budget.label}
          </option>
        ))}
      </Field>

      <button
        type="submit"
        className="mt-1.5 w-full rounded-xl bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-2 sm:mt-0 sm:w-auto sm:self-stretch"
      >
        Search estates
      </button>
    </form>
  );
}
