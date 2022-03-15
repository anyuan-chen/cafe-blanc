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
        marginTop: "7vw",
        paddingBottom: "5vh",
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        rowGap: "4vh",
        alignItems: "center",
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
    </Box>
  );
};
export default Visit;
