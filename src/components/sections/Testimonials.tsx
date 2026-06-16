"use client";

import { useRef } from "react";
import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { BASE_PATH } from "@/lib/config";
import { Star, ChevronRight } from "@/components/icons";

const DEPOIMENTOS = [
  {
    nome: "Marcelo",
    img: "profile-marcelo.jpg",
    texto:
      "Levo para todos os lugares. Uso após os treinos e sinto muita diferença na recuperação.",
  },
  {
    nome: "Milla",
    img: "profile-milla.jpg",
    texto:
      "Chego do trabalho com as costas travadas e ela ajuda muito a aliviar a tensão.",
  },
  {
    nome: "Dandara",
    img: "profile-dandara.jpg",
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
    <section className="noise-overlay bg-mist py-16 sm:py-20">
      <Container>
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-center text-2xl font-normal uppercase tracking-wide text-brand-deep sm:text-3xl">
            Quem usa, <span className="font-extrabold">recomenda</span>
          </h2>
        </AnimateOnScroll>
      </Container>

      <div className="relative mx-auto mt-10 max-w-[1460px] px-6">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Depoimento anterior"
          className="absolute -left-1 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/80 text-white shadow-md backdrop-blur-sm transition-transform hover:scale-110 lg:left-0"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
        </button>

        <ul
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory justify-start gap-6 overflow-x-auto scroll-smooth px-1 py-2 lg:justify-center"
          aria-label="Depoimentos de clientes"
        >
          {DEPOIMENTOS.map((d, i) => (
            <AnimateOnScroll key={d.nome} animation="fade-up" delay={i * 120}>
              <li className="gradient-border hover-lift flex h-[360px] w-[86vw] max-w-[454px] shrink-0 snap-start flex-col rounded-2xl bg-white p-8 shadow-card sm:w-[454px]">
                <div className="flex items-center gap-4">
                  <img
                    src={`${BASE_PATH}/images/${d.img}`}
                    alt={d.nome}
                    className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-brand-blue/20"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-xl font-semibold text-ink">
                        {d.nome}
                      </p>
                      <img
                        src={`${BASE_PATH}/icons/google.png`}
                        alt="Avaliação no Google"
                        className="h-9 w-9"
                      />
                    </div>
                    <div className="mt-1 flex items-center gap-0.5 text-yellow-400">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-5 w-5" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-ink/80">
                  {d.texto}
                </p>
              </li>
            </AnimateOnScroll>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Próximo depoimento"
          className="absolute -right-1 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/80 text-white shadow-md backdrop-blur-sm transition-transform hover:scale-110 lg:right-0"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <Container>
        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="mt-10 flex justify-center">
            <CtaButton variant="orange">Quero testar também</CtaButton>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
