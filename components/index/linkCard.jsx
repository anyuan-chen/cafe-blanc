/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Link from "../shared/link";
import { useMediaQuery } from "@mui/material";
import theme from "../../styles/theme";
const LinkCard = ({ src, href, logoSrc, children }) => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Box
        component={Link}
        href={href}
        sx={{
          width: matches ? "30vw" : "60vw",
          height: matches ? "50rem" : "75vw",
          boxShadow: matches ? "10px 10px 0 #532A10" : "6px 6px 0 #532A10",
          border: "2px solid #532A10",
          background: "white",
          display: "flex",
          alignItems: "center",
          rowGap: matches ? "2rem" : "5vw",
          flexDirection: "column",
          padding: matches ? "3rem" : "5vw",
        }}
      >
        <Box
          sx={{
            bgcolor: "#532A10",
            width: matches ? "25.5vw" : "50vw",
            height: matches ? "36rem" : "50vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={src} style={{ height: matches ? "50%" : "40vw" }}></img>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="link"
            sx={{
              textDecoration: "underline",
              color: "brown",
              fontWeight: 500,
              textDecorationColor: "#E89465",
              textDecorationThickness: "2px",
              textDecorationOffset: "2px",
            }}
          >
            {children}
          </Typography>
          <img
            src="cafe_assets/Mobile/Mobile Arrow Icon.svg"
            height="20px"
            style={{ marginRight: matches ? "2rem" : "5vw" }}
            alt="arrow"
          ></img>
        </Box>
      </Box>
      {!matches && (
        <Box
          sx={{
            position: "relative",
            left: matches ? "10rem" : "45vw",
            bottom: matches ? "12rem" : "85vw",
            bgcolor: "white",
            height: "100px",
            width: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",
            border: "2px solid #532A10",
            boxShadow: matches ? "8px 7px 0 #532A10" : "3px 3px 0 #532A10",
          }}
        >
          <img src={logoSrc} alt="logo" width="50px"></img>
        </Box>
      )}
    </>
  );
};
export default LinkCard;
