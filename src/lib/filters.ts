import { properties, type Property, type PropertyType } from "@/lib/data";

export const propertyTypes: PropertyType[] = [
  "Land Banking",
  "Buy & Build",
  "House",
];

/**
 * Listings store their community in `area` as "Isiokpo, Rivers State". A few
 * records only say "Rivers State" — those have no community and are only
 * reachable from "All locations".
 */
export function communityOf(property: Property): string | null {
  const area = property.area.replace(/,?\s*Rivers State\s*$/i, "").trim();
  return area || null;
}

export const communities: string[] = [
  ...new Set(
    properties
      .map(communityOf)
      .filter((area): area is string => area !== null)
  ),
].sort((a, b) => a.localeCompare(b));

export type Budget = {
  id: string;
  label: string;
  min: number;
  max: number;
};

export const budgets: Budget[] = [
  { id: "under-2m", label: "Under ₦2M", min: 0, max: 1_999_999 },
  { id: "2m-4m", label: "₦2M – ₦4M", min: 2_000_000, max: 4_000_000 },
  { id: "4m-15m", label: "₦4M – ₦15M", min: 4_000_001, max: 15_000_000 },
  {
    id: "above-15m",
    label: "Above ₦15M",
    min: 15_000_001,
    max: Number.POSITIVE_INFINITY,
  },
];

/** "₦2.8M" -> 2800000, "₦900k" -> 900000, "From ₦15M" -> 15000000 */
export function parsePrice(price: string): number | null {
  const match = price.match(/([\d.]+)\s*([km])/i);
  if (!match) return null;
  const amount = Number(match[1]);
  if (!Number.isFinite(amount)) return null;
  return match[2].toLowerCase() === "k" ? amount * 1_000 : amount * 1_000_000;
}

export type PropertyQuery = {
  area?: string;
  type?: string;
  budget?: string;
};

export function filterProperties({ area, type, budget }: PropertyQuery) {
  const bucket = budgets.find((b) => b.id === budget);

  return properties.filter((property) => {
    if (area && communityOf(property) !== area) return false;
    if (type && property.type !== type) return false;
    if (bucket) {
      const price = parsePrice(property.price);
      if (price === null || price < bucket.min || price > bucket.max) {
        return false;
      }
    }
    return true;
  });
}
