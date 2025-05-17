import Image from "next/image";
import React from "react";
import { nunito } from "../lib/fonts/fonts";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="flex h-screen w-screen relative">
      {/* Texto sobre las imágenes */}
      <h1
        className={`${nunito.className} absolute z-30 top-[122px] left-1/2 -translate-x-1/2  text-[67.73px]  tracking-[13.5px] text-[#EBEBF5] font-semibold`}
      >
        LAURA’S BAKERY
      </h1>
      <h3
        className={`${nunito.className} absolute z-30 top-[200px] left-1/2 -translate-x-1/2 font-extralight pl-70 text-[41.88px] tracking-[5.2px] text-[#EBEBF5] 
        `}
      >
        CRAFTS
      </h3>

      {/* Rectángulo de altura completa en el centro */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[45px] h-full bg-[#111313] z-10"></div>

      {/* Imagen 1 */}
      <div className="w-1/2 h-full relative">
        <Image
          src="/hero1.jpg"
          alt="Hero Image 1"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#111313]/30 z-10"></div>
        <button
          className={`z-20 absolute bottom-[25%]  left-1/2 -translate-x-1/2 p-4 bg-[#271F15]`}
        >
          <Link
            href="/productos"
            className={` {${nunito.className}  text-center text-white text-[16px] tracking-[5.2px] pl-1 font-semibold`}
          >
            PRODUCTOS
          </Link>
        </button>
      </div>

      {/* Imagen 2 */}
      <div className="w-1/2 h-full relative">
        <Image
          src="/hero2.jpg"
          alt="Hero Image 2"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#111313]/30 z-10"></div>
        <button
          className={`z-20 absolute bottom-[25%]  left-1/2 -translate-x-1/2 p-4 bg-[#47231C]`}
        >
          <Link
            href="/productos"
            className={` {${nunito.className}  text-center text-white text-[16px] tracking-[5.2px] pl-1 font-semibold`}
          >
            ¿DONDE ESTAMOS?
          </Link>
        </button>
      </div>
    </div>
  );
};
