import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import { DotTarget, CheckMark } from "@/components/icons";

const PROBLEMAS = [
  "Músculos tensos",
  "Dor após o trabalho",
  "Recuperação lenta",
  "Desconforto constante",
];

const BENEFICIOS = [
  "Corpo mais relaxado",
  "Menos tensão muscular",
  "Recuperação mais rápida",
  "Mais disposição para o dia",
];

export default function Results() {
  return (
    <section className="relative isolate overflow-hidden py-14 sm:py-16">
      {/* Foto de fundo (mulher sorrindo com a Powerflex GO) */}
      <img
        src="/images/resultados.jpg"
        alt="Mulher sorrindo segurando a massageadora Powerflex GO"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black/35" aria-hidden />

      <Container>
        <h2 className="text-center text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
          Resultados que você pode sentir
        </h2>

        <div className="mt-9 grid gap-4 lg:grid-cols-3 lg:items-center lg:gap-6">
          {/* Antes (coral) */}
          <ul className="space-y-3">
            {PROBLEMAS.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 rounded-xl bg-accent-coral px-4 py-3 text-white shadow-card"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/25">
                  <DotTarget className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium sm:text-base">{p}</span>
              </li>
            ))}
          </ul>

          {/* Espaço central que revela a foto (desktop) */}
          <div className="hidden lg:block lg:min-h-[260px]" aria-hidden />

          {/* Depois (azul) */}
          <ul className="space-y-3">
            {BENEFICIOS.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 rounded-xl bg-brand-cardlight px-4 py-3 text-white shadow-card"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-500">
                  <CheckMark className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium sm:text-base">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton variant="navy">Quero esses resultados</CtaButton>
        </div>
      </Container>
    </section>
  );
}
