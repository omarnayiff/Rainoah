import Container from "@/components/ui/Container";
import Logo from "@/components/Logo";
import { PRODUCT } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[88vh] flex-col overflow-hidden">
      {/* Foto de fundo (mulher usando a Powerflex GO no pescoço) */}
      <img
        src="/images/hero.jpg"
        alt="Mulher relaxando ao usar a massageadora Powerflex GO no pescoço"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[72%_center]"
      />
      {/* Scrim para legibilidade do texto à esquerda */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-black/35 to-transparent"
        aria-hidden
      />

      {/* Conteúdo do hero (logo agrupado acima do título, maior e mais pra baixo) */}
      <div className="relative flex flex-1 items-center py-16">
        <Container>
          <Logo size={52} className="text-white" />
          <h1 className="mt-8 max-w-2xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.5rem]">
            Se livre de uma vez por todas{" "}
            <span className="text-brand-sky">dessa dor.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
            Alivie tensões, relaxe músculos cansados e recupere seu corpo em
            poucos minutos com a {PRODUCT.name}.
          </p>
        </Container>
      </div>
    </section>
  );
}
