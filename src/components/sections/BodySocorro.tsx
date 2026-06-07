import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
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
    <section className="relative isolate overflow-hidden py-14 sm:py-20">
      {/* Foto de fundo inteira (full-bleed) */}
      <img
        src="/images/socorro.jpg"
        alt="Mulher sentada na cama segurando o ombro com dor"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[28%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-black/20" aria-hidden />

      <Container>
        <div className="flex justify-end">
          {/* Card semi-transparente por cima da foto */}
          <div className="w-full rounded-3xl bg-brand-card/85 p-7 ring-1 ring-white/10 backdrop-blur-md sm:p-10 lg:max-w-xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Seu corpo está pedindo socorro?
            </h2>

            <ul className="mt-6 space-y-3">
              {DORES.map((dor) => (
                <li key={dor} className="flex items-start gap-3">
                  <img
                    src="/icons/check-seal-blue.png"
                    alt=""
                    aria-hidden
                    className="mt-0.5 h-5 w-5 shrink-0"
                  />
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
