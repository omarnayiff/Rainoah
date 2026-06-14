/**
 * Logo Rainoah 30 Anos — Usa as imagens oficiais do logo.
 * - Versão azul (padrão): para seções claras
 * - Versão branca: para seções escuras (variant="white")
 */
import { BASE_PATH } from "@/lib/config";

type LogoProps = {
  className?: string;
  /** altura do logo em px */
  size?: number;
  /** "blue" para fundos claros, "white" para fundos escuros */
  variant?: "blue" | "white";
};

export default function Logo({ className = "", size = 34, variant = "blue" }: LogoProps) {
  const src =
    variant === "white"
      ? `${BASE_PATH}/images/branca (1).webp`
      : `${BASE_PATH}/images/LOGO-RAINOAH-30ANOS-AZUL-logo.png`;

  return (
    <img
      src={src}
      alt="Rainoah 30 Anos"
      className={className}
      style={{ height: size, width: "auto" }}
    />
  );
}
