"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFinePointer || prefersReducedMotion) return;

    let raf = 0;
    const handleMove = (e: MouseEvent) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate(${e.clientX - 200}px, ${
            e.clientY - 200
          }px)`;
        }
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 -z-10 h-[400px] w-[400px] rounded-full opacity-40 dark:opacity-30 hidden md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(76,92,240,0.18) 0%, rgba(76,92,240,0) 70%)",
        willChange: "transform",
        transition: "transform 0.15s ease-out",
      }}
    />
  );
}
