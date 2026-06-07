import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** Chevron para a direita — botão circular dos CTAs / carrossel. */
export function ChevronRight({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden {...props}>
      <path
        d="m9 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Chevron para baixo — toggle do acordeão. */
export function ChevronDown({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden {...props}>
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Seta diagonal para fora (↗) — botão "Falar com suporte". */
export function ArrowOutward({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden {...props}>
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Estrela cheia — avaliações. */
export function Star({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden {...props}>
      <path d="M12 2.5l2.9 5.88 6.5.95-4.7 4.58 1.11 6.47L12 17.34 6.19 20.4 7.3 13.9 2.6 9.33l6.5-.95L12 2.5Z" />
    </svg>
  );
}

/** Avatar genérico de pessoa (depoimentos). */
export function UserAvatar({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden {...props}>
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <circle cx="12" cy="9.2" r="3.4" fill="#fff" />
      <path d="M5.6 19.2a6.4 6.4 0 0 1 12.8 0" fill="#fff" />
    </svg>
  );
}

/** Play — placeholder de vídeo. */
export function Play({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden {...props}>
      <path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5Z" />
    </svg>
  );
}
