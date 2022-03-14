import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import theme from "../../styles/theme";
import DropdownSign from "./dropdownSign";

const Navbar = () => {
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={{
        height: matches ? "100px" : "60px",
        bgcolor: "background.beige.100",
        width: matches ? "100vw" : "0px",
      }}
    >
      <DropdownSign></DropdownSign>
    </Box>
  );
};

export default Navbar;
