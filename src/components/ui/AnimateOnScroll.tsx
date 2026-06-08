"use client";

import {
  useRef,
  useEffect,
  useState,
  Children,
  cloneElement,
  isValidElement,
  type ReactNode,
  type CSSProperties,
  type ElementType,
} from "react";

type Animation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "blur"
  | "slide-up"
  /* backwards-compatible aliases */
  | "fade-in-up"
  | "fade-in"
  | "fade-in-left"
  | "fade-in-right"
  | "fade-in-scale"
  | "reveal-up"
  | "zoom-in";

/** Map legacy names → new canonical names */
const ALIASES: Record<string, Animation> = {
  "fade-in-up": "fade-up",
  "fade-in": "fade-up",
  "fade-in-left": "fade-left",
  "fade-in-right": "fade-right",
  "fade-in-scale": "scale",
  "reveal-up": "slide-up",
  "zoom-in": "scale",
};

function resolveAnimation(raw: Animation): Animation {
  return (ALIASES[raw] as Animation) ?? raw;
}

interface Props {
  children: ReactNode;
  animation?: Animation;
  /** Delay before the transition starts (ms) */
  delay?: number;
  /** Total transition duration (ms, default 800) */
  duration?: number;
  className?: string;
  as?: ElementType;
  /** If true, the animation only plays once (default true) */
  once?: boolean;
  /** If provided, each direct child staggers by this many ms */
  stagger?: number;
}

/* ─── canonical animation types ─── */
type CanonicalAnimation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "blur"
  | "slide-up";

/* ─── transform strings per animation type (hidden state) ─── */
const HIDDEN_TRANSFORMS: Record<CanonicalAnimation, string> = {
  "fade-up": "translateY(30px)",
  "fade-down": "translateY(-30px)",
  "fade-left": "translateX(-30px)",
  "fade-right": "translateX(30px)",
  scale: "scale(0.97)",
  blur: "translateY(0px)",
  "slide-up": "translateY(30px)",
};

function getHiddenStyle(
  animation: CanonicalAnimation,
  duration: number,
  delay: number
): CSSProperties {
  return {
    opacity: 0,
    transform: HIDDEN_TRANSFORMS[animation],
    filter: animation === "blur" ? "blur(8px)" : "none",
    transition: `all ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
    transitionDelay: `${delay}ms`,
    willChange: "transform, opacity",
  };
}

function getVisibleStyle(
  duration: number,
  delay: number
): CSSProperties {
  return {
    opacity: 1,
    transform: "translateY(0px) translateX(0px) scale(1)",
    filter: "none",
    transition: `all ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
    transitionDelay: `${delay}ms`,
    willChange: "transform, opacity",
  };
}

export default function AnimateOnScroll({
  children,
  animation: rawAnimation = "fade-up",
  delay = 0,
  duration = 800,
  className = "",
  as: Tag = "div",
  once = true,
  stagger,
}: Props) {
  const animation = resolveAnimation(rawAnimation) as CanonicalAnimation;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  /* ─── stagger mode: wrap each direct child ─── */
  if (typeof stagger === "number") {
    const kids = Children.toArray(children);
    return (
      <Tag ref={ref} className={className}>
        {kids.map((child, i) => {
          const childDelay = delay + i * stagger;
          const style = visible
            ? getVisibleStyle(duration, childDelay)
            : getHiddenStyle(animation, duration, childDelay);

          if (isValidElement(child)) {
            return cloneElement(child as React.ReactElement<{ style?: CSSProperties }>, {
              key: i,
              style: {
                ...((child.props as { style?: CSSProperties }).style || {}),
                ...style,
              },
            });
          }

          return (
            <span key={i} style={style}>
              {child}
            </span>
          );
        })}
      </Tag>
    );
  }

  /* ─── normal (single element) mode ─── */
  const style = visible
    ? getVisibleStyle(duration, delay)
    : getHiddenStyle(animation, duration, delay);

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
