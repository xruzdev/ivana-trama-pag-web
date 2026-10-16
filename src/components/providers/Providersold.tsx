"use client";

import { gsap } from "gsap";
import "lenis/dist/lenis.css";
import { LenisRef, ReactLenis, useLenis } from "lenis/react";
 
import { useUIStore } from "@/store/ui-store";
import { usePathname } from "next/navigation";
import {
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

interface LenisProps {
  children: React.ReactNode;
}

export function Providers({ children }: LenisProps) {
  const lenisRef: MutableRefObject<LenisRef | null> = useRef(null);

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const scrollbarThumbRef = useRef<HTMLDivElement>(null);

  const [velocity, setVelocity] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const menuOpen = useUIStore((state) => state.isSideMenuOpen);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);

    if (isTouchDevice) {
      document.body.style.setProperty("overflow", "auto");
    } else {
      document.body.style.setProperty("overflow", "hidden");
    }
  }, [isTouchDevice]);

  useEffect(() => {
    if (menuOpen) {
      scrollbarThumbRef.current?.style.setProperty("display", "none");
    } else {
      scrollbarThumbRef.current?.style.setProperty("display", "block");
    }
  }, [menuOpen]);

  const handleMouseDown = (e: { clientY: SetStateAction<number> }) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setScrollTop(lenisRef.current?.lenis?.scroll || 0);
  };

  const pathname = usePathname();

  useEffect(() => {
    if (document.body.scrollHeight <= window.innerHeight) {
      scrollbarThumbRef.current?.style.setProperty("display", "none");
    }
  }, [pathname]);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: { clientY: number }) => {
      if (!isDragging) return;
      const deltaY = e.clientY - startY;
      lenisRef.current?.lenis?.scrollTo(scrollTop + deltaY * 10); // Ajusta el factor de multiplicación según sea necesario
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
  }, [isDragging, startY, scrollTop, isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return;

    if (!scrollbarThumbRef.current) return;

    if (isDragging) {
      scrollbarThumbRef.current.style.setProperty("opacity", "1");

      scrollbarThumbRef.current.style.setProperty("cursor", "grabbing");
    } else {
      scrollbarThumbRef.current.style.setProperty("cursor", "grab");
      scrollbarThumbRef.current.style.setProperty("opacity", "0.1");
    }
  }, [isDragging, isTouchDevice]);

  useLenis(
    (lenis) => {
      if (isTouchDevice) return;

      setVelocity(lenis.velocity);
      setScrollPercentage(lenis.scroll / lenis.limit);

      return () => {
        lenis.destroy();
      };
    },
    [isTouchDevice]
  );

  useEffect(() => {
    if (isTouchDevice) return;
    if (!scrollbarThumbRef.current) return;

    if (velocity == 0) {
      scrollbarThumbRef.current.style.setProperty("opacity", "0.1");
    } else {
      scrollbarThumbRef.current.style.setProperty("opacity", "0.6");
    }
  }, [velocity, isTouchDevice]);

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
      className="overflow-x-hidden lg:overflow-hidden"
      options={{
        syncTouch: false,
        lerp: 0.08,
        autoRaf: false,
      }}
      root
    >
      {" "}
      
      
        {children}
        <div className="hidden lg:block fixed  z-[9999] top-0 right-0 w-2 h-full bg-transparent ">
          <div
            onMouseEnter={(e) => {
              const target = e.target as HTMLDivElement;
              target.style.setProperty("opacity", "1");
            }}
            onMouseLeave={(e) => {
              if (isDragging) return;

              const target = e.target as HTMLDivElement;
              target.style.setProperty("opacity", "0.1");
            }}
            style={{ transform: `translateY(${scrollPercentage * 1900}%)` }}
            ref={scrollbarThumbRef}
            onMouseDown={handleMouseDown}
            className=" absolute top-0 right-0 w-full h-[5%] bg-color5 rounded-lg hover:w  transition-all opacity-0 ease-out duration-300"
          ></div>
        </div>
     
    </ReactLenis>
  );
}

/**
 * 
 * 
 * import { useRef, useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";

export const Providers = ({ children }) => {
  const lenisRef = useRef(null);
  const scrollbarThumbRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartY(e.clientY);
      setScrollTop(lenisRef.current?.lenis?.scroll || 0);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaY = e.clientY - startY;
      lenisRef.current?.lenis?.scrollTo(scrollTop + deltaY * 2); // Ajusta el factor de multiplicación según sea necesario
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    scrollbarThumbRef.current?.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      scrollbarThumbRef.current?.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startY, scrollTop]);

  function update(time) {
    if (lenisRef.current?.lenis) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
  }

  gsap.ticker.add(update);

  return (
    <ReactLenis
      ref={lenisRef}
      className="overflow-hidden"
      options={{
        syncTouch: true,
        smoothWheel: true,
        autoRaf: false,
      }}
      root
    >
      <div className="scrollbar">
        <div ref={scrollbarThumbRef} className="scrollbar-thumb"></div>
      </div>
      <SessionProvider>{children}</SessionProvider>
    </ReactLenis>
  );
};
 */
