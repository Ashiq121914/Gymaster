import Link from "next/link";
import React from "react";

import HomeCategory from "./HomeCategory";
import HomeNav from "./HomeNav";
import HomeSlider from "./HomeSlider";

import { blogs } from "@/components/BlogData";
import Blogs from "./Blogs";


const HomeBody = () => {
    console.log(blogs)
  return (
    <div className="h-full">
      <HomeNav></HomeNav>
      <HomeSlider></HomeSlider>
      <HomeCategory></HomeCategory>
      <Blogs></Blogs>

    </div>
  );
};

export default HomeBody;
