"use client";
import { links } from "@/data";

import { useAnimationsStore } from "@/store/animations-store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FlyoutLink } from "./FlyoutLink";
import { MobileMenu } from "./MobileMenu";

export const NavBar = () => {
  

 

  const path = usePathname();

  const navRef = useRef<HTMLDivElement>(null);

  const startNavAnimation = useAnimationsStore((state) => state.startAnimation);
  

  

  useGSAP(
    () => {
      if (!navRef.current) return;

      if (path !== "/") {
        gsap.set(".nav-item", { opacity: 1, y: 0 });
        return;
      }

      if (startNavAnimation) {
        gsap.set(".nav-item", { position: "static" });

        gsap.to(".nav-item", {
          opacity: 1,
          stagger: 0.1,
          y: "0",
        });
      }
    },
    {
      scope: navRef,
      dependencies: [startNavAnimation],
    },
  );

  return (
    <>
      <nav
        ref={navRef}
        id="hero"
        className=" relative  h-20 lg:h-32 flex items-center justify-between px-4 md:px-10 xl:px-32 top-0 left-0 w-screen z-[100]    "
      >
        <div className="size-full bg-color1 absolute top-0 left-0 z-50" />

      

        <div className="nav-item opacity-0 -translate-y-32 w-auto lg:w-1/3 z-[150]  ">
          <Link
            href="/"
            className="logo text-color5 text-3xl md:text-4xl aspect-square w-16 flex relative "
          >
            <Image
              src="/img/logo-2"
              fill
              sizes="64px"
              priority
              alt="Ivana Trama - Dermatología Clínica y Estética"
              className="object-contain"
            />
          </Link>
        </div>

        <div className="nav-item opacity-0 -translate-y-32   hidden w-1/2 lg:w-2/3 h-full lg:flex items-center justify-between  z-[100] bg-resd-400 ">
          <ul className=" flex items-center h-full text-sm text-nowrap justify-center uppercase  gap-6 w-1/2 text-color2  ">
            {links.map((link) => {
              return (
                <FlyoutLink
                  href={link.href}
                  key={link.href}
                  FlyoutContent={
                    link.subLinks && (
                      <>
                        <div className="flex gap-4 flex-col w-1/2 items-start h-full">
                          {link.title.toLowerCase() == "tienda" && (
                            <Link
                              href="/categoria"
                              className="capitalize link relative font-bold"
                            >
                              Todos los productos
                            </Link>
                          )}

                          <ul className="grid grid-cols-3 gap- w-full h-3/5 text-color2 capitalize ">
                            {link.subLinks.map((subLink) => (
                              <li key={subLink.href}>
                                <Link
                                  href={subLink.href}
                                  className="link relative"
                                >
                                  {subLink.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className=" mx-auto relative h-[90%] aspect-video">
                          <Image
                            src={link.src}
                            fill
                            sizes="(max-width: 1024px) 0px, 33vw"
                            alt=""
                          />
                        </div>
                      </>
                    )
                  }
                >
                  {link.title}
                </FlyoutLink>
              );
            })}
          </ul>

          <ul className="flex items-center justify-end h-full text-2xl gap-4 font-light w-1/2  ">
            <li>
              <Link
                className=" item"
                aria-label="Instagram de Ivana Trama"
                href="https://www.instagram.com/dermatoivanatrama/"
              >
                <FaInstagram aria-hidden="true" className="text-xl text-color5" />
              </Link>
            </li>
            <li>
              <Link
                className=" item"
                aria-label="Canal de YouTube de Ivana Trama"
                href="https://www.youtube.com/channel/UCSqyn_tYVKFfH51fkd63caw"
              >
                <FaYoutube aria-hidden="true" className="text-xl text-color5" />
              </Link>
            </li>
            <li>
            <Link
              className=" item"
              aria-label="TikTok de Ivana Trama"
              href="https://tiktok.com/@dermatoivi"
            >
               <FaTiktok aria-hidden="true" className="text-xl text-color5" />
            </Link>
            </li>
          </ul>
        </div>

          <MobileMenu  />

        
      </nav>
    </>
  );
};

/**
 * 
 *   {links.map((link) => (
              <FlyoutLink
                href={link.href}
                key={link.href}
                FlyoutContent={
                  link.subLinks && (
                    <>
                      <div className="flex gap-4 flex-col w-1/2 items-start h-full">
                        {link.title.toLowerCase() =="tienda" && <Link
                          href="/categoria"
                          className="capitalize link relative font-bold"
                        >
                          Todos los productos
                        </Link>}

                        <ul className="grid grid-cols-3 gap- w-full h-3/5 text-black capitalize ">
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.href}>
                              <Link
                                href={subLink.href}
                                className="link relative"
                              >
                                {subLink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className=" mx-auto relative h-[90%] aspect-video">
                        <Image src={link.src} fill alt="" />
                      </div>
                    </>
                  )
                }
              >{link.title}</FlyoutLink>
            ))}
 */
