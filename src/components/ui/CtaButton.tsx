import type { ReactNode } from "react";
import { CHECKOUT_URL, CHECKOUT_TARGET } from "@/lib/config";
import { ChevronRight, ArrowOutward } from "@/components/icons";

type Variant = "orange" | "blue" | "navy" | "outline";
type Arrow = "circle" | "outward" | "none";

interface CtaButtonProps {
  children: ReactNode;
  variant?: Variant;
  /** Por padrão aponta para o checkout (config.ts). Use href só para links que NÃO são compra. */
  href?: string;
  target?: "_self" | "_blank";
  arrow?: Arrow;
  className?: string;
  fullWidth?: boolean;
  "aria-label"?: string;
}

const base =
  "group inline-flex items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-semibold tracking-wide transition-colors duration-200 sm:px-7";

const variants: Record<Variant, string> = {
  orange: "bg-accent-orange text-white hover:bg-[#e64500]",
  blue: "bg-brand-blue text-white hover:bg-[#0a5aa0]",
  navy: "bg-brand-navy text-white hover:bg-[#06294f]",
  outline:
    "border border-white/70 bg-transparent text-white hover:bg-white/10",
};

// Cor do círculo da seta por variante
const circleByVariant: Record<Variant, string> = {
  orange: "bg-brand-navy text-white",
  blue: "bg-brand-navy text-white",
  navy: "bg-brand-blue text-white",
  outline: "bg-white text-brand-navy",
};

export default function CtaButton({
  children,
  variant = "orange",
  href = CHECKOUT_URL,
  target = CHECKOUT_TARGET,
  arrow = "circle",
  className = "",
  fullWidth = false,
  ...rest
}: CtaButtonProps) {
  const isExternal = target === "_blank";
  return (
    <a
      href={href}
      target={target}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...rest}
    >
      <span>{children}</span>
      {arrow === "circle" && (
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${circleByVariant[variant]} transition-transform duration-200 group-hover:translate-x-0.5`}
          aria-hidden
        >
          <ChevronRight className="h-4 w-4" />
        </span>
      )}
      {arrow === "outward" && (
        <ArrowOutward className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  );
}
