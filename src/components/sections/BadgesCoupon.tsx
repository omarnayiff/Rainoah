import Container from "@/components/ui/Container";
import { COUPON_CODE, COUPON_DISCOUNT } from "@/lib/config";

const SELOS = [
  "Alívio imediato",
  "Compacta e leve",
  "Carregamento USB",
  "Frete Grátis",
  "Garantia de 12 Meses",
];

export default function BadgesCoupon() {
  return (
    <section className="bg-brand-blue py-12 sm:py-14">
      <Container>
        <ul className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4">
          {SELOS.map((selo) => (
            <li
              key={selo}
              className="flex items-center gap-2.5 rounded-xl bg-brand-deep/50 px-4 py-3 ring-1 ring-white/10"
            >
              <img
                src="/icons/check-seal-blue.png"
                alt=""
                aria-hidden
                className="h-7 w-7 shrink-0"
              />
              <span className="text-sm font-medium text-white sm:text-base">
                {selo}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-9 text-center text-lg font-medium text-white sm:text-2xl">
          Use o cupom <span className="font-extrabold">{COUPON_CODE}</span> e
          ganhe {COUPON_DISCOUNT}.
        </p>
      </Container>
    </section>
  );
}
