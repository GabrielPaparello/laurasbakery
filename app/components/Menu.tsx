import Image from "next/image";
import React from "react";
import { nunito, tinos } from "../lib/fonts/fonts";

export const Menu = () => {
  return (
    <div id="menu" className="relative h-screen">
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
        <div className="absolute top-0 left-0 w-full h-full bg-[#111313]/40"></div>

        <div className="absolute z-30 top-[20px] sm:top-[122px] sm:left-1/4 sm:-translate-x-1/2 px-2 sm:px-0">
          <h2
            className={`${nunito.className} text-[28px] sm:text-[67.73px] tracking-[5.2px] sm:tracking-[13.5px] text-[#EBEBF5] font-extralight `}
          >
            LAURA’S
          </h2>
          <h3
            className={`${nunito.className} text-[28px] sm:text-[67.73px] tracking-[5.2px] sm:tracking-[13.5px] text-[#EBEBF5] underline font-extralight underline-color-[#A77C3B] decoration-[#A77C3B] underline-offset-10 decoration-2 pl-40`}
          >
            BAKERY
          </h3>
        </div>
      </div>

      {/* Contenedor del menú a la derecha */}
      <div className=" absolute z-30 top-[130px] sm:top-[80px] left-1/2 -translate-x-1/2 sm:-translate-0  w-[210px] sm:right-0 p-5 sm:w-1/4 bg-[#47231C]  rounded-lg mr-10  ">
        <h4
          className={`${nunito.className} text-center text-[20px] sm:text-[25.89px] tracking-[5.2px] font-regular text-[#EBEBF5] pb-5`}
        >
          HORNO
        </h4>
        <ul
          className={`${tinos.className} font-extralight tracking-[3.2px] text-[#EBEBF5] space-y-4 text-[10px] min-w-full sm:text-[14px] `}
        >
          <li>CROISSANT DE MANTEQUILLA</li>
          <li>NAPOLITANA DE CHOCOLATE</li>
          <li>ENSAIMADA CASERA</li>
          <li>TARTA DE QUESO</li>
          <li>BROWNIE DE NUECES</li>
        </ul>
        <h4
          className={`${nunito.className} text-center text-[20px] sm:text-[25.89px] tracking-[5.2px] font-regular text-[#EBEBF5] py-2 sm:py-10`}
        >
          BEBIDAS
        </h4>
        <ul
          className={`${tinos.className} font-extralight tracking-[3.2px] text-[#EBEBF5] space-y-4 text-[10px] sm:text-[14px]  `}
        >
          <li>CAFÉ 100% ARÁBICA (SOLO, CON LECHE, CAPPUCINO)</li>
          <li>TE ORGANICO (VERDE, NEGRO , ROOIBOS)</li>
        </ul>
      </div>
    </div>
  );
};
