import { Box } from "@mui/system";
import Contact from "../index/contact";
import Visit from "../index/visit";
import DateTable from "./dateTable";
import SpecialHours from "./specialHours";

const MobilePage = () => {
  return (
    <Box
      sx={{
        background: "#FFFAF4",
        width: "100vw",
        paddingTop: "5vw",
      }}
    >
      <DateTable></DateTable>
      <SpecialHours></SpecialHours>
      <Visit></Visit>
      <Contact></Contact>
    </Box>
  );
};
export default MobilePage;
