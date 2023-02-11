import Link from "next/link";
import React, { useContext } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { AuthContext } from "./AuthProvider/AuthProvider";

const TopBanner = () => {
  
  return (
    <div className="grid xl:grid-cols-3 grid-cols-1 xl:gap-0 gap-2  bg-[#3E084C] text-white xl:px-[80px] py-[13px]">
      <div className="flex gap-2 xl:justify-start justify-center">
        <p className="flex gap-1 items-center xl:mr-[18px] xl:text-[16px] text-[12px]">
          <FaPhoneAlt></FaPhoneAlt>
          <span>০১৭৭৬৯৬৩৯০৭</span>
        </p>
        <p className="flex gap-1 items-center xl:text-[16px] text-[12px]">
          <FiMail></FiMail>
          <span>info@example.com</span>
        </p>
      </div>
      <div className="flex items-center justify-center xl:text-[16px] text-[12px]">
        <p className="mr-[15px]">সকল প্রোডাক্টের উপর ৩০% ছাড়!</p>
        <Link href="#">
          <button className="btn bg-[#FFFFFF] text-[#344054] hover:text-white xl:text-[16px] text-[10px]">
            বিস্তারিত
          </button>
        </Link>
      </div>
      <div className="flex items-center gap-2 xl:justify-end justify-center xl:text-[16px] text-[12px]">
        <Link href="/login" className="mr-[16px]">
          লগ ইন
        </Link>
        <Link href="/signup">রেজিস্টার</Link>
      </div>
    </div>
  );
};

export default TopBanner;
