import { process } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section className="bg-navy py-24 text-white sm:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow text-blue-2">How it works</p>
          <h2 className="display mt-3 max-w-3xl text-3xl sm:text-4xl">
            Buy today. Pay tomorrow.
          </h2>
          <p className="mt-5 max-w-xl text-white/65">
            Start with ₦500,000. Walk the land first. Then we structure a plan
            that does not punish honesty.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.06}>
              <article className="border-t-2 border-t-blue pt-6">
                <p className="text-2xl font-semibold text-blue-2">{step.num}</p>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {step.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
