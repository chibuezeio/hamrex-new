import type { Metadata } from "next";
import { Suspense } from "react";
import { PropertiesExplorer } from "@/components/PropertiesExplorer";

export const metadata: Metadata = {
  title: "Estates",
  description:
    "Land banking, buy-and-build plots, and homes across Port Harcourt, Isiokpo, Elele, Igwuruta, and Oyigbo. From ₦900,000.",
};

export default function PropertiesPage() {
  return (
    <>
      <section className="bg-navy pt-36 pb-16 text-white">
        <div className="container-page">
          <p className="eyebrow text-blue-2">Port Harcourt & Rivers State</p>
          <h1 className="display mt-4 max-w-4xl text-3xl sm:text-4xl">
            Twenty-one ways to own.
          </h1>
          <p className="mt-6 max-w-xl text-white/65">
            Land banking, buy-and-build, and finished homes. Prices as listed.
            Come and walk the ones that interest you.
          </p>
        </div>
      </section>
      <div className="pt-12">
        <Suspense fallback={null}>
          <PropertiesExplorer />
        </Suspense>
      </div>
    </>
  );
}
