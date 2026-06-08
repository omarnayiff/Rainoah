import Container from "@/components/ui/Container";
import Logo from "@/components/Logo";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import GradientOrb from "@/components/ui/GradientOrb";
import { BASE_PATH, PRODUCT } from "@/lib/config";

export default function Hero() {
  return (
    <section className="noise-overlay relative isolate flex min-h-[88vh] flex-col overflow-hidden">
      <img
        src={`${BASE_PATH}/images/hero.jpg`}
        alt="Mulher relaxando ao usar a massageadora Powerflex GO no pescoço"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[72%_center]"
      />

      {/* Dual gradient overlays for depth */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/30 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/30 to-transparent"
        aria-hidden
      />

      <div className="relative flex flex-1 items-center py-16">
        <Container>
          <AnimateOnScroll animation="fade-up">
            <Logo size={52} className="text-white" />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={200}>
            <h1 className="mt-8 max-w-2xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.5rem]">
              Se livre de uma vez por todas{" "}
              <span className="text-brand-sky drop-shadow-[0_0_15px_rgba(59,158,232,0.4)]">
                dessa dor.
              </span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
              Alivie tensões, relaxe músculos cansados e recupere seu corpo em
              poucos minutos com a {PRODUCT.name}.
            </p>
          </AnimateOnScroll>
        </Container>
      </div>
    </section>
  );
}
