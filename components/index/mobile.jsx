import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import Lander from "./lander"
import CTA from "./cta"
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
    </Box>
  );
};
export default MobilePage;
