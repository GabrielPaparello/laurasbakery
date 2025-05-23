"use client";
import Image from "next/image";
import React from "react";
import { nunito } from "../lib/fonts/fonts";
import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen relative">
      {/* Títulos con animación */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`${nunito.className} absolute z-30 top-[80px] sm:top-[122px] left-1/2 -translate-x-1/2 text-[36px] sm:text-[67.73px] tracking-[5px] sm:tracking-[13.5px] text-[#EBEBF5] font-semibold text-center bg-[#111313]/5`}
      >
        LAURA’S BAKERY
      </motion.h1>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className={`${nunito.className} absolute z-30 top-[190px] sm:top-[200px] left-1/2 -translate-x-1/2 text-[24px] sm:text-[41.88px] tracking-[3px] sm:tracking-[5.2px] text-[#EBEBF5] font-extralight text-center bg-[#111313]/5`}
      >
        CRAFTS
      </motion.h3>

      {/* Líneas divisorias */}
      <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[45px] h-full bg-[#111313] z-10"></div>
      <div className="sm:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[25px] w-full bg-[#111313] z-10"></div>

      {/* Imagen 2 */}
      <div className="relative w-full sm:w-1/2 h-1/2 sm:h-full order-1 sm:order-2">
        <Image
          src="/hero2.jpg"
          alt="Hero Image 2"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#111313]/30 z-10"></div>

        {/* Botón desktop con animación */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="hidden sm:block z-20 absolute bottom-[15%] left-1/2 -translate-x-1/2 p-4 bg-[#47231C]"
        >
          <Link
            href="#lugar"
            className={`${nunito.className} text-center text-[#EBEBF5] text-[16px] tracking-[5.2px] font-semibold`}
          >
            ¿DÓNDE ESTAMOS?
          </Link>
        </motion.button>
      </div>

      {/* Imagen 1 */}
      <div className="relative w-full sm:w-1/2 h-1/2 sm:h-full order-2 sm:order-1">
        <Image
          src="/hero1.jpg"
          alt="Hero Image 1"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#111313]/30 z-10"></div>

        {/* Botones mobile con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="sm:hidden absolute bottom-[40%] left-1/2  -translate-x-1/2 z-20 flex flex-col gap-5 items-center"
        >
          <Link
            href="#productos"
            className={`${nunito.className} px-4 py-2 bg-[#271F15] text-[#EBEBF5] text-[14px] tracking-[3px] font-semibold`}
          >
            PRODUCTOS
          </Link>
          <Link
            href="#lugar"
            className={`${nunito.className} px-4 py-2 bg-[#47231C] text-[#EBEBF5] text-[14px] tracking-[3px] font-semibold`}
          >
            ¿DÓNDE ESTAMOS?
          </Link>
        </motion.div>

        {/* Botón desktop con animación */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="hidden sm:block z-20 absolute bottom-[15%] left-1/2 -translate-x-1/2 p-4 bg-[#271F15]"
        >
          <Link
            href="#productos"
            className={`${nunito.className} text-center text-[#EBEBF5] text-[16px] tracking-[5.2px] font-semibold`}
          >
            PRODUCTOS
          </Link>
        </motion.button>
      </div>
    </div>
  );
};
