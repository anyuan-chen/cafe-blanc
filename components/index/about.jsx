import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import theme from "../../styles/theme";
import LinkCard from "../index/linkCard";
const About = () => {
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Box
      sx={{
        width: "90vw",
        marginX: "5vw",
        paddingTop: "5vh",
        marginTop: "5vw",
        paddingBottom: "7vh",
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        rowGap: "4vh",
        alignItems: "center",
      }}
    >
      <img
        src="cafe_assets/Mobile/Mobile Scrumptious Picture.png"
        width= {matches ? "30%": "60%"}
      ></img>
      <Typography variant="h2" sx={{ color: "#532A10" }}>
        <span style={{ fontStyle: "italic" }}>Scrumptious</span> food and drink
        for <span style={{ fontStyle: "italic" }}>all</span>
      </Typography>
      <hr
        style={{
          height: 1,
          width: "100%",
          border: "none",
          backgroundColor: "#532A10",
        }}
      ></hr>
      <Typography variant="body" sx={{ color: "#532A10" }}>
        From the very beginning, Café Blanc has been committed to service and
        quality. Our coffee and desserts are made in-house daily with organic,
        locally sourced, and fresh ingredients.
      </Typography>
    </Box>
  );
};
export default About;
