import {
  About,
  Contact,
  Hero,
  Reviews,
  Tratamientos
} from "@/components";
import { UpBtn } from "@/components/ui/UpBtn";

export default function Home() {
  return (
    <>
      <UpBtn />
      <Hero />

      <About />

      <Reviews />

    

      <Tratamientos />
      <Contact />
    </>
  );
}
