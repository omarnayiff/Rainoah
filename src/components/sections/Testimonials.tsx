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
    el.scrollBy({ left: el.clientWidth * 0.85 * dir, behavior: "smooth" });
  };

  return (
    <section className="bg-mist py-16 sm:py-20">
      <Container>
        <h2 className="text-center text-2xl font-normal uppercase tracking-wide text-brand-deep sm:text-3xl">
          Quem usa, <span className="font-extrabold">recomenda</span>
        </h2>

        <div className="relative mt-10">
          {/* Botão anterior */}
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Depoimento anterior"
            className="absolute -left-1 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black text-white shadow-md transition-transform hover:scale-105 lg:-left-5"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
          </button>

          {/* Trilho */}
          <ul
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 py-2"
            aria-label="Depoimentos de clientes"
          >
            {DEPOIMENTOS.map((d) => (
              <li
                key={d.nome}
                className="flex h-[454px] w-[86vw] max-w-[400px] shrink-0 snap-start flex-col rounded-2xl bg-white p-7 shadow-card sm:w-[400px]"
              >
                <div className="flex items-center gap-3">
                  <UserAvatar className="h-12 w-12 shrink-0 text-brand-blue" />
                  <div className="flex-1">
                    <p className="font-semibold text-ink">{d.nome}</p>
                    <div className="flex items-center gap-0.5 text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4" />
                      ))}
                    </div>
                  </div>
                  <img
                    src="/icons/google.png"
                    alt="Avaliação no Google"
                    className="h-6 w-6 shrink-0"
                  />
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-ink/80">
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
            className="absolute -right-1 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black text-white shadow-md transition-transform hover:scale-105 lg:-right-5"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton variant="orange">Quero testar também</CtaButton>
        </div>
      </Container>
    </section>
  );
}
