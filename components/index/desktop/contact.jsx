import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import LinkCard from "../../index/linkCard";
import FeaturedItem from "./featuredItem";
import Link from "../../shared/link";
import ContactLink from "./contactLink";
const Contact = () => {
  return (
    <Box
      sx={{
        height: "50vh",
        paddingTop: "5vh",
        background: "#FFF1E1",
        borderTop: "1px solid #532A10",
        color: "#532A10",
        background: "#FFF1E1",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(13, 1fr)",
          marginX: "10vw",
        }}
      >
        <Box
          sx={{
            gridColumn: "1/4",
            display: "flex",
            flexDirection: "column",
            rowGap: "3rem",
          }}
        >
          <img
            src="cafe_assets/Desktop/Desktop Outlined Logo.svg"
            width="30%"
          ></img>
          <Typography variant="bottomNavHeading">Café Blanc</Typography>
          <Typography variant="homeTextItalics" sx={{ color: "#73421E" }}>
            Scrumptious food & drink for all.
          </Typography>
        </Box>
        <Box
          sx={{
            gridColumn: "5/14",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            borderLeft: "1px solid #532A10",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              rowGap: "2rem",
              borderRight: "1px solid #532A10",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
                rowGap: "5rem",
                width: "60%",
              }}
            >
              <Typography variant="bottomNavSubtitle">CONTACT</Typography>
              <Typography variant="bottomNavText" sx={{ color: "#73421E" }}>
                (778) 717-6281
              </Typography>
              <ContactLink href="mailto:info@cafeblanc.ca">
                info@cafeblanc.ca
              </ContactLink>
              <ContactLink href="https://www.google.com/maps/place/Caf%C3%A9+Blanc/@49.2446666,-122.8942055,17z/data=!3m1!4b1!4m5!3m4!1s0x54867968dd176965:0x72353c815baf7e8c!8m2!3d49.2447565!4d-122.892018">
                341 North Rd Unit E, Coquitlam, BC V3K 3V8
              </ContactLink>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              rowGap: "2rem",
              borderRight: "1px solid #532A10",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
                rowGap: "5rem",
                width: "60%",
              }}
            >
              <Typography variant="bottomNavSubtitle">BROWSE</Typography>
              <ContactLink href="/">Home</ContactLink>
              <ContactLink href="/cafe_assets/cafe_blanc_menu.pdf">
                Menu
              </ContactLink> 
              <ContactLink href="/hours">Hours</ContactLink>
              <ContactLink href="/faq">FAQ</ContactLink>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              rowGap: "2rem",
              borderRight: "1px solid #532A10",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "5rem",
                marginTop: "2rem",
                width: "60%",
              }}
            >
              <Typography variant="bottomNavSubtitle">LINKS</Typography>
              <ContactLink href="https://www.instagram.com/cafeblanccoffee/?hl=en">
                Instagram
              </ContactLink>
              <ContactLink href="https://www.ubereats.com/ca/store/cafe-blanc-ltd/jLOBcxrWTHuZ5JpIY_sFWw">
                UberEats
              </ContactLink>
              <ContactLink href="https://www.doordash.com/store/cafe-white-coquitlam-1263432/">
                Doordash
              </ContactLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Contact;
