import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import Lander from "./lander";
import CTA from "./cta";
import About from "./about";
import FeaturedItems from "./featuredItems";
import Visit from "./visit";
import Contact from "./contact";
import Scrumptious from "./desktop/scrumptious";
import theme from "../../styles/theme";
const MobilePage = () => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        background: "#FFFAF4",
        width: "100vw",
        paddingTop: "5vw",
      }}
    >
      <Lander></Lander>
      <CTA></CTA>
      {matches && <Scrumptious></Scrumptious>}
      {!matches && <About></About>}
      <FeaturedItems></FeaturedItems>
      <Visit></Visit>
      <Contact></Contact>
    </Box>
  );
};
export default MobilePage;
