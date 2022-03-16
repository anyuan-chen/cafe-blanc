/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const FeaturedItem = ({ description, src, children }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        border: "2px solid #532A10",
        background: "#FFFAF4",
        boxShadow: "6px 6px 0 #532A10",
        borderRadius: "16px",
      }}
    >
      <Box
        sx={{
          gridColumn: "1/3",
          paddingY: "15px",
          paddingX: "15px",
          borderRadius: "16px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            borderRadius: "16px",
            height: "auto",
          }}
        >
          <img
            src={src}
            style={{
              transform: "scale(1.05)",
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "16px",
              border: "1px solid #532A10",
            }}
          ></img>
        </Box>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "grid",
          gridColumn: "3/8",
          gridTemplateRows: "repeat(5, 1fr)",
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            borderBottom: "1px solid #532A10",
            borderLeft: "1px solid #532A10",
            gridRow: "1/3",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="questionHeading"
            sx={{
              fontFamily: "RoxboroughCF",
              color: "#532A10",
              marginX: "4rem",
            }}
          >
            {children}
          </Typography>
        </Box>
        <Box
          sx={{
            borderLeft: "1px solid #532A10",
            paddingX: "30px",
            gridRow: "3/6",

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
