/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import Navbar from "../components/navbar/navbar";
import { useMediaQuery } from "@mui/material";
import theme from "../styles/theme";
import MobilePage from "../components/hours/mobile";
const Hours = () => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        background: "#FFFAF4",
        width: "100vw",
        paddingTop: "5vw",
      }}
    >
      <Navbar></Navbar>
      {!matches && <MobilePage></MobilePage>}
    </Box>
  );
};

export default Hours;
