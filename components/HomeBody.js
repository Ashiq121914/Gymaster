import Link from "next/link";
import React from "react";
import HomeCategory from "./HomeCategory";
import HomeNav from "./HomeNav";
import HomeSlider from "./HomeSlider";


const HomeBody = () => {
  return (
    <div className="h-[200vh]">
      <HomeNav></HomeNav>
      <HomeSlider></HomeSlider>
      <HomeCategory></HomeCategory>
    </div>
  );
};

export default HomeBody;
