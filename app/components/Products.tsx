// components/Products.tsx
"use client"; // Si estás usando App Router de Next.js

import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // ¡Importante!
import { nunito, tinos } from "../lib/fonts/fonts";

export const Products = () => {
  return (
    <div id="productos" className="relative h-screen">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={3000}
        transitionTime={800}
        emulateTouch
        swipeable
      >
        {/* Slide 1 */}
        <div className="relative w-full h-screen">
          <Image
            src="/prod1.jpg"
            alt="Descripción de la imagen"
            fill
            className="object-cover"
            quality={100}
            style={{ objectPosition: "0% 50%" }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#111313]/20"></div>
          <div>
            <div className="absolute z-30 bottom-[87%] right-[45%] sm:bottom-[80px] sm:right-[200px] ">
              <h2
                className={`${nunito.className} text-[40px] sm:text-[67.73px] tracking-[5.2px] sm:tracking-[13.5px] text-[#E79C43] font-semibold`}
              >
                BAGEL
              </h2>
            </div>
            <div className="absolute z-30 top-[60%] sm:top-[100px] sm:left-[150px] bg-[#47231C] p-2">
              <p
                className={`${tinos.className} text-[12px]/5 max-w-[350px] sm:text-[16px]/7.5 tracking-[3.2px]  text-[#BDBCC9] text-start`}
              >
                BAGEL ARTESANAL, DE CORTEZA DORADA Y MIGA TIERNA, ELABORADO CON
                FERMENTACIÓN LENTA Y HORNEADO TRADICIONAL. EL ACOMPAÑANTE
                PERFECTO PARA UNA EXPERIENCIA DELICADAMENTE SALADA O SUTILMENTE
                DULCE.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 (opcional) */}
        <div className="relative w-full h-screen">
          <Image
            src="/prod2.jpg"
            alt="Imagen 2"
            fill
            className="object-cover"
            quality={100}
            style={{ objectPosition: "20% 80%" }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#111313]/20"></div>
          <div>
            <div className="absolute z-30 bottom-[4%] right-[10%] sm:bottom-[80px] sm:right-[200px] ">
              <h2
                className={`${nunito.className} text-[40px] sm:text-[67.73px] tracking-[5.2px] sm:tracking-[13.5px] text-[#E79C43] font-semibold`}
              >
                CROISSANT
              </h2>
            </div>
            <div className="absolute z-30 top-[13%] sm:top-[100px] sm:left-[150px] bg-[#47231C] p-2">
              <p
                className={`${tinos.className} text-[12px]/5 max-w-[350px] sm:text-[16px]/7.5 tracking-[3.2px]  text-[#BDBCC9] text-start`}
              >
                CROISSANT DE MANTEQUILLA PURA, LAMINADO A MANO Y HORNEADO HASTA
                LOGRAR UN HOJALDRE DORADO, CRUJIENTE Y DELICADAMENTE AIREADO. UN
                CLÁSICO FRANCÉS HECHO ARTE.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
