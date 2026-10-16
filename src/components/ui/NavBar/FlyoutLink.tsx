import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";

export const FlyoutLink = ({
  children,
  href,
  FlyoutContent,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const flyoutContainer = useRef<HTMLDivElement>(null);

  const showFlyout = open && FlyoutContent;

  useGSAP(()=>{

    if (showFlyout) {
      gsap.to(flyoutContainer.current, {
        opacity: 1,
        duration: 0.5,
      });
    } else {
      gsap.to(flyoutContainer.current, {
        opacity: 0,
        duration: 0.5,
        
      });
    }



  },[open])




  return (
    <li onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link href={href} className="relative link">
        {children}
      </Link>

      {showFlyout && (
        <>
          <div className="absolute   bg-transparent h-20 w-72  left-10  -bottom-[22px]"></div>

          <div
            ref={flyoutContainer}
            className="opacity-0 flex   absolute  top-32 lg:-left-[calc(50%+40px)]  xl:-left-[calc(50%+128px)] bg-color1 shadow-lg  w-screen pt-10  h-64 px-32  items-start "
          >
            {FlyoutContent}
          </div>
        </>
      )}
    </li>
  );
};
