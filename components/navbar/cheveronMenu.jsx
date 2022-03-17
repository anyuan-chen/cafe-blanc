import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { MenuItemUnstyled, MenuUnstyled } from "@mui/base";
import { Typography } from "@mui/material";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          height: "100%",
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
      </Button>
      <MenuUnstyled
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItemUnstyled sx={{ width: "100%", bottom: "-200px" }} onClick={handleClose}>
          Profile
        </MenuItemUnstyled>
      </MenuUnstyled>
    </div>
  );
}
// import React from "react";
// import Link from "../shared/link";
// import { Box } from "@mui/system";
// import { Typography } from "@mui/material";
// import { ButtonUnstyled } from "@mui/base";
// import { AnimatePresence, motion } from "framer-motion";
// import SelectUnstyled from "@mui/base/SelectUnstyled";

// export default function CheveronMenu() {
//   const [active, setActive] = React.useState(false);
//   return (
//     <AnimatePresence>
//       <Box
//         component={SelectUnstyled}
//         onClick={() => {
//           setActive(!active);
//         }}
//         sx={{
//           height: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           columnGap: "2rem",
//           borderLeft: "2px solid #532A10",
//           bgcolor: "#F5E4D7",
//           px: "8rem",
//         }}
//       >
//         <Typography
//           sx={{ fontSize: "3rem", color: "#532A10", fontWeight: 600 }}
//         >
//           Order Now
//         </Typography>
//         <img src="/cafe_assets/Desktop/Desktop Cheveron.svg"></img>
//       </Box>
//     </AnimatePresence>
//   );
// }
