import Link from "next/link";
import React, {  useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavbarHome() {
  const [nav, setNav] = useState(false);


  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative left-0">
      <div className=" absolute  w-full  z-[10] bg-[#F5F5F5]">
        <div className="max-w-[1240px] mx-auto flex xl:justify-center justify-end  items-center p-4  text-[#707173]">
          {/* for desktop */}
          <ul className="hidden xl:flex ">
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
          {/*  button */}
          <div onClick={handleNav} className="block xl:hidden z-10">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          {/*  menu */}
          <div
            className={
              nav
                ? "xl:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen  text-center ease-in duration-300 bg-black text-white"
                : "xl:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen  text-center ease-in duration-300 bg-black text-white"
            }
          >
            <ul className="block xl:hidden h-[100vh]">
              <li className="p-4  font-bold">
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
    </div>
  );
}

export default NavbarHome;
