/**
 * Logo Rainoah — RECRIAÇÃO aproximada (emblema em SVG + wordmark em script font).
 * TODO: asset — substituir pelo logo oficial (SVG/PNG) quando disponível.
 * Trocar é simples: basta editar este componente.
 */
type LogoProps = {
  className?: string;
  /** altura do emblema em px (o texto acompanha) */
  size?: number;
};

export default function Logo({ className = "", size = 34 }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="31" cy="18" r="3.4" fill="currentColor" />
        <path
          d="M9 28c3-3.4 6-3.4 9 0s6 3.4 9 0 6-3.4 9 0"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M11 33.5c2.6-2.9 5.2-2.9 7.8 0 2.6 2.9 5.2 2.9 7.8 0"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <span
        className="font-logo leading-none"
        style={{ fontSize: size * 0.82 }}
      >
        Rainoah
      </span>
    </span>
  );
}
