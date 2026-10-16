"use client";

import Carousel from "@/components/ui/Carousel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React from "react";
import { CiClock2 } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdPlace } from "react-icons/md";

export const Contact = () => {

  const container = React.useRef<HTMLDivElement>(null);

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
          },
        })
        
        .to(
          ".carousel",
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            delay: 0.2,
          },
          0
        )
        .from(".item", {
          opacity: 0,
          xPercent: 100,
          stagger: 0.05,
          duration: 1,
          ease: "power4.out",
        },0)
    },
    { scope: container }
  );



  return (
    <section
    ref={container}
    id="contacto"
    className="w-screen overflow-x-hidden  pb-20  mt-10 md:mt-0 md:mb-10  md:h-screen flex flex-col lg:flex-row justify-start items-center gap-10 lg:gap-20 px-4 md:px-10 xl:px-32 relative  bg-color1
    3 bg-opacity-30">
     {/*   */}

      <div
      style={{
        clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
      }}
        className="relative carousel aspect-[5/6] w-full md:w-2/3 lg:w-2/5 "
      >
        

        <Carousel images={["/img/img-8813","/img/img-8804","/img/img-2474","/img/img-8803","/img/img-2854"]}/>
      </div>

      <div className=" flex flex-col  gap-4 lg:gap-10 xl:gap-14 items-start justify-center  ">



        <div className="item text flex flex-col gap-2 items-start">
          <p className="uppercase font-bold xl:text-xl text-color2">Contacto</p>
          <h1 className="text-3xl md:text-4xl xl:text-6xl text-color5 ">
            ¿Alguna pregunta o algo que quieras saber?
          </h1>
          <p className=" text-color2">No dudes en contactarme</p>
        </div>


        <hr className="w-full hidden lg:block item"/>

        <ul className="item links flex flex-col gap-4 items-start w-full text-color2  relative ">

          <li>
            <Link
              className=" hover:text-color5 transition-colors duration-300 flex items-center gap-2"
              href="https://api.whatsapp.com/send?phone=5492914230173"
            >
              <FaWhatsapp className="text-3xl text-color5" /> +54 9 291 4230173
            </Link>
          </li>

          <li>
            <Link
              className="flex items-center gap-2 hover:text-color5 transition-colors duration-300"
              href="https://maps.app.goo.gl/my1fPC4mt92ptReg8"
            >
              <MdPlace className="text-3xl text-color5" /> 12 de Octubre 127 - Piso 1, Bahía
              Blanca
            </Link>
          </li>

          <li className=" flex items-center gap-2">
            <CiClock2 className="text-3xl text-color5" />

            <div className="flex flex-col gap-1 border-l-2 border-l-color5 pl-4 ">
              <p>Lunes 15:00 - 19:00 hs</p>
              <p>Martes y Miércoles 8:30 - 12:30 hs</p>
              <p>Jueves 15:00 - 19:00 hs</p>

              <p>Viernes 10:00 - 17:30 hs</p>
            </div>
          </li>

          <li>
            <Link
              className=" flex items-center gap-2 hover:text-color5 transition-colors duration-300"
              href="https://www.instagram.com/dermatoivanatrama/"
            >
              <FaInstagram className="text-3xl text-color5" /> @dermatoivanatrama
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
