import React from "react";
import { nunito } from "../lib/fonts/fonts";

export const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obtener el año actual dinámicamente

  return (
    <div className="bg-[#47231C] flex flex-col items-center justify-center py-10 sm:gap-2 gap-5">
      <h2
        className={`${nunito.className} text-[24px]  text-[#FBF1E7] tracking-[3px] sm:tracking-[5.2px] font-semibold text-center`}
      >
        VENI A CONOCERNOS
      </h2>
      <p
        className={`${nunito.className} text-[#FBF1E7] text-[14px] sm:text-[16px] tracking-[5.2px] font-semibold text-center w-[80%]`}
      >
        EN LAURA’S BAKERY, CADA BOCADO ES UNA CELEBRACIÓN DE LA VIDA Y LA
        ALEGRÍA. TE ESPERAMOS CON LOS BRAZOS ABIERTOS Y UNA SONRISA EN EL
        ROSTRO.
      </p>
      <p className="text-[#FBF1E7] text-[14px] sm:text-[16px] text-center font-light mt-5">
        Copyright &copy; {currentYear} VTC. Todos los derechos reservados.
      </p>
    </div>
  );
};
