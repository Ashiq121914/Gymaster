import React from "react";
import MidSearchNav from "./MidSearchNav";
import TopBanner from "./TopBanner";

function SharedTopNavs(props) {
  return <div>
    <TopBanner></TopBanner>
    <MidSearchNav></MidSearchNav>
  </div>;
}

export default SharedTopNavs;
