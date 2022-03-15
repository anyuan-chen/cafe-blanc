import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import LinkCard from "../index/linkCard";
const Visit = () => {
  return (
    <Box
      sx={{
        width: "90vw",
        marginX: "5vw",
        marginTop: "5vh",
        paddingBottom: "5vh",
        display: "flex",
        flexDirection: "column",
        rowGap: "4vh",
      }}
    >
      <hr
        style={{
          height: 1,
          width: "100%",
          border: "none",
          backgroundColor: "#532A10",
        }}
      ></hr>
      <Typography variant="caption" sx={{ color: "#532A10" }}>
        {"visit us at 341 North Rd Unit E".toUpperCase()}
      </Typography>
    </Box>
  );
};
export default Visit;
