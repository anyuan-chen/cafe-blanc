import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import LinkCard from "../../index/linkCard";
import FeaturedItem from "./featuredItem";
import Link from "../../shared/link";
const Visit = () => {
  return (
    <Box sx={{ height: "calc(100vh - 100px)" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          marginX: "10vw",
          rowGap: "10vh",
          paddingTop: "10vh",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", columnGap: "8rem" }}>
          <Typography variant="caption" sx={{ color: "#532A10" }}>
            {"visit us at 341 North Rd Unit E".toUpperCase()}
          </Typography>
          <hr
            style={{
              height: 1,
              flexGrow: 1,
              border: "none",
              marginLeft: 0,
              marginRight: 0,
              backgroundColor: "#532A10",
            }}
          ></hr>
        </Box>
        <iframe
          width="100%"
          height="70%"
          style={{ border: "0" }}
          loading="lazy"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.6739791695777!2d-122.89420548415232!3d49.244670081383916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867968dd176965%3A0x72353c815baf7e8c!2sCaf%C3%A9%20Blanc!5e0!3m2!1sen!2sca!4v1647385793198!5m2!1sen!2sca`}
        ></iframe>
      </Box>
    </Box>
  );
};
export default Visit;
