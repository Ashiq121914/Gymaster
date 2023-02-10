import Image from "next/image";
import React from "react";
import logo from "../assets/navLogo.png";

import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

const MidSearchNav = () => {
  return (
    <div className="grid grid-cols-4  p-3 lg:gap-0 mobile:gap-4">
      <div className="flex mobile:justify-center items-center lg:col-span-1 mobile:col-span-4">
        
          <Image src={logo} width={231} height={72} alt="logo" />
        
      </div>
      <div className="flex items-center justify-center lg:col-span-2 mobile:col-span-4 w-full">
        <input
          type="text"
          placeholder="অনুসন্ধান করুন.."
          className="input input-bordered w-full h-full  rounded-r-0"
        />
        <button className="bg-[#3E084C]  h-full -m-[5px] w-[44px] flex justify-center items-center rounded-r-lg">
          <FiSearch className="text-white text-[15px]"></FiSearch>
        </button>
      </div>
      <div className="lg:col-span-1 mobile:col-span-4 flex gap-2 justify-center items-center text-[18px]">
        <FiUser />
        <div className="flex justify-center items-center">
        <FiShoppingCart ></FiShoppingCart>
        <span class="rounded-full mb-[15px] bg-[#3E084C] text-white w-[20px] h-[20px] flex justify-center text-[13px]">2</span>
        
        </div>
      </div>
      
      
      
    </div>
  );
};

export default MidSearchNav;
