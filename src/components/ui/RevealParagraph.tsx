"use client";

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const RevealParagraph = ({ text,className }: { text: string, className:string }) => {
  const refs = useRef<HTMLSpanElement[]>([]);
  const body = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(refs.current, {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: `top center`,
          end: `bottom center`,
          toggleActions: "play none none restart",
         
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1,
      });
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
    <div ref={container} className={className}>
      <div
        ref={body}
        className="flex flex-wrap gap-2  items-center justify-start lg:justify-center w-full"
      >
        {splitWords(text)}
      </div>
    </div>
  );
  
};
