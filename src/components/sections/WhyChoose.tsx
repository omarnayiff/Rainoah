"use client";

import { useRef, useState } from "react";
import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import { Play } from "@/components/icons";
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
  const [playing, setPlaying] = useState(false);
  const [showPoster, setShowPoster] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
      setShowPoster(false);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <section className="bg-gradient-to-b from-brand-blue to-brand-navy py-20 sm:py-28">
      <Container>
        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          {/* Vídeo vertical (formato rede social 9:16) */}
          <div
            className="relative mx-auto aspect-[9/16] w-full max-w-[360px] cursor-pointer overflow-hidden rounded-3xl bg-brand-navy/60 ring-1 ring-white/10"
            onClick={togglePlay}
          >
            {showPoster && (
              <img
                src="/images/capa-video.png"
                alt=""
                className="absolute inset-0 z-10 h-full w-full object-cover"
              />
            )}
            <video
              ref={videoRef}
              src="/video_web.mp4"
              className={`relative z-0 h-full w-full object-cover ${!showPoster ? '' : 'invisible'}`}
              playsInline
              preload="auto"
              onEnded={() => setPlaying(false)}
            />
            {showPoster && (
              <div className="absolute inset-0 z-20 grid place-items-center bg-black/30">
                <div className="flex flex-col items-center gap-3 text-white/80">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur">
                    <Play className="ml-1 h-7 w-7 text-white" />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Assistir vídeo
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Texto + lista */}
          <div className="flex flex-col justify-between text-left">
            <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-[3rem]">
              <span className="mb-4 block">Por que tantas pessoas</span>
              <span className="mb-4 block">estão escolhendo a</span>
              <span className="block">{PRODUCT.name}?</span>
            </h2>

            <ul className="grid grid-cols-1 gap-y-4">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-1.5">
                  <img
                    src="/icons/check-seal-blue.png"
                    alt=""
                    aria-hidden
                    className="h-7 w-7 shrink-0"
                  />
                  <span className="text-sm font-light text-white/90 sm:text-base">{f}</span>
                </li>
              ))}
            </ul>

            <CtaButton variant="orange" className="w-full sm:w-auto">
              Quero garantir a minha
            </CtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
