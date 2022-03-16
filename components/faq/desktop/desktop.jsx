import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Contact from "../../index/desktop/contact";
import Question from "../question";
const MobilePage = () => {
  return (
    <Box
      sx={{
        background: "#FFFAF4",
        paddingTop: "5vw",
      }}
    >
      <Box sx={{ marginX: "15vw", marginBottom: "2rem", color: "#532A10" }}>
        <Typography variant="h3">Frequently Asked Questions</Typography>
      </Box>
      <Box sx={{ marginX: "15vw", marginBottom: "15rem", color: "#532A10" }}>
        <Question description="Yes! All drinks can be made iced free of charge. Simply let a barista know or make a note on the ordering website.">
          Do you offer ice?
        </Question>
        <Question description="Yes! All drinks can be made iced free of charge. Simply let a barista know or make a note on the ordering website.">
          Do you offer ice?
        </Question>
        <Question description="Yes! All drinks can be made iced free of charge. Simply let a barista know or make a note on the ordering website.">
          Do you offer ice?
        </Question>
        <Question description="Yes! All drinks can be made iced free of charge. Simply let a barista know or make a note on the ordering website.">
          Do you offer ice?
        </Question>
        <Question description="Yes! All drinks can be made iced free of charge. Simply let a barista know or make a note on the ordering website.">
          Do you offer ice?
        </Question>
        <Question description="Yes! All drinks can be made iced free of charge. Simply let a barista know or make a note on the ordering website.">
          Do you offer ice?
        </Question>
      </Box>
      <Contact></Contact>
    </Box>
  );
};
export default MobilePage;
