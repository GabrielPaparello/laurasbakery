"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { nunito, tinos } from "../lib/fonts/fonts";
import { motion } from "framer-motion";

export const Lugar = () => {
  return (
    <div
      id="lugar"
      className="bg-[#F3E0EC] flex flex-col md:flex-row items-start justify-start py-4"
    >
      {/* Imagen: zoom in cuando entra en vista */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="px-4 md:px-20 w-full md:w-auto"
      >
        <Image
          src="/lugar.jpg"
          alt="Descripción de la imagen"
          width={450}
          height={300}
          className="w-full h-auto max-w-[450px] mx-auto md:mx-0"
        />
      </motion.div>

      {/* Texto: aparece al hacer scroll */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center px-2 justify-center text-center pt-6 md:pt-0"
      >
        <h2
          className={`${nunito.className} text-[#47231C] py-5 sm:py-20 text-[24px] sm:text-[41.88px] tracking-[3px] sm:tracking-[5.2px] font-semibold`}
        >
          EN EL CORAZÓN DE MADRID
        </h2>

        <p
          className={`${tinos.className} max-w-[600px] text-center text-[14px] sm:text-[16px] text-[#47231C]`}
        >
          NUESTRA PANADERÍA ES UN RINCÓN ACOGEDOR EN EL CORAZÓN DE MADRID —
          CÁLIDO, CERCANO Y ABIERTO PARA TODOS. CADA DÍA HORNEAMOS CON AMOR
          PANES Y DULCES ARTESANALES, ELABORADOS EN NUESTRO OBRADOR PROPIO, CON
          INGREDIENTES FRESCOS Y RECETAS TRADICIONALES. VEN A DISFRUTAR DE UN
          CAFÉ PERFECTO Y EL AROMA IRRESISTIBLE DEL PAN RECIÉN HECHO.
        </p>

        {/* Botón: entra más tarde */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex justify-center pt-8"
        >
          <button
            className={`bg-[#47231C] ${nunito.className} px-4 py-2 text-[EBEBF5] font-semibold`}
          >
            <Link
              href="/ruta/deseada"
              className="text-[#EBEBF5] text-[14px] sm:text-[16px] tracking-[5.2px]"
            >
              DIRECCION
            </Link>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
