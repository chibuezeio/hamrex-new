import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section className="bg-ice py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Clients</p>
          <h2 className="display mt-3 max-w-2xl text-3xl text-navy sm:text-4xl">
            What ownership feels like.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <blockquote className="flex h-full flex-col justify-between border-t-2 border-t-blue bg-white p-8 shadow-[0_12px_40px_rgba(22,119,212,0.08)] sm:p-10">
                <p className="text-lg leading-snug text-navy">
                  “{item.quote}”
                </p>
                <footer className="mt-10">
                  <p className="text-sm font-medium text-navy">{item.name}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue">
                    {item.role}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
