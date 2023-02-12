import Image from "next/image";
import React from "react";
import logo from "../assets/navLogo.png";

import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const MidSearchNav = () => {
  return (
    <div className="grid grid-cols-4  p-3 xl:gap-0 gap-4">
      <div className="flex justify-center items-center xl:col-span-1 col-span-4">
        <Link className="cursor-pointer" href="/">

        <Image src={logo} width={231} height={72} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center justify-center xl:col-span-2 col-span-4 w-full">
        <input
          type="text"
          placeholder="অনুসন্ধান করুন.."
          className="input input-bordered w-full h-full  rounded-r-0"
        />
        <button className="bg-[#3E084C]  h-full -m-[5px] w-[44px] flex justify-center items-center rounded-r-xl">
          <FiSearch className="text-white text-[15px]"></FiSearch>
        </button>
      </div>
      <div className="xl:col-span-1 col-span-4 flex gap-2 justify-center items-center text-[18px]">
        <FiUser />
        <div className="flex justify-center items-center">
          <FiShoppingCart></FiShoppingCart>
          <span className="rounded-full mb-[15px] bg-[#3E084C] text-white w-[20px] h-[20px] flex justify-center text-[13px]">
            2
          </span>
        </div>
      </div>
    </div>
  );
};

export default MidSearchNav;
