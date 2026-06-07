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

        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:items-center lg:gap-6">
          {/* Antes (coral) */}
          <div className="relative rounded-3xl bg-accent-coral px-6 pb-5 pt-7 shadow-card">
            <span className="absolute -left-3 -top-4 grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-md">
              <img src="/icons/x-red.png" alt="" aria-hidden className="h-7 w-7" />
            </span>
            <ul className="divide-y divide-white/25">
              {PROBLEMAS.map((p) => (
                <li key={p} className="py-3 text-sm font-medium text-white sm:text-base">
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Espaço central que revela a foto (desktop) */}
          <div className="hidden lg:block lg:min-h-[240px]" aria-hidden />

          {/* Depois (azul) */}
          <div className="relative rounded-3xl bg-brand-cardlight px-6 pb-5 pt-7 shadow-card">
            <span className="absolute -right-3 -top-4 grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-md">
              <img
                src="/icons/check-seal-green.png"
                alt=""
                aria-hidden
                className="h-8 w-8"
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

        <div className="mt-10 flex justify-center">
          <CtaButton variant="navy">Quero esses resultados</CtaButton>
        </div>
      </Container>
    </section>
  );
}
