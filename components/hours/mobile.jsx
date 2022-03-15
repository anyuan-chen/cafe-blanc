import { Box } from "@mui/system";
import DateTable from "./dateTable"

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
    </Box>
  );
};
export default MobilePage;
