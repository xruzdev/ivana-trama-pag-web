"use client";
import { horizontalLoop } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { reviews } from "@/data";
import { useLenis } from "lenis/react";

interface MarqueeProps {
  start: boolean;
}

export const Marquee = ({ start }: MarqueeProps) => {
  /*   const [direction, setDirection] = useState("left"); */

  const container = useRef(null);
  const tlRef = useRef<gsap.core.Timeline>();
  const boxRefs = useRef<HTMLDivElement[]>([]);

  const [showMore, setShowMore] = useState<number | null>(null);

  /*   useLenis((lenis) => {
    setDirection(lenis.direction > 0 ? "left" : "right");
  });

  useEffect(() => {
    if (tlRef.current) {
      tlRef.current.reversed(direction === "right");
    }
  }, [direction]); */

  useEffect(() => {
    if (tlRef.current && start) {
      tlRef.current.play();
    }
  }, [start]);

  const handleShowMore = (index: number) => {
    if (showMore === index) {
      gsap.to(boxRefs.current[index], {
        height: "208px",
        duration: 1.5,
        ease: "power4.out",
      });

      setShowMore(null);
    } else {
      gsap.to(boxRefs.current[index], {
        height: "auto",
        duration: 1.5,
        ease: "power4.out",
      });
      setShowMore(index);
    }
  };

  const [indexHover, setIndexHover] = useState<null | number>(null);

  useGSAP(
    () => {
      const words: HTMLElement[] = gsap.utils.toArray(".box");
      gsap.registerPlugin(useGSAP);

      tlRef.current = horizontalLoop(words, {
        repeat: -1,
        paddingRight: "52px",
        paused: true,
      });
    },
    {
      scope: container,
    }
  );

  useGSAP(() => {
    const boxs = gsap.utils.toArray<HTMLElement>(".box");

    if (indexHover !== null) {
      // Aplicar blur a los elementos que no están seleccionados
      gsap.to(
        boxs.filter((_, i) => i !== indexHover),
        {
          filter: "blur(5px)",
          duration: 0.3,
        }
      );

      // Quitar blur del elemento seleccionado
      gsap.to(boxs[indexHover], {
        filter: "blur(0px)",
        color: "#fff",
        duration: 0.3,
      });
    } else {
      // Si no hay hover, quitar el blur de todos
      gsap.to(boxs, {
        filter: "blur(0px)",
        color: "#fff", //1D201F
        duration: 0.3,
      });
    }
  }, [indexHover]); // Este useEffect se ejecutará cuando cambie el índice de hover

  return (
    <div
      ref={container}
      className={` flex  w-[600vw] md:w-[800vw]  xl:w-[500vw] items-center gap-10 group`}
    >
      {reviews.map(({ name, time, content, rating }, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) boxRefs.current[index] = el;
          }}
          onMouseOver={() => {
            setIndexHover(index);
            if (tlRef.current) {
              gsap.to(tlRef.current, {
                timeScale: 0,
                duration:0.8,
              });
            }
          }}
          onMouseOut={() => {
            setIndexHover(null);
            if (tlRef.current) {
              gsap.to(tlRef.current, {
                timeScale: 1,
                duration:0.8,
              });
            }
          }}
          className="box rounded-lg  translate-y-96 px-5  md:p-10 w-[30rem] h-52  bg-color5 text-white flex flex-col items-start justify-center gap-5 shadow-lg  "
        >
          {content.length <= 100 ? (
            <p className="text-white text-start">{`"` + content + `"`} </p>
          ) : (
            <p className="text-white text-start">
              {`"` + content.substring(0, 101)}

              {showMore === index ? (
                <span>
                  {content.substring(101, content.length)}{" "}
                  <button
                    onClick={() => handleShowMore(index)}
                    className="text-blue-500 hover:underline cursor-pointer"
                  >
                    Menos
                  </button>
                </span>
              ) : (
                <button
                  onClick={() => handleShowMore(index)}
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  <span className="text-white">{` ... `}</span>
                  Más
                </button>
              )}
            </p>
          )}
          <div className="flex items-center justify-between gap-5  w-[85vw] md:w-full">
            <div className="flex-col ">
              <h2 className="text-2xl">{name}</h2>
              <p className="text-color1 text-sm">{time}</p>
            </div>

            <p className="text-color3">
              {Array.from({ length: rating }).map((_, index) => (
                <span className="start" key={index}>
                  ⭐
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
