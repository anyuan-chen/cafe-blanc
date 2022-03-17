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
          boxShadow: "8px 8px 0 #532A10",
          display: "flex",
          justifyContent: "center",
        }}
        component={Link}
        href={href}
        target="_blank"
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
              sx={{
                color: "#532A10",
                fontWeight: "500",
                textUnderlineOffset: "2px",
                textDecorationColor: "#E89465",
              }}
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
