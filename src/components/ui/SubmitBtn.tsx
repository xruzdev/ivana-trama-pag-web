'use client'
import { SpinLoader } from "@/components";
import { useFormStatus } from "react-dom";

export const SubmitButton = ({ text }: { text: string }) => {
  const { pending } = useFormStatus();

  return (
    <div className="mt-4">
      <button
        disabled={pending}
        type="submit"
        className={`w-full ${
          pending ? "bg-color2" : " bg-color3"
        }  text-white py-2  focus:outline-none flex items-center justify-center gap-4`}
      >
        {pending ? (
          <>
            {" "}
            <SpinLoader className="size-6" />
          </>
        ) : (
          <span>{text}</span>
        )}
      </button>
    </div>
  );
};
