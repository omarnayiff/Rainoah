import Container from "@/components/ui/Container";
import { Truck, TagPercent, ShieldCheck, CreditCard } from "@/components/icons";
import { COUPON_CODE } from "@/lib/config";

const ITENS = [
  { Icon: Truck, label: "Frete Grátis" },
  { Icon: TagPercent, label: `10% OFF com o cupom ${COUPON_CODE}` },
  { Icon: ShieldCheck, label: "Garantia de 12 meses" },
  { Icon: CreditCard, label: "Parcelamento facilitado 12X SEM JUROS" },
];

export default function Guarantees() {
  return (
    <section className="bg-brand-blue py-16 sm:py-20">
      <Container>
        <h2 className="text-center text-xl font-bold uppercase tracking-wide text-white sm:text-2xl lg:text-3xl">
          Seu corpo merece mais conforto todos os dias
        </h2>

        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {ITENS.map(({ Icon, label }) => (
            <li key={label} className="flex flex-col items-center text-center">
              <Icon className="h-12 w-12 text-brand-sky" />
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
