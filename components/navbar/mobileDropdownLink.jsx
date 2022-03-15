import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Link from "../shared/link";

export default function MobileDropdownLink({ href, children }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant="largeLink"
        as={Link}
        href={href}
        sx={{ textDecoration: "underline", color: "#532A10" }}
      >
        {children}
      </Typography>
      <img src="icons/menu_arrow.svg"></img>
    </Box>
  );
}
