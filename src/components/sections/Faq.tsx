"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import GradientOrb from "@/components/ui/GradientOrb";
import { ChevronDown } from "@/components/icons";
import { PRODUCT } from "@/lib/config";

const FAQS = [
  {
    q: "Quanto tempo dura a bateria?",
    a: "A bateria recarregável rende várias sessões com uma única carga — o suficiente para vários dias de uso no dia a dia.",
  },
  {
    q: "Quanto tempo leva para carregar?",
    a: "A pistola demora aproximadamente 4 horas para carregar totalmente via cabo USB. Você pode carregar em qualquer lugar: em casa, no trabalho ou na academia.",
  },
  {
    q: `Posso usar todos os dias?`,
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
    <section className="noise-overlay relative overflow-hidden bg-brand-deep py-16 sm:py-24">
      {/* Decorative orb */}
      <GradientOrb color="blue" size={320} bottom="-10%" left="-8%" delay={0.5} />

      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <AnimateOnScroll animation="fade-left">
              <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                Perguntas
                <br />
                Frequentes
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" delay={100}>
              <p className="mt-6 max-w-sm text-sm text-white/80 sm:text-base">
                Não encontrou sua dúvida aqui? Tente falar com nosso suporte.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" delay={200}>
              <CtaButton
                variant="outline"
                className="mt-7"
              >
                Comprar agora
              </CtaButton>
            </AnimateOnScroll>
          </div>

          <div className="space-y-3">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <AnimateOnScroll
                  key={item.q}
                  animation="fade-right"
                  delay={i * 80}
                >
                  <div className="glass-card overflow-hidden rounded-2xl bg-ink/90">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center gap-4 px-4 py-4 text-left transition-colors duration-200 hover:bg-white/5"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-toggle">
                        <ChevronDown
                          className={`h-5 w-5 text-white transition-transform duration-300 ${
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
                      className="accordion-content"
                      data-open={isOpen || undefined}
                    >
                      <div className="px-5 pb-5 pl-[4.25rem] text-sm leading-relaxed text-white/70">
                        {item.a}
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
