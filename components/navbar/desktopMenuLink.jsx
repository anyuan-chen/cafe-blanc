import React from "react";
import Link from "../shared/link";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
const animationVariants = {
  rest: {
    textDecoration: "none",
  },
  animate: {
    textDecoration: "underline",
  },
};
export default function DesktopMenuLink({ href, children, highlight }) {
  return (
    <AnimatePresence>
      <Box
        component={motion.div}
        initial="rest"
        animate="rest"
        whileHover={highlight ? "" : "animate"}
      >
        <Box
          component={highlight ? motion.div : Link}
          href={href}
          sx={{
            textDecoration: "none",
            background: highlight ? "#E7DDD3" : "",
            height: highlight ? "100%" : "",
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderLeft: "2px solid #532A10",
              px: "6rem",
            }}
            component={motion.div}
          >
            <Typography
              sx={{
                fontSize: "3rem",
                color: "#532A10",
                fontFamily: "DMSans",
                fontWeight:"500",
              }}
              component={motion.h2}
              variants={animationVariants}
            >
              {children}
            </Typography>
          </Box>
        </Box>
      </Box>
    </AnimatePresence>
  );
}
