"use client";
import { useRef, useState } from "react";
import { Marquee } from "./Marquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
export const Reviews = () => {
  const container = useRef<HTMLDivElement>(null);

  const [start, setStart] = useState(false);

  useGSAP(
    () => {
      if (!container.current) return;

      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            end: "bottom 80%",
            toggleActions: "play none none none",
   
            onEnter: () => {
              setStart(true);
            },
          },
        })
        .to(
          ".layer",
          {
            scaleX: 1,
            duration: 1,
            ease: "power4.out",
          },
         "<"
        )
        .to(
          ".box",
          {
            duration: 0.5,
            y: 0,
            ease: "power4.out",
            stagger: 0.08,
          },
          "<"
        )
        .to(
          ".line",
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power4.out",
            transformOrigin: "center",
          },
          "<"
        )

        .from(
          ["h1", "h2", "p", ".start"],
          {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power4.out",
          },
          "-=1"
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className=" w-screen h-auto relative   flex flex-col items-center justify-start pb-20    gap-10  xl:gap-20 xl:pb-20 overflow-hidden  bg-color4/30   "
    >
      <div className="w-[90%] mx-auto h-[1px]  scale-x-0 line  bg-color5  z-50 " />

      <div className="flex flex-col ">
        <h1 className=" capitalize text-center    text-4xl md:text-5xl 2xl:text-6xl text-color5 ">
          Testimonios
        </h1>

        <p className="  text-center md:text-lg  text-color2">
          Conoce lo que mis clientes opinan de mi trabajo
        </p>
      </div>

      <Marquee start={start} />
    </section>
  );
};
