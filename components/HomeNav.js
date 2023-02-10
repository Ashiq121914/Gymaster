import Link from "next/link";
import React, { useEffect, useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar(props) {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textcolor, setTextcolor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="absolute left-0  w-full z-10 ease-in duration-300 bg-[#F5F5F5]">
      <div className="max-w-[1240px] mx-auto flex lg:justify-center mobile:justify-end  items-center p-4  text-[#707173]">
        {/* for desktop */}
        <ul className="mobile:hidden lg:flex ">
          <li className="p-4 text-[#3E084C] font-bold ">
            <Link href="/">হোম</Link>
          </li>
          <li className="p-4">
            <Link href="#" className="hover:text-[#3E084C]">
              জিমের সরঞ্জাম
            </Link>
          </li>
          <li className="p-4 ">
            <Link className="hover:text-[#3E084C]" href="#">
              জিমের পোশাক
            </Link>
          </li>
          <li className="p-4 ">
            <Link className="hover:text-[#3E084C]" href="#">
              সাপ্লিমেন্টস
            </Link>
          </li>
          <li className="p-4 ">
            <Link className="hover:text-[#3E084C]" href="#">
              {" "}
              হ্যান্ড গ্রিপ
            </Link>
          </li>
          <li className="p-4 ">
            <Link className="hover:text-[#3E084C]" href="#">
              {" "}
              পুশ আপ বার
            </Link>
          </li>
          <li className="p-4 ">
            <Link className="hover:text-[#3E084C]" href="#">
              আমাদের সম্পর্কে
            </Link>
          </li>
          <li className="p-4 ">
            <Link className="hover:text-[#3E084C]" href="#">
              জিমের সরঞ্জাম
            </Link>
          </li>
          <li className="p-4 ">
            <Link className="hover:text-[#3E084C]" href="#">
              যোগাযোগ
            </Link>
          </li>
        </ul>
        {/* mobile button */}
        <div onClick={handleNav} className="mobile:block lg:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* mobile menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen  text-center ease-in duration-300 "
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen  text-center ease-in duration-300 "
          }
        >
          <ul className="mobile:block lg:hidden h-[100vh]">
            <li className="p-4 text-[#3E084C] font-bold">
              <Link href="/">হোম</Link>
            </li>
            <li className="p-4">
              <Link href="#">জিমের সরঞ্জাম</Link>
            </li>
            <li className="p-4">
              <Link href="#">জিমের পোশাক</Link>
            </li>
            <li className="p-4">
              <Link href="#">সাপ্লিমেন্টস</Link>
            </li>
            <li className="p-4">
              <Link href="#"> হ্যান্ড গ্রিপ</Link>
            </li>
            <li className="p-4">
              <Link href="#"> পুশ আপ বার</Link>
            </li>
            <li className="p-4">
              <Link href="#">আমাদের সম্পর্কে</Link>
            </li>
            <li className="p-4">
              <Link href="#">জিমের সরঞ্জাম</Link>
            </li>
            <li className="p-4">
              <Link href="#">যোগাযোগ</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
