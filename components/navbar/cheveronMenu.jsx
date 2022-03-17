import React from "react";
import Link from "../shared/link";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { ButtonUnstyled } from "@mui/base";
import { AnimatePresence, motion } from "framer-motion";
import SelectUnstyled from "@mui/base/SelectUnstyled";
const dropdownVariants={
    
}
export default function CheveronMenu() {
  const [active, setActive] = React.useState(false);
  return (
    <AnimatePresence>
      <Box>
        <Box
          component={ButtonUnstyled}
          onClick={() => {
            setActive(!active);
          }}
          sx={{
            height: "98px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "2rem",
            borderLeft: "2px solid #532A10",
            bgcolor: "#F5E4D7",
            px: "8rem",
          }}
        >
          <Typography
            sx={{ fontSize: "3rem", color: "#532A10", fontWeight: 600 }}
          >
            Order Now
          </Typography>
          <img src="/cafe_assets/Desktop/Desktop Cheveron.svg"></img>
        </Box>
        <Box component={motion.div} variants={dropdownVariants} sx={{ position: "absolute", overflow: "hidden" }}>
          <Box
            component={ButtonUnstyled}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "2rem",
              height: "98px",
              border: "2px solid #532A10",
              bgcolor: "#F5E4D7",
              px: "8rem",
            }}
          >
            <Typography
              sx={{ fontSize: "3rem", color: "#532A10", fontWeight: 600 }}
            >
              Order Now
            </Typography>
            <img src="/cafe_assets/Desktop/Desktop Cheveron.svg"></img>
          </Box>
        </Box>
      </Box>
    </AnimatePresence>
  );
}
