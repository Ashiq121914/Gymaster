import Image from "next/image";
import React from "react";
import logo1 from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

const MidSearchNav = () => {
  return (
    <div className="grid grid-cols-4  p-3 lg:gap-0 mobile:gap-4">
      <div className="flex mobile:justify-center items-center lg:col-span-1 mobile:col-span-4">
        <div className="mr-[8px] whitespace-nowrap">
          <Image src={logo1} width={50} height={50} alt="logo" />
        </div>
        <div>
          <p className="text-[32px] text-[#3E084C]">GYMASTER</p>
        </div>
        <div className="border-2 border-[#3E084C] rounded-full  w-[16px] h-[16px] flex items-center justify-center mb-[8px] ml-[3px]">
          <p className="text-[12px] font-bold">R</p>
        </div>
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
      <div className="lg:col-span-1 mobile:col-span-4 flex gap-2 justify-center items-center text-[14px]">
        <FiUser />
        <div className="flex justify-center items-center">
        <FiShoppingCart ></FiShoppingCart>
        <span class="rounded-full mb-[15px] bg-[#3E084C] text-white w-[18px] h-[18px] flex justify-center">2</span>
        
        </div>
      </div>
      
      
      
    </div>
  );
};

export default MidSearchNav;
