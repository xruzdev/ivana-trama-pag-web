"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

export const Tratamientos = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const paths = Array.from(
        container.current.querySelectorAll("path")
      ) as SVGPathElement[];

      paths.forEach((path) => {
        const totalLength = path.getTotalLength().toString();
        path.style.strokeDasharray = totalLength;
        path.style.strokeDashoffset = totalLength;
      });

      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            end: "80% 80%",
            
            toggleActions: "play none none none",
          },
        })
        .to(
          paths,
          {
            strokeDashoffset: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power4.out",
          },
          "<"
        )
        .to(
          ".letter",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.02, 
          },
          "<"
        );
    },
    {
      scope: container,
    }
  );

  return (
    <section
      ref={container}
      className="w-screen h-[70vh] lg:h-[90vh] relative   bg-color4/30 "
    >


      <div className="absolute flex flex-col  items-center justify-between py-20 md:py-32 lg:py-20 xl:py-32  size-full top-0 left-0 z-50">
        <h1 className="text-4xl md:text-5xl 2xl:text-6xl text-color1  flex flex-col items-center justify-center gap-5 px-4 md:px-0 ">
          <span className="flex uppercase">
            {`Tratamientos`.split("").map((letter, index) => (
              <span key={index} className="block opacity-0 letter">
                {letter}
              </span>
            ))}
          </span>

          <span className="block text-base md:text-lg opacity-0 letter text-center normal-case ">
            Empezá tu camino hacia la belleza y el bienestar
          </span>
        </h1>

        <div className="flex w-full items-center justify-evenly text-3xl md:text-4xl xl:text-5xl text-color1 uppercase   gap-5">

        <Link
            href="/tratamientos/tratamientos-faciales"
            className="flex flex-col items-center justify-center gap-4 group"
          >
            <FacialIcon />
            <span className="flex  group-hover:text-color5 transition-colors duration-300">
              {`Faciales`.split("").map((letter, index) => (
                <span key={index} className="block opacity-0 letter">
                  {letter}
                </span>
              ))}
            </span>
          </Link>
          
          <Link
            href="/tratamientos/tratamientos-capilares"
            className="flex flex-col items-center justify-center gap-4 group"
          >
            <HairIcon />
            <span className="flex group-hover:text-color5 transition-colors duration-300">
              {`Capilares`.split("").map((letter, index) => (
                <span key={index} className="block opacity-0 letter">
                  {letter}
                </span>
              ))}
            </span>
          </Link>

        
        </div>
      </div>

      <video
        poster="/video/banner-tratamientos.poster.webp"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        aria-hidden="true"
        className="    brightness-50 absolute top-0 left-0 size-full object-cover z-0"
      >
        <source src="/video/banner-tratamientos.av1.mp4" type='video/mp4; codecs="av01.0.08M.08"' />
        <source src="/video/banner-tratamientos.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

const HairIcon = () => (
  <svg
    fill="none"
    className="fill-none size-24 md:size-32 lg:size-24 xl:size-40 stroke-white  group-hover:stroke-color5 transition-colors duration-300"
    strokeMiterlimit="10"
    strokeWidth="11"
    id="OBJECTS"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 501 545.18"
  >
    <path d="M445.47,318.93c6.04,2.02,46.32-1.45,47.74,2.09l-2.08,216.37-482.9-.27-.45-217.57c15.42-1.14,30.96-.63,46.42-.63" />
    <path d="M439,318.93l5.44,15.05c.86,5.49,7.54,16.13,9.34,21.8,35.37,110.99-137.48,114.68-103.79,1.04,1.21-4.07,9.17-18.01,9.34-19.72" />
    <path d="M143.52,319.97h61.12c14.75,0,3.18,15.23,3.16,16.09-.02.72-6.41,9.92-7.27,12.45-42.43,125.8,137.52,118.34,100.67,6.23-1.09-3.32-9.26-15.86-9.34-17.64" />
    <path d="M54.2,318.93l1.04,17.12c.3,5.47-9.18,17.72-10.38,21.8-32.41,110,138.41,111.82,103.79-3.11-1.59-5.27-6.48-15.55-8.3-20.76" />

    <path d="M304.84,48.05l-27.5,148.93c-3.97,28.7-14.23,105.68-8.3,130.77,3.51,14.86,20.3,28.44,21.8,48.78,5.35,72.73-110.07,61.82-75.76-21.8,3.49-8.51,14.75-21.37,16.61-29.06,4.85-20.14,4.35-53.76,8.3-76.8,11.95-69.67,37.38-136.23,64.87-200.83Z" />
    <path d="M152.28,50.13c2.57-.04.75,5.37.52,6.75-7.51,45.68-20.43,91.55-26.98,138.04-4.49,31.83-14.4,102.5-9.34,131.81,1.46,8.45,14.37,23.71,17.64,33.21,27.24,79.08-89.27,89.56-76.8,11.42,2.81-17.63,18.43-31.97,21.8-44.63,4.87-18.33,4.75-51.58,8.3-72.65,11.92-70.59,36.9-138.52,64.87-203.94Z" />
    <path d="M453.26,57.39c2.09,1.43,1.68,3.6,1.56,5.71-2.26,37.63-20.32,93.91-25.95,134.92-4.35,31.71-13.24,98.09-8.3,127.66,1.74,10.41,16.52,26.47,19.72,38.4,22.43,83.68-106.76,80.61-73.69-7.27,3.35-8.9,14.43-21.13,16.61-29.06,5.56-20.27,5.24-58.24,9.34-81.99,11.24-65.04,34.09-128.42,60.71-188.37Z" />

    <path d="M51.92,318.93c-18.5,0-28.72-.52-44.14.63l.45,217.57,482.9.27,2.08-216.37c-1.43-3.54-40.59-2.09-47.74-2.09h-4.15" />
    <path d="M140.72,335.03l-6.61-15.06h70.53" />
    <path d="M291.87,337.1l-5.19-15.92,8.35-.27c20.74-.66,41.48-1.32,62.22-1.98l5.19-.16-3.11,18.33" />
  </svg>
);

const FacialIcon = () => (
  <svg
    id="OBJECTS"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 341.16 419.1"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="4"
    className="fill-none size-24 md:size-32 lg:size-24 xl:size-40 group-hover:stroke-color5 stroke-white transition-colors duration-300 "
  >
    <path d="M1,369.5c3.03-3.9,15.05-29.05,24.21-48.99,9.17-19.94,19.57-53.33,24.34-51.59,4.77,1.73,73.7,64.16,90.61,85.84,16.91,21.68,49.7,60.7,49.13,63.3-.57,2.6-127.17-136.13-123.26-139.6,3.9-3.47,20.38-27.75,21.68-46.39,1.3-18.64-10.4-59.83-13.87-75-3.47-15.17-23.41-71.1,9.97-112.72C117.19,2.73,157.94-4.64,207.8,4.46c49.86,9.1,79.34,19.08,89.74,34.68,10.4,15.61,14.31,22.11,9.97,22.11s-47.26,9.54-63.73,26.01c-16.47,16.47-39.89,35.98-50.29,37.72-10.4,1.73-18.97-.33-20.7-4.34-1.73-4.01-12.3-18.64-27.42-12.63-15.12,6.02-19.67,24.71-16.75,41.29s15.61,37.88,28.61,44.06c13.01,6.18,24.71,6.34,25.52,3.09.81-3.25-6.67-10.24-13.01-17.72-6.34-7.48-12.03-10.73-17.72-13.82-5.69-3.09-11.06-12.36-9.75-18.7,1.3-6.34,11.22-8.94,17.56-9.75s12.36,1.3,9.1,5.37c-3.25,4.06-11.22,10.73-6.5,12.52,4.71,1.79,10.73-5.85,11.38-.16.65,5.69-4.06,10.57,1.95,13.33,6.02,2.76,7.48,9.75,4.55,10.73s109.09-52.84,109.09-52.84c0,0,14.79-3.74,22.11,2.44,7.32,6.18,9.75,19.35,9.75,19.35l6.02-11.22s-7.23-17.37-19.56-16.42c-20.43,1.57-23.52,8.94-27.1,28.61,0,0,4.88,1.71,12.36,2.36,7.48.65,10.81.81,10.81.81l2.68.24s.43,4.22-.73,7.19c-.43,1.09-1.07,2.01-2.03,2.49-3.58,1.79,1.22-9.81,1.22-9.81,0,0,5.12.38,6.58-.27,1.46-.65,3.66-1.95,3.66-1.95,0,0-5.37-.98-10.4-1.06s-18.78,1.71-18.78,1.71c0,0,9.75,6.91,12.76,9.67,3.01,2.76,5.36,4.39,5.36,4.39l1.22-2.6s6.94,21.51,4.55,36.47c-2.38,14.96-2.17,27.1,6.94,29.26,9.1,2.17,16.04.87,15.61-3.03-.43-3.9-8.45-4.55-10.62-1.95-2.17,2.6-2.17,8.67,1.52,9.75,3.69,1.08,14.52-1.95,16.37-9.65,1.84-7.7-2.06-12.68-8.35-22.22-6.29-9.54-13.22-19.51-13.87-23.09-.65-3.58-.43-13.11,4.23-19.62,4.66-6.5,10.84-19.51,9.97-35.55-.87-16.04-2.82-28.61-9.65-40.54-6.83-11.92-13.6-20.09-13.6-20.09" />
    <path d="M163.17,383.48s22.2-46.38,30.98-56.13c8.78-9.75,16.26-22.44,36.42-13.33,20.16,9.1,52.02,16.26,66.33,11.38,14.31-4.88,15.17-17.67,14.74-23.52-.43-5.85-1.95-13.11-.76-14.42,1.19-1.3,10.08,1.3,13.22.76,3.14-.54,2.6-2.49,2.17-4.44-.43-1.95-4.99-9.97-9.54-13.33-4.55-3.36-8.89-6.29-8.56-6.83.33-.54,21.13-.22,21.35,1.08.22,1.3-22.33-.43-21.57-1.63.76-1.19,27.96-19.4,29.05-18.43,1.08.98,3.9,5.85,1.08,10.84s-8.56,9.21-8.56,9.21c0,0,4.55,6.61,3.69,12.36-.87,5.74-6.61,8.56-6.61,8.56" />
    <path d="M336.99,244.64s-7.26-4.77-9.7-7.37c-2.44-2.6-2.42-5.21-2.42-5.21" />
    <path d="M142.25,179.79s-24.19,13.92-33.3,24.97c-9.1,11.06-21.63,30.68-21.63,30.68" />
  </svg>
);
