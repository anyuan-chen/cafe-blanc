/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Link from "../shared/link";
const LinkCard = ({ src, href, logoSrc, children }) => {
  return (
    <>
      <Box
        sx={{
          width: "60vw",
          height: "75vw",
          boxShadow: "4px 4px 0 #532A10",
          border: "2px solid #532A10",
          background: "white",
          display: "flex",
          rowGap: "5vw",
          flexDirection: "column",
          padding: "5vw",
        }}
      >
        <Box
          sx={{
            bgcolor: "#532A10",
            width: "50vw",
            height: "50vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={src} style={{ height: "40vw" }}></img>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            component={Link}
            href={href}
            variant="link"
            sx={{
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
            style={{ marginRight: "5vw" }}
            alt="arrow"
          ></img>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          left: "45vw",
          bottom: "85vw",
          bgcolor: "white",
          height: "100px",
          width: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "100%",
          border: "2px solid #532A10",
          boxShadow: "5px 5px 3px #532A10",
        }}
      >
        <img src={logoSrc} alt="logo" width="50px"></img>
      </Box>
    </>
  );
};
export default LinkCard;
