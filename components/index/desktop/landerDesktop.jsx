import React from "react";
import LayoutDesktop from "./layoutDesktop";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../../styles/theme";
import { useMediaQuery } from "@mui/material";
export default function LanderDesktop() {
  const matches = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <Box sx={{ height: "calc(100vh - 100px)", width: "100vw", display: "flex" }}>
      <Box
        sx={{
          marginX: "7.5vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#532A10",
          marginTop: "10rem",
        }}
      >
        <Typography variant="largeTagline">
          Made with <span style={{ fontStyle: "italic" }}>compassion.</span>
        </Typography>
        <Box
          sx={{
            marginX: "7.5vw",
            display: "grid",
            marginTop: "7rem",
            gridTemplateColumns: "repeat(5,1fr)",
            columnGap: "4rem",
          }}
        >
          <Box
            sx={{
              gridColumn: "1/2",
              display: "flex",
              flexDirection: "column",
              rowGap: "6rem",
            }}
          >
            <Box // cafe blanc offers comforting
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                paddingX: "18px",
                paddingY: "40px",
                borderRadius: "16px",
                flexGrow: 1,
                border: "1px solid #532A10",
              }}
            >
              <Typography variant="homeTextItalics" sx={{ color: "#532A10" }}>
                Café Blanc offers comforting and delicious coffee experiences in
                Coquitlam.{" "}
              </Typography>
            </Box>
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
            <Box sx={{ display: "flex", columnGap: "4rem" }}>
              <img
                src="cafe_assets/Desktop/Desktop Beans.svg"
                style={{ alignSelf: "flex-start" }}
              ></img>
              <hr
                style={{
                  border: "none",
                  height: "1px",
                  backgroundColor: "#532A10",
                  flexGrow: 1,
                  margin: "none",
                  marginTop: "15px",
                }}
              ></hr>
              <Box sx={{ width: "0px" }}></Box>
            </Box>
            <Box sx={{ display: "flex", columnGap: "2rem" }}>
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
              {matches && (
                <Typography variant="homeTextNormal">
                  Try wonderful treats like cake, perfectly paired with
                  handcrafted beverages.
                </Typography>
              )}
              {!matches && (
                <Typography variant="homeTextNormal">
                  Try wonderful treats like cake paired with
                  handcrafted beverages.
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
