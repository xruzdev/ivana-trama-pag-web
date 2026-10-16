import { title } from "process";

export const tratamientos = {
  faciales: {
    title: "Tratamientos Faciales",
    hero: "/tratamiento-facial.jpg",
    
    content: [
      {
        title: "Toxina Botulínica",
        slug: "toxina-botulinica",
        subTratamientos: [
          {
            title: "Skinquality",
            slug: "skinquality",
            descripcion:
              "Mejora la calidad de la piel mediante microinyecciones de ácido hialurónico y vitaminas.",
            beneficios: [
              "Hidratación profunda, elasticidad mejorada y reducción de líneas finas.",
              "Mejora la textura y luminosidad de la piel.",
              "Estimula la producción de colágeno y elastina.",
            ],
            cuidadosPrevios:
              "Evitar el consumo de alcohol y antiinflamatorios antes del tratamiento.",
            cuidadosPosteriores:
              "Evitar exposición solar y maquillaje durante 24 horas.",
            duracion: "3 a 6 meses.",
          },
          {
            title: "Bruxismo",
            slug: "bruxismo",
            descripcion:
              "Relajación de los músculos de la mandíbula mediante toxina botulínica.",
            beneficios: [
              "Alivio del dolor mandibular, reducción del rechinamiento y protección dental.",
              "Mejora la apariencia facial y previene el desgaste dental.",
            ],
            cuidadosPrevios:
              "Evitar consumo de alcohol y medicamentos anticoagulantes.",
            cuidadosPosteriores:
              "Evitar presión en la mandíbula y alimentos duros durante 24 horas.",
            duracion: "4 a 6 meses.",
          },
          {
            title: "Hiperhidrosis",
            slug: "hiperhidrosis",
            descripcion:
              "Reducción de la sudoración excesiva mediante inyecciones de toxina botulínica.",
            beneficios: [
              "Control efectivo del sudor y mejora en la calidad de vida.",
              "Reducción de manchas y mal olor en axilas, manos y pies.",
            ],
            cuidadosPrevios:
              "Evitar el uso de antitranspirantes 24 horas antes.",
            cuidadosPosteriores:
              "Evitar ejercicio intenso y baños calientes durante 24 horas.",
            duracion: "6 a 12 meses.",
          },
          {
            title: "Nefertiti",
            slug: "nefertiti",
            descripcion:
              "Reafirmación del contorno del cuello y mandíbula mediante toxina botulínica.",
            beneficios: [
              "Aspecto rejuvenecido y definido del cuello.",
              "Reducción de la papada y flacidez en la zona.",
            ],
            cuidadosPrevios:
              "Evitar medicamentos anticoagulantes y alcohol antes del procedimiento.",
            cuidadosPosteriores:
              "Evitar masajes o presión en la zona tratada por 24 horas.",
            duracion: "4 a 6 meses.",
          },
        ],
      },
      {
        title: "Ácido Hialurónico",
        slug: "acido-hialuronico",
        subTratamientos: [
          {
            title: "Top Model Look",
            slug: "top-model-look",
            descripcion:
              "Relleno dérmico para resaltar pómulos y contornos faciales.",
            beneficios: [
              "Aspecto simétrico, voluminoso y rejuvenecido.",
              "Mejora la armonía y proporción del rostro.",
              "Corrección de ojeras y surcos nasogenianos.",
            ],
            cuidadosPrevios:
              "Evitar alcohol y antiinflamatorios antes del tratamiento.",
            cuidadosPosteriores:
              "Evitar exposición solar y maquillaje durante 48 horas.",
            duracion: "12 a 18 meses.",
            link: "https://www.instagram.com/reel/C_NtYkpyM2s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
          },
          {
            title: "Armonización labial y código de barras",
            slug: "armonizacion-labial-y-codigo-de-barras",
            descripcion:
              "Relleno de labios y líneas peribucales con ácido hialurónico.",
            beneficios: [
              "Labios más voluminosos, simétricos y definidos.",
              "Reducción de arrugas y líneas de expresión en el contorno de labios.",
            ],
            cuidadosPrevios:
              "Evitar anticoagulantes y alcohol antes del tratamiento.",
            cuidadosPosteriores:
              "Evitar besos, comidas calientes y maquillaje durante 24 horas.",
            duracion: "6 a 12 meses.",
            link:   "https://www.instagram.com/reel/DDW4ZzIhVE1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" /* [
            ,
              "https://www.instagram.com/reel/Cy9RJb9vVzc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            ], */
          },
          {
            title: "Proyección del mentón",
            slug: "proyeccion-del-menton",
            descripcion:
              "Mejora la proyección y simetría del mentón con ácido hialurónico.",
            beneficios: [
              "Perfil más definido y balanceado.",
              "Corrección de asimetrías y flacidez en la zona.",
            ],
            cuidadosPrevios: "Evitar alcohol y antiinflamatorios.",
            cuidadosPosteriores:
              "Evitar presionar la zona tratada por 24 horas.",
            duracion: "12 a 18 meses.",
            link: "https://www.instagram.com/reel/DAa15dextAj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
          },
          {
            title: "Fosa temporal",
            slug: "fosa-temporal",
            descripcion:
              "Relleno de las zonas temporales para mejorar el volumen perdido.",
            beneficios: [
              "Aspecto rejuvenecido y equilibrado del rostro.",
              "Corrección de hundimientos y flacidez en la zona.",
            ],
            cuidadosPrevios:
              "Evitar anticoagulantes y alcohol antes del procedimiento.",
            cuidadosPosteriores: "Evitar masajes o presión en la zona tratada.",
            duracion: "12 a 18 meses.",
          },
        ],
      },
      {
        title: "Bioestimuladores",
        slug:"bioestimuladores",
        subTratamientos: [
          {
            title: "Radiesse",
            slug: "radiesse",
            descripcion:
              "Estimula la producción de colágeno para mejorar la firmeza de la piel.",
            beneficios: [
              "Piel más firme y rejuvenecida de forma progresiva.",
              "Mejora la textura y elasticidad de la piel.",
            ],
            cuidadosPrevios:
              "Evitar antiinflamatorios y alcohol antes del tratamiento.",
            cuidadosPosteriores: [
              "Evitar ejercicio físico y antiinflamatorios.",
              "Aplicar protección solar SPF 50+ durante dos semanas.",
            ],
            duracion: "1 a 2 años.",
            link: "https://www.instagram.com/reel/DDExsk8Ia2_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
          },
          {
            title: "Sculptra",
            slug: "sculptra",
            descripcion:
              "Bioestimulador que mejora la textura y firmeza de la piel.",
            beneficios: [
              "Producción progresiva de colágeno y firmeza visible.",
            ],
            cuidadosPrevios: "Evitar anticoagulantes antes del tratamiento.",
            cuidadosPosteriores:
              "Masajear la piel cinco veces al día por cinco minutos durante cinco días.",
            duracion: "1 a 2 años.",
          },
        ],
      },
      {
        title: "Tecnología Nordlys Candela",
        slug: "tecnologia-nordlys-candela",
        subTratamientos: [
          {
            title: "Luz Pulsada Intensa",
            slug: "luz-pulsada-intensa",
            descripcion:
              "Tratamiento con luz pulsada para eliminar manchas solares, rosácea y acné.",
            beneficios: [
              "Mejora el tono de piel, reduce manchas e imperfecciones.",
              "Estimula la producción de colágeno y elastina.",
            ],
            cuidadosPrevios:
              "Evitar exposición solar y cremas autobronceantes.",
            cuidadosPosteriores:
              "Usar protector solar y evitar exposición al sol.",
            duracion: "6 a 12 meses.",
            link: "https://www.instagram.com/reel/DBi8E_whIDA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
          },
          {
            title: "Láser Frax 1550",
            slug: "laser-frax-1550",
            descripcion:
              "Láser para estimular el colágeno y tratar arrugas, cicatrices y flacidez.",
            beneficios: [
              "Reafirmación y rejuvenecimiento progresivo de la piel.",
              "Mejora la textura y elasticidad.",
            ],
            cuidadosPrevios: "Evitar sol y exfoliaciones intensas.",
            cuidadosPosteriores:
              "Evitar sol, maquillaje y ejercicio intenso por 48 horas.",
            duracion: "6 a 12 meses.",
            link: "https://www.instagram.com/reel/C_vNdYpRj9o/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
          },
        ],
      },
      {
        title: "Mesoterapias Importadas",
        slug: "mesoterapias-importadas",
        subTratamientos: [
          {
            title: "NCTF 135 HA Fillorga",
            slug: "nctf-135-ha-fillorga",
            descripcion:
              "La solución poli-revitalizante de FILORGA® NCTF 135HA es un tratamiento de renovación celular a base de un concentrado de ácido hialurónico (5 mg/ml) y un cóctel de 12 vitaminas, 23 aminoácidos, 6 minerales, 6 ácidos nucleicos y 6 coenzimas que aportarán a tu piel hidratación, elasticidad, luminosidad y firmeza.",
            beneficios: [
              "Resulta una auténtica biorevitalización para todas las edades, en pieles fatigadas y faltas de luz o firmeza.",
              "Redensifica la dermis y alisa las arruguitas superficiales desde su aplicación, haciendo que la piel aparezca visiblemente más luminosa.",
            ],
            cuidadosPrevios:
              "Evitar exposición solar y maquillaje durante 24 horas.",
            cuidadosPosteriores:
              "Usar protector solar y evitar la exposición directa al sol.",
          },
          {
            title: "Despigmentation solution de Mesoestetic",
            slug: "despigmentation-solution-de-mesoestetic",
            descripcion:
              "Potente combinación de principios activos con acción correctiva de las alteraciones pigmentarias y antioxidantes. Actúa regulando la producción de melanina y eliminando la melanina presente en las células epidérmicas, responsables de la pigmentación visible. Además incorpora agentes antioxidantes que regulan la sobreproducción de melanina.",
            beneficios: [
              "Mejora la apariencia de la piel",
              "Combate los signos del envejecimiento",
              "Reduce la flacidez y la falta de hidratación",
              "Nutre la piel celularmente.",
            ],
            cuidadosPrevios:
              "Evitar exposición solar y maquillaje durante 24 horas.",
            cuidadosPosteriores:
              "Usar protector solar y evitar la exposición directa al sol.",
          },
        ],
      },
      {
        title: "Profhilo",
        slug: "profhilo",
        subTratamientos: [
          {
            title: "Profhilo",
            slug: "profhilo",
            descripcion:
              "Tratamiento estético no quirúrgico que utiliza ácido hialurónico para estimular la producción de colágeno y elastina en la piel.",
            beneficios: [
              "Mejora la apariencia de la piel",
              "Combate los signos del envejecimiento",
              "Reduce la flacidez, la falta de hidratación",
              "Nutre la piel celularmente.",
            ],
            cuidadosPrevios:
              "Evitar alcohol y antiinflamatorios antes del tratamiento.",
            cuidadosPosteriores:
              "Evitar exposición solar y maquillaje durante 24 horas.",
            duracion: "6 a 12 meses.",
          },
        ],
      },
    ],
  },
  capilares: {
    title: "Tratamientos Capilares",
    hero: "/tratamiento-capilar.jpg",
    content: [
      {
        title: "Plasma Rico en Plaquetas",
        slug: "plasma-rico-en-plaquetas",
        descripcion:
          "Regeneración capilar mediante la reinyección de plasma propio.",
        beneficios: [
          "Prevenir la caída del cabello",
          "Mejorar la vitalidad y el volumen del cabello",
          "Regenerar los tejidos",
          "Retrasar el envejecimiento capilar",
          "Aumentar la densidad del cabello",
        ],
        cuidadosPrevios:
          "Evitar alcohol y medicamentos anticoagulantes antes del tratamiento.",
        cuidadosPosteriores:
          "Evitar exposición solar y ejercicio intenso por 24 horas.",
        duracion:
          "La cantidad y periodicidad de las sesiones varía según el caso. Por lo general, se recomiendan tres sesiones, una por mes, y después un mantenimiento cada tres o cuatro meses.",
        link: "https://www.instagram.com/reel/C2Uq98MM29h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        title: "Mesoterapia Capilar",
        slug: "mesoterapia-capilar",
        descripcion:
          "Tratamiento no quirúrgico que consiste en inyectar micro cantidades de sustancias en el cuero cabelludo para estimular el crecimiento del cabello, reducir su caída y fortalecerlo.",
        beneficios: [
          "Mejorar la calidad del cabello",
          "Estimular el crecimiento capilar",
          "Fortalecer los folículos pilosos",
          "Prevenir la caída del cabello",
        ],
        cuidadosPrevios: [
          "Evitar teñir el cabello.",
          "Lavar el cabello el día de la sesión o la noche anterior y no aplicar productos capilares.",
        ],
        cuidadosPosteriores:
          "Evitar la exposición solar y el uso de secadores y planchas por 24 horas.",
        duracion:
          "Inicialmente 3 meses de duración con 1 o 2 sesiones por semana.",
      },
      {
        title: "Carboxiterapia",
        slug: "carboxiterapia",
        descripcion:
          "La carboxiterapia capilar es un tratamiento no quirúrgico de medicina estética que consiste en inyectar dióxido de carbono (CO2) en el cuero cabelludo para estimular la circulación y el crecimiento del cabello.",
        beneficios: [
          "Estimular la circulación sanguínea",
          "Aumentar la oxigenación de los tejidos",
          "Fortalecer los folículos pilosos",
          "Estimular el crecimiento del cabello",
          "Mejorar la calidad del cabello",
        ],
        cuidadosPrevios:
          "Evitar el consumo de alcohol y antiinflamatorios antes del tratamiento.",
        cuidadosPosteriores:
          "Evitar la exposición solar y el uso de secadores y planchas por 24 horas.",
        duracion:
          "Lo ideal es realizar 10 sesiones, 1 sesión por semana o cada 15 días.",
      },
      {
        title: "Drug Delivery sin agujas",
        slug: "drug-delivery-sin-agujas",
        descripcion:
          "Aplicación de principios activos directamente en el cuero cabelludo sin dolor.",
        beneficios: [
          "Estimulación del crecimiento capilar y fortalecimiento de folículos.",
        ],
        cuidadosPrevios:
          "Evitar alcohol y antiinflamatorios antes del tratamiento.",
        cuidadosPosteriores:
          "Evitar exposición solar y lavado del cabello por 24 horas.",
      },
      {
        title: "Bloqueo de Dutasteride",
        slug: "bloqueo-de-dutasteride",
        descripcion:
          "Tratamiento oral para prevenir la caída del cabello y estimular el crecimiento.",
        beneficios: [
          "Prevención de la caída capilar y fortalecimiento de folículos.",
          "Estimulación del crecimiento capilar y densidad del cabello.",
        ],
        cuidadosPrevios:
          "Evitar alcohol y medicamentos anticoagulantes antes del tratamiento.",
        cuidadosPosteriores:
          "Evitar exposición solar y ejercicio intenso por 24 horas.",
        duracion:
          "Empieza a mostrar resultados entre los 3 y 6 meses de uso. Los efectos máximos se observan a los 12-18 meses.",
      },
      {
        title: "Microneedling",
        slug: "microneedling",
        descripcion:
          "Estimulación de colágeno y regeneración capilar mediante micro agujas.",
        beneficios: [
          "Estimular el crecimiento del cabello",
          "Prevenir y ralentizar la caída del cabello",
          "Fortalecer el cabello",
          "Mejorar la apariencia del cabello",
          "Reducir el tamaño de los poros",
          "Aportar más nutrientes y oxígeno a la raíz del cabello",
        ],
        cuidadosPrevios:
          "Evitar alcohol y antiinflamatorios antes del tratamiento.",
        cuidadosPosteriores:
          "Evitar exposición solar y lavado del cabello por 24 horas.",
        duracion:
          "Cada sesión dura entre 30 y 60 minutos, dependiendo del área a tratar. Se recomienda un mantenimiento cada 3-6 meses.",
      },
    ],
  },
};

/**
 * 
 *  toxinaBotulinica: [
      {
        title: "Skinquality",
      },
      {
        title: "Bruxismo",
      },
      {
        title: "Hiperhidrosis",
      },
      {
        title: "Nefertiti",
      },
    ],
    acidoHialuronico: [
      {
        title: "Top Model Look",
      },
      {
        title: "Armonización labial y código de barras",
      },
      {
        title: "Proyección del mentón",
      },
      {
        title: "Fosa temporal",
      },
    ],
    bioestimuladores: [
      {
        title: "Radiesse",
      },
      {
        title: "Sculptra",
      },
    ],
    nordlysCandela: [
      {
        title: "Luz Pulsada Intensa para fotorejuvenecimiento.",
      },
      {
        title: "Láser Frax 1550 no ablativo",
      },
    ],
    mesoterapiasImportadas: [
      {
        title: "NCTF 135 HA Fillorga",
      },
      {
        title: "Despigmentation solution de Mesoestetic. ",
      },
    ],
    profilho: [
      {
        title: "Profilho",
      },
    ],
 */
