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
        <Typography variant="h3">Closed Dates</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "2rem" }}>
          <Typography variant="body">Good Friday | April 15th, 2022</Typography>
          <Typography variant="body">Victoria Day | May 20th, 2022</Typography>
          <Typography variant="body">Canada Day | July 1st, 2022</Typography>
          <Typography variant="body">
            British Columbia Day | August 1st, 2022
          </Typography>
          <Typography variant="body">
            Labour Day | September 5th, 2022
          </Typography>
          <Typography variant="body">
            Christmas Day | December 25th, 2022
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
