import { Box } from "@mui/material";
import React from "react";

export default function LayoutDesktop({ children }) {
  return (
    <Box sx={{ height: "calc(100vh - 100px)", width: "100vw" }}>{children}</Box>
  );
}
