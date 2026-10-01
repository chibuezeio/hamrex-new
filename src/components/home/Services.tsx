import { services } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Services() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Practice</p>
          <h2 className="display mt-3 max-w-2xl text-3xl text-navy sm:text-4xl">
            Everything land, end to end.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {services.map((service, i) => (
            <Reveal key={service.num} delay={i * 0.03}>
              <article className="grid gap-4 py-8 sm:grid-cols-12 sm:items-baseline sm:gap-8">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-blue sm:col-span-2">
                  {service.num}
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-navy sm:col-span-4">
                  {service.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-muted sm:col-span-6">
                  {service.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
