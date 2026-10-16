import {
  Footer,
  JsonLd,
  NavBar,
  Providers
} from "@/components";
import { SITE_URL, switzer } from "@/config";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s - Ivana Trama",
    default: "Ivana Trama | Dermatología Clínica y Estética en Bahía Blanca",
  },
  description:
    "Página oficial de Ivana Trama, dermatóloga en Bahía Blanca, especializada en el cuidado de la piel y tratamientos dermatológicos avanzados.",
  keywords: [
    "dermatóloga",
    "dermatología",
    "piel",
    "tratamientos",
    "Bahía Blanca",
    "salud",
    "estética",
    "cuidado",
    "medicina",
    "bienestar",
    "Ivana Trama",
    "consultorio",
    "dermatólogo",
    "dermatologos",
    "dermatologas",
    "dermatología estética",
    "dermatología clínica",
    "dermatología pediátrica",
    "dermatología quirúrgica",
    "dermatología general",
    "dermatología médica",
    "dermatología cosmética",
    "dermatología terapéutica",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ivana Trama | Dermatología Clínica y Estética en Bahía Blanca",
    description:
      "Página oficial de Ivana Trama, dermatóloga en Bahía Blanca, especializada en el cuidado de la piel y tratamientos dermatológicos avanzados.",
    siteName: "Ivana Trama",
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    images: [
      {
        url: "https://res.cloudinary.com/dqbpjov4y/image/upload/v1734729675/opengraphimage_n6xzkb.jpg",
        width: 1200,
        height: 630,
        alt: "Ivana Trama",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivana Trama | Dermatología Clínica y Estética en Bahía Blanca",
    description:
      "Página oficial de Ivana Trama, dermatóloga en Bahía Blanca, especializada en el cuidado de la piel y tratamientos dermatológicos avanzados.",
    images: [
      "https://res.cloudinary.com/dqbpjov4y/image/upload/v1734729675/opengraphimage_n6xzkb.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="" />
        <JsonLd />
      </head>
      <body
        
        className={` antialiased overflow-x-hidden lg:overflow-y-hidden    bg-color1 relative ${switzer.className} font-light`}
      >
        <Providers>
          
         
          <NavBar />
          <main>{children}</main>
          <Footer />
       
        </Providers>
      </body>
    </html>
  );
}
