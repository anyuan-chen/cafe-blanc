import React from "react";
import { Box, Typography } from "@mui/material";

export default function SpecialDates() {
  return (
    <Box
      sx={{
        width: "90vw",
        marginX: "5vw",
        marginTop: "7vw",
        paddingBottom: "2vh",
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        rowGap: "4vh",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "3vh",
          color: "#532A10",
          bgcolor: "#FFF1E1",
          paddingX: "15vw",
          paddingY: "3vh",
          borderRadius: "16px",
        }}
      >
        <Typography variant="h3">Special Dates</Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body">Labor Day | Idk when</Typography>
          <Typography variant="body">Labor Day | Idk when</Typography>
          <Typography variant="body">Labor Day | Idk when</Typography>
          <Typography variant="body">Labor Day | Idk when</Typography>
          <Typography variant="body">Labor Day | Idk when</Typography>
          <Typography variant="body">Labor Day | Idk when</Typography>
          <Typography variant="body">Labor Day | Idk when</Typography>
        </Box>
      </Box>
    </Box>
  );
}
