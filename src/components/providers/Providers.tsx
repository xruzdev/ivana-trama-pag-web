"use client";
import { gsap } from "gsap";
import "lenis/dist/lenis.css";
import type { LenisRef } from "lenis/react";
import ReactLenis from "lenis/react";
import { useEffect, useRef } from "react";
import { VirtualScrollBar } from "../ui/VirtualScrollBar";

export const Providers = ({children}: {children: React.ReactNode}) => {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      options={{
        lerp: 0.058,
        autoRaf: false,
        syncTouch:false
      }}
      root
    >
    
      <VirtualScrollBar thumbHeight={50} thumbColor={"#a39383"} />
      {children}
    
    </ReactLenis>
  );
};
