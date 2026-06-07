import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";

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
      {/* Foto de fundo, sem overlay */}
      <img
        src="/images/resultados.jpg"
        alt="Mulher sorrindo segurando a massageadora Powerflex GO"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />

      <Container>
        <h2 className="text-center text-2xl font-bold uppercase tracking-wide text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] sm:text-3xl lg:text-4xl">
          Resultados que você pode sentir
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:items-center lg:gap-6">
          {/* Antes (coral) */}
          <div className="relative rounded-3xl bg-accent-coral/85 px-6 pb-5 pt-8 shadow-card backdrop-blur-sm">
            <span className="absolute -left-4 -top-5 grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-md">
              <img src="/icons/x-red.png" alt="" aria-hidden className="h-9 w-9" />
            </span>
            <ul className="divide-y divide-white/25">
              {PROBLEMAS.map((p) => (
                <li key={p} className="py-3 text-sm font-medium text-white sm:text-base">
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Botão bem no meio das duas seções */}
          <div className="flex items-center justify-center">
            <CtaButton variant="navy">Quero esses resultados</CtaButton>
          </div>

          {/* Depois (azul) */}
          <div className="relative rounded-3xl bg-brand-cardlight/85 px-6 pb-5 pt-8 shadow-card backdrop-blur-sm">
            <span className="absolute -left-4 -top-5 grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-md">
              <img
                src="/icons/check-seal-green.png"
                alt=""
                aria-hidden
                className="h-10 w-10"
              />
            </span>
            <ul className="divide-y divide-white/25">
              {BENEFICIOS.map((b) => (
                <li key={b} className="py-3 text-sm font-medium text-white sm:text-base">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
