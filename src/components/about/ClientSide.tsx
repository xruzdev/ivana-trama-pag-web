"use client";
import { RevealParagraph } from "../ui/RevealParagraph";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SvgBrand } from "../ui/PreLoader";

const text =
  "ESTUDIÉ MEDICINA en la Universidad Abierta Interamericana RECIBIENDOME A LOS 23 AÑOS DE EDAD. ALLÁ POR EL AÑO 2005. REALICÉ LA ESPECIALIDAD DE CLÍNICA MÉDICA y posteriormente REALICÉ MI SEGUNDA ESPECIALIDAD EN DERMATOLOGÍA EN LA ASOCIACION ARGENTINA DE DERMATOLOGIA junto con la Universidad de Buenos Aires Hace unos años comencé a subespecializarme en la medicina estética, realizando capacitaciones exclusivas con grandes médicos reconocidos a nivel nacional e internacional.Este año sumo otro gran logro obteniendo la Diplomatura en Rejuvenecimiento Facial con inyectables de la Universidad de Buenos Aires. CONGRESOS, JORNADAS, CURSOS Y ROTACIONES SON SOLO UNA PEQUEÑA PARTE DE LA FORMACIÓN MÉDICA CONTINUA. ME CONSIDERO PROACTIVA, DESESTRUCTURADA, EMPÁTICA CON MIS PACIENTES. ENTIENDO A LA PIEL COMO EL REFLEJO DEL TODO, LO QUE PENSAMOS, SENTIMOS, CÓMO VIVIMOS, NUESTROS HÁBITOS Y COSTUMBRES. Me gusta hacer que mis pacientes se sientan mas cómodos y confiados con su piel. Empoderar su belleza es mi objetivo, acompañarlos en el proceso mi pasión.";

export const ClientSide = () => {
  const refs = useRef<HTMLSpanElement[]>([]);
  const body = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      gsap.registerPlugin(ScrollTrigger);

      const paths = Array.from(
        container.current.querySelectorAll("path")
      ) as SVGPathElement[];

      paths.forEach((path) => {
        const totalLength = path.getTotalLength().toString();
        path.style.strokeDasharray = totalLength;
        path.style.strokeDashoffset = totalLength;
      });

      gsap.to(refs.current, {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: `${window.innerWidth < 1000 ? "top" : "top"} center`,

          id: "letters",

          end: `${window.innerWidth < 1000 ? "95%" : "80%"} center`,
          toggleActions: "play none none restart",
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#svgbrand",
            start: "top center",
            end: `${window.innerWidth < 1000 ? "120px" : "160%"} center`,
            //scrub: true,

            id: "svgbrand",
            toggleActions: "play none none none",
          },
        })
        .to(
          paths,
          {
            strokeDashoffset: "0",
            duration: 1,
            stagger: 0.1,
            ease: "back.out",
          },
          0
        )
        .to(
          paths,
          {
            fill: "#786c61",
            stroke: "transparent",
            delay: 0.1,
            stagger: 0.1,
          },
          0
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: `-10% center`,
            end: `${window.innerWidth < 1000 ? "15%" : "40%"} center`,

            toggleActions: "play none none none",
            // scrub: true,
            id: "text",
          },
        })
        .to(
          "h1",
          {
            x: 0,
            duration: 1,
            ease: "power4.out",
          },
          0
        )
        .to(
          ".letter",
          {
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
          },
          0
        )
        .to(
          ".line",
          {
            width: "100%",
            duration: 1,
            ease: "power4.out",
          },
          1
        );
    },
    {
      scope: container,
    }
  );

  const splitWords = (phrase: string) => {
    const body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p className=" m-0 " key={word + "_" + i}>
          {letters}
        </p>
      );
    });
    return body;
  };

  const splitLetters = (word: string) => {
    const letters: JSX.Element[] = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          className="opacity-[0.1]"
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el as HTMLSpanElement);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <div
      ref={container}
      className="w-full px-4 md:px-10  xl:px-32 h-auto  relative py-10 2xl:py-20  flex flex-col gap-10 items-center justify-center"
    >
      {/*   <div className="w-full   relative flex justify-start    ">
        <h1 className=" text-color5 text-4xl md:text-6xl lg:text-5xl xl:text-6xl flex -translate-x-96">
          {`Mi-historia`.split("").map((letter, index) => {

            if(letter === "-"){
              return (
                <span key={index} className={"block opacity-0 letter ml-2"}>
                  {" "}
                </span>
              );
            }


            return (
              <span key={index} className={"block opacity-0 letter"}>
                {letter}
              </span>
            );
          })}
        </h1>

        <div className="absolute w-0 h-0.5 bg-color5 -bottom-2 line"></div>
      </div> */}

      <div
        ref={body}
        className="  w-full  text-color2     xl:text-xl flex flex-col gap-10 lg:flex-row lg:gap-0 justify-evenly  "
      >
 <div   className= "  gap-5   hidden md:flex">

      <svg
        version="1.1"
        x="0px"
       className="size-10 fill-color3"
        y="0px"
        viewBox="0 0 640 532"
        
      >
        <path d="M288.2,393.7c0,85.8-62,135.1-141.4,135.1c-96.9,0-144.6-73.1-144.6-190.7C2.2,153.8,103.9,29.8,272.3,7.6v111.2	c-79.4,11.1-135.1,74.7-135.1,139.8C226.3,258.6,288.2,307.9,288.2,393.7z M637.8,393.7c0,85.8-62,135.1-141.4,135.1	c-96.9,0-144.6-73.1-144.6-190.7c0-184.3,101.7-308.3,270.1-330.5v111.2c-79.4,11.1-135.1,74.7-135.1,139.8	C575.8,258.6,637.8,307.9,637.8,393.7z"></path>
      </svg>
      <svg
        version="1.1"
        x="0px"
       className="size-10 fill-color3 rotate-180"
        y="0px"
        viewBox="0 0 640 532"
        
      >
        <path d="M288.2,393.7c0,85.8-62,135.1-141.4,135.1c-96.9,0-144.6-73.1-144.6-190.7C2.2,153.8,103.9,29.8,272.3,7.6v111.2	c-79.4,11.1-135.1,74.7-135.1,139.8C226.3,258.6,288.2,307.9,288.2,393.7z M637.8,393.7c0,85.8-62,135.1-141.4,135.1	c-96.9,0-144.6-73.1-144.6-190.7c0-184.3,101.7-308.3,270.1-330.5v111.2c-79.4,11.1-135.1,74.7-135.1,139.8	C575.8,258.6,637.8,307.9,637.8,393.7z"></path>
      </svg>

 </div>
        {/*splitWords(text)*/}

        <p className="text-center lg:text-start md:text-lg md:leading-8 lg:w-2/3 2xl:w-1/2">{text}</p>
      </div>

     
    </div>
  );
};
