'use client'
import { useLenis } from "lenis/react";
import { useState } from "react";
import { CiCircleChevUp } from "react-icons/ci";
import { LenisLink } from "./LenisLink";

export const UpBtn = () => {
    
    const [scroll, setScroll] = useState(0);

    useLenis((lenis)=>{

        lenis.on("scroll", (e)=>{
            setScroll(e.scroll)
            
        })
       
    })

  
 
  return (
    <LenisLink
      href="#hero"
      className={`btn fixed bottom-4 right-4 text-5xl text-gray-500   p-2 rounded-full z-[100] cursor-pointer ${scroll > 100 ? "block" : "hidden"}  hover:scale-105   `}
    >
      <CiCircleChevUp  className={`${scroll > 150 ? "opacity-100" : "opacity-0"} transition-opacity duration-300 text-color5`} />
    </LenisLink>
  );
};
