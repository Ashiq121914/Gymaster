
import React from "react";

import HomeCategory from "./HomeCategory";

import HomeSlider from "./HomeSlider";
import Blogs from "./Blogs";
import NavbarHome from "./NavbarHome";


const Home = () => {
    
  return (
    <div className="h-full">
      <NavbarHome></NavbarHome>
      <HomeSlider></HomeSlider>
      <HomeCategory></HomeCategory>
      <Blogs></Blogs>

    </div>
  );
};

export default Home;
