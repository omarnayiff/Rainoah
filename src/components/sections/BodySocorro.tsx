import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import StaggerList from "@/components/ui/StaggerList";
import GradientOrb from "@/components/ui/GradientOrb";
import { BASE_PATH, PRODUCT } from "@/lib/config";

const DORES = [
  "Dor nas costas após o trabalho?",
  "Pescoço travado ao final do dia?",
  "Pernas cansadas e pesadas?",
  "Recuperação lenta após academia?",
  "Tensão acumulada nos ombros?",
];

export default function BodySocorro() {
  return (
    <section className="noise-overlay relative isolate overflow-hidden py-20 sm:py-28">
      <img
        src={`${BASE_PATH}/images/socorro.jpg`}
        alt="Mulher sentada na cama segurando o ombro com dor"
        className="absolute inset-0 -z-20 h-[130%] w-full object-cover object-[28%_30%]"
      />
      <div className="absolute inset-0 -z-10 bg-black/20" aria-hidden />

      {/* Decorative orb behind card */}
      <GradientOrb color="blue" size={360} top="20%" right="-5%" delay={0.5} />

      <Container>
        <div className="flex justify-end">
          <AnimateOnScroll animation="blur">
            <div className="glass-card gradient-border w-full rounded-3xl bg-brand-card/60 p-7 sm:p-10 lg:max-w-xl">
              <h2 className="text-center text-3xl font-normal text-white sm:text-4xl">
                Seu corpo está
                <br />
                pedindo socorro?
              </h2>

              <StaggerList className="mx-auto mt-6 w-fit space-y-4">
                {DORES.map((dor) => (
                  <li key={dor} className="flex items-center gap-4">
                    <img
                      src={`${BASE_PATH}/icons/check-seal-blue.png`}
                      alt=""
                      aria-hidden
                      className="h-7 w-7 shrink-0"
                    />
                    <span className="text-sm font-light text-white/90 sm:text-base">
                      {dor}
                    </span>
                  </li>
                ))}
              </StaggerList>

              <p className="mt-6 text-center text-xs font-normal uppercase tracking-wider text-white/70">
                Seu corpo precisa de recuperação.
              </p>

              <div className="mt-7 text-center">
                <CtaButton variant="orange" className="w-full sm:w-auto">
                  Experimentar a {PRODUCT.name}
                </CtaButton>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
