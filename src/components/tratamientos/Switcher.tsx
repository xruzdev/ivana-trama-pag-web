"use client";

import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const Switcher = ({
  content,
}: {
  content: {
    title: string;
    slug: string;
  }[];
}) => {
  const { replace } = useRouter();

  
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleTretmentSwitcher = (topic: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("topic", topic);

    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <ul className=" grid grid-cols-2 md:grid-cols-3  content-end place-items-end lg:flex  gap-10 lg:gap-0 lg:justify-evenly lg:items-center w-full ">
      {content.map(({ title, slug }, index) => (
        <li key={index} className="flex flex-col items-center gap-4 relative mx-auto">
          <button
            onClick={() => {
              handleTretmentSwitcher(slug);
            }}
            className={`border-b border-b-color3 pb-5 xl:px-2 `}
          >
            {title}
          </button>

          { searchParams.get("topic") === slug && (
            <div className="absolute w-full h-5 bg-gradient-to-t from-transparent to-color5 -bottom-5 animate-fade"></div>
          )}
        </li>
      ))}
    </ul>
  );
};
