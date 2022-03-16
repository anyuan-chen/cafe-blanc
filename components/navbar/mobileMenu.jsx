import { Box } from "@mui/system";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import Link from "../shared/link";
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginX: "4rem",
      }}
    >
      <Link href="/">
        <img
          src="cafe_assets/Mobile/Mobile Logo Sign.svg"
          height="56px"
          style={{ position: "relative", top: "-5px", overflowY: "hidden" }}
        ></img>
      </Link>
      <Button sx={{ display: "flex", height: "100%" }}>
        <motion.div
          onClick={() => {
            setClicked(!clicked);
          }}
          variants={iconVariants}
          animate={clicked ? "closed" : "open"}
          style={{
            color: "#532A10",
            fontFamily: "Anicons Regular",
            fontSize: "6rem",
            alignSelf: "center",
          }}
        >
          A
        </motion.div>
      </Button>
    </Box>
  );
}
//https://github.com/framer/motion/issues/930
