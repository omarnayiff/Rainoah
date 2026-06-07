import Container from "@/components/ui/Container";
import { COUPON_CODE } from "@/lib/config";

const ITENS = [
  { icon: "/icons/g-frete.png", label: "Frete Grátis" },
  { icon: "/icons/g-cupom.png", label: `10% OFF com o cupom ${COUPON_CODE}` },
  { icon: "/icons/g-garantia.png", label: "Garantia de 12 meses" },
  { icon: "/icons/g-parcelamento.png", label: "Parcelamento facilitado 12X SEM JUROS" },
];

export default function Guarantees() {
  return (
    <section className="bg-brand-blue py-16 sm:py-20">
      <Container>
        <h2 className="text-center text-xl font-normal uppercase tracking-wide text-white sm:text-2xl lg:text-3xl">
          Seu corpo merece mais conforto todos os dias
        </h2>

        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {ITENS.map(({ icon, label }) => (
            <li key={label} className="flex flex-col items-center text-center">
              <img
                src={icon}
                alt=""
                aria-hidden
                className="h-14 w-14 object-contain"
              />
              <span className="mt-4 max-w-[14rem] text-sm text-white sm:text-base">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
