import { Footer } from "@/components/shared/footer";
import { CTA } from "@/modules/home/cta";
import { Features } from "@/modules/home/features";
import { Hero } from "@/modules/home/hero";
import { Perks } from "@/modules/home/perks";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Perks />
      <CTA />
      <Footer />
    </div>
  );
}
