import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import LinkCard from "../index/linkCard";
import FeaturedItem from "../index/featuredItem";
import Link from "../shared/link";
const Contact = () => {
  return (
    <Box
      sx={{
        background: "#FFF1E1",
        paddingTop: "5vh",
        borderTop: "2px solid #532A10",
        paddingBottom: "10vh",
      }}
    >
      <Box
        sx={{
          marginX: "10vw",
          display: "flex",
          flexDirection: "column",
          rowGap: "3vh",
          color: "#532A10",
        }}
      >
        <Typography variant="bottomNavSubtitle" sx={{ paddingBottom: "2vh" }}>
          CONTACT
        </Typography>
        <Typography variant="bottomNavText">(778) 717-6281</Typography>
        <Typography variant="bottomNavText">Instagram</Typography>
        <Typography variant="bottomNavText">info@cafeblanc.ca</Typography>
        <Typography
          variant="bottomNavText"
          sx={{ textDecoration: "underline" }}
        >
          341 North Rd Unit E, Coquitlam, BC V3K 3V8
        </Typography>
        <hr
          style={{
            height: 1,
            width: "100%",
            border: "none",
            backgroundColor: "#532A10",
          }}
        ></hr>{" "}
        <Box
          sx={{ display: "flex", alignItems: "center", columnGap: "1.5rem" }}
        >
          <img src="cafe_assets/Mobile/Mobile Outlined Logo.svg"></img>
          <Typography variant="bottomNavHeading">Café Blanc</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Contact;
