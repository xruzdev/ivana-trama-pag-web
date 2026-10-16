import { Switcher } from "@/components";
import { treatments } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CiPlay1 } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

interface TretmentsKindProps {
  params: {
    slug: "tratamientos-faciales" | "tratamientos-capilares";
  };
  searchParams: {
    topic: string;
  };
}

export function generateStaticParams() {
  return Object.keys(treatments).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TretmentsKindProps) {
  const { slug } = params;

  const treatment = treatments[slug];

  if (!treatment) return {};

  return {
    title: treatment.title,
    description: `${treatment.title} de la Dra. Ivana Trama, dermatología clínica y estética en Bahía Blanca. Conocé el detalle de cada tratamiento, sus beneficios y cuidados.`,
    alternates: { canonical: `/tratamientos/${slug}` },
  };
}

export default function TretmentsKind({
  params,
  searchParams,
}: TretmentsKindProps) {
  const { slug } = params;
  const { topic } = searchParams;

  const actualTreatment = treatments[slug];

  if (!actualTreatment) notFound();

  const aux = actualTreatment.treatments
    ? actualTreatment.treatments.find((t) => t.slug === topic)
    : undefined;

  const currentTopic = actualTreatment.treatments
    ? aux?.subTreatments
    : actualTreatment.subTreatments;

  return (
    <section className="w-screen   flex flex-col  items-start justify-start gap-5 lg:gap-10  ">
      <div className="w-full relative h-[60vh] md:h-[50vh] lg:h-[60vh] xl:h-[60vh] ">
        <Image
          src={actualTreatment.hero}
          fill
          sizes="100vw"
          priority
          quality={80}
          alt={actualTreatment.title}
          className="object-cover object-center animate-fade brightness-50"
        />

        <h1 className="absolute bottom-0 right-4 md:right-10 lg:right-32 text-5xl text-white p-4  logo ">
          {actualTreatment.title}
        </h1>
      </div>

      <div className="flex flex-col items-center justify-evenly gap-10 w-full  px-4 md:px-10 xl:px-32 py-10 lg:py-5 xl:py-10  lg:gap-20">
        {actualTreatment.treatments && (
          <Switcher
            content={actualTreatment.treatments.map((t) => {
              return {
                title: t.title,
                slug: t.slug,
              };
            })}
          />
        )}

        <div className="h-auto w-full flex flex-col gap-10">
          {aux && (
            <h2 className="w-full border-b border-b-color3 text-color3 text-2xl md:text-4xl lg:text-3xl xl:text-4xl">
              Todos los tratamientos con {aux.title}
            </h2>
          )}

          {currentTopic &&
            currentTopic.map((t, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-start gap-5 xl:py-10 xl:gap-10   xl:px-10 boder-b border-b-color3"
              >
                <h3 className="text-color5  xl:text-2xl text-lg md:text-2xl lg:text-xl flex items-center gap-10">
                  {t.title}{" "}
                  {t.reel && (
                    <Link
                      href={t.reel}
                      target="_blank"
                      aria-label={`Ver video sobre ${t.title}`}
                      className=" btn bg-color5 rounded-lg px-4 py-2"
                    >
                      <CiPlay1 aria-hidden="true" className="text-white " />
                    </Link>
                  )}
                </h3>

                <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-0  justify-evenly">
                  <div className=" w-full lg:w-1/5  aspect-video  lg:aspect-[9/11 relative">

                  <Image src={t.src!=="" ? t.src : "/img/tratamiento-item"} alt={t.title ?? ""} fill sizes="(max-width: 1024px) 100vw, 20vw" loading="lazy" className="object-cover object-center" />
                  </div>

                  <ol className=" w-full lg:w-3/5 h-full flex flex-col gap-5 lg:gap-2">
                    <li>
                      <h4 className="xl:text-xl text-base md:text-xl lg:text-lg">
                        Descripcion:
                      </h4>
                      <p className="text-color2">{t.description}</p>
                    </li>

                    <li>
                      <h4 className="xl:text-xl text-base md:text-xl lg:text-lg">
                        Beneficios:
                      </h4>
                      {t.benefits.map((b, index) => (
                        <p key={index} className="text-color2">
                          {b}
                        </p>
                      ))}
                    </li>

                    {t.duration && (
                      <li>
                        <h4 className="xl:text-xl text-base md:text-xl lg:text-lg">
                          Duración:
                        </h4>
                        <p className="text-color2">{t.duration}</p>
                      </li>
                    )}

                    <li>
                      <h4 className="xl:text-xl text-base md:text-xl lg:text-lg">
                        Cuidados Previos:
                      </h4>
                      <p className="text-color2">{t.preCare}</p>
                    </li>

                    <li>
                      <h4 className="xl:text-xl text-base md:text-xl lg:text-lg">
                        Cuidados Post:
                      </h4>
                      <p className="text-color2">{t.afterCare}</p>
                    </li>

                    <li className="w-full">
                      <Link
                        target="_blank"
                        href={`https://api.whatsapp.com/send?phone=5492914230173&text=Hola!+Quiero+más+información+sobre+el+tratamiento+${t.title}.`}
                        className="btn bg-color3 text-sm w-fit uppercase  text-color1 px-8 py-2 flex items-center justify-center gap-2 mx-auto lg:mx-0"
                      >
                        <FaWhatsapp /> Consultar por este tratamiento
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
