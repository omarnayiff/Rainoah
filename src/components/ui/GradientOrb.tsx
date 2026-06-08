interface GradientOrbProps {
  /** CSS color value (hex, rgb, etc.) */
  color: string;
  /** Orb diameter in px */
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  /** Animation delay in seconds */
  delay?: number;
  className?: string;
}

export default function GradientOrb({
  color,
  size = 300,
  top,
  left,
  right,
  bottom,
  delay = 0,
  className = "",
}: GradientOrbProps) {
  return (
    <div
      className={`floating-orb absolute rounded-full ${className}`}
      aria-hidden
      style={{
        background: color,
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        animationDelay: `${delay}s`,
      }}
    />
  );
}
