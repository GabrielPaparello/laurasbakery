import Link from "next/link";
import React from "react";
import { nunito, tinos } from "../lib/fonts/fonts";

export const Cta = () => {
  return (
    <div className="bg-[#FBF1E7] flex flex-col items-center justify-center py-10 sm:gap-2 gap-5">
      <h2
        className={`${nunito.className} text-[#CA4505] text-[24px] sm:text-[41.88px] tracking-[3px] sm:tracking-[5.2px] font-semibold text-center`}
      >
        ¿TE APETECE ALGO ESPECIAL?
      </h2>
      <p
        className={`${tinos.className} text-[#D0771B]  text-[14px] sm:text-[16px] tracking-[5.2px] font-semibold text-center w-[50%]`}
      >
        ASEGURA TU LUGAR PARA DISFRUTAR DE UNA EXPERIENCIA DULCE Y ARTESANAL..
      </p>
      <button className="bg-[#47231C] px-4 py-2 mt-5 ">
        <Link
          href="/ruta/deseada"
          className={`text-center ${nunito.className} text-[#EBEBF5] text-[16px] tracking-[5.2px] font-semibold`}
        >
          HAZ TU RESERVA
        </Link>
      </button>
    </div>
  );
};
