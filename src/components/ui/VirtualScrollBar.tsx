"use client";

import { useLenis } from "lenis/react";
import {
  useCallback,
  useEffect, 
  useRef,
  useState,
} from "react";

type Props = {
  thumbHeight: number;
  thumbColor: string;
};

export function VirtualScrollBar({ thumbHeight, thumbColor }: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0,
  );
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
 

 

  const scrollbarThumbRef = useRef<HTMLDivElement>(null);
  const scrollBarContainerRef = useRef<HTMLDivElement>(null);

  const [limit, setLimit] = useState(0);

  const lenis = useLenis(({ scroll, limit }) => {
    setScrollTop(scroll);
    if (limit !== undefined) {
      setLimit(limit);
    }
  });

    useEffect(() => {
    // El porcentaje real es tu avance en pixels dividido el máximo posible que puedes hacer de scroll (limit)
    const getScrollPercentage = () => {
      setScrollPercentage(limit > 0 ? scrollTop / limit : 0);
    };
    getScrollPercentage();
  }, [scrollTop, limit]);
 
  // Si el límite de Lenis es mayor a 0, significa que la página es scrolleable
  const hasScroll = limit > 0;

  // ✅ useEffect para window operations
  useEffect(() => {
    const updateScrollHeight = () => {
      setScrollHeight(window.innerHeight);

      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0,
      );
    };

    window.addEventListener("resize", updateScrollHeight);

    return () => {
      window.removeEventListener("resize", updateScrollHeight);
    };
  }, [setIsTouchDevice]);

  // ✅ useEffect para drag handlers
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaY = e.clientY - startY;
      const maxScroll = scrollHeight - thumbHeight;
      const scrollRatio = deltaY / maxScroll;

      lenis?.scrollTo(scrollTop + scrollRatio * (lenis.limit || 0));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startY, scrollTop, scrollHeight, thumbHeight, lenis, limit]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(true);
      setStartY(e.clientY);
      setScrollTop(lenis?.scroll || 0);
    },
    [lenis],
  );

  // ✅ Calcular visibilidad: mostrar solo si hay scroll Y no hay animación/menú abierto
  const shouldShow = hasScroll && !isTouchDevice && !lenis?.isStopped;
 

  // Early return si no hay scroll disponible
  if (!hasScroll) return null;

  return (
    <div
      ref={scrollBarContainerRef}
      style={{
        opacity: shouldShow ? "1" : "0",
        pointerEvents: shouldShow ? "auto" : "none",
        transition: "opacity 0.3s ease-out",
      }}
      className="hidden lg:block fixed z-[700] top-0 right-0 w-1.5 mr-1 h-full"
    >
      <div
        ref={scrollbarThumbRef}
        onMouseDown={handleMouseDown}
        style={{
          transform: `translateY(${
            scrollPercentage * (scrollHeight - thumbHeight)
          }px)`,
          height: `${thumbHeight}px`,
          backgroundColor: thumbColor,
          cursor: isDragging ? "grabbing" : "grab",
        }}
        className="absolute top-0 right-0 w-1.5 mx-auto rounded-lg transition-all ease-out duration-300  "
      />
    </div>
  );
}
