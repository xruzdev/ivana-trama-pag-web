"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="w-full h-[calc(100dvh-80px)]   lg:h-[calc(100vh-128px)] flex flex-col items-center justify-center">
      <h2>Algo salió mal. Por favor, intenta nuevamente.</h2>
      <button
        className="bg-black text-white px-4 py-2 mt-4"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Recargar
      </button>
    </section>
  );
}
