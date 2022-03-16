import React from "react";
import FeaturedItems from "./featuredItems";
import LanderDesktop from "./landerDesktop";
import OrderNow from "./orderNow";
import Scrumptious from "./scrumptious";
import Visit from "./visit";
import Contact from "./contact";
export default function DesktopPage() {
  return (
    <div>
      <LanderDesktop></LanderDesktop>
      <OrderNow></OrderNow>
      <Scrumptious></Scrumptious>
      <FeaturedItems></FeaturedItems>
      <Visit></Visit>
      <Contact></Contact>
    </div>
  );
}
