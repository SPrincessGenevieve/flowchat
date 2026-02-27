"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import Gallery from "../gallery";

interface HeroProps {
  backgroundColor?: string;
  glowColor?: string;
  children?: ReactNode;
}

export default function GlowingCover({
  backgroundColor = "#020617",
  glowColor = "oklch(22.847% 0.05516 259.661)",
  children,
}: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      delta: Math.random() * 0.02,
    }));

    function animate() {
      if (!ctx) return;

      ctx.clearRect(
        0,
        0,
        (canvas as HTMLCanvasElement).width,
        (canvas as HTMLCanvasElement).height,
      );

      stars.forEach((star) => {
        star.alpha += star.delta;

        if (star.alpha <= 0 || star.alpha >= 1) {
          star.delta *= -1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full h-full overflow-hidden bg-linear-90 from-primary-blue-500 to-primary-blue-600"
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none select-none absolute inset-0"
      />

      <div
        className="pointer-events-none absolute w-100 h-100 rounded-full blur-[120px] transition-transform duration-150 ease-out"
        style={{
          background: glowColor,
          transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
          willChange: "transform",
        }}
      />

      {children && (
        <div className="relative z-10 overflow-y-auto flex flex-col items-center justify-center h-full">
          {children}
        </div>
      )}
    </div>
  );
}
