import React from "react";
import Image from "next/image";
import Link from "next/link";
import { nunito, tinos } from "../lib/fonts/fonts";

export const Lugar = () => {
  return (
    <div className=" bg-[#F3E0EC] flex items-start justify-start  py-4 ">
      <div className="px-20">
        <Image
          src="/lugar.jpg"
          alt="Descripción de la imagen"
          width={450}
          height={300}
          className=""
        />
      </div>
      <div className="flex flex-col items-start justify-center text-center px-20">
        <h2
          className={`${nunito.className} text-[#47231C] py-20 text-[41.88px]`}
        >
          EN EL CORAZÓN DE MADRID
        </h2>

        <p
          className={`${tinos.className} max-w-[600px] text-[16px] text-[#47231C]`}
        >
          NUESTRA PANADERÍA ES UN RINCÓN ACOGEDOR EN EL CORAZÓN DE MADRID —
          CÁLIDO, CERCANO Y ABIERTO PARA TODOS. CADA DÍA HORNEAMOS CON AMOR
          PANES Y DULCES ARTESANALES, ELABORADOS EN NUESTRO OBRADOR PROPIO, CON
          INGREDIENTES FRESCOS Y RECETAS TRADICIONALES. VEN A DISFRUTAR DE UN
          CAFÉ PERFECTO Y EL AROMA IRRESISTIBLE DEL PAN RECIÉN HECHO.
        </p>

        {/* Botón centrado */}
        <div className="w-full flex justify-center pt-8">
          <button
            className={`bg-[#47231C] ${nunito.className} px-4 py-2 text-white text-[16px] tracking-[5.2px] font-semibold`}
          >
            <Link href="/ruta/deseada" className="text-[#EBEBF5]">
              DIRECCION
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
