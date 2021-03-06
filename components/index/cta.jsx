import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../styles/theme";
import LinkCard from "../index/linkCard";

const CTA = () => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        marginTop: "5vh",
        paddingTop: "10vh",
        paddingBottom: "15vh",
        background: "#FFF1E1",
      }}
    >
      <Box
        sx={{
          marginX: "5vw",
          display: "flex",
          flexDirection: "column",
          justifyItems: matches ? "center" : "",
          rowGap: matches ? "8vh" : "12vh",
        }}
      >
        <Box
          sx={{
            marginX: "15vw",
            border: matches ? "" : "1px solid #532A10",
            paddingY: "2vh",
            textAlign: "center",
            borderRadius: "16px",
          }}
        >
          <Typography variant={matches ? "h2" : "h3"} sx={{ color: "#532A10" }}>
            Craving something{" "}
            <span style={{ fontStyle: "italic" }}>delicious?</span>
          </Typography>
        </Box>
        <Box
          sx={{
            display: matches ? "flex" : "",
            justifyContent: "space-evenly",
          }}
        >
          <Box sx={{ marginLeft: matches ? "" : "15vw" }}>
            <LinkCard
              src="/cafe_assets/Mobile/Mobile Doordash Art.svg"
              href="https://www.doordash.com/store/cafe-white-coquitlam-1263432/"
              logoSrc="/cafe_assets/Mobile/Mobile Doordash logo.svg"
            >
              DoorDash
            </LinkCard>
          </Box>
          <Box
            sx={{
              marginLeft: matches ? "" : "15vw",
            }}
          >
            <LinkCard
              src="/cafe_assets/Mobile/Mobile UberEatsArt.svg"
              href="https://www.ubereats.com/ca/store/cafe-blanc-ltd/jLOBcxrWTHuZ5JpIY_sFWw"
              logoSrc="/cafe_assets/Mobile/Mobile Uber Eats logo.svg"
            >
              UberEats
            </LinkCard>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default CTA;
