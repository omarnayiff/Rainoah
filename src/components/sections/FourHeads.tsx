import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import { CheckCircle } from "@/components/icons";

const CABECAS = [
  { nome: "Cabeça em U", desc: "Ideal para pescoço e região cervical." },
  {
    nome: "Cabeça Esférica",
    desc: "Perfeita para costas, coxas, quadris e panturrilhas.",
  },
  {
    nome: "Cabeça Cilíndrica",
    desc: "Indicada para pontos específicos e articulações.",
  },
  {
    nome: "Cabeça Plana",
    desc: "Massagem uniforme para qualquer região do corpo.",
  },
];

export default function FourHeads() {
  return (
    <section className="bg-brand-deep py-14 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Texto + lista */}
          <div>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              4 Cabeças para
              <br className="hidden sm:block" /> todo o corpo
            </h2>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-white/70">
              Um aparelho. Diversas possibilidades.
            </p>

            <ul className="mt-7 space-y-4">
              {CABECAS.map((c) => (
                <li key={c.nome} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-sky" />
                  <span className="text-sm text-white/90 sm:text-base">
                    <span className="font-semibold text-white">{c.nome}</span>{" "}
                    {c.desc}
                  </span>
                </li>
              ))}
            </ul>

            <CtaButton variant="blue" className="mt-9 w-full sm:w-auto">
              Quero garantir a minha
            </CtaButton>
          </div>

          {/* Foto do produto — TODO: asset (gun rosa + 4 cabeças) */}
          <div className="rounded-3xl bg-white p-4 shadow-card">
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border-2 border-dashed border-brand-blue/25 bg-brand-blue/5 text-center">
              <span className="px-6 text-sm font-medium text-brand-deep/70">
                {/* TODO: asset — substituir por /images/produto.png (gun rosa + 4 cabeças) */}
                Foto do produto
                <br />
                <span className="text-xs text-brand-deep/50">
                  (asset pendente)
                </span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
