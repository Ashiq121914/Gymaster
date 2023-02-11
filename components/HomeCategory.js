import React from "react";
import IgImg1 from "../assets/Rectangle 4.png";
import IgImg2 from "../assets/Rectangle 4 (1).png";
import IgImg3 from "../assets/Rectangle 4 (2).png";
import { FaArrowUp } from "react-icons/fa";

import InstagramImg from "./InstagramImg";
import Link from "next/link";

function HomeCategory() {
  return (
    <div className="max-w-[1240px] mx-auto py-24">
      <div className="flex justify-between">
      <p className="text-2xl font-bold">ক্যাটাগোরি সমূহ</p>
      <Link href="#">
      <p className="pb-4 flex">
      <span>আরও দেখুন</span>
      <FaArrowUp className="rotate-45"></FaArrowUp>
      </p>
      </Link>
      </div>
      <div className="grid grid-cols-3 gap-2 py-4">
        <InstagramImg socialImg={IgImg1} name="জিমের সরঞ্জাম"/>
        <InstagramImg socialImg={IgImg2} name="জিমের পোশাক"/>
        <InstagramImg socialImg={IgImg3} name="সাপ্লিমেন্টস"/>

      </div>
    </div>
  );
}

export default HomeCategory;
