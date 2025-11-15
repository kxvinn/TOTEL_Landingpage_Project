import React, { useEffect, useRef } from "react";

const CursorFollower = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  // Detectar touch E tamanho de tela para esconder no mobile
  const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      (navigator as any).msMaxTouchPoints > 0
    );
  };

  const isDesktop = () => {
    return window.innerWidth >= 768; // Apenas desktop (md breakpoint)
  };

  useEffect(() => {
    // Só mostrar se não for touch E for desktop
    if (isTouchDevice() || !isDesktop()) {
      return;
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    
    let rafId: number;
    const animate = () => {
      // Segue suavemente até o mouse
      pos.current.x += (mouse.current.x - pos.current.x) * 0.2;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.2;
      const f = followerRef.current;
      if (f) {
        f.style.transform = `translate3d(${pos.current.x - 11}px,${pos.current.y - 11}px,0)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    animate();
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Não renderiza em mobile ou touch
  if (isTouchDevice() || !isDesktop()) return null;

  return (
    <div
      ref={followerRef}
      style={{
        position: "fixed",
        left: 0, 
        top: 0,
        width: 22, 
        height: 22,
        borderRadius: "50%",
        background: "rgba(60, 128, 100, 0.89)",
        zIndex: 999999,
        pointerEvents: "none",
        boxShadow: "0 1px 8px 0 rgba(0,0,0,.10)"
      }}
    ></div>
  );
};

export default CursorFollower;
