import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const FeaturedItem = ({ description, src, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        border: "2px solid #532A10",
        height: "170px",
        background: "#FFFAF4",
        boxShadow: "2px 2px 0 #532A10",
        borderRadius: "16px",
      }}
    >
      <Box sx={{ paddingY: "15px", paddingX: "15px" }}>
        <img
          src={src}
          style={{ border: "2px solid #532A10", transform: "scale(1.1)" }}
        ></img>
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
            borderBottom: "2px solid #532A10",
            borderLeft: "2px solid #532A10",
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
            borderLeft: "2px solid #532A10",
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
