/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import { useMediaQuery } from "@mui/material";
import theme from "../styles/theme";
import CTA from "../components/index/cta";
import OrderNow from "../components/index/desktop/orderNow";
import { Box } from "@mui/system";

const Home = () => {
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
      {matches && (
        <Box sx={{paddingTop: "5rem"}}>
          <OrderNow></OrderNow>
        </Box>
      )}
      {!matches && (
        <Box>
          <CTA></CTA>
        </Box>
      )}
    </Box>
  );
};

export default Home;
