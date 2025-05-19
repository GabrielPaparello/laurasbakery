"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { nunito, tinos } from "../lib/fonts/fonts";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Cta = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    let isActive = true;

    const startAnimationLoop = async () => {
      while (isActive && inView) {
        for (let i = 0; i < 3; i++) {
          await controls.start({
            y: [-8, 0], // Movemos más para abajo para hacer el efecto más marcado
            transition: {
              duration: 2, // Duración mucho más larga para que se mueva más lento
              ease: [0.25, 0.1, 0.25, 1], // Transición más fluida (ease-in-out suave)
            },
          });
        }
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Espera 2 segundos antes de repetir
      }
    };

    if (inView) {
      startAnimationLoop();
    }

    return () => {
      isActive = false;
    };
  }, [inView, controls]);

  return (
    <div
      id="reservas"
      className="bg-[#FBF1E7] flex flex-col items-center justify-center py-10 sm:gap-2 gap-5"
    >
      <h2
        className={`${nunito.className} text-[#CA4505] text-[24px] sm:text-[41.88px] tracking-[3px] sm:tracking-[5.2px] font-semibold text-center`}
      >
        ¿TE APETECE ALGO ESPECIAL?
      </h2>

      <p
        className={`${tinos.className} text-[#D0771B] text-[14px] sm:text-[16px] tracking-[5.2px] font-semibold text-center w-[50%]`}
      >
        ASEGURA TU LUGAR PARA DISFRUTAR DE UNA EXPERIENCIA DULCE Y ARTESANAL..
      </p>

      <motion.button
        ref={ref}
        animate={controls}
        className="bg-[#47231C] px-4 py-2 mt-5"
      >
        <Link
          href="/ruta/deseada"
          className={`text-center ${nunito.className} text-[#EBEBF5] text-[16px] tracking-[5.2px] font-semibold`}
        >
          HAZ TU RESERVA
        </Link>
      </motion.button>
    </div>
  );
};
