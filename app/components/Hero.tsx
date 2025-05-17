"use client";
import Image from "next/image";
import React from "react";
import { nunito } from "../lib/fonts/fonts";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen w-screen relative">
      {/* Títulos */}
      <h1
        className={`${nunito.className} absolute z-30 top-[50px] sm:top-[122px] left-1/2 -translate-x-1/2 text-[36px] sm:text-[67.73px] tracking-[5px] sm:tracking-[13.5px] text-[#EBEBF5] font-semibold text-center`}
      >
        LAURA’S BAKERY
      </h1>

      <h3
        className={`${nunito.className} absolute z-30 top-[150px] sm:top-[200px] left-1/2 -translate-x-1/2 text-[24px] sm:text-[41.88px] tracking-[3px] sm:tracking-[5.2px] text-[#EBEBF5] font-extralight text-center`}
      >
        CRAFTS
      </h3>

      {/* Rectángulo vertical central */}
      <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[45px] h-full bg-[#111313] z-10"></div>
      <div className="sm:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[25px] w-full bg-[#111313] z-10"></div>

      {/* Imagen 1 */}
      <div className="relative w-full sm:w-1/2 h-1/2 sm:h-full order-2 sm:order-1">
        <Image
          src="/hero1.jpg"
          alt="Hero Image 1"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#111313]/30 z-10"></div>
        <button className="z-20 absolute bottom-[15%] left-1/2 -translate-x-1/2 p-3 sm:p-4 bg-[#271F15]">
          <Link
            href="/productos"
            className={`${nunito.className} text-center text-white text-[14px] sm:text-[16px] tracking-[3px] sm:tracking-[5.2px] font-semibold`}
          >
            PRODUCTOS
          </Link>
        </button>
      </div>

      {/* Imagen 2 */}
      <div className="relative w-full sm:w-1/2 h-1/2 sm:h-full  order-1 sm:order-2">
        <Image
          src="/hero2.jpg"
          alt="Hero Image 2"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#111313]/30 z-10"></div>
        <button className="z-20 absolute bottom-[15%] left-1/2 -translate-x-1/2  sm:p-4 bg-[#47231C]">
          <Link
            href="/productos"
            className={`${nunito.className} text-center text-white text-[14px] sm:text-[16px] tracking-[3px] sm:tracking-[5.2px] font-semibold`}
          >
            ¿DÓNDE ESTAMOS?
          </Link>
        </button>
      </div>
    </div>
  );
};
