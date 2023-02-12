/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";


function InstagramImg({data}) {
  const {socialImg,name} = data;
  return (
    <div className="relative hover:text-white">
      <Image
        className="w-full h-full"
        layout="responsive"
        src={socialImg}
        alt="/"
      />
      <p className="text-center text-[18px] text-[#3E084C] font-bold mt-[10px] ">{name}</p>
      
    </div>
  );
}

export default InstagramImg;
