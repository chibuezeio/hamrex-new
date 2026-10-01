"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PropertyCard } from "@/components/PropertyCard";
import {
  budgets,
  communities,
  filterProperties,
  propertyTypes,
} from "@/lib/filters";

const typeFilters = ["All", ...propertyTypes] as const;

export function PropertiesExplorer() {
  const router = useRouter();
  const params = useSearchParams();

  const area = params.get("area") ?? "";
  const type = params.get("type") ?? "";
  const budget = params.get("budget") ?? "";

  const list = useMemo(
    () => filterProperties({ area, type, budget }),
    [area, type, budget]
  );

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    const query = next.toString();
    router.replace(query ? `/properties?${query}` : "/properties", {
      scroll: false,
    });
  };

  const active = Boolean(area || type || budget);

  return (
    <section className="pb-28">
      <div className="container-page">
        <div className="flex flex-wrap items-center gap-2">
          {typeFilters.map((item) => {
            const value = item === "All" ? "" : item;
            const selected = type === value;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setParam("type", value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selected
                    ? "bg-navy text-white"
                    : "bg-ice text-navy hover:bg-blue hover:text-white"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-end gap-x-8 gap-y-4">
          <label className="block">
            <span className="block text-[0.65rem] font-semibold tracking-[0.14em] text-blue uppercase">
              Location
            </span>
            <select
              value={area}
              onChange={(event) => setParam("area", event.target.value)}
              className="mt-1.5 cursor-pointer rounded-lg border border-line bg-white px-3 py-2 text-sm font-medium text-navy"
            >
              <option value="">All locations</option>
              {communities.map((community) => (
                <option key={community} value={community}>
                  {community}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="block text-[0.65rem] font-semibold tracking-[0.14em] text-blue uppercase">
              Budget
            </span>
            <select
              value={budget}
              onChange={(event) => setParam("budget", event.target.value)}
              className="mt-1.5 cursor-pointer rounded-lg border border-line bg-white px-3 py-2 text-sm font-medium text-navy"
            >
              <option value="">Any budget</option>
              {budgets.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          {active && (
            <button
              type="button"
              onClick={() => router.replace("/properties", { scroll: false })}
              className="pb-2 text-sm font-medium text-muted underline decoration-line underline-offset-4 hover:text-navy"
            >
              Clear filters
            </button>
          )}
        </div>

        <p className="mt-6 text-sm text-muted">
          {list.length} {list.length === 1 ? "listing" : "listings"}
        </p>

        {list.length === 0 ? (
          <div className="mt-10 border border-line bg-ice px-6 py-14 text-center">
            <p className="font-medium text-navy">
              No estates match that combination yet.
            </p>
            <p className="mt-2 text-sm text-muted">
              Try a wider budget, or clear the filters to see all 21 listings.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
