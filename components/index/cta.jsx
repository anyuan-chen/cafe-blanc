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
        paddingBottom: "10vh",
        background: "#FFF1E1",
      }}
    >
      <Box
        sx={{
          marginX: "5vw",
          display: "flex",
          flexDirection: "column",
          justifyItems: matches ? "center" : "",
          rowGap: "8vh",
        }}
      >
        <Box
          sx={{
            marginX: "15vw",
            border: "1px solid #532A10",
            paddingY: "2vh",
            textAlign: "center",

            borderRadius: "16px",
          }}
        >
          <Typography variant="h3" sx={{ color: "#532A10" }}>
            Craving something{" "}
            <span style={{ fontStyle: "italic" }}>delicious?</span>
          </Typography>
        </Box>
        <Box sx={{ marginLeft: "15vw" }}>
          <LinkCard
            src="/cafe_assets/Mobile/Mobile Doordash Art.svg"
            href="https://www.doordash.com/store/cafe-white-coquitlam-1263432/"
            logoSrc="/cafe_assets/Mobile/Mobile Doordash logo.svg"
          >
            DoorDash
          </LinkCard>
        </Box>
        <Box sx={{ marginLeft: "15vw", marginTop: matches ? "" : "-15vw" }}>
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
  );
};
export default CTA;
