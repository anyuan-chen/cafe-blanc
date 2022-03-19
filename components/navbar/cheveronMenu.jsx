import React from "react";
import Link from "../shared/link";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { ButtonUnstyled } from "@mui/base";
import { AnimatePresence, motion } from "framer-motion";
import SelectUnstyled from "@mui/base/SelectUnstyled";
const dropdownVariants = {
  rest: {
    height: "0",
  },
  animate: {
    height: "300px",
  },
};
const imgVariants = {
  rest: { transform: "" },

  animate: {
    transform: "rotate(180deg)",
  },
};
const linkVariants = {
  rest: { textDecoration: "none" },
  hovered: { textDecoration: "underline" },
};
export default function CheveronMenu() {
  const [active, setActive] = React.useState(false);
  return (
    <AnimatePresence>
      <Box
        component={motion.div}
        initial="rest"
        animate={active ? "animate" : "rest"}
      >
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
            width: "300px",
          }}
        >
          <Typography
            sx={{ fontSize: "3rem", color: "#532A10", fontWeight: 600 }}
          >
            Order Now
          </Typography>
          <Box component={motion.div} variants={imgVariants}>
            <motion.img src="/cafe_assets/Desktop/3.5px.svg"></motion.img>
          </Box>
        </Box>
        <Box
          component={motion.div}
          variants={dropdownVariants}
          sx={{ position: "absolute", overflow: "hidden" }}
        >
          <Box
            component={Link}
            noLinkStyle={true}
            href="https://www.doordash.com/store/cafe-white-coquitlam-1263432/"
          >
            <Box
              component={motion.div}
              initial="rest"
              animate="rest"
              whileHover="hovered"
              sx={{
                display: "flex",
                columnGap: "2rem",
                height: "98px",
                border: "2px solid #532A10",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#FFF1E1",
                width: "304px",
              }}
            >
              <img
                style={{ height: "40%" }}
                src="/cafe_assets/Desktop/Desktop Doordash  Logo.svg"
              ></img>
              <Typography
                sx={{ fontSize: "3rem", color: "#532A10", fontWeight: 600 }}
                component={motion.h3}
                variants={linkVariants}
              >
                DoorDash{" "}
              </Typography>
            </Box>
          </Box>

          <Box
            component={Link}
            noLinkStyle={true}
            href="https://www.ubereats.com/ca/store/cafe-blanc-ltd/jLOBcxrWTHuZ5JpIY_sFWw?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjglMjBDb3glMjBCbHZkJTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyNDQ3Y2RhNzktNjU4Yi1hNzA4LTI1Y2ItNjc5ZjM1OWVjN2UxJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMnViZXJfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0E0My44NTQ5OTMlMkMlMjJsb25naXR1ZGUlMjIlM0EtNzkuMzQ0MjI5JTdE"
          >
            <Box
              component={motion.div}
              initial="rest"
              animate="rest"
              whileHover="hovered"
              sx={{
                display: "flex",
                columnGap: "2rem",
                height: "98px",
                border: "2px solid #532A10",
                borderTop: "none",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#FFF1E1",
                width: "304px",
              }}
            >
              <img
                style={{ height: "40%" }}
                src="/cafe_assets/Desktop/Desktop UberEats  Logo.svg"
              ></img>
              <Typography
                sx={{ fontSize: "3rem", color: "#532A10", fontWeight: 600 }}
                component={motion.h3}
                variants={linkVariants}
              >
                UberEats{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </AnimatePresence>
  );
}
