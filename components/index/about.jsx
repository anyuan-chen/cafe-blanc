import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import LinkCard from "../index/linkCard";
const About = () => {
  return (
    <Box
      sx={{
        width: "90vw",
        marginX: "5vw",
        marginTop: "7vw",
        paddingBottom: "5vh",
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        rowGap: "4vh",
      }}
    >
      <Typography>
        <span style={{ fontStyle: "italic" }}>Scrumptious</span> food and drink
        for <span style={{ fontStyle: "italic" }}>all</span>
      </Typography>
    </Box>
  );
};
export default About;
