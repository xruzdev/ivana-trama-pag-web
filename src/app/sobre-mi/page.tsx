import { ClientSide, RevealParagraph } from "@/components";
import Image from "next/image";

export const metadata = {
  title: "Sobre mi",
  description:
    "Soy médica, especialista en dermatología y estética. Ejerzo mi profesión con profunda pasión y responsabilidad. Me mantengo en permanente actualización, realizando cursos, jornadas y congresos con reconocidos profesionales a nivel nacional e internacional, para ofrecerle a mis pacientes tratamientos medico estéticos de excelencia. En el espacio de consulta soy sumamente empática. Con una mirada integral. Lo que resulta en un momento de atenta y amena escucha.",
  alternates: { canonical: "/sobre-mi" },
};

const pics = ["https://res.cloudinary.com/dqbpjov4y/image/upload/v1744479666/IMG_8804_mh8u7o.jpg","https://res.cloudinary.com/dqbpjov4y/image/upload/v1744479665/IMG_2474_phbb8y.jpg","https://res.cloudinary.com/dqbpjov4y/image/upload/v1744479664/IMG_8803_zzuhfp.jpg","https://res.cloudinary.com/dqbpjov4y/image/upload/v1744468935/IMG_8813-min_lhilzb.jpg","https://res.cloudinary.com/dqbpjov4y/image/upload/v1744575039/IMG_2515_fgkn6h.jpg","https://res.cloudinary.com/dqbpjov4y/image/upload/v1744575039/IMG_2528_vcbzfi.jpg","https://res.cloudinary.com/dqbpjov4y/image/upload/v1744575037/IMG_2492_qjjp32.jpg","https://res.cloudinary.com/dqbpjov4y/image/upload/v1744575037/IMG_2491_qqupou.jpg","https://res.cloudinary.com/dqbpjov4y/image/upload/v1744575036/IMG_2525_ucs9hx.jpg"]

export default function AboutPage() {
  return (
    <section
      className="w-screen  min-h-screen flex flex-col 
     justify-center items-center"
    >
      <div className="w-full relative h-[60vh] md:h-[50vh] lg:h-[60vh] xl:h-[60vh] ">
        <Image
          src="https://res.cloudinary.com/dqbpjov4y/image/upload/v1744567825/IMG_2577_qf6uke.jpg"
          fill
          sizes="100vw"
          priority
          quality={80}
          alt="Dra. Ivana Trama, dermatóloga en Bahía Blanca"
          className="object-cover object-center animate-fade brightness-50"
        />

        <h1 className=" absolute bottom-0 right-4 md:right-10 lg:right-32 text-5xl text-white p-4 logo">
          Dra Ivana Trama
        </h1>
      </div>

      <ClientSide />

      <div className="px-4 md:px-10 xl:px-32 w-full">
        <h1 className="  capitalize text-start   text-4xl   text-color5  w-full border-b    ">
         Mi consultorio
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-4">


          {pics.map((pic, index) => (
            <div key={index} className="w-full h-[50vh] md:h-[40vh] lg:h-[60vh] relative">
              <Image
                src={pic}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={80}
                loading="lazy"
                alt={`Consultorio de la Dra. Ivana Trama, foto ${index + 1}`}
                className="object-cover object-center animate-fade "
              />
            </div>
          ))}



        </div>
      </div>
    </section>
  );
}
