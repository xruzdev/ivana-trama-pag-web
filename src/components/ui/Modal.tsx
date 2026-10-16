"use client";

import React from "react";

interface ModalProps {
  header: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  body: React.ReactNode;
}

export const Modal = ({
    header,showModal,setShowModal,setConfirm,body
}:ModalProps) => {
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 ${showModal ? "flex opacity-100" : "hidden opacity-0"} transition-opacity duration-1000 delay-500 items-center justify-center z-[1000] `}>

      <div className={`${showModal ? "opacity-100" : "opacity-0"}  bg-white flex flex-col   w-full lg:w-1/4 h-52 relative transition-opacity duration-500 delay-300`}>
        <div className="bg-black top-0 left-0 h-10 w-full flex items-center pl-4 ">
          <h2 className="text-white text-center">{header}</h2>
        </div>

        <div className="h-1/2 flex items-center justify-center">
          {body}
        </div>
        <div className="flex items-center justify-between gap-4 h-1/2 px-4">
          <button
            onClick={() => {
              setConfirm(true);
              setShowModal(false);
            }}
            className="bg-red-600 p-2 text-sm uppercase text-white w-1/4"
          >
            Si
          </button>
          <button
            onClick={() => {
              setShowModal(false);
            }}
            className="bg-green-600 p-2 text-sm uppercase text-white w-1/4"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
