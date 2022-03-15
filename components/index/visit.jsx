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
      <iframe
        width="100%"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.6739791695777!2d-122.89420548415232!3d49.244670081383916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867968dd176965%3A0x72353c815baf7e8c!2sCaf%C3%A9%20Blanc!5e0!3m2!1sen!2sca!4v1647385793198!5m2!1sen!2sca`}
      ></iframe>
    </Box>
  );
};
export default Visit;
