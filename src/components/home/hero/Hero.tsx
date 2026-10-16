"use client";
import { Preloader } from "@/components/ui/PreLoader";
import { useAnimationsStore } from "@/store/animations-store";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
export const Hero = () => {
  const container = useRef<HTMLDivElement>(null),
    tlRef = useRef<gsap.core.Timeline>(),
    rightContainer = useRef<HTMLDivElement>(null),
    leftContainer = useRef<HTMLDivElement>(null);

  const startAnimation = useAnimationsStore((state) => state.startAnimation);

  const [startLenis, setStartLenis] = useState(false);

  const [preloaded, setPreloaded] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("preloaded")) setPreloaded(true);
  }, []);

  useLenis(
    (lenis) => {
      if (preloaded) {
        lenis.start();
        return;
      }

      if (startLenis) {
        lenis.start();
      } else {
        lenis.stop();
      }
    },
    [startLenis, preloaded]
  );

  useEffect(() => {
    if (!tlRef.current) return;

    if (startAnimation) {
      tlRef.current.play();
    }
  }, [startAnimation]);

  useGSAP(
    () => {
      if (
        !container.current ||
        !rightContainer.current ||
        !leftContainer.current
      )
        return;

      gsap.set([leftContainer.current, rightContainer.current], {
        opacity: 1,
      });

      gsap.set("#mask>path", { scale: 0 });

      tlRef.current = gsap
        .timeline({
          onComplete: () => {
            setStartLenis(true);
          },
          paused: true,
        })
        .from(
          [leftContainer.current, rightContainer.current],
          {
            scale: 0,
            duration: 0.5,
            opacity: 0,

            stagger: 0.05,
            ease: "power2.inOut",
          },
          0
        )
        .to(
          "#mask>path",
          {
            scale: 1,
            duration: 0.5,
            stagger: {
              from: "center",
              amount: 0.5,
            },
            ease: "power3",
          },
          0
        );
    },
    {
      scope: container,
    }
  );

  return (
    <>
      <Preloader />
      <section
        ref={container}
        className="w-screen h-[calc(95vh-80px)] lg:h-[calc(100vh-128px)] relative flex flex-col lg:flex-row items-center justify-evenly px-4 z-50  "
      >
        <div
          ref={leftContainer}
          className="aspect-square w-screen md:w-[75vw] lg:w-1/2 relative flex items-center bg-color1 justify-center opacity-0   overflow-hidden"
        >
           <video
            poster="/video/hero.poster.webp"
            loop
            autoPlay
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className=" p-5 md:p-10 lg:p-5 w-full object-contain absolute top-0 left-0 -z-10 brightness-90"
          >
            <source src="/video/hero.av1.mp4" type='video/mp4; codecs="av01.0.08M.08"' />
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
          <svg
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 1200 1200"
            className=""
          >
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%">
                <rect width="100%" height="100%" fill="white" />

                <path
                  className="opacity-"
                  d="M1094.5,666.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M1094.5,797.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M979.5,600.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M979.5,862.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M979.5,731.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M865.5,535.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M751.5,861.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M865.5,797.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M865.5,666.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M637.5,404.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M752.5,731.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M752.5,600.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M752.5,469.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M637.5,797.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M637.5,666.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M637.5,535.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M523.5,338.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M523.5,731.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M523.5,600.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M523.5,469.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M408.5,273.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M408.5,666.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M408.5,535.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M408.5,404.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M294.5,208.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M408.5,797.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M294.5,732.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M294.5,601.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M294.5,470.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M179.5,535.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M179.5,404.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M294.5,339.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
                <path
                  d="M179.5,273.41l37,64.09-37,64.09h-74l-37-64.09,37-64.09h74Z"
                  fill="#1e1e1c"
                />
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="#f9fbf8"
              mask="url(#mask)"
            ></rect>
          </svg>
        </div>

        <div
          ref={rightContainer}
          className="z-50  flex flex-col w-full md:w-5/6 lg:w-1/3 xl:w-2/5 opacity-0 "
        >
          <span className="text-xl md:text-3xl lg:text-xl xl:text-3xl text-color2">Dra Ivana Trama</span>

          <h1 className="text-3xl md:text-6xl lg:text-3xl xl:text-5xl 2xl:text-6xl text-[#786c61] ">
            Empoderá tu belleza, yo te acompaño en el proceso
          </h1>
          <span className="self-end text-xl xl:text-2xl text-color2">
            Dermatología Clínica y Estética
          </span>
          <Link
            href="https://api.whatsapp.com/send?phone=5492914230173"
            target="_blank"
            className=" btn mt-6 text-sm  text-center  bg-[#A39383] text-white px-8 py-3    uppercase"
          >
            ¡Agendá tu turno!
          </Link>
           
        </div>
      </section>
    </>
  );
};

/**
 *  className="btn link-btn text-sm text-center opacity-0  bg-[#A39383] text-white px-8 py-3 uppercase"
 *  <div className="video-bg w-full lg:w-auto lg:h-[100%] aspect-video  relative 2xl:-left-20   overflow-hidden ">
        <video
          src="/bg2.mp4"
          loop
          autoPlay
          muted
          className=" w-full object-contain absolute top-0 -left-1/3"
        ></video>

        <Image
          src="/bg-layerd.png"
          quality={100}
          fill
          className=" object-contain lg:object-cover absolute top-0 left-0 z-10"
          alt="bg"
        />
      </div>
 */
