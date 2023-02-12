import Image from "next/image";
import React, { useState } from "react";
import img from "../assets/Hero.jpg";
import img1 from "../assets/Hero2.jpg";
import img2 from "../assets/Hero3.jpg";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

const HomeSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      id: 1,
      image: img,
      header: "ব্যায়াম করুন, সুস্থ থাকুন",
      para: "সকল প্রোডাক্টের উপর ৩০% ছাড়!",
    },
    {
      id: 2,
      image: img1,
      header: "ব্যায়াম করুন, সুস্থ থাকুন",
      para: "সকল প্রোডাক্টের উপর 8০% ছাড়!",
    },
    {
      id: 3,
      image: img2,
      header: "ব্যায়াম করুন, সুস্থ থাকুন",
      para: "সকল প্রোডাক্টের উপর 5০% ছাড়!",
    },
  ];

  const handleNext = () => {
    if (activeIndex === items.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(items.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    
      <div className="relative w-full  h-[538px]">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/30 " />
        <Image
          src={items[activeIndex].image}
          className="w-full h-full object-cover"
          alt=""
          width={1440}
          height={538}
        />

        <div className=" flex items-center justify-between px-4 py-6 ]">
          <div className="text-white absolute bottom-[30%] left-[10%] ">
            <h3 className="text-[40px] text-[#3E084C] font-bold mb-[24px]">{items[activeIndex].header}</h3>
            <p className="text-[24px] text-[#222222] mb-[30px]">{items[activeIndex].para}</p>
            <button className="bg-[#3E084C] text-white px-[40px] py-[16px] rounded-xl">ক্লিক করুন</button>
          </div>

         <div className="absolute bottom-0  right-0">
         <div className="flex ">
            <button
              className=" px-4 py-2  bg-[#3E084C]  text-white"
              onClick={handlePrev}
            >
              <FaArrowLeft></FaArrowLeft>
            </button>
            <button
              className=" ml-1 px-4 py-2  bg-[#3E084C] text-white"
              onClick={handleNext}
            >
             <FaArrowRight></FaArrowRight>
            </button>
          </div>
         </div>
        </div>
      </div>
    
  );
};

export default HomeSlider;
