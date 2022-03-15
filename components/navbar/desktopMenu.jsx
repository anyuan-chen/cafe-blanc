import Link from "../shared/link";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
export default function DesktopMenu() {
  return (
    <Box sx={{ display: "flex" }}>
      <Link href="/">
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderLeft: "4px solid #532A10",
            px: "6rem",
          }}
        >
          <Typography
            sx={{ fontSize: "3rem", color: "#532A10", fontFamily: "DMSans" }}
          >
            Home
          </Typography>
        </Box>
      </Link>
      <Link href="/menu">
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderLeft: "4px solid #532A10",
            px: "6rem",
          }}
        >
          <Typography sx={{ fontSize: "3rem", color: "#532A10" }}>
            Menu
          </Typography>
        </Box>
      </Link>
      <Link href="/hours">
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderLeft: "4px solid #532A10",
            px: "6rem",
          }}
        >
          <Typography sx={{ fontSize: "3rem", color: "#532A10" }}>
            Hours
          </Typography>
        </Box>
      </Link>
      <Link href="/faq">
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderLeft: "4px solid #532A10",
            px: "6rem",
          }}
        >
          <Typography sx={{ fontSize: "3rem", color: "#532A10" }}>
            FAQ
          </Typography>
        </Box>
      </Link>

      <Link href="/order">
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderLeft: "4px solid #532A10",
            bgcolor: "#F5E4D7",
            px: "5rem",
          }}
        >
          <Typography
            sx={{ fontSize: "3rem", color: "#532A10", fontWeight: 600 }}
          >
            Order Now
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}
