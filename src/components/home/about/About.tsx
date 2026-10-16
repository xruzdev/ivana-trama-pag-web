"use client";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const text =
  "Soy médica, especialista en dermatología y estética. Ejerzo mi profesión con profunda pasión y responsabilidad. Me mantengo en permanente actualización, realizando cursos, jornadas y congresos con reconocidos profesionales a nivel nacional e internacional, para ofrecerle a mis pacientes tratamientos medico estéticos de excelencia. En el espacio de consulta soy sumamente empática. Con una mirada integral. Lo que resulta en un momento de atenta y amena escucha.";

export const About = () => {
  const container = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);

  const splitWords = (phrase: string) => {
    const body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      /* const letters = splitLetters(word); */
      body.push(
        <div className="overflow-hidden" key={word + "_" + i}>
          <p className=" m-0 translate-y-full">{word}</p>
        </div>
      );
    });
    return body;
  };

  useGSAP(
    () => {
      if (!container.current || !body.current) return;

      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: `${window.innerWidth < 1000 ? "20% bottom" : "top center"}`,
            end: "bottom center",

            toggleActions: "play none none none",
          },
        })
        .from(
          "img",
          {
            y: -100,
            duration: 1,

            ease: "power2.inOut",
          },
          0
        )
        .to(
          "img",
          {
            clipPath: "polygon(0% 95%, 100% 50%, 100% 100%, 0% 100%)",
          },
          "0"
        )
        .to(
          "img",
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            delay: 0.2,
          },
          "0"
        )
        .to(
          "h1",
          {
            y: 0,
            duration: 1,
            ease: "power4.out",
          },
          0
        )
        .to(
          ".link-btn",
          {
            opacity: 1,
            duration: 0.5,
            ease: "power4.in",
          },
          0
        )
        .to(
          body.current.querySelectorAll("p"),
          {
            y: 0,
            duration: 1,
            ease: "power4.inOut",
          },
          0
        )
        .to(
          ".line",
          {
            scaleX: 1,
            transformOrigin: "left",
            duration: 1,
            ease: "power2.in",
          },
          0
        )
        .to(
          ".text",
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.in",
          },
          0
        );
    },
    {
      scope: container,
    }
  );

  return (
    <section
      ref={container}
      className="w-screen h-auto py-10 md:pt-20 2xl:pt-0  lg:h-screen     flex flex-col lg:flex-row items-center px-4 md:px-10 xl:px-32 gap-10 justify-evenly relative z-50 bg-gradient-to-b from-color1 to bg-color4 bg-opacity-30"
    >
      <span className="hidden md:block translate-y-10 opacity-0 text absolute top-2 left-4 md:left-10 xl:left-32 text-color2 text-xl lg:text-lg xl:text-xl " >
        Entiendo a la piel como el reflejo del todo
      </span>

      {/* <span className="hidden md:block  opacity-0 text absolute bottom-12 right-4 md:right-10 xl:right-32 text-black text-xl">
        Inquieta, desestructurada y empática con mís pacientes
      </span> */}
      <div className="hidden md:block scale-x-0 line absolute w-[calc(100%-32px)] md:w-[calc(100%-80px)] xl:w-[calc(100%-256px)] top-10 right-4 md:right-10 xl:right-32 h-[1px] bg-color5" />
      {/* <div
        style={{
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        }}
        className="hidden md:block  line absolute w-[calc(100%-32px)] md:w-[calc(100%-80px)] xl:w-[calc(100%-256px)] bottom-10 left-4 md:left-10 xl:left-32 h-0.5 bg-black"
      /> */}

      <div className="w-full md:w-5/6 lg:w-1/2 2xl:w-1/3 relative aspect-square">
        <Image
          src="/profile.jpeg"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 83vw, (max-width: 1536px) 50vw, 33vw"
          style={{
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          }}
          alt="Dra. Ivana Trama, dermatóloga en Bahía Blanca"
          className="object-cover rounded-lg shadow-xl "
        />
      </div>

      <div className="w-full lg:w-1/2  2xl:w-1/3 relative  flex flex-col gap-5 ">
        <div className="overflow-hidden">
        <h1 className=" capitalize translate-y-full text-center    text-4xl md:text-5xl text-color5 lg:text-left ">Dra Ivana Trama</h1>
        </div>

        <div className=" w-full text-color2 md:text-xl lg:text-base xl:text-xl">
          <div
            ref={body}
            className="flex flex-wrap gap-2 lg:gap-1 xl:gap-2  items-start justify-start w-full "
          >
            {splitWords(text)}
          </div>
        </div>

        <Link
          className="btn link-btn text-sm text-center opacity-0  bg-[#A39383] text-white px-8 py-3  uppercase"
          href="/sobre-mi"
        >
          Conocé más sobre mi
        </Link>
      </div>
    </section>
  );
};
