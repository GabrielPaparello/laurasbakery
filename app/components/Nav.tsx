"use client";
import React, { useState } from "react";
import { nunito } from "../lib/fonts/fonts";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full z-20 px-20 py-2 bg-[#111313]/20">
      {/* Botón hamburguesa en mobile */}
      <div className="sm:hidden flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-between w-6 h-5"
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 bg-white"></span>
          <span className="block h-0.5 bg-white"></span>
          <span className="block h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Menú */}
      <ul
        className={`
          ${
            nunito.className
          } text-white p-4 text-[16px] tracking-[5.2px] font-semibold
          ${
            isOpen ? "flex" : "hidden"
          } flex-col sm:flex sm:flex-row sm:justify-between
        `}
      >
        <li>MENUS</li>
        <li>RESERVATION</li>
      </ul>
    </div>
  );
};
