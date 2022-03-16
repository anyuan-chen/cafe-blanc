import React from "react";
import FeaturedItems from "./featuredItems";
import LanderDesktop from "./landerDesktop";
import OrderNow from "./orderNow";
import Scrumptious from "./scrumptious";
export default function DesktopPage() {
  return (
    <div>
      <LanderDesktop></LanderDesktop>
      <OrderNow></OrderNow>
      <Scrumptious></Scrumptious>
      <FeaturedItems></FeaturedItems>
    </div>
  );
}
