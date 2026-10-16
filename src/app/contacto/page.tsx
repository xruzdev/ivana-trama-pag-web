import { Contact } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { CustomEase } from 'gsap/CustomEase';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { InstagramIcon, TiktokIcon, YoutubeIcon } from "@/components/ui/Iconts";

export const metadata = {
  title: "Contacto",
  description:
    "Agendá tu turno con la Dra. Ivana Trama. Consultorio en 12 de Octubre 127, Piso 1, Bahía Blanca. Consultas por WhatsApp y redes sociales.",
  alternates: { canonical: "/contacto" },
};

export default function NamePage() {
  return (
    <section className="w-screen  min-h-[70vh] flex flex-col gap-4 md:gap-10  justify-start items-start  pb-4 md:pb-10">
       <div className="w-full relative h-[60vh] md:h-[50vh] lg:h-[60vh] xl:h-[60vh] ">
      
              <Image
                src="https://res.cloudinary.com/dqbpjov4y/image/upload/v1744572072/IMG_2846_pzkqdv.jpg"
                fill
                sizes="100vw"
                priority
                quality={80}
                alt="Consultorio de la Dra. Ivana Trama en Bahía Blanca"
                className="object-cover object-center animate-fade brightness-50"
              />
      
             <h1 className=" absolute bottom-0 right-4 md:right-10 lg:right-32 text-5xl text-white p-4 logo">
               Contacto
              </h1> 
            </div>

      <div className="flex flex-col-reverse lg:flex-row gap-4 md:gap-10  justify-start items-center w-full h-auto px-4 md:px-10 xl:px-32 ">


        <div className="w-full h-[50vh] lg:h-screen 2xl:h-[80vh] border border-color5 lg:w-1/2 2xl:w-2/3 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.2973343737017!2d-62.26242202336034!3d-38.71098198584803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda387840a5585%3A0xea29e93ac77590c!2sDra.%20Ivana%20Trama!5e0!3m2!1ses-419!2sar!4v1735935164779!5m2!1ses-419!2sar"
            className="size-full "
            loading="lazy"
          ></iframe>
        </div>


        <div className="w-full h-[80vh] md:h-[50vh] lg:h-screen  2xl:h-[80vh]  border border-color5 flex flex-col gap-  justify-evenly items-center lg:w-1/2 2xl:w-1/3">

          <div className="w-full p-4 flex flex-col justify-center text-center gap-2">
            <h3 className="uppercase text-color5 font-bold text-sm">
              Telefono
            </h3>

            <a
              href="tel:+542914567890"
              className="text-xl text-color2 hover:text-color5 transition-colors w-fit mx-auto py-1"
            >
              291 456-7890
            </a>

          </div>

          <hr className="w-4/5"/>

          <div className="w-full p-4 flex flex-col justify-center text-center gap-2">
            <h3 className="uppercase text-color5 font-bold text-sm">
              Direccion
            </h3>

            <p className="text-xl text-color2">12 de Octubre 127 - Piso 1, Bahía Blanca</p>
          </div>

        {/*   <div className="w-full p-4 flex flex-col justify-start gap-2">
            <h3 className="uppercase text-gray-600 font-bold text-sm">
              Redes Sociales
            </h3>

            <div className="flex w-full">

            </div>


          </div> */}

<hr className="w-4/5"/>

          <div className="w-full p-4 flex flex-col justify-center text-center gap-2">
            <h3 className="uppercase text-color5 font-bold text-sm">Redes Sociales</h3>
            <div className="text-xl text-color2 flex w-full px-4 items-center justify-evenly" >

            <Link
              className=" item"
              href="https://www.instagram.com/dermatoivanatrama/"
            >
              <InstagramIcon />
            </Link>
            <Link
              className="item"
              href="https://www.youtube.com/channel/UCSqyn_tYVKFfH51fkd63caw"
            >
              <YoutubeIcon />
            </Link>
            <Link
              className=" item"
              href="https://tiktok.com/@dermatoivi"
            >
              <TiktokIcon />
            </Link>

            <Link
              className="item"
              href="https://www.linkedin.com/in/ivanatrama/"
            >
              <FaLinkedin className="text-2xl text-color5" />
            </Link>

              
            </div>
          </div>

          <hr className="w-4/5"/>

          <div className="w-full p-4 flex flex-col justify-center text-center gap-2">
            <h3 className="uppercase text-color5 font-bold text-sm">
              Horarios
            </h3>

            <div className="flex flex-col gap-1 text-color2   text-xl ">
              <p>Lunes 15:00 - 19:00 hs</p>
              <p>Martes y Miércoles 8:30 - 12:30 hs</p>
              <p>Jueves 15:00 - 19:00 hs</p>

              <p>Viernes 10:00 - 17:30 hs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
