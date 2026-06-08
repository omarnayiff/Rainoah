import type { ReactNode } from "react";
import { CHECKOUT_URL, CHECKOUT_TARGET } from "@/lib/config";
import { ChevronRight, ArrowOutward } from "@/components/icons";

type Variant = "orange" | "blue" | "navy" | "white" | "outline";
type Arrow = "square" | "outward" | "none";

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
  "group inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm transition-colors duration-300 sm:px-7 shimmer-btn magnetic-hover active:scale-[0.97]";

const variants: Record<Variant, string> = {
  orange:
    "rounded-2xl bg-accent-orange text-white hover:bg-[#e64500] font-semibold uppercase tracking-wide pulse-glow",
  blue: "rounded-2xl bg-brand-blue text-white hover:bg-[#0a5aa0] font-semibold uppercase tracking-wide",
  navy: "rounded-2xl bg-brand-navy text-white hover:bg-[#06294f] font-semibold uppercase tracking-wide",
  outline:
    "rounded-full border border-white/60 bg-transparent text-white hover:bg-white/10 font-medium",
  white:
    "rounded-2xl bg-white text-brand-navy hover:bg-gray-100 font-semibold uppercase tracking-wide",
};

// Cor do "squircle" (quadrado arredondado) que segura a seta ">"
const squircleByVariant: Record<Variant, string> = {
  orange: "bg-brand-deep text-white",
  blue: "bg-brand-navy text-white",
  navy: "bg-brand-blue text-white",
  outline: "bg-white text-brand-navy",
  white: "bg-brand-blue text-white",
};

export default function CtaButton({
  children,
  variant = "orange",
  href = CHECKOUT_URL,
  target = CHECKOUT_TARGET,
  arrow = "square",
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
      {arrow === "square" && (
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${squircleByVariant[variant]} transition-transform duration-300 group-hover:translate-x-0.5`}
          aria-hidden
        >
          <ChevronRight className="h-4 w-4" />
        </span>
      )}
      {arrow === "outward" && (
        <ArrowOutward className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  );
}
