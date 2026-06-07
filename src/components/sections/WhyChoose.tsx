import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import { CheckCircle, Play } from "@/components/icons";
import { PRODUCT } from "@/lib/config";

const FEATURES = [
  "Portátil e ultraleve",
  "Carregamento USB",
  "Bateria recarregável",
  "Fácil de transportar",
  "Silencioso",
  "Pronto para usar em qualquer lugar",
  "Garantia de 12 meses",
  "Desenvolvida para o dia a dia",
];

export default function WhyChoose() {
  return (
    <section className="bg-gradient-to-b from-brand-blue to-brand-navy py-14 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Vídeo — TODO: asset (capa = foto do vídeo; aguardando vídeo final) */}
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-brand-navy/60 ring-1 ring-white/10">
            <div className="absolute inset-0 grid place-items-center">
              <div className="flex flex-col items-center gap-3 text-white/80">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur">
                  <Play className="ml-1 h-7 w-7 text-white" />
                </span>
                <span className="text-xs font-medium uppercase tracking-wider">
                  Vídeo em breve
                </span>
              </div>
            </div>
          </div>

          {/* Texto + lista */}
          <div>
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[2.25rem]">
              Por que tantas pessoas estão escolhendo a {PRODUCT.name}?
            </h2>

            <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-brand-sky" />
                  <span className="text-sm text-white/90 sm:text-base">{f}</span>
                </li>
              ))}
            </ul>

            <CtaButton variant="orange" className="mt-9 w-full sm:w-auto">
              Quero garantir a minha
            </CtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
