import React from "react";
import LayoutDesktop from "./layoutDesktop";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import LinkCard from "../linkCard";
export default function OrderNow() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "5vh",
          marginX: "5vw",
        }}
      >
        <Box sx={{ display: "flex", columnGap: "50px", alignItems: "center" }}>
          <Typography variant="caption">ORDER NOW</Typography>
          <hr
            style={{
              backgroundColor: "#532A10",
              marginLeft: "0",
              marginRight: "0",
              border: "none",
              height: "2px",
              flexGrow: 1,
              width: "100px",
            }}
          ></hr>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", columnGap: "3vw" }}>
          <Box
            sx={{
              width: "27vw",
              display: "flex",
              flexDirection: "column",
              rowGap: "5vh",
              paddingX: "3vw",
              paddingY: "5vh",
              border: "2px solid brown",
            }}
          >
            <Typography variant="h3">
              Craving something <span fontStyle="italic">delicious</span>
            </Typography>
            <Typography variant="body">
              Order on DoorDash, UberEats, or visit us in-person
            </Typography>
          </Box>
          <Box sx={{ width: "18vw", border: "2px solid brown" }}>
           
             
          </Box>
          <Box sx={{ width: "18vw", border: "2px solid brown" }}>
            
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
