"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

type Animation =
  | "fade-in-up"
  | "fade-in"
  | "fade-in-left"
  | "fade-in-right"
  | "fade-in-scale";

interface Props {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span";
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
  as: Tag = "div",
  once = true,
}: Props) {
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`${className} ${visible ? `animate-${animation}` : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {children}
    </Tag>
  );
}
