"use client";

import { useRef } from "react";
import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import { Star, UserAvatar, ChevronRight } from "@/components/icons";

const DEPOIMENTOS = [
  {
    nome: "Marcelo",
    texto:
      "Levo para todos os lugares. Uso após os treinos e sinto muita diferença na recuperação.",
  },
  {
    nome: "Milla",
    texto:
      "Chego do trabalho com as costas travadas e ela ajuda muito a aliviar a tensão.",
  },
  {
    nome: "Dandara",
    texto: "Compacta, prática e muito eficiente.",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: 478 * dir, behavior: "smooth" });
  };

  return (
    <section className="bg-mist py-16 sm:py-20">
      <Container>
        <h2 className="text-center text-2xl font-normal uppercase tracking-wide text-brand-deep sm:text-3xl">
          Quem usa, <span className="font-extrabold">recomenda</span>
        </h2>
      </Container>

      <div className="relative mx-auto mt-10 max-w-[1460px] px-6">
        {/* Botão anterior */}
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Depoimento anterior"
          className="absolute -left-1 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black text-white shadow-md transition-transform hover:scale-105 lg:left-0"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
        </button>

        {/* Trilho */}
        <ul
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory justify-start gap-6 overflow-x-auto scroll-smooth px-1 py-2 lg:justify-center"
          aria-label="Depoimentos de clientes"
        >
          {DEPOIMENTOS.map((d) => (
            <li
              key={d.nome}
              className="flex h-[360px] w-[86vw] max-w-[454px] shrink-0 snap-start flex-col rounded-2xl bg-white p-8 shadow-card sm:w-[454px]"
            >
              <div className="flex items-center gap-4">
                <UserAvatar className="h-20 w-20 shrink-0 text-brand-blue" />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-semibold text-ink">{d.nome}</p>
                    <img
                      src="/icons/google.png"
                      alt="Avaliação no Google"
                      className="h-9 w-9"
                    />
                  </div>
                  <div className="mt-1 flex items-center gap-0.5 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                {d.texto}
              </p>
            </li>
          ))}
        </ul>

        {/* Botão próximo */}
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Próximo depoimento"
          className="absolute -right-1 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black text-white shadow-md transition-transform hover:scale-105 lg:right-0"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <Container>
        <div className="mt-10 flex justify-center">
          <CtaButton variant="orange">Quero testar também</CtaButton>
        </div>
      </Container>
    </section>
  );
}
