import { SITE_URL } from "@/config";

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Dra. Ivana Trama - Dermatología Clínica y Estética",
  url: SITE_URL,
  image:
    `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Consultorio de la Dra. Ivana Trama, médica especialista en dermatología clínica y estética en Bahía Blanca. Tratamientos faciales, capilares y estética médica.",
  telephone: "+5492914230173",
  medicalSpecialty: "Dermatology",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 de Octubre 127, Piso 1",
    addressLocality: "Bahía Blanca",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -38.710982,
    longitude: -62.262422,
  },
  areaServed: {
    "@type": "City",
    name: "Bahía Blanca",
  },
  founder: {
    "@type": "Physician",
    name: "Ivana Trama",
    medicalSpecialty: "Dermatology",
  },
  sameAs: [
    "https://www.instagram.com/dermatoivanatrama/",
    "https://www.youtube.com/channel/UCSqyn_tYVKFfH51fkd63caw",
    "https://tiktok.com/@dermatoivi",
    "https://www.linkedin.com/in/ivana-trama/",
  ],
};

export const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
);
