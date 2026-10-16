import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Tratamientos",
  description:
    "Tratamientos faciales y capilares de dermatología clínica y estética en Bahía Blanca: toxina botulínica, ácido hialurónico, bioestimuladores, mesoterapia y tecnología Nordlys de Candela.",
  alternates: { canonical: "/tratamientos" },
};

export default function TretmentsAll() {
  return (
    <section className="w-screen   flex flex-col  items-start justify-start gap-5  ">
      <div className="w-full relative h-[60vh] md:h-[50vh] lg:h-[60vh] xl:h-[60vh] ">
        <Image
          src="/img/tratamiento"
          fill
          sizes="100vw"
          priority
          quality={80}
          alt="Tratamientos dermatológicos de la Dra. Ivana Trama"
          className="object-cover object-center animate-fade brightness-50"
        />

        <h1 className="absolute bottom-0 right-4 md:right-10 lg:right-32 text-5xl text-white p-4  logo ">
          Tratamientos
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10 w-full  px-4 md:px-10 xl:px-32 py-10 ">
        <div className=" flex flex-col items-start justify-center gap-10 animate-fade-up">
          <h2 className="text-3xl">Tratamientos Faciales</h2>

          <div className="aspect-[12/4] w-full bg-black relative">
            <Image
              src="/img/img-2714"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
              alt=""
            />
          </div>

          <p className="text-color2">
            En nuestra clínica dermatológica, ofrecemos una amplia gama de{" "}
            <strong>tratamientos faciales</strong> diseñados para rejuvenecer,
            revitalizar y mejorar la apariencia de tu piel. Utilizamos
            tecnología avanzada y productos de la más alta calidad para
            garantizar resultados naturales y duraderos. Desde tratamientos con{" "}
            <strong>toxina botulínica</strong> para suavizar arrugas y relajar
            músculos faciales, hasta{" "}
            <strong>rellenos de ácido hialurónico</strong> que devuelven volumen
            y definición a tu rostro, cada procedimiento es personalizado para
            adaptarse a tus necesidades específicas. Además, contamos con
            terapias innovadoras como{" "}
            <strong>bioestimuladores de colágeno</strong> y{" "}
            <strong>tecnología láser</strong> para tratar imperfecciones,
            manchas y flacidez. Nuestro objetivo es ayudarte a lucir una piel
            radiante, saludable y rejuvenecida, siempre bajo la supervisión de
            profesionales expertos en dermatología estética.
          </p>

          <Link
            href="/tratamientos/tratamientos-faciales"
            className="text-color1 uppercase mx-auto  px-8 text-sm py-2 bg-color3"
          >
            Ver más
          </Link>
        </div>

        <div className=" h-[1px] w-full lg:h-72 lg:w-[1px] bg-color5 " />

        <div className=" flex flex-col items-start justify-center gap-10 animate-fade-up ">
          <h2 className="text-3xl">Tratamientos Capilares</h2>

          <div className="aspect-[12/4] w-full bg-black relative">
            <Image
              src="/img/img-2978"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-top"
              alt=""
            />
          </div>
          <p className="text-color2">
            En el área de <strong>tratamientos capilares</strong>, nos enfocamos
            en devolver la vitalidad, fuerza y densidad a tu cabello. Utilizamos
            técnicas avanzadas como el{" "}
            <strong>plasma rico en plaquetas (PRP)</strong>, la{" "}
            <strong>mesoterapia capilar</strong> y la{" "}
            <strong>carboxiterapia</strong>, que estimulan el crecimiento del
            folículo piloso, mejoran la circulación sanguínea y fortalecen la
            raíz del cabello. Además, ofrecemos soluciones personalizadas para
            prevenir la caída del cabello y tratar problemas como la alopecia,
            utilizando métodos como el <strong>microneedling</strong> y el{" "}
            <strong>bloqueo de dutasteride</strong>. Nuestros tratamientos son
            mínimamente invasivos, seguros y efectivos, diseñados para adaptarse
            a las necesidades de cada paciente. Recupera la confianza en tu
            cabello y luce una melena más fuerte, sana y abundante con la ayuda
            de nuestros especialistas en dermatología capilar.
          </p>

          <Link
            href="/tratamientos/tratamientos-capilares"
            className="text-color1 uppercase mx-auto   px-8 text-sm py-2 bg-color3"
          >
            Ver más
          </Link>
        </div>
      </div>
    </section>
  );
}
