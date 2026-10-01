import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { Intro } from "@/components/home/Intro";
import { Estates } from "@/components/home/Estates";
import { OnTheGround } from "@/components/home/OnTheGround";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <Estates />
      <OnTheGround />
      <Process />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}
