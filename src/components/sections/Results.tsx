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
    <section className="relative z-20 min-h-screen py-16 sm:py-24">
      {/* Foto de fundo, sem overlay (imagem em destaque) */}
      <img
        src="/images/resultados.jpg"
        alt="Mulher sorrindo segurando a massageadora Powerflex GO"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[92%_0%]"
      />

      <Container>
        <h2 className="text-center text-2xl font-bold uppercase tracking-wide text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] sm:text-3xl lg:text-4xl">
          Resultados que você pode sentir
        </h2>

        <div className="mt-14 grid gap-24 lg:grid-cols-3 lg:items-center lg:gap-24">
          {/* Antes (coral, translúcido) */}
          <div className="relative rounded-3xl bg-accent-coral/75 px-8 pb-6 pt-10 text-center shadow-card">
            <span className="absolute left-6 -top-5 grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-md">
              <img src="/icons/x-red.png" alt="" aria-hidden className="h-9 w-9" />
            </span>
            <ul className="divide-y divide-white/30">
              {PROBLEMAS.map((p) => (
                <li key={p} className="py-3 text-sm font-medium text-white sm:text-base">
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Espaço central que mostra a foto (desktop) */}
          <div className="hidden lg:block lg:min-h-[420px]" aria-hidden />

          {/* Depois (azul, translúcido) */}
          <div className="relative rounded-3xl bg-brand-cardlight/75 px-8 pb-6 pt-10 text-center shadow-card">
            <span className="absolute left-6 -top-5 grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-md">
              <img
                src="/icons/check-seal-green.png"
                alt=""
                aria-hidden
                className="h-10 w-10"
              />
            </span>
            <ul className="divide-y divide-white/30">
              {BENEFICIOS.map((b) => (
                <li key={b} className="py-3 text-sm font-medium text-white sm:text-base">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Botão centralizado, atravessando a linha da próxima seção */}
      <div className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2 translate-y-1/2">
        <CtaButton variant="white">Quero esses resultados</CtaButton>
      </div>
    </section>
  );
}
