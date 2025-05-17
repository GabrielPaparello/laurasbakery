import Image from "next/image";
import React from "react";
import { nunito, tinos } from "../lib/fonts/fonts";

export const Menu = () => {
  return (
    <div className="relative h-screen">
      {/* Contenedor de la imagen */}
      <div className="relative w-full h-full">
        <Image
          src="/menu1.jpeg"
          alt="Descripción de la imagen"
          fill
          className="object-cover"
          quality={100}
          style={{ objectPosition: "50% 70%" }}
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#111313]/60"></div>

        <div className="absolute z-30 top-[80px] sm:top-[122px] left-1/4 -translate-x-1/2">
          <h2
            className={`${nunito.className} text-[36px] sm:text-[67.73px] tracking-[5.2px] sm:tracking-[13.5px] text-[#EBEBF5] font-extralight`}
          >
            LAURA’S
          </h2>
          <h3
            className={`${nunito.className} text-[36px] sm:text-[67.73px] tracking-[5.2px] sm:tracking-[13.5px] text-[#EBEBF5] underline font-extralight underline-color-[#A77C3B] decoration-[#A77C3B] underline-offset-10 decoration-2 pl-40`}
          >
            BAKERY
          </h3>
        </div>
      </div>

      {/* Contenedor del menú a la derecha */}
      <div className="absolute z-30 top-[80px] right-0 p-5 w-1/3 bg-[#47231C]  rounded-lg mr-10 ">
        <h4
          className={`${nunito.className} text-center text-[25.89px] tracking-[5.2px] font-regular text-[#EBEBF5] pb-5`}
        >
          HORNO
        </h4>
        <ul
          className={`${tinos.className} font-extralight tracking-[3.2px] text-[#EBEBF5] space-y-4 text-[14px]  `}
        >
          <li>CROISSANT DE MANTEQUILLA</li>
          <li>NAPOLITANA DE CHOCOLATE</li>
          <li>ENSAIMADA CASERA</li>
          <li>TARTA DE QUESO</li>
          <li>BROWNIE DE NUECES</li>
        </ul>
        <h4
          className={`${nunito.className} text-center text-[25.89px] tracking-[5.2px] font-regular text-[#EBEBF5] py-10`}
        >
          BEBIDAS
        </h4>
        <ul
          className={`${tinos.className} font-extralight tracking-[3.2px] text-[#EBEBF5] space-y-4 text-[14px]  `}
        >
          <li>CAFÉ 100% ARÁBICA (SOLO, CON LECHE, CAPPUCINO)</li>
          <li>TE ORGANICO (VERDE, NEGRO , ROOIBOS)</li>
        </ul>
      </div>
    </div>
  );
};
