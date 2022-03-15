import { Box } from "@mui/system";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
const iconVariants = {
  open: {
    fontVariationSettings: `"TIME" 100`,
  },
  closed: {
    fontVariationSettings: `"TIME" 1`,
  },
};

export default function MobileMenu({ clicked, setClicked }) {
  return (
    <>
      <Button sx={{ display: "flex", alignItems: "center", height: "100%" }}>
        <motion.div
          onClick={() => {
            setClicked(!clicked);
          }}
          variants={iconVariants}
          animate={clicked ? "closed" : "open"}
          style={{
            color: "#532A10",
            fontFamily: "Anicons Regular",
            fontSize: "3rem",
          }}
        >
          A
        </motion.div>
      </Button>
    </>
  );
}
//https://github.com/framer/motion/issues/930
