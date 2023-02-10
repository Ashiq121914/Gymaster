import Link from 'next/link';
import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const TopBanner = () => {
    return (
        <div className='grid lg:grid-cols-3 mobile:grid-cols-1 lg:gap-0 mobile:gap-2  bg-[#3E084C] text-white lg:px-[80px] py-[13px]'>
           <div className='flex gap-2 lg:justify-start mobile:justify-center'>
            <p className='flex gap-1 items-center lg:mr-[18px] lg:text-[16px] mobile:text-[12px]'>
                <FaPhoneAlt></FaPhoneAlt>
                <span >০১৭৭৬৯৬৩৯০৭</span>
            </p>
            <p className='flex gap-1 items-center lg:text-[16px] mobile:text-[12px]'>
                <FiMail></FiMail>
                <span>info@example.com</span>
            </p>
           </div>
           <div className='flex items-center justify-center lg:text-[16px] mobile:text-[12px]'>
            <p className='mr-[15px]'>সকল প্রোডাক্টের উপর ৩০% ছাড়!</p>
            <Link href="#">
            <button className='btn bg-[#FFFFFF] text-[#344054] hover:text-white lg:text-[16px] mobile:text-[10px]'>বিস্তারিত</button>
            </Link>
           </div>
           <div className='flex items-center gap-2 lg:justify-end mobile:justify-center lg:text-[16px] mobile:text-[12px]'>
            <Link href="/login" className='mr-[16px]'>লগ ইন</Link>
            <Link href="/register">রেজিস্টার</Link>
            </div> 
        </div>
    );
};

export default TopBanner;