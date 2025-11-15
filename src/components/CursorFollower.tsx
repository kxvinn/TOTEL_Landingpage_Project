import React, { useEffect, useRef } from "react";

const CursorFollower = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: window.innerWidth/2, y: window.innerHeight/2 });
  const pos = useRef({ x: window.innerWidth/2, y: window.innerHeight/2 });

  // Detectar touch para esconder no mobile
  const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

  useEffect(() => {
    if (isTouchDevice()) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    document.addEventListener("mousemove", handleMouseMove);
    followerRef.current!.style.display = 'block';
    let rafId: number;
    const animate = () => {
      // Segue suavemente até o mouse
      pos.current.x += (mouse.current.x - pos.current.x) * 0.18;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.18;
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

  // Não renderiza em touch
  if (isTouchDevice()) return null;

  return (
    <div
      ref={followerRef}
      style={{
        position: "fixed",
        left: 0, top: 0,
        width: 22, height: 22,
        borderRadius: "50%",
        background: "rgba(60, 128, 100, 0.89)",
        zIndex: 999999,
        pointerEvents: "none",
        transition: "background 0.3s",
        display: "none",
        boxShadow: "0 1px 8px 0 rgba(0,0,0,.10)"
      }}
    ></div>
  );
};

export default CursorFollower;
