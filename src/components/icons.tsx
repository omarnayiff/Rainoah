import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** Selo "verificado" (scallop) com check — usado nos selos de benefício. */
export function SealCheck({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Z"
      />
      <path
        fill="#fff"
        d="M16.03 9.97a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 3.72-3.72a.75.75 0 0 1 1.06 0Z"
      />
    </svg>
  );
}

/** Círculo cheio com check — usado nas listas de itens. */
export function CheckCircle({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden {...props}>
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path
        fill="#fff"
        d="M16.78 8.7a.9.9 0 0 1 0 1.27l-5.1 5.1a.9.9 0 0 1-1.27 0l-2.4-2.4a.9.9 0 1 1 1.27-1.27l1.76 1.76 4.47-4.46a.9.9 0 0 1 1.27 0Z"
      />
    </svg>
  );
}

/** Chevron para a direita — botão circular dos CTAs. */
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
      <path
        d="M5.6 19.2a6.4 6.4 0 0 1 12.8 0"
        fill="#fff"
      />
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

/* ---- Ícones de linha (faixa de garantias) ---- */

export function Truck({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden {...props}>
      <path
        d="M2.5 6.5h10v9h-10v-9ZM12.5 9h4l3 3v3.5h-7V9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="17" r="1.8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.5" cy="17" r="1.8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function TagPercent({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden {...props}>
      <path
        d="M3.5 12.4 11.6 4.3a2 2 0 0 1 1.4-.58l4.5-.02a2 2 0 0 1 2 2l-.02 4.5a2 2 0 0 1-.58 1.4l-8.1 8.1a2 2 0 0 1-2.83 0l-4.07-4.07a2 2 0 0 1 0-2.83Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="m9.5 10 5 5M9.6 9.6h.01M15 15h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldCheck({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden {...props}>
      <path
        d="M12 3 5 5.6v5.2c0 4.4 3 7.2 7 9.6 4-2.4 7-5.2 7-9.6V5.6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CreditCard({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 9.5h19" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 14.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ---- Ícones dos cards "Resultados" ---- */

/** Marcador de "problema" (coral). */
export function DotTarget({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="#fff" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3" fill="#fff" />
    </svg>
  );
}

/** Marcador de "benefício" (check branco). */
export function CheckMark({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden {...props}>
      <path
        d="m5 12.5 4.5 4.5L19 7"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
