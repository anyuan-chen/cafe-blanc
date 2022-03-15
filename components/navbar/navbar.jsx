import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import theme from "../../styles/theme";
import DesktopMenu from "./desktopMenu";
import DropdownSign from "./dropdownSign";
import { motion } from "framer-motion";
import { useState } from "react";
import MobileMenu from "./mobileMenu";
import { Typography } from "@mui/material";

const dropdownVariants = {
  open: {
    height: "100vh",
  },
  closed: {
    height: 0,
  },
};

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
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
          borderBottom: matches ? "4px solid #532A10" : "",
          margin: matches ? "" : "5vw",
          border: matches ? "" : "4px solid #532A10",
          boxShadow: matches ? "" : "6px 6px 0 #532A10",
          position: "relative",
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
          sx={{
            position: "absolute",
            zIndex: "2",
            top: "0",
            width: "100vw",
            filter: "none",
            overflowY: "hidden",
            bgcolor: "#F5E4D7",
          }}
        >
          <Box
            sx={{
              marginTop: "calc(100px + 5vw)",
              marginLeft: "5vw",
              marginRight: "5vw",
              marginBottom: "5vw",
            }}
          >
            <Typography variant="largeLink" sx={{textDecoration: "underline"}}> Home</Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Navbar;
