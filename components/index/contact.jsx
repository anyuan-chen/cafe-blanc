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
        paddingTop: "7vh",
        borderTop: "2px solid #532A10",
        paddingBottom: "7vh",
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
        <Typography variant="bottomNavText">
          <Link href="https://www.instagram.com/cafeblanccoffee/?hl=en">
            Instagram
          </Link>
        </Typography>
        <Typography variant="bottomNavText">
          <Link href="mailto:info@cafeblanc.ca">Email</Link>
        </Typography>
        <Typography variant="bottomNavText">
          <Link href="mailto:info@cafeblanc.ca">
            {" "}
            341 North Rd Unit E, Coquitlam, BC V3K 3V8
          </Link>
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
          component={Link}
          href="/"
        >
          <img src="cafe_assets/Mobile/Mobile Outlined Logo.svg"></img>
          <Typography variant="bottomNavHeading">Café Blanc</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Contact;
