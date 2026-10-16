import Image from "next/image";


export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-color1 fixed top-0 left-0 z-[1000]">

      <div className="animate-fade relative w-14 md:w-24 aspect-square">

    <Image src="/img/logo-2" fill sizes="96px" alt="Cargando" className="animate-rotate-x animate-iteration-infinite" />

      </div>
    </div>
  );
}