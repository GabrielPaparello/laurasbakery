import React from "react";
import { nunito } from "../lib/fonts/fonts";

export const Nav = () => {
  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full  z-20 px-20 py-2 bg-[#111313]/20">
      <ul
        className={`flex justify-between ${nunito.className} text-white p-4 text-[16px] tracking-[5.2px] font-semibold`}
      >
        <li>MENUS</li>
        <li>RESERVATION</li>
      </ul>
    </div>
  );
};
