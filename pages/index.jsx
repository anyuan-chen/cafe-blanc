/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";

const Home = () => {
  return (
    <Box
      sx={{
        background: "#FFFAF4",
        width: "100vw",
        paddingTop: "5vw",
        paddingBottom: "10vw",
      }}
    >
      <Navbar></Navbar>
      <Box
        sx={{
          width: "90vw",
          marginX: "5vw",
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          rowGap: "4vh",
          marginTop: "7vw",
        }}
      >
        <Typography variant="largeTagline" sx={{ color: "#532A10" }}>
          Made with <span style={{ fontStyle: "italic" }}>compassion.</span>
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "repeat(16, 1fr)",
            columnGap: "4rem",
            marginX: "5vw",
          }}
        >
          <Box // cafe blanc offers comforting
            sx={{
              gridRow: "1/5",
              paddingTop: "21px",
              paddingLeft: "20px",
              paddingRight: "14px",
              paddingBottom: "17px",
              textAlign: "left",
              borderRadius: "16px",
              border: "1px solid #532A10",
            }}
          >
            <Typography variant="homeTextItalics" sx={{ color: "#532A10" }}>
              Café Blanc offers comforting and delicious coffee experiences in
              Coquitlam.{" "}
            </Typography>
          </Box>
          <Box //decorative coffee
            sx={{
              gridRow: "1/1",
              gridColumn: "2/3",
              display: "flex",
              columnGap: "1rem",
              alignItems: "start",
            }}
          >
            <img src="/cafe_assets/Mobile/Mobile Decorative Coffee.svg"></img>
            <hr
              style={{
                width: "auto",
                height: "1px",
                flexGrow: "1",
                border: "none",
                backgroundColor: "#532A10",
              }}
            ></hr>
          </Box>
          <Box //coffee picture
            sx={{
              gridRow: "2/6",
              gridColumn: "2/3",
              borderRadius: "16px",
              border: "1px solid #532A10",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                transform: "scale(1.05)",
              }}
              alt="cake"
              src="/cafe_assets/Mobile/Mobile IMG 1 Coffee.png"
            ></img>
          </Box>
          <Box //cake picture
            sx={{
              gridRow: "6/10",
              gridColumn: "1/2",
              borderRadius: "16px",
              border: "1px solid #532A10",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                transform: "scale(1.05)",
              }}
              alt="cake"
              src="/cafe_assets/Mobile/Mobile IMG 2 Cake.png"
            ></img>
          </Box>
          <Box //copyright
            sx={{
              gridRow: "6/7",
              gridColumn: "2/3",
              display: "flex",
              columnGap: "1rem",
              alignItems: "flex-end",
            }}
          >
            <Typography
              sx={{ fontFamily: "DMSans", fontSize: "10px", color: "#532A10" }}
            >
              © 2022
            </Typography>
            <hr
              style={{
                width: "auto",
                height: "1px",
                flexGrow: "1",
                border: "none",
                backgroundColor: "#532A10",
              }}
            ></hr>
          </Box>
          <Box //handcraft treats
            sx={{
              gridRow: "7/10",
              gridColumn: "2/3",
              textAlign: "left",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="body" sx={{ color: "#532A10" }}>
              We handcraft treats like fresh cake, perfect pairings for our
              delicious drinks.
            </Typography>
          </Box>
          <Box //coffee picture
            sx={{
              gridRow: "11/17",
              gridColumn: "1/3",
              borderRadius: "16px",
              border: "1px solid #532A10",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                transform: "scale(1.05)",
              }}
              alt="cake"
              src="/cafe_assets/Mobile/Mobile IMG 3 Making Coffee.png"
            ></img>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
