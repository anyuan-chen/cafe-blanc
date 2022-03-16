import React from "react";
import LayoutDesktop from "./layoutDesktop";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
export default function Scrumptious() {
  return (
    <LayoutDesktop>
      <Box
        sx={{
          paddingY: "15vh",
          maxHeight: "100%",
          display: "flex",
          columnGap: "2rem",
        }}
      >
        <Box sx={{}}>
          <Typography>Scrumptious food and drink for all</Typography>
          <hr></hr>
          <Typography>
            From the very beginning, Café Blanc has been committed to service
            and quality. Our coffee and desserts are made in-house daily with
            organic, locally sourced, and fresh ingredients.
          </Typography>
        </Box>
        <img
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          src="/cafe_assets/Desktop/Desktop Scrumptious Image.png"
        ></img>
      </Box>
    </LayoutDesktop>
  );
}
