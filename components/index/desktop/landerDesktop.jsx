import React from "react";
import LayoutDesktop from "./layoutDesktop";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
export default function LanderDesktop() {
  return (
    <LayoutDesktop>
      <Box
        sx={{
          marginX: "15vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#532A10",
        }}
      >
        <Typography variant="largeTagline">
          Made with <span style={{ fontStyle: "italic" }}>compassion.</span>
        </Typography>
        {/* <Box sx={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>
          <Box
            sx={{
              gridColumn: "1/2",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box // cafe blanc offers comforting
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                paddingX: "18px",
                paddingY: "30px",
                borderRadius: "16px",
                border: "1px solid #532A10",
              }}
            >
              <Typography variant="homeTextItalics" sx={{ color: "#532A10" }}>
                Café Blanc offers comforting and delicious coffee experiences in
                Coquitlam.{" "}
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}> </Box>
            <Box //cake picture
              sx={{
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
                src="/cafe_assets/Desktop/Desktop IMG 2 Cake.png"
              ></img>
            </Box>
          </Box>
          <Box sx={{ gridColumn: "2/6", display: "grid" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
            >
              <img src="cafe_assets/Desktop/Desktop Beans.svg"></img>
              <hr
                style={{
                  border: "none",
                  height: "1px",
                  flexGrow: 1,
                  backgroundColor: "#532A10",
                }}
              ></hr>
              <Box sx={{ width: "80px"}}></Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
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
                  src="/cafe_assets/Desktop/Desktop IMG 1 Coffee Pitcher.png"
                ></img>
              </Box>
              <Box sx={{ flexGrow: 1 }}></Box>
              <Box
                sx={{
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
                  src="/cafe_assets/Desktop/Desktop IMG 3 Hand.png"
                ></img>
              </Box>
              <Box sx={{ flexGrow: 1 }}></Box>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
            ></Box>
            <Box
              sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
            >
              <Typography variant="homeTextNormal">
                Our specialties are wonderful treats like fresh cake, perfect
                pairings for our delicious drinks.
              </Typography>
            </Box>
          </Box>
        </Box> */}
      </Box>
    </LayoutDesktop>
  );
}
