import Image from 'next/image';
import React from 'react';
import logo from '../assets/footerLogo.png'
import { CiLocationOn,CiPhone,CiMail } from "react-icons/ci";
import { FaTwitter,FaLinkedin,FaFacebookSquare,FaGithub,FaDribbble,FaHandPeace} from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-[#222222]   text-white w-full  px-[40px] pt-[50px] pb-[30px]'>
        <div className='grid lg:grid-cols-6 mobile:grid-cols-8 gap-8'>
        <div className='lg:col-span-2 mobile:col-span-8 '>
            <Image src={logo} width={248} height={81} alt='footer logo'/>
            <p className='mt-[30px] '>Design amazing digital experiences that <br /> create more happy in the world.</p>
            <p className='flex gap-1 items-center lg:mr-[18px] lg:text-[16px] mobile:text-[12px] mt-[20px]'>
                <CiLocationOn className='bg-[#F0F8FA] text-black w-[24px] h-[24px] rounded-full p-1'/>
                <span className='ml-[12px]'>3768 Stratford Court, Raleigh NC 27604</span>
            </p>
            <p className='flex gap-1 items-center lg:mr-[18px] lg:text-[16px] mobile:text-[12px] mt-[20px]'>
                <CiPhone className='bg-[#F0F8FA] text-black w-[24px] h-[24px] rounded-full p-1'/>
                <span className='ml-[12px]'>+1 620-263-8162</span>
            </p>
            <p className='flex gap-1 items-center lg:mr-[18px] lg:text-[16px] mobile:text-[12px] mt-[20px]'>
                <CiMail className='bg-[#F0F8FA] text-black w-[24px] h-[24px] rounded-full p-1'/>
                <span className='ml-[12px]'>info@furnimart.com</span>
            </p>
        </div>
        <div className='lg:col-span-1 mobile:col-span-4'>
            <p className=' text-[20px]'>
            Product
            </p>
            <ul className='list-none'>
                <Link href="#"><li className='mb-[10px] mt-[10px]'>Overview</li></Link>
                <Link href="#"><li className='mb-[10px]'>Features</li></Link>
                <Link href="#"><li className='mb-[10px]'>Solutions</li></Link>
                <Link href="#"><li className='mb-[10px]'>Tutorials</li></Link>
                <Link href="#"><li className='mb-[10px]'>Pricing</li></Link>
                <Link href="#"><li>Releases</li></Link>
                
                
                
                
                
                
            </ul>
        </div>
        <div className='lg:col-span-1 mobile:col-span-4'>
            <p className=' text-[20px]'>
            Resources
            </p>
            <ul className='list-none'>
            <Link href="#"><li className='mb-[10px] mt-[10px]'>Blog</li></Link>
            <Link href="#"><li className='mb-[10px] mt-[10px]'>Newsletter</li></Link>
            <Link href="#"><li className='mb-[10px] mt-[10px]'>Events</li></Link>
            <Link href="#"><li className='mb-[10px] mt-[10px]'>Help centre</li></Link>
            <Link href="#"><li className='mb-[10px] mt-[10px]'>Support</li></Link>
            <Link href="#"><li className='mb-[10px] mt-[10px]'>Tutorials</li></Link>
                
            </ul>
        </div>
        <div className='lg:col-span-1 mobile:col-span-4'>
            <p className=' text-[20px]'>
            Social
            </p>
            <ul className='list-none'>
            <Link href="#"><li className='mb-[10px] mt-[10px]'>Twitter</li></Link>
            <Link href="#"><li className='mb-[10px] mt-[10px]'>LinkedIn</li></Link>
            <Link href="#"><li className='mb-[10px] mt-[10px]'>Facebook</li></Link>
            <Link href="#"><li className='mb-[10px] mt-[10px]'>GitHub</li></Link>
            <Link href="#"><li className='mb-[10px] mt-[10px]'>AngelList</li></Link>
            <Link href="#"><li className='mb-[10px] mt-[10px]'>Dribbble</li></Link>
                
            </ul>
        </div>
        <div className='lg:col-span-1 mobile:col-span-4'>
            <p className=' text-[20px]'>
            Legal
            </p>
            <ul className='list-none'>
            <Link href="#"><li className='mb-[10px] mt-[10px]'>Terms</li></Link>
            <Link href="#"><li className='mb-[10px] mt-[10px]'>Privacy</li></Link>
            <Link href="#"><li className='mb-[10px] mt-[10px]'>Cookies</li></Link>
            <Link href="#"><li className='mb-[10px] mt-[10px]'>Licenses</li></Link>
            <Link href="#"><li className='mb-[10px] mt-[10px]'>Settings</li></Link>
            <Link href="#"><li className='mb-[10px] mt-[10px]'>Contact</li></Link>
                
            </ul>
        </div>
        </div>
        <hr className='mt-[40px]  mx-auto '/>
        <div className='lg:flex justify-between  mt-[43px]'>
            <p>© 2022 Furniture Store LLC. All rights reserved.</p>
            <ul className='list-none text-white flex gap-4 lg:mt-0 mobile:mt-[20px]'>
                <li>
                    <Link href="#"><FaTwitter></FaTwitter></Link>
                </li>
                <li>
                    <Link href="#"><FaLinkedin></FaLinkedin></Link>
                </li>
                <li>
                    <Link href="#"><FaFacebookSquare></FaFacebookSquare></Link>
                </li>
                <li>
                    <Link href="#"><FaGithub></FaGithub></Link>
                </li>
                <li>
                    <Link href="#"><FaHandPeace></FaHandPeace></Link>
                </li>
                <li>
                    <Link href="#"><FaDribbble></FaDribbble></Link>
                </li>
            </ul>
        </div>
        </div>
    );
};

export default Footer;