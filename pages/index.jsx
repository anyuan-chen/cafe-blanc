/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import MobilePage from "../components/index/mobile";
import { useMediaQuery } from "@mui/material";
import theme from "../styles/theme";
import DesktopPage from "../components/index/desktop/desktopPage";

const Home = () => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
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
      {matches && <DesktopPage></DesktopPage>}
    </Box>
  );
};

export default Home;
