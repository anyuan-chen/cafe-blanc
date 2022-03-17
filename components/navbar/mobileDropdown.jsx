import React from "react";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { Typography, useMediaQuery } from "@mui/material";
import Link from "../shared/link";
import MobileDropdownLink from "./mobileDropdownLink";
import theme from "../../styles/theme";

export default function MobileDropdown() {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        marginTop: matches ? "calc(100px + 8vh)" : "calc(100px + 4vh)",
        marginLeft: "7.5vw",
        marginRight: "7.5vw",
        marginBottom: "4vw",
      }}
    >
      <Box
        sx={{
          marginLeft: "7.5vw",
          marginRight: "7.5vw",
          display: "flex",
          flexDirection: "column",
          rowGap: matches ? "5vh" : "3vh",
          marginBottom: "4vh",
        }}
      >
        <MobileDropdownLink href="/">Home</MobileDropdownLink>
        <MobileDropdownLink href="/cafe_assets/mobileMenu.pdf">
          Menu
        </MobileDropdownLink>
        <MobileDropdownLink href="/hours">Hours</MobileDropdownLink>
        <MobileDropdownLink href="/faq">FAQ</MobileDropdownLink>
      </Box>
      <hr
        style={{
          backgroundColor: "#532A10",
          border: "none",
          height: "1px",
          width: "100%",
        }}
      ></hr>
      <Box
        sx={{
          marginLeft: "7.5vw",
          marginRight: "7.5vw",
          display: "flex",
          flexDirection: "column",
          rowGap: "3vh",
          marginBottom: "5vh",
          marginTop: "3vh",
        }}
      >
        <Box>
          <Typography
            variant="linkPageSubtitle"
            sx={{ fontWeight: "500", marginRight: "10vw", color: "#532A10" }}
          >
            Order On
          </Typography>
          <img src="/cafe_assets/Mobile/Mobile Arrow Icon.svg"></img>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            component={Link}
            target="_blank"
            href="https://www.doordash.com/store/cafe-white-coquitlam-1263432/"
            sx={{
              borderRadius: "100%",
              bgcolor: "white",
              height: "14rem",
              width: "14rem",
              border: "2px solid #532A10",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "4px 4px 0 #532A10",
            }}
          >
            <img
              src="/cafe_assets/Mobile/Mobile Doordash logo.svg"
              height="40px"
            ></img>
          </Box>
          <Box
            component={Link}
            target="_blank"
            href="https://www.ubereats.com/ca/store/cafe-blanc-ltd/jLOBcxrWTHuZ5JpIY_sFWw?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjglMjBDb3glMjBCbHZkJTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyNDQ3Y2RhNzktNjU4Yi1hNzA4LTI1Y2ItNjc5ZjM1OWVjN2UxJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMnViZXJfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0E0My44NTQ5OTMlMkMlMjJsb25naXR1ZGUlMjIlM0EtNzkuMzQ0MjI5JTdE"
            sx={{
              borderRadius: "100%",
              bgcolor: "white",
              height: "14rem",
              width: "14rem",
              border: "2px solid #532A10",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "4px 4px 0 #532A10",
            }}
          >
            <img
              src="/cafe_assets/Mobile/Mobile Uber Eats logo.svg"
              height="48px"
            ></img>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
