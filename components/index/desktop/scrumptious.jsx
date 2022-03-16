import React from "react";
import LayoutDesktop from "./layoutDesktop";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
export default function Scrumptious() {
  return (
    <Box
      sx={{
        marginX: "15vw",
        display: "flex",
        height: "calc(100vh - 100px)",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "20rem",
          color: "#532A10",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "4rem" }}>
          <Typography variant="h2">
            <span style={{ fontStyle: "italic" }}>Scrumptious</span> food and
            drink for all
          </Typography>
          <hr
            style={{
              border: "none",
              height: "1px",
              background: "#532A10",
              width: "100%",
            }}
          ></hr>
          <Typography variant="body">
            From the very beginning, Café Blanc has been committed to service
            and quality. Our coffee and desserts are made in-house daily with
            organic, locally sourced, and fresh ingredients.
          </Typography>
        </Box>
        <Box sx={{  display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            style={{ width: "100%" }}
            src="/cafe_assets/Desktop/Desktop Scrumptious Image.png"
          ></img>
        </Box>
      </Box>
    </Box>
  );
}