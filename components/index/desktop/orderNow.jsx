import React from "react";
import LayoutDesktop from "./layoutDesktop";
import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import OrderCard from "./orderCard";
import theme from "../../../styles/theme";
export default function OrderNow() {
  const matches = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <Box sx={{  color: "#532A10" }}>
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
        <Box
          sx={{
            display: "flex",
            columnGap: "3vw",
            marginY: "15vh",
          }}
        >
          <Box
            sx={{
              width: "27vw",
              display: "flex",
              flexDirection: "column",
              rowGap: "5vh",
              paddingX: "3vw",
              color: "#532A10",
              paddingY: "5vh",
              borderRadius: "16px",
              border: "2px solid #532A10",
            }}
          >
            <Typography variant={matches ? "h3" : "bottomNavHeading"}>
              Craving something{" "}
              <span style={{ fontStyle: "italic" }}> delicious? </span>
            </Typography>
            <Typography variant="body">
              Order on DoorDash, UberEats, or visit us in-person
            </Typography>
          </Box>
          <OrderCard
            src="/cafe_assets/Mobile/Mobile Doordash Art.svg"
            href="https://www.doordash.com/store/cafe-white-coquitlam-1263432/"
            logoSrc="/cafe_assets/Mobile/Mobile Doordash logo.svg"
          >
            DoorDash
          </OrderCard>
          <OrderCard
            src="/cafe_assets/Mobile/Mobile UberEatsArt.svg"
            href="https://www.ubereats.com/ca/store/cafe-blanc-ltd/jLOBcxrWTHuZ5JpIY_sFWw"
            logoSrc="/cafe_assets/Mobile/Mobile Uber Eats logo.svg"
          >
            UberEats
          </OrderCard>
        </Box>
      </Box>
    </Box>
  );
}
