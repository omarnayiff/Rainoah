import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import { CheckCircle } from "@/components/icons";
import { PRODUCT } from "@/lib/config";

const DORES = [
  "Dor nas costas após o trabalho?",
  "Pescoço travado ao final do dia?",
  "Pernas cansadas e pesadas?",
  "Recuperação lenta após academia?",
  "Tensão acumulada nos ombros?",
];

export default function BodySocorro() {
  return (
    <section className="bg-brand-blue py-14 sm:py-20">
      <Container>
        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Foto */}
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/images/socorro.jpg"
              alt="Mulher sentada na cama segurando o ombro com dor"
              className="h-64 w-full object-cover sm:h-80 lg:h-full"
            />
          </div>

          {/* Card */}
          <div className="rounded-3xl bg-brand-card p-7 sm:p-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Seu corpo está pedindo socorro?
            </h2>

            <ul className="mt-6 space-y-3">
              {DORES.map((dor) => (
                <li key={dor} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-sky" />
                  <span className="text-sm text-white/90 sm:text-base">{dor}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/70">
              Seu corpo precisa de recuperação.
            </p>

            <CtaButton variant="orange" className="mt-7 w-full sm:w-auto">
              Experimentar a {PRODUCT.name}
            </CtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
