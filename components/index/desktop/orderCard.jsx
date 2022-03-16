import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Link from "../../shared/link";

export default function OrderCard({ src, href, children, logoSrc }) {
  return (
    <>
      <Box
        sx={{
          width: "18vw",
          border: "2px solid #532A10",
          padding: "4rem",
          display: "flex",
          justifyContent: "center"
        }}
      >
          
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "4rem",
            justifyContent: "center",
          }}
        >
          
          <Box sx={{ paddingX: "4rem", paddingY: "8rem", bgcolor: "#532A10" }}>
            <img src={src} style={{ maxWidth: "100%" }}></img>
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
              sx={{ color: "#532A10" }}
              href={href}
              variant="link"
            >
              {children}
            </Typography>
            <img
              src="cafe_assets/Mobile/Mobile Arrow Icon.svg"
              height="20px"
            ></img>
          </Box>
        </Box>
        
      </Box>
      
    </>
  );
}
