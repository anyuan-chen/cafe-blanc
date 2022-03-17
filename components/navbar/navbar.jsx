import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import theme from "../../styles/theme";
import DesktopMenu from "./desktopMenu";
import DropdownSign from "./dropdownSign";
import Link from "../shared/link";
import { motion } from "framer-motion";
import { useState } from "react";
import MobileMenu from "./mobileMenu";
import { Typography } from "@mui/material";
import MobileDropdown from "./mobileDropdown";

const dropdownVariants = {
  open: {
    height: "100vh",
  },
  closed: {
    height: 0,
  },
};

const Navbar = () => {
  const [clicked, setClicked] = useState(true);
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      <Box
        sx={{
          height: matches ? "100px" : "80px",
          bgcolor: "background.beige.100",
          width: matches ? "100vw" : "90vw",
          display: matches ? "flex" : "",
          justifyContent: "space-between",
          borderBottom: matches ? "2px solid #532A10" : "",
          marginX: matches ? "" : "5vw",
          border: matches ? "" : "4px solid #532A10",
          boxShadow: matches ? "" : "3px 3px 0 #532A10",
          position: "sticky",
          top: matches ? "0" : "5vw",
          zIndex: "10",
        }}
      >
        {matches ? <DropdownSign></DropdownSign> : <></>}
        {matches ? (
          <DesktopMenu></DesktopMenu>
        ) : (
          <MobileMenu clicked={clicked} setClicked={setClicked}></MobileMenu>
        )}
      </Box>
      {!matches && (
        <Box
          component={motion.div}
          variants={dropdownVariants}
          animate={clicked ? "closed" : "open"}
          initial="closed"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: "2",
            width: "100vw",
            height: "100vh",
            filter: "none",
            overflowY: "hidden",
            bgcolor: "#F5E4D7",
          }}
        >
          <MobileDropdown></MobileDropdown>
        </Box>
      )}
    </>
  );
};

export default Navbar;
