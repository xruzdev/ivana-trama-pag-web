import Link from "next/link";

const NotFound = () => {
  return (
    <section className="w-full h-[calc(100dvh-80px)]   lg:h-[calc(100vh-128px)] flex items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center ">
        <h1 className="text-4xl text-color5 font-bold text-center">404</h1>
        <h2 className="text-2xl text-color5 font-bold text-center">Tratamiento no encontrada</h2>
        <p className="text-center text-color3">
        Tratamiento no encontrado. Por favor, vuelva a la página de inicio.
        </p>
        <Link 

          className="bg-color5 text-white px-4 py-2 mt-4 btn"
        
        href="/">Volver al inicio</Link>
      </div>
    </section>
  );
};

export default NotFound;
