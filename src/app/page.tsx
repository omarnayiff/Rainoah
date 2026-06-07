import Hero from "@/components/sections/Hero";
import BadgesCoupon from "@/components/sections/BadgesCoupon";
import BodySocorro from "@/components/sections/BodySocorro";
import FourHeads from "@/components/sections/FourHeads";
import Results from "@/components/sections/Results";
import WhyChoose from "@/components/sections/WhyChoose";
import Testimonials from "@/components/sections/Testimonials";
import Guarantees from "@/components/sections/Guarantees";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <BadgesCoupon />
      <BodySocorro />
      <FourHeads />
      <Results />
      <WhyChoose />
      <Testimonials />
      <Guarantees />
      <Faq />
      <Footer />
    </main>
  );
}
