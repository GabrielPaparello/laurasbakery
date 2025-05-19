"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { nunito, tinos } from "../lib/fonts/fonts";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Menu = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación solo se ejecutará una vez cuando la sección entra en vista
    threshold: 0.5, // El 50% de la sección debe ser visible
  });

  // Animación para la caja de menú
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1, // Caja de menú visible
        x: 0, // Caja de menú en su posición original
        transition: { duration: 2, ease: "easeInOut" }, // Suavizamos el efecto
      });
    } else {
      controls.start({
        opacity: 0, // Caja de menú invisible cuando no está en vista
        x: -100, // Mover la caja ligeramente a la izquierda
        transition: { duration: 2, ease: "easeInOut" }, // Suavizamos el desvanecimiento
      });
    }
  }, [inView, controls]);

  // Efecto de escritura para el título "LAURA’S BAKERY"
  const typewriterVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: "auto", // Dejamos que el texto se "escriba"
      transition: { duration: 2, ease: "easeInOut" }, // Cambié la duración aquí a 2 segundos
    },
  };

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

        <div
          className="absolute z-30 top-[60px] sm:top-[122px] sm:left-1/4 sm:-translate-x-1/2 px-2 sm:px-0"
          ref={ref}
        >
          {/* Título "LAURA’S" con animación de escritura */}
          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={typewriterVariants}
            className={`${nunito.className} text-[28px] sm:text-[67.73px] tracking-[5.2px] sm:tracking-[13.5px] text-[#EBEBF5] font-extralight `}
          >
            LAURA’S
          </motion.h2>

          {/* Título "BAKERY" con animación de escritura */}
          <motion.h3
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={typewriterVariants}
            className={`${nunito.className} text-[28px] sm:text-[67.73px] tracking-[5.2px] sm:tracking-[13.5px] text-[#EBEBF5] underline font-extralight underline-color-[#A77C3B] decoration-[#A77C3B] underline-offset-10 decoration-2 pl-40`}
          >
            BAKERY
          </motion.h3>
        </div>
      </div>

      {/* Contenedor del menú a la derecha con animación de movimiento */}
      <motion.div
        ref={ref}
        animate={controls}
        className="absolute z-30 top-[200px] sm:top-[80px] left-1/2 -translate-x-1/2 sm:-translate-0 w-[210px] sm:right-0 p-5 sm:w-1/4 bg-[#47231C] rounded-lg mr-10"
      >
        <h4
          className={`${nunito.className} text-center text-[20px] sm:text-[25.89px] tracking-[5.2px] font-regular text-[#EBEBF5] pb-5`}
        >
          HORNO
        </h4>
        <ul
          className={`${tinos.className} font-extralight tracking-[3.2px] text-[#EBEBF5] space-y-4 text-[10px] min-w-full sm:text-[14px]`}
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
          className={`${tinos.className} font-extralight tracking-[3.2px] text-[#EBEBF5] space-y-4 text-[10px] sm:text-[14px]`}
        >
          <li>CAFÉ 100% ARÁBICA (SOLO, CON LECHE, CAPPUCINO)</li>
          <li>TE ORGANICO (VERDE, NEGRO , ROOIBOS)</li>
        </ul>
      </motion.div>
    </div>
  );
};
