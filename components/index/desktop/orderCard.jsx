import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Link from "../../shared/link";
import { AnimatePresence, motion } from "framer-motion";
const shadowVariants = {
  rest: {
    boxShadow: "8px 8px 0 #532A10",
  },
  animate: {
    boxShadow: "12px 12px 0 #532A10",
    transform: "translate(-4px, -4px)",
  },
};
const textVariants = {     
  rest: {
    textDecoration: "underline",
    textDecorationColor: "#FFFAF4",
  },
  animate: {
    textUnderlineOffset: "2px",
    textDecorationColor: "#E89465",
  },
};
export default function OrderCard({ src, href, children, logoSrc }) {
  return (
    <AnimatePresence>
      <Box
        sx={{
          width: "18vw",
          border: "2px solid #532A10",
          padding: "4rem",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
        component={motion.div}
        initial="rest"
        animate="rest"
        whileHover="animate"
        variants={shadowVariants}
      >
        <Box component={Link} noLinkStyle={true} href={href} target="_blank">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "4rem",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{ paddingX: "4rem", paddingY: "8rem", bgcolor: "#532A10" }}
            >
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
                component={motion.h2}
                variants={textVariants}
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
      </Box>
    </AnimatePresence>
  );
}
