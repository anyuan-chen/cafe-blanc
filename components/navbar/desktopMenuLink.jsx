import React from "react";
import Link from "../shared/link";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function DesktopMenuLink({ href, children, highlight }) {
  return (
    <Link
      href={href}
      sx={{ textDecoration: "none", background: highlight ? "#E7DDD3" : "" }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderLeft: "2px solid #532A10",
          px: "6rem",
        }}
      >
        <Typography
          sx={{ fontSize: "3rem", color: "#532A10", fontFamily: "DMSans" }}
        >
          {children}
        </Typography>
      </Box>
    </Link>
  );
}
