import Container from "@/components/ui/Container";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import StaggerList from "@/components/ui/StaggerList";
import GradientOrb from "@/components/ui/GradientOrb";
import { BASE_PATH, COUPON_CODE, COUPON_DISCOUNT } from "@/lib/config";

const SELOS = [
  "Alívio imediato",
  "Compacta e leve",
  "Carregamento USB",
  "Frete Grátis",
  "Garantia de 12 Meses",
];

export default function BadgesCoupon() {
  return (
    <section className="noise-overlay relative overflow-hidden bg-brand-blue py-12 sm:py-14">
      {/* Decorative orb behind content */}
      <GradientOrb color="blue" size={280} top="50%" left="50%" delay={1} />

      <Container>
        <StaggerList className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4">
          {SELOS.map((selo) => (
            <li
              key={selo}
              className="glass-card hover-lift flex items-center gap-2.5 rounded-xl bg-brand-deep/50 px-4 py-3"
            >
              <img
                src={`${BASE_PATH}/icons/check-seal-blue.png`}
                alt=""
                aria-hidden
                className="h-7 w-7 shrink-0"
              />
              <span className="text-sm font-medium text-white sm:text-base">
                {selo}
              </span>
            </li>
          ))}
        </StaggerList>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <p className="mt-9 text-center text-lg font-medium text-white sm:text-2xl">
            Use o cupom <span className="font-extrabold">{COUPON_CODE}</span> e
            ganhe {COUPON_DISCOUNT}.
          </p>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
