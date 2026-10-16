import { links } from "@/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { InstagramIcon, TiktokIcon, YoutubeIcon } from "../Iconts";
 



export const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleOpenMenu = (index: number) => {
    if (currentIndex === index) {
      setCurrentIndex(null);
    } else {
      setCurrentIndex(index);
    }
  };

  useLenis(
    (lenis) => {
      if (openMenu) {
        lenis.stop();
      } else {
        lenis.start();
      }
    },
    [openMenu]
  );

  const container = useRef<HTMLDivElement>(null),
    subMenu = useRef<(HTMLUListElement | null)[]>([]),
    tlMenuRef = useRef<gsap.core.Timeline>(),
    tlSubmenuRef = useRef<gsap.core.Timeline>();

  /*Menu */
  useGSAP(() => {
    if (!container.current) return;

    tlMenuRef.current = gsap
      .timeline({ paused: true })
      .to(
        "#icon-open",
        {
          y: "-100%",
          delay: 0.5,
        },
        0
      )
      .to(
        container.current,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.5,
          ease: "power4.out",
          delay: -0.5,
        },
        1
      )
      .to(
        "#icon-close",
        {
          y: 0,
        },
        1
      )
      .to(
        ".item",
        {
          opacity: 1,
          stagger: 0.06,
        },
        1
      )
      .to(
        ".line",
        {
          width: "100%",
          duration: 1,
        },
        1
      );
  });

  /*SubMenu */
/*   useGSAP(
    () => {

      if (!currentIndex) return;

      if (!subMenu.current[currentIndex]) return;

      const childrens = subMenu.current[currentIndex].children;

      console.log(childrens);

      tlSubmenuRef.current = gsap
        .timeline({ paused: true })
        .to(
          subMenu.current,
          {
            height: "auto",
            duration: 0.5,
            ease: "power4.out",
          },
          0
        )
        .to(
           childrens,
          {
            opacity: 1,
            stagger: 0.05,
          },
          0
        );
    },
    { scope: container,dependencies:[currentIndex] }
  ); */

  useEffect(() => {
    if (!tlMenuRef.current) return;

    if (openMenu) {
      tlMenuRef.current.play();
    } else {
      tlMenuRef.current.reverse();
    }
  }, [openMenu]);

 /*  useGSAP(() => {
   
    if (currentIndex !== null && subMenu.current[currentIndex]) {

      gsap.to(subMenu.current[currentIndex], {
        height: "auto",
        duration: 0.5,
        ease: "power4.out",
      });

      const childrens = subMenu.current[currentIndex].children;

      gsap.to(childrens, {
        opacity: 1,
        stagger: 0.05,
      });
      
    } else {

      gsap.to(subMenu.current, {
        height: 0,
        duration: 0.5,
        ease: "power4.out",
      });

      
     
    }

    
  }, [currentIndex]); */

  return (
    <>
      <div className="nav-item opacity-0 -translate-y-32 text-2xl lg:hidden z-[150]  flex items-center gap-2">
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="relative z-50 uppercase  overflow-hidden "
        >
          <HiMenuAlt2 id="icon-open" className="text-color2" />

          <RxCross1
            id="icon-close"
            className="text-color2 absolute top-0 z-50 -left-0 translate-y-full"
          />
          {/*className="absolute -left-0 translate-y-full" */}
        </button>

        
      </div>

      {/* <div className="line absolute w-0 h-0.5 bg-color5 z-[180] bottom-0 left-0" /> */}

      <div
        ref={container}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
        }}
        className="absolute top-0 s-bottom-[calc(100dvh-80px)] left-0 w-screen  h-screen pt-14 bg-[#d6ccc2] z-[100] flex flex-col justify-between px-4 md:px-10 lg:hidden"
      >
        <ul className="w-full h-2/3 flex flex-col text-xl items-start justify-evenly md:justify-start md:gap-10 md:mt-10 text-color5">
          {links.map((link, index) => (
            <li key={link.href} className="w-full h-auto opacity-0 item ">
              {link.subLinks ? (
                <div className="w-full h-auto   ">
                  <div className="w-full flex justify-between">
                    <Link
                      onClick={() => {
                        setOpenMenu(false);
                      }}
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                    <button
                      onClick={() => handleOpenMenu(index)}
                      title="submenu"
                    >
                      <IoIosArrowDown className="text-xl" />
                    </button>
                  </div>
                  <ul
                    ref={(el) => {
                      subMenu.current[index] = el as HTMLUListElement;
                    }}
                    style={{
                      maxHeight: currentIndex === index ? "100px" : 0,
                      transition: "max-height 0.5s ease-in",

                    }}
                    className=" ml-4 w-full flex  flex-col justify-items-start pt-3 overflow-hidden ease-in-out text-base"
                  >
                    {link.subLinks.map((subLink) => (
                      <li
                       style={{
                        opacity: currentIndex === index ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out",
                        transitionDelay: `${index * 0.02}s`,
                       }} 
                      className="h-10" key={subLink.href}>
                        <Link
                          onClick={() => {
                            setCurrentIndex(null);
                            setOpenMenu(false);
                          }}
                          href={subLink.href}
                        >
                          {subLink.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                  href={link.href}
                >
                  {link.title}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex flex-col h-1/3 justify-center gap-4">
          <div className="flex w-full justify-evenly items-center">
            <Link
              className="opacity-0 item"
              href="https://www.instagram.com/dermatoivanatrama/"
            >
              <InstagramIcon />
            </Link>
            <Link
              className="opacity-0 item"
              href="https://www.youtube.com/channel/UCSqyn_tYVKFfH51fkd63caw"
            >
              <YoutubeIcon />
            </Link>
            <Link
              className="opacity-0 item"
              href="https://tiktok.com/@dermatoivi"
            >
              <TiktokIcon />
            </Link>
          </div>
          <div className="line w-0 h-[1px] bg-color5" />
          <span className="text-sm text-center opacity-0 item text-color2">
            Empoderá tu belleza, yo te acompaño en el proceso
          </span>
        </div>
      </div>
    </>
  );
};
