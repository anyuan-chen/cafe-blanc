import { Box } from "@mui/material";
import React from "react";
import Contact from "../../index/desktop/contact";
import Visit from "../../index/desktop/visit";
import SpecialHoursAndTable from "./specialhoursandtable";

export default function Desktop() {
  return (
    <Box >
      <SpecialHoursAndTable></SpecialHoursAndTable>
      <Visit></Visit>
      <Contact></Contact>
    </Box>
  );
}
