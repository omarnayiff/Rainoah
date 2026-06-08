"use client";

import { useRef, useEffect, type ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  /** Parallax intensity — 0 = no effect, 1 = full scroll distance (default 0.1) */
  speed?: number;
  className?: string;
}

export default function ParallaxSection({
  children,
  speed = 0.1,
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number;

    function onScroll() {
      rafId = requestAnimationFrame(() => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const windowH = window.innerHeight;

        /* Only compute when the element is near the viewport */
        if (rect.bottom < -100 || rect.top > windowH + 100) return;

        const center = rect.top + rect.height / 2;
        const offset = (center - windowH / 2) * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    /* Run once to set initial position */
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
