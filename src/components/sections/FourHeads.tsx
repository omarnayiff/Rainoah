import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import GradientOrb from "@/components/ui/GradientOrb";
import { BASE_PATH } from "@/lib/config";

const CABECAS = [
  { nome: "Cabeça em U", desc: "Ideal para pescoço e região cervical." },
  { nome: "Cabeça Esférica", desc: "Perfeita para costas, coxas, quadris e panturrilhas." },
  { nome: "Cabeça Cilíndrica", desc: "Indicada para pontos específicos e articulações." },
  { nome: "Cabeça Plana", desc: "Massagem uniforme para qualquer região do corpo." },
];

export default function FourHeads() {
  return (
    <section className="noise-overlay relative overflow-hidden bg-brand-deep py-14 sm:py-20">
      {/* Decorative orbs */}
      <GradientOrb color="blue" size={300} top="-10%" left="-8%" delay={0} />
      <GradientOrb color="sky" size={220} bottom="-5%" right="-6%" delay={1.5} />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <AnimateOnScroll animation="fade-left">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                4 Cabeças para
                <br className="hidden sm:block" /> todo o corpo
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" delay={100}>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-white/70">
                Um aparelho. Diversas possibilidades.
              </p>
            </AnimateOnScroll>

            <ul className="mt-7 space-y-4">
              {CABECAS.map((c, i) => (
                <AnimateOnScroll key={c.nome} animation="fade-left" delay={200 + i * 100}>
                  <li className="flex items-start gap-3">
                    <img
                      src={`${BASE_PATH}/icons/check-seal-blue.png`}
                      alt=""
                      aria-hidden
                      className="mt-0.5 h-7 w-7 shrink-0"
                    />
                    <span className="text-sm text-white/90 sm:text-base">
                      <span className="font-semibold text-white">{c.nome}</span>{" "}
                      {c.desc}
                    </span>
                  </li>
                </AnimateOnScroll>
              ))}
            </ul>

            <AnimateOnScroll animation="fade-left" delay={200 + CABECAS.length * 100 + 100}>
              <CtaButton variant="blue" className="mt-9 w-full sm:w-auto">
                Quero garantir a minha
              </CtaButton>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="fade-right">
            <div className="hover-lift gradient-border rounded-3xl bg-white p-4 shadow-card sm:p-6">
              <img
                src={`${BASE_PATH}/images/produto.jpg`}
                alt="Massageadora Powerflex GO na cor rosa com as quatro cabeças intercambiáveis"
                className="w-full rounded-2xl"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
