"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

interface StaggerListProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol" | "section";
  /** IntersectionObserver threshold (default 0.15) */
  threshold?: number;
  /** Only animate once (default true) */
  once?: boolean;
}

export default function StaggerList({
  children,
  className = "",
  as: Tag = "div",
  threshold = 0.15,
  once = true,
}: StaggerListProps) {
  const ref = useRef<HTMLElement>(null);
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
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={`stagger-list ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
