"use client";
import React, { useState } from "react";
import { nunito } from "../lib/fonts/fonts";
import Hamburger from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full z-50 px-20 py-2 sm:bg-[#111313]/20 bg-[#111313] ">
      {/* Botón hamburguesa en mobile */}
      <div className="sm:hidden absolute p-2 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-between w-6 h-5"
          aria-label="Toggle menu"
        >
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            color="#fff"
            direction="right"
            size={20}
          />
        </button>
      </div>

      {/* Mobile Menu + Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay oscuro */}
            <motion.div
              key="menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menú Mobile */}
            <motion.ul
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`
                ${nunito.className} 
                text-white text-[16px] tracking-[5.2px] font-semibold
                flex flex-col sm:hidden p-4 z-50 relative bg-[#111313]
              `}
            >
              <li>MENUS</li>
              <li>RESERVATION</li>
            </motion.ul>
          </>
        )}
      </AnimatePresence>

      {/* Menú Desktop */}
      <ul
        className={`${nunito.className} hidden sm:flex justify-between text-white p-4 text-[16px] tracking-[5.2px] font-semibold`}
      >
        <li>MENUS</li>
        <li>RESERVATION</li>
      </ul>
    </div>
  );
};
