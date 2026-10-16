import { Treatment } from "@/interfaces";
/* import { title } from "process";

export const tratamientos = {
  faciales: {
    title: "Tratamientos Faciales",
    hero: "/tratamiento-facial.jpg",
  },
  capilares: {
    title: "Tratamientos Capilares",
    hero: "/tratamiento-capilar.jpg",
    content: [
      {
        title: "Microneedling",
        slug: "microneedling",
        descripcion: "",
        beneficios: [],
        cuidadosPrevios: "",
        cuidadosPosteriores: "",
        duracion: "",
      },
    ],
  },
}; */

export const treatments: {
  "tratamientos-faciales": Treatment;
  "tratamientos-capilares": Treatment;
} = {
  "tratamientos-faciales": {
    title: "Tratamientos Faciales",
    hero: "/tratamiento-facial.jpg",
    slug: "tratamientos-faciales",
    treatments: [
      {
        title: "Toxina Botulínica",
        slug: "toxina-botulinica",
        subTreatments: [
          {
            title: "Skinquality",
            slug: "skinquality",
            description:
              "Mejora la calidad de la piel mediante microinyecciones de toxina botulínica hiperdiluida.",
            benefits: [
              "Indicado en pacientes con Rosácea, melasma, seborrea y poros dilatados",
              "Hidratación profunda, elasticidad mejorada y reducción de líneas finas.",
              "Mejora la textura y luminosidad de la piel.",
              "Estimula la producción de colágeno y elastina.",
            ],
            preCare:
              "Evitar el consumo de alcohol y antiinflamatorios antes del tratamiento.",
            afterCare: "Evitar exposición solar y maquillaje durante 12 horas.",
            duration: "3 a 6 meses",
            src: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1744570674/IMG_2616_ontp58.jpg",
          },
          {
            title: "Bruxismo",
            slug: "bruxismo",
            description:
              "Relajación de los músculos de la mandíbula mediante toxina botulínica.",
            benefits: [
              "Alivio del dolor mandibular, reducción del rechinamiento y protección dental.",
              "Mejora síntomas asociados, como cefalea y dolor cervical.",
              "Mejora la apariencia facial y previene el desgaste dental.",
            ],
            preCare:
              "Evitar consumo de alcohol y medicamentos anticoagulantes.",
            afterCare: "No realizar ejercicio las primeras 12 horas.",
            duration: "4 a 6 meses",
            src: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1744571000/IMG_2624_pbvmom.jpg",
          },
          {
            title: "Hiperhidrosis",
            slug: "hiperhidrosis",
            description:
              "Reducción de la sudoración excesiva mediante inyecciones de toxina botulínica.",
            benefits: [
              "Control efectivo del sudor y mejora en la calidad de vida.",
              "Reducción de manchas y mal olor en axilas, manos y pies.",
            ],
            preCare: "Evitar el uso de antitranspirantes 24 horas antes.",
            afterCare:
              "Evitar ejercicio intenso y baños calientes durante 24 horas.",
            duration: "9 a 12 meses",
            src: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1744570674/IMG_2616_ontp58.jpg",
          },
          {
            title: "Nefertiti",
            slug: "nefertiti",
            description:
              "Reafirmación del contorno del cuello y mandíbula mediante toxina botulínica.",
            benefits: [
              "Aspecto rejuvenecido y definido del cuello.",
              "Reducción de la papada y flacidez en la zona.",
            ],
            preCare:
              "Evitar medicamentos anticoagulantes y alcohol antes del procedimiento.",
            afterCare:
              "Evitar masajes o presión en la zona tratada por 24 horas.",
            duration: "4 a 6 meses",
            src: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1744571416/IMG_2629_azldlv.jpg",
          },
        ],
      },
      {
        title: "Ácido Hialurónico",
        slug: "acido-hialuronico",
        subTreatments: [
          {
            title: "Top Model Look",
            slug: "top-model-look",
            description:
              "Relleno dérmico para resaltar pómulos y contornos faciales.",
            benefits: [
              "Mejora la armonía y proporción del rostro.",
              "Contribuye a mejorar la mirada de cansada",
              "Mejora las ojeras y el surco nasogeniano.",
            ],
            preCare:
              "Evitar alcohol y antiinflamatorios antes del tratamiento.",
            afterCare: "Evitar exposición solar y maquillaje durante 24 horas.",
            duration: "12 a 18 meses",
            reel: "https://www.instagram.com/reel/C_NtYkpyM2s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            src: "",
          },
          {
            title: "Armonización labial y código de barras",
            slug: "armonizacion-labial",
            description:
              "Relleno de labios y líneas peribucales con ácido hialurónico.",
            benefits: [
              "Labios más hidratados",
              "Aumento del volumen con resultados naturales",
              "Corrección eventual de asimetrías",
              "Reducción de arrugas y líneas de expresión en el contorno de labios.",
            ],
            preCare:
              "Evitar antiagregantes la semana previa y alcohol 24 hs antes del tratamiento. Profilaxis de herpes labial si es recurrente.",
            afterCare:
              "Evitar besos, comidas calientes y maquillaje durante 24 horas.",
            duration: "9 a 18 meses",
            reel: "https://www.instagram.com/reel/DDW4ZzIhVE1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            src: "",
          },
          {
            title: "Proyección del mentón",
            slug: "proyeccion-menton",
            description:
              "Mejora la proyección y simetría del mentón con ácido hialurónico.",
            benefits: [
              "Perfil más definido y balanceado.",
              "Mejoría de la celulitis del mentón (mentón poceado)",
              "Contribuye de manera indirecta a mejorar la papada",
            ],
            preCare: "Evitar alcohol y antiinflamatorios.",
            afterCare:
              "Evitar presionar la zona tratada por 24 horas y realizar deporte.",
            reel: "https://www.instagram.com/reel/DAa15dextAj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            src: "",
            duration: "12 a 18 meses",
          },
          {
            title: "Fosa temporal",
            slug: "fosa-temporal",
            description:
              "Relleno de las zonas temporales para mejorar el volumen perdido.",
            benefits: [
              "Aspecto rejuvenecido y equilibrado del rostro.",
              "Corrección de hundimientos y flacidez en la zona.",
            ],
            preCare:
              "Evitar anticoagulantes y alcohol antes del procedimiento.",
            afterCare: "Evitar masajes o presión en la zona tratada.",
            duration: "12 a 18 meses",
            src: "",
          },
        ],
      },
      {
        title: "Bioestimuladores",
        slug: "bioestimuladores",
        subTreatments: [
          {
            title: "Radiesse",
            slug: "radiesse",
            description:
              "Estimula la producción de colágeno para mejorar la firmeza de la piel a través de hidroxiapatita de calcio sin aportar volumen al rostro.",
            benefits: [
              "Piel más firme y rejuvenecida de forma progresiva.",
              "Mejora la textura y elasticidad de la piel.",
              "Efecto tensado de la piel.",
            ],
            preCare:
              "Evitar antiinflamatorios y alcohol antes del tratamiento.",
            afterCare:
              "Evitar ejercicio físico y antiinflamatorios. Aplicar protección solar SPF 50+ durante dos semanas.",
            duration: "12 a 18 meses",
            reel: "https://www.instagram.com/reel/DDExsk8Ia2_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            src: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1744571704/IMG_2876_zokcwl.jpg",
          },
          {
            title: "Sculptra",
            slug: "sculptra",
            description:
              "Bioestimulador que mejora la textura y firmeza de la piel.",
            benefits: ["Producción progresiva de colágeno y firmeza visible."],
            preCare: "Evitar anticoagulantes antes del tratamiento.",
            afterCare:
              "Masajear la piel cinco veces al día por cinco minutos durante cinco días.",
            duration: "1 a 2 años",
            src: "",
          },
        ],
      },

      {
        title: "Tecnología Nordlys Candela",
        slug: "tecnologia-nordlys-candela",
        subTreatments: [
          {
            src: "",
            title: "Luz Pulsada Intensa",
            slug: "luz-pulsada-intensa",
            description:
              "Tratamiento con luz pulsada con doble filtro dual para eliminar manchas solares, rosácea y acné.",
            benefits: [
              "Mejora y unifica el tono de piel, reduce manchas e imperfecciones.",
              "Estimula la producción de colágeno y elastina.",
            ],
            preCare: "Evitar exposición solar y cremas autobronceantes.",
            afterCare: "Usar protector solar y evitar exposición al sol.",
            duration: "Se recomiendan sesiones mensuales 3 a 6",
            reel: "https://www.instagram.com/reel/DBi8E_whIDA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
          },
          {
            title: "Láser Frax 1550",
            slug: "laser-frax-1550",
            description:
              "Láser no ablativo para estimular el colágeno y tratar arrugas, cicatrices y flacidez.",
            benefits: [
              "Mejoría de las cicatrices de acné, arrugas peribucales y patas de gallo.",
              "Reafirmación y rejuvenecimiento progresivo de la piel con efecto tensado.",
              "Mejora la textura y elasticidad.",
            ],
            preCare:
              "Evitar la exposición solar y ácidos renovadores la semana previa.",
            afterCare: "Protección solar estricta los primeros 7 a 10 días.",
            duration: "Se recomiendan realizar sesiones mensuales 3 a 6",
            reel: "https://www.instagram.com/reel/C_vNdYpRj9o/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            src: "",
          },
        ],
      },
      {
        title: "Mesoterapias Importadas",
        slug: "mesoterapias-importadas",
        subTreatments: [
          {
            title: "NCTF 135 HA Fillorga",
            slug: "nctf-135-ha-fillorga",
            src: "",
            description:
              "Tratamiento de renovación celular a base de ácido hialurónico y un cóctel de vitaminas y minerales.",
            benefits: [
              "Biorevitalización para pieles fatigadas y faltas de luz o firmeza.",
              "Redensifica la dermis y alisa las arruguitas superficiales.",
              "Piel visiblemente más luminosa.",
            ],
            preCare: "Evitar exposición solar y maquillaje durante 24 horas.",
            afterCare:
              "Usar protector solar y evitar la exposición directa al sol.",
          },
          {
            src: "", 
            title: "Despigmentation solution de Mesoestetic",
            slug: "despigmentation-solution-mesoestetic",
            description:
              "Combinación de principios activos con acción correctiva de alteraciones pigmentarias y antioxidantes.",
            benefits: [
              "Mejora la apariencia de la piel.",
              "Combate los signos del envejecimiento.",
              "Reduce la flacidez y la falta de hidratación.",
              "Nutre la piel celularmente.",
            ],
            preCare: "Evitar exposición solar y maquillaje durante 24 horas.",
            afterCare:
              "Usar protector solar y evitar la exposición directa al sol.",
          },
        ],
      },
      {
        title: "Profhilo",
        slug: "profhilo",
        subTreatments: [
          {
            src: "",
            title: "Profhilo",
            slug: "profhilo",
            description:
              "Tratamiento estético no quirúrgico con ácido hialurónico para estimular colágeno y elastina.",
            benefits: [
              "Mejora la apariencia de la piel.",
              "Combate los signos del envejecimiento.",
              "Reduce la flacidez y la falta de hidratación.",
              "Nutre la piel celularmente.",
            ],
            preCare:
              "Evitar alcohol y antiinflamatorios antes del tratamiento.",
            afterCare: "Evitar exposición solar y maquillaje durante 24 horas.",
            duration: "6 a 12 meses.",
          },
        ],
      },
    ],
  },
  "tratamientos-capilares": {
    title: "Tratamientos Capilares",
    hero: "/tratamiento-capilar.jpg",
    slug: "tratamientos-capilares",
    subTreatments: [
      {
        title: "Plasma Rico en Plaquetas",
        slug: "plasma-rico-en-plaquetas",
        description:
          "Regeneración capilar mediante la reinyección de plasma propio.",
        benefits: [
          "Prevenir la caída del cabello",
          "Mejorar la vitalidad y el volumen del cabello",
          "Regenerar los tejidos",
          "Retrasar el envejecimiento capilar",
          "Aumentar la densidad del cabello",
        ],
        preCare:
          "Evitar alcohol y medicamentos anticoagulantes antes del tratamiento.",
        afterCare: "Evitar exposición solar y ejercicio intenso por 24 horas.",
        duration:
          "Se recomiendan tres sesiones, una por mes, y luego mantenimiento cada tres o cuatro meses.",
        src: "",
        reel: "https://www.instagram.com/reel/C2Uq98MM29h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        title: "Mesoterapia Capilar",
        slug: "mesoterapia-capilar",
        description:
          "Tratamiento no quirúrgico que consiste en inyectar microcantidades de sustancias en el cuero cabelludo para estimular el crecimiento del cabello, reducir su caída y fortalecerlo.",
        benefits: [
          "Mejorar la calidad del cabello",
          "Estimular el crecimiento capilar",
          "Fortalecer los folículos pilosos",
          "Prevenir la caída del cabello",
        ],
        preCare:
          "Evitar teñir el cabello. Lavar el cabello el día de la sesión o la noche anterior y no aplicar productos capilares.",
        afterCare:
          "Evitar la exposición solar y el uso de secadores y planchas por 24 horas.",
        duration:
          "Inicialmente 3 meses de duración con 1 o 2 sesiones por semana.",
        src: "",
      },
      {
        title: "Carboxiterapia",
        slug: "carboxiterapia",
        description:
          "La carboxiterapia capilar es un tratamiento no quirúrgico de medicina estética que consiste en inyectar dióxido de carbono (CO2) en el cuero cabelludo para estimular la circulación y el crecimiento del cabello.",
        benefits: [
          "Estimular la circulación sanguínea",
          "Aumentar la oxigenación de los tejidos",
          "Fortalecer los folículos pilosos",
          "Estimular el crecimiento del cabello",
          "Mejorar la calidad del cabello",
        ],
        preCare:
          "Evitar el consumo de alcohol y antiinflamatorios antes del tratamiento.",
        afterCare:
          "Evitar la exposición solar y el uso de secadores y planchas por 24 horas.",
        duration:
          "Lo ideal es realizar 10 sesiones, 1 sesión por semana o cada 15 días.",
        src: "",
      },
      {
        title: "Drug Delivery sin agujas",
        slug: "drug-delivery-sin-agujas",
        description:
          "Aplicación de principios activos directamente en el cuero cabelludo sin dolor con el láser Frax 1550 de Nordlys.",
        benefits: [
          "Estimulación del crecimiento capilar y fortalecimiento de folículos",
        ],
        preCare: "Evitar alcohol y antiinflamatorios antes del tratamiento.",
        afterCare: "Evitar exposición solar y lavado del cabello por 24 horas.",
        duration: "No especificado.",
        src: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1744570214/IMG_2985_bapky6.jpg",
      },
      {
        title: "Bloqueo de Dutasteride",
        slug: "bloqueo-de-dutasteride",
        description:
          "Tratamiento inyectable para prevenir la caída del cabello y estimular el crecimiento.",
        benefits: [
          "Prevención de la caída capilar y fortalecimiento de folículos",
          "Estimulación del crecimiento capilar y densidad del cabello",
        ],
        preCare:
          "Evitar alcohol y medicamentos anticoagulantes antes del tratamiento.",
        afterCare: "Evitar exposición solar y ejercicio intenso por 24 horas.",
        duration:
          "Empieza a mostrar resultados entre los 3 y 6 meses. Efectos máximos a los 12-18 meses. Sesiones cada 2 a 3 meses.",
        src: "",
      },
      {
        title: "Microneedling",
        slug: "microneedling",
        description:
          "Estimulación de colágeno y regeneración capilar mediante microagujas y dermapen.",
        benefits: [
          "Estimular el crecimiento del cabello",
          "Prevenir y ralentizar la caída del cabello",
          "Fortalecer y mejorar la apariencia del cabello",
          "Reducir el tamaño de los poros",
          "Aportar más nutrientes y oxígeno a la raíz del cabello",
        ],
        preCare: "Evitar alcohol y antiinflamatorios antes del tratamiento.",
        afterCare: "Evitar exposición solar y lavado del cabello por 24 horas.",
        duration:
          "Cada sesión dura entre 30 y 60 minutos. Se recomienda un mantenimiento cada 1 a 3 meses.",
        src: "",
      },
    ],
  },
};


