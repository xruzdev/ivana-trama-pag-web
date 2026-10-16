import { links } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { LogoFlex } from "../LogoFlex";

export const Footer = () => {
  return (
    <footer className="w-screen bg-color5  h-auto min-h-72 pt-10 px-4 md:px-10 xl:px-32 gap-10  flex flex-col justify-center items-start text-color1">
      <div className="text-center w-full lg:hidden">
        <Link
          href="/"
          className="logo text-color1 text-3xl md:text-4xl  flex mx-auto relative w-4/5 md:w-2/5 aspect-video "
        >
          <Image
            src="https://res.cloudinary.com/dqbpjov4y/image/upload/v1736450556/logo_calado_blanco_kvhe2p.png"
            fill
            sizes="(max-width: 768px) 80vw, 40vw"
            className="object-contain"
            alt="Ivana Trama"
          />
        </Link>
      </div>

      <div className="w-full py-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border-b border-b-color1 relative  ">
        <div className="text-center w-full hidden lg:block">
          <Link
            href="/"
            className="logo text-color1 text-3xl md:text-4xl  flex mx-auto relative  w-3/5 aspect-video "
          >
            <Image
              src="https://res.cloudinary.com/dqbpjov4y/image/upload/v1736450556/logo_calado_blanco_kvhe2p.png"
              fill
              sizes="(max-width: 1024px) 0px, 15vw"
              className="object-contain"
              alt="Ivana Trama"
            />
          </Link>
        </div>

        

        <div className="text-start w-full">
          <h2 className="border-b border-b-color1 uppercase   w-full mb-4">
            Tratamientos
          </h2>

          <ul className="text-sm">
            {links[2].subLinks!.map((subLink) => (
              <li key={subLink.title}>
                <Link className="link relative inline-block py-1" href={subLink.href}>
                  {subLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-start w-full">
          <h2 className="border-b border-b-color1 uppercase   w-full mb-4">
            Plataforma
          </h2>
          <ul className="text-sm">
            <li>
              <Link className="link relative inline-block py-1" href="/sobre-mi">
                Sobre mi
              </Link>
            </li>

            <li>
              <Link className="link relative inline-block py-1" href="/contacto">
                Contacto
              </Link>
            </li>

            <li>
              <Link
                className="link relative inline-block py-1"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5492914230173"
              >
                Agenda tu turno
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-start w-full ">
          <h2 className="border-b border-b-color1 uppercase   w-full mb-4">
            Redes Sociales
          </h2>
          <ul className="text-sm">
            <li>
              <Link
                className="link relative inline-block py-1"
                href="https://www.instagram.com/ivanatrama/"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                className="link relative inline-block py-1"
                href="https://tiktok.com/@dermatoivi"
              >
                TikTok
              </Link>
            </li>
            <li>
              <Link
                className="link relative inline-block py-1"
                href="https://www.youtube.com/channel/UCSqyn_tYVKFfH51fkd63caw"
              >
                YouTube
              </Link>
            </li>

            <li>
              <Link
                href="https://www.linkedin.com/in/ivana-trama/"
                className="link relative inline-block py-1"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 mb-4 lg:flex-row items-center justify-evenly text-center    ">
        <span className="pt-10 md:pt-0 text-sm">
          Ivana Trama - Dermatología Clínica y Estética ©{" "}
          {new Date().getFullYear()} - Todos los derechos reservados
        </span>

        <LogoFlex />
      </div>
    </footer>
  );
};

{
  /* <div className="text-center">
<Link href="/" className="logo text-black text-3xl md:text-4xl ">
  Ivana Trama
</Link>
<p className="text-sm">Dermatología y Cosmética</p>
<p>
  M.N. 123456 
</p>
</div>


<div className="w-full flex justify-center items-center">
Ivana Trama - Dermatología y Cosmética © {new Date().getFullYear()} -
Todos los derechos reservados
</div> */
}
