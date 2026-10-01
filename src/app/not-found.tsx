import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-white px-6 pt-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-4xl text-navy">This plot is empty.</h1>
      <p className="mt-4 max-w-md text-muted">
        The page does not exist. The land still does.
      </p>
      <div className="mt-8">
        <ButtonLink href="/" variant="navy">
          Back home
        </ButtonLink>
      </div>
    </section>
  );
}
