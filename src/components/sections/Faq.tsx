"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import { ChevronDown } from "@/components/icons";
import { SUPPORT_URL, PRODUCT } from "@/lib/config";

// Perguntas vindas do print. Respostas redigidas (revisar/ajustar conforme o produto).
const FAQS = [
  {
    q: "Quanto tempo dura a bateria?",
    a: "A bateria recarregável rende várias sessões com uma única carga — o suficiente para vários dias de uso no dia a dia.",
  },
  {
    q: "Quanto tempo leva para carregar?",
    a: "A recarga é rápida e feita via cabo USB, então dá para carregar em qualquer lugar: em casa, no trabalho ou na academia.",
  },
  {
    q: "Posso usar todos os dias?",
    a: `Sim. A ${PRODUCT.name} foi desenvolvida para uso diário, ajudando na recuperação muscular e no alívio de tensões.`,
  },
  {
    q: "Ela faz muito barulho?",
    a: "Não. O motor é silencioso, ideal para usar em qualquer ambiente sem incomodar quem está por perto.",
  },
  {
    q: "Tem garantia?",
    a: "Sim, todos os aparelhos contam com garantia de 12 meses.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-brand-deep py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Coluna texto */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Perguntas
              <br />
              Frequentes
            </h2>
            <p className="mt-6 max-w-sm text-sm text-white/80 sm:text-base">
              Não encontrou sua dúvida aqui? Tente falar com nosso suporte.
            </p>
            <CtaButton
              variant="outline"
              arrow="outward"
              href={SUPPORT_URL}
              className="mt-7 rounded-full"
            >
              Falar com suporte
            </CtaButton>
          </div>

          {/* Coluna acordeão */}
          <div className="space-y-3">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-2xl bg-ink"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center gap-4 px-4 py-4 text-left"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-toggle">
                      <ChevronDown
                        className={`h-5 w-5 text-white transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                    <span className="text-sm font-medium text-white/90 sm:text-base">
                      {item.q}
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    hidden={!isOpen}
                    className="px-5 pb-5 pl-[4.25rem] text-sm leading-relaxed text-white/70"
                  >
                    {item.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
