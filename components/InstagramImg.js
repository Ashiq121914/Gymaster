/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/Fa";

function InstagramImg({ socialImg,name }) {
  return (
    <div className="relative">
      <Image
        className="w-full h-full"
        layout="responsive"
        src={socialImg}
        alt="/"
      />
      <p className="text-center text-[18px] text-[#3E084C] font-bold mt-[10px]">{name}</p>
      {/* overlay */}
      <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
        <p className="text-gray-300 hidden group-hover:block">
          <FaInstagram size={30} />
        </p>
      </div>
    </div>
  );
}

export default InstagramImg;
