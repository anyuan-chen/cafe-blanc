import { Box, Typography } from "@mui/material";
import React from "react";

export default function LanderTablet() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "70vw",
          marginX: "5vw",
          marginTop: "4vw",
          paddingBottom: "5vh",
          color: "#532A10",
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          rowGap: "4rem",
        }}
      >
        <Typography
          sx={{ marginBottom: "4vw" }}
          variant="largeTagline"
        >
          Made with <span style={{ fontStyle: "italic" }}>compassion.</span>
        </Typography>
        <Box
          sx={{
            width: "100%",
            border: "1px solid #532A10",
            paddingY: "2rem",
            paddingX: "10%",
            borderRadius: "16px",
          }}
        >
          <Typography variant="homeTextItalics">
            Café Blanc offers comforting and delicious coffee experiences in
            Coquitlam.{" "}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", columnGap: "4rem" }}>
          <img src="cafe_assets/Desktop/Desktop Beans.svg"></img>
          <hr
            style={{
              width: "auto",
              height: "1px",
              flexGrow: "1",
              border: "none",
              alignSelf: "center",
              backgroundColor: "#532A10",
            }}
          ></hr>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "2rem",
          }}
        ></Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "8rem",
            marginTop: "-4rem",
          }}
        >
          <Box //coffee picture
            sx={{
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
          <Box //coffee picture
            sx={{
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
        </Box>
        <Box>
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
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="body">
            Our specialties are handcrafted treats like fresh cake, perfect
            pairings for our delicious drinks.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
