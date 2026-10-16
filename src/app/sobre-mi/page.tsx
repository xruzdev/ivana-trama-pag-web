import { ClientSide, RevealParagraph } from "@/components";
import Image from "next/image";

export const metadata = {
  title: "Sobre mi",
  description:
    "Soy médica, especialista en dermatología y estética. Ejerzo mi profesión con profunda pasión y responsabilidad. Me mantengo en permanente actualización, realizando cursos, jornadas y congresos con reconocidos profesionales a nivel nacional e internacional, para ofrecerle a mis pacientes tratamientos medico estéticos de excelencia. En el espacio de consulta soy sumamente empática. Con una mirada integral. Lo que resulta en un momento de atenta y amena escucha.",
  alternates: { canonical: "/sobre-mi" },
};

const pics = ["/img/img-8804","/img/img-2474","/img/img-8803","/img/img-8813","/img/img-2515","/img/img-2528","/img/img-2492","/img/img-2491","/img/img-2525"]

export default function AboutPage() {
  return (
    <section
      className="w-screen  min-h-screen flex flex-col 
     justify-center items-center"
    >
      <div className="w-full relative h-[60vh] md:h-[50vh] lg:h-[60vh] xl:h-[60vh] ">
        <Image
          src="/img/img-2577"
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
