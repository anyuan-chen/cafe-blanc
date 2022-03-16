/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import MobilePage from "../components/hours/mobile";
import { useMediaQuery } from "@mui/material";
import theme from "../styles/theme";
import Desktop from "../components/hours/desktop/desktop";

const Hours = () => {
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={{
        background: "#FFFAF4",
        width: "100vw",
        paddingTop: matches ? "" : "5vw",
      }}
    >
      <Navbar></Navbar>
      {!matches && <MobilePage></MobilePage>}
      {matches && <Desktop></Desktop>}
    </Box>
  );
};

export default Hours;
