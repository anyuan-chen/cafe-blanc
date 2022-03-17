import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import LinkCard from "../index/linkCard";
import { useMediaQuery } from "@mui/material";
import theme from "../../styles/theme";
import LanderTablet from "./landerTablet";
import LanderMobile from "./landerMobile";
const Lander = () => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const statement = matches ? "width : '40vh'" : "";
  return matches ? (
    <LanderTablet></LanderTablet>
  ) : (
    <LanderMobile></LanderMobile>
  );
};
export default Lander;
