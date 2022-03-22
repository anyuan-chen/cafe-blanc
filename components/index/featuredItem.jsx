/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/system";
import { Typography, useMediaQuery } from "@mui/material";
import theme from "../../styles/theme";

const FeaturedItem = ({ description, src, children }) => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        display: "flex",
        border: "2px solid #532A10",
        height: "170px",
        background: "#FFFAF4",
        boxShadow: matches ? "6px 6px 0 #532A10" : "4px 4px 0 #532A10"  ,
        borderRadius: "16px",
      }}
    >
      <Box
        sx={{
          paddingY: "15px",
          paddingX: "15px",
          borderRadius: "16px",
          width: "50%"
        }}
      >
        <Box
          sx={{
            border: "1px solid #532A10",
            overflow: "hidden",
            borderRadius: "16px",
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        >
          <img
            src={src}
            height="100%"
            style={{
              transform: "scale(1.05)",
              height: "auto",
              width: "90px"
            }}
          ></img>
        </Box>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            borderBottom: "1px solid #532A10",
            borderLeft: "1px solid #532A10",
            paddingY: "2rem",
            textAlign: "center",
          }}
        >
          <Typography
            variant="questionHeading"
            sx={{ fontFamily: "RoxboroughCF", color: "#532A10" }}
          >
            {children}
          </Typography>
        </Box>
        <Box
          sx={{
            borderLeft: "1px solid #532A10",
            flexGrow: 1,
            paddingX: "30px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="homeTextItalics" sx={{ color: "#532A10" }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default FeaturedItem;
