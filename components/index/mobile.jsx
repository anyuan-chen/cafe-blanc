import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import Lander from "./lander";
import CTA from "./cta";
import About from "./about";
import FeaturedItems from "./featuredItems"
const MobilePage = () => {
  return (
    <Box
      sx={{
        background: "#FFFAF4",
        width: "100vw",
        paddingTop: "5vw",
        paddingBottom: "10vw",
      }}
    >
      <Lander></Lander>
      <CTA></CTA>
      <About></About>
      <FeaturedItems></FeaturedItems>
    </Box>
  );
};
export default MobilePage;
